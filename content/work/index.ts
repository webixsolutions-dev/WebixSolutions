/**
 * Work / Case Study Registry — Reads case studies and strictly filters out
 * `published: false` entries in production so placeholder samples never show on the live site.
 */

export type WorkCategory =
  | "All"
  | "Websites"
  | "E-commerce"
  | "Custom software & CRM"
  | "AI & automation"
  | "Paid ads"
  | "Social media";

export interface WorkMetric {
  label: string;
  value: string;
  source: string;
}

export interface WorkBeforeAfter {
  beforeLabel: string;
  beforeMetric: string;
  beforeDescription: string;
  afterLabel: string;
  afterMetric: string;
  afterDescription: string;
}

export interface WorkEntry {
  slug: string;
  title: string;
  descriptor: string;
  country: string;
  category: Exclude<WorkCategory, "All">;
  summary: string;
  challenge: string;
  solution: string[];
  results: WorkMetric[];
  services: string[];
  stack: string[];
  beforeAfter?: WorkBeforeAfter;
  permission: "named" | "anonymised";
  published: boolean;
  isSample?: boolean;
}

export const WORK_CATEGORIES: WorkCategory[] = [
  "All",
  "Websites",
  "E-commerce",
  "Custom software & CRM",
  "AI & automation",
  "Paid ads",
  "Social media",
];

