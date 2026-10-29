import type { ServicePageContent } from "./types";

/** /mobile-app-development-services/ — brief: docs/03 "Mobile app development". */
export const MOBILE_APP_DEVELOPMENT_SERVICES: ServicePageContent = {
  slug: "mobile-app-development-services",
  heroKicker: "Cross-platform iOS and Android apps in Flutter",
  intro: [
    "We design, build and deploy native-performing mobile applications for iOS and Android from a single Flutter codebase — complete with custom backends, web admin portals and full App Store and Google Play submission.",
    "Engineered by our in-house mobile engineering team in Pakistan for startups and businesses across Canada, the US, the UAE, New Zealand and Pakistan.",
  ],
  proofChip: "Cross-platform iOS & Android mobile apps built with Flutter",

  outcomes: {
    h2: "Ship your mobile product faster with a unified codebase",
    lead: "Building separate Swift and Kotlin codebases doubles development costs and slows feature updates. Flutter delivers 60fps native performance across both platforms simultaneously.",
    items: [
      {
        title: "Half the development and maintenance cost",
        detail:
          "One shared codebase powers both iOS and Android apps, cutting initial engineering time and ongoing maintenance overhead in half.",
      },
      {
        title: "Complete backend and admin control panel",
        detail:
          "Every app includes scalable REST/GraphQL APIs, user authentication, database architecture and a web-based dashboard for your team.",
      },
      {
        title: "Guaranteed app store approval support",
        detail:
          "We handle the entire App Store and Google Play submission process, ensuring full compliance with Apple and Google review guidelines.",
      },
    ],
  },

  unique: {
    h2: "Flutter vs separate native development",
    lead: "Why modern startups and enterprises choose Flutter for their mobile products.",
    table: {
      columns: ["Comparison Factor", "Flutter (Single Codebase)", "Separate Native (Swift & Kotlin)"],
      rows: [
        [
          "Development Speed",
          "Fastest — single code pipeline and hot-reload iteration",
          "Slower — two independent teams coding simultaneously",
        ],
        [
          "Feature Parity",
          "100% Identical features and logic launched on the same day",
          "Frequently out of sync between iOS and Android releases",
        ],
        [
          "Long-term Maintenance",
          "One team, one bug fix, one codebase to maintain",
          "Double the maintenance contracts and engineering salaries",
        ],
        [
          "UI & Animation Speed",
          "Fluid 60–120fps hardware-accelerated rendering engine",
          "Native rendering engine with direct platform controls",
        ],
        [
          "Best For",
          "Startups, SaaS MVPs, booking apps, e-commerce and internal tools",
          "Complex 3D graphics games or low-level kernel Bluetooth drivers",
        ],
      ],
    },
    note: "Zero vendor lock-in: You receive full Git repository access with clear architectural documentation, unit tests, and complete IP ownership upon completion.",
  },

  included: {
    h2: "What is included in mobile app development",
    lead: "Full-cycle product engineering from UI/UX wireframes to live store deployment.",
    groups: [
      {
        groupTitle: "Mobile UI/UX and Flutter development",
        items: [
          "Interactive Figma prototypes and mobile design system for iOS and Android",
          "Flutter frontend development with smooth gestures, animations and offline caching",
          "Push notifications, deep linking and in-app purchase (IAP) integration",
        ],
      },
      {
        groupTitle: "Cloud backend and web admin portal",
        items: [
          "Scalable backend API built with Node.js, Python or Firebase Cloud Functions",
          "Secure user authentication (Apple Sign-In, Google, Phone OTP, Email)",
          "Web-based admin portal for managing users, listings, payments and analytics",
        ],
      },
      {
        groupTitle: "Store launch and warranty",
        items: [
          "Preparation of app screenshots, privacy policies, metadata and app descriptions",
          "App Store and Google Play developer console submission and review management",
          "60 days of complimentary post-launch bug fixing and crash monitoring",
        ],
      },
    ],
  },

  process: {
    h2: "How we build your mobile application",
    lead: "A structured four-milestone agile delivery process.",
    steps: [
      {
        title: "Product architecture and wireframes",
        description:
          "We map user journeys, screen flows, database schemas and technical requirements on initial scoping calls.",
      },
      {
        title: "Clickable UI prototype",
        description:
          "Our designers create a high-fidelity Figma prototype so you can test the user experience on your own phone.",
      },
      {
        title: "Sprint build and staging builds",
        description:
          "We develop features in weekly sprints, distributing test builds via TestFlight and Google Play Internal Testing.",
      },
      {
        title: "Store submission and launch",
        description:
          "We submit the application to both stores, guide it through the approval review, and verify production stability.",
      },
    ],
  },

  proof: {
    h2: "Mobile engineering delivered by our in-house developers",
    lead: "Our engineers have built cross-platform mobile apps for logistics, healthcare, on-demand services and internal business tools.",
    statKeys: ["customCodedBuilds", "teamSize", "totalClientsServed"],
    showOwnBrands: true,
  },

  pricing: {
    baseIncludes: [
      "Custom Flutter mobile application for both iOS and Android",
      "Cloud backend architecture, database setup and REST/GraphQL APIs",
      "Web admin management dashboard for operations and content edits",
      "Complete App Store & Google Play submission and 60-day post-launch warranty",
    ],
  },

  tools: {
    h2: "Our mobile and backend development toolchain",
    lead: "Modern, scalable engineering stacks trusted by global technology companies.",
    items: [
      { name: "Flutter & Dart", role: "Cross-platform mobile UI framework and logic" },
      { name: "Firebase", role: "Realtime database, push notifications and crashlytics" },
      { name: "Node.js / Express", role: "Scalable backend microservices and business logic" },
      { name: "PostgreSQL / MongoDB", role: "Secure, high-availability relational and document data storage" },
      { name: "Apple App Store Connect", role: "iOS provisioning profiles, TestFlight and App Review" },
      { name: "Google Play Console", role: "Android app signing, internal tracks and release deployment" },
      { name: "Stripe / RevenueCat", role: "In-app purchases, digital subscriptions and payment processing" },
      { name: "GitHub Actions", role: "Automated CI/CD pipelines for automated mobile test builds" },
    ],
  },

  faqHeading: "Direct answers about mobile app development",
  faqs: [
    {
      question: "How much does custom mobile app development cost?",
      answer:
        "Every app is quoted with a fixed price broken into clear milestones after a 30-minute scoping call. Project investment depends on screen count, third-party APIs (payment gateways, maps, chat), and backend requirements. There are never hourly overages.",
    },
    {
      question: "Why do you recommend Flutter over native Swift and Kotlin?",
      answer:
        "Flutter compiles directly to native ARM machine code, offering identical 60fps performance to native code while sharing 90%+ of code across iOS and Android. This saves you up to 50% in development and maintenance budgets without sacrificing quality.",
    },
    {
      question: "Do you handle the App Store and Google Play publishing process?",
      answer:
        "Yes, completely. We configure your Apple Developer and Google Play Console accounts, set up required privacy manifests, create screenshot sets, and handle any app review questions until both apps are approved and live.",
    },
    {
      question: "Do you also build the web admin panel to manage the app?",
      answer:
        "Yes. Every custom mobile app we build includes a secure, web-based admin control panel so your team can view registered users, manage content, send push notifications, and monitor revenue without editing code.",
    },
    {
      question: "Who owns the code, design files, and developer accounts?",
      answer:
        "You do 100%. The apps are submitted directly under your corporate Apple and Google accounts. Upon project handover, all Git repositories, Figma files, and database access are transferred to your ownership.",
    },
  ],

  related: [
    "web-design-development-service",
    "ai-automation-services",
    "conversion-rate-optimization-services",
  ],
  openItems: [],
};
