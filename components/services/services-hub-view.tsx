"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, Layers, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { CutFrame } from "@/components/ui/cut-frame";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import type { ServiceCategory, ServiceEntry } from "@/content/services";
import type { NextSlotResult } from "@/lib/booking/next-slot";

interface ServicesHubViewProps {
  categories: {
    category: ServiceCategory;
    title: string;
    description: string;
    services: ServiceEntry[];
  }[];
  nextSlot: NextSlotResult;
}

const FAQS = [
  {
    question: "Which service should I start with?",
    answer:
      "If you need more immediate enquiries, start with Paid Advertising or Google Business Profile. If your current website is outdated, slow or doesn't convert, start with Custom Web Design or Shopify Store Development. If your team is bogged down by manual follow-ups, start with AI Automation or an AI Chatbot. On our free 30-minute strategy call, we examine your current bottlenecks and recommend the highest-ROI starting point.",
  },
  {
    question: "Can I combine services across different categories?",
    answer:
      "Yes. Most of our clients combine Build and Grow services (e.g. a Next.js or Shopify redesign paired with ongoing SEO and paid ads). Because our 20+ person team works under one roof in Pakistan, developers, ad specialists, and AI engineers collaborate directly on your project without external subcontractor delays.",
  },
  {
    question: "Do you offer monthly growth packages?",
    answer:
      "Yes. We offer integrated monthly growth packages starting from $399/month on our /offers/ page. These combine website maintenance, SEO fixes, social media content, and paid advertising management under a single predictable monthly investment.",
  },
  {
    question: "Do you sign non-disclosure agreements (NDAs)?",
    answer:
      "Yes. We routinely sign mutual NDAs before reviewing proprietary client roadmaps, database architectures, or internal CRM data. Your business data, codebases, and customer records remain strictly confidential.",
  },
];

