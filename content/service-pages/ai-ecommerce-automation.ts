import type { ServicePageContent } from "./types";

/** /ai-ecommerce-automation/ — brief: docs/03 "AI e-commerce automation". */
export const AI_ECOMMERCE_AUTOMATION: ServicePageContent = {
  slug: "ai-ecommerce-automation",
  heroKicker: "Shopify, WooCommerce and custom store automations",
  intro: [
    "We build custom AI automations for e-commerce stores that verify Cash on Delivery orders over WhatsApp, resolve 24/7 customer support tickets, enrich product catalogs and recover abandoned carts.",
    "Engineered from our experience running our own e-commerce brands in Pakistan and the UAE, compatible with Shopify, WooCommerce and custom headless checkouts.",
  ],
  proofChip: "Tested and refined on our own e-commerce brand Zelvomart",

  outcomes: {
    h2: "Automate repetitive store operations and protect margins",
    lead: "Stop losing hours manually confirming orders, typing tracking numbers or answering repetitive 'Where is my order?' messages.",
    items: [
      {
        title: "Lower return-to-origin (RTO) on Cash on Delivery orders",
        detail:
          "Automated WhatsApp confirmation messages verify buyer addresses and phone numbers before orders are dispatched to couriers.",
      },
      {
        title: "24/7 instant customer support resolution",
        detail:
          "An AI agent trained on your store policies answers sizing, shipping times, exchange rules and order status questions instantly.",
      },
      {
        title: "Bulk catalog enrichment and SEO descriptions",
        detail:
          "Generate high-converting, benefit-driven product titles, descriptions, and feature bullet points across hundreds of SKUs in minutes.",
      },
    ],
  },

  unique: {
    h2: "Our e-commerce automation menu",
    lead: "Select the specific operational bottlenecks costing your store time or revenue.",
    table: {
      columns: ["Automation Workflow", "Core Business Benefit", "Integrated Platforms"],
      rows: [
        [
          "WhatsApp COD Verification",
          "Confirms intent, flags fake phone numbers and cuts courier return rates by up to 25%",
          "Shopify, WooCommerce, WhatsApp Business API",
        ],
        [
          "Order Tracking & Support Agent",
          "Resolves 'Where is my order?' requests instantly via courier API lookup",
          "Trax, Leopards, PostEx, ShipStation, Shopify",
        ],
        [
          "AI Catalog Content Generator",
          "Writes SEO-optimized descriptions and meta tags directly into store inventory",
          "OpenAI GPT-4o, Shopify GraphQL, WooCommerce REST",
        ],
        [
          "Post-Purchase Review Sequences",
          "Sends timed WhatsApp or email requests asking for reviews and photo feedback",
          "Klaviyo, Judge.me, Loox, WhatsApp Cloud API",
        ],
        [
          "Daily Executive Performance Report",
          "Delivers daily net sales, ad spend, and top-selling SKUs directly to your WhatsApp or Slack",
          "Shopify Admin, Meta Ads API, Google Sheets",
        ],
      ],
    },
    note: "All customer messaging templates strictly follow Meta's WhatsApp Business messaging policies and opt-in guidelines.",
  },

  included: {
    h2: "What is included in e-commerce automation builds",
    lead: "Complete integration with your store, courier APIs and messaging platforms.",
    groups: [
      {
        groupTitle: "Audit and workflow mapping",
        items: [
          "Store operational audit identifying high-friction manual tasks and return rates",
          "Custom conversation copy and messaging templates tailored to your brand voice",
          "Knowledge base compilation covering shipping, return, and sizing policies",
        ],
      },
      {
        groupTitle: "System integration and APIs",
        items: [
          "Shopify / WooCommerce webhook connection to n8n, Make or custom endpoints",
          "Official WhatsApp Business Cloud API integration and phone number verification",
          "Courier API syncing for automatic dispatch status and tracking code retrieval",
        ],
      },
      {
        groupTitle: "Quality control and documentation",
        items: [
          "Human-in-the-loop exception routing for disputed orders or angry customers",
          "Comprehensive sandbox testing across 40+ simulated order scenarios",
          "Full video walkthrough and documentation for your operations and warehouse staff",
        ],
      },
    ],
  },

  process: {
    h2: "How we deploy automations to your store",
    lead: "Four steps from workflow audit to live order processing.",
    steps: [
      {
        title: "Store audit call",
        description:
          "We examine your current order confirmation steps, courier dispatch flow and support ticket volume.",
      },
      {
        title: "Workflow architecture",
        description:
          "We configure the webhook triggers, write the system prompts and connect courier and messaging APIs.",
      },
      {
        title: "Sandbox testing",
        description:
          "We run test orders through your staging store to verify WhatsApp delivery, address validation and CRM logging.",
      },
      {
        title: "Live launch and tuning",
        description:
          "We switch the automation live for real orders, monitoring delivery rates and response accuracy closely for 30 days.",
      },
    ],
  },

  proof: {
    h2: "Built from real operational experience running our own brands",
    lead: "We developed these exact systems to run our own e-commerce brands in Pakistan and the UAE.",
    statKeys: ["customCodedBuilds", "cmsWebsitesBuilt", "totalClientsServed"],
    showOwnBrands: true,
    showZelvomartAd: true,
  },

  pricing: {
    baseIncludes: [
      "Custom workflow architecture and webhook setup on Shopify or WooCommerce",
      "Official WhatsApp Business API integration and message template approvals",
      "Courier tracking API integration and automated exception handling",
      "30 days of post-launch tuning and performance monitoring",
    ],
  },

  tools: {
    h2: "E-commerce APIs and automation stacks",
    lead: "Reliable tools that integrate cleanly with modern e-commerce architectures.",
    items: [
      { name: "Shopify REST & GraphQL", role: "Real-time order, customer and inventory webhooks" },
      { name: "WooCommerce REST API", role: "WordPress store sync and custom order metadata" },
      { name: "WhatsApp Cloud API", role: "High-deliverability automated customer messaging" },
      { name: "n8n Self-Hosted", role: "Secure, privacy-compliant event orchestration" },
      { name: "Make / Zapier", role: "Multi-app integration and fallback routing" },
      { name: "OpenAI GPT-4o", role: "Support intent classification and catalog copywriting" },
      { name: "PostEx / Trax APIs", role: "Courier tracking and Cash on Delivery remittance sync" },
      { name: "Klaviyo", role: "Behavioral e-commerce email and SMS marketing flows" },
    ],
  },

  faqHeading: "Direct answers about e-commerce AI automation",
  faqs: [
    {
      question: "Which e-commerce platforms do you support?",
      answer:
        "We support Shopify, WooCommerce (WordPress), and custom Next.js/Node.js headless checkouts. Our webhooks and API connectors adapt to any modern e-commerce platform.",
    },
    {
      question: "Can AI confirm Cash on Delivery (COD) orders on WhatsApp?",
      answer:
        "Yes. As soon as an order is placed, an automated WhatsApp message is sent asking the buyer to confirm or cancel with one click. The buyer can also correct their shipping address directly in chat, which automatically updates the order in your store.",
    },
    {
      question: "What happens if a customer asks something the AI cannot answer?",
      answer:
        "The system instantly flags the conversation as 'Needs Attention' and notifies your customer service team on Slack or WhatsApp, providing the complete customer history for human takeover.",
    },
    {
      question: "How much time does this typically save our team?",
      answer:
        "Stores processing 500+ orders a month typically save 15 to 25 hours per week of manual phone calling and routine 'Where is my order?' customer support replies.",
    },
    {
      question: "What does it cost to run monthly?",
      answer:
        "Aside from our one-time setup or maintenance agreement, you only pay native Meta WhatsApp conversation fees (a few cents per confirmed conversation) and nominal OpenAI API usage.",
    },
  ],

  related: [
    "shopify-store-development-services",
    "ai-automation-services",
    "ai-chatbot-development",
  ],
  openItems: [],
};
