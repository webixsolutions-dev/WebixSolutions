import type { ServicePageContent } from "./types";

/** /brand-awareness-strategy/ — brief: docs/03 "Brand strategy". */
export const BRAND_AWARENESS_STRATEGY: ServicePageContent = {
  slug: "brand-awareness-strategy",
  heroKicker: "Positioning, messaging and brand architecture",
  intro: [
    "We build clear brand positioning, core messaging frameworks and multichannel awareness campaigns that make your business recognizable, distinct and easy to recommend.",
    "Designed for growing companies across Canada, the US, the UAE, New Zealand and Pakistan who want to escape competing on price alone.",
  ],
  proofChip: "Strategic brand positioning backed by in-house campaign execution",

  outcomes: {
    h2: "A brand that stands out clearly in a crowded market",
    lead: "When buyers cannot see a difference between you and your competitors, they choose the cheapest option. Brand strategy defines why you are the obvious choice.",
    items: [
      {
        title: "Distinct market positioning that commands premium pricing",
        detail:
          "Define your exact category of one, core target persona, key differentiator and why your solution is fundamentally superior.",
      },
      {
        title: "Consistent messaging across your entire company",
        detail:
          "A brand messaging playbook giving your marketing, sales reps and developers unified terminology, value propositions and elevator pitches.",
      },
      {
        title: "Omnichannel awareness campaigns that build recall",
        detail:
          "Targeted brand awareness campaigns across Meta, YouTube, LinkedIn and local digital PR that keep you top-of-mind before buyers enter a buying cycle.",
      },
    ],
  },

  unique: {
    h2: "The 4 pillars of our brand positioning framework",
    lead: "How we articulate your commercial advantage into an enduring competitive moat.",
    table: {
      columns: ["Strategy Pillar", "The Question It Answers", "Deliverable You Receive"],
      rows: [
        [
          "1. Ideal Customer Profile (ICP)",
          "Who is the most profitable, highest-satisfaction client you serve?",
          "Detailed buyer persona dossiers including primary pain points and buying triggers",
        ],
        [
          "2. Competitive Differentiation",
          "What do you do that competitors cannot or will not match?",
          "Feature-benefit comparison matrix and proprietary service naming framework",
        ],
        [
          "3. Core Value Proposition",
          "What is the single most compelling commercial promise you deliver?",
          "Primary tagline, elevator pitch, and answer-first website hero copy hierarchy",
        ],
        [
          "4. Brand Voice & Governance",
          "How does your brand sound, speak and behave across touchpoints?",
          "Complete Brand Playbook detailing vocabulary, tone spectrum and taboo words",
        ],
      ],
    },
    note: "All strategic recommendations are rooted in your actual delivery strengths and validated with customer interviews, avoiding empty corporate slogans.",
  },

  included: {
    h2: "What is included in brand strategy and awareness",
    lead: "Complete strategic positioning and practical rollout guidelines.",
    groups: [
      {
        groupTitle: "Research, interviews and positioning",
        items: [
          "Leadership team discovery sessions and top-customer interview synthesis",
          "In-depth competitor messaging audit identifying commoditized claims and white space",
          "Core positioning thesis: category definition, unique value and proof points",
        ],
      },
      {
        groupTitle: "Messaging architecture and copywriting",
        items: [
          "Primary brand tagline, 30-second elevator pitch and executive bio summaries",
          "Key messaging pillars tailored to distinct buyer personas and decision-makers",
          "Website copy hierarchy blueprint for home, service and about pages",
        ],
      },
      {
        groupTitle: "Awareness campaign rollout",
        items: [
          "Brand awareness campaign strategy for Meta, YouTube, LinkedIn and industry media",
          "Digital PR outreach angles and thought leadership content themes",
          "Complete Brand Playbook PDF distributed to your team and agency partners",
        ],
      },
    ],
  },

  process: {
    h2: "Our 4-step strategic brand process",
    lead: "From stakeholder discovery to live campaign launch.",
    steps: [
      {
        title: "Discovery and competitor audit",
        description:
          "We analyze your past performance, interview key stakeholders, and audit how competitors position themselves.",
      },
      {
        title: "Positioning sprint and synthesis",
        description:
          "We craft your differentiation thesis, audience segmentation, and core commercial value propositions.",
      },
      {
        title: "Playbook drafting and presentation",
        description:
          "We deliver the comprehensive Brand Playbook and walk your leadership through messaging rollout.",
      },
      {
        title: "Awareness campaign activation",
        description:
          "We deploy coordinated brand awareness ads, thought leadership content, and updated website messaging.",
      },
    ],
  },

  proof: {
    h2: "Brand building backed by real commercial operations",
    lead: "We have built brand architectures for client businesses and created distinct brand identities for our own consumer brands.",
    statKeys: ["totalClientsServed", "teamSize", "customCodedBuilds"],
    showOwnBrands: true,
  },

  pricing: {
    baseIncludes: [
      "Full stakeholder discovery, competitor audit and customer persona synthesis",
      "Comprehensive Brand Positioning & Messaging Playbook PDF",
      "Executive presentation walkthrough and team Q&A workshop",
      "Awareness campaign media plan and creative messaging direction",
    ],
  },

  tools: {
    h2: "Our brand research and monitoring tools",
    lead: "Platforms for analyzing audience sentiment, competitor messaging and brand reach.",
    items: [
      { name: "Semrush / Ahrefs", role: "Competitor brand search volume and share of voice" },
      { name: "Google Trends", role: "Macro market demand and category interest trajectories" },
      { name: "Figma", role: "Visual brand architecture diagrams and moodboard creation" },
      { name: "Meta Ad Library", role: "Real-time competitor advertising angle monitoring" },
      { name: "SparkToro", role: "Audience intelligence, podcast and media consumption mapping" },
      { name: "Google Analytics 4", role: "Direct traffic, branded search volume and assisted conversions" },
      { name: "Notion", role: "Interactive digital brand playbook for cross-team access" },
      { name: "OpenAI GPT-4o", role: "Persona empathy modeling and positioning scenario testing" },
    ],
  },

  faqHeading: "Direct answers about brand strategy and awareness",
  faqs: [
    {
      question: "What is included in a brand strategy engagement?",
      answer:
        "A brand strategy engagement delivers an in-depth audit of your market, clear positioning defining what makes you distinct, a comprehensive Brand Messaging Playbook (elevator pitches, headlines, value pillars), and an awareness campaign rollout plan.",
    },
    {
      question: "How do you measure the success of brand awareness?",
      answer:
        "We track tangible commercial metrics: increases in direct and branded search volume in Google Search Console, growth in high-intent inbound referrals, lower blended customer acquisition costs (CAC), and shorter sales conversion cycles.",
    },
    {
      question: "Do you also redesign our logo and visual identity?",
      answer:
        "Yes. Strategy and visual identity work hand-in-hand. We can refresh your logo, color palette, typography and graphic styling through our integrated Creative & Graphic Design studio.",
    },
    {
      question: "How long does a brand strategy project take?",
      answer:
        "A focused brand strategy sprint typically takes 3 to 4 weeks from initial stakeholder discovery to the final presentation of your Brand Playbook.",
    },
    {
      question: "When should a growing business invest in brand strategy?",
      answer:
        "When you notice you are constantly competing on price, when your sales reps explain your offer differently on every call, or when expanding into new international markets like North America or the UAE.",
    },
  ],

  related: [
    "creative-services",
    "web-design-development-service",
    "paid-advertising-services",
  ],
  openItems: [],
};
