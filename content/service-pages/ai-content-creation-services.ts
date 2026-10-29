import type { ServicePageContent } from "./types";

/** /ai-content-creation-services/ — brief: docs/03 "AI content creation". */
export const AI_CONTENT_CREATION_SERVICES: ServicePageContent = {
  slug: "ai-content-creation-services",
  heroKicker: "AI-assisted drafting with human editorial polish",
  intro: [
    "We produce high-ranking SEO articles, high-converting product descriptions, landing pages and email newsletters created with AI and edited by senior human writers.",
    "Every piece is fact-checked, aligned to your brand voice and structured for organic search visibility and clear reader engagement.",
  ],
  proofChip: "Human-edited content with structured schema integration",

  outcomes: {
    h2: "Scale your content volume without sacrificing editorial standards",
    lead: "Pure AI copy is often generic, repetitive and factually unreliable. We use AI for rapid research and outline generation, then let experienced human editors polish every sentence.",
    items: [
      {
        title: "Articles that actually rank on Google",
        detail:
          "Content is planned around real buyer search queries, enriched with primary sources and formatted with clean headings, tables and JSON-LD schema.",
      },
      {
        title: "Zero generic fluff or hallucinated claims",
        detail:
          "Our human editors verify every statistic, product specification and external citation before anything is scheduled for publication.",
      },
      {
        title: "Consistent brand voice across all assets",
        detail:
          "A custom brand knowledge base enforces your preferred terminology, audience framing and forbidden clichés across every drafted asset.",
      },
    ],
  },

  unique: {
    h2: "Our 5-stage human-in-the-loop writing workflow",
    lead: "How we ensure every published piece of content reads like it was written by an industry specialist.",
    table: {
      columns: ["Stage", "What Happens", "Who Handles It"],
      rows: [
        [
          "1. Topic & Search Intent",
          "Keyword research, competitor SERP analysis and angle development",
          "Senior SEO Strategist",
        ],
        [
          "2. AI Outline & Draft",
          "Structured outline creation and first-draft generation based on your brand guide",
          "Custom GPT-4o / Claude Prompt",
        ],
        [
          "3. Human Fact-Check & Edit",
          "Rewriting tone, cutting fluff, verifying numbers and adding practical examples",
          "In-House Human Editor",
        ],
        [
          "4. Technical Optimization",
          "Formatting headings, internal links, meta description and structured data",
          "On-Page SEO Specialist",
        ],
        [
          "5. Client Sign-Off",
          "Final review on Google Docs or staging link before publication",
          "Your Team Lead",
        ],
      ],
    },
    note: "Google evaluates content based on helpfulness, originality and accuracy (E-E-A-T), not the tools used to create it. Our human review guarantees compliance with Google's search quality guidelines.",
  },

  included: {
    h2: "What is included in content creation services",
    lead: "Full-service editorial support from keyword planning to publishing.",
    groups: [
      {
        groupTitle: "Research and planning",
        items: [
          "Keyword research mapped to buyer funnel stages (informational and commercial)",
          "Monthly editorial content calendar with target word counts and angles",
          "Detailed content briefs with required subheadings, sources and internal links",
        ],
      },
      {
        groupTitle: "Drafting, editing and proofing",
        items: [
          "AI-assisted first drafts refined and polished by native English editors",
          "Custom visual diagrams, comparison tables and quote callouts",
          "Rigorous plagiarism, AI-repetition and factual accuracy checks",
        ],
      },
      {
        groupTitle: "Publishing and technical SEO",
        items: [
          "Click-worthy titles and meta descriptions under 60 and 155 characters",
          "Direct upload and formatting into WordPress, Shopify, Webflow or Next.js",
          "Schema graph markup (Article, FAQPage, HowTo) for rich search snippets",
        ],
      },
    ],
  },

  process: {
    h2: "How we deliver monthly content batches",
    lead: "A predictable rhythm that keeps your website and blog growing consistently.",
    steps: [
      {
        title: "Brand voice discovery",
        description:
          "We analyze your best-performing past content, target customer personas and tone preferences on an initial call.",
      },
      {
        title: "Monthly content calendar",
        description:
          "We present the upcoming month's titles, target keywords and planned delivery dates for your approval.",
      },
      {
        title: "Drafting and human polish",
        description:
          "Our team researches, drafts with AI, and extensively edits every piece to ensure authority and depth.",
      },
      {
        title: "Review and publishing",
        description:
          "You review the Google Docs drafts, give feedback, and we format and publish them directly to your CMS.",
      },
    ],
  },

  proof: {
    h2: "Content engineered by our in-house publishing team",
    lead: "Our team writes content across B2B technology, e-commerce, home services, healthcare and digital marketing.",
    statKeys: ["cmsWebsitesBuilt", "totalClientsServed", "teamSize"],
    showOwnBrands: true,
  },

  pricing: {
    baseIncludes: [
      "Targeted keyword research and monthly editorial calendar",
      "Human-edited long-form articles, landing pages or product descriptions",
      "On-page SEO optimization: meta tags, headers and internal link mapping",
      "Direct CMS uploading, formatting and structured data integration",
    ],
  },

  tools: {
    h2: "Our content and editorial toolchain",
    lead: "Proven tools for research, drafting, quality assurance and optimization.",
    items: [
      { name: "OpenAI GPT-4o", role: "Rapid outline ideation and draft expansion" },
      { name: "Anthropic Claude 3.5", role: "Nuanced voice modeling and editorial tone matching" },
      { name: "Ahrefs & Semrush", role: "Keyword difficulty analysis and SERP competitor research" },
      { name: "Grammarly Business", role: "Grammar, clarity and conciseness validation" },
      { name: "Originality.ai", role: "Content scanning and quality assurance audits" },
      { name: "Google Docs", role: "Collaborative client review and revision tracking" },
      { name: "WordPress / Shopify", role: "Direct publishing, tag management and featured images" },
      { name: "Search Console", role: "Post-launch indexing and organic click tracking" },
    ],
  },

  faqHeading: "Direct answers about AI content creation services",
  faqs: [
    {
      question: "Does Google penalise AI-generated content?",
      answer:
        "No. Google has officially stated that it evaluates content based on helpfulness, originality, and user satisfaction (E-E-A-T), not on whether AI was used. Because our experienced human editors fact-check, refine, and add unique insights to every piece, our content satisfies Google's highest search quality standards.",
    },
    {
      question: "How many articles or pages are included per month?",
      answer:
        "We offer packages ranging from 4 in-depth articles per month for local businesses up to 16+ articles or 100+ bulk e-commerce product descriptions for growing national brands.",
    },
    {
      question: "Can you accurately match our brand tone of voice?",
      answer:
        "Yes. Before writing a single word, we create a detailed Brand Voice Guide defining your audience framing, tone attributes, preferred terminology, and examples of what to say and what to avoid.",
    },
    {
      question: "Who owns the copyright to the written content?",
      answer:
        "You do 100%. Once published and paid for, all copyrights, intellectual property and source files belong exclusively to your business.",
    },
    {
      question: "Do you format and publish the content directly to our website?",
      answer:
        "Yes. If you provide CMS access (WordPress, Shopify, Webflow, etc.), we format headings, add meta descriptions, compress images, insert internal links, and schedule posts directly.",
    },
  ],

  related: [
    "seo-services",
    "ai-social-media-content-creation",
    "web-design-development-service",
  ],
  openItems: [],
};
