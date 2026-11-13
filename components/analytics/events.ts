const CONSENT_STORAGE_KEY = "webix_cookie_consent_v1";

type AnalyticsEvent = "cta_click" | "whatsapp_click" | "form_submit" | "booking_completed";
type AnalyticsParams = Record<string, string>;

export function trackAnalyticsEvent(name: AnalyticsEvent, params: AnalyticsParams = {}) {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id || window.localStorage.getItem(CONSENT_STORAGE_KEY) !== "accepted") return;

  const analytics = window as Window & {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  };
  analytics.dataLayer ??= [];
  if (!analytics.gtag) return;
  analytics.gtag("event", name, params);
}
