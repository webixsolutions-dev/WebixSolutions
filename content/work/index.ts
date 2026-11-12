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
  cover?: string;
  projectUrl?: string;
  coverCaption?: string;
  challenge: string;
  solution: string[];
  results: WorkMetric[];
  services: string[];
  stack: string[];
  beforeAfter?: WorkBeforeAfter;
  permission: "named" | "anonymised";
  published: boolean;
  isSample?: boolean;
  scopeOnly?: boolean;
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

const workImage = (file: string) => `/images/studio/${file}.webp`;

const anonymousWebsiteScopes: WorkEntry[] = [
  { slug: "property-inspection-site", title: "Property inspection website", summary: "A website build for a property inspection business.", category: "Websites" },
  { slug: "independent-news-blog", title: "Independent news and blog website", summary: "A CMS website for publishing editorial and news articles.", category: "Websites" },
  { slug: "coupons-directory", title: "Coupon directory website", summary: "A website build for a directory of offers and coupons.", category: "E-commerce" },
  { slug: "retail-product-checkout", title: "Retail product and checkout improvements", summary: "Focused page updates for an online retailer, including product information and purchase flow.", category: "E-commerce" },
  { slug: "hospitality-website", title: "Independent motel website", summary: "A website build for a hospitality business.", category: "Websites" },
  { slug: "training-and-education-pages", title: "Education website page build", summary: "A scoped engagement to build three pages for an education provider.", category: "Websites" },
  { slug: "construction-homepage", title: "Building contractor homepage", summary: "A new homepage for a building and renovation business.", category: "Websites" },
  { slug: "social-media-content-management", title: "Social media content management", summary: "Planning and producing posts, reels and campaign creative for service and retail businesses.", category: "Social media" },
  { slug: "book-checkout-redesign", title: "Book storefront checkout redesign", summary: "A targeted checkout redesign for a book storefront.", category: "E-commerce" },
].map((scope) => ({
  ...scope, category: scope.category as WorkEntry["category"], descriptor: "Anonymised client project",
  country: "", challenge: scope.summary, solution: [], results: [], stack: [],
  services: ["web-design-development-service"],
  cover: workImage(scope.category === "E-commerce" ? "commerce" : "systems"),
  permission: "anonymised", published: true, scopeOnly: true,
}));

