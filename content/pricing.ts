/**
 * Pricing & Offers Registry — Care plans, website/app builds, one-time services,
 * and the 4 flagship offers from docs/00-strategy.md & docs/site-facts.md.
 * All prices carry `confirmed: boolean` per Rule 04.
 */

export interface CarePlan {
  id: string;
  name: string;
  priceUsd: number;
  billingPeriod: "/month";
  confirmed: boolean;
  summary: string;
  features: string[];
}

export interface BuildPriceRow {
  id: string;
  serviceName: string;
  startingPriceUsd: number;
  timeline: string;
  confirmed: boolean;
  includes: string;
  href: string;
}

export interface OneTimeServiceItem {
  id: string;
  name: string;
  priceDisplay: string;
  priceUsd: number;
  confirmed: boolean;
  description: string;
  href: string;
}

export interface FlagshipOffer {
  id: "launch-kit" | "growth-engine" | "growth-engine-pro" | "ai-automation-sprint";
  name: string;
  badge?: string;
  featured?: boolean;
  priceDisplay: string;
  priceUsd: number;
  billingType: "one-time" | "monthly";
  minTerm?: string;
  deliveryTime: string;
  confirmed: boolean;
  whoItsFor: string;
  inclusions: string[];
  guardrails: string;
}

export const CARE_PLANS: CarePlan[] = [
  {
    id: "care-essential",
    name: "Essential Care",
    priceUsd: 99,
    billingPeriod: "/month",
    confirmed: false,
    summary: "Core updates, daily cloud backups, uptime monitoring and security checks.",
    features: [
      "Weekly CMS/plugin or dependency updates",
      "Daily off-site backups (30-day retention)",
      "24/7 uptime & SSL monitoring",
      "Up to 1 hour of content or text edits/month",
      "Monthly health & speed summary report",
    ],
  },
  {
    id: "care-growth",
    name: "Growth Care",
    priceUsd: 249,
    billingPeriod: "/month",
    confirmed: false,
    summary: "Priority updates, speed optimization, staging environment and monthly page edits.",
    features: [
      "Everything in Essential Care",
      "Up to 4 hours of design/development edits/month",
      "Core Web Vitals & image optimization check",
      "Search Console error monitoring & fixes",
      "Priority response within one business day",
    ],
  },
  {
    id: "care-scale",
    name: "Scale & E-commerce Care",
    priceUsd: 449,
    billingPeriod: "/month",
    confirmed: false,
    summary: "For active Shopify, WooCommerce and custom web apps needing ongoing iteration.",
    features: [
      "Everything in Growth Care",
      "Up to 10 hours of development/CRO tasks/month",
      "Checkout, form & conversion tracking verification",
      "Staging-first testing before every release",
      "Dedicated Slack / WhatsApp channel",
    ],
  },
];

export const BUILD_PRICES: BuildPriceRow[] = [
  {
    id: "build-5-page",
    serviceName: "5-Page Business Website",
    startingPriceUsd: 499,
    timeline: "10–14 days",
    confirmed: false,
    includes: "Custom mobile-first design, copy polish, contact forms, basic on-page SEO & analytics setup.",
    href: "/web-design-development-service/",
  },
  {
    id: "build-wordpress",
    serviceName: "Custom WordPress Website",
    startingPriceUsd: 699,
    timeline: "2–3 weeks",
    confirmed: false,
    includes: "8–12 pages, easy CMS editing, blog setup, speed optimization & schema markup.",
    href: "/web-design-development-service/",
  },
  {
    id: "build-ecommerce",
    serviceName: "Shopify or WooCommerce Store",
    startingPriceUsd: 1199,
    timeline: "3–4 weeks",
    confirmed: false,
    includes: "Theme customization, up to 50 products imported, payment/shipping setup & Pixel/CAPI.",
    href: "/shopify-store-development-services/",
  },
  {
    id: "build-nextjs",
    serviceName: "Custom-Coded Next.js Website",
    startingPriceUsd: 1999,
    timeline: "3–5 weeks",
    confirmed: false,
    includes: "Bespoke design system, server-rendered App Router architecture, JSON-LD graph & sub-2s LCP.",
    href: "/web-design-development-service/",
  },
  {
    id: "build-webapp-crm",
    serviceName: "Custom Web Application / CRM",
    startingPriceUsd: 3500,
    timeline: "4–8 weeks",
    confirmed: false,
    includes: "Role-based dashboards, database architecture, API integrations & automated workflows.",
    href: "/ai-automation-services/",
  },
  {
    id: "build-flutter-app",
    serviceName: "Mobile App MVP (Flutter iOS + Android)",
    startingPriceUsd: 3900,
    timeline: "6–10 weeks",
    confirmed: false,
    includes: "Single Flutter codebase for iOS & Android, backend API, admin panel & store submission.",
    href: "/mobile-app-development-services/",
  },
];

