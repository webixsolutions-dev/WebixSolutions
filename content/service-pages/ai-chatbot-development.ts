import type { ServicePageContent } from "./types";

/** /ai-chatbot-development/ — brief: docs/03 "AI chatbot development". */
export const AI_CHATBOT_DEVELOPMENT: ServicePageContent = {
  slug: "ai-chatbot-development",
  heroKicker: "Website and WhatsApp AI assistants",
  intro: [
    "We build custom AI chatbots for websites and WhatsApp that answer visitor questions, capture qualified leads and book appointments around the clock.",
    "Trained exclusively on your services, pricing guidelines and knowledge base, with instant handoff to your human team whenever a high-intent conversation requires it.",
  ],
  proofChip: "AI chatbot shipped with direct calendar and WhatsApp booking",

  outcomes: {
    h2: "An assistant that turns conversations into qualified leads",
    lead: "Instead of passive contact forms, your visitors get immediate, accurate answers that guide them directly toward booking a call.",
    items: [
      {
        title: "Zero response lag on website and WhatsApp",
        detail:
          "Visitors get helpful, conversational replies in seconds, even outside business hours and during peak enquiry surges.",
      },
      {
        title: "Trained only on your approved company facts",
        detail:
          "Strict system prompts, knowledge grounding and refusal boundaries prevent hallucinated answers or rogue pricing promises.",
      },
      {
        title: "Seamless handover to your real team",
        detail:
          "When a conversation requests custom negotiation or flags an urgent issue, the bot alerts your team on Slack or WhatsApp instantly.",
      },
    ],
  },

  unique: {
    h2: "How our AI chatbots handle conversations",
    lead: "A live transcript architecture designed for commercial trust and transparency.",
    table: {
      columns: ["Conversation Stage", "What the Visitor Asks", "How the AI Assistant Responds"],
      rows: [
        [
          "1. Discovery",
          "'How much does a 5-page custom website cost?'",
          "Explains your scope-based pricing range clearly and asks what features they need.",
        ],
        [
          "2. Qualification",
          "'We need it live within 3 weeks on Next.js.'",
          "Confirms technical capability, checks team availability, and asks for their contact details.",
        ],
        [
          "3. Scheduling",
          "'Can we discuss this on a call tomorrow?'",
          "Shows real-time calendar slots in the visitor's time zone and books directly via Google Meet.",
        ],
        [
          "4. CRM Sync",
          "[Visitor confirms booking]",
          "Syncs contact details, transcript and notes to your CRM, Sheets, and alerts your team on Slack.",
        ],
      ],
    },
    note: "All chat transcripts are encrypted, logged for quality review, and stored in compliance with standard privacy and data protection rules.",
  },

  included: {
    h2: "What is included in chatbot development",
    lead: "Complete end-to-end setup from prompt engineering to live deployment.",
    groups: [
      {
        groupTitle: "Knowledge base and prompt design",
        items: [
          "Knowledge base extraction from your website, PDFs, pricing tables and FAQs",
          "Custom tone-of-voice alignment matching your brand personality",
          "Strict hallucination guardrails and edge-case refusal rules",
        ],
      },
      {
        groupTitle: "Platform build and integration",
        items: [
          "Clean, fast website chat widget styled in your brand colours",
          "Official WhatsApp Business Cloud API integration and phone verification",
          "Calendar booking integration with automated time-zone conversion",
        ],
      },
      {
        groupTitle: "CRM sync, testing and training",
        items: [
          "Automated lead sync to HubSpot, Zoho, Google Sheets or custom webhooks",
          "50+ test scenario runs covering complex edge cases before launch",
          "Team dashboard walkthrough for managing conversation history and analytics",
        ],
      },
    ],
  },

  process: {
    h2: "How we build your custom AI chatbot",
    lead: "Four structured milestones from raw knowledge to live chat deployment.",
    steps: [
      {
        title: "Discovery and document audit",
        description:
          "We collect your service sheets, FAQs, brand tone guidelines and intake questions on an initial strategy call.",
      },
      {
        title: "Grounding and prompt engineering",
        description:
          "We structure your knowledge base into vector embeddings and craft strict system instructions.",
      },
      {
        title: "Staging test runs",
        description:
          "You and your team test the chatbot on a private link with real buyer questions to refine phrasing and handoffs.",
      },
      {
        title: "Live deployment and monitoring",
        description:
          "We embed the widget on your site or connect your WhatsApp Business number, monitoring the first 100 conversations.",
      },
    ],
  },

  proof: {
    h2: "AI systems engineered by our in-house team",
    lead: "We engineer custom conversational flows for client websites, WhatsApp channels, and internal agency operations.",
    statKeys: ["customCodedBuilds", "teamSize", "totalClientsServed"],
    showOwnBrands: true,
  },

  pricing: {
    baseIncludes: [
      "Custom vector knowledge base ingestion and prompt engineering",
      "Branded website widget or WhatsApp Cloud API connection",
      "Calendar scheduling and CRM / Google Sheets lead automation",
      "30-day post-launch prompt tuning and conversation monitoring",
    ],
  },

  tools: {
    h2: "Technologies powering our AI assistants",
    lead: "Modern foundational models paired with secure orchestration engines.",
    items: [
      { name: "OpenAI GPT-4o", role: "Primary natural language reasoning and parsing" },
      { name: "Anthropic Claude 3.5", role: "Nuanced editorial responses and safety guardrails" },
      { name: "WhatsApp Cloud API", role: "Direct mobile messaging and interactive menus" },
      { name: "n8n & Make", role: "Backend webhook processing and database syncing" },
      { name: "Pinecone / pgvector", role: "Vector database for semantic document retrieval" },
      { name: "Google Calendar", role: "Instant slot reservation and ICS calendar invites" },
      { name: "HubSpot CRM", role: "Automatic contact creation and deal stage updates" },
      { name: "Slack / WhatsApp Alerts", role: "Real-time human notification for high-intent leads" },
    ],
  },

  faqHeading: "Direct answers about custom AI chatbot development",
  faqs: [
    {
      question: "How much does a custom chatbot cost?",
      answer:
        "Every build is quoted with a fixed price after a 30-minute discovery call, based on the knowledge base complexity, number of channels (web, WhatsApp, Messenger), and CRM integrations required.",
    },
    {
      question: "What is the difference between an AI chatbot and traditional live chat?",
      answer:
        "Traditional live chat requires a human agent sitting at a screen or relies on rigid, frustrating decision trees. An AI chatbot understands natural language, provides instant accurate answers, and only escalates to humans when needed.",
    },
    {
      question: "Can the chatbot book appointments directly into my calendar?",
      answer:
        "Yes. The bot checks real-time availability in Google Calendar or Outlook, displays open slots in the user's local time zone, and sends a confirmed meeting invite with a Google Meet link.",
    },
    {
      question: "How do you prevent the AI from making things up (hallucinating)?",
      answer:
        "We ground the chatbot strictly in your verified documentation using Retrieval-Augmented Generation (RAG). System instructions explicitly command the model to politely state that it doesn't know and offer a human callback if a question falls outside the knowledge base.",
    },
    {
      question: "What are the ongoing monthly running costs?",
      answer:
        "Ongoing costs consist of nominal OpenAI or Anthropic API fees (typically $10 to $30 per month for moderate website traffic) and any third-party WhatsApp Business messaging fees paid directly to Meta.",
    },
    {
      question: "Who owns the prompts and custom integrations?",
      answer:
        "You do. All API accounts, system prompts, vector stores and webhook scripts are configured in your name and fully transferred to your ownership upon completion.",
    },
  ],

  related: [
    "ai-automation-services",
    "ai-ecommerce-automation",
    "web-design-development-service",
  ],
  openItems: [],
};
