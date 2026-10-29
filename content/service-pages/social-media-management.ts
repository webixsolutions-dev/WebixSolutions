import type { ServicePageContent } from "./types";

/** /social-media-management/ — brief: docs/03 "Social media management". */
export const SOCIAL_MEDIA_MANAGEMENT: ServicePageContent = {
  slug: "social-media-management",
  heroKicker: "Instagram, Facebook, TikTok and LinkedIn",
  intro: [
    "We plan, create, post and manage your social media on Instagram, Facebook, TikTok and LinkedIn, so your accounts stay active without taking your team's time.",
    "Our in-house team manages 50+ social accounts for businesses in Canada, the US, the UAE, New Zealand and Pakistan.",
  ],
  proofChip: "50+ social media accounts managed",

  outcomes: {
    h2: "Social media that stays consistent and on brand",
    lead: "You approve the plan once a month; we handle the creating, posting and replying.",
    items: [
      {
        title: "A steady posting schedule",
        detail: "A monthly calendar of posts, carousels and reels that goes out on time, every week.",
      },
      {
        title: "Content that looks like your brand",
        detail: "Designers and video editors create every piece in your colours, fonts and tone of voice.",
      },
      {
        title: "Comments and messages answered",
        detail: "We reply to comments and DMs during agreed hours and pass sales enquiries straight to you.",
      },
    ],
  },

  unique: {
    h2: "How a month of content comes together",
    lead: "An example of the monthly cycle. Your posting cadence depends on the plan you choose.",
    table: {
      columns: ["Week", "What happens", "Your part"],
      rows: [
        ["Before the month", "We draft the content calendar: topics, formats and captions", "Review and approve the calendar"],
        ["Week 1", "Designers and editors produce posts, carousels and reels", "Share any photos, offers or news"],
        ["Weeks 1–4", "Scheduled posting and daily community management", "Answer leads we pass to you"],
        ["Month end", "Performance report and ideas for next month", "Join a short review call if you want one"],
      ],
    },
  },

  included: {
    h2: "What is included in social media management",
    lead: "Everything needed to keep your accounts active, from strategy to replies.",
    groups: [
      {
        groupTitle: "Strategy and planning",
        items: [
          "Account audit and content pillars",
          "Monthly content calendar for your approval",
          "Captions and hashtags written for each platform",
        ],
      },
      {
        groupTitle: "Content creation",
        items: [
          "Branded post and carousel designs",
          "Reels and short videos edited in-house",
          "Profile and highlight cover updates",
        ],
      },
      {
        groupTitle: "Posting, community and reporting",
        items: [
          "Scheduling and posting on each platform",
          "Replies to comments and DMs during agreed hours",
          "Monthly performance report",
        ],
      },
    ],
  },

  process: {
    h2: "How we take over your social media",
    lead: "From first call to your first scheduled month.",
    steps: [
      { title: "Strategy call", description: "We look at your accounts, competitors and goals, and agree which platforms to focus on." },
      { title: "Brand and access", description: "You share brand assets and give us access to your accounts — you stay the owner." },
      { title: "First calendar", description: "We send the first month's calendar and sample designs for your approval." },
      { title: "Post and report", description: "Content goes live on schedule, and you get a report at the end of each month." },
    ],
  },

  proof: {
    h2: "Social media is one of our largest teams",
    lead: "Social media managers, designers and video editors all work in-house, in the same team as our ads and web developers.",
    statKeys: ["socialAccountsManaged", "teamSize", "totalClientsServed"],
  },

  pricing: {
    baseIncludes: [
      "Monthly content calendar",
      "Branded posts and reels",
      "Scheduling and community management",
      "Monthly report",
    ],
  },

  tools: {
    h2: "Platforms we manage",
    lead: "We focus on the platforms where your buyers spend time.",
    items: [
      { name: "Instagram", role: "Posts, carousels, reels and stories" },
      { name: "Facebook", role: "Page posts, community and messages" },
      { name: "TikTok", role: "Short-form video" },
      { name: "LinkedIn", role: "Company page and B2B content" },
    ],
  },

  faqHeading: "Social media management questions",
  faqs: [
    {
      question: "How many posts per month do I get?",
      answer: "It depends on the plan. Each plan sets a number of posts and reels per month, and we agree it in writing before we start.",
    },
    {
      question: "Which platforms do you manage?",
      answer: "Instagram, Facebook, TikTok and LinkedIn. We recommend focusing on the two or three where your buyers are most active rather than spreading thin.",
    },
    {
      question: "Do you make reels and videos?",
      answer: "Yes. Our in-house video editors make reels and short videos from your footage, stock footage or AI-generated visuals.",
    },
    {
      question: "Who approves content before posting?",
      answer: "You do. We send the monthly calendar with designs and captions, and nothing is posted until you approve it.",
    },
    {
      question: "Do you reply to comments and DMs?",
      answer: "Yes. We reply during the hours agreed in your plan and forward sales enquiries and complaints to you straight away.",
    },
    {
      question: "Do you run ads too?",
      answer: "Yes, through our paid advertising service. Ad spend is always paid by you directly to Meta, TikTok or LinkedIn; our fee covers management only.",
    },
    {
      question: "How do you report results?",
      answer: "You get a monthly report with reach, engagement, follower growth and the posts that performed best, plus what we will change next month.",
    },
  ],

  related: [
    "ai-social-media-content-creation",
    "ai-video-production-services",
    "paid-advertising-services",
  ],
  openItems: [
    "SMM plan prices ('Plans from $149/month' in brief meta; services.ts confirmed:false)",
    "Posts/reels per month for each plan",
    "Community-management hours per plan",
    "A social media result/case study we can publish",
  ],
};
