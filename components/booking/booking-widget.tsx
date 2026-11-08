"use client";

import { useEffect, useId, useMemo, useRef, useState, type FormEvent } from "react";
import Script from "next/script";
import { CalendarDays, Check, ChevronLeft, ChevronRight } from "lucide-react";
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
const daysPerPage = 5;

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
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<FormattedSlot | null>(null);
  const [reserved, setReserved] = useState<Reservation | null>(null);
  const [loading, setLoading] = useState(true);
  const [unavailable, setUnavailable] = useState(false);
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
        return response.json() as Promise<{ slots: FormattedSlot[] }>;
      })
      .then((data) => {
        setUnavailable(false);
        setSlots(data.slots);
        setDate(data.slots[0]?.visitorDateKey ?? "");
        setPage(0);
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
  const daySlots = slots.filter((slot) => slot.visitorDateKey === date);
  const meeting = BOOKING_CONFIG.meetingTypes.find((item) => item.slug === type)!;
  const timezoneOptions = COMMON_TIMEZONES.some((zone) => zone.value === timezone)
    ? COMMON_TIMEZONES : [{ value: timezone, label: timezone }, ...COMMON_TIMEZONES];

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
          <div className="booking-field-row">
            <label htmlFor={`${baseId}-type`}>Call type</label>
            <select id={`${baseId}-type`} value={type} onChange={(event) => { setLoading(true); setType(event.target.value as MeetingType); }}>
              {BOOKING_CONFIG.meetingTypes.map((item) => <option value={item.slug} key={item.slug}>{item.title} · {item.minutes} min</option>)}
            </select>
          </div>
          <div className="booking-field-row">
            <label htmlFor={`${baseId}-zone`}>Time zone</label>
            <select id={`${baseId}-zone`} value={timezone} onChange={(event) => { setLoading(true); setTimezone(event.target.value); }}>
              {timezoneOptions.map((zone) => <option key={zone.value} value={zone.value}>{zone.label}</option>)}
            </select>
          </div>
          {loading ? <p role="status">Checking available times…</p> : unavailable ? (
            <div role="status" className="booking-unavailable">
              <p>Online availability is temporarily unavailable.</p>
              <button type="button" className="studio-link" onClick={reloadAvailability}>Try again</button>
              <a className="studio-link" href={`mailto:${SITE_FACTS.contact.email}`}>Email us</a>
            </div>
          ) : dates.length === 0 ? <p role="status">All upcoming times are booked. <a href={`mailto:${SITE_FACTS.contact.email}`}>Email us for help.</a></p> : (
            <>
              <div className="booking-dates-head">
                <h3><CalendarDays size={17} /> Choose a date</h3>
                <div>
                  <button type="button" aria-label="Previous dates" disabled={page === 0} onClick={() => setPage(page - 1)}><ChevronLeft size={18} /></button>
                  <button type="button" aria-label="Next dates" disabled={(page + 1) * daysPerPage >= dates.length} onClick={() => setPage(page + 1)}><ChevronRight size={18} /></button>
                </div>
              </div>
              <div className="booking-dates">
                {dates.slice(page * daysPerPage, (page + 1) * daysPerPage).map((day) => <button key={day} type="button" aria-pressed={date === day} aria-label={labelDay(day, { weekday: "long", month: "long", day: "numeric" })} onClick={() => setDate(day)}>
                  <span>{labelDay(day, { weekday: "short" })}</span><strong>{day.slice(-2)}</strong><span>{labelDay(day, { month: "short" })}</span>
                </button>)}
              </div>
              <h3 className="booking-times-title">Choose a time <span>{date && labelDay(date, { month: "short", day: "numeric" })}</span></h3>
              <div className="booking-times">
                {daySlots.map((slot) => <button key={slot.iso} type="button" onClick={() => { setSelected(slot); setError(""); setToken(""); requestId.current = null; }}>{slot.visitorTimeFormatted}</button>)}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
