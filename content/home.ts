/**
 * Home Page Copy & Structured Brief Data (docs/02-page-briefs-core.md + Rule 04)
 * - Answer-first copy, zero banned marketing phrases
 * - Numbers strictly from content/site-facts.ts
 * - Unconfirmed items gated behind `confirmed: boolean`
 */

import type { ServiceFaq } from "./services";

export const HOME_CONTENT = {
  meta: {
    title: "Digital Marketing, Web & AI Agency | Webix Solutions",
    description:
      "Websites, SEO, paid ads, social media and AI automation from a 20+ person in-house team. Serving Canada, the US, UAE and NZ. Book a free strategy call.",
  },

  hero: {
    kicker: "Full-service digital & AI engineering team",
    h1: "Websites, marketing and AI automation that grow your business",
    lead:
      "We build websites, run SEO, paid ads and social media, and ship AI chatbots and automations. We work with businesses in Canada, the US, the UAE, New Zealand and Pakistan on your time zone.",
    primaryCta: {
      label: "Book a strategy call",
      href: "/book-a-call/",
    },
    secondaryCta: {
      label: "See packages",
      href: "/offers/",
    },
  },

  servicesSection: {
    kicker: "Services organized by business outcome",
    h2: "One in-house team for your website, growth marketing and AI systems",
    lead:
      "Hire us for a single build or combine web development, search, paid media and AI automation under one team without coordinating multiple freelancers.",
  },

  aiSystemsSection: {
    kicker: "AI systems we have built and shipped",
    h2: "Practical AI workflows connected to your website, WhatsApp and CRM",
    lead:
      "We build AI systems around clear business tasks — answering enquiries, qualifying callers and enriching leads — with human approval where it matters.",
    systems: [
      {
        id: "chatbot",
        title: "Website & WhatsApp AI chatbot",
        summary:
          "Trained on your services, pricing and policies. Answers questions 24/7, captures contact details, books strategy calls and hands complex threads to your team.",
        href: "/ai-chatbot-development/",
        nodes: ["Visitor or WhatsApp", "Knowledge-base AI", "Book call or CRM"],
      },
      {
        id: "voice",
        title: "AI voice receptionist for service businesses",
        summary:
          "Answers missed or after-hours phone calls, asks qualification questions for the job, books an appointment into your calendar and sends an SMS summary.",
        href: "/ai-automation-services/",
        nodes: ["Inbound phone call", "AI voice qualifier", "Calendar + SMS log"],
      },
      {
        id: "lead-engine",
        title: "Google Maps to outreach lead engine",
        summary:
          "Finds public business listings by category and city, enriches website and contact details, drafts a relevant first note and pauses for human review before sending.",
        href: "/ai-automation-services/",
        nodes: ["Google Maps search", "Enrich + AI draft", "Human review → Send"],
      },
    ],
  },

  howWeWork: {
    kicker: "How we work",
    h2: "From strategy call to live launch and monthly reporting",
    lead:
      "You work directly with our project leads during your business hours, with written scopes, staging previews and direct ownership of every account.",
    proposal48hConfirmed: false,
    steps: [
      {
        number: "01",
        title: "Strategy call",
        description:
          "We meet for 30 minutes on your time zone to review your current website, search visibility, ad accounts and operational bottlenecks.",
      },
      {
        number: "02",
        title: "Plan & proposal",
        description:
          "You receive a written scope listing the exact deliverables, timeline, milestones and fixed or monthly price before any work starts.",
        confirmed48hDescription:
          "Within 48 hours, you receive a written scope listing the exact deliverables, timeline, milestones and fixed or monthly price.",
      },
      {
        number: "03",
        title: "Build & launch",
        description:
          "Our in-house developers, designers, marketers and AI engineers build on a staging link, verify forms and tracking, and launch cleanly.",
      },
      {
        number: "04",
        title: "Report & improve monthly",
        description:
          "We share clear monthly reports from Google Search Console, GA4 and your ad platforms, then ship the next month's improvements.",
      },
    ],
  },

  twoWays: {
    kicker: "Two ways to work with us",
    h2: "Direct for businesses, or white-label for agencies",
    forBusinesses: {
      badge: "For business owners & founders",
      title: "Your dedicated website, marketing and AI team",
      description:
        "We handle your website build, SEO, Google Business Profile, paid ads, social content and AI automations end to end. You keep 100% ownership of your domain, code repository, CRM and ad accounts.",
      bullets: [
        "Direct Slack or WhatsApp channel during your working hours",
        "Clear deliverables — no mystery retainers or locked platforms",
        "Ad spend is always paid directly by you to Meta, Google or TikTok",
      ],
      ctaLabel: "Book a strategy call",
      ctaHref: "/book-a-call/",
    },
    forAgencies: {
      badge: "For agencies & IT companies",
      title: "White-label delivery partner on your time zone",
      description:
        "Scale your agency capacity without hiring full-time overhead. We build WordPress, Shopify and Next.js websites, manage SEO and social content, and ship AI automations under strict NDA.",
      bullets: [
        "Unbranded files, staging links and reports under your name",
        "We work inside your Slack, ClickUp, Asana or Jira workspace",
      ],
      ctaLabel: "Explore white-label partnership",
      ctaHref: "/white-label-partners/",
    },
  },

  faqs: [
    {
      question: "What does Webix Solutions do?",
      answer:
        "Webix Solutions is a full-service digital marketing, web development and AI automation agency with a 20+ person in-house team in Pakistan. We build custom-coded and CMS websites, manage SEO, Google Business Profiles, paid ads and social media, and develop AI chatbots, voice agents and workflow automations for businesses in Canada, the United States, the UAE, New Zealand and Pakistan.",
    },
    {
      question: "How much does a website or monthly marketing package cost?",
      answer:
        "We scope every website, growth package and AI automation sprint around your exact page count, platforms and goals during a free 30-minute strategy call. You receive a written proposal with a clear breakdown before starting, and for paid advertising campaigns you always pay ad spend directly to Meta, Google or TikTok.",
    },
    {
      question: "Where is your team located and what hours do you work?",
      answer:
        "Our headquarters and 20+ person in-house team are in Dunyapur, Punjab, Pakistan, with client meetings available in Lahore by appointment. We run two shifts: a day shift starting at 9:00 AM Pakistan time (overlapping UAE and Pakistani business hours) and a night shift from 9:00 PM to 5:00 AM Pakistan time (overlapping Eastern, Pacific and New Zealand mornings).",
    },
    {
      question: "Do you build with WordPress and Shopify or custom code?",
      answer:
        "We build both. Our team has delivered 91 custom-coded builds and repositories using Next.js, React, Node.js and Flutter, as well as 50+ CMS websites across WordPress, WooCommerce, Shopify, Wix, Webflow and Squarespace. On our strategy call, we recommend the right stack based on your speed, editing and budget needs.",
    },
    {
      question: "Can you build a custom AI chatbot or voice agent for my business?",
      answer:
        "Yes. We build website and WhatsApp AI chatbots trained on your services, pricing and policies, as well as AI voice receptionists and n8n/Make workflow automations connected to your CRM and calendar. Every AI system includes human-handoff rules so complex enquiries reach your team immediately.",
    },
    {
      question: "Do you work white-label for other agencies?",
      answer:
        "Yes. We partner with digital marketing agencies, web studios and IT consultancies in North America, the UAE and beyond as their white-label production team. We sign an NDA, deliver unbranded websites, creatives, SEO and AI automations inside your project management tool, and never contact your clients directly unless asked.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "A standard 5-page business website or an AI automation sprint typically takes 10 to 14 business days once content and access are confirmed. Larger Shopify stores, custom Next.js websites, CRMs and Flutter mobile apps take 3 to 8 weeks depending on scope, with a staging link shared in the first week.",
    },
    {
      question: "Who owns the website, code and ad accounts?",
      answer:
        "You do. Upon completion and payment, you own 100% of your domain, website files, GitHub code repository, CMS admin, Google Analytics, Search Console and ad accounts. We never lock clients into proprietary hosting or agency-owned ad accounts.",
    },
  ] satisfies ServiceFaq[],

  finalCta: {
    kicker: "Start with a 30-minute conversation",
    h2: "Tell us what you are building — we will map the fastest path to launch",
    lead:
      "Meet with our team on a video call in your time zone, or message us directly on WhatsApp for a quick answer.",
  },
} as const;
