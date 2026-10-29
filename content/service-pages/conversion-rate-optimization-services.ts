import type { ServicePageContent } from "./types";

/** /conversion-rate-optimization-services/ — brief: docs/03 "Conversion rate optimization". */
export const CONVERSION_RATE_OPTIMIZATION_SERVICES: ServicePageContent = {
  slug: "conversion-rate-optimization-services",
  heroKicker: "Behavioral heatmaps, speed and form friction audits",
  intro: [
    "We turn more of your existing website visitors into paying customers and qualified enquiries using session heatmaps, form drop-off analytics, speed fixes and copy improvements.",
    "Delivered by our in-house UX researchers and developers in Pakistan for businesses in Canada, the US, the UAE, New Zealand and Pakistan looking to lower customer acquisition costs.",
  ],
  proofChip: "Conversion audits powered by Microsoft Clarity and GA4 funnel tracking",

  outcomes: {
    h2: "More leads and revenue from the traffic you already have",
    lead: "Buying more ads when your landing pages leak visitors is like pouring water into a leaky bucket. CRO fixes the leaks first, maximizing the value of every visitor.",
    items: [
      {
        title: "Lower customer acquisition costs (CAC)",
        detail:
          "By increasing your conversion rate from 2% to 3%, you generate 50% more leads from the exact same ad spend and organic search traffic.",
      },
      {
        title: "Frictionless forms and mobile checkouts",
        detail:
          "Eliminate confusing fields, broken validations, hidden buttons and mobile layout bugs that cause interested buyers to abandon.",
      },
      {
        title: "Fixes deployed directly into your live code",
        detail:
          "Unlike consultants who only deliver slide decks, our in-house engineering team implements and tests the approved design and speed fixes directly.",
      },
    ],
  },

  unique: {
    h2: "The 4 critical friction points we audit and fix",
    lead: "Where most business websites lose qualified buyers — and how our team resolves them.",
    table: {
      columns: ["Friction Area", "What We Analyze", "How We Fix It"],
      rows: [
        [
          "1. Mobile Usability & Clutter",
          "Sticky navigation bars, tap target sizes, and popup fatigue",
          "Simplify mobile layout, enlarge primary action buttons, and ensure clean viewport spacing",
        ],
        [
          "2. Value Proposition Clarity",
          "Are visitors clear on what you do and for whom within 5 seconds?",
          "Rewrite hero headlines to be answer-first with concrete outcomes and visible trust signals",
        ],
        [
          "3. Form & Checkout Friction",
          "Which specific form field or checkout step causes users to abandon?",
          "Cut unnecessary fields, add inline validation, enable autofill and integrate 1-click booking",
        ],
        [
          "4. Page Speed & Layout Shift",
          "Slow loading assets causing visitors to bounce before the hero renders",
          "Optimize Core Web Vitals (LCP < 2.5s, CLS < 0.1), pre-render assets and remove bloated scripts",
        ],
      ],
    },
    note: "All behavioral data is gathered in compliance with modern privacy standards (GDPR / CCPA) with zero storage of sensitive personal or payment information.",
  },

  included: {
    h2: "What is included in conversion optimization services",
    lead: "Comprehensive heuristic audits, behavioral research, and production implementation.",
    groups: [
      {
        groupTitle: "Behavioral research and session analysis",
        items: [
          "Microsoft Clarity and Hotjar heatmap and session replay analysis across 1,000+ visits",
          "Google Analytics 4 funnel exploration identifying exact checkout and form drop-off steps",
          "Heuristic UX evaluation examining clarity, relevance, anxiety and urgency triggers",
        ],
      },
      {
        groupTitle: "Design, copywriting and page speed",
        items: [
          "High-converting landing page redesign wireframes and polished UI mockups",
          "Direct-response headline, subhead and call-to-action copy improvements",
          "Technical Core Web Vitals speed audit with image optimization and code minification",
        ],
      },
      {
        groupTitle: "Implementation and verification",
        items: [
          "Direct frontend coding of approved changes on Next.js, WordPress or Shopify",
          "Setup of custom conversion event tracking to measure before-and-after lift",
          "Comprehensive audit report detailing every friction point discovered and resolved",
        ],
      },
    ],
  },

  process: {
    h2: "Our structured 4-step optimization cycle",
    lead: "From behavioral data collection to measurable conversion lift.",
    steps: [
      {
        title: "Analytics and heatmap setup",
        description:
          "We install Microsoft Clarity and verify GA4 conversion goals to capture real user behavior recordings.",
      },
      {
        title: "Friction audit and hypothesis",
        description:
          "We analyze user drop-offs, review rage-clicks and dead-clicks, and build a prioritized fix roadmap.",
      },
      {
        title: "Design and copy polish",
        description:
          "We draft sharper headlines, redesign confusing form layouts, and remove page load bottlenecks.",
      },
      {
        title: "Code deployment and measurement",
        description:
          "Our developers implement the changes, verify cross-browser stability, and track conversion rate changes.",
      },
    ],
  },

  proof: {
    h2: "Conversion improvements delivered by our in-house team",
    lead: "We apply rigorous conversion rate optimization to both our client websites and our own commercial ventures.",
    statKeys: ["customCodedBuilds", "cmsWebsitesBuilt", "totalClientsServed"],
    showOwnBrands: true,
  },

  pricing: {
    baseIncludes: [
      "Complete heuristic UX audit and Microsoft Clarity heatmap analysis",
      "Prioritized conversion roadmap detailing high-impact friction fixes",
      "Direct-response copywriting updates for key landing page sections",
      "Full frontend implementation of approved fixes by our developer team",
    ],
  },

  tools: {
    h2: "Our conversion optimization toolstack",
    lead: "Leading analytics, session recording and performance monitoring platforms.",
    items: [
      { name: "Microsoft Clarity", role: "Session replays, heatmaps and rage-click detection" },
      { name: "Google Analytics 4", role: "Funnel drop-off visualization and goal measurement" },
      { name: "Google Tag Manager", role: "Custom event trigger tracking and form submission logs" },
      { name: "Google PageSpeed Insights", role: "Core Web Vitals diagnostic benchmarking" },
      { name: "Figma", role: "Rapid high-converting landing page UI/UX wireframing" },
      { name: "Next.js & React", role: "High-performance, pre-rendered frontend architecture" },
      { name: "Shopify / WordPress", role: "Checkout friction reduction and theme optimization" },
      { name: "OpenAI GPT-4o", role: "Alternative value proposition and CTA copy generation" },
    ],
  },

  faqHeading: "Direct answers about conversion rate optimization",
  faqs: [
    {
      question: "What is considered a good website conversion rate?",
      answer:
        "Average B2B lead generation websites typically convert between 2% and 4%, while standard e-commerce stores convert between 1.5% and 3%. A well-optimized landing page with high-intent traffic can achieve conversion rates of 6% to 12% or higher.",
    },
    {
      question: "How much traffic do I need to see benefits from CRO?",
      answer:
        "While formal statistical A/B testing requires thousands of visits per month, qualitative CRO (fixing obvious mobile bugs, confusing copy, slow load times, and broken form validation) delivers immediate conversion lift even for websites with as few as 500 visits per month.",
    },
    {
      question: "What do you look at during a conversion audit?",
      answer:
        "We review your analytics funnels, real user session recordings, scroll depth, form field abandonment rates, mobile responsiveness, Core Web Vitals speed scores, and the commercial clarity of your value proposition.",
    },
    {
      question: "Do you only deliver a report, or do you fix the website code?",
      answer:
        "We fix the code directly. Unlike pure consultancy agencies, our in-house engineering team implements the approved design, copy, and speed improvements directly onto your Next.js, WordPress, or Shopify site.",
    },
    {
      question: "How fast do conversion improvements typically show up?",
      answer:
        "Once UX and form friction fixes are deployed to your live site, conversion improvements are immediate on incoming traffic, typically measurable in analytics within 2 to 3 weeks.",
    },
  ],

  related: [
    "web-design-development-service",
    "paid-advertising-services",
    "seo-services",
  ],
  openItems: [],
};
