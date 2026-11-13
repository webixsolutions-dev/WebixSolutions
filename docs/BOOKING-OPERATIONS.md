# Booking operations: database, emails, reminders and pipeline

## What happens to a booking

1. A visitor picks a date and time. The slot is reserved in Neon (`reserve_webix_booking`), so two visitors can never take the same time.
2. After the response, the site emails the visitor a confirmation with a calendar file, and emails the team a notice.
   - With `BOOKING_MEETING_URL` set, the booking is confirmed straight away and the email carries that link.
   - Without it, the booking waits as **Booked**. Open `/admin/bookings/`, paste the meeting link and press "Save link and send confirmation".
3. Visitor reminders go out 24 hours and 1 hour before the call. A booking made less than 25 hours ahead skips the 24-hour reminder, and one made less than 2 hours ahead skips the 1-hour reminder.
4. Two hours after a call ends, the team gets "How did the call go?" if the stage is still Booked or Confirmed.
5. Staff move the booking through the pipeline. Moving to a stage sets the next follow-up date: Call done +2 days, No-show +1 day, Proposal sent +3 days. When the date passes the team gets a "Follow up due" email.

## Pipeline stages

Booked → Confirmed → Call done → Proposal sent → Won or Lost. No-show and Cancelled are side exits. Cancelling frees the time slot.

## Setup checklist

| Step | Where |
|---|---|
| Run `db/001-bookings.sql` then `db/002-pipeline.sql` | Neon SQL editor (already applied to the production project) |
| `BOOKING_DATABASE_URL`, `BOOKING_ADMIN_PASSWORD` | Vercel environment variables |
| `RESEND_API_KEY`, `BOOKING_FROM_EMAIL` | Vercel environment variables; verify the sending domain in Resend |
| `BOOKING_NOTIFY_EMAIL` (optional) | Vercel environment variables |
| `BOOKING_MEETING_URL` (optional) | Vercel environment variables |
| `CRON_SECRET` (24+ characters) | Vercel environment variables **and** GitHub secret `CRON_SECRET` |
| `SITE_URL` (for example `https://webixsolutions.com`) | GitHub secret `SITE_URL` |

`.github/workflows/booking-reminders.yml` calls `POST /api/booking/reminders` every 15 minutes with `Authorization: Bearer <CRON_SECRET>`. You can also run it by hand from the Actions tab.

Without `RESEND_API_KEY` nothing is emailed. The booking still saves, and the dashboard timeline shows "email skipped"; emails that were skipped are retried by the next reminder run or by pressing "Resend the confirmation email".

## Google Calendar

Not connected yet. When it is, each booking gets its own Google Meet link and the calendar's busy time is blocked on the site. See `docs/BOOKING-SETUP.md`.
