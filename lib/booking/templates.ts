import { BOOKING_CONFIG } from "@/config/booking";
import { SITE_URL } from "@/config/seo";
import { SITE_FACTS } from "@/content/site-facts";
import { generateIcsContent } from "@/components/booking/ics-generator";
import type { BookingRecord } from "./record";
import type { OutgoingEmail } from "./email";

function escape(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function meetingTitle(booking: BookingRecord) {
  return BOOKING_CONFIG.meetingTypes.find((type) => type.slug === booking.meetingType)?.title ?? "Call";
}

/** "Friday, November 13, 2026 at 11:00 AM EST" in the visitor's own zone. */
export function visitorTime(booking: BookingRecord) {
  const start = new Date(booking.startsAt);
  const day = new Intl.DateTimeFormat("en-US", { timeZone: booking.visitorZone, weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(start);
  const time = new Intl.DateTimeFormat("en-US", { timeZone: booking.visitorZone, hour: "numeric", minute: "2-digit", timeZoneName: "short" }).format(start);
  return `${day} at ${time}`;
}

/** Host schedule time, written the way the team reads it. */
export function teamTime(booking: BookingRecord) {
  const start = new Date(booking.startsAt);
  const day = new Intl.DateTimeFormat("en-US", { timeZone: BOOKING_CONFIG.hostTimeZone, weekday: "short", month: "short", day: "numeric" }).format(start);
  const time = new Intl.DateTimeFormat("en-US", { timeZone: BOOKING_CONFIG.hostTimeZone, hour: "numeric", minute: "2-digit" }).format(start);
  return `${day}, ${time} PKT`;
}

function shell(heading: string, body: string, button?: { label: string; href: string }) {
  const action = button
    ? `<p style="margin:24px 0 0"><a href="${escape(button.href)}" style="display:inline-block;background:#C8101A;color:#ffffff;text-decoration:none;font-weight:600;padding:12px 22px;border-radius:10px">${escape(button.label)}</a></p>`
    : "";
  return `<!doctype html><html><body style="margin:0;background:#f4f5f7;font-family:Arial,Helvetica,sans-serif;color:#141519">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:14px">
<tr><td style="background:#141519;border-radius:14px 14px 0 0;padding:18px 28px;color:#ffffff;font-weight:700;font-size:16px">Webix Solutions</td></tr>
<tr><td style="padding:28px">
<h1 style="margin:0 0 14px;font-size:22px;line-height:1.25">${escape(heading)}</h1>
${body}${action}
</td></tr>
<tr><td style="padding:16px 28px;border-top:1px solid #e4e6eb;color:#5b606b;font-size:12px;line-height:1.5">
Webix Solutions · <a href="${SITE_URL}/" style="color:#5b606b">webixsolutions.com</a> · ${escape(SITE_FACTS.contact.email)}
</td></tr></table></td></tr></table></body></html>`;
}

function details(booking: BookingRecord) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:16px 0;border:1px solid #e4e6eb;border-radius:10px;width:100%">
<tr><td style="padding:14px 16px;font-size:15px;line-height:1.6">
<strong>${escape(meetingTitle(booking))}</strong><br>${escape(visitorTime(booking))}<br>
<span style="color:#5b606b">Your time zone: ${escape(booking.visitorZone.replace(/_/g, " "))}</span>
</td></tr></table>`;
}

function calendarAttachment(booking: BookingRecord): OutgoingEmail["attachments"] {
  const ics = generateIcsContent({
    uid: `${booking.id}@webixsolutions.com`,
    title: `${meetingTitle(booking)} with Webix Solutions`,
    description: booking.meetUrl ? `Join: ${booking.meetUrl}` : "Webix Solutions will email the meeting link.",
    startIso: booking.startsAt,
    endIso: booking.endsAt,
    location: booking.meetUrl ?? undefined,
    url: booking.meetUrl ?? undefined,
  });
  return [{ filename: "webix-solutions-call.ics", content: Buffer.from(ics).toString("base64") }];
}

export function confirmationEmail(booking: BookingRecord): OutgoingEmail {
  const first = booking.name.split(" ")[0];
  const link = booking.meetUrl;
  const when = visitorTime(booking);
  const html = shell(
    link ? "Your call is confirmed" : "We have your booking",
    `<p style="margin:0 0 6px;font-size:15px;line-height:1.6">Hi ${escape(first)},</p>
<p style="margin:0;font-size:15px;line-height:1.6">${link ? "Your call with the Webix Solutions team is booked. The meeting link is below." : "Thanks for booking. We are sending your meeting link in a separate email shortly."}</p>
${details(booking)}
<p style="margin:0;font-size:14px;line-height:1.6;color:#454850">The calendar file attached to this email adds the call to your calendar. If you need to change the time, reply to this email.</p>`,
    link ? { label: "Join the meeting", href: link } : undefined,
  );
  const text = `Hi ${first},\n\n${link ? "Your call with Webix Solutions is booked." : "We have your booking. We will send the meeting link shortly."}\n\n${meetingTitle(booking)}\n${when}\n${link ? `\nJoin: ${link}\n` : ""}\nTo change the time, reply to this email.\n\nWebix Solutions`;
  return {
    to: [booking.email],
    subject: link ? `Confirmed: ${meetingTitle(booking)} on ${new Date(booking.startsAt).toLocaleDateString("en-US", { timeZone: booking.visitorZone, month: "short", day: "numeric" })}` : "We have your booking",
    html, text, attachments: calendarAttachment(booking),
  };
}

export function reminderEmail(booking: BookingRecord, kind: "24h" | "1h"): OutgoingEmail {
  const first = booking.name.split(" ")[0];
  const lead = kind === "24h" ? "Your call with Webix Solutions is tomorrow." : "Your call with Webix Solutions starts in about an hour.";
  const html = shell(
    kind === "24h" ? "Reminder: your call is tomorrow" : "Your call starts soon",
    `<p style="margin:0 0 6px;font-size:15px;line-height:1.6">Hi ${escape(first)},</p>
<p style="margin:0;font-size:15px;line-height:1.6">${lead}</p>
${details(booking)}
<p style="margin:0;font-size:14px;line-height:1.6;color:#454850">Having your website link and a few notes about what you want to improve ready will help us use the time well. Need to move it? Reply to this email.</p>`,
    booking.meetUrl ? { label: "Join the meeting", href: booking.meetUrl } : undefined,
  );
  const text = `Hi ${first},\n\n${lead}\n\n${meetingTitle(booking)}\n${visitorTime(booking)}\n${booking.meetUrl ? `\nJoin: ${booking.meetUrl}\n` : ""}\nNeed to move it? Reply to this email.\n\nWebix Solutions`;
  return {
    to: [booking.email],
    subject: kind === "24h" ? "Reminder: your Webix Solutions call is tomorrow" : "Your Webix Solutions call starts in 1 hour",
    html, text, attachments: kind === "24h" ? calendarAttachment(booking) : undefined,
  };
}

const adminUrl = `${SITE_URL}/admin/bookings/`;

function summary(booking: BookingRecord) {
  const rows: [string, string][] = [
    ["Call", `${meetingTitle(booking)} · ${teamTime(booking)}`],
    ["Their time", visitorTime(booking)],
    ["Email", booking.email],
  ];
  if (booking.phone) rows.push(["Phone", booking.phone]);
  if (booking.company) rows.push(["Company", booking.company]);
  if (booking.services.length) rows.push(["Interested in", booking.services.join(", ")]);
  if (booking.notes) rows.push(["Notes", booking.notes]);
  return rows;
}

function teamHtml(heading: string, intro: string, booking: BookingRecord, button: string) {
  const table = summary(booking).map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#5b606b;font-size:14px;vertical-align:top;white-space:nowrap">${escape(k)}</td><td style="padding:6px 0;font-size:14px;line-height:1.5">${escape(v)}</td></tr>`).join("");
  return shell(heading, `<p style="margin:0 0 10px;font-size:15px;line-height:1.6">${escape(intro)}</p><table role="presentation" cellpadding="0" cellspacing="0">${table}</table>`, { label: button, href: adminUrl });
}

function teamText(intro: string, booking: BookingRecord) {
  return `${intro}\n\n${summary(booking).map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nDashboard: ${adminUrl}`;
}

export function teamNewBookingEmail(booking: BookingRecord, to: string): OutgoingEmail {
  const needsLink = !booking.meetUrl;
  const intro = needsLink
    ? `${booking.name} booked a call. No meeting link is set yet: open the dashboard, paste the link and send the confirmation.`
    : `${booking.name} booked a call and has been sent the meeting link.`;
  return {
    to: [to],
    subject: `New booking: ${booking.name} · ${teamTime(booking)}`,
    html: teamHtml("New booking", intro, booking, "Open the dashboard"),
    text: teamText(intro, booking),
    replyTo: booking.email,
  };
}

export function teamOutcomeEmail(booking: BookingRecord, to: string): OutgoingEmail {
  const intro = `The call with ${booking.name} has ended. Mark what happened (call done, no-show, cancelled) so the follow-up is scheduled.`;
  return {
    to: [to],
    subject: `How did the call go? ${booking.name}`,
    html: teamHtml("Mark the call outcome", intro, booking, "Mark the outcome"),
    text: teamText(intro, booking),
    replyTo: booking.email,
  };
}

export function teamFollowUpEmail(booking: BookingRecord, to: string): OutgoingEmail {
  const intro = `Follow up with ${booking.name} (${booking.stage.replace("_", " ")}). Reach out today and update the stage once you have heard back.`;
  return {
    to: [to],
    subject: `Follow up due: ${booking.name}`,
    html: teamHtml("Follow-up due", intro, booking, "Open the dashboard"),
    text: teamText(intro, booking),
    replyTo: booking.email,
  };
}
