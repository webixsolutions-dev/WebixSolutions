import { isStage, type Stage } from "./pipeline";

export interface BookingRecord {
  id: string;
  startsAt: string;
  endsAt: string;
  visitorZone: string;
  meetingType: "strategy" | "intro" | "partner";
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  notes: string | null;
  services: string[];
  source: string | null;
  status: "pending" | "confirmed" | "cancelled";
  stage: Stage;
  meetUrl: string | null;
  internalNotes: string | null;
  nextFollowUpAt: string | null;
  createdAt: string;
}

function iso(value: unknown): string {
  return value instanceof Date ? value.toISOString() : new Date(String(value)).toISOString();
}

function text(value: unknown): string | null {
  return typeof value === "string" && value.length > 0 ? value : null;
}

/** Turns a raw database row (timestamps may arrive as Date or string) into a plain record. */
export function toBooking(row: Record<string, unknown>): BookingRecord {
  return {
    id: String(row.id),
    startsAt: iso(row.starts_at),
    endsAt: iso(row.ends_at),
    visitorZone: String(row.visitor_zone),
    meetingType: row.meeting_type as BookingRecord["meetingType"],
    name: String(row.name),
    email: String(row.email),
    company: text(row.company),
    phone: text(row.phone),
    notes: text(row.notes),
    services: Array.isArray(row.services) ? row.services.map(String) : [],
    source: text(row.source),
    status: row.status as BookingRecord["status"],
    stage: isStage(row.stage) ? row.stage : "booked",
    meetUrl: text(row.meet_url),
    internalNotes: text(row.internal_notes),
    nextFollowUpAt: row.next_follow_up_at ? iso(row.next_follow_up_at) : null,
    createdAt: iso(row.created_at),
  };
}