export const WORK_REGISTRY: WorkEntry[] = [
  {
    slug: "camz-cleaning-booking",
    title: "Camz Cleaning",
    descriptor: "Home services / Calgary, Canada",
    country: "Canada",
    category: "Websites",
    summary: "A cleaning service website with service-area content, instant pricing and an online booking path for Calgary-area households.",
    challenge: "Help customers in Calgary, Airdrie and Chestermere see the cleaning options and get a price before booking.",
    solution: ["A service directory covering regular, deep and move-in or move-out cleaning", "An online pricing and booking flow", "Local content for the Calgary area"],
    results: [],
    services: ["web-design-development-service", "seo-services"],
    stack: [],
    permission: "named",
    published: true,
    cover: workImage("camz"),
    projectUrl: "https://camzcleaning.com/",
  },
  {
    slug: "jooblie",
    title: "Jooblie",
    descriptor: "Recruitment platform",
    country: "",
    category: "Custom software & CRM",
    summary: "A recruitment platform with job search, applications, recruiter tools and an admin dashboard.",
    challenge: "Give job seekers and recruiters separate workspaces while keeping job listings and applications connected.",
    solution: ["Public job search and listings", "Job seeker applications and recruiter dashboards", "Shared publishing across specialist job portals"],
    results: [],
    services: ["custom-crm-development", "web-design-development-service"],
    stack: ["React", "Vite", "Express", "Supabase"],
    permission: "named",
    published: true,
    cover: "/images/studio/jooblie-cover.svg",
    coverCaption: "Illustration of the Jooblie product flow",
  },
  {
    slug: "walshkon-consultants",
    title: "Walshkon Consultants",
    descriptor: "Multi-region consulting website",
    country: "",
    category: "Websites",
    summary: "A consulting website that directs visitors to relevant services by country or region.",
    challenge: "Help visitors navigate a range of consulting services that vary by market.",
    solution: ["Country selection on the homepage", "Market-specific pages and service navigation"],
    results: [],
    services: ["web-design-development-service"],
    stack: ["Next.js", "React"],
    permission: "named",
    published: true,
    cover: workImage("walshkon-cover"),
    coverCaption: "Walshkon Consultants public website",
    projectUrl: "https://www.walshkonconsultants.com/",
  },
  {
    slug: "zelvomart-ecommerce-platform",
    cover: workImage("commerce"),
    title: "Zelvomart — Custom E-commerce Platform & WhatsApp Ads",
    descriptor: "E-commerce Retail · Pakistan",
    country: "Pakistan",
    category: "E-commerce",
    summary:
      "A custom storefront with a cash-on-delivery order verification flow and click-to-WhatsApp campaigns.",
    challenge:
      "Build a mobile storefront and add a way to verify cash-on-delivery orders before dispatch.",
    solution: [
      "Custom Next.js storefront with a mobile-first checkout",
      "Automated WhatsApp confirmation bot prompting customers to confirm order address with a single tap before dispatch",
      "Direct API integration with PostEx courier for automated AWB generation and live tracking updates",
      "Click-to-WhatsApp Meta ad campaigns targeted with Roman Urdu copy and optimized for verified sales chats",
    ],
    results: [
      {
        label: "Cost per WhatsApp conversation",
        value: "Rs 15.01",
        source: "Meta Ads Manager (30-day verified campaign)",
      },
      {
        label: "WhatsApp conversations",
        value: "64",
        source: "Meta Ads Manager campaign reporting",
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
    cover: workImage("trade-cover"),
    title: "Websites for US Trade Contractors",
    descriptor: "Electrical & Exterior Lighting Contractors · United States",
    country: "United States",
    category: "Websites",
    summary:
      "Custom mobile-first websites with tap-to-call interfaces, city service territory landing pages, and Google LSA optimization for American residential trade businesses.",
    challenge:
      "Make it easier for homeowners to find local services, call from a mobile device or request an estimate.",
    solution: [
      "Engineered bespoke mobile-first websites with persistent tap-to-call headers and estimate request forms",
      "Built structured suburban service territory silos (e.g. city-specific trade pages) matching Google Maps categories",
      "Integrated dynamic call tracking scripts with whisper notifications identifying inbound Google ad sources",
      "Migrated all web assets into client-owned GitHub repositories with automated Netlify/Cloudflare edge deployments",
    ],
    results: [
      {
        label: "US Trade businesses delivered",
        value: "3 Builds",
        source: "Electrical, exterior lighting & garage leasing",
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
    permission: "anonymised",
    published: true,
  },
  {
    slug: "custom-crm-agency-operations",
    cover: "/images/studio/crm-cover.svg",
    title: "Custom Agency Operations & Client Management CRM",
    descriptor: "Agency Infrastructure & Workflow Automation · Pakistan",
    country: "Pakistan",
    category: "Custom software & CRM",
    summary:
      "An internal agency platform for client projects, tasks, HR, tool access and invoicing.",
    challenge:
      "Give an agency team one place to track work, manage access and hand projects over between shifts.",
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
    slug: "webix-lead-desk",
    cover: "/images/studio/lead-cover.svg",
    title: "Webix Lead Desk",
    descriptor: "Internal lead research and outreach workspace",
    country: "Built and used by our team",
    category: "AI & automation",
    summary:
      "Our own workspace for finding businesses, checking their websites, drafting outreach and following up on replies. Nothing is sent until a person approves the exact message.",
    coverCaption: "Workflow illustration",
    challenge:
      "Outreach research was spread across spreadsheets, inboxes and chat. We needed one place to research a business, write to it with evidence, and keep every send under human control.",
    solution: [
      "Campaigns by industry and city, with CSV and open-data imports, de-duplication and a global do-not-contact list",
      "Bounded public website checks that record evidence for each lead, with rule-based scores that show their sources",
      "Drafts written by hand or with optional, budget-capped AI, guided by a versioned playbook of offers and proof",
      "Every message revision needs its own owner approval, and a reply stops pending follow-ups",
      "Email through Titan, Hostinger or Gmail mailboxes with daily ramp limits, send windows and holds on uncertain sends",
      "Call lists, meeting outcomes, LinkedIn tasks carried out by a person, and WhatsApp approval alerts for the owner",
      "Encrypted credentials, encrypted backup and restore, and automated tests and CI checks on every change",
    ],
    results: [
      {
        label: "Sending rule",
        value: "Human-approved",
        source: "No message leaves without owner approval of that exact revision",
      },
    ],
    services: [
      "ai-automation-services",
      "custom-web-application-development",
    ],
    stack: [
      "Python 3.12",
      "FastAPI",
      "HTMX",
      "SQLAlchemy",
      "Alembic",
      "PostgreSQL",
      "OpenAI API",
    ],
    permission: "named",
    published: true,
  },
  ...anonymousWebsiteScopes,
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
    (entry) => entry.slug === slug && entry.published && !entry.scopeOnly
  );
}

export function getPublishedWorkSlugs(): string[] {
  return WORK_REGISTRY.filter((entry) => entry.published && !entry.scopeOnly).map(
    (entry) => entry.slug
  );
}
