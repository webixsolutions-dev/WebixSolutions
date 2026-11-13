import { SITE_URL } from "@/config/seo";

/**
 * Single Source of Truth for Webix Solutions facts, numbers, NAP, hours, and proof.
 * Every [CONFIRM] item has `confirmed: false` so components automatically hide unconfirmed
 * claims in production until confirmed by Haroon.
 */

export interface ConfirmableValue<T> {
  value: T;
  confirmed: boolean;
  note?: string;
}

export interface MarketInfo {
  slug: "canada" | "united-states" | "uae" | "new-zealand" | "pakistan";
  name: string;
  shortCode: "CA" | "US" | "AE" | "NZ" | "PK";
  currency: "CAD" | "USD" | "AED" | "NZD" | "PKR";
  currencySymbol: string;
  ianaTimezone: string;
}

export interface AdResultFact {
  id: string;
  brandName?: string;
  market: string;
  objective: string;
  metricValue: string;
  metricLabel: string;
  detail: string;
  spend: string;
  volume: string;
  confirmed: boolean;
}

export interface OwnBrandFact {
  name: string;
  url?: string;
  market: string;
  description: string;
  confirmed: boolean;
}

export const SITE_FACTS = {
  brandName: "Webix Solutions",
  legalName: {
    value: "Webix Solutions",
    confirmed: false,
    note: "[CONFIRM] Exact registered entity name & form",
  },
  domain: SITE_URL,
  disambiguation:
    "Webix Solutions (webixsolutions.com) is a full-service digital marketing, web development and AI automation agency founded by Haroon Sukhera. It is not affiliated with the Webix JavaScript UI library (webix.com).",
  positioningOneLiner:
    "Webix Solutions is a full-service digital agency with a team of 20+ in Pakistan — we build websites, run growth marketing and ship AI systems for businesses across Canada, the US, the UAE, New Zealand and Pakistan, on your time zone.",

  /** Owner-confirmed 12 Nov 2026. Named as a partnership only; no office claim in Canada. */
  canadaPartner: {
    name: "Camzio Tech",
    statement: "In Canada we work in partnership with Camzio Tech.",
  },

  founder: {
    name: "Haroon Sukhera",
    role: "Founder & CEO",
    photo: "/images/team/haroon-sukhera.webp",
    linkedin: "https://www.linkedin.com/in/haroon-sukhera/",
    githubOrg: "https://github.com/webixsolutions-dev",
    githubPersonal: "https://github.com/Haroon-Sukhera",
  },

  contact: {
    email: "info@webixsolutions.com",
    hrEmail: "hr@webixsolutions.com",
    phoneDisplay: "+92 322 9472354",
    phoneE164: "+923229472354",
    uaePhoneDisplay: "+971 50 406 8312",
    uaePhoneE164: "+971504068312",
    nzPhoneDisplay: "+64 22 611 5072",
    nzPhoneE164: "+64226115072",
    whatsappNumber: "923229472354",
    whatsappUrl:
      "https://wa.me/923229472354?text=Hi%20Webix%20Solutions%20%E2%80%94%20I%27d%20like%20to%20discuss%20a%20project.",
    replySla: {
      value: "Replies within one business day",
      confirmed: false,
    },
  },

  headquarters: {
    /** City is left out on purpose until the Lahore move; add it here and it flows to schema and copy. */
    addressLocality: undefined as string | undefined,
    addressRegion: "Punjab",
    addressCountry: "PK",
    addressCountryName: "Pakistan",
    fullDisplay: "Punjab, Pakistan",
    secondaryNote: "In-person meetings by appointment",
  },

  shifts: {
    dayShiftPkt: "From 9:00 AM PKT",
    dayShiftStartHourPkt: 9,
    dayShiftEndConfirmed: false,
    nightShiftPkt: "9:00 PM – 5:00 AM PKT",
    nightShiftStartHourPkt: 21,
    nightShiftEndHourPkt: 5,
  },

  socials: {
    facebook: "https://www.facebook.com/webixsolutions",
    instagram: "https://www.instagram.com/webix_solutions/",
    linkedin: "https://www.linkedin.com/company/webix-solutions/",
    youtube: "https://www.youtube.com/@WebixSolutions",
    x: "https://x.com/SolutionsW26586",
    github: "https://github.com/webixsolutions-dev",
  },

  stats: {
    teamSize: {
      value: "20+",
      label: "Team members",
      detail: "Developers, designers, marketers and AI engineers in Pakistan",
      confirmed: true,
    },
    websitesDelivered: {
      value: "280",
      label: "Websites delivered",
      detail: "Website projects delivered by Webix Solutions",
      confirmed: true,
    },
    customCodedBuilds: {
      value: "96",
      label: "Custom-coded builds",
      detail: "Projects built with Next.js, React, Node.js, Python and Flutter",
      confirmed: true,
    },
    githubContributionsLastYear: {
      value: "1,402",
      repositoryCount: 96,
      label: "GitHub contributions in the last 12 months",
      detail:
        "1,402 contributions in the last 12 months across 96 Next.js, React, Node.js, Python and Flutter repositories",
      confirmed: true,
    },
    cmsWebsitesBuilt: {
      value: "150",
      label: "CMS websites delivered",
      detail: "WordPress, Shopify, Webflow and Framer",
      confirmed: true,
    },
    socialAccountsManaged: {
      value: "50+",
      label: "Social accounts managed",
      detail: "Instagram, Facebook, TikTok and LinkedIn",
      confirmed: true,
    },
    marketsServedCount: {
      value: "5",
      label: "Core markets served",
      detail: "Canada, the United States, the UAE, New Zealand and Pakistan",
      confirmed: true,
    },
    totalClientsServed: {
      value: "120+",
      label: "Happy clients",
      detail: "Businesses served across web, marketing and AI automation",
      confirmed: true,
    },
    yearsInOperation: {
      value: "3+",
      label: "Years in operation",
      confirmed: false,
    },
  },

  ownBrands: [
    {
      name: "Zelvomart",
      url: "https://zelvomart.com",
      market: "Pakistan",
      description: "Custom e-commerce storefront and COD fulfillment platform in Pakistan.",
      confirmed: true,
    },
    {
      name: "LaptopSouq.ae",
      url: "https://laptopsouq.ae",
      market: "United Arab Emirates",
      description: "Dubai electronics e-commerce store and catalog platform.",
      confirmed: true,
    },
    {
      name: "Miraj Builders",
      market: "Pakistan",
      description: "Real estate and construction project platform.",
      confirmed: true,
    },
  ] satisfies OwnBrandFact[],

  adResults: [
    {
      id: "pkr-whatsapp-convs",
      brandName: "Zelvomart",
      market: "Pakistan",
      objective: "Click-to-WhatsApp e-commerce campaign",
      metricValue: "Rs 15.01",
      metricLabel: "Cost per WhatsApp conversation",
      detail:
        "64 WhatsApp conversations at Rs 15.01 each (Zelvomart, own brand, Pakistan e-commerce, click-to-WhatsApp, last 30 days)",
      spend: "Rs 960.64",
      volume: "64 conversations",
      confirmed: true,
    },
  ] satisfies AdResultFact[],

  markets: [
    {
      slug: "canada",
      name: "Canada",
      shortCode: "CA",
      currency: "CAD",
      currencySymbol: "CA$",
      ianaTimezone: "America/Toronto",
    },
    {
      slug: "united-states",
      name: "United States",
      shortCode: "US",
      currency: "USD",
      currencySymbol: "$",
      ianaTimezone: "America/New_York",
    },
    {
      slug: "uae",
      name: "United Arab Emirates",
      shortCode: "AE",
      currency: "AED",
      currencySymbol: "AED ",
      ianaTimezone: "Asia/Dubai",
    },
    {
      slug: "new-zealand",
      name: "New Zealand",
      shortCode: "NZ",
      currency: "NZD",
      currencySymbol: "NZ$",
      ianaTimezone: "Pacific/Auckland",
    },
    {
      slug: "pakistan",
      name: "Pakistan",
      shortCode: "PK",
      currency: "PKR",
      currencySymbol: "Rs ",
      ianaTimezone: "Asia/Karachi",
    },
  ] satisfies MarketInfo[],

  platformsWeBuildOn: [
    "Next.js",
    "React",
    "Node.js",
    "WordPress",
    "Shopify",
    "WooCommerce",
    "Wix",
    "Webflow",
    "Framer",
    "Squarespace",
    "Flutter",
  ],
} as const;

/**
 * Helper to check if a confirmable item should be rendered.
 * In production, only `confirmed: true` items render.
 */
export function isConfirmed(confirmed: boolean): boolean {
  return confirmed === true;
}
