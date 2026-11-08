import type { Metadata } from "next";
import Link from "next/link";
import { adminSecret, hasAdminSession } from "@/lib/booking/admin-session";
import { bookingDb } from "@/lib/booking/store";
import { BOOKING_CONFIG } from "@/config/booking";
import { signIn, signOut, changeBookingStatus } from "./actions";

export const metadata: Metadata = {
  title: "Booking Dashboard",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

const hostDate = new Intl.DateTimeFormat("en-PK", {
  timeZone: BOOKING_CONFIG.hostTimeZone, dateStyle: "medium", timeStyle: "short",
});

export default async function BookingsDashboard({
  searchParams,
}: { searchParams: Promise<{ error?: string; page?: string }> }) {
  const params = await searchParams;
  const ready = Boolean(adminSecret() && process.env.BOOKING_DATABASE_URL);
  const authenticated = ready && await hasAdminSession();
  const page = Math.min(100000, Math.max(1, Number.parseInt(params.page || "1", 10) || 1));
  const limit = 25;
  let rows: Record<string, string | string[] | null>[] = [];
  let failed = false;
  if (authenticated) {
    try {
      const sql = bookingDb();
      rows = await sql`
        SELECT id, starts_at::text, visitor_zone, meeting_type, name, email, phone, company, notes, services, source, status
        FROM webix_bookings
        ORDER BY (starts_at >= now()) DESC,
          CASE WHEN starts_at >= now() THEN starts_at END ASC,
          starts_at DESC, id
        LIMIT ${limit + 1} OFFSET ${(page - 1) * limit}
      ` as typeof rows;
    } catch {
      failed = true;
      console.error("Booking dashboard query failed");
    }
  }

  return (
    <main id="main" className="studio-wrap admin-bookings py-12">
      <div className="studio-section-head">
        <div><p className="studio-label"><span /> Webix Solutions staff</p><h1 className="type-h1">Booking dashboard</h1></div>
        {authenticated && <form action={signOut}><button className="studio-button studio-button-outline">Sign out</button></form>}
      </div>
      {!ready ? <p>The booking dashboard is awaiting configuration.</p> : !authenticated ? (
        <form action={signIn} className="booking-panel max-w-sm space-y-4">
          <label>Admin password<input type="password" name="password" required maxLength={256} autoComplete="current-password" /></label>
          {params.error && <p role="alert" className="booking-error">The password is incorrect.</p>}
          <button className="studio-button">Sign in</button>
        </form>
      ) : failed ? <p role="alert">Bookings are temporarily unavailable. Refresh to try again.</p>
      : rows.length === 0 ? <p>No bookings on this page.</p> : (
        <div className="admin-booking-list">
          {rows.slice(0, limit).map((row) => (
            <article key={String(row.id)} className="booking-panel">
              <div className="studio-section-head">
                <div><p className="studio-label">{String(row.status)}</p><h2 className="type-h3">{String(row.name)}</h2></div>
                <p>{hostDate.format(new Date(String(row.starts_at)))} PKT</p>
              </div>
              <p>{BOOKING_CONFIG.meetingTypes.find((type) => type.slug === row.meeting_type)?.title} · Visitor zone {row.visitor_zone}</p>
              <p><a className="underline" href={`mailto:${row.email}`}>{row.email}</a>{row.phone && ` · ${row.phone}`}</p>
              {row.company && <p>Company {row.company}</p>}
              {Array.isArray(row.services) && row.services.length > 0 && <p>Services {row.services.join(", ")}</p>}
              {row.notes && <p className="whitespace-pre-wrap break-words">{row.notes}</p>}
              <p>Reference {String(row.id).slice(0, 8).toUpperCase()} · Source {row.source || "Direct"}</p>
              {row.status !== "cancelled" && (
                <form action={changeBookingStatus} className="studio-actions">
                  <input type="hidden" name="id" value={String(row.id)} />
                  {row.status === "pending" && <button name="status" value="confirmed" className="studio-button">Mark confirmed</button>}
                  <button name="status" value="cancelled" className="studio-button studio-button-outline">Cancel reservation</button>
                </form>
              )}
            </article>
          ))}
        </div>
      )}
      {authenticated && (page > 1 || rows.length > limit) && <nav aria-label="Bookings pages" className="studio-actions">
        {page > 1 && <Link className="studio-link" href={`?page=${page - 1}`}>Previous bookings</Link>}
        {rows.length > limit && <Link className="studio-link" href={`?page=${page + 1}`}>Next bookings</Link>}
      </nav>}
    </main>
  );
}