export const ONE_TIME_SERVICES: OneTimeServiceItem[] = [
  {
    id: "onetime-cro-audit",
    name: "CRO, SEO or AI-Visibility (GEO) Audit",
    priceDisplay: "$99",
    priceUsd: 99,
    confirmed: false,
    description: "Recorded walkthrough + prioritized fix checklist (credited if you hire us within 14 days).",
    href: "/conversion-rate-optimization-services/",
  },
  {
    id: "onetime-creative-batch",
    name: "Ad Creative or Social Graphic Batch",
    priceDisplay: "From $99",
    priceUsd: 99,
    confirmed: false,
    description: "Static ad variations, social carousels or brand kit assets delivered in all aspect ratios.",
    href: "/creative-services/",
  },
  {
    id: "onetime-ai-video",
    name: "AI Video Ad / UGC Spot",
    priceDisplay: "From $149",
    priceUsd: 149,
    confirmed: false,
    description: "Script, voiceover, AI generation, human edit, captions and 9:16 + 1:1 + 16:9 exports.",
    href: "/ai-video-production-services/",
  },
  {
    id: "onetime-gbp-setup",
    name: "Google Business Profile Setup & Optimization",
    priceDisplay: "$199",
    priceUsd: 199,
    confirmed: false,
    description: "Categories, services, geo-tagged photo prep, Q&A seeding and review request link.",
    href: "/google-business-profile-optimization/",
  },
  {
    id: "onetime-ai-chatbot",
    name: "Custom AI Website or WhatsApp Chatbot",
    priceDisplay: "From $499",
    priceUsd: 499,
    confirmed: false,
    description: "Trained on your services and FAQs, with lead capture, calendar booking and human handoff.",
    href: "/ai-chatbot-development/",
  },
];

export const FLAGSHIP_OFFERS: FlagshipOffer[] = [
  {
    id: "launch-kit",
    name: "Launch Kit",
    badge: "One-time · 14 days",
    priceDisplay: "$499",
    priceUsd: 499,
    billingType: "one-time",
    deliveryTime: "14 business days",
    confirmed: false,
    whoItsFor: "New businesses or contractors needing a clean website, Google Maps presence and launch posts fast.",
    inclusions: [
      "5-page custom-designed website (mobile-first, fast, SEO-ready)",
      "Google Business Profile setup & optimization",
      "15 branded social media launch posts + profile banners",
      "Contact form + WhatsApp click-to-chat + GA4 & Search Console setup",
    ],
    guardrails: "Up to 5 pages and 2 revision rounds. Domain and hosting paid directly by client.",
  },
  {
    id: "growth-engine",
    name: "Growth Engine",
    badge: "Most popular",
    featured: true,
    priceDisplay: "$399/mo",
    priceUsd: 399,
    billingType: "monthly",
    minTerm: "6-month minimum term",
    deliveryTime: "Website live in 14 days; monthly marketing starts immediately",
    confirmed: false,
    whoItsFor: "Service businesses and local brands that want one team managing their website, social, ads and Maps.",
    inclusions: [
      "5-page website build or full redesign included (plus hosting & monthly edits)",
      "Social media management (12 custom posts + 4 short reels/month on 2 platforms)",
      "Meta or Google Ads management (up to $1,500/mo ad spend managed)",
      "Google Business Profile management (weekly posts + review replies)",
      "Monthly performance report + 30-minute strategy call",
    ],
    guardrails: "6-month minimum term. Ad spend is paid directly to Meta/Google by the client.",
  },
  {
    id: "growth-engine-pro",
    name: "Growth Engine Pro",
    badge: "Full-stack + AI",
    priceDisplay: "$799/mo",
    priceUsd: 799,
    billingType: "monthly",
    minTerm: "6-month minimum term",
    deliveryTime: "Onboarding in 48h; full stack deployed in weeks 1–3",
    confirmed: false,
    whoItsFor: "Growing brands and multi-service companies ready to combine SEO, multi-channel ads and AI lead handling.",
    inclusions: [
      "Up to 10-page website or Shopify store maintenance & CRO updates",
      "20 social media posts + 8 reels/month across 3 platforms",
      "Meta + Google Ads management (up to $4,000/mo ad spend managed)",
      "Monthly technical & local SEO + 2 human-edited SEO articles/month",
      "AI website & WhatsApp lead-capture chatbot included",
    ],
    guardrails: "6-month minimum term. Ad spend and third-party API usage billed directly to client.",
  },
  {
    id: "ai-automation-sprint",
    name: "AI Automation Sprint",
    badge: "One-time · 10 days",
    priceDisplay: "$999",
    priceUsd: 999,
    billingType: "one-time",
    deliveryTime: "10 business days",
    confirmed: false,
    whoItsFor: "Businesses losing leads to slow replies or spending hours on repetitive CRM, WhatsApp or reporting tasks.",
    inclusions: [
      "Workflow audit + architecture map for 1 core business bottleneck",
      "1 custom AI agent (website/WhatsApp chatbot, voice receptionist or lead engine)",
      "2 connected n8n / Make / Zapier automations synced to your CRM, Sheets or Slack",
      "Human-in-the-loop approval guardrails + 30 days of post-launch tuning",
    ],
    guardrails: "Covers 1 agent + 2 workflows. LLM/telephony API usage (OpenAI, Twilio, etc.) billed at cost to your account.",
  },
];

export const MARKET_COMPARISON_RANGES = [
  {
    roleOrService: "5-page business website + maintenance",
    typicalUsCaRange: "$2,500 – $5,000 upfront + $150/mo",
    webixGrowthEngine: "Included in $399/mo",
  },
  {
    roleOrService: "Social media management (12 posts + 4 reels/mo)",
    typicalUsCaRange: "$800 – $1,500/mo",
    webixGrowthEngine: "Included in $399/mo",
  },
  {
    roleOrService: "Meta / Google Ads management",
    typicalUsCaRange: "$750 – $1,500/mo",
    webixGrowthEngine: "Included in $399/mo",
  },
  {
    roleOrService: "Google Business Profile optimization & posts",
    typicalUsCaRange: "$300 – $500/mo",
    webixGrowthEngine: "Included in $399/mo",
  },
];
