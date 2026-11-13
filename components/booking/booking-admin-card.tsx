import { BOOKING_CONFIG } from "@/config/booking";
import { MOVE_TARGETS, STAGE_LABEL } from "@/lib/booking/pipeline";
import type { BookingRecord } from "@/lib/booking/record";
import { teamTime, visitorTime } from "@/lib/booking/templates";
import {
  moveBookingStage, resendBookingConfirmation, saveBookingFollowUp, saveBookingLink, saveBookingNotes,
} from "@/app/admin/bookings/actions";

const dayFormat = new Intl.DateTimeFormat("en-CA", { timeZone: BOOKING_CONFIG.hostTimeZone });
const stamp = new Intl.DateTimeFormat("en-US", { timeZone: BOOKING_CONFIG.hostTimeZone, month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });

export type BookingEvent = { kind: string; detail: string | null; at: Date };

export function BookingCard({ booking, events }: { booking: BookingRecord; events: BookingEvent[] }) {
  const type = BOOKING_CONFIG.meetingTypes.find((item) => item.slug === booking.meetingType)?.title;
  const cancelled = booking.stage === "cancelled";
  const followUpDay = booking.nextFollowUpAt ? dayFormat.format(new Date(booking.nextFollowUpAt)) : "";
  const overdue = booking.nextFollowUpAt && new Date(booking.nextFollowUpAt) <= new Date();
  return (
    <article className="booking-panel admin-card" data-stage={booking.stage}>
      <div className="admin-card-head">
        <div>
          <p className="admin-stage" data-stage={booking.stage}>{STAGE_LABEL[booking.stage]}</p>
          <h2 className="type-h3">{booking.name}</h2>
        </div>
        <div className="admin-card-when">
          <strong>{teamTime(booking)}</strong>
          <span>{type} · their time: {visitorTime(booking)}</span>
        </div>
      </div>
      <p><a className="underline" href={`mailto:${booking.email}`}>{booking.email}</a>{booking.phone && ` · ${booking.phone}`}{booking.company && ` · ${booking.company}`}</p>
      {booking.services.length > 0 && <p>Interested in {booking.services.join(", ")}</p>}
      {booking.notes && <p className="whitespace-pre-wrap break-words">“{booking.notes}”</p>}
      <p className="admin-ref">Reference {booking.id.slice(0, 8).toUpperCase()} · Source {booking.source || "Direct"}</p>

      {!cancelled && (
        <>
          <form action={saveBookingLink} className="admin-row">
            <input type="hidden" name="id" value={booking.id} />
            <label>Meeting link<input type="url" name="url" defaultValue={booking.meetUrl ?? ""} placeholder="https://meet.google.com/…" required maxLength={500} /></label>
            <button className="studio-button studio-button-outline">{booking.meetUrl ? "Update link and resend" : "Save link and send confirmation"}</button>
          </form>
          {!booking.meetUrl && <p className="admin-warning" role="status">No meeting link yet, so the visitor has not been told how to join.</p>}

          <form action={moveBookingStage} className="admin-stages">
            <input type="hidden" name="id" value={booking.id} />
            <span>Move to</span>
            {MOVE_TARGETS.filter((stage) => stage !== booking.stage).map((stage) => (
              <button key={stage} name="stage" value={stage} className="admin-chip" data-stage={stage}>{STAGE_LABEL[stage]}</button>
            ))}
          </form>

          <div className="admin-row-pair">
            <form action={saveBookingFollowUp} className="admin-row">
              <input type="hidden" name="id" value={booking.id} />
              <label>Follow up on{overdue && <em> (due)</em>}<input type="date" name="date" defaultValue={followUpDay} /></label>
              <button className="studio-button studio-button-outline">Save date</button>
            </form>
            <form action={saveBookingNotes} className="admin-row">
              <input type="hidden" name="id" value={booking.id} />
              <label>Internal notes<textarea name="notes" rows={2} maxLength={4000} defaultValue={booking.internalNotes ?? ""} /></label>
              <button className="studio-button studio-button-outline">Save notes</button>
            </form>
          </div>
          {booking.meetUrl && (
            <form action={resendBookingConfirmation}>
              <input type="hidden" name="id" value={booking.id} />
              <button className="studio-link">Resend the confirmation email</button>
            </form>
          )}
        </>
      )}

      {events.length > 0 && (
        <details className="admin-timeline">
          <summary>Timeline ({events.length})</summary>
          <ol>{events.slice(0, 15).map((event, index) => (
            <li key={index}><span>{stamp.format(event.at)}</span> {event.kind.replace(/[_:]/g, " ")}{event.detail && <em> · {event.detail}</em>}</li>
          ))}</ol>
        </details>
      )}
    </article>
  );
}
