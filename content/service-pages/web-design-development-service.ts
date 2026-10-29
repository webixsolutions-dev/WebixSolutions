import type { ServicePageContent } from "./types";

/** /web-design-development-service/ — brief: docs/03 "Web design & development". */
export const WEB_DESIGN_DEVELOPMENT: ServicePageContent = {
  slug: "web-design-development-service",
  heroKicker: "Business websites and redesigns",
  intro: [
    "We design and build websites that load fast, rank in search and turn visitors into enquiries — custom-coded in Next.js or built on WordPress, Shopify and other CMS platforms.",
    "Our in-house team builds for businesses in Canada, the US, the UAE, New Zealand and Pakistan, from 5-page company sites to full redesigns.",
  ],
  proofChip: "91 custom-coded builds and 50+ CMS websites delivered",

  outcomes: {
    h2: "A website that does a job for your business",
    lead: "We plan every page around what a visitor needs to decide, then build it to be fast, easy to find and easy to act on.",
    items: [
      {
        title: "More enquiries from the same traffic",
        detail: "Clear service pages, visible calls to action and short forms make it easy for a visitor to call, message or book.",
      },
      {
        title: "Pages Google and AI assistants can read",
        detail: "Content is server-rendered with structured data, clean headings and canonical URLs, so search engines and AI crawlers see the full page.",
      },
      {
        title: "A site you can keep growing",
        detail: "Built on a stack that suits how often you edit — a CMS if your team updates pages weekly, custom code if speed and flexibility come first.",
      },
    ],
  },

  unique: {
    h2: "Custom-coded or CMS — which one do you need?",
    lead: "Both are good choices for different businesses. This is how we help clients decide on the strategy call.",
    table: {
      columns: ["", "Custom-coded (Next.js)", "CMS (WordPress, Shopify, Wix, Webflow)"],
      rows: [
        ["Speed", "Fastest — pages are pre-rendered and light", "Good with careful theme and plugin choices"],
        ["Editing", "Through an editing panel we set up, or by our team", "Your team edits pages directly in the dashboard"],
        ["Cost to build", "Higher upfront", "Lower upfront"],
        ["Scale and features", "Any custom feature, app or integration", "Limited to what the platform and its plugins allow"],
        ["Best for", "Growth-focused brands, web apps, multi-market sites", "Content-heavy sites and teams who edit often"],
      ],
    },
    note: "Performance targets we build to: Largest Contentful Paint under 2.5 s, Interaction to Next Paint under 200 ms and Cumulative Layout Shift under 0.1 (Google's Core Web Vitals 'good' thresholds).",
  },

  included: {
    h2: "What is included in a website build",
    lead: "Every build covers design, development and launch, with the scope written down before we start.",
    groups: [
      {
        groupTitle: "Plan and design",
        items: [
          "Sitemap and page structure based on your services and markets",
          "Custom mobile-first design for every page template",
          "Copy polish so each page answers what buyers ask",
        ],
      },
      {
        groupTitle: "Build",
        items: [
          "Responsive build tested on phones, tablets and desktops",
          "Contact forms, WhatsApp and click-to-call buttons",
          "On-page SEO basics: titles, meta descriptions, headings, schema",
          "Google Analytics 4 and Search Console setup",
        ],
      },
      {
        groupTitle: "Launch",
        items: [
          "Review on a private staging link before going live",
          "Redirects from old URLs when we redesign an existing site",
          "Handover walkthrough so your team knows how to edit",
        ],
      },
    ],
  },

  process: {
    h2: "How a website project works",
    lead: "Four steps, each with something for you to review before we move on.",
    steps: [
      { title: "Strategy call", description: "We review your current site, competitors and goals, and recommend custom code or a CMS." },
      { title: "Plan and proposal", description: "You get a written scope with pages, features, timeline and price." },
      { title: "Design and build", description: "We design the key pages, then build the site on a staging link you can click through." },
      { title: "Launch and handover", description: "We set up redirects, analytics and Search Console, go live and walk your team through editing." },
    ],
  },

  proof: {
    h2: "Websites delivered by our team",
    lead: "Our numbers come from our GitHub organisation and delivery records. We also build and run our own e-commerce brands.",
    statKeys: ["customCodedBuilds", "cmsWebsitesBuilt", "totalClientsServed"],
    showOwnBrands: true,
  },

  pricing: {
    priceRef: { table: "build", id: "build-5-page" },
    baseIncludes: [
      "Custom mobile-first design",
      "Contact forms and click-to-call",
      "Basic on-page SEO",
      "Analytics and Search Console setup",
    ],
  },

  tools: {
    h2: "Platforms we build on",
    lead: "We pick the platform for your business, not the other way round.",
    items: [
      { name: "Next.js", role: "Custom-coded, server-rendered websites" },
      { name: "React", role: "Interactive interfaces" },
      { name: "Node.js", role: "APIs and back-end logic" },
      { name: "WordPress", role: "Editable CMS websites" },
      { name: "WooCommerce", role: "WordPress e-commerce" },
      { name: "Shopify", role: "Hosted e-commerce stores" },
      { name: "Wix", role: "Simple editable sites" },
      { name: "Webflow", role: "Design-led CMS sites" },
      { name: "Squarespace", role: "Small business sites" },
    ],
  },

  faqHeading: "Website design and development questions",
  faqs: [
    {
      question: "How much does a website cost?",
      answer: "We give you a fixed price in writing after a 30-minute call, based on the number of pages, features and the platform. Custom-coded builds cost more upfront than CMS builds; we explain the trade-off before you decide.",
    },
    {
      question: "How long does a website take?",
      answer: "It depends on the number of pages and how quickly content is ready. Your proposal includes a dated timeline, and you review the site on a staging link before launch.",
    },
    {
      question: "Should I choose WordPress or custom code?",
      answer: "Choose WordPress or another CMS if your team edits pages often and the budget is tight. Choose custom code (Next.js) if speed, custom features or growth across several markets matter most. We recommend one on the strategy call.",
    },
    {
      question: "Will I be able to edit my website myself?",
      answer: "Yes. CMS sites are edited in the dashboard, and custom-coded sites can include an editing panel for the content you change regularly. We walk your team through editing before handover.",
    },
    {
      question: "Do you redesign existing websites?",
      answer: "Yes. We audit the current site first, keep what ranks, and map every old URL to its new page with redirects so you do not lose search traffic.",
    },
    {
      question: "Who owns the website after launch?",
      answer: "You own your domain and your content from day one. Ownership of the website files follows the terms of your package, which are written into the proposal before work starts.",
    },
  ],

  related: [
    "shopify-store-development-services",
    "seo-services",
    "conversion-rate-optimization-services",
  ],
  openItems: [
    "5-page site price ($499) and 10–14 day timeline — pricing.ts confirmed:false (meta keeps 'From $499' per brief)",
    "FAQ 'Is hosting included?' — hosting policy needed",
    "FAQ 'Do you build multilingual (English/Arabic) sites?' — capability needed",
    "Website-file ownership terms per package",
    "Case study to link (/our-work/ entries unpublished)",
  ],
};
