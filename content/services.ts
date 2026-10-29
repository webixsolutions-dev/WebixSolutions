/**
 * Service Registry — Single source of truth for all service routes, navigation columns,
 * sitemaps, metadata, and page templates.
 * All titles <= 60 characters; all metaDescriptions <= 155 characters.
 */

export type ServiceCategory = "Build" | "Grow" | "AI" | "Create";
export type LaunchWave = "W1" | "W2";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceOutcome {
  title: string;
  detail: string;
}

export interface ServiceDeliverableGroup {
  groupTitle: string;
  items: string[];
}

export interface ServiceStep {
  stepNumber: string;
  title: string;
  timeline: string;
  description: string;
}

export interface ServiceEntry {
  slug: string;
  name: string;
  shortName: string;
  category: ServiceCategory;
  wave: LaunchWave;
  published: boolean;
  /** Full <title> string, max 60 chars */
  title: string;
  /** Meta description, max 155 chars */
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  shortOutcome: string;
  startingPrice?: string;
  priceUnit?: string;
  confirmedPrice: boolean;
  relatedSlugs: string[];
  industrySlug?: string;
  tools?: string[];
  introSentences?: [string, string];
  outcomes?: ServiceOutcome[];
  deliverables?: ServiceDeliverableGroup[];
  steps?: ServiceStep[];
  faqs?: ServiceFaq[];
}

