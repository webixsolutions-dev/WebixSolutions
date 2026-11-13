import { bookingDb } from "./store";
import { toBooking, type BookingRecord } from "./record";
import { sendEmail, teamAddress, type SendResult } from "./email";
import { confirmationEmail, reminderEmail, teamFollowUpEmail, teamNewBookingEmail, teamOutcomeEmail } from "./templates";
import { followUpFor, type Stage } from "./pipeline";

/** One shared meeting room used for every booking until Google Calendar creates a link per call. */
export function fixedMeetUrl() {
  const url = process.env.BOOKING_MEETING_URL;
  return url && /^https:\/\//.test(url) ? url : null;
}

export async function logEvent(bookingId: string, kind: string, detail?: string) {
  const sql = bookingDb();
  await sql`INSERT INTO webix_booking_events (booking_id, kind, detail) VALUES (${bookingId}::uuid, ${kind}, ${detail ?? null})`;
}

export async function getBooking(id: string): Promise<BookingRecord | null> {
  const sql = bookingDb();
  const rows = await sql`SELECT * FROM webix_bookings WHERE id = ${id}::uuid`;
  return rows[0] ? toBooking(rows[0]) : null;
}

function failure(result: SendResult) {
  return result.ok ? "" : result.error;
}

function failKind(result: SendResult) {
  return !result.ok && result.skipped ? "email_skipped" : "email_failed";
}

/**
 * Emails the visitor their confirmation. Without `force` it sends once per booking:
 * the "sent" marker is claimed first, and released again if the send fails.
 */
export async function sendConfirmation(id: string, force = false): Promise<SendResult | "already"> {
  const sql = bookingDb();
  if (!force) {
    const claimed = await sql`UPDATE webix_bookings SET confirmation_sent_at = now() WHERE id = ${id}::uuid AND confirmation_sent_at IS NULL RETURNING id`;
    if (claimed.length === 0) return "already";
  }
  const booking = await getBooking(id);
  if (!booking) return { ok: false, skipped: false, error: "Booking not found" };
  const result = await sendEmail(confirmationEmail(booking));
  if (result.ok) {
    if (force) await sql`UPDATE webix_bookings SET confirmation_sent_at = now() WHERE id = ${id}::uuid`;
    await logEvent(id, "confirmation_sent", booking.meetUrl ? "with meeting link" : "without meeting link");
  } else {
    if (!force) await sql`UPDATE webix_bookings SET confirmation_sent_at = NULL WHERE id = ${id}::uuid`;
    await logEvent(id, failKind(result), `confirmation: ${failure(result)}`);
  }
  return result;
}

/** Runs after a booking is saved: attach the shared link if there is one, email the visitor and the team. */
export async function onBookingCreated(id: string) {
  try {
    const sql = bookingDb();
    await logEvent(id, "booked");
    const link = fixedMeetUrl();
    if (link) {
      await sql`UPDATE webix_bookings SET meet_url = ${link}, stage = 'confirmed', status = 'confirmed', stage_changed_at = now() WHERE id = ${id}::uuid AND meet_url IS NULL`;
    }
    await sendConfirmation(id);
    const booking = await getBooking(id);
    if (booking) {
      const result = await sendEmail(teamNewBookingEmail(booking, teamAddress()));
      await logEvent(id, result.ok ? "team_notified" : failKind(result), result.ok ? undefined : `team notice: ${failure(result)}`);
    }
  } catch {
    console.error("Booking follow-up emails failed");
  }
}

/** Staff pasted a meeting link: store it, confirm the booking and email the visitor. */
export async function setMeetingLink(id: string, url: string) {
  const sql = bookingDb();
  await sql`
    UPDATE webix_bookings
    SET meet_url = ${url},
        stage = CASE WHEN stage = 'booked' THEN 'confirmed' ELSE stage END,
        status = CASE WHEN status = 'pending' THEN 'confirmed' ELSE status END,
        stage_changed_at = CASE WHEN stage = 'booked' THEN now() ELSE stage_changed_at END
    WHERE id = ${id}::uuid AND status <> 'cancelled'
  `;
  await logEvent(id, "meeting_link_set");
  return sendConfirmation(id, true);
}

export async function moveStage(id: string, stage: Stage) {
  const sql = bookingDb();
  const next = followUpFor(stage);
  const status = stage === "cancelled" ? "cancelled" : "confirmed";
  const changed = await sql`
    UPDATE webix_bookings
    SET stage = ${stage}, status = ${status}, stage_changed_at = now(),
        next_follow_up_at = ${next ? next.toISOString() : null}::timestamptz, follow_up_notified_at = NULL
    WHERE id = ${id}::uuid AND stage <> ${stage} AND stage <> 'cancelled'
    RETURNING id
  `;
  if (changed.length) await logEvent(id, `stage:${stage}`);
}

export async function saveFollowUp(id: string, when: Date | null) {
  const sql = bookingDb();
  await sql`UPDATE webix_bookings SET next_follow_up_at = ${when ? when.toISOString() : null}::timestamptz, follow_up_notified_at = NULL WHERE id = ${id}::uuid AND stage <> 'cancelled'`;
  await logEvent(id, "follow_up_set", when ? when.toISOString() : "cleared");
}

export async function saveNotes(id: string, notes: string) {
  const sql = bookingDb();
  await sql`UPDATE webix_bookings SET internal_notes = ${notes || null} WHERE id = ${id}::uuid`;
}

