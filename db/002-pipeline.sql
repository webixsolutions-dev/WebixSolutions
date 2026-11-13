-- Pipeline stage, meeting link, reminder tracking and a per-booking timeline.
-- Additive: the reserve_webix_booking function from 001 keeps working unchanged.

ALTER TABLE webix_bookings
  ADD COLUMN stage text NOT NULL DEFAULT 'booked'
    CHECK (stage IN ('booked', 'confirmed', 'completed', 'no_show', 'proposal', 'won', 'lost', 'cancelled')),
  ADD COLUMN stage_changed_at timestamptz NOT NULL DEFAULT now(),
  ADD COLUMN meet_url text,
  ADD COLUMN calendar_event_id text,
  ADD COLUMN confirmation_sent_at timestamptz,
  ADD COLUMN reminder_24h_sent_at timestamptz,
  ADD COLUMN reminder_1h_sent_at timestamptz,
  ADD COLUMN outcome_prompted_at timestamptz,
  ADD COLUMN next_follow_up_at timestamptz,
  ADD COLUMN follow_up_notified_at timestamptz,
  ADD COLUMN internal_notes text;

CREATE INDEX webix_bookings_stage ON webix_bookings (stage, starts_at);
CREATE INDEX webix_bookings_follow_up ON webix_bookings (next_follow_up_at) WHERE next_follow_up_at IS NOT NULL;

CREATE TABLE webix_booking_events (
  id bigserial PRIMARY KEY,
  booking_id uuid NOT NULL REFERENCES webix_bookings(id) ON DELETE CASCADE,
  kind text NOT NULL,
  detail text,
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX webix_booking_events_booking ON webix_booking_events (booking_id, created_at);
