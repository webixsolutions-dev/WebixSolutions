/**
 * Locations Registry — Market-specific pages (/locations/<market>/).
 * All titles <= 60 chars; all metaDescriptions <= 155 chars.
 * Schema must use Service + areaServed (NEVER fake foreign LocalBusiness addresses).
 */

import type { LaunchWave } from "./services";

export interface TimeOverlapRow {
  pktWindow: string;
  localWindow: string;
  activity: string;
}

export interface LocationEntry {
  slug: "canada" | "united-states" | "uae" | "pakistan" | "new-zealand";
  countryName: string;
  shortCode: "CA" | "US" | "AE" | "PK" | "NZ";
  wave: LaunchWave;
  published: boolean;
  /** Max 60 chars */
  title: string;
  /** Max 155 chars */
  metaDescription: string;
  h1: string;
  currencyCode: "CAD" | "USD" | "AED" | "PKR" | "NZD";
  currencyNote: string;
  confirmedRates: boolean;
  timezoneSummary: string;
  overlapRows: TimeOverlapRow[];
  marketSpecificRulesAndPlatforms: string[];
}

export const LOCATIONS_REGISTRY: LocationEntry[] = [
  {
    slug: "canada",
    countryName: "Canada",
    shortCode: "CA",
    wave: "W1",
    published: true,
    title: "Digital Marketing & Web Agency Canada | Webix Solutions",
    metaDescription:
      "Websites, SEO, Meta and Google ads and AI automation for Canadian businesses — working Eastern and Pacific business hours. Prices in CAD.",
    h1: "Digital marketing, websites and AI for businesses in Canada",
    currencyCode: "CAD",
    currencyNote:
      "Quotes available in USD or approximate CAD equivalent. Ad spend is billed directly by Meta/Google in CAD.",
    confirmedRates: false,
    timezoneSummary:
      "Our night shift (9:00 PM – 5:00 AM PKT) overlaps 11:00 AM – 7:00 PM Eastern Time and 8:00 AM – 4:00 PM Pacific Time.",
    overlapRows: [
      {
        pktWindow: "9:00 PM – 1:00 AM PKT",
        localWindow: "11:00 AM – 3:00 PM ET (8:00 AM – 12:00 PM PT)",
        activity: "Live strategy calls, sprint standups, campaign launches & Slack/WhatsApp support",
      },
      {
        pktWindow: "1:00 AM – 5:00 AM PKT",
        localWindow: "3:00 PM – 7:00 PM ET (12:00 PM – 4:00 PM PT)",
        activity: "Same-day revisions, ad optimization, deployment checks & afternoon client calls",
      },
      {
        pktWindow: "9:00 AM – 6:00 PM PKT",
        localWindow: "11:00 PM – 8:00 AM ET (overnight)",
        activity: "Deep engineering, design production & QA ready in your inbox before 9:00 AM ET",
      },
    ],
    marketSpecificRulesAndPlatforms: [
      "CASL-compliant email and SMS opt-in flows with clear consent logging.",
      "PIPEDA-aware analytics, cookie consent banner and form data minimization.",
      "Google Business Profile & Local Services Ads for GTA, Vancouver, Calgary and Ottawa service areas.",
    ],
  },
  {
    slug: "united-states",
    countryName: "United States",
    shortCode: "US",
    wave: "W1",
    published: true,
    title: "US Web Design, SEO & AI Agency | Webix Solutions",
    metaDescription:
      "Custom websites, SEO, Google and Meta ads, and AI receptionists for US businesses and contractors — on your business hours, at offshore prices.",
    h1: "Digital marketing, websites and AI for businesses in the United States",
    currencyCode: "USD",
    currencyNote:
      "All standard packages and project quotes are priced in USD. Ad spend is paid directly to your US ad accounts.",
    confirmedRates: false,
    timezoneSummary:
      "Our dedicated North America shift runs 11:00 AM – 7:00 PM ET (10:00 AM – 6:00 PM CT / 8:00 AM – 4:00 PM PT).",
    overlapRows: [
      {
        pktWindow: "9:00 PM – 1:00 AM PKT",
        localWindow: "11:00 AM – 3:00 PM ET (10:00 AM – 2:00 PM CT)",
        activity: "Discovery calls, project reviews, GBP/LSA updates & real-time team communication",
      },
      {
        pktWindow: "1:00 AM – 5:00 AM PKT",
        localWindow: "3:00 PM – 7:00 PM ET (12:00 PM – 4:00 PM PT)",
        activity: "West Coast onboarding calls, live ad changes & end-of-day handoffs",
      },
      {
        pktWindow: "9:00 AM – 6:00 PM PKT",
        localWindow: "Overnight US hours",
        activity: "Overnight build cycles so staging links and creative batches are ready by morning",
      },
    ],
    marketSpecificRulesAndPlatforms: [
      "Contractor & home-service growth stacks: Google Local Services Ads (LSA), Map Pack SEO and AI voice receptionists.",
      "A2P 10DLC-aware SMS workflows and CAN-SPAM / CCPA privacy disclosures.",
      "Direct ownership of your domains, GitHub repos, Google Ads, Meta Business Manager and CRM.",
    ],
  },
  {
    slug: "uae",
    countryName: "United Arab Emirates",
    shortCode: "AE",
    wave: "W1",
    published: true,
    title: "Digital Marketing & Web Agency UAE | Webix Solutions",
    metaDescription:
      "Websites, Shopify stores, WhatsApp-first ads and AI chatbots for businesses in Dubai, Abu Dhabi and across the UAE. Day-shift overlap with GST.",
    h1: "Digital marketing, websites and AI for businesses in the UAE",
    currencyCode: "AED",
    currencyNote:
      "Quotes available in USD or approximate AED equivalent (1 USD ≈ 3.67 AED). Ad spend is billed directly in AED or USD.",
    confirmedRates: false,
    timezoneSummary:
      "Pakistan Standard Time (UTC+5) is just 1 hour ahead of UAE Gulf Standard Time (UTC+4), giving full-day overlap from 8:00 AM to 5:00 PM GST.",
    overlapRows: [
      {
        pktWindow: "9:00 AM – 1:00 PM PKT",
        localWindow: "8:00 AM – 12:00 PM GST (Dubai / Abu Dhabi)",
        activity: "Morning standups, WhatsApp campaign monitoring, store updates & instant support",
      },
      {
        pktWindow: "2:00 PM – 6:00 PM PKT",
        localWindow: "1:00 PM – 5:00 PM GST",
        activity: "Strategy calls, creative approvals, CRM/chatbot tuning & daily reporting",
      },
      {
        pktWindow: "9:00 PM – 12:00 AM PKT",
        localWindow: "8:00 PM – 11:00 PM GST",
        activity: "Evening peak e-commerce ad monitoring & urgent deployment coverage",
      },
    ],
    marketSpecificRulesAndPlatforms: [
      "WhatsApp-first commerce: Click-to-WhatsApp Meta ads, instant catalog replies and COD confirmation flows.",
      "Bilingual English/Arabic RTL-ready website architecture and UAE payment gateway integrations (Tabby, Tamara, Stripe UAE, Paymob).",
      "Multi-platform paid media across Meta, TikTok, Snapchat and Google Search/Maps.",
    ],
  },
  {
    slug: "pakistan",
    countryName: "Pakistan",
    shortCode: "PK",
    wave: "W1",
    published: true,
    title: "Digital Marketing Agency in Pakistan | Webix Solutions",
    metaDescription:
      "Websites, COD e-commerce stores, Meta and WhatsApp ads, SEO and AI automation for Pakistani businesses. Quotes in PKR. Book a call or WhatsApp us.",
    h1: "Digital marketing, websites and AI for businesses in Pakistan",
    currencyCode: "PKR",
    currencyNote:
      "Local project and retainer quotes available in PKR on request. Meetings available via video call or in Lahore by appointment.",
    confirmedRates: false,
    timezoneSummary:
      "Headquartered in Dunyapur, Punjab with a 20+ person in-house team online 9:00 AM – 6:00 PM PKT (plus night shift until 5:00 AM PKT).",
    overlapRows: [
      {
        pktWindow: "9:00 AM – 1:00 PM PKT",
        localWindow: "9:00 AM – 1:00 PM PKT (Local)",
        activity: "Direct WhatsApp/phone coordination, campaign launches & engineering sprints",
      },
      {
        pktWindow: "2:00 PM – 6:00 PM PKT",
        localWindow: "2:00 PM – 6:00 PM PKT (Local)",
        activity: "Strategy calls, Lahore by-appointment meetings, creative reviews & dispatch sync",
      },
    ],
    marketSpecificRulesAndPlatforms: [
      "COD e-commerce mastery: Shopify & custom Next.js stores integrated with TCS, Leopards, PostEx, M&P and automated WhatsApp order confirmation.",
      "High-volume Click-to-WhatsApp and Meta conversion campaigns tuned for Pakistani consumer behavior.",
      "Real estate, construction, clinic and export-manufacturer websites built to international standards.",
    ],
  },
  {
    slug: "new-zealand",
    countryName: "New Zealand",
    shortCode: "NZ",
    wave: "W2",
    published: false,
    title: "Web & Digital Marketing Agency for NZ | Webix Solutions",
    metaDescription:
      "Websites, Google Maps, SEO and ads for New Zealand businesses, with a team online during your mornings. Prices in NZD.",
    h1: "Digital marketing, websites and AI for businesses in New Zealand",
    currencyCode: "NZD",
    currencyNote:
      "Quotes available in USD or approximate NZD equivalent.",
    confirmedRates: false,
    timezoneSummary:
      "Our shift overlaps New Zealand mornings (5:00 AM – 1:00 PM NZST / 6:00 AM – 2:00 PM NZDT).",
    overlapRows: [
      {
        pktWindow: "10:00 PM – 5:00 AM PKT",
        localWindow: "5:00 AM – 12:00 PM NZST (6:00 AM – 1:00 PM NZDT)",
        activity: "Morning video calls, website updates, local SEO & ad campaign reviews",
      },
    ],
    marketSpecificRulesAndPlatforms: [
      "NZ Privacy Act 2020-compliant data handling and transparent cookie consent.",
      "Local Google Maps, Trade Me / service-directory alignment and fast Cloudflare-cached pages.",
    ],
  },
];

export function getPublishedLocations(): LocationEntry[] {
  return LOCATIONS_REGISTRY.filter((l) => l.published);
}

export function getLocationBySlug(slug: string): LocationEntry | undefined {
  return LOCATIONS_REGISTRY.find((l) => l.slug === slug && l.published);
}
