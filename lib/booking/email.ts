import { BOOKING_CONFIG } from "@/config/booking";

export interface OutgoingEmail {
  to: string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
  attachments?: { filename: string; content: string }[];
}

export type SendResult = { ok: true } | { ok: false; skipped: boolean; error: string };

export function fromAddress() {
  return process.env.BOOKING_FROM_EMAIL || `Webix Solutions <${BOOKING_CONFIG.hostEmail}>`;
}

/** Where staff notifications go. */
export function teamAddress() {
  return process.env.BOOKING_NOTIFY_EMAIL || BOOKING_CONFIG.hostEmail;
}

/**
 * Sends through Resend. Without RESEND_API_KEY nothing is sent and the result says so,
 * so callers can leave their "sent" markers unset and try again once the key is added.
 */
export async function sendEmail(message: OutgoingEmail): Promise<SendResult> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, skipped: true, error: "RESEND_API_KEY is not set" };
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: fromAddress(),
        to: message.to,
        subject: message.subject,
        html: message.html,
        text: message.text,
        reply_to: message.replyTo ?? teamAddress(),
        attachments: message.attachments,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (response.ok) return { ok: true };
    const detail = (await response.text()).slice(0, 300);
    return { ok: false, skipped: false, error: `Resend ${response.status}: ${detail}` };
  } catch (error) {
    return { ok: false, skipped: false, error: error instanceof Error ? error.message : "Email request failed" };
  }
}
