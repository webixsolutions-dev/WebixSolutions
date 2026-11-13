"use client";

import * as React from "react";
import { useEffect, useId, useMemo, useRef, useState, type FormEvent } from "react";
import Script from "next/script";
import { CalendarDays, Check, ChevronLeft, ChevronRight, Globe } from "lucide-react";
import { BOOKING_CONFIG } from "@/config/booking";
import { getPublishedServices } from "@/content/services";
import { SITE_FACTS } from "@/content/site-facts";
import { COMMON_TIMEZONES } from "./timezone-select";
import { downloadIcsFile, generateIcsContent } from "./ics-generator";
import type { FormattedSlot } from "@/lib/booking/slot-engine";

interface Turnstile {
  render(element: HTMLElement, options: {
    sitekey: string; action: string; callback: (token: string) => void;
    "expired-callback": () => void; "error-callback": () => void; theme: "dark";
  }): string;
  reset(id: string): void;
  remove(id: string): void;
}

type MeetingType = "strategy" | "intro" | "partner";
type Reservation = { eventId: string; startIso: string; endIso: string };
const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const services = getPublishedServices().map(({ slug, shortName }) => ({ slug, shortName }));

function labelDay(date: string, options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("en", { ...options, timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}

export function BookingWidget({
  defaultMeetingType = "strategy", sourcePage = "Direct", className = "",
}: {
  variant?: "full" | "compact";
  defaultMeetingType?: MeetingType;
  sourcePage?: string;
  className?: string;
}) {
  const baseId = useId();
  const [type, setType] = useState<MeetingType>(defaultMeetingType);
  const [timezone, setTimezone] = useState(BOOKING_CONFIG.hostTimeZone);
  const [slots, setSlots] = useState<FormattedSlot[]>([]);
  const [date, setDate] = useState("");
  const [monthKey, setMonthKey] = useState<string | null>(null);
  const [periodKey, setPeriodKey] = useState<"AM" | "PM" | null>(null);
  const [hourKey, setHourKey] = useState<number | null>(null);
  const [selected, setSelected] = useState<FormattedSlot | null>(null);
  const [reserved, setReserved] = useState<Reservation | null>(null);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);
  const [requestOnly, setRequestOnly] = useState(false);
  const [zoneOpen, setZoneOpen] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(0);
  const [token, setToken] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const turnstileElement = useRef<HTMLDivElement>(null);
  const turnstileId = useRef<string | null>(null);
  const detailsTitle = useRef<HTMLHeadingElement>(null);
  const requestId = useRef<string | null>(null);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (zone) setTimezone(zone);
      const queryType = new URLSearchParams(window.location.search).get("type");
      if (sourcePage === "/book-a-call/" && (queryType === "intro" || queryType === "partner")) setType(queryType);
    });
    return () => cancelAnimationFrame(frame);
  }, [sourcePage]);

  useEffect(() => {
    const controller = new AbortController();
    void fetch(`/api/booking/slots?type=${type}&tz=${encodeURIComponent(timezone)}`, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error("Availability could not load");
        return response.json() as Promise<{ slots: FormattedSlot[]; requestOnly?: boolean }>;
      })
      .then((data) => {
        setUnavailable(false);
        setRequestOnly(data.requestOnly === true);
        setSlots(data.slots);
        setDate(data.slots[0]?.visitorDateKey ?? "");
        setMonthKey(null);
        setHourKey(null);
      })
      .catch(() => { if (!controller.signal.aborted) setUnavailable(true); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [type, timezone, refresh]);

  useEffect(() => {
    if (!selected || reserved) return;
    detailsTitle.current?.focus();
  }, [selected, reserved]);

  useEffect(() => {
    const turnstile = (window as Window & { turnstile?: Turnstile }).turnstile;
    const element = turnstileElement.current;
    if (!siteKey || !selected || reserved || !turnstileReady || !element || !turnstile) return;
    const id = turnstile.render(element, {
      sitekey: siteKey, action: "book_call", theme: "dark", callback: setToken,
      "expired-callback": () => setToken(""), "error-callback": () => setToken(""),
    });
    turnstileId.current = id;
    return () => { turnstile.remove(id); turnstileId.current = null; };
  }, [selected, reserved, turnstileReady]);

  const dates = useMemo(() => [...new Set(slots.map((slot) => slot.visitorDateKey))], [slots]);
  const daySlots = useMemo(() => slots.filter((slot) => slot.visitorDateKey === date), [slots, date]);
  // Calendar: months that have availability, and the grid for the month on screen.
  const months = useMemo(() => [...new Set(dates.map((day) => day.slice(0, 7)))], [dates]);
  const month = monthKey && months.includes(monthKey) ? monthKey : (date ? date.slice(0, 7) : months[0] ?? "1970-01");
  const calendarCells = useMemo(() => {
    const [year, monthNumber] = month.split("-").map(Number);
    const first = new Date(Date.UTC(year, monthNumber - 1, 1));
    const blanks = (first.getUTCDay() + 6) % 7;
    const length = new Date(Date.UTC(year, monthNumber, 0)).getUTCDate();
    return [
      ...Array.from({ length: blanks }, () => null),
      ...Array.from({ length }, (_, index) => `${month}-${String(index + 1).padStart(2, "0")}`),
    ];
  }, [month]);
  // Clock: each slot placed by its hour in the visitor's time zone.
  const clockSlots = useMemo(() => {
    const format = new Intl.DateTimeFormat("en-US", { timeZone: timezone, hour: "numeric", hour12: true });
    return daySlots.map((slot) => {
      const parts = format.formatToParts(new Date(slot.iso));
      return {
        slot,
        hour: Number(parts.find((part) => part.type === "hour")?.value ?? 12),
        period: (parts.find((part) => part.type === "dayPeriod")?.value ?? "AM").toUpperCase() as "AM" | "PM",
      };
    });
  }, [daySlots, timezone]);
  const period = periodKey && clockSlots.some((slot) => slot.period === periodKey) ? periodKey : clockSlots[0]?.period ?? "AM";
  const hour = hourKey !== null && clockSlots.some((slot) => slot.period === period && slot.hour === hourKey) ? hourKey : null;
  const hourSlots = clockSlots.filter((slot) => slot.period === period && slot.hour === hour);
  function choose(slot: FormattedSlot) {
    setSelected(slot); setError(""); setToken(""); requestId.current = null;
  }
  const meeting = BOOKING_CONFIG.meetingTypes.find((item) => item.slug === type)!;
  const timezoneOptions = COMMON_TIMEZONES.some((zone) => zone.value === timezone)
    ? COMMON_TIMEZONES : [{ value: timezone, label: timezone }, ...COMMON_TIMEZONES];

  // Name the detected zone the way a visitor would: city plus the current abbreviation.
  const zoneLabel = useMemo(() => {
    const known = COMMON_TIMEZONES.find((zone) => zone.value === timezone)?.label;
    if (known) return known;
    const city = timezone.split("/").pop()?.replace(/_/g, " ") ?? timezone;
    const abbr = new Intl.DateTimeFormat("en-US", { timeZone: timezone, timeZoneName: "short" })
      .formatToParts(new Date()).find((part) => part.type === "timeZoneName")?.value;
    return abbr ? `${city} (${abbr})` : city;
  }, [timezone]);

  function reloadAvailability() {
    setLoading(true);
    setUnavailable(false);
    setRefresh((value) => value + 1);
  }

  async function reserve(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selected || sending) return;
    const data = new FormData(event.currentTarget);
    requestId.current ??= crypto.randomUUID();
    setSending(true);
    setError("");
    try {
      const response = await fetch("/api/booking/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          requestId: requestId.current, meetingType: type, visitorTz: timezone, slotIso: selected.iso,
          name: data.get("name"), email: data.get("email"), company: data.get("company"), phone: data.get("phone"),
          services: data.get("service") ? [data.get("service")] : [], notes: data.get("notes"),
          honeypot: data.get("nickname"), turnstileToken: token || undefined, sourcePage,
        }),
      });
      const result = await response.json();
      if (response.status === 409) {
        setSelected(null);
        reloadAvailability();
      }
      if (!response.ok) throw new Error(result.error || "We couldn’t save your booking.");
      setReserved(result as Reservation);
    } catch (err) {
      setError(err instanceof Error ? err.message : "We couldn’t save your booking. Please try again.");
      const turnstile = (window as Window & { turnstile?: Turnstile }).turnstile;
      if (turnstileId.current) turnstile?.reset(turnstileId.current);
      setToken("");
    } finally {
      setSending(false);
    }
  }

  const appointment = selected && `${labelDay(selected.visitorDateKey, { weekday: "long", month: "long", day: "numeric" })}, ${selected.visitorTimeFormatted} ${selected.visitorTzAbbr}`;

  const hostNote = selected && timezone !== BOOKING_CONFIG.hostTimeZone
    ? ` (${selected.hostTimeFormatted} on ${labelDay(selected.hostDateKey, { month: "short", day: "numeric" })}, Pakistan time)` : "";

  function addToCalendar() {
    if (!reserved) return;
    downloadIcsFile("webix-solutions-call.ics", generateIcsContent({
      title: `${meeting.title} with Webix Solutions`, description: "Webix Solutions will email the meeting details.",
      startIso: reserved.startIso, endIso: reserved.endIso,
      uid: `${reserved.eventId}@webixsolutions.com`,
    }));
  }

  return (
    <div className={`booking-panel ${className}`}>
      {siteKey && <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" onReady={() => setTurnstileReady(true)} />}
      {error && <p className="booking-error" role="alert">{error}</p>}
      {reserved ? (
        <div className="booking-success" role="status">
          <Check size={27} />
          <h3>Your time is reserved</h3>
          <p>{appointment}</p>
          <p>Our team will email you the meeting details. Your reference is <strong>{reserved.eventId.slice(0, 8).toUpperCase()}</strong>.</p>
          <button type="button" className="studio-button studio-button-outline" onClick={addToCalendar}>Add to calendar</button>
        </div>
      ) : selected && requestOnly ? (
        <div className="booking-request">
          <button type="button" className="studio-link booking-back" onClick={() => setSelected(null)}><ChevronLeft size={17} /> Change time</button>
          <h3 tabIndex={-1} ref={detailsTitle}>Request this time</h3>
          <p className="booking-request-time">{meeting.title} · {appointment}</p>
          <p>Send the time to our team on WhatsApp or by email. We reply to confirm it or suggest the nearest free time.</p>
          <div className="booking-request-actions">
            <a className="studio-button" target="_blank" rel="noopener noreferrer"
              href={`https://wa.me/${SITE_FACTS.contact.whatsappNumber}?text=${encodeURIComponent(`Hi Webix Solutions, I would like to book a ${meeting.title} on ${appointment}${hostNote}.`)}`}>Send on WhatsApp</a>
            <a className="studio-button studio-button-outline"
              href={`mailto:${SITE_FACTS.contact.email}?subject=${encodeURIComponent(`${meeting.title} request`)}&body=${encodeURIComponent(`Hi Webix Solutions,\n\nI would like to book a ${meeting.title} on ${appointment}${hostNote}.\n\nName:\nCompany or website:\n`)}`}>Send by email</a>
          </div>
        </div>
      ) : selected ? (
        <form onSubmit={reserve} className="booking-form">
          <button type="button" disabled={sending} className="studio-link booking-back" onClick={() => { setSelected(null); setError(""); }}><ChevronLeft size={17} /> Change time</button>
          <h3 tabIndex={-1} ref={detailsTitle}>Your details</h3>
          <p>{meeting.title} · {appointment}</p>
          <div className="booking-fields">
            <label>Full name<input name="name" required minLength={2} maxLength={120} autoComplete="name" /></label>
            <label>Email<input name="email" type="email" required maxLength={254} autoComplete="email" /></label>
            <label>Company or website <span>(optional)</span><input name="company" maxLength={180} autoComplete="organization" /></label>
            <label>Phone <span>(optional)</span><input name="phone" type="tel" maxLength={50} autoComplete="tel" /></label>
            <label className="booking-wide">What can we help with? <span>(optional)</span><select name="service"><option value="">Choose a service</option>{services.map(({ slug, shortName }) => <option key={slug} value={slug}>{shortName}</option>)}</select></label>
            <label className="booking-wide">Project notes <span>(optional)</span><textarea name="notes" maxLength={1500} rows={3} /></label>
          </div>
          <div hidden aria-hidden="true"><label>Nickname<input name="nickname" tabIndex={-1} autoComplete="off" /></label></div>
          {siteKey && <div ref={turnstileElement} />}
          <button type="submit" className="studio-button" disabled={sending || Boolean(siteKey && !token)}>{sending ? "Reserving your time…" : "Reserve this time"}</button>
        </form>
      ) : (
        <>
          <div className="booking-types" role="group" aria-label="Call type">
            {BOOKING_CONFIG.meetingTypes.map((item) => (
              <button key={item.slug} type="button" aria-pressed={type === item.slug}
                onClick={() => { if (type !== item.slug) { setLoading(true); setType(item.slug as MeetingType); } }}>
                <strong>{item.title}</strong><span>{item.minutes} min</span>
              </button>
            ))}
          </div>
          <div className="booking-zone">
            <Globe size={16} aria-hidden="true" />
            <p>Times are shown in your time zone: <strong>{zoneLabel}</strong></p>
            <button type="button" className="booking-zone-change" aria-expanded={zoneOpen} aria-controls={`${baseId}-zone`} onClick={() => setZoneOpen(!zoneOpen)}>
              {zoneOpen ? "Done" : "Change"}
            </button>
            {zoneOpen && (
              <select id={`${baseId}-zone`} aria-label="Time zone" value={timezone} onChange={(event) => { setLoading(true); setTimezone(event.target.value); setZoneOpen(false); }}>
                {timezoneOptions.map((zone) => <option key={zone.value} value={zone.value}>{zone.label}</option>)}
              </select>
            )}
          </div>
          {loading ? <p role="status">Checking available times…</p> : unavailable ? (
            <div role="status" className="booking-unavailable">
              <p>Online availability is temporarily unavailable.</p>
              <button type="button" className="studio-link" onClick={reloadAvailability}>Try again</button>
              <a className="studio-link" href={`mailto:${SITE_FACTS.contact.email}`}>Email us</a>
            </div>
          ) : dates.length === 0 ? <p role="status">All upcoming times are booked. <a href={`mailto:${SITE_FACTS.contact.email}`}>Email us for help.</a></p> : (
            <>
              <div className="booking-picker">
                <div className="booking-calendar">
                  <div className="booking-dates-head">
                    <h3><CalendarDays size={17} /> {labelDay(`${month}-01`, { month: "long", year: "numeric" })}</h3>
                    <div>
                      <button type="button" aria-label="Previous month" disabled={months.indexOf(month) <= 0} onClick={() => setMonthKey(months[months.indexOf(month) - 1])}><ChevronLeft size={18} /></button>
                      <button type="button" aria-label="Next month" disabled={months.indexOf(month) >= months.length - 1} onClick={() => setMonthKey(months[months.indexOf(month) + 1])}><ChevronRight size={18} /></button>
                    </div>
                  </div>
                  <div className="booking-weekdays" aria-hidden="true">{["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => <span key={day}>{day}</span>)}</div>
                  <div className="booking-month">
                    {calendarCells.map((day, index) => day === null ? <span key={`blank-${index}`} /> : (
                      <button key={day} type="button" disabled={!dates.includes(day)} aria-pressed={date === day}
                        aria-label={labelDay(day, { weekday: "long", month: "long", day: "numeric" })}
                        onClick={() => { setDate(day); setHourKey(null); }}>{Number(day.slice(-2))}</button>
                    ))}
                  </div>
                </div>
                <div className="booking-clock-wrap">
                  <div className="booking-clock-head">
                    <h3 className="booking-times-title">Choose a time <span>{date && labelDay(date, { month: "short", day: "numeric" })}</span></h3>
                    <div className="booking-period" role="group" aria-label="Morning or afternoon">
                      {(["AM", "PM"] as const).map((item) => <button key={item} type="button" aria-pressed={period === item} disabled={!clockSlots.some((slot) => slot.period === item)} onClick={() => { setPeriodKey(item); setHourKey(null); }}>{item}</button>)}
                    </div>
                  </div>
                  <div className="booking-clock" style={{ "--booking-hand": `${((hour ?? 12) % 12) * 30}deg` } as React.CSSProperties} data-has-hour={hour !== null}>
                    <i className="booking-clock-hand" aria-hidden="true" />
                    <span className="booking-clock-center" aria-hidden="true" />
                    {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((value, index) => {
                      const options = clockSlots.filter((slot) => slot.period === period && slot.hour === value);
                      return <button key={value} type="button" className="booking-clock-hour" style={{ "--booking-angle": `${index * 30}deg` } as React.CSSProperties}
                        disabled={options.length === 0} aria-pressed={hour === value} aria-label={`${value} ${period}`}
                        onClick={() => { if (options.length === 1) choose(options[0].slot); else setHourKey(value); }}>{value}</button>;
                    })}
                  </div>
                  <div className="booking-minutes" aria-live="polite">
                    {hour === null ? <p>Pick an hour on the clock.</p> : hourSlots.map(({ slot }) => (
                      <button key={slot.iso} type="button" onClick={() => choose(slot)}>{slot.visitorTimeFormatted}</button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
