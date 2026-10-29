import type { ServicePageContent } from "./types";

/**
 * /ai-automation-services/ — business process automation & agents (any industry).
 * Cannibalisation: chat interfaces → /ai-chatbot-development/, store-specific → /ai-ecommerce-automation/.
 */
export const AI_AUTOMATION_SERVICES: ServicePageContent = {
  slug: "ai-automation-services",
  heroKicker: "AI automation solutions",
  intro: [
    "We build AI agents and automations that answer new leads, update your CRM, send follow-ups and report on what happened.",
    "They run inside the tools you already use — your website, WhatsApp, email, calendar and CRM — for businesses in Canada, the US, the UAE, New Zealand and Pakistan.",
  ],
  proofChip: "AI chatbot, voice agent and lead engine shipped by our team",

  outcomes: {
    h2: "AI automation solutions that remove repetitive work",
    lead: "We start from one bottleneck that costs you time or leads, then automate it end to end with a person approving the steps that matter.",
    items: [
      {
        title: "New enquiries get an answer straight away",
        detail: "An AI assistant replies on your website or WhatsApp, asks your intake questions and books a call into your calendar, including outside office hours.",
      },
      {
        title: "No more copying data between tools",
        detail: "Form entries, chats and call notes land in your CRM, sheet or project board automatically, so nobody re-types the same details twice.",
      },
      {
        title: "Follow-ups and reports happen on schedule",
        detail: "Reminders, review requests and daily or weekly summaries are sent by the workflow, not from someone's memory.",
      },
    ],
  },

  unique: {
    h2: "Estimate what manual work is costing you",
    lead: "Enter the hours your team spends on a repetitive task each month and what an hour of that time costs you. The result is the value of the time an automation could give back.",
    roiCalculator: true,
  },

  included: {
    h2: "What an AI automation project includes",
    lead: "Each project covers one business bottleneck from audit to launch, with written documentation you keep.",
    groups: [
      {
        groupTitle: "Audit and design",
        items: [
          "Workflow audit and architecture map for one core bottleneck",
          "System prompts and rules for what the AI may and may not say",
          "Knowledge base built from your services, prices and policies",
          "Hand-off rules that route sensitive or unclear cases to your team",
        ],
      },
      {
        groupTitle: "Build and integrations",
        items: [
          "One AI agent: website/WhatsApp chatbot, voice receptionist or lead engine",
          "Connected automations in n8n, Make or Zapier synced to your CRM, Sheets or Slack",
          "Calendar booking with time-zone handling",
          "Human-in-the-loop approval steps before sensitive messages are sent",
        ],
      },
      {
        groupTitle: "Testing and handover",
        items: [
          "Testing against real examples of your enquiries before launch",
          "Walkthrough for your team on editing the knowledge base and reading logs",
          "Post-launch tuning period",
          "Accounts and API keys set up in your name",
        ],
      },
    ],
  },

  process: {
    h2: "How an AI automation project runs",
    lead: "Four steps from the first call to a live workflow.",
    steps: [
      {
        title: "Audit the workflow",
        description: "On a call in your time zone we map the trigger, the steps and the tools involved, and collect the documents the AI needs.",
      },
      {
        title: "Build on staging",
        description: "We build the agent and automations in a test environment and write the prompts and hand-off rules.",
      },
      {
        title: "Test with your team",
        description: "You try it with real examples. We adjust tone, answers and integrations until it behaves the way you want.",
      },
      {
        title: "Launch and tune",
        description: "We switch it on for your website, phone line or CRM, watch the first runs closely and hand over documentation.",
      },
    ],
  },

  proof: {
    h2: "AI systems we have built and shipped",
    lead: "Three systems from our own work. Each keeps a person in control of the steps that carry risk.",
    statKeys: [],
    systems: [
      {
        title: "Website & WhatsApp AI chatbot",
        summary: "Trained on services, pricing and policies. Answers questions, captures contact details, books strategy calls and hands complex threads to the team.",
        nodes: ["Visitor or WhatsApp", "Knowledge-base AI", "Book call or CRM"],
      },
      {
        title: "AI voice receptionist",
        summary: "Answers missed or after-hours calls, asks qualification questions, books an appointment into the calendar and sends a summary by text.",
        nodes: ["Inbound call", "AI voice qualifier", "Calendar + SMS"],
      },
      {
        title: "Google Maps lead engine",
        summary: "Finds public business listings by category and city, enriches contact details, drafts a first note and waits for human approval before sending.",
        nodes: ["Maps search", "Enrich + AI draft", "Human review → send"],
      },
    ],
  },

  pricing: {
    priceRef: { table: "flagship", id: "ai-automation-sprint" },
    baseIncludes: [
      "Workflow audit and architecture map for one bottleneck",
      "One custom AI agent plus two connected automations",
      "Human-in-the-loop approval guardrails",
      "Post-launch tuning",
    ],
  },

  tools: {
    h2: "Tools we build AI automations with",
    lead: "We build on mainstream tools you can keep using, audit and move away from if you ever need to.",
    items: [
      { name: "OpenAI", role: "Language models for chat, drafting and classification" },
      { name: "n8n", role: "Workflow automation, including self-hosted setups" },
      { name: "Make", role: "Visual automation scenarios" },
      { name: "Zapier", role: "Connectors for common business apps" },
    ],
  },

  faqHeading: "AI automation questions, answered",
  faqs: [
    {
      question: "What business tasks can be automated with AI?",
      answer: "Repetitive tasks with a clear trigger and outcome automate best: replying to new enquiries, qualifying leads, booking calls, logging chats and call notes to a CRM, sending follow-ups and building routine reports. We pick one bottleneck first, prove it works, then expand.",
    },
    {
      question: "How much does AI automation cost?",
      answer: "We quote a fixed price after a 30-minute call, once we know the workflow and the tools involved. You get the scope and price in writing before any work starts.",
    },
    {
      question: "How long does a build take?",
      answer: "The timeline depends on the number of tools to connect and how much testing your workflow needs. We give you a dated plan with the written proposal, and you can test a working version on staging before launch.",
    },
    {
      question: "Is my data safe?",
      answer: "We use business API accounts set up in your name, limit each tool to the data it needs, and keep API keys out of shared documents. Where you need data to stay on your infrastructure, workflows can run on a server you control.",
    },
    {
      question: "Do I need to change my current tools?",
      answer: "No. The automation connects to the website, CRM, calendar, inbox and messaging apps you already use. We only suggest a new tool when an existing one has no way to connect.",
    },
    {
      question: "What ongoing costs should I expect (API usage)?",
      answer: "AI model and telephony usage (for example OpenAI or Twilio) is billed at cost directly to your own accounts, not marked up by us. We estimate your expected monthly usage from your enquiry volume before the build starts.",
    },
    {
      question: "What happens if the AI gets something wrong?",
      answer: "Every system has rules for what the AI must not answer, and unclear or sensitive cases go to a person. For outbound messages and quotes, the AI prepares a draft and a team member approves it before anything is sent.",
    },
  ],

  related: [
    "ai-chatbot-development",
    "ai-ecommerce-automation",
    "ai-digital-marketing-agency",
  ],
  openItems: [
    "AI Automation Sprint price ($999) and 10-business-day delivery — pricing.ts confirmed:false",
    "Tools grid beyond OpenAI/n8n/Make/Zapier (Claude, Gemini, HubSpot, WhatsApp Business API, Twilio) — brief marks [CONFIRM]",
    "Voice agent stack and real call/lead-engine numbers for the shipped systems (CONFIRM-10)",
    "Typical monthly API cost range to quote in the FAQ",
    "Case study page to link (/our-work/ entries are unpublished)",
  ],
};
