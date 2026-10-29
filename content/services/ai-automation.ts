/**
 * Flagship Service Content: /ai-automation-services/
 * Target: 1,100–1,600 words of answer-first, plain-English copy.
 * Primary KW: AI automation services
 * Secondary KWs: AI automation solutions, AI business automation, AI agent development,
 * workflow automation, business process automation, CRM automation.
 */

export interface ShippedSystemDetail {
  id: string;
  badge: string;
  title: string;
  oneLiner: string;
  problem: string;
  solution: string;
  architectureNodes: string[];
  metrics: { label: string; value: string }[];
  toolsUsed: string[];
}

export const AI_AUTOMATION_PAGE_DATA = {
  meta: {
    title: "AI Automation Services & AI Agents | Webix Solutions",
    description:
      "We build AI agents and automations that answer leads, update your CRM, follow up and report — using OpenAI, n8n, Make and Zapier. Sprints from $999.",
  },

  hero: {
    kicker: "Flagship engineering & workflow automation",
    h1: "AI automation services and AI agents for business",
    lead: "We design and deploy custom AI agents and workflow automations that qualify inbound leads, update your CRM, and handle repetitive operational tasks. Every automation is connected directly to your existing tools and built with human-in-the-loop safeguards.",
    primaryCta: { label: "Book a strategy call", href: "/book-a-call/" },
    secondaryCta: { label: "Explore sprint packages", href: "/offers/" },
    outcomeChip: "10-day sprint delivery · Built on your time zone",
  },

  outcomesSection: {
    kicker: "Measurable business outcomes",
    h2: "Practical AI automation solutions that eliminate manual operations",
    lead: "Instead of generic AI experiments, we build focused workflows around the three places service businesses lose money: slow response to new leads, manual data entry between incompatible tools, and forgotten customer follow-ups.",
    outcomes: [
      {
        title: "Sub-60-second response to every inbound enquiry",
        detail: "When a homeowner or corporate client requests a quote on your website or WhatsApp, our AI assistant engages immediately, answers common service questions, captures project details, and schedules a phone consultation into your calendar before your competitor picks up the phone.",
      },
      {
        title: "Zero manual data re-entry between your tools",
        detail: "We connect your website forms, WhatsApp messages, email inboxes, and phone call logs to your CRM, project management boards, and billing tools using n8n and Make webhooks. Your team never wastes 15 minutes manually copy-pasting customer notes between platforms.",
      },
      {
        title: "20 to 35 hours of administrative work reclaimed weekly",
        detail: "By automating appointment confirmations, customer intake qualification, review collection, and daily operational summaries, your sales leads and office managers spend their working hours closing high-value deals rather than filing routine correspondence.",
      },
    ],
  },

  shippedSystemsSection: {
    kicker: "Production deployments",
    h2: "Three production AI systems we have engineered and shipped",
    lead: "Every automation we build runs on dedicated, private webhook architecture with explicit human approval checkpoints before any sensitive external message is dispatched.",
    systems: [
      {
        id: "chatbot",
        badge: "Lead capture & triage",
        title: "Website & WhatsApp AI lead capture assistant",
        oneLiner: "Trained strictly on your verified pricing, service radius, and intake policies to qualify inbound buyers 24/7.",
        problem: "Service businesses lose up to 40% of inbound website and WhatsApp enquiries that arrive after hours, on weekends, or during busy job-site hours when staff cannot reply immediately.",
        solution: "We build a secure Retrieval-Augmented Generation (RAG) assistant connected to your knowledge base. It asks your standard intake questions, verifies service availability, quotes preliminary price ranges with guardrails, and books appointments directly into Google Calendar.",
        architectureNodes: ["Visitor / WhatsApp", "Knowledge-base RAG", "Calendar + CRM Sync"],
        metrics: [
          { label: "Typical response time", value: "< 45 sec" },
          { label: "Lead capture completion", value: "88%" },
        ],
        toolsUsed: ["OpenAI GPT-4o", "n8n", "WhatsApp Business API", "Google Calendar"],
      },
      {
        id: "voice",
        badge: "Inbound phone automation",
        title: "AI voice receptionist for service businesses",
        oneLiner: "Answers after-hours and missed phone calls, speaks with natural conversational pacing, qualifies the caller, and texts an appointment summary.",
        problem: "Contractors, roofers, plumbing teams, and medical clinics miss urgent customer calls while on ladders or with patients, losing thousands of dollars in high-ticket emergency bookings.",
        solution: "We configure an AI voice agent using Twilio, Retell, and OpenAI that answers missed calls within two rings. It speaks with a professional human cadence, collects the customer address and service issue, books an open slot in your schedule, and texts the client and dispatcher an instant summary.",
        architectureNodes: ["Inbound Phone Call", "AI Voice Classifier", "Dispatch SMS + Calendar"],
        metrics: [
          { label: "Missed call recovery", value: "94%" },
          { label: "Average call duration", value: "2.5 min" },
        ],
        toolsUsed: ["Twilio Voice", "Retell AI", "OpenAI", "Zapier"],
      },
      {
        id: "lead-engine",
        badge: "B2B prospecting engine",
        title: "Google Maps to outreach lead engine",
        oneLiner: "Finds public commercial listings, enriches missing decision-maker emails, and prepares personalised drafts for human review.",
        problem: "B2B sales teams spend 15 to 20 hours every week manually copying business names from Google Maps, searching LinkedIn for emails, and writing repetitive cold outreach notes.",
        solution: "Our automated scraper queries Google Maps by business category and target postal code, queries verified public databases for executive emails, inspects the company website for current tech stack gaps, and drafts a tailored intro email. The workflow halts inside an approval dashboard so your team clicks 'Approve' before any email is delivered.",
        architectureNodes: ["Google Maps Search", "Data Enrichment", "Human Review → Send"],
        metrics: [
          { label: "Enrichment accuracy", value: "91%" },
          { label: "Manual research cut", value: "85%" },
        ],
        toolsUsed: ["Apify Scraper", "Hunter API", "Make.com", "Google Workspace"],
      },
    ] satisfies ShippedSystemDetail[],
  },

  deliverablesSection: {
    kicker: "Scope of work",
    h2: "What is included in a 10-day AI automation sprint",
    lead: "We do not sell vague consulting retainers. Our 10-day sprint delivers a production-ready, fully tested automation connected to your live software tools with complete documentation.",
    groups: [
      {
        groupTitle: "Workflow architecture & prompt engineering",
        items: [
          "Complete discovery audit mapping your current software tools, trigger events, and operational bottlenecks.",
          "Custom system prompts written with strict anti-hallucination boundaries and brand-specific tone guidelines.",
          "Knowledge-base document structuring covering service pricing, geographic coverage, and refund terms.",
          "Deterministic fallback routing that routes unsupported or delicate requests directly to your human team.",
        ],
      },
      {
        groupTitle: "API integrations & webhook pipelines",
        items: [
          "Private n8n or Make scenario architecture hosted on your dedicated cloud server or agency infrastructure.",
          "Bidirectional sync with your CRM (HubSpot, GoHighLevel, Zoho, Salesforce, or custom PostgreSQL/Supabase databases).",
          "Official WhatsApp Business API verification and template message registration.",
          "Automated calendar booking synchronization with real-time timezone conversion and conflict detection.",
        ],
      },
      {
        groupTitle: "Testing, security guardrails & team handoff",
        items: [
          "Comprehensive regression testing with 50+ adversarial test prompts to ensure pricing and privacy compliance.",
          "Encrypted webhook endpoints with IP whitelisting, OAuth2 authentication, and secret key rotation.",
          "One-hour video walkthrough with your operational staff demonstrating how to adjust knowledge data and view execution logs.",
          "30 days of post-launch monitoring, bug fixes, and prompt fine-tuning included with every sprint.",
        ],
      },
    ],
  },

  roiSection: {
    kicker: "Investment economics",
    h2: "Calculate your operational return on investment",
    lead: "Most businesses spend between $2,000 and $5,000 every month on manual administrative data entry, missed calls, and delayed lead response. Use this benchmark calculator to see how much your team can save.",
    benchmarks: {
      defaultHoursSavedPerMonth: 25,
      defaultHourlyRate: 45,
      monthlySavings: 1125,
      annualSavings: 13500,
      sprintCost: 999,
      paybackDays: 27,
    },
    defaultCalculationText:
      "Default benchmark calculation: 25 hours saved per month at $45 per hour equals $1,125 in monthly savings, or $13,500 in annual operational savings with a typical sprint payback period under 30 days.",
  },

  processSection: {
    kicker: "How we work",
    h2: "A structured 4-step implementation process",
    lead: "From your initial strategy call to live production deployment in 10 to 14 business days.",
    steps: [
      {
        stepNumber: "01",
        title: "Workflow audit & data mapping",
        timeline: "Days 1–2",
        description: "We meet for 45 minutes on your time zone to review your existing software stack, map the exact trigger and action steps, and collect your knowledge-base documents.",
      },
      {
        stepNumber: "02",
        title: "Staging build & prompt guardrails",
        timeline: "Days 3–6",
        description: "Our in-house engineers build the n8n or Make pipelines on a private staging environment, write system prompts, and test integrations against sample customer inputs.",
      },
      {
        stepNumber: "03",
        title: "Internal testing & team review",
        timeline: "Days 7–8",
        description: "You and your team test the chatbot, voice agent, or webhook workflow on live staging links. We adjust tone, refine responses, and verify calendar and CRM sync.",
      },
      {
        stepNumber: "04",
        title: "Production launch & monitoring",
        timeline: "Days 9–10",
        description: "We deploy the automation to your live domain, phone line, or CRM. We monitor initial execution logs in real time and deliver clear written documentation.",
      },
    ],
  },

  pricingSnapshot: {
    kicker: "Fixed-price delivery",
    h2: "AI Automation Sprint starting from $999",
    lead: "One fixed price for a complete, production-ready automation workflow. No surprise hourly overages or locked proprietary platforms.",
    inclusions: [
      "One complete end-to-end workflow (e.g. WhatsApp Lead Bot or Voice Receptionist)",
      "Connection to your CRM, Google Calendar, and email inbox",
      "Custom system prompts with brand-voice guidelines and strict safety limits",
      "Staging testing, team video training, and 30 days of post-launch warranty",
    ],
    note: "Ongoing LLM token costs (OpenAI, Anthropic) and telephony fees (Twilio) are paid directly by you at cost — typically $15 to $50 per month for small businesses.",
  },

  toolsSection: {
    kicker: "Enterprise-grade tooling",
    h2: "Battle-tested AI models, orchestration engines and APIs",
    lead: "We do not build on closed no-code toys. We engineer on open, high-reliability infrastructure you can audit, migrate, and maintain.",
    tools: [
      { name: "OpenAI", role: "GPT-4o, Embeddings & Structured Outputs" },
      { name: "Anthropic Claude", role: "Complex Reasoning & Document Analysis" },
      { name: "Google Gemini", role: "Multimodal Processing & Long Context" },
      { name: "n8n", role: "Self-Hosted Workflow Orchestration & Data Security" },
      { name: "Make.com", role: "Visual API Integration & Cloud Scenarios" },
      { name: "Zapier", role: "Legacy App Connectors & Rapid Prototyping" },
      { name: "HubSpot", role: "CRM Contact Pipelines & Lifecycle Automation" },
      { name: "WhatsApp API", role: "Official Business Messaging & Verified Templates" },
      { name: "Twilio", role: "Programmable Inbound Voice & SMS Routing" },
      { name: "Google Workspace", role: "Calendar, Drive, and Email Webhooks" },
    ],
  },

  faqs: [
    {
      question: "What business tasks can be automated with AI?",
      answer: "We focus on high-friction operational tasks that consume team hours: answering repetitive customer enquiries on your website or WhatsApp, qualifying new leads based on service type and budget, scheduling video calls directly into calendar slots, extracting order details from invoices or PDFs, logging call notes to your CRM, and generating draft follow-up emails for sales reps to review before sending.",
    },
    {
      question: "How much does AI automation cost?",
      answer: "A standard 10-day AI Automation Sprint starts from $999 for a complete production workflow, such as a custom WhatsApp lead assistant or an inbound voice receptionist. For larger enterprises requiring multiple interconnected systems or custom PostgreSQL databases, we scope custom builds after our initial 30-minute discovery call. In all cases, you receive a fixed written proposal before work begins.",
    },
    {
      question: "How long does a build take?",
      answer: "A standard AI sprint takes between 10 and 14 business days from the initial data audit to production launch. We deliver a working staging prototype within the first 5 days so your team can test real interactions, refine system prompts, and confirm CRM integrations before the automation goes live.",
    },
    {
      question: "Is my data safe and compliant?",
      answer: "Yes. We strictly adhere to privacy-first engineering practices. We configure commercial enterprise API endpoints (such as OpenAI and Anthropic API) where terms of service guarantee your customer and business data is never used to train public language models. Furthermore, we support self-hosted n8n instances on your own private virtual server so sensitive customer records never leave your infrastructure.",
    },
    {
      question: "Do I need to change my current software tools?",
      answer: "No. The entire purpose of custom AI automation is to work inside your current software ecosystem rather than forcing your staff to learn another proprietary platform. We connect directly into your existing CRM (HubSpot, GoHighLevel, Zoho, Salesforce), Google Workspace, Outlook, Slack, WhatsApp, and phone carriers via standard REST APIs and secure webhooks.",
    },
    {
      question: "What ongoing costs should I expect for API usage?",
      answer: "Ongoing model usage fees are paid directly by you to the model providers at pure cost with zero agency markup. For an average service business handling 300 to 800 customer interactions per month, total OpenAI or Anthropic API costs typically range from $15 to $45 per month. Twilio phone minutes typically run $0.015 per minute. If you host n8n privately, basic cloud hosting runs approximately $10 to $20 per month.",
    },
    {
      question: "What happens if the AI gets something wrong? (Human-in-the-loop design)",
      answer: "We engineer strict guardrails into every system. First, prompts explicitly instruct the model never to guess pricing, guarantees, or technical answers outside your verified knowledge base. Second, for sensitive workflows such as outbound email outreach or high-value quotes, we implement human-in-the-loop approval: the AI drafts the communication and places it in an approval queue, requiring your team member to click 'Approve' before anything is sent.",
    },
  ],

  relatedServices: [
    {
      slug: "ai-chatbot-development",
      name: "AI Chatbot Development",
      shortOutcome: "Custom 24/7 website & WhatsApp conversational assistants trained on your knowledge base.",
      category: "AI",
    },
    {
      slug: "ai-ecommerce-automation",
      name: "AI E-commerce Automation",
      shortOutcome: "Automated COD order verification, WhatsApp support and catalog enrichment.",
      category: "AI",
    },
    {
      slug: "ai-digital-marketing-agency",
      name: "AI Digital Marketing Agency",
      shortOutcome: "Human strategists powered by AI tools for faster SEO, ads and social content.",
      category: "AI",
    },
  ],

  targetIndustry: {
    slug: "home-services-contractors",
    name: "Home Services & Contractors",
    shortOutcome: "Missed-call AI receptionists, Google Maps local ranking and instant lead capture for service trades.",
  },
} as const;
