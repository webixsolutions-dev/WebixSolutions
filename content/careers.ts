/**
 * Careers & Open Roles Registry
 * Per prompts/PROMPTS.md Phase 8
 */

export interface OpenRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-Time (Day Shift)" | "Full-Time (Night Shift)" | "Flexible";
  experience: string;
  overview: string;
  keyResponsibilities: string[];
  requirements: string[];
}

export const CAREERS_CONTENT = {
  meta: {
    title: "Careers — Join Our In-House Team | Webix Solutions",
    description:
      "Explore engineering, digital marketing and AI automation roles at Webix Solutions in Dunyapur, Pakistan. Learn how we hire and view open positions.",
    path: "/careers/",
  },

  hero: {
    kicker: "Join our in-house production center",
    h1: "Build with Webix Solutions",
    lead: "We are an engineering-driven agency with a 20+ person team in Dunyapur, Pakistan. We build high-performance web systems, run high-ROAS marketing campaigns, and deploy production AI workflows for clients in North America, the Gulf, and New Zealand.",
  },

  howWeHire: [
    {
      step: "01",
      title: "Real Work Review",
      description:
        "No generic trivia questions. We review your live GitHub repositories, published Next.js/Flutter apps, or verified Meta/Google ad account case studies.",
    },
    {
      step: "02",
      title: "Practical Paid Trial",
      description:
        "A realistic 1–2 day paid milestone challenge matching the actual tasks you will handle on client projects. We respect your time and pay for your work.",
    },
    {
      step: "03",
      title: "Team Alignment",
      description:
        "A direct conversation with Haroon Sukhera and senior department leads to discuss work styles, shift preferences, and long-term career growth.",
    },
    {
      step: "04",
      title: "Offer & Fast Onboarding",
      description:
        "Transparent compensation packages, immediate workstation setup at our Dunyapur campus, and direct integration into our Slack and ClickUp channels.",
    },
  ],

  workplaceValues: [
    {
      title: "Clean Shift Boundaries",
      description:
        "We reject 24/7 burnout culture. Whether you work our day shift (starting at 9:00 AM PKT) or night shift (9:00 PM – 5:00 AM PKT), your off-hours are strictly respected.",
    },
    {
      title: "Modern Engineering Stacks",
      description:
        "Work daily with Next.js 15, TypeScript, Tailwind v4, Flutter, Supabase, n8n, OpenAI, and Meta Conversions API—no legacy monolithic dead ends.",
    },
    {
      title: "Ethical Standards & Transparency",
      description:
        "Every team member operates under our published Code of Conduct, ensuring client confidentiality, responsible AI deployment, and mutual workplace respect.",
    },
  ],

  openRoles: [
    {
      id: "fullstack-nextjs",
      title: "Senior Full-Stack Developer",
      department: "Custom Web & App Engineering",
      location: "Dunyapur, Punjab (In-House)",
      type: "Full-Time (Night Shift)",
      experience: "3+ years production experience",
      overview:
        "Lead technical architecture and feature development for custom client web applications, SaaS dashboards, and agency operations platforms.",
      keyResponsibilities: [
        "Architect scalable Next.js and React applications using App Router, Server Actions, and TypeScript.",
        "Build secure REST and GraphQL endpoints in Node.js and integrate relational databases (PostgreSQL, Supabase).",
        "Enforce strict Core Web Vitals performance benchmarks (LCP < 2.0s, CLS 0).",
      ],
      requirements: [
        "Deep fluency in TypeScript, React, Next.js, and modern CSS/Tailwind.",
        "Proven experience integrating third-party APIs (Stripe, Google Calendar, Meta CAPI).",
        "Strong debugging skills and disciplined Git commit practices.",
      ],
    },
    {
      id: "flutter-engineer",
      title: "Mobile Application Developer (Flutter)",
      department: "Custom Web & App Engineering",
      location: "Dunyapur, Punjab (In-House)",
      type: "Full-Time (Day Shift)",
      experience: "2+ years Flutter experience",
      overview:
        "Develop high-performance iOS and Android applications for consumer brands, contractor dispatch systems, and e-commerce portals.",
      keyResponsibilities: [
        "Build smooth, responsive Flutter user interfaces following strict Figma design tokens.",
        "Integrate offline caching, push notifications, and background location services.",
        "Deploy and maintain builds across Google Play Store and Apple App Store.",
      ],
      requirements: [
        "Solid Dart and Flutter expertise with BLoC or Riverpod state management.",
        "Demonstrated portfolio of published apps on iOS and Android.",
        "Familiarity with native platform channels and performance profiling.",
      ],
    },
    {
      id: "paid-media-specialist",
      title: "Paid Media & Performance Marketing Buyer",
      department: "Performance Marketing",
      location: "Dunyapur, Punjab (In-House)",
      type: "Full-Time (Night Shift)",
      experience: "2+ years managing >$10k/mo ad spend",
      overview:
        "Manage paid acquisition funnels across Meta Ads, Google Ads, and TikTok for international DTC brands and local service contractors.",
      keyResponsibilities: [
        "Setup and manage Meta CAPI server-side tracking, Google Tag Manager, and GA4 attribution.",
        "Conduct weekly ad creative iterations, copy split testing, and audience refinement.",
        "Maintain direct communication with clients regarding weekly ROAS and cost per acquisition (CPA).",
      ],
      requirements: [
        "Verifiable track record managing live Meta and Google ad budgets.",
        "Deep analytical understanding of first-party tracking, attribution lag, and creative metrics.",
        "Fluency in written English for ad copywriting and client performance summaries.",
      ],
    },
    {
      id: "ai-automation-engineer",
      title: "AI Automation & Workflow Engineer",
      department: "AI & Autonomous Systems",
      location: "Dunyapur, Punjab (In-House)",
      type: "Full-Time (Flexible)",
      experience: "1+ years automation engineering",
      overview:
        "Design and deploy autonomous AI chatbots, automated voice receptionists, and multi-step lead enrichment workflows for client operations.",
      keyResponsibilities: [
        "Build complex webhooks and multi-branch automation pipelines using n8n and Make.",
        "Integrate OpenAI, Claude, and Gemini APIs with vector stores and retrieval-augmented generation (RAG).",
        "Connect VoIP voice agents (Twilio, Vapi) to contractor CRMs.",
      ],
      requirements: [
        "Hands-on experience with webhook payloads, REST APIs, and JSON data transformations.",
        "Understanding of LLM prompt engineering, function calling, and context limits.",
        "Basic Python or Node.js scripting capability for custom code automation nodes.",
      ],
    },
  ] as OpenRole[],

  faqs: [
    {
      question: "Are these roles remote or based at your Dunyapur campus?",
      answer:
        "Our primary team collaborates in-person at our central engineering headquarters in Dunyapur, Punjab. We also offer dedicated night-shift options for senior engineers with demonstrated remote autonomy.",
    },
    {
      question: "How do I apply for an open position?",
      answer:
        "Email your resume, GitHub profile link, or live portfolio directly to hr@webixsolutions.com with the position title in the subject line. We review every application and reply within two business days.",
    },
    {
      question: "What does the interview process look like?",
      answer:
        "We review your real work, assign a 1–2 day paid practical milestone challenge, and conduct a direct alignment conversation with Haroon Sukhera and department leads.",
    },
  ],
};
