"use client";

import * as React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Check,
  ArrowRight,
  Sparkles,
  Lock,
  Clock,
  Layers,
  FileCheck2,
  Users2,
  Cpu,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { Chip } from "@/components/ui/chip";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import type { NextSlotResult } from "@/lib/booking/next-slot";

interface WhiteLabelViewProps {
  nextSlot: NextSlotResult;
}

const DELIVERABLES = [
  {
    title: "Websites & E-commerce",
    description: "Custom-coded Next.js builds, WordPress themes, and high-converting Shopify storefronts delivered under your client staging domains.",
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform iOS and Android MVPs built on a clean single Flutter codebase, ready for client App Store and Play Store submission.",
  },
  {
    title: "Social Media Management",
    description: "Monthly content batches: branded carousels, short-form reels, caption copywriting, and hashtag strategies submitted for your agency review.",
  },
  {
    title: "Technical & Local SEO",
    description: "Core Web Vitals remediation, local citation audits, Google Business Profile setups, and unbranded white-label PDF ranking reports.",
  },
  {
    title: "Paid Media Management",
    description: "Meta, Google, and TikTok ad campaign buildouts, tracking pixel audits (CAPI), and daily ad spend management under your agency MCC.",
  },
  {
    title: "AI Chatbots & Automation",
    description: "Custom customer-support bots, WhatsApp lead engines, and n8n/Make workflow integrations branded with your agency documentation.",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Mutual NDA Executed",
    description: "We execute a binding mutual non-disclosure agreement guaranteeing complete confidentiality and strict non-solicitation.",
  },
  {
    step: "02",
    title: "Defined Pilot Project",
    description: "Test our code quality, turnaround speed, and communication with a small trial project at wholesale partner rates.",
  },
  {
    step: "03",
    title: "Dedicated Channel & PM Sync",
    description: "Your team gets a dedicated Slack or WhatsApp channel, and our engineers integrate directly into your ClickUp, Asana, or Jira board.",
  },
  {
    step: "04",
    title: "Delivery with QA Checklist",
    description: "Every staging deployment passes our senior QA checklist for mobile responsiveness, speed, and form functionality before handoff.",
  },
  {
    step: "05",
    title: "Monthly Capacity Planning",
    description: "Reserve dedicated developer or designer seats monthly, ensuring guaranteed bandwidth as your agency signs new retainer clients.",
  },
];

const GUARANTEES = [
  {
    title: "100% Unbranded Deliverables",
    description: "Source code, Figma design files, git commits, and staging links are stripped of all Webix references or use your agency's white-label domain.",
  },
  {
    title: "Strict Zero-Client-Contact Policy",
    description: "We never initiate contact with your end clients. All communication flows exclusively through your designated account managers.",
  },
  {
    title: "Your Project Management Tool",
    description: "Our engineers log into your existing ClickUp, Asana, Monday, or Jira boards and update task cards during your working hours.",
  },
  {
    title: "Synchronous Timezone Overlap",
    description: "Our North American night shift overlaps Eastern and Pacific business hours, while our day shift overlaps UAE Gulf Standard Time.",
  },
];

const FAQS = [
  {
    question: "Will my agency's clients ever know that Webix Solutions exists?",
    answer:
      "No. We operate strictly as your behind-the-scenes engineering and creative production campus. All Git commit histories, staging links, Figma files, and code comments are completely unbranded or tagged with your agency credentials. We sign strict non-disclosure and non-solicitation agreements before receiving any project files.",
  },
  {
    question: "How do you guarantee code quality and design standards?",
    answer:
      "Unlike ad-hoc freelancer networks, all 20+ team members work full-time under senior engineering leadership. Every deliverable passes an internal QA checklist covering Core Web Vitals, cross-browser compatibility, responsive mobile layouts, and form tracking before it is delivered to your account managers.",
  },
  {
    question: "What project management tools and communication apps do you support?",
    answer:
      "We routinely integrate directly into our partner agencies' workflows. We join your private Slack or Teams channels, receive task tickets in ClickUp, Asana, Trello, Monday, or Jira, and push code to your company's private GitHub or GitLab organization.",
  },
  {
    question: "Can your team attend client video calls as our internal technical team?",
    answer:
      "Yes. For select enterprise partners, our senior engineers and technical architects can attend video conferences using your agency's email alias and branded background, acting seamlessly as your in-house engineering department to help scope complex requirements.",
  },
  {
    question: "How do partner pricing and invoicing work?",
    answer:
      "We provide wholesale partner rate cards on request. Agency partners typically mark up our rates by 50% to 150% when billing their domestic clients. Invoices are consolidated bi-weekly or monthly and payable in USD via corporate credit card, ACH, or Wise Business.",
  },
];

