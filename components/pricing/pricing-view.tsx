"use client";

import { PRICING_FAQS } from "@/content/pricing";

import * as React from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  ArrowUpRight,
  Sparkles,
  Zap,
} from "lucide-react";
import { INTERIOR } from "@/content/interior";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import {
  CARE_PLANS,
  BUILD_PRICES,
  ONE_TIME_SERVICES,
  type CarePlan,
  type BuildPriceRow,
  type OneTimeServiceItem,
} from "@/content/pricing";
import type { NextSlotResult } from "@/lib/booking/next-slot";

interface PricingViewProps {
  nextSlot: NextSlotResult;
}

type PricingSegment = "care" | "builds" | "onetime";



export function PricingView({ nextSlot }: PricingViewProps) {
  const [segment, setSegment] = React.useState<PricingSegment>("care");

  return (
    <div className="w-full">
      {/* =========================================================================
          1. HERO SECTION (Graphite)
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
                  Pricing
                </span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-6 animate-hero-rise">
            <Kicker>Transparent commercial rates</Kicker>

            <h1 className="type-display text-white">Pricing</h1>

            <p className="type-lead text-[#A7ACB8] max-w-[62ch]">
              {INTERIOR.pricing.lead}
            </p>

            <div
              id="hero-cta-group"
              data-hero-ctas="true"
              className="flex flex-col min-[480px]:flex-row min-[480px]:flex-wrap items-stretch min-[480px]:items-center gap-3.5 pt-2"
            >
              <Button href="/book-a-call/" variant="primary" size="lg">
                Book a strategy call
              </Button>
              <Button href="#pricing-options" variant="secondary" size="lg">
                Explore pricing options
              </Button>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Chip asSpan active>
                Written scopes and quotes
              </Chip>
              <span className="text-xs text-[#A7ACB8]">
                Ad spend is paid directly to the platforms
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          2. SEGMENTED CONTROL + PRICING TABLES (Porcelain with Notch)
         ========================================================================= */}
      <Section
        id="pricing-options"
        surface="porcelain"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          {/* Segmented Control Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#E4E6EB]">
            <div>
              <span className="text-xs font-semibold text-[#717684] uppercase tracking-wider block">
                Choose pricing category:
              </span>
              <h2 className="type-h2 text-[#111215] mt-1">
                {segment === "care" && "Monthly Website & App Care Plans"}
                {segment === "builds" && "Custom Website, Store & App Builds"}
                {segment === "onetime" && "One-Time Audits & Creative Sprints"}
              </h2>
            </div>

            <div className="inline-flex p-1.5 rounded-xl bg-[#E4E6EB] border border-[#D5D8E0]">
              <button
                type="button"
                onClick={() => setSegment("care")}
                aria-pressed={segment === "care"}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  segment === "care"
                    ? "bg-white text-[#111215] shadow-xs"
                    : "text-[#454954] hover:text-[#111215]"
                }`}
              >
                Care plans
              </button>
              <button
                type="button"
                onClick={() => setSegment("builds")}
                aria-pressed={segment === "builds"}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  segment === "builds"
                    ? "bg-white text-[#111215] shadow-xs"
                    : "text-[#454954] hover:text-[#111215]"
                }`}
              >
                Builds
              </button>
              <button
                type="button"
                onClick={() => setSegment("onetime")}
                aria-pressed={segment === "onetime"}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  segment === "onetime"
                    ? "bg-white text-[#111215] shadow-xs"
                    : "text-[#454954] hover:text-[#111215]"
                }`}
              >
                One-time services
              </button>
            </div>
          </div>

          {/* VIEW A: CARE PLANS */}
          <div data-pricing-panel hidden={segment !== "care"} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CARE_PLANS.map((plan, idx) => (
                <div
                  key={plan.id}
                  className={`p-8 rounded-2xl bg-white border flex flex-col justify-between space-y-6 shadow-xs ${
                    idx === 1
                      ? "border-[#ED1C24] ring-1 ring-[#ED1C24]/20 relative"
                      : "border-[#E4E6EB]"
                  }`}
                >
                  {idx === 1 && (
                    <span className="absolute -top-3 left-8 px-3 py-0.5 rounded-full bg-[#ED1C24] text-white text-[10px] font-bold uppercase tracking-wider">
                      Featured care plan
                    </span>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#111215]">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-[#717684] mt-1">
                        {plan.summary}
                      </p>
                    </div>

                    <div className="flex items-baseline gap-1 pt-2 border-t border-[#E4E6EB]">
                      <span className="font-display text-4xl font-bold text-[#111215]">
                        {plan.confirmed ? `$${plan.priceUsd}` : "Custom quote"}
                      </span>
                      <span className="text-xs font-semibold text-[#717684]">
                        {plan.confirmed ? plan.billingPeriod : "Monthly care"}
                      </span>
                    </div>

                    <ul className="space-y-3 pt-2">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#454954]">
                          <Check className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#E4E6EB]">
                    <Button href="/book-a-call/" variant={idx === 1 ? "primary" : "secondary"} size="default" className="w-full">
                      Ask about {plan.name}
                    </Button>
                  </div>
                </div>
              ))}
            </div>

          {/* VIEW B: BUILDS TABLE */}
          <div data-pricing-panel hidden={segment !== "builds"} className="rounded-xl border border-[#E4E6EB] bg-white overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-[#E4E6EB] bg-[#F8F9FA] text-[#717684] text-xs font-semibold uppercase tracking-wider">
                      <th scope="col" className="p-4 sm:p-5">Service Deliverable</th>
                      <th scope="col" className="p-4 sm:p-5">Starting Price</th>
                      <th scope="col" className="p-4 sm:p-5">Typical Delivery</th>
                      <th scope="col" className="p-4 sm:p-5">Inclusions Summary</th>
                      <th scope="col" className="p-4 sm:p-5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E4E6EB]">
                    {BUILD_PRICES.map((b) => (
                      <tr key={b.id} className="hover:bg-[#F8F9FA]/50 transition-colors">
                        <td className="p-4 sm:p-5 font-display font-semibold text-[#111215]">
                          <Link href={b.href} className="hover:text-[#ED1C24] transition-colors flex items-center gap-1.5">
                            <span>{b.serviceName}</span>
                            <ArrowRight className="h-3 w-3 text-[#ED1C24]" />
                          </Link>
                        </td>
                        <td className="p-4 sm:p-5 font-mono font-bold text-[#C8101A] whitespace-nowrap">
                          {b.confirmed ? `From $${b.startingPriceUsd}` : "Custom quote"}
                        </td>
                        <td className="p-4 sm:p-5 text-xs text-[#717684] whitespace-nowrap">
                          {b.timeline}
                        </td>
                        <td className="p-4 sm:p-5 text-xs text-[#454954] max-w-md leading-relaxed">
                          {b.includes}
                        </td>
                        <td className="p-4 sm:p-5 text-right whitespace-nowrap">
                          <Button href="/book-a-call/" variant="secondary" size="sm">
                            Get written quote
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          {/* VIEW C: ONE-TIME SERVICES */}
          <div data-pricing-panel hidden={segment !== "onetime"} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ONE_TIME_SERVICES.map((item) => (
                <div
                  key={item.id}
                  className="p-7 rounded-xl bg-white border border-[#E4E6EB] shadow-xs flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs px-2 py-0.5 rounded bg-[#FAF0F0] text-[#C8101A] font-semibold">
                        One-time service
                      </span>
                      <span className="font-display text-xl font-bold text-[#111215]">
                        {item.confirmed ? item.priceDisplay : "Custom quote"}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-[#111215]">
                      {item.name}
                    </h3>

                    <p className="text-xs text-[#454954] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E4E6EB] flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="text-xs text-[#717684] hover:text-[#111215] flex items-center gap-1 transition-colors"
                    >
                      <span>Service details</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                    <Button href="/book-a-call/" variant="secondary" size="sm">
                      Request a quote
                    </Button>
                  </div>
                </div>
              ))}
            </div>

          {/* Integrated Offers Teaser Banner */}
          <div className="mt-16 p-8 md:p-10 rounded-2xl bg-[#141519] border border-white/12 text-white flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ED1C24] text-xs font-bold uppercase tracking-wider text-white">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Prefer an integrated growth bundle?</span>
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                Website, marketing and automation packages
              </h3>
              <p className="text-xs text-[#A7ACB8] leading-relaxed">
                Combine custom website builds or redesigns, monthly SEO fixes, social media management, and paid advertising campaigns under a single predictable investment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Button href="/offers/" variant="primary" size="lg">
                Explore growth packages
              </Button>
              <Button href="/white-label-partners/" variant="secondary" size="lg">
                White-label agency partner
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. PAYMENT TERMS & EXCLUSIONS (Steel with Notch)
         ========================================================================= */}
      <Section
        surface="steel"
        previousSurface="porcelain"
        notch
        spacing="default"
      >
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Terms */}
            <div className="p-8 rounded-xl bg-white border border-[#D5D8E0] space-y-4 shadow-2xs">
              <div className="flex items-center gap-2 text-[#16A34A]">
                <ShieldCheck className="h-5 w-5" />
                <h3 className="font-display text-lg font-bold text-[#111215]">
                  Standard Payment & Milestone Terms
                </h3>
              </div>
              <ul className="space-y-3 pt-1">
                <li className="flex items-start gap-2.5 text-xs text-[#454954]">
                  <Check className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>40% Onboarding Deposit:</strong> Required before discovery kickoff, architecture scoping, and sprint scheduling.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-[#454954]">
                  <Check className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>Milestone-Based Releases:</strong> Final project balance invoiced only after staging sign-off and deployment verification.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-[#454954]">
                  <Check className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>Direct Advertising Billing:</strong> Media spend is paid directly to Meta/Google by your company credit card.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-[#454954]">
                  <Check className="h-4 w-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <span><strong>Full IP Transfer:</strong> Source code, GitHub repos, and assets transfer 100% to your business upon settlement.</span>
                </li>
              </ul>
            </div>

            {/* What is Never Included */}
            <div className="p-8 rounded-xl bg-white border border-[#D5D8E0] space-y-4 shadow-2xs">
              <div className="flex items-center gap-2 text-[#C8101A]">
                <AlertCircle className="h-5 w-5" />
                <h3 className="font-display text-lg font-bold text-[#111215]">
                  What Is Never Hidden Or Included
                </h3>
              </div>
              <ul className="space-y-3 pt-1">
                <li className="flex items-start gap-2.5 text-xs text-[#454954]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ED1C24] shrink-0 mt-2" />
                  <span><strong>Platform Ad Spend:</strong> Budget spent on Meta Ads, Google Ads, TikTok, or Local Services Ads is funded by your company.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-[#454954]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ED1C24] shrink-0 mt-2" />
                  <span><strong>Third-Party SaaS Subscriptions:</strong> Shopify app store fees, CRM per-seat costs, and domain renewal fees belong to your accounts.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-[#454954]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ED1C24] shrink-0 mt-2" />
                  <span><strong>Third-Party API Consumption:</strong> Direct raw LLM tokens (OpenAI) or SMS telephony fees (Twilio) are billed at cost.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-[#454954]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#ED1C24] shrink-0 mt-2" />
                  <span><strong>Paid Stock Photography:</strong> Premium commercial photo or video licensing outside standard unbranded stock libraries.</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          4. PRICING FAQS (Porcelain with Notch)
         ========================================================================= */}
      <FaqSection
        kicker="Direct answers"
        heading="Frequently asked questions about our pricing"
        subtitle="Transparent answers regarding billing cycles, contracts, and currency equivalents."
        faqs={PRICING_FAQS}
        surface="porcelain"
        previousSurface="steel"
        notch
      />

      {/* =========================================================================
          5. FINAL CTA (Oxblood with Notch)
         ========================================================================= */}
      <FinalCtaSection nextSlot={nextSlot} previousSurface="porcelain" />
    </div>
  );
}