export function ServicesHubView({ categories, nextSlot }: ServicesHubViewProps) {
  const [activeCategory, setActiveCategory] = React.useState<ServiceCategory>("Build");

  const scrollToCategory = (cat: ServiceCategory) => {
    setActiveCategory(cat);
    const element = document.getElementById(cat.toLowerCase());
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION (Graphite)
         ========================================================================= */}
      <Section surface="graphite" spacing="hero" grid className="relative">
        <Container>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 animate-hero-rise">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-[#A7ACB8]">
              <li className="flex items-center gap-2">
                <Link
                  href="/"
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden="true" className="text-white/20">/</span>
                <span aria-current="page" className="text-white font-medium">
                  Services
                </span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-6 animate-hero-rise">
            <Kicker>Full-service digital delivery</Kicker>

            <h1 className="type-display text-white">
              Services built to grow your business
            </h1>

            <p className="type-lead text-[#A7ACB8] max-w-[62ch]">
              Websites, Shopify stores, mobile apps, SEO, paid advertising, and custom AI automation — engineered by an in-house 20+ person team on your time zone.
            </p>

            <div
              id="hero-cta-group"
              data-hero-ctas="true"
              className="flex flex-col min-[480px]:flex-row min-[480px]:flex-wrap items-stretch min-[480px]:items-center gap-3.5 pt-2"
            >
              <Button href="/book-a-call/" variant="primary" size="lg">
                Book a strategy call
              </Button>
              <Button href="/offers/" variant="secondary" size="lg">
                See growth packages
              </Button>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Chip asSpan active>
                18 Core services across 4 pillars
              </Chip>
              <span className="text-xs text-[#A7ACB8]">
                Serving Canada, the US, the UAE, New Zealand and Pakistan
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          SERVICES DIRECTORY (Porcelain with Notch)
         ========================================================================= */}
      <Section
        surface="porcelain"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Sticky Sidebar (Desktop: 3 cols) */}
            <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-4">
              <div className="p-5 rounded-lg bg-white border border-[#E4E6EB] shadow-xs space-y-2">
                <div className="text-xs font-semibold text-[#717684] uppercase tracking-wider mb-3">
                  Service Categories
                </div>
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.category;
                  return (
                    <button
                      key={cat.category}
                      type="button"
                      onClick={() => scrollToCategory(cat.category)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-md text-sm font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-[#ED1C24] text-white"
                          : "text-[#454954] hover:bg-[#F4F5F7] hover:text-[#111215]"
                      }`}
                    >
                      <span>{cat.category}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          isActive
                            ? "bg-white/20 text-white"
                            : "bg-[#F4F5F7] text-[#717684]"
                        }`}
                      >
                        {cat.services.length}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Quick Contact Box */}
              <div className="p-5 rounded-lg bg-white border border-[#E4E6EB] shadow-xs space-y-3">
                <div className="text-xs font-semibold text-[#ED1C24] uppercase tracking-wider">
                  Not sure where to start?
                </div>
                <p className="text-xs text-[#454954] leading-relaxed">
                  Book a free 30-minute discovery call. We review your goals and recommend the exact service or package.
                </p>
                <Button href="/book-a-call/" variant="primary" size="sm" className="w-full">
                  Book a strategy call
                </Button>
              </div>
            </aside>

            {/* Mobile Category Quick Selector */}
            <div className="lg:hidden col-span-1 flex flex-wrap gap-2 pb-4">
              {categories.map((cat) => (
                <button
                  key={cat.category}
                  type="button"
                  onClick={() => scrollToCategory(cat.category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    activeCategory === cat.category
                      ? "bg-[#ED1C24] text-white border-[#ED1C24]"
                      : "bg-white text-[#454954] border-[#D5D8E0]"
                  }`}
                >
                  {cat.category} ({cat.services.length})
                </button>
              ))}
            </div>

            {/* Main Services List (Desktop: 9 cols) */}
            <div className="lg:col-span-9 space-y-16">
              {categories.map((cat) => (
                <section
                  key={cat.category}
                  id={cat.category.toLowerCase()}
                  className="space-y-6 scroll-mt-28"
                >
                  <div className="border-b border-[#D5D8E0] pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                    <div>
                      <span className="text-xs font-semibold text-[#ED1C24] uppercase tracking-wider">
                        {cat.category} Column
                      </span>
                      <h2 className="type-h2 text-[#111215] mt-1">{cat.title}</h2>
                    </div>
                    <p className="text-xs text-[#717684] max-w-sm sm:text-right">
                      {cat.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cat.services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/${service.slug}/`}
                        className="group p-6 rounded-lg bg-white border border-[#E4E6EB] space-y-4 hover:border-[#ED1C24] transition-all shadow-xs flex flex-col justify-between"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="inline-block text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#F4F5F7] text-[#454954]">
                              {service.shortName}
                            </span>
                            <span className="text-xs text-[#ED1C24] font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                              <span>Learn more</span>
                              <ArrowRight className="h-3.5 w-3.5" />
                            </span>
                          </div>

                          <h3 className="font-display text-lg font-semibold text-[#111215] group-hover:text-[#ED1C24] transition-colors leading-snug">
                            {service.name}
                          </h3>

                          <p className="text-xs text-[#454954] leading-relaxed">
                            {service.shortOutcome}
                          </p>
                        </div>

                        <div className="pt-3 border-t border-[#E4E6EB] flex items-center justify-between text-xs text-[#717684]">
                          <span>
                            {service.confirmedPrice && service.startingPrice
                              ? `From ${service.startingPrice}`
                              : "Scope-based quote"}
                          </span>
                          <span className="text-[#16A34A] font-medium flex items-center gap-1">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
                            <span>In-house delivery</span>
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          NOT SURE WHERE TO START? (Steel with Notch)
         ========================================================================= */}
      <Section
        surface="steel"
        previousSurface="porcelain"
        notch
        spacing="default"
      >
        <Container>
          <div className="p-8 md:p-12 rounded-xl bg-white border border-[#D5D8E0] shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <Kicker>Consultative scoping</Kicker>
              <h2 className="type-h2 text-[#111215]">
                Not sure which service or stack fits your business?
              </h2>
              <p className="type-body text-[#454954]">
                Schedule a free 30-minute discovery call. We analyze your website, competitor landscape and marketing bottlenecks, then give you an honest recommendation on the right starting point.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Button href="/book-a-call/" variant="primary" size="lg">
                Book a strategy call
              </Button>
              <Button href="/offers/" variant="secondary" size="lg">
                View growth packages
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          FAQ ACCORDION (Porcelain with Notch)
         ========================================================================= */}
      <FaqSection
        kicker="Frequently asked questions"
        heading="Common questions about working with Webix"
        subtitle="Transparent answers about our engagement models, delivery timelines and service combinations."
        faqs={FAQS}
        surface="porcelain"
        previousSurface="steel"
        notch
      />

      {/* =========================================================================
          FINAL CTA SECTION (Oxblood with Notch)
         ========================================================================= */}
      <FinalCtaSection nextSlot={nextSlot} previousSurface="porcelain" />
    </div>
  );
}
