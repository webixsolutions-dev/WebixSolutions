import type { ServicePageContent } from "./types";
import { AI_AUTOMATION_SERVICES } from "./ai-automation-services";
import { WEB_DESIGN_DEVELOPMENT } from "./web-design-development-service";
import { SEO_SERVICES } from "./seo-services";
import { SOCIAL_MEDIA_MANAGEMENT } from "./social-media-management";
import { PAID_ADVERTISING_SERVICES } from "./paid-advertising-services";
import { SHOPIFY_STORE_DEVELOPMENT } from "./shopify-store-development-services";
import { AI_DIGITAL_MARKETING_AGENCY } from "./ai-digital-marketing-agency";
import { AI_CHATBOT_DEVELOPMENT } from "./ai-chatbot-development";
import { AI_ECOMMERCE_AUTOMATION } from "./ai-ecommerce-automation";
import { AI_CONTENT_CREATION_SERVICES } from "./ai-content-creation-services";
import { AI_SOCIAL_MEDIA_CONTENT_CREATION } from "./ai-social-media-content-creation";
import { AI_VIDEO_PRODUCTION_SERVICES } from "./ai-video-production-services";
import { GOOGLE_BUSINESS_PROFILE_OPTIMIZATION } from "./google-business-profile-optimization";
import { CREATIVE_SERVICES } from "./creative-services";
import { MOBILE_APP_DEVELOPMENT_SERVICES } from "./mobile-app-development-services";
import { CONVERSION_RATE_OPTIMIZATION_SERVICES } from "./conversion-rate-optimization-services";
import { BRAND_AWARENESS_STRATEGY } from "./brand-awareness-strategy";
import { REPUTATION_MANAGEMENT_SERVICE } from "./reputation-management-service";
import {
  BUILD_PRICES,
  CARE_PLANS,
  FLAGSHIP_OFFERS,
  ONE_TIME_SERVICES,
} from "@/content/pricing";

export type { ServicePageContent, StatKey } from "./types";

/**
 * All 17 Wave 1 services with written, fact-checked page content.
 */
const PAGES: ServicePageContent[] = [
  AI_AUTOMATION_SERVICES,
  WEB_DESIGN_DEVELOPMENT,
  SEO_SERVICES,
  SOCIAL_MEDIA_MANAGEMENT,
  PAID_ADVERTISING_SERVICES,
  SHOPIFY_STORE_DEVELOPMENT,
  AI_DIGITAL_MARKETING_AGENCY,
  AI_CHATBOT_DEVELOPMENT,
  AI_ECOMMERCE_AUTOMATION,
  AI_CONTENT_CREATION_SERVICES,
  AI_SOCIAL_MEDIA_CONTENT_CREATION,
  AI_VIDEO_PRODUCTION_SERVICES,
  GOOGLE_BUSINESS_PROFILE_OPTIMIZATION,
  CREATIVE_SERVICES,
  MOBILE_APP_DEVELOPMENT_SERVICES,
  CONVERSION_RATE_OPTIMIZATION_SERVICES,
  BRAND_AWARENESS_STRATEGY,
  REPUTATION_MANAGEMENT_SERVICE,
];

export function getServicePageContent(slug: string): ServicePageContent | undefined {
  return PAGES.find((p) => p.slug === slug);
}

export function getServicePageSlugs(): string[] {
  return PAGES.map((p) => p.slug);
}

export interface ResolvedPrice {
  display: string;
  detail?: string;
}

/** Returns a price only when the referenced pricing row is confirmed (Rule 04). */
export function resolveConfirmedPrice(
  ref: ServicePageContent["pricing"]["priceRef"]
): ResolvedPrice | null {
  if (!ref) return null;
  switch (ref.table) {
    case "build": {
      const row = BUILD_PRICES.find((r) => r.id === ref.id);
      return row?.confirmed
        ? { display: `From $${row.startingPriceUsd.toLocaleString("en-US")}`, detail: row.timeline }
        : null;
    }
    case "flagship": {
      const row = FLAGSHIP_OFFERS.find((r) => r.id === ref.id);
      return row?.confirmed ? { display: `From ${row.priceDisplay}`, detail: row.deliveryTime } : null;
    }
    case "oneTime": {
      const row = ONE_TIME_SERVICES.find((r) => r.id === ref.id);
      return row?.confirmed ? { display: row.priceDisplay } : null;
    }
    case "carePlan": {
      const row = CARE_PLANS.find((r) => r.id === ref.id);
      return row?.confirmed ? { display: `$${row.priceUsd}/month` } : null;
    }
  }
}
