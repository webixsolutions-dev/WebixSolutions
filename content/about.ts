/**
 * About Page Content Registry
 * Per docs/02-page-briefs-core.md, docs/site-facts.md, and user corrections.
 */

import { SITE_FACTS } from "./site-facts";

export interface DepartmentItem {
  name: string;
  focus: string;
  technologies: string[];
  description: string;
}

export interface OperatingRule {
  number: string;
  rule: string;
  description: string;
}

export const ABOUT_CONTENT = {
  meta: {
    title: "About Us — In-House Digital & AI Team | Webix Solutions",
    description:
      "Founded by Haroon Sukhera, Webix Solutions is a 20+ person in-house team building websites, growth marketing and AI systems for clients worldwide.",
    path: "/about-us/",
  },

  hero: {
    kicker: "In-house engineering & marketing center",
    h1: "About Webix Solutions",
    lead: "Webix Solutions is a full-service digital agency with a 20+ person in-house team in Pakistan. We engineer high-performance websites, run multi-channel growth campaigns, and deploy autonomous AI systems for businesses across Canada, the US, the UAE, New Zealand and Pakistan.",
  },

  founderStory: {
    kicker: "Founded by engineers",
    h2: "Built from freelance roots into an in-house production center",
    quote:
      "We started Webix Solutions with a clear conviction: offshore delivery does not have to mean junior contractors, broken code, or missed deadlines. We built an in-house campus where developers, marketers, and AI engineers collaborate in the same room, work on your time zone, and take complete ownership of measurable outcomes.",
    author: "Haroon Sukhera",
    role: "Founder & CEO, Webix Solutions",
    bio: "Haroon Sukhera founded Webix Solutions as a custom WordPress and CMS developer. Over the past several years, he scaled the team into a 20+ specialist engineering and growth firm. Today, beyond client delivery, Haroon and the Webix team build and run proprietary consumer brands—including Zelvomart (Pakistan e-commerce), LaptopSouq.ae, and Miraj Builders—giving our team daily, hands-on operational experience with ad spend, inventory logistics, and conversion rate optimization.",
  },

  departments: [
    {
      name: "Custom Web & App Engineering",
      focus: "Next.js, React, Node.js, Flutter & Laravel",
      technologies: ["Next.js 15", "React", "TypeScript", "Node.js", "Flutter", "PostgreSQL"],
      description:
        "Engineers custom software, agency operations CRMs, client portals, and cross-platform mobile apps with sub-second page loads and clean TypeScript architectures.",
    },
    {
      name: "CMS & E-Commerce Development",
      focus: "WordPress, Shopify & Custom Headless Stores",
      technologies: ["Shopify Liquid", "Shopify APIs", "WordPress", "WooCommerce", "Webflow"],
      description:
        "Builds conversion-tuned Shopify stores, corporate WordPress themes, and high-volume e-commerce checkouts designed for seamless merchant management.",
    },
    {
      name: "Growth SEO & Search Visibility",
      focus: "Technical SEO, Google Maps GBP & Generative Engine Optimization",
      technologies: ["Ahrefs", "Semrush", "Google Search Console", "Schema.org", "BrightLocal"],
      description:
        "Manages technical site architecture, local contractor 3-pack rankings, generative AI engine citation optimization, and authority-building content pipelines.",
    },
    {
      name: "Paid Media & Performance Marketing",
      focus: "Meta Ads, Google PPC & Multi-Channel Acquisition",
      technologies: ["Meta CAPI", "Google Ads", "TikTok Ads", "GA4", "Triple Whale"],
      description:
        "Designs, launches, and optimizes high-ROAS paid search, shopping, and click-to-WhatsApp social campaigns, tracking verified cost per lead and conversion data.",
    },
    {
      name: "AI Agents & Autonomous Workflows",
      focus: "Chatbots, AI Voice Receptionists & Lead Scrapers",
      technologies: ["OpenAI API", "n8n", "Make", "Vapi", "Twilio", "LangChain"],
      description:
        "Develops 24/7 website and WhatsApp conversational bots, automated missed-call voice receptionists, and autonomous Google Maps lead enrichment workflows.",
    },
    {
      name: "Creative Studio & Motion Design",
      focus: "Brand Identity, UI/UX Design & AI Video Ads",
      technologies: ["Figma", "Adobe Premiere", "After Effects", "Midjourney", "Runway"],
      description:
        "Produces clean digital brand identities, interactive Figma design systems, ad creatives, and high-converting short-form video reels for paid social campaigns.",
    },
    {
      name: "Project Operations & Delivery QA",
      focus: "Client Communication, Daily Standups & Quality Control",
      technologies: ["Slack", "WhatsApp Business", "ClickUp", "Jira", "GitHub"],
      description:
        "Maintains direct communication channels, enforces strict 48-hour proposal SLAs, runs multi-device QA checklists, and coordinates day and night shift handoffs.",
    },
  ] as DepartmentItem[],

  operatingRules: [
    {
      number: "01",
      rule: "We work on your business hours",
      description:
        "Our night shift (9:00 PM to 5:00 AM PKT) directly overlaps North American mornings and afternoons; our day shift (from 9:00 AM PKT) overlaps the UAE and Gulf region. You get live responses, not overnight delays.",
    },
    {
      number: "02",
      rule: "You own 100% of your code and accounts",
      description:
        "We never hold your digital assets hostage. Domains, GitHub repositories, Google Analytics, Meta ad accounts, and WordPress/Shopify stores are owned completely and transparently by your organization.",
    },
    {
      number: "03",
      rule: "Speak directly with senior leads, zero SDRs",
      description:
        "You never get passed between aggressive junior sales reps or outsourced account managers. When you book a call or message our team, you speak with Haroon or department heads who build the work.",
    },
    {
      number: "04",
      rule: "Clear proposals in 48 hours with fixed pricing",
      description:
        "Following your discovery call, we deliver an itemized written proposal with concrete milestones, exact delivery timelines, and guaranteed pricing with zero surprise hourly overages.",
    },
    {
      number: "05",
      rule: "Verified data and live platform transparency",
      description:
        "We share raw ad manager screenshots, live Search Console metrics, and verifiable GitHub commit logs. If a campaign is underperforming, we tell you immediately and pivot strategy.",
    },
  ] as OperatingRule[],

  faqs: [
    {
      q: "Who founded Webix Solutions and who leads the team?",
      a: "Webix Solutions was founded by Haroon Sukhera, who serves as Founder & CEO. Haroon leads an in-house team of 20+ software developers, performance marketers, creative designers, and AI automation specialists.",
    },
    {
      q: "Where is Webix Solutions based?",
      a: "Our central engineering and creative headquarters is located in Dunyapur, Punjab, Pakistan. We also host in-person meetings in Lahore by appointment, and serve clients globally across Canada, the US, the UAE, New Zealand, and Pakistan.",
    },
    {
      q: "Do you outsource any of your client work?",
      a: "No. 100% of our code, marketing campaigns, video editing, and AI system engineering is delivered by our full-time in-house specialists in Pakistan. We do not broker tasks to third-party freelancers.",
    },
    {
      q: "Can I meet the Webix team before signing a contract?",
      a: "Yes. You can schedule a 30-minute Google Meet strategy call directly through our booking calendar, or message Haroon directly on WhatsApp to coordinate an initial conversation.",
    },
    {
      q: "How does your team coordinate across international time zones?",
      a: "We operate two coordinated shifts: a day shift starting at 9:00 AM PKT (overlapping the UAE and Gulf Standard Time) and a night shift from 9:00 PM to 5:00 AM PKT (overlapping Eastern and Pacific business hours in Canada and the United States).",
    },
  ],
};
