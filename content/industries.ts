/**
 * Industries Registry — 14 specific industries for the /industries/ hub selector,
 * plus dedicated W1 and W2 industry page metadata and briefs.
 * Every industry has unique struggles and solutions (no repeated bullets).
 */

import type { LaunchWave } from "./services";

export interface IndustryEntry {
  slug: string;
  name: string;
  shortLabel: string;
  hasDedicatedPage: boolean;
  wave: LaunchWave;
  published: boolean;
  /** Only required if hasDedicatedPage is true; max 60 chars */
  title?: string;
  /** Max 155 chars */
  metaDescription?: string;
  h1?: string;
  struggles: [string, string, string];
  whatWeDo: [string, string, string];
  relevantServiceSlugs: string[];
  proofNote?: {
    text: string;
    confirmed: boolean;
  };
}

export const INDUSTRIES_REGISTRY: IndustryEntry[] = [
  {
    slug: "ecommerce",
    name: "E-commerce & Online Retail",
    shortLabel: "E-commerce",
    hasDedicatedPage: true,
    wave: "W1",
    published: true,
    title: "E-commerce Marketing & Stores | Webix Solutions",
    metaDescription:
      "Shopify and custom stores, product-page CRO, Meta and Google Shopping ads, and AI automation for orders and support — built to lower cost per purchase.",
    h1: "Growth for e-commerce brands — store, ads and automation",
    struggles: [
      "Slow mobile product pages and clunky checkouts that leak paid ad traffic before purchase.",
      "High unconfirmed Cash-on-Delivery (COD) return rates in Pakistan and the UAE.",
      "Repetitive 'where is my order?' messages overwhelming WhatsApp and Instagram DMs.",
    ],
    whatWeDo: [
      "Conversion-engineered Shopify, WooCommerce and custom Next.js storefronts with sub-2.5s LCP.",
      "Meta Advantage+ and Google Shopping catalog campaigns paired with Pixel + Conversions API.",
      "Automated WhatsApp COD order verification, abandoned-cart recovery and AI support agents.",
    ],
    relevantServiceSlugs: [
      "shopify-store-development-services",
      "ai-ecommerce-automation",
      "paid-advertising-services",
      "conversion-rate-optimization-services",
    ],
    proofNote: {
      text: "Built and operated our own stores (Zelvomart in Pakistan and LaptopSouq.ae in Dubai).",
      confirmed: false,
    },
  },
  {
    slug: "home-services-contractors",
    name: "Home Services & Contractors",
    shortLabel: "Contractors & Home Services",
    hasDedicatedPage: true,
    wave: "W1",
    published: true,
    title: "Marketing for Home Contractors | Webix Solutions",
    metaDescription:
      "Websites, Google Maps, Local Services Ads and AI receptionists for roofers, electricians, HVAC, cleaning and exterior companies across the US and Canada.",
    h1: "Marketing for contractors and home-service businesses",
    struggles: [
      "Missed calls while crews are on the roof or job site turn directly into jobs for competitors.",
      "Google Business Profiles stuck outside the top 3 Map Pack despite good workmanship.",
      "Outdated websites without service-area pages, before/after proof or instant click-to-call.",
    ],
    whatWeDo: [
      "Fast mobile contractor websites with city/service-area pages and tap-to-call headers.",
      "Google Business Profile optimization, automated review generation and Local Services Ads.",
      "24/7 AI voice receptionists and SMS missed-call text-back that book jobs into your calendar.",
    ],
    relevantServiceSlugs: [
      "web-design-development-service",
      "google-business-profile-optimization",
      "paid-advertising-services",
      "ai-automation-services",
    ],
    proofNote: {
      text: "Delivered websites for an electrical contractor, exterior/holiday-lighting installer and garage-bay leasing business in the US.",
      confirmed: false,
    },
  },
  {
    slug: "real-estate-construction",
    name: "Real Estate & Construction",
    shortLabel: "Real Estate & Construction",
    hasDedicatedPage: true,
    wave: "W1",
    published: true,
    title: "Real Estate & Construction Marketing | Webix Solutions",
    metaDescription:
      "Project and listing websites, lead forms connected to your CRM, WhatsApp follow-up and ads that bring serious buyers — not just clicks.",
    h1: "Marketing and websites for real estate and construction",
    struggles: [
      "Unqualified lead-form submissions that waste sales agents' hours chasing low-intent browsers.",
      "Slow manual follow-up where buyers inquire on Meta ads and wait hours for a brochure on WhatsApp.",
      "Static PDF floorplans instead of interactive project galleries that work smoothly on mobile.",
    ],
    whatWeDo: [
      "High-speed project and listing portals with budget/timeline qualification steps built in.",
      "Instant WhatsApp brochure delivery and AI lead qualification synced straight into your CRM.",
      "Targeted Meta, Google Search and video walkthrough campaigns for investors and homebuyers.",
    ],
    relevantServiceSlugs: [
      "web-design-development-service",
      "paid-advertising-services",
      "ai-chatbot-development",
      "ai-video-production-services",
    ],
    proofNote: {
      text: "Built the Miraj Builders real estate and construction platform.",
      confirmed: false,
    },
  },
  {
    slug: "healthcare-clinics",
    name: "Healthcare, Dental & Clinics",
    shortLabel: "Healthcare & Clinics",
    hasDedicatedPage: true,
    wave: "W2",
    published: false,
    title: "Clinic & Healthcare Marketing Services | Webix Solutions",
    metaDescription:
      "Appointment booking, local SEO, Google Maps, reputation management and privacy-aware websites for clinics, dentists and healthcare practices.",
    h1: "Marketing and websites for clinics and healthcare practices",
    struggles: [
      "Patients searching 'near me' find aggregators or competing clinics first on Google Maps.",
      "Front-desk phone bottlenecks during peak clinic hours leading to unbooked consultations.",
      "Forms and tracking setups that collect excessive patient details without privacy guardrails.",
    ],
    whatWeDo: [
      "Privacy-aware clinic websites with treatment pages, practitioner bios and online booking.",
      "Local SEO, Google Business Profile management and compliant patient review workflows.",
      "AI appointment-booking assistants that answer routine hours/insurance questions 24/7.",
    ],
    relevantServiceSlugs: [
      "web-design-development-service",
      "google-business-profile-optimization",
      "reputation-management-service",
      "ai-chatbot-development",
    ],
  },
  {
    slug: "professional-services",
    name: "Law, Accounting & Consulting",
    shortLabel: "Professional Services",
    hasDedicatedPage: true,
    wave: "W2",
    published: false,
    title: "Marketing for Law & Consulting Firms | Webix Solutions",
    metaDescription:
      "Authority content, LinkedIn, consultation booking and AI intake chat for law firms, accountants, consultants and immigration advisers.",
    h1: "Marketing for professional-service firms",
    struggles: [
      "Generic brochure websites that fail to explain practice areas or build partner credibility.",
      "Partner time spent on discovery calls with prospects who do not fit minimum engagement criteria.",
      "Zero visibility in high-intent Google searches and AI assistant answers for niche advisory queries.",
    ],
    whatWeDo: [
      "Authority websites with structured practice-area guides, case outcomes and calendar booking.",
      "Search & GEO content plus LinkedIn thought-leadership management for firm partners.",
      "AI intake chat that pre-screens case type, jurisdiction and timeline before booking a slot.",
    ],
    relevantServiceSlugs: [
      "web-design-development-service",
      "seo-services",
      "ai-content-creation-services",
      "ai-chatbot-development",
    ],
  },
  {
    slug: "restaurants-hospitality",
    name: "Restaurants, Cafes & Hospitality",
    shortLabel: "Restaurants & Hospitality",
    hasDedicatedPage: true,
    wave: "W2",
    published: false,
    title: "Restaurant & Hospitality Marketing | Webix Solutions",
    metaDescription:
      "Google Maps, menus that search engines can read, reels, reservations and ordering links for restaurants, cafes and hotels.",
    h1: "Marketing for restaurants and hospitality",
    struggles: [
      "Menus locked inside heavy PDFs that cannot be read on phones or indexed by Google and AI.",
      "Inconsistent Instagram/TikTok reels and outdated holiday hours on Google Maps.",
      "High third-party delivery app commissions eating into repeat direct orders.",
    ],
    whatWeDo: [
      "Mobile-first websites with HTML/schema menus, direct table reservations and ordering links.",
      "Google Business Profile photo updates, review replies and local 'near me' visibility.",
      "Short-form reels, food photography editing and geo-targeted Meta promos for quiet nights.",
    ],
    relevantServiceSlugs: [
      "google-business-profile-optimization",
      "social-media-management",
      "web-design-development-service",
      "reputation-management-service",
    ],
  },
  {
    slug: "fitness-wellness",
    name: "Gyms, Personal Trainers & Wellness",
    shortLabel: "Fitness & Wellness",
    hasDedicatedPage: true,
    wave: "W2",
    published: false,
    title: "Gym, Trainer & Wellness Marketing | Webix Solutions",
    metaDescription:
      "Websites, class and session booking, reels and local ads for gyms, personal trainers, studios and wellness brands.",
    h1: "Marketing for fitness and wellness businesses",
    struggles: [
      "Trial-pass leads from Instagram ads who never show up because nobody followed up within 5 minutes.",
      "Clunky class schedules and membership pricing pages that confuse mobile visitors.",
      "High member churn after month one without automated check-ins and community content.",
    ],
    whatWeDo: [
      "High-energy landing pages with clear transformation proof, schedules and trial booking.",
      "Local Meta and TikTok video ads paired with instant WhatsApp/SMS trial confirmation.",
      "Consistent trainer reels, carousel tips and Google review generation from active members.",
    ],
    relevantServiceSlugs: [
      "web-design-development-service",
      "paid-advertising-services",
      "social-media-management",
      "ai-automation-services",
    ],
  },
  {
    slug: "saas-startups",
    name: "SaaS & Tech Startups",
    shortLabel: "SaaS & Startups",
    hasDedicatedPage: true,
    wave: "W2",
    published: false,
    title: "SaaS & Startup Marketing and MVPs | Webix Solutions",
    metaDescription:
      "Landing pages, MVPs, product-led SEO and paid acquisition experiments for SaaS founders and startups — shipped in weeks.",
    h1: "Marketing and MVP development for SaaS and startups",
    struggles: [
      "Engineering bandwidth tied up in core product features while the marketing site stays stale.",
      "High customer acquisition costs on broad keywords without comparison or integration pages.",
      "Manual user onboarding and support tickets slowing down small founding teams.",
    ],
    whatWeDo: [
      "Fast Next.js marketing sites, interactive calculators and full-stack SaaS/Flutter MVPs.",
      "Programmatic comparison pages, technical SEO, llms.txt setup and paid acquisition sprints.",
      "AI docs assistants and automated trial-to-paid onboarding sequences.",
    ],
    relevantServiceSlugs: [
      "web-design-development-service",
      "seo-services",
      "ai-automation-services",
      "ai-video-production-services",
    ],
  },
  {
    slug: "education-training",
    name: "Education, Academies & Training",
    shortLabel: "Education & Training",
    hasDedicatedPage: false,
    wave: "W2",
    published: true,
    struggles: [
      "Course pages that list syllabus bullets without clear career outcomes or cohort dates.",
      "Admissions teams manually answering the same fee and eligibility questions on WhatsApp.",
      "High drop-off between webinar registration and actual student enrollment.",
    ],
    whatWeDo: [
      "Course and academy websites with clear curriculum breakdowns, instructor bios and application flows.",
      "Lead generation campaigns for cohort launches and automated webinar reminder sequences.",
      "WhatsApp & web AI counselors that answer syllabus/fee questions and book advisor calls.",
    ],
    relevantServiceSlugs: [
      "web-design-development-service",
      "paid-advertising-services",
      "ai-chatbot-development",
    ],
  },
  {
    slug: "automotive",
    name: "Automotive, Dealerships & Detailing",
    shortLabel: "Automotive",
    hasDedicatedPage: false,
    wave: "W2",
    published: true,
    struggles: [
      "Inventory or service package pages that load slowly and lack instant quote requests.",
      "Weak local map rankings for high-margin jobs like ceramic coating, PPF or transmission repair.",
      "Slow response to Facebook Marketplace and Instagram DM price inquiries.",
    ],
    whatWeDo: [
      "Fast inventory and service-booking websites with vehicle filters and WhatsApp quote triggers.",
      "Google Business Profile optimization, photo updates and automated customer review requests.",
      "Local Meta lead and click-to-WhatsApp ads showcasing real before/after vehicle work.",
    ],
    relevantServiceSlugs: [
      "google-business-profile-optimization",
      "paid-advertising-services",
      "web-design-development-service",
    ],
  },
  {
    slug: "multi-location",
    name: "Multi-Location & Franchise Brands",
    shortLabel: "Multi-Location",
    hasDedicatedPage: false,
    wave: "W2",
    published: true,
    struggles: [
      "Duplicate-content city pages that cannibalize each other and fail to rank locally.",
      "Inconsistent hours, categories and unanswered reviews across dozens of Google Business Profiles.",
      "Fragmented reporting where headquarters cannot see cost per lead by branch.",
    ],
    whatWeDo: [
      "Structured location page architecture with unique branch details, local schema and fast routing.",
      "Centralized Google Business Profile management, post scheduling and review response across branches.",
      "Unified GA4, Search Console and ad spend dashboards broken down by location.",
    ],
    relevantServiceSlugs: [
      "seo-services",
      "google-business-profile-optimization",
      "web-design-development-service",
    ],
  },
  {
    slug: "beauty-salons",
    name: "Beauty, Salons & Aesthetics",
    shortLabel: "Beauty & Salons",
    hasDedicatedPage: false,
    wave: "W2",
    published: true,
    struggles: [
      "Clients DMing on Instagram at 10 PM to ask for slot availability and booking elsewhere.",
      "Social feeds that look generic instead of showcasing real treatments, stylists and hygiene.",
      "Empty mid-week chairs with no automated way to message past clients with last-minute slots.",
    ],
    whatWeDo: [
      "Sleek booking-integrated websites and link-in-bio funnels tailored for mobile visitors.",
      "Instagram & TikTok reels editing, carousel menus and local radius ad campaigns.",
      "Automated WhatsApp booking confirmations, reminders and review requests after every visit.",
    ],
    relevantServiceSlugs: [
      "social-media-management",
      "ai-social-media-content-creation",
      "paid-advertising-services",
    ],
  },
  {
    slug: "logistics-trucking",
    name: "Logistics, Freight & Trucking",
    shortLabel: "Logistics & Trucking",
    hasDedicatedPage: false,
    wave: "W2",
    published: true,
    struggles: [
      "Difficulty recruiting qualified CDL drivers and owner-operators through generic job boards.",
      "Shippers struggling to request a fast lane/freight quote on outdated desktop-only websites.",
      "Manual dispatch and status update emails tying up operations staff.",
    ],
    whatWeDo: [
      "Modern logistics websites with two clear paths: shipper quote forms and 60-second driver applications.",
      "Targeted Meta and Google driver-recruitment and B2B freight lead campaigns.",
      "Automated CRM routing and WhatsApp/SMS qualification for driver applicants.",
    ],
    relevantServiceSlugs: [
      "web-design-development-service",
      "paid-advertising-services",
      "ai-automation-services",
    ],
  },
  {
    slug: "travel-immigration",
    name: "Travel & Immigration Consultants",
    shortLabel: "Travel & Immigration",
    hasDedicatedPage: false,
    wave: "W2",
    published: true,
    struggles: [
      "Consultants spending hours on WhatsApp answering basic visa eligibility questions for unqualified leads.",
      "Low trust from international applicants when websites lack transparent process timelines and credentials.",
      "Lost follow-ups across multi-month visa or study-abroad application cycles.",
    ],
    whatWeDo: [
      "Trust-focused websites with clear country guides, document checklists and paid/free consultation booking.",
      "AI WhatsApp and website qualification bots that collect country, education and budget before human handoff.",
      "CRM pipeline automation and multilingual Meta/Google lead campaigns.",
    ],
    relevantServiceSlugs: [
      "ai-chatbot-development",
      "paid-advertising-services",
      "web-design-development-service",
    ],
  },
];

export function getAllHubIndustries(): IndustryEntry[] {
  return INDUSTRIES_REGISTRY;
}

export function getPublishedIndustryPages(): IndustryEntry[] {
  return INDUSTRIES_REGISTRY.filter((i) => i.hasDedicatedPage && i.published);
}

export function getIndustryPageBySlug(slug: string): IndustryEntry | undefined {
  return INDUSTRIES_REGISTRY.find(
    (i) => i.slug === slug && i.hasDedicatedPage && i.published
  );
}
