CREATE TABLE webix_bookings (
  id uuid PRIMARY KEY,
  starts_at timestamptz NOT NULL,
  ends_at timestamptz NOT NULL CHECK (ends_at > starts_at),
  host_day date NOT NULL,
  visitor_zone text NOT NULL,
  meeting_type text NOT NULL CHECK (meeting_type IN ('intro', 'strategy', 'partner')),
  name text NOT NULL,
  email text NOT NULL,
  company text,
  phone text,
  notes text,
  services text[],
  source text,
  budget text,
  ip_key text NOT NULL,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX webix_bookings_active_start ON webix_bookings (starts_at) WHERE status <> 'cancelled';
CREATE INDEX webix_bookings_recent_ip ON webix_bookings (ip_key, created_at);
CREATE INDEX webix_bookings_recent_email ON webix_bookings (email, created_at);

CREATE FUNCTION reserve_webix_booking(
  booking_id uuid, start_time timestamptz, end_time timestamptz, host_date date,
  details jsonb, request_ip text, max_day integer, buffer_minutes integer
) RETURNS text
LANGUAGE plpgsql
AS $$
DECLARE
  previous webix_bookings%ROWTYPE;
  buffer_time interval := make_interval(mins => buffer_minutes);
BEGIN
  -- The single host schedule is shared by all call types and time zones.
  PERFORM pg_advisory_xact_lock(719204813);
  SELECT * INTO previous FROM webix_bookings WHERE id = booking_id;
  IF FOUND THEN
    IF previous.starts_at = start_time AND previous.meeting_type = details->>'meetingType'
        AND previous.email = details->>'email' AND previous.ip_key = request_ip THEN
      RETURN 'replayed';
    END IF;
    RETURN 'conflict';
  END IF;

  IF (SELECT count(*) FROM webix_bookings WHERE ip_key = request_ip AND created_at > now() - interval '1 hour') >= 5
    OR (SELECT count(*) FROM webix_bookings WHERE email = details->>'email' AND created_at > now() - interval '1 hour') >= 3 THEN
    RETURN 'limited';
  END IF;
  IF (SELECT count(*) FROM webix_bookings WHERE host_day = host_date AND status <> 'cancelled') >= max_day
    OR EXISTS (
      SELECT 1 FROM webix_bookings
      WHERE status <> 'cancelled' AND starts_at < end_time + buffer_time AND ends_at > start_time - buffer_time
    ) THEN
    RETURN 'conflict';
  END IF;

  INSERT INTO webix_bookings (id, starts_at, ends_at, host_day, visitor_zone, meeting_type, name, email, company, phone, notes, services, source, budget, ip_key)
  VALUES (
    booking_id, start_time, end_time, host_date, details->>'visitorTz', details->>'meetingType',
    details->>'name', details->>'email', details->>'company', details->>'phone', details->>'notes',
    ARRAY(SELECT jsonb_array_elements_text(COALESCE(details->'services', '[]'::jsonb))),
    details->>'sourcePage', details->>'budget', request_ip
  );
  RETURN 'created';
END
$$;
