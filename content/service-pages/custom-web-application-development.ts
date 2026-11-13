import type { ServicePageContent } from "./types";

export const CUSTOM_WEB_APPLICATION_DEVELOPMENT: ServicePageContent = {
  slug: "custom-web-application-development",
  heroKicker: "Custom software, built for how you work",
  intro: [
    "We build custom web applications: client portals, point-of-sale (POS) software, internal dashboards, booking systems and SaaS products.",
    "It suits a business that has outgrown spreadsheets and off-the-shelf tools. Every project starts with a written scope, and you own the code and the accounts at the end.",
  ],
  proofChip: "Built with Next.js, React, Node.js and Python",

  outcomes: {
    h2: "What custom software does for your business",
    lead: "Off-the-shelf tools make you work their way. A custom build follows the way your team already sells, serves and reports.",
    items: [
      {
        title: "One place for the daily work",
        detail: "Orders, bookings, customers and stock sit in one system instead of being copied between spreadsheets and chat threads.",
      },
      {
        title: "The right view for each person",
        detail: "Owners, staff and customers each sign in to their own screens, with access limited to what their role needs.",
      },
      {
        title: "Software you own",
        detail: "The code repository, database and hosting accounts are in your name, so you are not tied to a monthly licence or to us.",
      },
    ],
  },

  unique: {
    h2: "What we build",
    lead: "Most projects are one of these five, or a mix of two.",
    cards: [
      {
        title: "Client and customer portals",
        detail: "Customers sign in to see their orders, bookings, documents, invoices or project status without emailing your team.",
      },
      {
        title: "POS software",
        detail: "Sales screens for the counter, with products, stock levels, receipts, staff accounts and daily sales reports.",
      },
      {
        title: "Internal dashboards and admin panels",
        detail: "One screen for the numbers and tasks your team checks every day, pulled from the tools you already use.",
      },
      {
        title: "Booking and scheduling systems",
        detail: "Availability, pricing rules, confirmations and reminders for service businesses that take appointments.",
      },
      {
        title: "SaaS products and MVPs",
        detail: "A first working version of your product with sign-up, roles, billing hooks and an admin area, ready for real users.",
      },
    ],
  },

  included: {
    h2: "What is included in a custom software project",
    lead: "The scope lists each screen, user role and integration before work starts.",
    groups: [
      {
        groupTitle: "Planning and design",
        items: [
          "Workflow mapping with the people who will use the system",
          "Written scope with screens, roles and integrations",
          "Screen designs for desktop and mobile",
        ],
      },
      {
        groupTitle: "Build",
        items: [
          "Front end in Next.js and React",
          "Back end and API in Node.js or Python",
          "Database design in PostgreSQL or MongoDB",
          "Sign-in, user roles and permissions",
        ],
      },
      {
        groupTitle: "Launch and handover",
        items: [
          "Staging link for review at each milestone",
          "Testing with real accounts for every role",
          "Data import from your existing spreadsheets or system",
          "Deployment, documentation and access handover",
        ],
      },
    ],
  },

  process: {
    h2: "How a custom software project runs",
    lead: "Four stages, with something you can click through at the end of each build stage.",
    steps: [
      {
        title: "Scope call",
        description: "We go through how the work is done today, who does it and where it breaks.",
      },
      {
        title: "Written scope and quote",
        description: "You receive the list of screens, roles and integrations with a fixed quote and milestones.",
      },
      {
        title: "Build in milestones",
        description: "Each milestone ends with a working staging link for your team to test.",
      },
      {
        title: "Launch and handover",
        description: "We import your data, deploy, train your team and hand over the repository and accounts.",
      },
    ],
  },

  proof: {
    h2: "Software our team has built",
    lead: "Recent builds include a recruitment platform, an agency operations CRM and our own Python-based lead workspace.",
    statKeys: ["customCodedBuilds", "githubContributionsLastYear", "teamSize"],
    systems: [
      {
        title: "Jooblie recruitment platform",
        summary: "Job search, applications, recruiter tools and an admin dashboard in one platform.",
        nodes: ["Job search", "Applications", "Recruiter and admin tools"],
      },
      {
        title: "Agency operations CRM",
        summary: "One place to track client work, manage access and hand projects over between shifts.",
        nodes: ["Clients and projects", "Team access", "Handover"],
      },
      {
        title: "Webix Lead Desk",
        summary: "Our own lead research and outreach workspace, built in Python with FastAPI and PostgreSQL.",
        nodes: ["Research", "Draft", "Owner approval"],
      },
    ],
  },

  pricing: {
    priceRef: { table: "build", id: "build-webapp-crm" },
    baseIncludes: [
      "Written scope with screens, roles and integrations",
      "Staging link for review at each milestone",
      "Testing with real accounts for every role",
      "Repository, database and hosting accounts in your name",
    ],
  },

  tools: {
    h2: "The stack we build on",
    lead: "We choose the stack to fit the project and your team, and we say why in the scope.",
    items: [
      { name: "Next.js", role: "Web front end and server rendering" },
      { name: "React", role: "Interactive screens and dashboards" },
      { name: "Node.js", role: "APIs and background jobs" },
      { name: "Python and FastAPI", role: "Data-heavy back ends and automation" },
      { name: "PostgreSQL", role: "Relational data, reporting and transactions" },
      { name: "MongoDB", role: "Document data in MERN-stack builds" },
    ],
  },

  faqHeading: "Custom software questions",
  faqs: [
    {
      question: "How much does a custom web application cost?",
      answer:
        "It depends on the number of screens, user roles and integrations. After a scope call we send a written scope with a fixed quote and milestones, so you know the cost before work starts.",
    },
    {
      question: "How long does a build take?",
      answer:
        "A focused portal or dashboard usually takes four to eight weeks. Larger systems are split into milestones, and you can use each finished part while the next one is built.",
    },
    {
      question: "Can you build POS software for my shop?",
      answer:
        "Yes. We build sales screens with products, stock, receipts, staff accounts and daily reports. Tell us which hardware you use, such as receipt printers or barcode scanners, so we can confirm support in the scope.",
    },
    {
      question: "Who owns the code?",
      answer:
        "You do. The repository, database and hosting accounts are set up in your name and handed over with documentation at launch.",
    },
    {
      question: "Can it connect to the tools we already use?",
      answer:
        "Usually, yes. We connect to payment providers, accounting tools, email, WhatsApp and other systems that offer an API. Each integration is listed in the scope.",
    },
    {
      question: "Do you maintain the software after launch?",
      answer:
        "Yes, if you want us to. A monthly care plan covers updates, monitoring and small changes. You can also run it with your own team, because you hold the code.",
    },
  ],

  related: ["custom-crm-development", "web-design-development-service", "mobile-app-development-services"],
  openItems: [
    "Named POS client project and permission to publish it as a case study",
    "Confirmed starting price for custom web application builds",
  ],
};
