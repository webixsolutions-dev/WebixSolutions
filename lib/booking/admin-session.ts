import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const sessionCookie = "webix_booking_admin";
export const sessionSeconds = 60 * 60 * 6;

export function adminSecret() {
  const secret = process.env.BOOKING_ADMIN_PASSWORD;
  return secret && secret.length >= 24 ? secret : null;
}

function safeEqual(left: string, right: string) {
  const a = Buffer.from(left);
  const b = Buffer.from(right);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function validAdminPassword(password: string) {
  const secret = adminSecret();
  return Boolean(secret && safeEqual(password, secret));
}

export function signAdminSession(expiry: number) {
  const secret = adminSecret();
  if (!secret) throw new Error("Booking dashboard is unconfigured");
  return `${expiry}.${createHmac("sha256", secret).update(`webix-admin:${expiry}`).digest("base64url")}`;
}

export async function hasAdminSession() {
  const token = (await cookies()).get(sessionCookie)?.value;
  if (!token || !adminSecret()) return false;
  const expiry = Number(token.split(".")[0]);
  return Number.isSafeInteger(expiry) && expiry > Date.now() && safeEqual(token, signAdminSession(expiry));
}
