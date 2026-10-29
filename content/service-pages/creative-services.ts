import type { ServicePageContent } from "./types";

/** /creative-services/ — brief: docs/03 "Creative services". */
export const CREATIVE_SERVICES: ServicePageContent = {
  slug: "creative-services",
  heroKicker: "Logos, brand kits, ad creatives and packaging",
  intro: [
    "We provide professional graphic design and creative studio services — from memorable logo designs and brand identity kits to high-converting ad creative batches, packaging and short-form video edits.",
    "Delivered by our dedicated in-house creative team in Pakistan for growing brands across Canada, the US, the UAE, New Zealand and Pakistan.",
  ],
  proofChip: "In-house graphic design studio with unlimited revisions on brand kits",

  outcomes: {
    h2: "Visual design that commands attention and elevates your brand",
    lead: "Amateur graphics destroy buyer trust before they ever read your copy. Our designers create consistent visual identities that make your business look established and authoritative.",
    items: [
      {
        title: "Distinct, memorable brand identities",
        detail:
          "Custom logos, curated typography pairings, color palettes and complete brand guideline books ready for print and web.",
      },
      {
        title: "High-converting paid ad creative batches",
        detail:
          "Static graphics, carousel slides and motion hooks designed specifically to stop the scroll on Meta, TikTok and LinkedIn feeds.",
      },
      {
        title: "Production-ready vector and print files",
        detail:
          "Deliverables supplied in all standard formats (AI, EPS, SVG, PNG, PDF) with full commercial usage rights and zero vendor lock-in.",
      },
    ],
  },

  unique: {
    h2: "Creative deliverables and typical turnarounds",
    lead: "Clear delivery timeframes so your marketing campaigns stay on schedule.",
    table: {
      columns: ["Creative Deliverable", "Typical Turnaround", "What You Receive"],
      rows: [
        [
          "Primary Logo & Brand Identity",
          "3–5 business days",
          "3 Unique logo concepts, color palette, typography kit and vector asset files",
        ],
        [
          "Paid Social Ad Creative Batch",
          "2–3 business days",
          "5–10 Cohesive static graphics and carousel slides sized for 1:1, 4:5 and 9:16",
        ],
        [
          "Print Packaging & Label Design",
          "4–6 business days",
          "Dieline-ready vector packaging files, 3D box renders and print specifications",
        ],
        [
          "Marketing Collateral & Brochures",
          "3–4 business days",
          "Multi-page company profiles, pitch deck styling and PDF lead magnets",
        ],
      ],
    },
    note: "Revision policy: Brand identity projects include unlimited concept revisions until you are completely satisfied with the final direction.",
  },

  included: {
    h2: "What is included in creative studio services",
    lead: "Turnkey visual design support across digital and physical touchpoints.",
    groups: [
      {
        groupTitle: "Brand identity design",
        items: [
          "Primary logo, secondary logo mark, favicon and monochrome variations",
          "Official brand color system with hex codes, RGB and CMYK print values",
          "Complete brand style guide PDF detailing logo clear space and typography rules",
        ],
      },
      {
        groupTitle: "Digital and advertising assets",
        items: [
          "High-CTR ad creatives for Meta, Google Display and LinkedIn campaigns",
          "Branded social media templates and carousel layout frameworks",
          "Website banners, hero visual elements and custom vector icon sets",
        ],
      },
      {
        groupTitle: "Print and packaging production",
        items: [
          "Product box packaging, bottle labels, hang tags and thank-you inserts",
          "Vector dieline templates prepared for your local or overseas print manufacturer",
          "Realistic 3D digital mockups for e-commerce store listings and marketing materials",
        ],
      },
    ],
  },

  process: {
    h2: "How our creative process works",
    lead: "Four collaborative steps from design brief to final source files.",
    steps: [
      {
        title: "Creative brief and moodboard",
        description:
          "We analyze your target market, competitors and visual preferences to establish a clear moodboard direction.",
      },
      {
        title: "Concept presentation",
        description:
          "Our designers present distinct visual concepts in realistic mockups so you can see how they look in real-world contexts.",
      },
      {
        title: "Refinement and feedback",
        description:
          "We refine your chosen concept based on your feedback, fine-tuning colors, typography and layout balance.",
      },
      {
        title: "Final asset packaging",
        description:
          "We organize and export all master vector files, web-optimized images, print PDFs and style documentation.",
      },
    ],
  },

  proof: {
    h2: "Design work delivered by our in-house creative team",
    lead: "Our designers craft visual identities and marketing assets for retail brands, tech companies, property developments and healthcare providers.",
    statKeys: ["teamSize", "totalClientsServed", "customCodedBuilds"],
    showOwnBrands: true,
  },

  pricing: {
    baseIncludes: [
      "Custom concept ideation based on your commercial objectives",
      "Comprehensive revision rounds until your team signs off",
      "Full suite of production files: AI, EPS, SVG, high-res PNG and PDF",
      "Complete commercial usage rights and ownership transfer",
    ],
  },

  tools: {
    h2: "Our graphic design and creative software suite",
    lead: "Industry-standard vector illustration, layout and rendering tools.",
    items: [
      { name: "Adobe Illustrator", role: "Precision vector logo and dieline packaging creation" },
      { name: "Adobe Photoshop", role: "High-end photo manipulation, retouching and raster graphics" },
      { name: "Figma", role: "Collaborative brand component systems and web mockups" },
      { name: "Adobe InDesign", role: "Multi-page company profiles and print editorial layouts" },
      { name: "Blender", role: "Realistic 3D product packaging renders and lighting setups" },
      { name: "Midjourney v6", role: "Rapid visual concept moodboarding and creative inspiration" },
      { name: "Canva Pro", role: "Editable client template setup for day-to-day team usage" },
      { name: "Adobe Acrobat Pro", role: "Print-ready PDF color profile separation and pre-flight check" },
    ],
  },

  faqHeading: "Direct answers about graphic design and creative services",
  faqs: [
    {
      question: "How many revisions are included with design projects?",
      answer:
        "For brand identity projects, we offer unlimited revision rounds on your selected concept until it is approved. For individual ad creative batches and marketing collateral, we include two full rounds of revisions.",
    },
    {
      question: "What file formats will I receive upon project completion?",
      answer:
        "You receive all industry-standard file types: editable vector source files (AI, EPS, SVG), high-resolution print PDFs (CMYK with bleed marks if needed), and transparent web formats (PNG, JPG, WebP).",
    },
    {
      question: "How fast can you deliver a batch of paid ad creatives?",
      answer:
        "Standard batches of 5 to 10 ad graphics or carousel slides are typically delivered within 2 to 3 business days once the copy and visual brief are confirmed.",
    },
    {
      question: "Do you design physical packaging and product labels?",
      answer:
        "Yes. We design dieline-accurate packaging boxes, bottle labels, pouches, and shipping cartons according to your manufacturer's exact specifications.",
    },
    {
      question: "Can your team work within our existing brand guidelines?",
      answer:
        "Yes, absolutely. Send us your brand guide, logo files, and fonts, and our designers will strictly adhere to your established visual rules.",
    },
  ],

  related: [
    "brand-awareness-strategy",
    "ai-social-media-content-creation",
    "web-design-development-service",
  ],
  openItems: [],
};
