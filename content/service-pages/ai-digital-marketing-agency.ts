import type { ServicePageContent } from "./types";

/** /ai-digital-marketing-agency/ — umbrella service connecting strategy, SEO, ads, content & AI. */
export const AI_DIGITAL_MARKETING_AGENCY: ServicePageContent = {
  slug: "ai-digital-marketing-agency",
  heroKicker: "Human strategy augmented by AI systems",
  intro: [
    "We combine senior marketing strategists with custom AI systems to deliver faster campaigns, sharper creative testing, smarter SEO research and instant lead follow-up.",
    "Our in-house 20+ person team in Pakistan serves growing businesses across Canada, the US, the UAE, New Zealand and Pakistan on your business hours.",
  ],
  proofChip: "20+ in-house team with proprietary AI workflows",

  outcomes: {
    h2: "Marketing that moves faster without sacrificing quality",
    lead: "We use artificial intelligence to eliminate manual bottlenecks while keeping experienced human marketers in charge of strategy, brand tone and quality control.",
    items: [
      {
        title: "Faster campaign execution and iteration",
        detail:
          "Ad creative variations, content outlines and audience research drafted in hours rather than weeks, allowing for faster market testing.",
      },
      {
        title: "Instant response to inbound enquiries",
        detail:
          "AI assistants qualify leads on your website and WhatsApp 24/7, booking calls into your calendar before prospects reach a competitor.",
      },
      {
        title: "Rigorous human verification on every asset",
        detail:
          "Every ad, blog post, email and automation step is vetted and edited by our in-house specialists before it ever goes live to the public.",
      },
    ],
  },

  unique: {
    h2: "Where AI helps vs where humans decide",
    lead: "We never let AI run unsupervised on your brand. Here is how we balance automated speed with human judgment across every channel.",
    table: {
      columns: ["Marketing Channel", "Where AI Accelerates", "Where Our Human Team Decides"],
      rows: [
        [
          "SEO & Search",
          "Keyword clustering, schema generation and content gap analysis across thousands of queries",
          "Commercial intent prioritization, final editorial review and authoritative link outreach",
        ],
        [
          "Paid Advertising",
          "Headline permutations, audience segmentation ideas and instant creative reformatting",
          "Budget allocation, profit-margin analysis and core commercial positioning hooks",
        ],
        [
          "Social Media",
          "Content calendar ideation, rough draft generation and caption variations",
          "Custom visual design, brand voice governance and sensitive community replies",
        ],
        [
          "Lead Management",
          "Instant intake qualification, calendar scheduling and CRM data syncing",
          "Complex objection handling, bespoke proposal writing and closing negotiations",
        ],
        [
          "Performance Reporting",
          "Real-time data aggregation across GA4, Search Console and ad networks",
          "Strategic recommendations, commercial insights and setting next month's priorities",
        ],
      ],
    },
    note: "Strict guardrails: AI never posts directly to your social accounts, sends unreviewed client proposals, or speaks to journalists without human sign-off.",
  },

  included: {
    h2: "What is included in an AI digital marketing engagement",
    lead: "A fully integrated marketing stack tailored to your revenue targets.",
    groups: [
      {
        groupTitle: "Omnichannel growth strategy",
        items: [
          "Full digital audit across your website, rankings, ad accounts and competitor landscape",
          "Quarterly growth roadmap prioritizing the highest-ROI acquisition channels",
          "Custom dashboard connecting web traffic, ad spend, and closed revenue",
        ],
      },
      {
        groupTitle: "Content, SEO and advertising",
        items: [
          "Technical SEO fixes, schema graph integration and buyer-intent content publishing",
          "Paid ad management across Meta, Google or TikTok with rapid creative testing",
          "Monthly batches of branded social assets, carousels and short video edits",
        ],
      },
      {
        groupTitle: "Automation and lead nurture",
        items: [
          "Website or WhatsApp AI lead qualification assistant with calendar booking",
          "Automated CRM synchronization and review request sequences",
          "Bi-weekly strategic sync with your dedicated project lead on your time zone",
        ],
      },
    ],
  },

  process: {
    h2: "How we deploy AI across your marketing",
    lead: "Four structured phases designed to generate measurable traction.",
    steps: [
      {
        title: "Growth audit and strategy",
        description:
          "We analyze your current conversion funnels, ad history, organic rankings and team bottlenecks on a 30-minute discovery call.",
      },
      {
        title: "Custom stack and prompt engineering",
        description:
          "We configure your brand guidelines, knowledge bases, and custom AI agents to match your exact tone of voice.",
      },
      {
        title: "Launch and creative testing",
        description:
          "We launch refreshed search campaigns, high-velocity ad creatives, and automated intake assistants simultaneously.",
      },
      {
        title: "Optimize and scale",
        description:
          "We monitor weekly acquisition costs, adjust bids, publish new content, and deliver plain-English monthly attribution reports.",
      },
    ],
  },

  proof: {
    h2: "Proven results across web, ads and AI automations",
    lead: "Our team operates across both client campaigns and our own e-commerce and SaaS brands.",
    statKeys: ["teamSize", "totalClientsServed", "customCodedBuilds"],
    showOwnBrands: true,
    showZelvomartAd: true,
  },

  pricing: {
    adSpendNote: true,
    baseIncludes: [
      "Dedicated multi-disciplinary team: strategist, developer, designer and copywriter",
      "Custom AI agents and lead-nurturing workflow integration",
      "Omnichannel campaign execution across search, social and paid traffic",
      "Direct Slack or WhatsApp communication channel and bi-weekly strategic reviews",
    ],
  },

  tools: {
    h2: "Our integrated marketing and AI stack",
    lead: "The battle-tested technologies our in-house specialists use every day.",
    items: [
      { name: "OpenAI GPT-4o", role: "Drafting, prompt workflows and conversational agents" },
      { name: "Claude 3.5 Sonnet", role: "Complex copy editing and tone-of-voice alignment" },
      { name: "n8n & Make", role: "Multi-tool workflow automation and CRM syncing" },
      { name: "Google Analytics 4", role: "Cross-channel attribution and event measurement" },
      { name: "Meta Ads Manager", role: "Dynamic creative testing and algorithmic scaling" },
      { name: "Google Ads", role: "Search and high-intent local lead acquisition" },
      { name: "Microsoft Clarity", role: "Heatmaps, click maps and user session analysis" },
      { name: "Search Console", role: "Organic query tracking and crawl health monitoring" },
    ],
  },

  faqHeading: "Direct answers about our AI digital marketing services",
  faqs: [
    {
      question: "What is an AI digital marketing agency?",
      answer:
        "An AI digital marketing agency uses modern artificial intelligence to speed up research, content drafting, creative variations, and lead capture, while keeping human strategists and designers in charge of strategy, quality, and final approval.",
    },
    {
      question: "Will AI content hurt my website's Google rankings?",
      answer:
        "No, as long as it is helpful, original, and factual. Google explicitly states that it evaluates content based on quality and relevance rather than whether AI was used. We fact-check, edit, and enrich every draft with real business insights before publishing.",
    },
    {
      question: "Is AI digital marketing cheaper than traditional marketing?",
      answer:
        "AI allows our team to accomplish in hours what used to take weeks of manual drafting. This means you get broader multi-channel coverage, faster testing, and more creative variations for the same investment.",
    },
    {
      question: "Do human specialists review everything before it goes live?",
      answer:
        "Yes, 100%. We enforce strict human-in-the-loop policies. No ad copy, article, design, or sensitive email is sent to your customers without human review and approval.",
    },
    {
      question: "Which AI tools do you use for marketing?",
      answer:
        "We utilize state-of-the-art models including OpenAI GPT-4o, Anthropic Claude 3.5, n8n, Make, and specialized video and voice generation engines, tailored to each specific task.",
    },
    {
      question: "How do you maintain our brand tone and avoid generic copy?",
      answer:
        "We build a dedicated brand knowledge base detailing your positioning, target personas, preferred vocabulary, forbidden buzzwords, and past winning examples to guide every piece of content.",
    },
  ],

  related: [
    "ai-automation-services",
    "seo-services",
    "paid-advertising-services",
  ],
  openItems: [],
};
