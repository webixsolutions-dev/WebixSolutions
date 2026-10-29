import type { IndustryPageContent } from "./types";

export const ECOMMERCE_PAGE: IndustryPageContent = {
  slug: "ecommerce",
  industryName: "E-commerce & Online Retail",
  shortLabel: "E-commerce",
  title: "E-commerce Marketing & Store Development | Webix Solutions",
  metaDescription:
    "Shopify and custom stores, product-page CRO, Meta and Google Shopping ads, and AI automation for orders and support — from a team that runs its own stores.",
  h1: "Growth for e-commerce brands — store, ads and automation",
  heroIntro: [
    "Most e-commerce stores leak ad budget on bloated themes, unverified COD orders, and manual customer service.",
    "Because our team builds and operates our own retail stores (Zelvomart in Pakistan and LaptopSouq.ae in Dubai), we know how to lower cost per purchase and protect your margins.",
  ],
  heroProofChip: "Own-store tested: Zelvomart & LaptopSouq.ae",
  pitfalls: [
    {
      title: "Bloated themes and sub-3-second mobile drop-off",
      detail:
        "Every extra second of mobile product page load time cuts conversions by up to 20%. Cluttering Shopify with 25 incompatible apps for reviews, popups, and urgency countdowns destroys Core Web Vitals and inflates Meta ad acquisition costs before shoppers ever reach checkout.",
    },
    {
      title: "Devastating return-to-origin (RTO) on cash-on-delivery orders",
      detail:
        "In markets like Pakistan and the UAE, fake phone numbers, impulse purchases, and unconfirmed COD orders result in 20% to 35% return rates. Without automated WhatsApp verification and address scrubbing before dispatch, courier return fees devour gross margins.",
    },
    {
      title: "Support bottlenecks and fragmented product catalogs",
      detail:
        "Customer inquiries like 'where is my order?', size exchanges, and tracking status flood WhatsApp and Instagram DMs. When human agents spend hours answering repetitive questions instead of closing high-ticket buyers, service quality collapses and repeat order rates plummet.",
    },
  ],
  deliverables: [
    {
      groupTitle: "Storefront Architecture & CRO",
      items: [
        "Custom Shopify Liquid or headless Next.js storefront engineered for sub-2.5s LCP",
        "Mobile-first product pages with sticky Add to Cart, trust badges, and native variant selectors",
        "Streamlined 1-page checkout flows integrated with regional gateways (Stripe, Tabby, Tamara, Paymob)",
        "Zero-app bloat policy with native lightweight code replacing redundant monthly subscription plugins",
        "Automated abandoned-cart recovery sequences via SMS, email, and WhatsApp",
      ],
    },
    {
      groupTitle: "Paid Acquisition & Ad Tech",
      items: [
        "Meta Advantage+ catalog ads and Google Shopping PMax feed synchronization",
        "Server-side Meta Conversions API (CAPI) and GA4 e-commerce tracking with deduplication",
        "Creative testing sprints producing 15+ ad variations, UGC angles, and offer carousels monthly",
        "Dynamic remarketing campaigns targeting cart abandoners with tiered discount incentives",
        "Ad account audit ensuring clean tracking pixels, event match quality > 8.0, and catalog hygiene",
      ],
    },
    {
      groupTitle: "AI Automation & Order Logistics",
      items: [
        "Automated WhatsApp COD order verification flow with instant customer confirmation buttons",
        "Courier API integrations (PostEx, TCS, Leopards, M&P, Trax) updating live tracking statuses",
        "24/7 AI customer service chatbot resolving 70%+ of order status and product sizing inquiries",
        "Post-purchase review and photo collection automation triggering 3 days after verified delivery",
        "Low-stock alerts and multi-warehouse inventory sync feeding straight into team Slack/WhatsApp",
      ],
    },
    {
      groupTitle: "Customer Retention & LTV",
      items: [
        "Klaviyo / Omnisend lifecycle email flows: welcome series, VIP incentives, win-backs",
        "Customer segmentation separating one-time promo shoppers from high-margin repeat buyers",
        "WhatsApp broadcast campaigns compliant with Meta template guidelines for seasonal sales",
        "Monthly cohort retention analysis tracking repeat purchase frequency and 60-day customer LTV",
      ],
    },
  ],
  steps: [
    {
      stepNumber: "01",
      title: "Store & Tracking Audit",
      timeline: "Days 1–3",
      description:
        "We audit your Google Analytics 4, Meta Pixel CAPI, mobile speed, checkout drop-off points, and courier return rates to calculate your true net profit per order.",
    },
    {
      stepNumber: "02",
      title: "Conversion & Automation Sprint",
      timeline: "Days 4–10",
      description:
        "We optimize your mobile product pages, streamline checkout, set up automated WhatsApp COD confirmations, and fix broken catalog feed attributes.",
    },
    {
      stepNumber: "03",
      title: "Paid Acquisition & Creative Launch",
      timeline: "Days 11–16",
      description:
        "We deploy targeted Meta Advantage+ and Google Shopping campaigns using high-converting creative angles, verified product feeds, and strict ROAS targets.",
    },
    {
      stepNumber: "04",
      title: "Scale, Retain & Improve",
      timeline: "Monthly Ongoing",
      description:
        "We scale winning ad sets, refresh creative batches weekly, audit courier delivery performance, and run retention email/WhatsApp sequences to drive repeat revenue.",
    },
  ],
  proof: {
    brandName: "Zelvomart",
    tagline: "Own-brand Pakistani e-commerce storefront & click-to-WhatsApp acquisition",
    metric: "Rs 15.01",
    metricLabel: "Cost per verified WhatsApp conversation",
    context:
      "Built, owned, and scaled directly by the Webix Solutions team, proving our operational e-commerce playbook before selling it to clients.",
    bulletPoints: [
      "Engineered automated WhatsApp lead qualification and COD confirmation flow",
      "Achieved 64 conversations at Rs 15.01 each in a 30-day verified ad campaign",
      "Cut return-to-origin (RTO) courier losses with instant address confirmation before dispatch",
      "Dual-market experience operating retail stores in Pakistan (Zelvomart) and the UAE (LaptopSouq.ae)",
    ],
    confirmed: true,
  },
  pricingNote: {
    headline: "Transparent store builds and performance growth packages",
    subline:
      "Custom Shopify stores start from $499. Ongoing monthly growth packages combining paid ads, store CRO, and WhatsApp automation start from $399/month on /offers/.",
    ctaLabel: "View e-commerce packages",
    ctaHref: "/offers/",
  },
  tools: [
    "Shopify",
    "WooCommerce",
    "Next.js",
    "Meta Ads Manager",
    "Google Shopping",
    "Klaviyo",
    "PostEx",
    "TCS",
    "Tabby",
    "Stripe",
  ],
  faqs: [
    {
      question: "Should I build on Shopify or a custom Next.js storefront?",
      answer:
        "For 90% of DTC brands, Shopify is the superior choice because of its reliable checkout, app ecosystem, and inventory management. If your catalog exceeds 20,000 SKUs, requires multi-regional headless localization, or demands sub-second load times that Shopify Liquid cannot achieve, we build a custom Next.js front-end connected to Shopify via Storefront API.",
    },
    {
      question: "How do you lower cost per purchase (CPA) on Meta and Google?",
      answer:
        "We lower CPA by fixing conversion bottlenecks first: sub-2.5s mobile speed, prominent trust badges, 1-click checkout options, and server-side Conversions API (CAPI) that feeds high-quality purchase data back to Meta's machine learning algorithms. When your conversion rate increases from 1.5% to 3.0%, your effective customer acquisition cost is cut in half without spending an extra dollar on ads.",
    },
    {
      question: "Can you set up Google Shopping and Meta catalog ads properly?",
      answer:
        "Yes. We configure complete merchant feeds in Google Merchant Center and Meta Commerce Manager with optimized titles, GTINs, high-resolution lifestyle images, and custom labels (e.g. high-margin vs clearance items). We also troubleshoot catalog disapprovals and account suspensions.",
    },
    {
      question: "Can AI handle customer support for an online store?",
      answer:
        "Yes. We deploy custom AI agents trained on your store policies, product specifications, shipping timelines, and return rules. The agent integrates with your courier tracking API to answer order status queries instantly and routes complex refund requests directly to human team members.",
    },
    {
      question: "Do you handle Cash-on-Delivery (COD) markets like Pakistan and the UAE?",
      answer:
        "Yes. Because we operate our own stores in both Pakistan (Zelvomart) and the UAE (LaptopSouq.ae), we have native experience with COD confirmation flows, WhatsApp automated bots, and courier API reconciliations that cut return-to-origin (RTO) rates.",
    },
  ],
  relatedServices: [
    {
      name: "Shopify Store Development",
      slug: "shopify-store-development-services",
      shortOutcome: "Fast, conversion-focused storefronts with clean liquid code and zero app bloat.",
    },
    {
      name: "AI E-commerce Automation",
      slug: "ai-ecommerce-automation",
      shortOutcome: "Automated WhatsApp COD order verification, tracking updates and AI support.",
    },
    {
      name: "Paid Advertising Services",
      slug: "paid-advertising-services",
      shortOutcome: "Meta Advantage+ and Google Shopping campaigns built for net profitable ROAS.",
    },
    {
      name: "Conversion Rate Optimization",
      slug: "conversion-rate-optimization-services",
      shortOutcome: "Mobile heatmaps, form friction reduction and product page checkout testing.",
    },
  ],
};
