import { PRICING_FAQS } from "@/content/pricing";

import * as React from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { INTERIOR } from "@/content/interior";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { FaqSection } from "@/components/shared/faq-section";
import { InteriorLinks } from "@/components/studio/interior-links";
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
              <Button href="#care-plans" variant="secondary" size="lg">
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

      <InteriorLinks links={[
        { id: "care-plans", label: "Care plans" },
        { id: "builds", label: "Builds" },
        { id: "one-time", label: "One-time work" },
        { id: "payment-terms", label: "Payment terms" },
      ]} />

      {/* 2. Monthly care plans */}
      <Section id="care-plans" surface="porcelain" previousSurface="graphite" spacing="default">
        <Container>
          <div className="price-head">
            <Kicker>Monthly</Kicker>
            <h2 className="type-h2 text-[#111215]">Website and app care plans</h2>
            <p className="type-body text-[#454954]">Ongoing updates, monitoring and edits for a site or app that is already live.</p>
          </div>
          <div className="price-plans">
            {CARE_PLANS.map((plan, index) => (
              <article key={plan.id} className="price-plan" data-featured={index === 1}>
                {index === 1 && <span className="price-plan-flag">Most chosen</span>}
                <h3>{plan.name}</h3>
                <p className="price-plan-summary">{plan.summary}</p>
                <p className="price-amount">
                  {plan.confirmed ? <>{`$${plan.priceUsd}`}<span>{plan.billingPeriod}</span></> : "Custom quote"}
                </p>
                <ul>{plan.features.map((feature) => <li key={feature}><Check className="h-4 w-4" aria-hidden="true" />{feature}</li>)}</ul>
                <Button href="/book-a-call/" variant={index === 1 ? "primary" : "secondary"} size="default">Ask about {plan.name}</Button>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. Builds */}
      <Section id="builds" surface="graphite" previousSurface="porcelain" spacing="default">
        <Container>
          <div className="price-head">
            <Kicker>One-time projects</Kicker>
            <h2 className="type-h2 text-white">Website, store and app builds</h2>
            <p className="type-body text-[#C1C6D0]">Each build is scoped in writing before work starts. You own the site, code and accounts.</p>
          </div>
          <div className="price-builds">
            {BUILD_PRICES.map((row, index) => (
              <article key={row.id} className="price-build">
                <span className="price-build-num">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{row.serviceName}</h3>
                  <p>{row.includes}</p>
                </div>
                <p className="price-build-time">{row.timeline}</p>
                <p className="price-build-amount">{row.confirmed ? `From $${row.startingPriceUsd.toLocaleString("en-US")}` : "Custom quote"}</p>
                <Link href={row.href} aria-label={`${row.serviceName} details`}><ArrowRight className="h-5 w-5" aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. One-time services and packages */}
      <Section id="one-time" surface="steel" previousSurface="graphite" spacing="default">
        <Container>
          <div className="price-head">
            <Kicker>Single pieces of work</Kicker>
            <h2 className="type-h2 text-[#111215]">Audits and creative sprints</h2>
            <p className="type-body text-[#454954]">Useful when you need one thing done well without a monthly plan.</p>
          </div>
          <div className="price-onetime">
            {ONE_TIME_SERVICES.map((item) => (
              <article key={item.id}>
                <p className="price-onetime-amount">{item.confirmed ? item.priceDisplay : "Custom quote"}</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <Link href={item.href}>Service details <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
              </article>
            ))}
          </div>
          <div className="price-bundle">
            <div>
              <h3>Website, marketing and automation packages</h3>
              <p>Combine a website build or redesign with monthly SEO, social media and paid advertising in one plan.</p>
            </div>
            <div>
              <Button href="/offers/" variant="primary" size="lg">Explore growth packages</Button>
              <Button href="/white-label-partners/" variant="secondary" size="lg">White-label agency partner</Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. PAYMENT TERMS & EXCLUSIONS (Steel with Notch)
         ========================================================================= */}
      <Section
        id="payment-terms"
        surface="porcelain"
        previousSurface="steel"
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
        surface="steel"
        previousSurface="porcelain"
      />

      {/* =========================================================================
          5. FINAL CTA (Oxblood with Notch)
         ========================================================================= */}
      <FinalCtaSection nextSlot={nextSlot} previousSurface="porcelain" />
    </div>
  );
}
