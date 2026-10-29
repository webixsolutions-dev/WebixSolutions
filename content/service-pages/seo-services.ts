import type { ServicePageContent } from "./types";

/** /seo-services/ — Google organic SEO. AI-answer visibility belongs to /ai-search-optimization/. */
export const SEO_SERVICES: ServicePageContent = {
  slug: "seo-services",
  heroKicker: "Technical, on-page, local and content SEO",
  intro: [
    "We run technical, on-page, local and content SEO so more of the right people find you on Google and get in touch.",
    "It is a monthly service for businesses in Canada, the US, the UAE, New Zealand and Pakistan, reported from your own Search Console and GA4 data.",
  ],
  proofChip: "Monthly reporting from your Search Console and GA4",

  outcomes: {
    h2: "SEO measured in leads, not just rankings",
    lead: "We focus on the searches your buyers make, then fix whatever stops those pages from ranking and converting.",
    items: [
      {
        title: "Pages that rank for buyer searches",
        detail: "We target the service and location searches people make when they are ready to hire, not vanity keywords.",
      },
      {
        title: "A site Google can crawl without errors",
        detail: "Technical fixes for indexing, speed, duplicate pages, redirects and structured data, tracked in Search Console.",
      },
      {
        title: "Local visibility where you serve",
        detail: "Location pages, consistent business details and Google Business Profile work for the cities you actually serve.",
      },
    ],
  },

  unique: {
    h2: "What a month of SEO looks like",
    lead: "Every month follows the same rhythm, so you always know what was done and what comes next.",
    cards: [
      { title: "Technical health check", detail: "Crawl the site, review Search Console coverage and fix new errors, broken links and redirect issues." },
      { title: "On-page improvements", detail: "Rewrite titles, meta descriptions, headings and internal links on the pages with the most potential." },
      { title: "Content", detail: "Plan and publish or refresh pages that answer the questions your buyers search for." },
      { title: "Authority and local", detail: "Earn relevant links and citations, and keep business listings consistent." },
      { title: "Report and plan", detail: "A plain-English report from Search Console and GA4, plus the plan for next month." },
    ],
  },

  included: {
    h2: "What is included in our SEO services",
    lead: "The mix changes with your site, but every engagement covers these areas.",
    groups: [
      {
        groupTitle: "Technical SEO",
        items: [
          "Crawl and indexing audit with prioritised fixes",
          "Page speed and Core Web Vitals improvements",
          "Structured data (schema) and canonical tags",
          "Redirect and broken-link clean-up",
        ],
      },
      {
        groupTitle: "On-page and content",
        items: [
          "Keyword research mapped to pages",
          "Title, meta, heading and internal-link optimisation",
          "New and refreshed service, location and blog content",
        ],
      },
      {
        groupTitle: "Local and authority",
        items: [
          "Google Business Profile alignment",
          "Business citations with consistent name, address and phone",
          "Link building through outreach and digital PR — never paid link schemes",
        ],
      },
    ],
  },

  process: {
    h2: "How we start an SEO engagement",
    lead: "The first weeks set the baseline; after that the monthly rhythm takes over.",
    steps: [
      { title: "Access and baseline", description: "We connect Search Console, GA4 and your site, and record where you rank and what converts today." },
      { title: "SEO audit", description: "Technical, on-page and competitor review, turned into a prioritised list of fixes." },
      { title: "Fix and build", description: "We work through the technical fixes first, then on-page changes and new content." },
      { title: "Report monthly", description: "You get a report and a call to agree the next month's priorities." },
    ],
  },

  proof: {
    h2: "Who does your SEO",
    lead: "SEO is handled by our in-house SEO team in Pakistan, alongside the developers who can ship technical fixes directly.",
    statKeys: ["teamSize", "totalClientsServed", "cmsWebsitesBuilt"],
  },

  pricing: {
    baseIncludes: [
      "SEO audit and prioritised fix list",
      "Monthly technical, on-page and content work",
      "Monthly report from Search Console and GA4",
    ],
  },

  tools: {
    h2: "Our SEO and reporting stack",
    lead: "Reports come from your own accounts, so the data is always yours.",
    items: [
      { name: "Google Search Console", role: "Rankings, clicks and indexing" },
      { name: "Google Analytics 4", role: "Traffic and conversions" },
      { name: "Ahrefs", role: "Backlinks and keyword research" },
      { name: "Semrush", role: "Competitor and keyword tracking" },
      { name: "Screaming Frog", role: "Technical site crawls" },
      { name: "Rank Math", role: "WordPress on-page SEO" },
    ],
  },

  faqHeading: "SEO questions, answered",
  faqs: [
    {
      question: "How long does SEO take to work?",
      answer: "SEO takes months, not weeks. Technical fixes can show up in Search Console soon after Google recrawls the site, while new content and links build up over a longer period. We show progress in the monthly report.",
    },
    {
      question: "How much do SEO services cost per month?",
      answer: "We quote a monthly fee after a 30-minute call, based on the size of your site, how competitive your market is and how much content you need. The scope is in writing before you commit.",
    },
    {
      question: "Do you guarantee rankings?",
      answer: "No. Google decides rankings and changes its systems often, so nobody can honestly guarantee a position. We commit to the work, the reporting and the leads we can measure.",
    },
    {
      question: "What's included in an SEO audit?",
      answer: "A crawl of the whole site, a review of indexing in Search Console, page speed, on-page elements, content gaps against competitors and backlinks. You get it as a prioritised list of fixes.",
    },
    {
      question: "Do you build backlinks? How?",
      answer: "Yes, through outreach to relevant sites, digital PR, useful content and accurate business listings. We do not buy links or use private blog networks, because they put your site at risk.",
    },
    {
      question: "What is the difference between local SEO and national SEO?",
      answer: "Local SEO targets searches in the cities you serve and leans on Google Business Profile and location pages. National SEO targets searches across a whole country and relies more on content and authority. Many clients need a mix.",
    },
    {
      question: "Do you also optimise for ChatGPT and AI Overviews?",
      answer: "Yes, as a separate AI search optimisation service. It makes sure AI assistants can reach, read and correctly describe your business; nobody can force an assistant to recommend you.",
    },
  ],

  related: [
    "google-business-profile-optimization",
    "ai-content-creation-services",
    "conversion-rate-optimization-services",
  ],
  openItems: [
    "SEO monthly price (from $299/mo in services.ts) — confirmed:false",
    "Hours per month included in SEO plans ('what a month of SEO looks like')",
    "Anonymised SEO audit sample screenshot for the page",
    "An SEO result/case study we can publish",
    "Link to /ai-search-optimization/ once that W2 page is published (cannibalisation map)",
  ],
};
