import * as React from "react";
import Link from "next/link";
import { Check, ArrowRight, ShieldCheck, Sparkles, Building2, TrendingUp } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { CutFrame } from "@/components/ui/cut-frame";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { RoiCalculator } from "@/components/services/roi-calculator";
import { SITE_FACTS } from "@/content/site-facts";
import { getServiceBySlug, type ServiceEntry } from "@/content/services";
import {
  resolveConfirmedPrice,
  type ServicePageContent,
  type StatKey,
} from "@/content/service-pages";
import type { NextSlotResult } from "@/lib/booking/next-slot";

export interface ServicePageTemplateProps {
  service: ServiceEntry;
  nextSlot: NextSlotResult;
  pageContent?: ServicePageContent;
}

export function ServicePageTemplate({
  service,
  nextSlot,
  pageContent,
}: ServicePageTemplateProps) {
  // Breadcrumbs
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: service.name, href: `/${service.slug}/` },
  ];

  // Lead text
  const introLead = pageContent
    ? `${pageContent.intro[0]} ${pageContent.intro[1]}`
    : `${service.shortOutcome} Designed, coded and supported by our 20+ person in-house team on your time zone.`;

  // Hero kicker & proof chip
  const heroKicker = pageContent?.heroKicker ?? "In-house service delivery";
  const proofChip =
    pageContent?.proofChip ??
    (service.shortOutcome.length > 50
      ? service.shortOutcome.slice(0, 50) + "…"
      : service.shortOutcome);

  // Pricing resolution (Rule 04)
  const resolvedPrice = pageContent
    ? resolveConfirmedPrice(pageContent.pricing.priceRef)
    : service.confirmedPrice && service.startingPrice
    ? { display: service.startingPrice, detail: service.priceUnit }
    : null;

  // Outcomes
  const outcomesHeading =
    pageContent?.outcomes.h2 ?? `Measurable results delivered with ${service.name}`;
  const outcomesLead =
    pageContent?.outcomes.lead ??
    "We focus on business metrics that move the needle: revenue, search visibility, conversion lift, and operational speed.";
  const outcomesItems = pageContent?.outcomes.items ?? [
    {
      title: "Measurable commercial performance",
      detail:
        "Every project is architected for speed, conversion rate optimization and search visibility across North America, the UAE and Pakistan.",
    },
    {
      title: "Direct in-house engineering team",
      detail:
        "You work directly with our project leads in Dunyapur and Lahore during your business hours, without layers of account executives.",
    },
    {
      title: "100% full account and code ownership",
      detail:
        "You own your domains, repositories, analytics and ad accounts from day one with zero vendor lock-in or proprietary traps.",
    },
  ];

  // Unique section check
  const hasUnique = Boolean(pageContent?.unique);
  const uniqueData = pageContent?.unique;

  // Deliverables / What's Included
  const includedHeading =
    pageContent?.included.h2 ?? `Everything included with ${service.name}`;
  const includedLead =
    pageContent?.included.lead ??
    "Clear, written deliverables with exact milestones. No vague retainers or surprise bills.";
  const includedGroups = pageContent?.included.groups ?? [
    {
      groupTitle: "Strategy, planning & architecture",
      items: [
        "Discovery consultation and technical requirements specification.",
        "Visual mockups, wireframes and scope validation.",
        "Performance benchmarking and conversion roadmap.",
      ],
    },
    {
      groupTitle: "Production build & launch quality assurance",
      items: [
        "Clean, semantic development tested across modern browsers and screen sizes.",
        "Technical SEO audit, trailing-slash enforcement and schema graph integration.",
        "Full staging preview with 30 days of post-launch technical warranty.",
      ],
    },
  ];

  // How it works / Process
  const processHeading = pageContent?.process.h2 ?? "A structured 4-step delivery process";
  const processLead =
    pageContent?.process.lead ??
    "Predictable, transparent delivery from discovery call to live launch.";
  const processSteps = pageContent?.process.steps.map((st, idx) => ({
    stepNumber: `0${idx + 1}`,
    title: st.title,
    description: st.description,
  })) ?? [
    {
      stepNumber: "01",
      title: "Strategy call",
      description:
        "We meet for 30 minutes to review your exact business requirements, current tech stack and deliverables.",
    },
    {
      stepNumber: "02",
      title: "Plan and proposal",
      description:
        "You receive a fixed-price written specification detailing every milestone before work starts.",
    },
    {
      stepNumber: "03",
      title: "Build and review",
      description:
        "Our in-house team builds on a private staging link for your feedback, verification and testing.",
    },
    {
      stepNumber: "04",
      title: "Launch and handover",
      description:
        "We verify forms, tracking scripts and search indexing, then transfer full ownership to your team.",
    },
  ];

  // Proof Section
  const proofHeading =
    pageContent?.proof.h2 ?? "Delivered with verified code and measurable outcomes";
  const proofLead =
    pageContent?.proof.lead ??
    "Our in-house production team in Pakistan has delivered 91 custom-coded builds, 50+ CMS sites, and manages 50+ social accounts.";
  const proofStatKeys: StatKey[] = pageContent?.proof.statKeys ?? [
    "customCodedBuilds",
    "cmsWebsitesBuilt",
    "totalClientsServed",
  ];

  // Pricing Section
  const baseInclusions = pageContent?.pricing.baseIncludes ?? [
    "Full scope discovery and written technical specification",
    "Production-ready staging preview within the first milestone",
    "Direct Slack or WhatsApp channel with your project leads",
    "30 days of post-launch technical warranty and monitoring",
  ];

  // Tools
  const toolsHeading =
    pageContent?.tools.h2 ?? "Battle-tested tools and open engineering stacks";
  const toolsLead =
    pageContent?.tools.lead ??
    "We engineer with proven industry frameworks and standards, ensuring your project is maintainable, scalable and fast.";
  const toolsList = pageContent?.tools.items ?? [
    { name: "Next.js", role: "High-Performance Web Architecture" },
    { name: "React", role: "Interactive Component Ecosystems" },
    { name: "Node.js", role: "Scalable API & Backend Microservices" },
    { name: "WordPress", role: "Flexible CMS & Editorial Publishing" },
    { name: "Shopify", role: "Global E-commerce Checkout & APIs" },
    { name: "OpenAI", role: "Language Models & Reasoning Agents" },
    { name: "Google Analytics 4", role: "Privacy-Aware Conversion Measurement" },
    { name: "Microsoft Clarity", role: "Behavioral Heatmaps & Session Replays" },
  ];

  // FAQs
  const faqHeading = pageContent?.faqHeading ?? `Direct answers about ${service.shortName}`;
  const faqs = pageContent?.faqs ?? [
    {
      question: `How much does ${service.shortName} cost?`,
      answer: `Our base tier is scoped transparently. Every project is quoted with a fixed-price written scope after a free 30-minute discovery call so there are never hidden hourly overages.`,
    },
    {
      question: `How long does ${service.shortName} typically take?`,
      answer: `Standard delivery takes 10 to 14 business days once content, logins, and project goals are confirmed. Larger custom builds or multi-market campaigns take between 3 and 6 weeks.`,
    },
    {
      question: "Who owns the deliverables and accounts after completion?",
      answer: `You do. Upon payment, you own 100% of your source code, design files, domains, tracking pixels, and advertising accounts. We never hold your property hostage.`,
    },
    {
      question: "What time zone do you work in?",
      answer: `Our team works across two coordinated shifts: a day shift overlapping UAE business hours and a night shift (9:00 PM to 5:00 AM PKT) overlapping North American Eastern and Pacific working hours.`,
    },
  ];

  // Related Services
  const relatedSlugs = pageContent?.related ?? service.relatedSlugs?.slice(0, 3) ?? [];
  const relatedServices = relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceEntry => Boolean(s && s.published));

  return (
    <div className="w-full">
      {/* =========================================================================
          SECTION 1: HERO (Surface: Graphite)
         ========================================================================= */}
      <Section surface="graphite" spacing="hero" grid className="relative">
        <Container>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 animate-hero-rise">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-[#A7ACB8]">
              {breadcrumbs.map((crumb, idx) => {
                const isLast = idx === breadcrumbs.length - 1;
                return (
                  <li key={crumb.href} className="flex items-center gap-2">
                    {idx > 0 && <span aria-hidden="true" className="text-white/20">/</span>}
                    {isLast ? (
                      <span aria-current="page" className="text-white font-medium">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        href={crumb.href}
                        className="hover:text-white transition-colors underline-offset-4 hover:underline"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column (7 cols): Answer-First Copy */}
            <div className="lg:col-span-7 space-y-6 animate-hero-rise">
              <Kicker>{heroKicker}</Kicker>

              <h1 className="type-display text-white max-w-[18ch]">
                {service.h1}
              </h1>

              <p className="type-lead text-[#A7ACB8] max-w-[58ch]">
                {introLead}
              </p>

              <div
                id="hero-cta-group"
                data-hero-ctas="true"
                className="flex flex-col min-[480px]:flex-row min-[480px]:flex-wrap items-stretch min-[480px]:items-center gap-3.5 pt-2"
              >
                <Button
                  href="/book-a-call/"
                  variant="primary"
                  size="lg"
                  className="w-full min-[480px]:w-auto"
                >
                  Book a strategy call
                </Button>
                <Button
                  href="/offers/"
                  variant="secondary"
                  size="lg"
                  className="w-full min-[480px]:w-auto"
                >
                  See pricing packages
                </Button>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Chip asSpan active>
                  {proofChip}
                </Chip>
                <span className="text-xs text-[#A7ACB8]">
                  Serving CA, US, UAE, NZ & PK
                </span>
              </div>
            </div>

            {/* Right Column (5 cols): Key Highlights Card */}
            <div className="lg:col-span-5">
              <CutFrame
                cutSize="lg"
                glass="dark"
                innerClassName="p-6 md:p-8 space-y-5 border border-white/12"
              >
                <div className="flex items-center justify-between border-b border-white/12 pb-3.5 text-xs text-[#A7ACB8]">
                  <span className="inline-flex items-center gap-2 font-medium text-white">
                    <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
                    <span>Service Overview</span>
                  </span>
                  <span className="font-metric text-white">
                    {service.category} Column
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-semibold text-[#ED1C24] uppercase tracking-wider">
                    Core Outcome
                  </div>
                  <div className="font-display text-base md:text-lg font-semibold text-white leading-snug">
                    {service.shortOutcome}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-b border-white/10 py-4">
                  <div>
                    <div className="text-xs text-[#A7ACB8]">Starting Price</div>
                    <div className="font-metric text-xl md:text-2xl text-white mt-1">
                      {resolvedPrice ? resolvedPrice.display : "Custom quote"}
                    </div>
                    <div className="text-[11px] text-[#A7ACB8]">
                      {resolvedPrice?.detail ?? "Written scope"}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-[#A7ACB8]">Delivery Model</div>
                    <div className="font-metric text-xl md:text-2xl text-white mt-1">
                      In-house
                    </div>
                    <div className="text-[11px] text-[#A7ACB8]">
                      Dedicated team lead
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 text-xs text-[#E2C6C8]">
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#ED1C24] shrink-0" />
                    <span>20+ person in-house team in Pakistan</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#ED1C24] shrink-0" />
                    <span>Night shift overlaps North American business hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-[#ED1C24] shrink-0" />
                    <span>Direct WhatsApp or Slack channel with leads</span>
                  </li>
                </ul>

                <Button
                  href="/book-a-call/"
                  variant="primary"
                  size="sm"
                  className="w-full"
                >
                  Schedule 30-min call
                </Button>
              </CutFrame>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          SECTION 2: OUTCOMES (Surface: Porcelain with Notch)
         ========================================================================= */}
      <Section
        surface="porcelain"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-2xl space-y-3">
            <Kicker>Measurable outcomes</Kicker>
            <h2 className="type-h2 text-[#111215]">{outcomesHeading}</h2>
            <p className="type-lead text-[#454954]">{outcomesLead}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {outcomesItems.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white p-6 md:p-8 rounded-lg border border-[#E4E6EB] border-l-4 border-l-[#ED1C24] space-y-3 shadow-xs"
              >
                <div className="font-metric text-xs text-[#ED1C24] font-semibold tracking-wider uppercase">
                  Outcome 0{idx + 1}
                </div>
                <h3 className="font-display text-lg font-semibold text-[#111215]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#454954] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          SECTION 2.5: UNIQUE SECTION (If present in brief: Steel with Notch)
         ========================================================================= */}
      {hasUnique && uniqueData && (
        <Section
          surface="steel"
          previousSurface="porcelain"
          notch
          spacing="default"
        >
          <Container>
            <div className="max-w-2xl space-y-3">
              <Kicker>How we compare</Kicker>
              <h2 className="type-h2 text-[#111215]">{uniqueData.h2}</h2>
              <p className="type-lead text-[#454954]">{uniqueData.lead}</p>
            </div>

            {/* Decision Table */}
            {uniqueData.table && (
              <div className="mt-8 overflow-x-auto rounded-lg border border-[#D5D8E0] bg-white shadow-xs">
                <table className="w-full text-left text-sm border-collapse min-w-[540px]">
                  <thead>
                    <tr className="border-b border-[#D5D8E0] bg-[#F5F6F8]">
                      {uniqueData.table.columns.map((col, idx) => (
                        <th
                          key={idx}
                          scope="col"
                          className={`p-4 font-display font-semibold text-[#111215] ${
                            idx === 0 ? "w-1/4" : "w-3/8"
                          }`}
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4E6EB]">
                    {uniqueData.table.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[#FAFAFA] transition-colors">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className={`p-4 text-xs md:text-sm ${
                              cIdx === 0
                                ? "font-semibold text-[#111215]"
                                : "text-[#454954]"
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Cards Grid (e.g. Monthly Rhythm) */}
            {uniqueData.cards && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {uniqueData.cards.map((c, idx) => (
                  <div
                    key={c.title}
                    className="p-6 rounded-lg bg-white border border-[#D5D8E0] space-y-2 shadow-xs"
                  >
                    <div className="font-metric text-xs font-semibold text-[#ED1C24] uppercase tracking-wider">
                      Step 0{idx + 1}
                    </div>
                    <h3 className="font-display text-base font-semibold text-[#111215]">
                      {c.title}
                    </h3>
                    <p className="text-xs text-[#454954] leading-relaxed">
                      {c.detail}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Interactive ROI Calculator */}
            {uniqueData.roiCalculator && (
              <div className="mt-8">
                <RoiCalculator />
              </div>
            )}

            {/* Note callout */}
            {uniqueData.note && (
              <div className="mt-6 p-4 rounded-lg bg-white/70 border border-[#D5D8E0] text-xs text-[#454954] flex items-start gap-3">
                <Sparkles className="h-4 w-4 text-[#ED1C24] shrink-0 mt-0.5" />
                <span>{uniqueData.note}</span>
              </div>
            )}
          </Container>
        </Section>
      )}

      {/* =========================================================================
          SECTION 3: WHAT'S INCLUDED / DELIVERABLES (Surface: Graphite with Notch)
         ========================================================================= */}
      <Section
        surface="graphite"
        previousSurface={hasUnique ? "steel" : "porcelain"}
        notch
        grid
        spacing="default"
      >
        <Container>
          <div className="max-w-2xl space-y-3">
            <Kicker>Deliverables checklist</Kicker>
            <h2 className="type-h2 text-white">{includedHeading}</h2>
            <p className="type-body text-[#A7ACB8]">{includedLead}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {includedGroups.map((group) => (
              <CutFrame
                key={group.groupTitle}
                cutSize="lg"
                innerClassName="p-6 md:p-8 h-full flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="border-b border-white/10 pb-3">
                    <h3 className="font-display text-base font-semibold text-white">
                      {group.groupTitle}
                    </h3>
                  </div>
                  <ul className="space-y-3 text-sm text-[#F5F6F8]">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          strokeWidth={2}
                          className="h-4 w-4 shrink-0 text-[#ED1C24] mt-0.5"
                        />
                        <span className="leading-snug text-[#A7ACB8] text-xs md:text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CutFrame>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          SECTION 4: HOW IT WORKS / PROCESS (Surface: Steel with Notch)
         ========================================================================= */}
      <Section
        surface="steel"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-2xl space-y-3">
            <Kicker>How we work</Kicker>
            <h2 className="type-h2 text-[#111215]">{processHeading}</h2>
            <p className="type-body text-[#454954]">{processLead}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((st) => (
              <div
                key={st.stepNumber}
                className="bg-white p-6 rounded-lg border border-[#D5D8E0] space-y-3 shadow-xs"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-metric text-2xl font-bold text-[#ED1C24]">
                    {st.stepNumber}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-[#111215]">
                  {st.title}
                </h3>
                <p className="text-xs text-[#454954] leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          SECTION 5: ENGINEERING PROOF & STATS (Surface: Porcelain with Notch)
         ========================================================================= */}
      <Section
        surface="porcelain"
        previousSurface="steel"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-2xl space-y-3">
            <Kicker>Verified proof</Kicker>
            <h2 className="type-h2 text-[#111215]">{proofHeading}</h2>
            <p className="type-body text-[#454954]">{proofLead}</p>
          </div>

          {/* Stats Grid from Verified SITE_FACTS */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {proofStatKeys.map((key) => {
              const stat = (SITE_FACTS.stats as Record<string, { value: string; label: string; detail?: string; confirmed: boolean }>)[key];
              if (!stat || !stat.confirmed) return null;
              return (
                <div
                  key={key}
                  className="bg-white p-6 md:p-8 rounded-lg border border-[#E4E6EB] space-y-2 shadow-xs"
                >
                  <div className="font-metric text-3xl md:text-4xl font-bold text-[#111215]">
                    {stat.value}
                  </div>
                  <div className="font-display text-sm font-semibold text-[#111215]">
                    {stat.label}
                  </div>
                  {stat.detail && (
                    <p className="text-xs text-[#454954] leading-relaxed">
                      {stat.detail}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mini Case Studies / Shipped Systems (if present) */}
          {pageContent?.proof.systems && pageContent.proof.systems.length > 0 && (
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {pageContent.proof.systems.map((sys) => (
                <div
                  key={sys.title}
                  className="bg-white p-6 rounded-lg border border-[#E4E6EB] space-y-3 shadow-xs"
                >
                  <div className="text-xs font-semibold text-[#ED1C24] uppercase tracking-wider">
                    Shipped System
                  </div>
                  <h3 className="font-display text-base font-semibold text-[#111215]">
                    {sys.title}
                  </h3>
                  <p className="text-xs text-[#454954] leading-relaxed">
                    {sys.summary}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-[#E4E6EB]">
                    {sys.nodes.map((node) => (
                      <span
                        key={node}
                        className="inline-block text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F4F5F7] text-[#454954]"
                      >
                        {node}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Own Brands Band (Confirmed) */}
          {pageContent?.proof.showOwnBrands && (
            <div className="mt-8 p-6 rounded-lg bg-white border border-[#E4E6EB] space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#ED1C24] uppercase tracking-wider">
                <Building2 className="h-4 w-4 text-[#ED1C24]" />
                <span>Our own brands — built and run by the Webix team</span>
              </div>
              <p className="text-xs text-[#454954]">
                We run our own e-commerce and property brands on the exact same codebases, ad frameworks and automations we deploy for clients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {SITE_FACTS.ownBrands.map((b) => (
                  <div
                    key={b.name}
                    className="p-4 rounded-md border border-[#E4E6EB] bg-[#F9FAFB] space-y-1"
                  >
                    <div className="font-display text-sm font-semibold text-[#111215]">
                      {b.name}
                    </div>
                    <div className="text-xs text-[#717684]">{b.description}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Zelvomart Ad Card (Confirmed) */}
          {pageContent?.proof.showZelvomartAd && (
            <div className="mt-6 p-6 rounded-lg bg-white border border-[#E4E6EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#16A34A] uppercase tracking-wider">
                  <TrendingUp className="h-4 w-4 text-[#16A34A]" />
                  <span>Verified Ad Performance · Zelvomart</span>
                </div>
                <p className="text-sm font-semibold text-[#111215]">
                  64 WhatsApp conversations at Rs 15.01 each
                </p>
                <p className="text-xs text-[#717684]">
                  Own-brand click-to-WhatsApp campaign delivered in Pakistan e-commerce.
                </p>
              </div>
              <Button href="/book-a-call/" variant="secondary" size="sm">
                Discuss campaign
              </Button>
            </div>
          )}
        </Container>
      </Section>

      {/* =========================================================================
          SECTION 6: PRICING SNAPSHOT (Surface: Signal Red with Monogram Watermark)
         ========================================================================= */}
      <Section
        surface="red"
        previousSurface="porcelain"
        notch
        watermark="monogram"
        spacing="default"
      >
        <Container>
          <div className="max-w-2xl space-y-3">
            <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 text-white uppercase tracking-wider">
              Transparent pricing
            </span>
            <h2 className="type-h2 text-white">
              {resolvedPrice
                ? `Investment ${resolvedPrice.display}`
                : "Quoted after a 30-minute discovery call"}
            </h2>
            <p className="type-lead text-white font-medium max-w-xl">
              Every quote comes with fixed milestones, clear deliverables and zero surprise hourly overages.
            </p>
          </div>

          <div className="mt-8 max-w-2xl">
            <CutFrame
              cutSize="lg"
              innerClassName="p-6 md:p-8 bg-[#141519] text-white space-y-5"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <div className="text-xs text-[#ED1C24] font-medium uppercase tracking-wider">
                    Package Snapshot
                  </div>
                  <div className="font-display text-xl font-semibold text-white mt-0.5">
                    {service.name}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-metric text-2xl md:text-3xl text-white">
                    {resolvedPrice ? resolvedPrice.display : "Fixed scope"}
                  </div>
                  <div className="text-xs text-[#A7ACB8]">
                    {resolvedPrice?.detail ?? "Milestone based"}
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 text-sm text-[#F5F6F8]">
                {baseInclusions.map((inc) => (
                  <li key={inc} className="flex items-start gap-2.5">
                    <Check
                      strokeWidth={2}
                      className="h-4 w-4 shrink-0 text-[#ED1C24] mt-0.5"
                    />
                    <span className="text-[#A7ACB8] text-xs md:text-sm leading-relaxed">
                      {inc}
                    </span>
                  </li>
                ))}
              </ul>

              {pageContent?.pricing.adSpendNote && (
                <p className="text-xs text-[#A7ACB8] pt-2 border-t border-white/10">
                  Ad spend is paid directly to Meta, Google or TikTok from your billing profile. We never mark up ad spend.
                </p>
              )}

              <div className="pt-2 flex flex-wrap gap-3">
                <Button href="/book-a-call/" variant="primary" size="sm">
                  Book a strategy call
                </Button>
                <Button href="/offers/" variant="secondary" size="sm">
                  Compare all packages
                </Button>
              </div>
            </CutFrame>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          SECTION 7: TOOLS & PLATFORMS (Surface: Graphite with Notch)
         ========================================================================= */}
      <Section
        surface="graphite"
        previousSurface="red"
        notch
        grid
        spacing="default"
      >
        <Container>
          <div className="max-w-2xl space-y-3">
            <Kicker>Tools & platforms</Kicker>
            <h2 className="type-h2 text-white">{toolsHeading}</h2>
            <p className="type-body text-[#A7ACB8]">{toolsLead}</p>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
            {toolsList.map((tool) => (
              <div
                key={tool.name}
                className="p-4 rounded-md border border-white/10 bg-white/[0.03] space-y-1 hover:border-[#ED1C24] transition-colors"
              >
                <div className="font-display text-sm font-semibold text-white">
                  {tool.name}
                </div>
                <div className="text-[11px] text-[#A7ACB8] line-clamp-2">
                  {tool.role}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          SECTION 8: FAQ ACCORDION (Surface: Porcelain with Notch)
         ========================================================================= */}
      <FaqSection
        kicker="Frequently asked questions"
        heading={faqHeading}
        subtitle="Every answer is written directly without sales fluff. Need a question answered immediately? WhatsApp us directly."
        faqs={faqs}
        surface="porcelain"
        previousSurface="graphite"
        notch
      />

      {/* =========================================================================
          SECTION 9: RELATED SERVICES & INDUSTRIES (Surface: Steel with Notch)
         ========================================================================= */}
      <Section
        surface="steel"
        previousSurface="porcelain"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-2xl space-y-3">
            <Kicker>Connected services</Kicker>
            <h2 className="type-h2 text-[#111215]">
              Explore complementary services and industry solutions
            </h2>
            <p className="type-body text-[#454954]">
              Combine services under one in-house team without coordinating multiple external agencies or freelancers.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={`/${rel.slug}/`}
                className="group p-6 rounded-lg bg-white border border-[#D5D8E0] space-y-3 hover:border-[#ED1C24] transition-colors shadow-xs"
              >
                <div className="flex items-center justify-between text-xs text-[#ED1C24] font-medium">
                  <span>Related service</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="font-display text-base font-semibold text-[#111215] group-hover:text-[#ED1C24] transition-colors">
                  {rel.name}
                </h3>
                <p className="text-xs text-[#454954] leading-relaxed">
                  {rel.shortOutcome}
                </p>
              </Link>
            ))}
          </div>

          {/* Industry Cross-Link */}
          <div className="mt-6 p-6 rounded-lg bg-[#E4E6EB] border border-[#CCD0D9] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#111215] uppercase tracking-wider">
                Tailored for your industry
              </span>
              <p className="text-sm font-semibold text-[#111215]">
                Looking for marketing & websites built for your specific industry?
              </p>
            </div>
            <Button href="/industries/" variant="secondary" size="sm">
              Explore industry workflows
            </Button>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          SECTION 10: FINAL CTA + COMPACT BOOKING (Surface: Oxblood with Notch)
         ========================================================================= */}
      <FinalCtaSection nextSlot={nextSlot} previousSurface="steel" />
    </div>
  );
}
