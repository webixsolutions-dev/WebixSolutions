import type { LocationPageContent } from "./types";
import { SITE_FACTS } from "@/content/site-facts";

export const NEW_ZEALAND_LOCATION_PAGE: LocationPageContent = {
  slug: "new-zealand",
  countryName: "New Zealand",
  shortCode: "NZ",
  title: "Web & Digital Marketing Agency for NZ | Webix Solutions",
  metaDescription:
    "Websites, Google Maps, SEO, ads and AI automation for New Zealand businesses, with a team online during your mornings. Quotes available in NZD.",
  h1: "Digital marketing, websites and AI for businesses in New Zealand",
  heroIntro: [
    "We build websites and online stores, run local search and ads, and set up AI automation for businesses in Auckland and across New Zealand.",
    "Our team is online during New Zealand mornings, so calls, reviews and changes happen in your working day.",
  ],
  heroChip: "Online during New Zealand mornings",
  localPhone: {
    label: "Auckland line",
    display: SITE_FACTS.contact.nzPhoneDisplay,
    e164: SITE_FACTS.contact.nzPhoneE164,
  },
  currencyCode: "NZD",
  currencyHeadline: "Project pricing with an NZD estimate",
  currencyExplanation:
    "Proposals are written in USD, and we add an approximate NZD figure on request so you can budget in your own currency. Ad spend is paid by your business directly to Google, Meta or TikTok in New Zealand Dollars.",
  pricingCard: {
    startingRate: "From $499 USD, NZD estimate on request",
    description: "Fixed project scopes and monthly plans agreed in writing",
    terms: [
      "Written scope and quote before any work starts",
      "Payment by card, Wise or international bank transfer",
      "Ad budgets stay in your own ad accounts, billed in NZD",
      "40% deposit at kickoff, balance on the final milestone",
    ],
  },
  timezoneSummary:
    "New Zealand is seven to eight hours ahead of Pakistan. Our night shift lines up with your morning, and our day shift finishes work for your next morning. The booking calendar shows times in your own time zone.",
  overlapRows: [
    {
      pktWindow: "1:00 AM – 5:00 AM PKT",
      localWindow: "8:00 AM – 12:00 PM NZST (9:00 AM – 1:00 PM NZDT)",
      activity: "Video calls, WhatsApp check-ins, review of staging links and same-morning changes.",
    },
    {
      pktWindow: "9:00 AM – 1:00 PM PKT",
      localWindow: "4:00 PM – 8:00 PM NZST (5:00 PM – 9:00 PM NZDT)",
      activity: "Late-afternoon questions answered and next-day work agreed before you finish.",
    },
    {
      pktWindow: "1:00 PM – 6:00 PM PKT",
      localWindow: "8:00 PM – 1:00 AM NZST (New Zealand overnight)",
      activity: "Build and design work done while you are offline, ready to review the next morning.",
    },
  ],
  marketCards: [
    {
      title: "Local search and Google Maps",
      description:
        "Most local services in New Zealand are found through Google Search and Maps, so the listing and the website have to agree.",
      bulletPoints: [
        "Google Business Profile set up with the right categories, services and service areas",
        "City and suburb service pages for the areas you actually cover",
        "Consistent name, address and phone details across your site and directories",
        "Review request links your team can send after each job",
      ],
    },
    {
      title: "Privacy and consent",
      description:
        "We build the consent and data-handling controls agreed in your scope, for your review against the New Zealand Privacy Act 2020.",
      bulletPoints: [
        "Clear cookie consent, with analytics and ad pixels loading only after a visitor agrees",
        "Forms that ask only for the details you need",
        "A privacy page that names the tools your site uses",
        "Unsubscribe links in every marketing email",
      ],
    },
    {
      title: "Websites and stores that load fast",
      description:
        "Pages are served from a global network, so visitors in New Zealand get a fast site wherever it is built.",
      bulletPoints: [
        "Custom-coded Next.js sites, or builds on Shopify and WordPress",
        "Prices and checkout in New Zealand Dollars for online stores",
        "Mobile-first layouts tested on real phone sizes",
        "You own the domain, code and every account",
      ],
    },
  ],
  proof: {
    title: "How we work with New Zealand businesses",
    subtitle: "Morning overlap, written scopes and full ownership",
    metric: "4 hrs",
    metricLabel: "Live overlap each New Zealand morning",
    narrative:
      "New Zealand is one of the five markets we serve. You deal with the project leads doing the work, during your morning, and anything agreed on a call is done by the time you start the next day.",
    takeaways: [
      "Calls and reviews between 8:00 AM and 12:00 PM New Zealand time",
      "A staging link to review before anything goes live",
      "Written scope and quote for every project",
      "Domain, source code and ad accounts stay in your name",
    ],
  },
  faqs: [
    {
      question: "When is your team available for New Zealand businesses?",
      answer:
        "We are online from 8:00 AM to 12:00 PM New Zealand Standard Time (9:00 AM to 1:00 PM during daylight saving). That is when we hold calls and make live changes. Work agreed in the morning is built during your night and ready the next morning.",
    },
    {
      question: "Can you quote in New Zealand Dollars?",
      answer:
        "Yes. Proposals are written in USD and we add an approximate NZD figure on request. You can pay by card, Wise or international bank transfer, and ad spend is billed to you directly in NZD by the ad platform.",
    },
    {
      question: "Do you have an office in New Zealand?",
      answer:
        "No. Our team is based in Pakistan and works with New Zealand clients online. We have an Auckland phone line for calls and WhatsApp, and we meet on video during your morning.",
    },
    {
      question: "Which services do New Zealand businesses usually start with?",
      answer:
        "Most start with a website build or redesign together with Google Business Profile and local SEO. Paid ads and AI chat assistants are usually added once the website is converting visitors into enquiries.",
    },
    {
      question: "Who owns the website and accounts?",
      answer:
        "You do. The domain, hosting, code repository, analytics and ad accounts are set up in your name and handed over with documentation.",
    },
  ],
  relatedServices: [
    {
      name: "Web Design & Development",
      slug: "web-design-development-service",
      shortBenefit: "Fast websites and stores built for New Zealand customers.",
    },
    {
      name: "Google Business Profile",
      slug: "google-business-profile-optimization",
      shortBenefit: "Show up correctly on Google Maps in the areas you serve.",
    },
    {
      name: "SEO Services",
      slug: "seo-services",
      shortBenefit: "Technical and local SEO for city and suburb searches.",
    },
    {
      name: "AI Automation & Agents",
      slug: "ai-automation-services",
      shortBenefit: "Answer and qualify enquiries outside your working hours.",
    },
  ],
};
