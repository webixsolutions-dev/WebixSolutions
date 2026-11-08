"use client";

import * as React from "react";
import { subscribeNewsletterAction } from "@/app/actions/newsletter";

export function NewsletterForm() {
  const [status, setStatus] = React.useState<{
    ok?: boolean;
    message?: string;
  } | null>(null);
  const [pending, setPending] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const res = await subscribeNewsletterAction(formData);
    setStatus(res);
    setPending(false);
    if (res.ok) {
      (e.target as HTMLFormElement).reset();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <label
        htmlFor="footer-newsletter-email"
        className="block text-xs font-medium text-[#A7ACB8]"
      >
        Email address
      </label>
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          id="footer-newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@company.com"
          className="h-10 flex-1 rounded-md border border-white/15 bg-[#1C1E24] px-3.5 text-sm text-white placeholder:text-[#a7acb8] focus:border-[#ED1C24] focus:outline-none"
        />
        <button type="submit" disabled={pending} className="studio-button shrink-0">
          {pending ? "Joining..." : "Subscribe"}
        </button>
      </div>
      {status?.message && (
        <p
          role="status"
          className={
            status.ok ? "text-xs text-[#6ed58a]" : "text-xs text-[#ff777e]"
          }
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
