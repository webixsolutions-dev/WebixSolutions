import { SITE_FACTS } from "./site-facts";

export const INTERIOR = {
  services: {
    lead: "Build a website, improve how customers find you, or automate work your team repeats every day. Start with the service that fits your goal.",
  },
  industries: {
    lead: "A contractor needs a steady flow of quote requests. A store needs an easier path to checkout. Explore the services that fit how your customers buy.",
  },
  work: {
    lead: "See how we’ve built booking websites, online stores, recruitment platforms and internal tools. Each case study explains the problem and what we built.",
    description: "Explore Webix Solutions projects in web design, e-commerce, recruitment platforms, CRM and AI automation.",
    stats: [SITE_FACTS.stats.websitesDelivered, SITE_FACTS.stats.customCodedBuilds, SITE_FACTS.stats.socialAccountsManaged],
  },
  pricing: {
    lead: "See the options for monthly website care, new builds and one-time work. We agree on the scope and price with you before work starts.",
  },
  offers: {
    lead: "Choose a package to launch your website, get ongoing marketing support or automate a specific workflow. Each package lays out what’s included.",
  },
  contact: {
    lead: "Tell us what you’re building, what needs to change and when you’d like to start. You can send a brief, email us or book a free strategy call.",
  },
  booking: {
    lead: "Choose a call type, date and time. We’ll review your project goals, what you already have and the next step that makes sense for you.",
    agenda: ["What you want the project to achieve", "What’s already in place and where you need help", "The scope, timing and next step"],
  },
  closing: {
    title: "Let’s talk about your project.",
    detail: "Choose a date and time for a free call with our team.",
  },
} as const;
