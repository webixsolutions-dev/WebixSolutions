import type { ServicePageContent } from "./types";

/** /paid-advertising-services/ — brief: docs/03 "Paid advertising". */
export const PAID_ADVERTISING_SERVICES: ServicePageContent = {
  slug: "paid-advertising-services",
  heroKicker: "Meta, Google, TikTok and LinkedIn ads",
  intro: [
    "We plan, launch and optimise paid advertising campaigns on Meta, Google, TikTok and LinkedIn that turn ad spend into qualified enquiries and sales.",
    "Our in-house team manages campaigns for businesses across Canada, the US, the UAE, New Zealand and Pakistan, with ad spend billed directly to your own accounts.",
  ],
  proofChip: "64 WhatsApp conversations at Rs 15.01 each on Zelvomart",

  outcomes: {
    h2: "Paid advertising focused on cost per enquiry and return",
    lead: "We track qualified leads and purchases rather than vanity impressions or clicks, optimising budgets where they convert.",
    items: [
      {
        title: "Qualified leads straight to your team",
        detail:
          "Click-to-WhatsApp, call ads and lead forms that connect interested buyers directly to your sales channel.",
      },
      {
        title: "Clean tracking and attribution",
        detail:
          "Meta Pixel, Google Tag Manager and Conversions API setup so you see which ads actually drive revenue.",
      },
      {
        title: "Continuous creative and audience testing",
        detail:
          "New angles, video formats and hooks tested every month to keep acquisition costs stable as you scale.",
      },
    ],
  },

  unique: {
    h2: "How we manage your ad spend",
    lead: "Clear rules keep your budget protected. You own your advertising accounts and pay the platforms directly.",
    table: {
      columns: ["Platform", "Best for", "Typical ad format"],
      rows: [
        [
          "Meta (Facebook & Instagram)",
          "Local service leads, click-to-WhatsApp and visual e-commerce",
          "Carousels, short reels and lead forms",
        ],
        [
          "Google Search & Maps",
          "High-intent buyers actively searching for your service right now",
          "Text ads, call-only ads and Local Service Ads",
        ],
        [
          "TikTok Ads",
          "Fast-growing consumer products and younger demographics",
          "Short vertical videos and UGC creator-style spots",
        ],
        [
          "LinkedIn Ads",
          "High-value B2B services, enterprise software and commercial contracts",
          "Sponsored content, message ads and lead forms",
        ],
      ],
    },
    note: "You pay ad spend directly to Meta, Google, TikTok or LinkedIn from your own credit card or billing profile. We charge a flat or tier-based management fee and never mark up your ad spend.",
  },

  included: {
    h2: "What is included in paid advertising management",
    lead: "Everything required to run profitable paid traffic across multiple platforms.",
    groups: [
      {
        groupTitle: "Strategy and setup",
        items: [
          "Ad account audit, competitor review and audience targeting",
          "Meta Pixel, Google Tag Manager and Conversions API integration",
          "Custom conversion events mapped to form submissions and phone calls",
        ],
      },
      {
        groupTitle: "Creative and copywriting",
        items: [
          "Branded ad copy variants with distinct hooks and calls to action",
          "Static graphic designs and short-form video edit batches",
          "Landing page friction review before spending ad budget",
        ],
      },
      {
        groupTitle: "Optimization and reporting",
        items: [
          "Weekly bid adjustments, search term reviews and negative keyword updates",
          "Budget reallocation toward winning creative angles and audiences",
          "Plain-English monthly performance report with cost-per-lead tracking",
        ],
      },
    ],
  },

  process: {
    h2: "How we launch an ad campaign",
    lead: "Four steps from discovery to active lead generation.",
    steps: [
      {
        title: "Strategy call",
        description:
          "We review your offer, margins, past ad data and target markets to decide the right platform mix.",
      },
      {
        title: "Tracking and setup",
        description:
          "We audit or install tracking pixels and verify conversion events before spending ad budget.",
      },
      {
        title: "Creative and launch",
        description:
          "We draft ad copy, produce creative assets and launch initial test campaigns with controlled budgets.",
      },
      {
        title: "Scale and optimise",
        description:
          "We turn off underperforming ads, allocate spend to winning angles and expand reach into your core markets.",
      },
    ],
  },

  proof: {
    h2: "Verified advertising results",
    lead: "We run paid traffic for our clients and on our own e-commerce brands in Pakistan and the UAE.",
    statKeys: ["totalClientsServed", "socialAccountsManaged", "teamSize"],
    showOwnBrands: true,
    showZelvomartAd: true,
  },

  pricing: {
    adSpendNote: true,
    baseIncludes: [
      "Full ad account audit and conversion tracking verification",
      "Campaign strategy, audience research and targeting setup",
      "Ad copywriting and monthly creative batches",
      "Ongoing bid management and plain-English monthly performance report",
    ],
  },

  tools: {
    h2: "Ad platforms and tracking tools",
    lead: "We work directly inside native platform dashboards and measurement tools.",
    items: [
      { name: "Meta Ads Manager", role: "Facebook & Instagram campaign optimization" },
      { name: "Google Ads", role: "Search, Display & YouTube lead generation" },
      { name: "TikTok Ads Manager", role: "Short-form video and viral product ads" },
      { name: "LinkedIn Campaign Manager", role: "B2B executive and corporate targeting" },
      { name: "Google Tag Manager", role: "Client & server-side event orchestration" },
      { name: "Meta Conversions API", role: "Privacy-compliant server tracking" },
      { name: "Google Analytics 4", role: "Conversion path attribution modeling" },
      { name: "Microsoft Clarity", role: "Landing page heatmaps and click recordings" },
    ],
  },

  faqHeading: "Direct answers about paid advertising",
  faqs: [
    {
      question: "What budget do I need to start?",
      answer:
        "We recommend a minimum testing ad spend of $500 to $1,000 per month for local lead generation in North America or the UAE, or PKR 30,000 to 50,000 per month in Pakistan. This provides enough data to validate audiences quickly.",
    },
    {
      question: "How fast will I see leads?",
      answer:
        "Unlike organic SEO, paid ads can generate enquiries within 48 to 72 hours of campaign launch once tracking pixels, conversion events and creative assets are approved.",
    },
    {
      question: "Do you create the ad creatives?",
      answer:
        "Yes. Our in-house creative team writes the copy, designs static graphics, and edits short video reels from your brand assets or stock footage.",
    },
    {
      question: "What is your management fee?",
      answer:
        "We quote a flat monthly management fee based on the number of platforms and campaigns managed. We never charge hidden percentage commissions on your ad spend.",
    },
    {
      question: "Do you set up Pixel and Conversions API?",
      answer:
        "Yes. Every paid ads engagement includes full setup or verification of Meta Pixel, Conversions API, and Google Tag Manager before ad spend goes live.",
    },
    {
      question: "Do I keep ownership of the ad account?",
      answer:
        "Always. Campaigns are built directly inside your own Meta Business Manager or Google Ads account. You retain 100% ownership and can revoke our access at any time.",
    },
    {
      question: "Why do you recommend click-to-WhatsApp ads for Pakistan and the UAE?",
      answer:
        "In markets like Pakistan and the UAE, buyers prefer immediate personal messaging over lengthy website contact forms. Click-to-WhatsApp campaigns drastically reduce friction and lower cost per conversation.",
    },
  ],

  related: [
    "social-media-management",
    "conversion-rate-optimization-services",
    "web-design-development-service",
  ],
  openItems: [],
};
