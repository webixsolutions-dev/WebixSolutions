# 06 — Booking system (calendar, not a form)

Goal: the visitor picks a date and a time slot, fills 4 fields, and the meeting is booked with a Google Meet link — no back-and-forth. Free to run. Google Calendar is the admin view; no separate dashboard is needed at launch.

## User flow
1. **Choose meeting type** (pill toggle, default first):
   - Strategy call — 30 min (default)
   - Quick intro — 15 min
   - Partner call (agencies) — 45 min
2. **Choose a date** — desktop: month calendar (react-day-picker via shadcn Calendar), days without free slots disabled; mobile: horizontal week strip (7 days, swipe for next week).
3. **Choose a time** — list of slot buttons in the **visitor's time zone** (auto-detected with `Intl.DateTimeFormat().resolvedOptions().timeZone`, changeable via a searchable select). Show the time-zone label above the list.
4. **Your details** — Name*, Email*, WhatsApp/phone (optional, with country code), Company website (optional), What do you need help with? (chips from the service registry, multi-select), Monthly budget (optional select: <$500, $500–1,500, $1,500–5,000, $5,000+), Notes (optional). Cloudflare Turnstile + hidden honeypot.
5. **Confirm** → server re-checks the slot is still free → creates the event → success screen: "You're booked", date/time in their zone, Google Meet link, "Add to calendar" (.ics download + Google link), "What to prepare" list, WhatsApp button.

Every step keeps the previous choices visible as a summary bar (type · date · time) with "change" links. Back button works (URL query state: `?type=strategy&date=2026-11-03&slot=…`).

## Availability rules (all in `config/booking.ts`)
```ts
export const booking = {
  hostTimeZone: "Asia/Karachi",
  // Two shifts. Times are host-local (PKT). [CONFIRM with Haroon]
  // 10:00–13:00 PKT  = 9 AM–12 PM Dubai
  // 21:00–23:59 PKT  = 11 AM–2 PM Toronto (winter) / 8–11 AM Los Angeles
  // 00:00–02:00 PKT  = 2–4 PM Toronto (winter) / 8–10 AM Auckland (summer)
  weeklyHours: {
    mon: [["10:00","13:00"], ["21:00","23:59"]],
    tue: [["00:00","02:00"], ["10:00","13:00"], ["21:00","23:59"]],
    wed: [["00:00","02:00"], ["10:00","13:00"], ["21:00","23:59"]],
    thu: [["00:00","02:00"], ["10:00","13:00"], ["21:00","23:59"]],
    fri: [["00:00","02:00"], ["10:00","12:00"], ["21:00","23:59"]],
    sat: [["00:00","02:00"]],   // = Friday afternoon in North America
    sun: [],
  },
  slotStepMinutes: 30,
  bufferMinutes: 15,          // before and after each meeting
  minNoticeHours: 12,
  maxDaysAhead: 30,
  maxPerDay: 6,
  blackoutDates: [],          // e.g. Eid holidays
  calendarId: process.env.GOOGLE_CALENDAR_ID, // the calendar that holds bookings + busy time
};
```
Free/busy also respects anything already in Haroon's Google Calendar, so personal blocks remove slots automatically.

## Backend (Next.js route handlers, Node runtime)
- `GET /api/booking/slots?type=strategy&from=2026-11-01&to=2026-11-07&tz=America/Toronto`
  → builds candidate slots from `weeklyHours`, removes past/min-notice slots, calls Google Calendar **freeBusy** for the range, removes overlaps (+ buffers), returns ISO start times (UTC) plus formatted labels for `tz`. Cache 60 s.
- `POST /api/booking/book` → validate with zod, verify Turnstile token, rate-limit (5/hour/IP), re-check freeBusy for that exact slot, then **events.insert** with:
  - `summary`: "Strategy call — {name} ({company})"
  - `description`: all form answers + source page + UTM params
  - `attendees`: [visitor email]
  - `conferenceData.createRequest` (Google Meet), `conferenceDataVersion=1`
  - `sendUpdates: "all"` → Google emails the invite to the visitor and handles reschedule/cancel from the invite
  - `reminders`: email 24 h, popup 30 min
- Returns event id, Meet link, start/end.
- `GET /api/booking/next-slot` → the first open strategy slot (used by the hero Growth Console). Cached 10 min, rendered on the server with ISR so the slot appears in the HTML.
- Optional: POST the booking to the internal Webix Ops CRM webhook (`CRM_WEBHOOK_URL`) and send a WhatsApp/email notification to the team.

Auth to Google: OAuth refresh token for the Webix Google account that owns the calendar (Meet links are created most reliably as a real user; a service account needs Workspace domain-wide delegation for Meet). Store `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`, `GOOGLE_CALENDAR_ID`, `TURNSTILE_SECRET_KEY` as environment secrets — never in the repo or in rules files.

Emails: Google Calendar's invite is the confirmation. Optional branded confirmation via Resend free tier (`RESEND_API_KEY`).

## Analytics events
`booking_open`, `booking_type_selected`, `booking_date_selected`, `booking_slot_selected`, `booking_submitted`, `booking_confirmed` → GA4 + Meta Pixel (`Schedule` standard event) + Microsoft Clarity tag. Pass UTM/source into the event description.

## Components
- `<BookingWidget variant="full" />` on `/book-a-call/`.
- `<BookingWidget variant="compact" />` inside the final CTA section of home, offers, service pages (date strip + first 6 slots; choosing a slot opens the details step in a sheet/dialog).
- Accessible: everything reachable by keyboard, slots are buttons with `aria-pressed`, live region announces "3:30 PM selected".
- No-JS fallback: the page shows the email/WhatsApp contact options and the next open slot as text.

## Admin
Launch: Google Calendar (phone app) is the dashboard. Later, if needed: `/admin/bookings` behind password auth listing upcoming bookings from the Calendar API — no database required.

## Tests (must pass before launch)
- Slot generation across DST changes (America/Toronto in March/November, Pacific/Auckland in April/September).
- Double-booking race: two requests for the same slot → second gets "That time was just taken — pick another".
- Visitor in Asia/Dubai, America/Los_Angeles, Pacific/Auckland, Asia/Karachi sees correct local labels.
- Turnstile failure, Google API failure (show WhatsApp/email fallback, log error).
