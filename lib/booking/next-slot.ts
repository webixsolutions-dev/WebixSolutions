import { SITE_FACTS } from "@/content/site-facts";
import { generateAvailableSlots } from "./slot-engine";
import { bookingAvailability } from "./store";

export interface NextSlotResult {
  mode: "slot" | "fallback";
  /** ISO-8601 UTC timestamp when mode === "slot" */
  slotIso?: string;
  /** Server-rendered fallback text in Eastern Time (America/New_York) when mode === "slot" */
  easternTimeFormatted?: string;
  durationMinutes: number;
  meetingTitle: string;
  /** Used when mode === "fallback" (production without Google Calendar credentials) */
  fallbackMessage?: string;
  whatsappUrl: string;
  email: string;
  phoneDisplay: string;
}

/**
 * Formats an ISO UTC timestamp in America/New_York (EDT/EST) for SSR fallback text.
 */
export function formatSlotInEasternTime(iso: string): string {
  const date = new Date(iso);
  const datePart = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(date);
  const timePart = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  }).format(date);
  return `${datePart} · ${timePart}`;
}

export async function getNextOpenStrategySlot(): Promise<NextSlotResult> {
  const base = {
    durationMinutes: 30,
    meetingTitle: "Free strategy call",
    whatsappUrl: SITE_FACTS.contact.whatsappUrl,
    email: SITE_FACTS.contact.email,
    phoneDisplay: SITE_FACTS.contact.phoneDisplay,
  };
  try {
    if (process.env.BOOKING_DATABASE_URL) {
      const now = new Date();
      const end = new Date(now.getTime() + 14 * 86400000);
      const { busyIntervals, fullDays } = await bookingAvailability(now, end);
      const slot = generateAvailableSlots({
        meetingTypeSlug: "strategy", now, busyIntervals,
        fromIsoDate: now.toISOString().slice(0, 10), toIsoDate: end.toISOString().slice(0, 10),
        visitorTz: "America/New_York",
      }).find((candidate) => !fullDays.has(candidate.hostDateKey));
      if (slot) return { ...base, mode: "slot", slotIso: slot.iso, easternTimeFormatted: formatSlotInEasternTime(slot.iso) };
    }
  } catch {
    console.error("Unable to load the next booking slot");
  }
  return { ...base, mode: "fallback", fallbackMessage: "Check the booking calendar for available times, or email us for help." };
}