export function WhiteLabelView({ nextSlot }: WhiteLabelViewProps) {
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
                  White-Label Partners
                </span>
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl space-y-6 animate-hero-rise">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-[#ED1C24] text-white text-xs font-bold uppercase tracking-wider">
                B2B Agency Partnerships
              </span>
              <Kicker>Confidential Offshore Delivery</Kicker>
            </div>

            <h1 className="type-display text-white">
              White-label delivery partner for agencies and IT companies
            </h1>

            <div className="space-y-2">
              <p className="type-lead text-white/90 max-w-[62ch]">
                Sell it under your brand. We build and manage it, on your time zone, under strict NDA.
              </p>
              <p className="type-body text-[#A7ACB8] max-w-[62ch]">
                Expand your agency margins and client capacity with a dedicated 20+ person engineering and creative team in Pakistan without adding domestic payroll overhead.
              </p>
            </div>

            <div
              id="hero-cta-group"
              data-hero-ctas="true"
              className="flex flex-col min-[480px]:flex-row min-[480px]:flex-wrap items-stretch min-[480px]:items-center gap-3.5 pt-2"
            >
              <Button href="/book-a-call/" variant="primary" size="lg">
                Book a partner discovery call
              </Button>
              <Button href="#pilot" variant="secondary" size="lg">
                View pilot offer
              </Button>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Chip asSpan active>
                Mutual NDA Enforced · Unbranded Staging · Zero Client Contact
              </Chip>
              <span className="text-xs text-[#A7ACB8]">
                Serving agencies across Canada, the US, the UAE and the UK
              </span>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          2. WHAT WE DELIVER WHITE-LABEL (Porcelain with Notch)
         ========================================================================= */}
      <Section
        surface="porcelain"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-12">
            <Kicker>Capabilities menu</Kicker>
            <h2 className="type-h2 text-[#111215]">
              Everything your agency needs to scale client retainers
            </h2>
            <p className="type-body text-[#454954]">
              High-throughput technical and creative disciplines executed by full-time specialists under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DELIVERABLES.map((del, i) => (
              <div
                key={i}
                className="p-8 rounded-xl bg-white border border-[#E4E6EB] shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#ED1C24] font-semibold">
                    Discipline 0{i + 1}
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#111215]">
                    {del.title}
                  </h3>
                  <p className="text-xs text-[#454954] leading-relaxed">
                    {del.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. HOW IT WORKS — 5-STEP FLOW (Steel with Notch)
         ========================================================================= */}
      <Section
        surface="steel"
        previousSurface="porcelain"
        notch
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-12">
            <Kicker>Seamless integration</Kicker>
            <h2 className="type-h2 text-[#111215]">
              How we plug into your agency operations
            </h2>
            <p className="type-body text-[#454954]">
              A proven 5-step onboarding and delivery framework designed to protect your brand reputation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-xl bg-white border border-[#D5D8E0] space-y-3 shadow-2xs flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="font-display text-2xl font-bold text-[#C8101A]">
                    {step.step}
                  </div>
                  <h3 className="font-display text-sm font-bold text-[#111215]">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#454954] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          4. GUARANTEES WE ACTUALLY KEEP (Graphite with Notch + Grid)
         ========================================================================= */}
      <Section
        surface="graphite"
        previousSurface="steel"
        notch
        grid
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-3 mb-12">
            <Kicker>Accountability standards</Kicker>
            <h2 className="type-h2 text-white">
              Guarantees we actually uphold every single sprint
            </h2>
            <p className="type-lead text-[#A7ACB8]">
              No overseas contractor excuses. Built on professional operational integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GUARANTEES.map((g, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#1C1E24] border border-white/10 space-y-3"
              >
                <div className="flex items-center gap-2 text-[#ED1C24]">
                  <ShieldCheck className="h-5 w-5" />
                  <h3 className="font-display text-lg font-bold text-white">
                    {g.title}
                  </h3>
                </div>
                <p className="text-xs text-[#A7ACB8] leading-relaxed">
                  {g.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          5. PARTNER PRICING (Porcelain with Notch)
         ========================================================================= */}
      <Section
        surface="porcelain"
        previousSurface="graphite"
        notch
        spacing="default"
      >
        <Container>
          <div className="p-8 md:p-12 rounded-2xl bg-white border border-[#E4E6EB] shadow-xs flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <Kicker>Wholesale agency economics</Kicker>
              <h2 className="type-h2 text-[#111215]">
                Wholesale partner rate card on request
              </h2>
              <p className="type-body text-[#454954]">
                Our wholesale rates provide 40% to 60% gross margin headroom compared to standard North American and UK domestic billing rates. Scale your client roster without taking on long-term local employment liabilities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
              <Button href="/book-a-call/" variant="primary" size="lg">
                Request partner rate card
              </Button>
              <Button href="/contact-us/" variant="secondary" size="lg">
                Email partner desk
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          6. PILOT OFFER (Signal Red with Notch & Watermark)
         ========================================================================= */}
      <Section
        id="pilot"
        surface="red"
        previousSurface="porcelain"
        notch
        watermark="monogram"
        spacing="default"
      >
        <Container>
          <div className="max-w-3xl space-y-6">
            <Kicker>Low-risk trial</Kicker>
            <h2 className="type-h2 text-white font-bold">
              Test our engineering with a single pilot project
            </h2>
            <p className="text-base md:text-lg text-white font-semibold leading-relaxed max-w-2xl">
              Don't take our word for it. Send us one discrete website redesign, complex landing page, or automation sprint at our discounted wholesale partner rate. If you love our communication, speed, and clean code, we'll discuss dedicated monthly capacity.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/book-a-call/" variant="secondary" size="lg">
                Schedule a 30-min pilot scoping call
              </Button>
              <Button href="/our-work/" variant="primary" size="lg">
                Review verified codebases
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          7. FAQS (Porcelain with Notch)
         ========================================================================= */}
      <FaqSection
        kicker="Direct answers"
        heading="Frequently asked questions about agency white-labeling"
        subtitle="Clear details on our non-disclosure policies, project management tools, and billing terms."
        faqs={FAQS}
        surface="porcelain"
        previousSurface="red"
        notch
      />

      {/* =========================================================================
          8. FINAL CTA (Oxblood with Notch)
         ========================================================================= */}
      <FinalCtaSection nextSlot={nextSlot} previousSurface="porcelain" />
    </div>
  );
}
