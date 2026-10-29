import type { ServicePageContent } from "./types";

/** /ai-social-media-content-creation/ — brief: docs/03 "AI social media content". */
export const AI_SOCIAL_MEDIA_CONTENT_CREATION: ServicePageContent = {
  slug: "ai-social-media-content-creation",
  heroKicker: "Monthly social batches designed in-house",
  intro: [
    "We produce monthly batches of branded social media carousels, graphics, short reels and captions using AI ideation finished by experienced graphic designers.",
    "A full month of on-brand content planned, designed and approved before anything is scheduled, for businesses in Canada, the US, the UAE, New Zealand and Pakistan.",
  ],
  proofChip: "50+ social accounts managed by our in-house team",

  outcomes: {
    h2: "Consistent social presence without creative burnout",
    lead: "Never stare at a blank screen wondering what to post. Approve your entire monthly visual calendar in one 30-minute review session.",
    items: [
      {
        title: "A full month of content prepared in advance",
        detail:
          "Carousels, promotional graphics, educational tips and short reels ready to schedule weeks before they go live.",
      },
      {
        title: "Polished by human graphic designers",
        detail:
          "AI generates the concept angles and initial hooks, while our in-house design team applies your exact brand typography, hex codes and layout standards.",
      },
      {
        title: "Platform-specific formatting that performs",
        detail:
          "Optimized aspect ratios (4:5 for Instagram feeds, 9:16 for Reels and TikTok, 16:9 for LinkedIn) with high-contrast text hooks.",
      },
    ],
  },

  unique: {
    h2: "Monthly content package tiers",
    lead: "Select the posting volume that matches your growth stage.",
    table: {
      columns: ["Package Tier", "Monthly Assets Included", "Best For"],
      rows: [
        [
          "Starter Batch (12 Posts)",
          "8 Branded carousels/graphics + 4 Edited video reels + captions & hashtags",
          "Local businesses & consultants maintaining active credibility",
        ],
        [
          "Growth Batch (20 Posts)",
          "12 Multi-slide carousels + 8 High-hook video reels + story prompts",
          "E-commerce brands & B2B service firms scaling engagement",
        ],
        [
          "Omnichannel Batch (30 Posts)",
          "18 Carousels & infographics + 12 Reels/TikToks + multi-platform captions",
          "Aggressive brands dominating Instagram, TikTok, Facebook & LinkedIn",
        ],
      ],
    },
    note: "Content approval guarantee: You get two rounds of revisions on each monthly batch, and no post is published without your explicit written approval.",
  },

  included: {
    h2: "What is included in social content creation",
    lead: "Everything required to keep your feeds active with high-converting creative.",
    groups: [
      {
        groupTitle: "Ideation and calendar planning",
        items: [
          "Monthly content strategy aligned to your service offers and seasonal trends",
          "Interactive visual calendar board (Notion or Google Sheets) for review",
          "Engaging captions written with clear hooks, value bullets and calls to action",
        ],
      },
      {
        groupTitle: "Design and video editing",
        items: [
          "Custom multi-slide educational carousels and static quote graphics",
          "Short-form video editing with animated captions, music and sound effects",
          "Cohesive brand color grading, fonts and profile highlight icons",
        ],
      },
      {
        groupTitle: "Scheduling and assets",
        items: [
          "Exported high-resolution PNGs and MP4 files organized in shared folders",
          "Direct scheduling into Buffer, Later, Metricool or native Meta Business Suite",
          "Hashtag clusters and keyword-optimized caption descriptions for discovery",
        ],
      },
    ],
  },

  process: {
    h2: "Our monthly social content workflow",
    lead: "Four steps from monthly concept to automated scheduling.",
    steps: [
      {
        title: "Content pillar planning",
        description:
          "We map the upcoming month's themes, promotions and educational topics on an initial planning sync.",
      },
      {
        title: "Design and video drafting",
        description:
          "Our team generates concept angles, writes captions and designs the full visual asset batch.",
      },
      {
        title: "Client review and revision",
        description:
          "You review the calendar board, request any visual or copy tweaks, and give final sign-off.",
      },
      {
        title: "Scheduling and publishing",
        description:
          "We schedule every approved post across your connected social platforms at peak engagement times.",
      },
    ],
  },

  proof: {
    h2: "Creative produced by our in-house media team",
    lead: "Our team manages social feeds for retail brands, professional services, property developers and our own ventures.",
    statKeys: ["socialAccountsManaged", "teamSize", "totalClientsServed"],
    showOwnBrands: true,
  },

  pricing: {
    baseIncludes: [
      "Monthly visual content calendar board with copy and hashtags",
      "Branded multi-slide carousels, static designs and short video reels",
      "Two revision rounds per monthly batch before publication",
      "Direct scheduling across up to 4 major social media platforms",
    ],
  },

  tools: {
    h2: "Creative design and social scheduling stacks",
    lead: "Professional design and production software paired with scheduling platforms.",
    items: [
      { name: "Adobe Photoshop & Illustrator", role: "High-resolution vector branding and layout" },
      { name: "Figma", role: "Collaborative component kits and carousel design" },
      { name: "CapCut & Premiere Pro", role: "Short-form video cuts, transitions and captions" },
      { name: "Midjourney & Firefly", role: "Custom conceptual background generation" },
      { name: "Meta Business Suite", role: "Native Facebook and Instagram scheduling" },
      { name: "Metricool & Buffer", role: "Cross-platform analytics and automated dispatch" },
      { name: "Canva Pro", role: "Shared brand asset libraries and client templates" },
      { name: "OpenAI GPT-4o", role: "Hook variation generation and caption ideation" },
    ],
  },

  faqHeading: "Direct answers about AI social media content creation",
  faqs: [
    {
      question: "Will the content look robotic or obviously AI-generated?",
      answer:
        "No. We never post unedited AI output. AI is used behind the scenes for audience research and draft hooks, while our experienced in-house graphic designers and video editors craft every visual element using your official brand assets and typography.",
    },
    {
      question: "Do you schedule and post the content for us?",
      answer:
        "Yes. Once you approve the monthly calendar, our team schedules the posts with formatted captions and hashtags directly into your social accounts or scheduling tool.",
    },
    {
      question: "Which social platforms do you create content for?",
      answer:
        "We create tailored content for Instagram, Facebook, LinkedIn, TikTok, and YouTube Shorts, adapting aspect ratios and messaging styles to each platform's culture.",
    },
    {
      question: "How do revisions work if I want something changed?",
      answer:
        "Every monthly batch includes two rounds of revisions. You can leave notes directly on the calendar cards, and our designers will update the graphics or captions before scheduling.",
    },
    {
      question: "Can you create video reels if we don't have existing video footage?",
      answer:
        "Yes. We can produce text-on-screen aesthetic reels, screen-recorded software walkthroughs, kinetic typography animations, or curate licensed b-roll that fits your niche.",
    },
  ],

  related: [
    "social-media-management",
    "ai-video-production-services",
    "creative-services",
  ],
  openItems: [],
};
