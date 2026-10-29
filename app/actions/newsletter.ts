"use server";

export async function subscribeNewsletterAction(formData: FormData) {
  const email = String(formData.get("email") ?? "").trim();
  if (!email || !email.includes("@")) {
    return { ok: false, message: "Please enter a valid work email address." };
  }
  return {
    ok: true,
    message: "Subscribed. You will receive our practical growth & AI notes.",
  };
}
