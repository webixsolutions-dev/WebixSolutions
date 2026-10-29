import type { ServicePageContent } from "./types";

/** /shopify-store-development-services/ — brief: docs/03 "Shopify store development". */
export const SHOPIFY_STORE_DEVELOPMENT: ServicePageContent = {
  slug: "shopify-store-development-services",
  heroKicker: "E-commerce stores and migrations",
  intro: [
    "We design, build and launch Shopify stores built for sales — from initial setup and custom theme styling to payment gateways, catalog migration and checkout optimization.",
    "Our in-house team builds stores for retail and direct-to-consumer brands in Canada, the US, the UAE, New Zealand and Pakistan, including multi-currency and Cash on Delivery support.",
  ],
  proofChip: "50+ CMS and e-commerce websites delivered",

  outcomes: {
    h2: "A Shopify store engineered for conversions and speed",
    lead: "We structure your store around how buyers shop: fast product discovery, frictionless checkout, and easy mobile navigation.",
    items: [
      {
        title: "Product pages that turn visitors into buyers",
        detail:
          "Clear variant selectors, high-converting product descriptions, customer review widgets and visible shipping notices.",
      },
      {
        title: "Fast, reliable checkout on every device",
        detail:
          "Clean payment integration with Stripe, PayPal, Shopify Payments or Cash on Delivery (COD) tailored to your target countries.",
      },
      {
        title: "Clean catalog and inventory management",
        detail:
          "Organised collections, automated inventory alerts, variant setups and smooth migration from WooCommerce, Wix or custom databases.",
      },
    ],
  },

  unique: {
    h2: "Shopify, WooCommerce or custom — which platform fits?",
    lead: "Different e-commerce models need different platforms. Here is how we help you compare on the initial discovery call.",
    table: {
      columns: ["", "Shopify", "WooCommerce (WordPress)", "Custom Headless Store"],
      rows: [
        [
          "Maintenance",
          "Zero server hassle — Shopify handles hosting, updates and PCI compliance",
          "Requires ongoing WordPress plugin and security updates",
          "Dedicated development team handles architecture",
        ],
        [
          "Checkout Speed",
          "World-class global checkout with Shop Pay built in",
          "Depends on your hosting server and database caching",
          "Fastest possible custom checkout API flows",
        ],
        [
          "Platform Cost",
          "Monthly subscription plus standard card processing fees",
          "Hosting cost plus individual premium plugin licences",
          "Custom hosting and infrastructure costs",
        ],
        [
          "Best for",
          "Brands who want to sell fast without managing servers",
          "Content-heavy sites with complex editorial needs",
          "Enterprise brands with proprietary workflows or apps",
        ],
      ],
    },
    note: "Every Shopify build includes Core Web Vitals optimization, mobile layout audits, and structured product schema so search engines can read price, availability and reviews.",
  },

  included: {
    h2: "What is included in a Shopify store build",
    lead: "Every build covers store configuration, visual design, apps and launch testing with clear written scope.",
    groups: [
      {
        groupTitle: "Store setup and design",
        items: [
          "Customised Shopify theme aligned with your brand colours, fonts and logo",
          "Homepage, collection pages, product pages, cart and checkout styling",
          "Mobile-first responsive layout tested across iOS and Android browsers",
        ],
      },
      {
        groupTitle: "Catalog and integrations",
        items: [
          "Product and collection setup with tags, categories and variant options",
          "Payment gateway configuration (Stripe, PayPal, COD, local gateways)",
          "Shipping rules, tax calculation zones and automated notification emails",
        ],
      },
      {
        groupTitle: "Apps, SEO and handover",
        items: [
          "Essential apps installed: reviews, upsells, analytics and search filters",
          "E-commerce SEO setup: product schema, canonical tags, sitemap and GA4",
          "Full video walkthrough so your team can add products and manage orders",
        ],
      },
    ],
  },

  process: {
    h2: "How we build your Shopify store",
    lead: "A structured four-step process from scope to first sale.",
    steps: [
      {
        title: "Discovery call",
        description:
          "We review your product catalog, target markets, payment gateways and required integrations.",
      },
      {
        title: "Theme styling and architecture",
        description:
          "We configure the theme, layout navigation, design product templates and establish brand styling.",
      },
      {
        title: "Catalog import and apps",
        description:
          "We upload your products, configure shipping and payment gateways, and install vetted conversion apps.",
      },
      {
        title: "Test order and launch",
        description:
          "We run test purchases across desktop and mobile, connect your custom domain and train your team.",
      },
    ],
  },

  proof: {
    h2: "E-commerce experience from client builds and our own brands",
    lead: "We don't just build Shopify stores for clients — our team runs its own e-commerce brands in Pakistan and the UAE.",
    statKeys: ["cmsWebsitesBuilt", "customCodedBuilds", "totalClientsServed"],
    showOwnBrands: true,
  },

  pricing: {
    baseIncludes: [
      "Complete theme setup and custom branded visual styling",
      "Payment gateway, tax zones and shipping method configuration",
      "Essential app integration (reviews, social proof, analytics)",
      "Full store handover video walkthrough and 30-day post-launch support",
    ],
  },

  tools: {
    h2: "Shopify ecosystem tools and apps",
    lead: "We integrate vetted industry standards that keep your store fast and reliable.",
    items: [
      { name: "Shopify Admin & CLI", role: "Store configuration and theme development" },
      { name: "Shopify Payments", role: "Frictionless card processing and Shop Pay" },
      { name: "Klaviyo", role: "Automated e-commerce email and SMS flows" },
      { name: "Judge.me", role: "Fast-loading customer review widgets and stars" },
      { name: "Google Analytics 4", role: "Enhanced e-commerce revenue and cart tracking" },
      { name: "Meta Pixel", role: "Product catalog sync and dynamic ad retargeting" },
      { name: "Microsoft Clarity", role: "Mobile cart drop-off heatmaps and replays" },
      { name: "Loox", role: "Photo review widgets and customer referral tracking" },
    ],
  },

  faqHeading: "Direct answers about Shopify store development",
  faqs: [
    {
      question: "How much does a Shopify store cost?",
      answer:
        "We provide a written fixed quote after a free 30-minute scoping call, based on the number of products, custom theme requirements, and third-party integrations needed. There are never hourly surprises.",
    },
    {
      question: "How long does it take to launch?",
      answer:
        "Standard Shopify stores with up to 50 products typically launch in 2 to 3 weeks once product copy, images and payment gateway credentials are provided.",
    },
    {
      question: "Can you migrate my store from WooCommerce or Wix?",
      answer:
        "Yes. We migrate your product catalog, descriptions, customer records, and order history, while setting up URL 301 redirects to protect existing Google rankings.",
    },
    {
      question: "Do you build custom Shopify themes or use existing ones?",
      answer:
        "We do both. For most growing stores, we customize a premium, fast Shopify OS 2.0 theme to keep build costs efficient. For complex brands, we build custom liquid themes from scratch.",
    },
    {
      question: "Can you set up Cash on Delivery (COD) and WhatsApp ordering?",
      answer:
        "Yes. For e-commerce stores targeting Pakistan or the UAE, we configure custom COD verification flows and direct WhatsApp purchase buttons that reduce abandoned carts.",
    },
    {
      question: "Who owns the Shopify account and store files?",
      answer:
        "You do 100%. The store is built on your own Shopify partner transfer or direct account. You own your theme, domain, customer data, and payment connections from day one.",
    },
  ],

  related: [
    "paid-advertising-services",
    "web-design-development-service",
    "ai-ecommerce-automation",
  ],
  openItems: [],
};