export interface ReminderRun {
  reminder24h: number;
  reminder1h: number;
  outcomePrompts: number;
  followUps: number;
  skipped: number;
  failed: number;
}

/**
 * Called every 15 minutes. Each message is claimed in the database before it is sent,
 * so overlapping runs never send twice, and a failed or skipped send is released to retry.
 */
export async function runReminders(): Promise<ReminderRun> {
  const sql = bookingDb();
  const run: ReminderRun = { reminder24h: 0, reminder1h: 0, outcomePrompts: 0, followUps: 0, skipped: 0, failed: 0 };
  const team = teamAddress();

  function tally(result: SendResult) {
    if (result.ok) return true;
    if (result.skipped) run.skipped += 1; else run.failed += 1;
    return false;
  }

  // Visitor reminder 24 hours before (only when the booking was made more than 25 hours ahead).
  const due24 = await sql`
    SELECT id FROM webix_bookings
    WHERE status = 'confirmed' AND stage = 'confirmed' AND meet_url IS NOT NULL AND reminder_24h_sent_at IS NULL
      AND starts_at > now() + interval '2 hours' AND starts_at <= now() + interval '24 hours 30 minutes'
      AND starts_at - created_at > interval '25 hours'
  `;
  for (const { id } of due24) {
    const claimed = await sql`UPDATE webix_bookings SET reminder_24h_sent_at = now() WHERE id = ${id}::uuid AND reminder_24h_sent_at IS NULL RETURNING *`;
    if (!claimed[0]) continue;
    const booking = toBooking(claimed[0]);
    const result = await sendEmail(reminderEmail(booking, "24h"));
    if (tally(result)) { run.reminder24h += 1; await logEvent(booking.id, "reminder_24h_sent"); }
    else { await sql`UPDATE webix_bookings SET reminder_24h_sent_at = NULL WHERE id = ${booking.id}::uuid`; await logEvent(booking.id, failKind(result), `24h reminder: ${failure(result)}`); }
  }

  // Visitor reminder 1 hour before (only when the booking was made more than 2 hours ahead).
  const due1 = await sql`
    SELECT id FROM webix_bookings
    WHERE status = 'confirmed' AND stage = 'confirmed' AND meet_url IS NOT NULL AND reminder_1h_sent_at IS NULL
      AND starts_at > now() AND starts_at <= now() + interval '1 hour 15 minutes'
      AND starts_at - created_at > interval '2 hours'
  `;
  for (const { id } of due1) {
    const claimed = await sql`UPDATE webix_bookings SET reminder_1h_sent_at = now() WHERE id = ${id}::uuid AND reminder_1h_sent_at IS NULL RETURNING *`;
    if (!claimed[0]) continue;
    const booking = toBooking(claimed[0]);
    const result = await sendEmail(reminderEmail(booking, "1h"));
    if (tally(result)) { run.reminder1h += 1; await logEvent(booking.id, "reminder_1h_sent"); }
    else { await sql`UPDATE webix_bookings SET reminder_1h_sent_at = NULL WHERE id = ${booking.id}::uuid`; await logEvent(booking.id, failKind(result), `1h reminder: ${failure(result)}`); }
  }

  // Team prompt two hours after a call ends, if nobody has marked what happened.
  const ended = await sql`
    SELECT id FROM webix_bookings
    WHERE status <> 'cancelled' AND stage IN ('booked', 'confirmed') AND outcome_prompted_at IS NULL
      AND ends_at < now() - interval '2 hours'
  `;
  for (const { id } of ended) {
    const claimed = await sql`UPDATE webix_bookings SET outcome_prompted_at = now() WHERE id = ${id}::uuid AND outcome_prompted_at IS NULL RETURNING *`;
    if (!claimed[0]) continue;
    const booking = toBooking(claimed[0]);
    const result = await sendEmail(teamOutcomeEmail(booking, team));
    if (tally(result)) { run.outcomePrompts += 1; await logEvent(booking.id, "outcome_prompt_sent"); }
    else await sql`UPDATE webix_bookings SET outcome_prompted_at = NULL WHERE id = ${booking.id}::uuid`;
  }

  // Team nudge when a follow-up date passes.
  const followUps = await sql`
    SELECT id FROM webix_bookings
    WHERE stage IN ('completed', 'no_show', 'proposal') AND next_follow_up_at IS NOT NULL AND next_follow_up_at <= now()
      AND (follow_up_notified_at IS NULL OR follow_up_notified_at < next_follow_up_at)
  `;
  for (const { id } of followUps) {
    const claimed = await sql`
      UPDATE webix_bookings SET follow_up_notified_at = now()
      WHERE id = ${id}::uuid AND next_follow_up_at <= now() AND (follow_up_notified_at IS NULL OR follow_up_notified_at < next_follow_up_at)
      RETURNING *
    `;
    if (!claimed[0]) continue;
    const booking = toBooking(claimed[0]);
    const result = await sendEmail(teamFollowUpEmail(booking, team));
    if (tally(result)) { run.followUps += 1; await logEvent(booking.id, "follow_up_notified"); }
    else await sql`UPDATE webix_bookings SET follow_up_notified_at = NULL WHERE id = ${booking.id}::uuid`;
  }

  return run;
}