export const WORK_REGISTRY: WorkEntry[] = [
  {
    slug: "zelvomart-ecommerce-platform",
    title: "Zelvomart — Custom E-commerce Platform & WhatsApp Ads",
    descriptor: "E-commerce Retail · Pakistan",
    country: "Pakistan",
    category: "E-commerce",
    summary:
      "Engineered an automated WhatsApp order verification flow and high-converting storefront that achieved 64 verified customer conversations at Rs 15.01 each.",
    challenge:
      "Operating a Pakistani direct-to-consumer store faced two critical margins killers: slow mobile checkout causing high ad traffic bounce rates, and a 25%+ return-to-origin (RTO) courier rate caused by unconfirmed Cash-on-Delivery impulse orders.",
    solution: [
      "Custom-coded Next.js storefront delivering sub-2.0s mobile LCP across 3G/4G networks",
      "Automated WhatsApp confirmation bot prompting customers to confirm order address with a single tap before dispatch",
      "Direct API integration with PostEx courier for automated AWB generation and live tracking updates",
      "Click-to-WhatsApp Meta ad campaigns targeted with Roman Urdu copy and optimized for verified sales chats",
    ],
    results: [
      {
        label: "Cost per verified WhatsApp conversation",
        value: "Rs 15.01",
        source: "Meta Ads Manager (30-day verified campaign)",
      },
      {
        label: "Verified customer conversations",
        value: "64",
        source: "Direct WhatsApp Business incoming inquiries",
      },
      {
        label: "Mobile Page Load Speed",
        value: "< 2.0s",
        source: "Google PageSpeed Insights on real 4G",
      },
    ],
    services: [
      "shopify-store-development-services",
      "ai-ecommerce-automation",
      "paid-advertising-services",
    ],
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "Meta Conversions API (CAPI)",
      "WhatsApp Cloud API",
      "PostEx API",
    ],
    permission: "named",
    published: true,
  },
  {
    slug: "us-contractor-websites",
    title: "High-Converting Websites for US Trade Contractors",
    descriptor: "Electrical & Exterior Lighting Contractors · United States",
    country: "United States",
    category: "Websites",
    summary:
      "Custom mobile-first websites with tap-to-call interfaces, city service territory landing pages, and Google LSA optimization for American residential trade businesses.",
    challenge:
      "The contractors were paying expensive monthly fees to legacy agency directories for slow template sites that buried phone numbers, lacked local city landing pages, and locked the business into proprietary hosting where they did not own their source code.",
    solution: [
      "Engineered bespoke mobile-first websites with persistent tap-to-call headers and estimate request forms",
      "Built structured suburban service territory silos (e.g. city-specific trade pages) matching Google Maps categories",
      "Integrated dynamic call tracking scripts with whisper notifications identifying inbound Google ad sources",
      "Migrated all web assets into client-owned GitHub repositories with automated Netlify/Cloudflare edge deployments",
    ],
    results: [
      {
        label: "Intellectual property ownership",
        value: "100%",
        source: "Client-owned GitHub & Cloudflare accounts",
      },
      {
        label: "US Trade businesses delivered",
        value: "3 Builds",
        source: "Electrical, exterior lighting & garage leasing",
      },
      {
        label: "Mobile LCP performance",
        value: "1.6s",
        source: "Core Web Vitals test across North American nodes",
      },
    ],
    services: [
      "web-design-development-service",
      "google-business-profile-optimization",
      "paid-advertising-services",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Google Local Services Ads",
      "Jobber",
      "Twilio CallRail",
    ],
    beforeAfter: {
      beforeLabel: "Previous agency template",
      beforeMetric: "5.8s load time · 0 city silos",
      beforeDescription:
        "Bloated WordPress page builder with no tap-to-call header, broken contact forms, generic stock photos, and proprietary agency hosting lock-in.",
      afterLabel: "Webix Next.js custom build",
      afterMetric: "1.6s load time · 12 city silos",
      afterDescription:
        "Fast Next.js static architecture with sticky emergency call buttons, verified before/after project galleries, and direct Jobber CRM scheduling.",
    },
    permission: "anonymised",
    published: true,
  },
  {
    slug: "custom-crm-agency-operations",
    title: "Custom Agency Operations & Client Management CRM",
    descriptor: "Agency Infrastructure & Workflow Automation · Pakistan & Remote",
    country: "Pakistan",
    category: "Custom software & CRM",
    summary:
      "A comprehensive internal agency operations platform uniting client project pipelines, task management, HR, tool access, and invoicing under one roof with zero per-seat licensing fees.",
    challenge:
      "Coordinating 20+ in-house team members across day and night shifts using disconnected SaaS subscriptions (Asana, Monday, Harvest, Slack bots) resulted in communication gaps, lost file versions, and thousands of dollars annually in per-seat software licensing.",
    solution: [
      "Architected a centralized Next.js web application connected to a secure PostgreSQL database",
      "Built custom role-based modules: Client Management, Project & Task Tracking, HR & Attendance, and Invoicing",
      "Automated shift handoff logs between day team (UAE overlap) and night shift (US/Canada overlap)",
      "Implemented encrypted credential and tool access vaults for managing client advertising and server access",
    ],
    results: [
      {
        label: "Integrated operational modules",
        value: "6 Modules",
        source: "HR, clients, tasks, tools, dashboard, invoices",
      },
      {
        label: "Per-seat monthly subscription fees",
        value: "$0",
        source: "100% owned self-hosted software stack",
      },
      {
        label: "Active daily in-house users",
        value: "20+ Team",
        source: "Webix internal operations campus",
      },
    ],
    services: [
      "ai-automation-services",
      "web-design-development-service",
    ],
    stack: [
      "React",
      "Next.js App Router",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "REST APIs",
    ],
    permission: "anonymised",
    published: true,
  },
  {
    slug: "ai-lead-engine-google-maps",
    title: "AI Lead Engine: From Google Maps to Qualified Inquiries",
    descriptor: "B2B Lead Research & Outreach Automation · United States & Canada",
    country: "United States",
    category: "AI & automation",
    summary:
      "An automated prospecting and research workflow that discovers unoptimized local businesses on Google Maps, enriches contact points, drafts custom personalization, and queues records for human review.",
    challenge:
      "Manual B2B prospecting across target US metropolitan areas required spending dozens of hours collecting business addresses, checking website speeds, locating owner LinkedIn profiles, and typing repetitive introductory emails.",
    solution: [
      "Engineered an automated data pipeline targeting specific trade niches and geographic cities via Google Places",
      "Automated technical enrichment: auditing website mobile speed, Google Business Profile review status, and SSL certificates",
      "Configured LLM prompts that synthesize technical audit findings into a bespoke, helpful two-sentence introduction",
      "Enforced a strict Human-in-the-Loop review queue where an editor must approve or edit each email before dispatch",
    ],
    results: [
      {
        label: "Editorial review safeguard",
        value: "100%",
        source: "Human verification before every dispatch",
      },
      {
        label: "Regulatory compliance",
        value: "CASL & CAN-SPAM",
        source: "Mandatory opt-out & physical address footers",
      },
      {
        label: "Target enrichment stages",
        value: "4 Stages",
        source: "Discover → Audit → Personalize → Human QA",
      },
    ],
    services: [
      "ai-automation-services",
      "google-business-profile-optimization",
    ],
    stack: [
      "OpenAI API",
      "n8n",
      "Google Maps API",
      "Make",
      "Airtable",
      "Webhooks",
    ],
    permission: "anonymised",
    published: true,
  },
  {
    slug: "sample-ecommerce-platform",
    title: "Sample — E-commerce Storefront & WhatsApp Flow",
    descriptor: "Sample Entry · Unpublished Placeholder",
    country: "Pakistan",
    category: "E-commerce",
    summary:
      "Sample placeholder for a custom e-commerce storefront with COD verification and WhatsApp catalog flows.",
    challenge: "Sample placeholder entry.",
    solution: ["Sample item"],
    results: [],
    services: [
      "shopify-store-development-services",
      "ai-ecommerce-automation",
    ],
    stack: ["Next.js", "Node.js", "WhatsApp API"],
    permission: "anonymised",
    published: false,
    isSample: true,
  },
];

export function getPublishedWorkEntries(): WorkEntry[] {
  return WORK_REGISTRY.filter((entry) => entry.published === true);
}

export function getWorkEntryBySlug(slug: string): WorkEntry | undefined {
  return WORK_REGISTRY.find(
    (entry) => entry.slug === slug && entry.published === true
  );
}

export function getPublishedWorkSlugs(): string[] {
  return WORK_REGISTRY.filter((entry) => entry.published === true).map(
    (entry) => entry.slug
  );
}