export const SERVICES_REGISTRY: ServiceEntry[] = [
  // ============================================================================
  // BUILD COLUMN
  // ============================================================================
  {
    slug: "web-design-development-service",
    name: "Custom Web Design & Development",
    shortName: "Web Design & Development",
    category: "Build",
    wave: "W1",
    published: true,
    title: "Custom Web Design & Development | Webix Solutions",
    metaDescription:
      "Custom-coded and CMS websites that load fast, rank and convert. Next.js, WordPress, Shopify. From $499 for a 5-page site. Book a free call.",
    h1: "Custom web design and development services",
    primaryKeyword: "custom web design and development services",
    secondaryKeywords: [
      "business website design",
      "website redesign",
      "responsive web design",
      "Next.js development",
      "WordPress website design",
      "offshore web development",
    ],
    shortOutcome: "Fast, search-ready websites coded in Next.js or built on WordPress and Shopify.",
    startingPrice: "$499",
    priceUnit: "one-time (5-page site)",
    confirmedPrice: false,
    relatedSlugs: [
      "shopify-store-development-services",
      "cms-website-development",
      "custom-web-application-development",
      "website-maintenance-services",
    ],
  },
  {
    slug: "shopify-store-development-services",
    name: "Shopify Store Development",
    shortName: "Shopify Stores",
    category: "Build",
    wave: "W1",
    published: true,
    title: "Shopify Store Development Services | Webix Solutions",
    metaDescription:
      "Shopify stores designed to sell: theme setup or custom theme, apps, payments, product import and conversion-focused product pages. Launch in weeks.",
    h1: "Shopify store development services",
    primaryKeyword: "Shopify store development services",
    secondaryKeywords: [
      "Shopify developer",
      "Shopify store setup",
      "custom Shopify theme",
      "Shopify migration",
      "Shopify SEO",
    ],
    shortOutcome: "Conversion-focused Shopify storefronts, migrations, catalog setups and checkout flows.",
    startingPrice: "$1,199",
    priceUnit: "one-time",
    confirmedPrice: false,
    relatedSlugs: [
      "web-design-development-service",
      "ai-ecommerce-automation",
      "conversion-rate-optimization-services",
    ],
  },
  {
    slug: "mobile-app-development-services",
    name: "Mobile App Development (Flutter)",
    shortName: "Mobile Apps (Flutter)",
    category: "Build",
    wave: "W1",
    published: true,
    title: "Mobile App Development Services (Flutter) | Webix Solutions",
    metaDescription:
      "iOS and Android apps from one Flutter codebase — MVPs, booking apps, e-commerce and internal tools — with backend, admin panel and store submission.",
    h1: "Mobile app development services",
    primaryKeyword: "mobile app development services",
    secondaryKeywords: [
      "Flutter app development",
      "iOS and Android app",
      "MVP app development",
      "app development company",
    ],
    shortOutcome: "Cross-platform iOS and Android apps built from a single Flutter codebase.",
    startingPrice: "$3,900",
    priceUnit: "MVP build",
    confirmedPrice: false,
    relatedSlugs: [
      "custom-web-application-development",
      "web-design-development-service",
      "ai-automation-services",
    ],
  },
  {
    slug: "custom-web-application-development",
    name: "Custom Web Applications",
    shortName: "Custom Web Apps",
    category: "Build",
    wave: "W2",
    published: false,
    title: "Custom Web Application Development | Webix Solutions",
    metaDescription:
      "Portals, dashboards, booking systems, invoicing tools and SaaS MVPs built with Next.js, React and Node.js — fast, secure and made to scale.",
    h1: "Custom web application development",
    primaryKeyword: "custom web application development",
    secondaryKeywords: [
      "Next.js development company",
      "React development services",
      "SaaS MVP development",
      "web portal development",
    ],
    shortOutcome: "Portals, SaaS MVPs, dashboards and booking tools built in Next.js, React and Node.js.",
    startingPrice: "$3,500",
    priceUnit: "scoped project",
    confirmedPrice: false,
    relatedSlugs: [
      "web-design-development-service",
      "custom-crm-development",
      "mobile-app-development-services",
    ],
  },
  {
    slug: "cms-website-development",
    name: "CMS Website Development",
    shortName: "CMS Websites",
    category: "Build",
    wave: "W2",
    published: false,
    title: "CMS Website Development Services | Webix Solutions",
    metaDescription:
      "WordPress, WooCommerce, Shopify, Wix, Webflow and Squarespace websites — 50+ CMS builds delivered. Easy to edit, fast and SEO-ready.",
    h1: "CMS website development on every major platform",
    primaryKeyword: "CMS website development",
    secondaryKeywords: [
      "Wix website design",
      "Webflow development",
      "Squarespace website design",
      "WooCommerce development",
    ],
    shortOutcome: "Easy-to-edit sites on WordPress, Wix, Webflow, Squarespace and WooCommerce.",
    startingPrice: "$699",
    priceUnit: "one-time",
    confirmedPrice: false,
    relatedSlugs: [
      "web-design-development-service",
      "wordpress-development-services",
      "shopify-store-development-services",
    ],
  },
  {
    slug: "wordpress-development-services",
    name: "WordPress Development",
    shortName: "WordPress Development",
    category: "Build",
    wave: "W2",
    published: false,
    title: "WordPress Development Services | Webix Solutions",
    metaDescription:
      "Custom WordPress and Elementor Pro websites, WooCommerce stores, speed fixes, malware cleanup and ongoing care from a team that has built 50+ CMS sites.",
    h1: "WordPress development services",
    primaryKeyword: "WordPress development services",
    secondaryKeywords: [
      "WordPress developer",
      "Elementor website design",
      "WooCommerce development",
      "WordPress speed optimization",
    ],
    shortOutcome: "Custom WordPress builds, WooCommerce stores, speed optimization and malware cleanup.",
    startingPrice: "$699",
    priceUnit: "one-time",
    confirmedPrice: false,
    relatedSlugs: [
      "cms-website-development",
      "website-maintenance-services",
      "web-design-development-service",
    ],
  },
  {
    slug: "custom-crm-development",
    name: "Custom CRM Development",
    shortName: "Custom CRM",
    category: "Build",
    wave: "W2",
    published: false,
    title: "Custom CRM Development Services | Webix Solutions",
    metaDescription:
      "A CRM built around how your team actually sells: pipelines, tasks, invoices, HR and dashboards in one place — no per-seat fees.",
    h1: "Custom CRM development",
    primaryKeyword: "custom CRM development",
    secondaryKeywords: [
      "CRM software development",
      "custom CRM for small business",
      "CRM integration",
    ],
    shortOutcome: "Tailored pipelines, client portals, invoicing and operations without per-seat fees.",
    startingPrice: "$3,500",
    priceUnit: "scoped project",
    confirmedPrice: false,
    relatedSlugs: [
      "custom-web-application-development",
      "ai-automation-services",
      "lead-generation-automation",
    ],
  },
  {
    slug: "website-maintenance-services",
    name: "Website Maintenance & Care",
    shortName: "Website Maintenance",
    category: "Build",
    wave: "W2",
    published: false,
    title: "Website Maintenance from $99/month | Webix Solutions",
    metaDescription:
      "Updates, backups, security checks, uptime and speed monitoring, content edits and monthly reports for WordPress, Shopify and custom sites.",
    h1: "Website maintenance services",
    primaryKeyword: "website maintenance services",
    secondaryKeywords: [
      "WordPress maintenance",
      "website care plan",
      "website support",
    ],
    shortOutcome: "Backups, security patches, speed checks and content edits for complete peace of mind.",
    startingPrice: "$99",
    priceUnit: "/month",
    confirmedPrice: false,
    relatedSlugs: [
      "web-design-development-service",
      "wordpress-development-services",
      "seo-services",
    ],
  },

  // ============================================================================
  // GROW COLUMN
  // ============================================================================
  {
    slug: "seo-services",
    name: "SEO Services",
    shortName: "SEO Services",
    category: "Grow",
    wave: "W1",
    published: true,
    title: "SEO Services for Rankings & Leads | Webix Solutions",
    metaDescription:
      "Technical, on-page, local and content SEO that brings qualified traffic — plus visibility in AI answers. Monthly reporting from Search Console and GA4.",
    h1: "SEO services that bring in qualified leads",
    primaryKeyword: "SEO services",
    secondaryKeywords: [
      "technical SEO",
      "local SEO",
      "on-page SEO",
      "SEO audit",
      "link building",
      "SEO agency for small business",
    ],
    shortOutcome: "Technical fixes, local rankings and buyer-intent content measured in Search Console.",
    startingPrice: "$299",
    priceUnit: "/month",
    confirmedPrice: false,
    relatedSlugs: [
      "google-business-profile-optimization",
      "ai-content-creation-services",
      "conversion-rate-optimization-services",
    ],
  },
  {
    slug: "google-business-profile-optimization",
    name: "Google Business Profile & Maps",
    shortName: "Google Business Profile",
    category: "Grow",
    wave: "W1",
    published: true,
    title: "Google Business Profile Optimization | Webix Solutions",
    metaDescription:
      "Show up on Google Maps and turn profile views into calls: setup, verification support, categories, photos, posts, Q&A, reviews and monthly reporting.",
    h1: "Google Business Profile and Google Maps optimization",
    primaryKeyword: "Google Business Profile optimization",
    secondaryKeywords: [
      "Google Maps SEO",
      "Google My Business optimization",
      "local map pack ranking",
      "GBP management",
    ],
    shortOutcome: "Turn local Google Maps searches into direct phone calls, direction requests and bookings.",
    startingPrice: "$149",
    priceUnit: "/month ($199 setup)",
    confirmedPrice: false,
    relatedSlugs: [
      "seo-services",
      "reputation-management-service",
      "paid-advertising-services",
    ],
  },
  {
    slug: "paid-advertising-services",
    name: "PPC & Paid Social Advertising",
    shortName: "Paid Advertising (PPC & Social)",
    category: "Grow",
    wave: "W1",
    published: true,
    title: "PPC & Paid Social Advertising Services | Webix Solutions",
    metaDescription:
      "Meta, Google, TikTok and LinkedIn ads managed for leads and sales, including click-to-WhatsApp campaigns. Ad spend is paid directly by you.",
    h1: "PPC and paid social advertising services",
    primaryKeyword: "PPC management services",
    secondaryKeywords: [
      "Facebook ads management",
      "Google Ads management",
      "Meta ads agency",
      "TikTok ads",
      "click-to-WhatsApp ads",
      "lead generation ads",
    ],
    shortOutcome: "Meta, Google, TikTok and LinkedIn ad campaigns built for qualified leads and purchases.",
    startingPrice: "$249",
    priceUnit: "/month (or 15% of spend)",
    confirmedPrice: false,
    relatedSlugs: [
      "conversion-rate-optimization-services",
      "ai-video-production-services",
      "creative-services",
    ],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    shortName: "Social Media Management",
    category: "Grow",
    wave: "W1",
    published: true,
    title: "Social Media Management Services | Webix Solutions",
    metaDescription:
      "Strategy, content, posting and community management for Instagram, Facebook, TikTok and LinkedIn. 50+ accounts managed. Plans from $149/month.",
    h1: "Social media management services",
    primaryKeyword: "social media management services",
    secondaryKeywords: [
      "social media management agency",
      "Instagram management",
      "Facebook page management",
      "TikTok management",
      "LinkedIn management",
    ],
    shortOutcome: "Consistent on-brand posts, reels, scheduling and community replies across 4+ platforms.",
    startingPrice: "$149",
    priceUnit: "/month",
    confirmedPrice: false,
    relatedSlugs: [
      "ai-social-media-content-creation",
      "ai-video-production-services",
      "paid-advertising-services",
      "creative-services",
    ],
  },
  {
    slug: "conversion-rate-optimization-services",
    name: "Conversion Rate Optimization (CRO)",
    shortName: "Conversion Rate Optimization",
    category: "Grow",
    wave: "W1",
    published: true,
    title: "Conversion Rate Optimization Services | Webix Solutions",
    metaDescription:
      "Turn more visitors into leads and sales with research, heatmaps (Microsoft Clarity), A/B tests and faster pages. Audit from $99.",
    h1: "Conversion rate optimization services",
    primaryKeyword: "conversion rate optimization services",
    secondaryKeywords: [
      "CRO agency",
      "landing page optimization",
      "A/B testing",
      "ecommerce CRO",
    ],
    shortOutcome: "Clarity heatmaps, form friction fixes and landing page improvements that lift enquiries.",
    startingPrice: "$99",
    priceUnit: "audit",
    confirmedPrice: false,
    relatedSlugs: [
      "web-design-development-service",
      "shopify-store-development-services",
      "paid-advertising-services",
    ],
  },
  {
    slug: "reputation-management-service",
    name: "Online Reputation Management",
    shortName: "Reputation Management",
    category: "Grow",
    wave: "W1",
    published: true,
    title: "Online Reputation Management Services | Webix Solutions",
    metaDescription:
      "Get more genuine reviews, respond to every review professionally, and fix what people see when they search your name. Google, Facebook, Trustpilot.",
    h1: "Online reputation management services",
    primaryKeyword: "online reputation management services",
    secondaryKeywords: [
      "review management",
      "Google review generation",
      "ORM agency",
    ],
    shortOutcome: "Automated genuine review requests, professional responses and search result cleanup.",
    startingPrice: "$149",
    priceUnit: "/month",
    confirmedPrice: false,
    relatedSlugs: [
      "google-business-profile-optimization",
      "seo-services",
      "brand-awareness-strategy",
    ],
  },
  {
    slug: "ai-search-optimization",
    name: "AI Search Optimization (GEO)",
    shortName: "AI Search Optimization (GEO)",
    category: "Grow",
    wave: "W2",
    published: false,
    title: "AI Search Optimization (GEO) Services | Webix Solutions",
    metaDescription:
      "Make sure ChatGPT, Perplexity, Gemini and Google AI Overviews can reach, read and correctly describe your business. Audits, fixes, schema and llms.txt.",
    h1: "AI search optimization (GEO) services",
    primaryKeyword: "generative engine optimization services",
    secondaryKeywords: [
      "AI search optimization",
      "GEO agency",
      "AEO",
      "optimize for ChatGPT",
      "AI Overviews optimization",
    ],
    shortOutcome: "Server-rendered content, JSON-LD graphs and llms.txt so AI assistants read your brand accurately.",
    startingPrice: "$99",
    priceUnit: "audit",
    confirmedPrice: false,
    relatedSlugs: [
      "seo-services",
      "ai-content-creation-services",
      "web-design-development-service",
    ],
  },

  // ============================================================================
  // AI COLUMN
  // ============================================================================
  {
    slug: "ai-automation-services",
    name: "AI Automation & AI Agents",
    shortName: "AI Automation & Agents",
    category: "AI",
    wave: "W1",
    published: true,
    title: "AI Automation Services & AI Agents | Webix Solutions",
    metaDescription:
      "We build AI agents and automations that answer leads, update your CRM, follow up and report — using OpenAI, n8n, Make and Zapier. Sprints from $999.",
    h1: "AI automation services and AI agents for business",
    primaryKeyword: "AI automation services",
    secondaryKeywords: [
      "AI automation solutions",
      "AI business automation",
      "AI agent development",
      "workflow automation",
      "business process automation",
      "CRM automation",
    ],
    shortOutcome: "Custom AI agents and n8n/Make workflows that answer leads, update your CRM and save hours.",
    startingPrice: "$999",
    priceUnit: "10-day sprint",
    confirmedPrice: false,
    relatedSlugs: [
      "ai-chatbot-development",
      "ai-ecommerce-automation",
      "ai-digital-marketing-agency",
    ],
    industrySlug: "home-services-contractors",
  },
  {
    slug: "ai-chatbot-development",
    name: "AI Chatbot Development",
    shortName: "AI Chatbots (Web & WhatsApp)",
    category: "AI",
    wave: "W1",
    published: true,
    title: "AI Chatbot Development Services | Webix Solutions",
    metaDescription:
      "Custom AI chatbots for your website and WhatsApp, trained on your services, prices and policies. Captures leads, books calls, hands off to humans.",
    h1: "AI chatbot development services",
    primaryKeyword: "AI chatbot development services",
    secondaryKeywords: [
      "custom AI chatbot",
      "WhatsApp chatbot",
      "website chatbot for business",
      "GPT chatbot development",
    ],
    shortOutcome: "Website and WhatsApp AI assistants trained on your prices and docs, with clean human handoff.",
    startingPrice: "$499",
    priceUnit: "setup",
    confirmedPrice: false,
    relatedSlugs: [
      "ai-automation-services",
      "ai-ecommerce-automation",
      "web-design-development-service",
    ],
  },
  {
    slug: "ai-ecommerce-automation",
    name: "AI E-commerce Automation",
    shortName: "AI E-commerce Automation",
    category: "AI",
    wave: "W1",
    published: true,
    title: "AI Automation for E-commerce Businesses | Webix Solutions",
    metaDescription:
      "Automate order confirmations, WhatsApp support, product content, abandoned carts and reviews with custom AI for Shopify, WooCommerce and custom stores.",
    h1: "Custom AI automation for e-commerce businesses",
    primaryKeyword: "AI automation for ecommerce",
    secondaryKeywords: [
      "ecommerce automation",
      "Shopify AI automation",
      "AI customer support for ecommerce",
      "WhatsApp order confirmation automation",
    ],
    shortOutcome: "WhatsApp COD order verification, 24/7 store support, catalog enrichment and review follow-up.",
    startingPrice: "$999",
    priceUnit: "sprint",
    confirmedPrice: false,
    relatedSlugs: [
      "shopify-store-development-services",
      "ai-chatbot-development",
      "ai-automation-services",
    ],
    industrySlug: "ecommerce",
  },
  {
    slug: "ai-digital-marketing-agency",
    name: "AI Digital Marketing Agency",
    shortName: "AI Digital Marketing",
    category: "AI",
    wave: "W1",
    published: true,
    title: "AI Digital Marketing Agency | Webix Solutions",
    metaDescription:
      "Human strategists plus AI for faster content, sharper ad testing, smarter SEO and automated follow-up. See how AI is built into every Webix service.",
    h1: "An AI digital marketing agency with a human team behind it",
    primaryKeyword: "AI digital marketing agency",
    secondaryKeywords: [
      "AI marketing agency",
      "AI-powered marketing",
      "AI marketing services",
    ],
    shortOutcome: "Human strategists paired with AI workflows for faster testing, sharper content and instant lead follow-up.",
    startingPrice: "$399",
    priceUnit: "/month",
    confirmedPrice: false,
    relatedSlugs: [
      "ai-automation-services",
      "ai-content-creation-services",
      "ai-social-media-content-creation",
      "ai-video-production-services",
    ],
  },
  {
    slug: "ai-voice-agent-development",
    name: "AI Voice Agents & Receptionists",
    shortName: "AI Voice Receptionists",
    category: "AI",
    wave: "W2",
    published: false,
    title: "AI Voice Agents & AI Receptionists | Webix Solutions",
    metaDescription:
      "An AI receptionist that answers every call, qualifies the job, books it in your calendar and texts you a summary. Built for contractors and clinics.",
    h1: "AI voice agents and AI receptionists",
    primaryKeyword: "AI receptionist",
    secondaryKeywords: [
      "AI voice agent development",
      "AI phone answering service",
      "virtual receptionist AI for contractors",
    ],
    shortOutcome: "24/7 phone answering that qualifies callers, books jobs into your calendar and texts summaries.",
    startingPrice: "$799",
    priceUnit: "setup + $149/mo",
    confirmedPrice: false,
    relatedSlugs: [
      "ai-automation-services",
      "ai-chatbot-development",
      "google-business-profile-optimization",
    ],
  },
  {
    slug: "lead-generation-automation",
    name: "B2B Lead Generation Automation",
    shortName: "Lead Generation Automation",
    category: "AI",
    wave: "W2",
    published: false,
    title: "B2B Lead Generation Automation | Webix Solutions",
    metaDescription:
      "Automated prospect lists, enrichment and personalised outreach — built on compliant data sources, with human review before anything is sent.",
    h1: "B2B lead generation automation",
    primaryKeyword: "lead generation automation",
    secondaryKeywords: [
      "automated lead generation",
      "B2B lead generation services",
      "cold email automation",
    ],
    shortOutcome: "Compliant prospect research, data enrichment and human-reviewed personalised outreach.",
    startingPrice: "$999",
    priceUnit: "setup",
    confirmedPrice: false,
    relatedSlugs: [
      "ai-automation-services",
      "paid-advertising-services",
      "custom-crm-development",
    ],
  },

  // ============================================================================
  // CREATE COLUMN
  // ============================================================================
  {
    slug: "ai-content-creation-services",
    name: "AI Content Creation (Human-Edited)",
    shortName: "AI Content Creation",
    category: "Create",
    wave: "W1",
    published: true,
    title: "AI Content Creation Services | Webix Solutions",
    metaDescription:
      "SEO articles, product descriptions, landing pages and emails produced with AI and edited by people — on brand, fact-checked and built to rank.",
    h1: "AI content creation services, edited by humans",
    primaryKeyword: "AI content creation services",
    secondaryKeywords: [
      "AI content writing services",
      "AI SEO content",
      "AI product descriptions",
      "AI copywriting",
    ],
    shortOutcome: "SEO articles, landing copy and catalog descriptions drafted with AI and fact-checked by human editors.",
    startingPrice: "$199",
    priceUnit: "/month",
    confirmedPrice: false,
    relatedSlugs: [
      "seo-services",
      "ai-social-media-content-creation",
      "ai-ecommerce-automation",
    ],
  },
  {
    slug: "ai-social-media-content-creation",
    name: "AI Social Media Content",
    shortName: "AI Social Media Content",
    category: "Create",
    wave: "W1",
    published: true,
    title: "AI Social Media Content Creation | Webix Solutions",
    metaDescription:
      "Posts, carousels, reels and captions created with AI and finished by designers — a month of on-brand content, planned, approved and scheduled.",
    h1: "AI social media content creation services",
    primaryKeyword: "AI social media content creation services",
    secondaryKeywords: [
      "AI social media posts",
      "AI reels",
      "AI content calendar",
      "AI generated social media content",
    ],
    shortOutcome: "Monthly batches of carousels, graphics, reels and captions finished by in-house designers.",
    startingPrice: "$149",
    priceUnit: "/month",
    confirmedPrice: false,
    relatedSlugs: [
      "social-media-management",
      "ai-video-production-services",
      "creative-services",
    ],
  },
  {
    slug: "ai-video-production-services",
    name: "AI Video Production & UGC Ads",
    shortName: "AI Video Production",
    category: "Create",
    wave: "W1",
    published: true,
    title: "AI Video Production Services | Webix Solutions",
    metaDescription:
      "AI video ads, UGC-style videos, product videos and explainers in days, not weeks. Scripts, voiceover, captions and every aspect ratio included.",
    h1: "AI video production services",
    primaryKeyword: "AI video production services",
    secondaryKeywords: [
      "AI video ads",
      "AI UGC ads",
      "AI generated video for business",
      "AI explainer video",
    ],
    shortOutcome: "Ad-ready AI UGC spots, product videos and explainers with scripts, voiceover and captions.",
    startingPrice: "$149",
    priceUnit: "/video (or $499/mo pack)",
    confirmedPrice: false,
    relatedSlugs: [
      "paid-advertising-services",
      "ai-social-media-content-creation",
      "creative-services",
    ],
  },
  {
    slug: "creative-services",
    name: "Graphic Design & Creative Studio",
    shortName: "Creative & Graphic Design",
    category: "Create",
    wave: "W1",
    published: true,
    title: "Graphic Design & Creative Services | Webix Solutions",
    metaDescription:
      "Logos, brand kits, social graphics, ad creatives, packaging and video editing from an in-house creative team. Batches from $99.",
    h1: "Graphic design and creative studio services",
    primaryKeyword: "graphic design services",
    secondaryKeywords: [
      "logo design",
      "brand identity design",
      "ad creative design",
      "social media graphics",
      "video editing services",
    ],
    shortOutcome: "Logos, brand identity kits, static ad batches, packaging and short-form video editing.",
    startingPrice: "$99",
    priceUnit: "per batch",
    confirmedPrice: false,
    relatedSlugs: [
      "brand-awareness-strategy",
      "social-media-management",
      "ai-video-production-services",
    ],
  },
  {
    slug: "brand-awareness-strategy",
    name: "Brand Strategy & Awareness",
    shortName: "Brand Strategy",
    category: "Create",
    wave: "W1",
    published: true,
    title: "Brand Strategy & Awareness Services | Webix Solutions",
    metaDescription:
      "Positioning, messaging, visual identity and awareness campaigns that make your business recognisable — and easy to recommend.",
    h1: "Brand strategy and awareness services",
    primaryKeyword: "brand awareness strategy",
    secondaryKeywords: [
      "brand strategy agency",
      "brand positioning",
      "brand identity",
      "brand awareness campaigns",
    ],
    shortOutcome: "Clear positioning, messaging architecture, visual identity guidelines and launch campaigns.",
    startingPrice: "$499",
    priceUnit: "project",
    confirmedPrice: false,
    relatedSlugs: [
      "creative-services",
      "social-media-management",
      "paid-advertising-services",
    ],
  },
];

export function getPublishedServices(): ServiceEntry[] {
  return SERVICES_REGISTRY.filter((s) => s.published);
}

export function getServicesByCategory(category: ServiceCategory): ServiceEntry[] {
  return SERVICES_REGISTRY.filter((s) => s.published && s.category === category);
}

export function getServiceBySlug(slug: string): ServiceEntry | undefined {
  return SERVICES_REGISTRY.find((s) => s.slug === slug && s.published);
}
