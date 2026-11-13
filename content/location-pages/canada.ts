import type { LocationPageContent } from "./types";
import { SITE_FACTS } from "@/content/site-facts";

export const CANADA_LOCATION_PAGE: LocationPageContent = {
  slug: "canada",
  countryName: "Canada",
  shortCode: "CA",
  title: "Web Design, SEO & AI for Canada | Webix Solutions",
  metaDescription:
    "Websites, SEO, Meta and Google ads and AI automation for Canadian businesses — working Eastern and Pacific business hours. CAD estimates on request.",
  h1: "Digital marketing, websites and AI for businesses in Canada",
  heroIntro: [
    "We work with Canadian businesses and agency partners on websites, local search and customer intake.",
    "For Calgary home services, Camz Cleaning is a public example of service-area pages, online pricing and booking.",
  ],
  heroChip: "Eastern & Pacific working hours overlap",
  partnerNote: SITE_FACTS.canadaPartner.statement,
  currencyCode: "CAD",
  currencyHeadline: "Transparent project pricing with approximate CAD equivalents",
  currencyExplanation:
    "Our invoices are issued in USD with approximate CAD estimates provided for predictable budgeting. Ad spend is paid directly by your business in Canadian Dollars to your Canadian Meta, Google, and TikTok ad accounts.",
  pricingCard: {
    startingRate: "Custom USD quote with a CAD estimate",
    description: "Fixed-price project scopes and predictable monthly retainers",
    terms: [
      "No Canadian agency middleman markups or bloated overhead fees",
      "Direct billing to your Canadian business credit card via secure international invoicing",
      "Ad budgets remain under your direct control in Canadian Dollars (CAD)",
      "40% project kickoff deposit with final milestone balance upon completion",
    ],
  },
  timezoneSummary:
    "Our Pakistan evening shift overlaps Canadian business hours. The booking calendar displays available times in your local zone.",
  overlapRows: [
    {
      pktWindow: "9:00 PM – 1:00 AM PKT",
      localWindow: "11:00 AM–3:00 PM EST / 12:00 PM–4:00 PM EDT (8:00 AM–12:00 PM PST / 9:00 AM–1:00 PM PDT)",
      activity: "Live video strategy calls, Slack/WhatsApp standups, sprint check-ins, and same-day ad launches.",
    },
    {
      pktWindow: "1:00 AM – 5:00 AM PKT",
      localWindow: "3:00 PM–7:00 PM EST / 4:00 PM–8:00 PM EDT (12:00 PM–4:00 PM PST / 1:00 PM–5:00 PM PDT)",
      activity: "Immediate revision requests, afternoon campaign tuning, urgent site edits, and West Coast alignment.",
    },
    {
      pktWindow: "9:00 AM – 6:00 PM PKT",
      localWindow: "11:00 PM–8:00 AM EST / 12:00 AM–9:00 AM EDT",
      activity: "Focused engineering sprints, design batch production, and code commits ready in your inbox by 9:00 AM ET.",
    },
  ],
  marketCards: [
    {
      title: "CASL & PIPEDA Legal Compliance",
      description:
        "We can build the consent, preference and unsubscribe controls agreed in your scope for your review.",
      bulletPoints: [
        "Explicit opt-in consent checkboxes and verifiable audit logging on all lead capture forms under CASL",
        "Clear sender identification, Canadian postal contacts, and one-click unsubscribe links in all email templates",
        "PIPEDA-compliant cookie banners and form minimization to safeguard personal consumer data",
        "Zero shady scraping or unverified Canadian cold email lists that trigger severe CRTC regulatory penalties",
      ],
    },
    {
      title: "Hyper-Local SEO Across Canadian Metros",
      description:
        "Local search behavior in Canada is heavily concentrated around competitive metropolitan hubs requiring precise geo-targeting.",
      bulletPoints: [
        "Dedicated city service pages optimized for the Greater Toronto Area (GTA), Vancouver Lower Mainland, Calgary, and Ottawa",
        "Google Business Profile optimization configured to rank in competitive 3-Pack local map results",
        "Local citation cleanup across Canadian business directories including YellowPages.ca, 411.ca, and BBB Canada",
        "Google Local Services Ads (LSA) onboarding for Canadian trade contractors seeking the Google Guaranteed badge",
      ],
    },
    {
      title: "Bilingual English & French Capability",
      description:
        "Businesses serving Quebec, Ottawa, or national Canadian markets need a fully localized experience in both languages.",
      bulletPoints: [
        "Multilingual Next.js and Shopify stores with separate language URLs",
        "Culturally natural French translations for headings, product descriptions, and checkout trust badges",
        "Language switchers that link to the corresponding translated page",
        "Localized ad copy variants specifically tuned for francophone Quebecer search terminology",
      ],
    },
  ],
  proof: {
    title: "Canadian Commercial Delivery Track Record",
    subtitle: "Enterprise engineering delivered for Canadian business founders",
    metric: "4–8 hrs",
    metricLabel: "Daily synchronous Canadian business overlap",
    narrative:
      "Our team provides Canadian founders and growing businesses with dedicated developers and paid media strategists who communicate clearly during Toronto and Vancouver business hours, eliminating the frustrating 24-hour communication lag common with conventional offshore outsourcers.",
    takeaways: [
      "Mobile-first Next.js websites with performance checked before handover",
      "Consent and unsubscribe controls scoped for your review",
      "Real-time coordination via Slack, Google Meet, and WhatsApp during Canadian afternoon hours",
      "Complete client ownership of all domain registrations, source code repos, and advertising accounts",
    ],
  },
  faqs: [
    {
      question: "How does working with a Pakistani team work smoothly for a Canadian business?",
      answer:
        "We coordinate smoothly by running a dedicated night shift in Pakistan (9:00 PM – 5:00 AM PKT) which overlaps 11:00 AM–7:00 PM EST or noon–8:00 PM EDT. During your normal working day, our senior developers and marketing leads are live on Slack, WhatsApp, and Google Meet for real-time discussions. While your team sleeps, our day team completes intensive engineering sprints, delivering completed tasks to your inbox by the next morning.",
    },
    {
      question: "Can Canadian companies pay for services in Canadian Dollars (CAD)?",
      answer:
        "Our service invoices are in USD and we can provide a CAD estimate for budgeting. Ad spend is billed separately through your own ad account.",
    },
    {
      question: "How do you ensure our marketing campaigns comply with CASL regulations?",
      answer:
        "We implement explicit consent mechanisms across all website forms, including clear explanatory notices, un-checked consent boxes, and timestamps recorded into your CRM. Every automated email contains complete company identification details and a functioning one-click unsubscribe mechanism as mandated by Canada's Anti-Spam Legislation.",
    },
    {
      question: "What Canadian metropolitan markets have you handled local SEO for?",
      answer:
        "We have optimized local visibility for competitive service sectors across Ontario (Toronto, Mississauga, Brampton, Ottawa), British Columbia (Vancouver, Surrey, Burnaby), and Alberta (Calgary, Edmonton). We structure dedicated location silos so search engines understand your specific Canadian geographic service boundaries.",
    },
    {
      question: "Can you build and optimize bilingual English and French Canadian websites?",
      answer:
        "Yes. We build bilingual websites on Next.js, Shopify, or WordPress utilizing clean sub-directory localization (/fr/), dynamic language switchers, and proper hreflang schema annotations so Canadian search engines index both language variants accurately without duplicate content penalties.",
    },
  ],
  relatedServices: [
    {
      name: "SEO Services",
      slug: "seo-services",
      shortBenefit: "Local Canadian Map Pack optimization and national search rankings.",
    },
    {
      name: "Web Design & Development",
      slug: "web-design-development-service",
      shortBenefit: "Fast custom Next.js and Shopify stores optimized for Canadian shoppers.",
    },
    {
      name: "Paid Advertising Services",
      slug: "paid-advertising-services",
      shortBenefit: "Meta and Google PPC campaigns targeted across Canadian metropolitan areas.",
    },
    {
      name: "AI Automation & Agents",
      slug: "ai-automation-services",
      shortBenefit: "Automated lead intake bots answering Canadian inquiries 24/7.",
    },
  ],
};
