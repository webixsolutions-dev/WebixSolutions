import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { getPublishedServices } from "@/content/services";
import { INTERIOR } from "@/content/interior";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import type { IndustryEntry } from "@/content/industries";
import type { NextSlotResult } from "@/lib/booking/next-slot";

interface IndustriesHubViewProps {
  industries: IndustryEntry[];
  nextSlot: NextSlotResult;
}

const FAQS = [
  {
    question: "Do you specialise in one single industry?",
    answer:
      "No. While we have deep specialised playbooks for e-commerce, home-service contractors and real estate, our engineering and paid acquisition systems are built on universal unit economics: fast websites, strict lead qualification, frictionless tracking, and automated follow-up. We pair our technical framework with your domain expertise.",
  },
  {
    question: "Have you worked with businesses in my exact niche?",
    answer:
      "Across 96 custom-coded builds and 120+ clients, our team has delivered projects for online retailers, roofers, electrical contractors, equipment leasing companies, real estate developers, healthcare clinics, and B2B consultancies across North America, the UAE, and Pakistan. On our strategy call, we share relevant live examples and case studies.",
  },
  {
    question: "Do you work with early-stage startups and new businesses?",
    answer:
      "Yes. For new ventures, we recommend focused 14-day launch sprints — such as a 5-page custom Next.js or Shopify store paired with local Google Maps setup or paid search tests — so you can validate demand before committing to heavy monthly retainers.",
  },
  {
    question: "How do you tailor your marketing strategies to local market regulations?",
    answer:
      "Our team complies strictly with regional data protection and advertising rules: CASL and PIPEDA in Canada, CAN-SPAM and A2P 10DLC in the US, WhatsApp Business policies and PDPL in the UAE, and regional consumer guidelines across Pakistan.",
  },
];

export function IndustriesHubView({ industries, nextSlot }: IndustriesHubViewProps) {
  const guides = industries.filter((ind) => ind.hasDedicatedPage && ind.published);
  const serviceNames = new Map(getPublishedServices().map((service) => [service.slug, service.shortName]));

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
                  Industries
                </span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-6 animate-hero-rise">
            <Kicker>Domain-specific execution</Kicker>

            <h1 className="type-display text-white">
              Industries we serve
            </h1>

            <p className="type-lead text-[#A7ACB8] max-w-[62ch]">
              {INTERIOR.industries.lead}
            </p>

            <div
              id="hero-cta-group"
              data-hero-ctas="true"
              className="flex flex-col min-[480px]:flex-row min-[480px]:flex-wrap items-stretch min-[480px]:items-center gap-3.5 pt-2"
            >
              <Button href="/book-a-call/" variant="primary" size="lg">
                Book a strategy call
              </Button>
              <Button href="#industry-directory" variant="secondary" size="lg">
                Explore industries
              </Button>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Chip asSpan active>
                {industries.length} industries covered
              </Chip>
              <span className="text-xs text-[#A7ACB8]">
                {guides.length} with a full guide
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* Industry guides and the full directory: every industry is in the HTML, opened with native details */}
      <Section id="industry-directory" surface="porcelain" previousSurface="graphite" spacing="default">
        <Container>
          {guides.length > 0 && (
            <>
              <div className="ind-head">
                <Kicker>Industry guides</Kicker>
                <h2 className="type-h2 text-[#111215]">Start with a full guide</h2>
                <p className="type-body text-[#454954]">Detailed pages for the industries we work in most, with problems, setup, pricing and examples.</p>
              </div>
              <div className="ind-guides">
                {guides.map((ind) => (
                  <Link key={ind.slug} href={`/industries/${ind.slug}/`} className="ind-guide">
                    <span className="ind-guide-label">Guide</span>
                    <h3>{ind.name}</h3>
                    <p>{ind.struggles[0]}</p>
                    <span className="ind-guide-cta">Read the {ind.shortLabel} guide <ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
                  </Link>
                ))}
              </div>
            </>
          )}

          <div className="ind-head ind-head-second">
            <h2 className="type-h2 text-[#111215]">Every industry we work with</h2>
            <p className="type-body text-[#454954]">Open an industry to see what usually goes wrong and what we set up.</p>
          </div>
          <div className="ind-list">
            {industries.map((ind, index) => {
              const hasGuide = ind.hasDedicatedPage && ind.published;
              const related = ind.relevantServiceSlugs.flatMap((slug) => serviceNames.has(slug) ? [{ slug, name: serviceNames.get(slug)! }] : []);
              return (
                <details key={ind.slug} className="ind-item" name="industry-directory" open={index === 0}>
                  <summary>
                    <span className="ind-num">{String(index + 1).padStart(2, "0")}</span>
                    <span className="ind-name">{ind.name}</span>
                    {hasGuide && <span className="ind-badge">Guide</span>}
                    <ChevronDown className="ind-chevron h-5 w-5" aria-hidden="true" />
                  </summary>
                  <div className="ind-body">
                    <div>
                      <h3>What usually goes wrong</h3>
                      <ul>{ind.struggles.map((item) => <li key={item}>{item}</li>)}</ul>
                    </div>
                    <div>
                      <h3>What we set up</h3>
                      <ul data-tone="done">{ind.whatWeDo.map((item) => <li key={item}>{item}</li>)}</ul>
                    </div>
                    <div className="ind-foot">
                      {related.length > 0 && (
                        <p>
                          <span>Services we combine:</span>
                          {related.map((service) => <Link key={service.slug} href={`/${service.slug}/`}>{service.name}</Link>)}
                        </p>
                      )}
                      {ind.proofNote?.confirmed && <p className="ind-proof">{ind.proofNote.text}</p>}
                      {ind.slug === "restaurants-hospitality" && <Link className="ind-guide-link" href="/category/restaurant/">See restaurant websites, apps and marketing <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>}
                      {hasGuide && <Link className="ind-guide-link" href={`/industries/${ind.slug}/`}>Read the full {ind.shortLabel} guide <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>}
                    </div>
                  </div>
                </details>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          CONSULTATIVE SCOPING SECTION (Steel with Notch)
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
              <Kicker>Cross-industry engineering</Kicker>
              <h2 className="type-h2 text-[#111215]">
                Is your industry missing from the list?
              </h2>
              <p className="type-body text-[#454954]">
                While client businesses vary, high-performance digital foundations remain consistent: sub-2.5s website load times, frictionless inquiry forms, transparent ad tracking, and instant automated response. Schedule a discovery call and our team will map out a bespoke strategy for your niche.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Button href="/book-a-call/" variant="primary" size="lg">
                Book a strategy call
              </Button>
              <Button href="/services/" variant="secondary" size="lg">
                Browse all 18 services
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          FAQ ACCORDION (Porcelain with Notch)
         ========================================================================= */}
      <FaqSection
        kicker="Industry FAQs"
        heading="Frequently asked questions about our industry coverage"
        subtitle="How our Pakistani engineering and marketing team delivers results across different sectors."
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
