"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { CutFrame } from "@/components/ui/cut-frame";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { ABOUT_CONTENT } from "@/content/about";
import { SITE_FACTS } from "@/content/site-facts";
import { WhatsAppIcon, BrandSocialIcon } from "@/components/layout/social-icons";
import {
  Code2,
  Cpu,
  TrendingUp,
  Palette,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  ExternalLink,
  Globe,
  Sparkles,
  Users,
} from "lucide-react";

export function AboutView() {
  const { hero, founderStory, departments, operatingRules, faqs } = ABOUT_CONTENT;

  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================================================
          1. INTRO / HERO SECTION (Porcelain with Notch)
         ========================================================================= */}
      <Section surface="porcelain" className="pt-24 pb-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 7 Columns */}
            <div className="lg:col-span-7 space-y-6">
              <Kicker>{hero.kicker}</Kicker>
              <h1 className="type-display text-[#111215]">{hero.h1}</h1>
              <p className="type-lead text-[#454954] max-w-2xl">{hero.lead}</p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button href="/book-a-call/" variant="primary" size="lg">
                  Book a strategy call
                </Button>
                <a
                  href={SITE_FACTS.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-2.5 cut-tr-sm border border-[#D5D8E0] bg-white px-6 text-base font-medium text-[#111215] hover:border-[#111215] transition-colors"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp Haroon</span>
                </a>
              </div>
            </div>

            {/* Right 5 Columns: Founder Card / Brand Emblem */}
            <div className="lg:col-span-5">
              <div className="cut-tr-lg border border-[#E4E6EB] bg-white p-7 shadow-sm space-y-5">
                <div className="flex items-center gap-4 border-b border-[#E4E6EB] pb-5">
                  <div className="h-16 w-16 rounded-full bg-[#121214] text-white flex items-center justify-center font-display font-bold text-xl border-2 border-[#ED1C24]">
                    HS
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#111215]">
                      {SITE_FACTS.founder.name}
                    </h3>
                    <p className="text-xs text-[#717684]">
                      {SITE_FACTS.founder.role} · Webix Solutions
                    </p>
                    <div className="flex items-center gap-3 mt-1.5 text-xs text-[#ED1C24]">
                      <a
                        href={SITE_FACTS.founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:underline"
                      >
                        <BrandSocialIcon name="linkedin" className="h-3.5 w-3.5" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href={SITE_FACTS.founder.githubOrg}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:underline"
                      >
                        <BrandSocialIcon name="github" className="h-3.5 w-3.5" />
                        <span>GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#454954] leading-relaxed">
                  <p>
                    • Leads an in-house engineering campus in Dunyapur, Punjab.
                  </p>
                  <p>
                    • Built proprietary brands: Zelvomart, LaptopSouq.ae & Miraj Builders.
                  </p>
                  <p>
                    • Direct contact via WhatsApp, Slack, or Google Meet video calls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          2. FOUNDER STORY & QUOTE (Graphite with Notch)
         ========================================================================= */}
      <Section surface="graphite" previousSurface="porcelain" notch spacing="default">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-3 text-center sm:text-left">
              <Kicker>{founderStory.kicker}</Kicker>
              <h2 className="type-h2 text-white">{founderStory.h2}</h2>
            </div>

            {/* Founder Quote Card */}
            <div className="cut-tr-lg border border-white/15 bg-white/[0.03] p-6 sm:p-10 space-y-6">
              <blockquote className="font-display text-lg sm:text-xl text-[#F5F6F8] italic leading-relaxed">
                &ldquo;{founderStory.quote}&rdquo;
              </blockquote>
              <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#9CA3AF]">
                <div>
                  <span className="font-semibold text-white block">
                    {founderStory.author}
                  </span>
                  <span>{founderStory.role}</span>
                </div>
                <div className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
                  <span>Actively building & reviewing client builds daily</span>
                </div>
              </div>
            </div>

            <p className="type-body text-[#9CA3AF] leading-relaxed">
              {founderStory.bio}
            </p>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          3. IN-HOUSE TEAM BY DEPARTMENT (Porcelain with Notch)
         ========================================================================= */}
      <Section surface="porcelain" previousSurface="graphite" notch spacing="default">
        <Container>
          <div className="max-w-3xl space-y-3 mb-12">
            <Kicker>Specialized in-house teams</Kicker>
            <h2 className="type-h2 text-[#111215]">
              Seven departments collaborating under one roof
            </h2>
            <p className="type-body text-[#454954]">
              We do not broker projects out to freelancers. Every deliverable is executed by our full-time developers, designers, copywriters, and paid media buyers in Pakistan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, idx) => (
              <div
                key={idx}
                className="cut-tr-sm border border-[#E4E6EB] bg-white p-6 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono font-bold text-[#C8101A] uppercase tracking-wider block">
                      Department {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-base font-bold text-[#111215]">
                      {dept.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#717684] font-medium">
                    {dept.focus}
                  </p>

                  <p className="text-xs text-[#454954] leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E4E6EB] flex flex-wrap gap-1.5">
                  {dept.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-[#F4F5F7] text-[10px] font-mono text-[#454954]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          4. TIME ZONE SHIFT DIAGRAM (Steel with Notch)
         ========================================================================= */}
      <Section surface="steel" previousSurface="porcelain" notch spacing="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left 6 Columns: Explanation */}
            <div className="lg:col-span-6 space-y-4">
              <Kicker>Coordinated global shifts</Kicker>
              <h2 className="type-h2 text-white">
                How we overlap your local business hours
              </h2>
              <p className="type-body text-[#9CA3AF] leading-relaxed">
                Offshore delivery is only effective when communication is fast. We eliminate the 12-hour response lag by structuring our in-house production into two coordinated shifts covering North America, the Gulf, New Zealand, and Pakistan.
              </p>

              <div className="space-y-3 pt-2 text-xs text-[#D1D5DB]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ED1C24] shrink-0 mt-0.5" />
                  <span>
                    <strong>Day Shift (from 9:00 AM PKT):</strong> Direct real-time overlap with Dubai (GST) and morning New Zealand hours.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-[#ED1C24] shrink-0 mt-0.5" />
                  <span>
                    <strong>Night Shift (9:00 PM – 5:00 AM PKT):</strong> Full engineering and campaign management during Toronto, New York, Chicago, Vancouver, and Los Angeles business hours.
                  </span>
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Visual 24-Hour Comparison Card */}
            <div className="lg:col-span-6">
              <div className="cut-tr-lg border border-white/15 bg-[#121214] p-6 sm:p-8 space-y-5 text-white">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <span className="font-semibold text-white">Coordinated Shift Coverage</span>
                  <span className="text-[#ED1C24] font-mono">Asia/Karachi Host Time</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded bg-white/[0.04] border border-white/10 space-y-1">
                    <div className="flex justify-between font-semibold text-white">
                      <span>Pakistan (PKT, UTC+5)</span>
                      <span className="text-[#16A34A]">9:00 AM – 1:00 PM & 9:00 PM – 5:00 AM</span>
                    </div>
                    <p className="text-[11px] text-[#9CA3AF]">
                      Central HQ operations in Dunyapur & Lahore
                    </p>
                  </div>

                  <div className="p-3 rounded bg-white/[0.04] border border-white/10 space-y-1">
                    <div className="flex justify-between font-semibold text-white">
                      <span>Canada & US Eastern (ET)</span>
                      <span className="text-[#16A34A]">11:00 AM – 7:00 PM</span>
                    </div>
                    <p className="text-[11px] text-[#9CA3AF]">
                      Live Slack/WhatsApp discussions during peak working hours
                    </p>
                  </div>

                  <div className="p-3 rounded bg-white/[0.04] border border-white/10 space-y-1">
                    <div className="flex justify-between font-semibold text-white">
                      <span>US Pacific Time (PT)</span>
                      <span className="text-[#16A34A]">8:00 AM – 4:00 PM</span>
                    </div>
                    <p className="text-[11px] text-[#9CA3AF]">
                      Direct standups and deployments during California/BC mornings
                    </p>
                  </div>

                  <div className="p-3 rounded bg-white/[0.04] border border-white/10 space-y-1">
                    <div className="flex justify-between font-semibold text-white">
                      <span>United Arab Emirates (GST)</span>
                      <span className="text-[#16A34A]">8:00 AM – 12:00 PM</span>
                    </div>
                    <p className="text-[11px] text-[#9CA3AF]">
                      Same-day turnarounds with 1-hour time zone difference
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          5. VERIFIED NUMBERS & STATS (Graphite with Notch)
         ========================================================================= */}
      <Section surface="graphite" previousSurface="steel" notch spacing="default">
        <Container>
          <div className="max-w-2xl space-y-3 mb-10">
            <Kicker>Proven track record</Kicker>
            <h2 className="type-h2 text-white">
              Measurable outcomes from our production center
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 cut-tr-sm border border-white/10 bg-white/[0.02] space-y-2">
              <div className="font-display text-4xl font-bold text-white">
                {SITE_FACTS.stats.teamSize.value}
              </div>
              <div className="text-xs font-semibold text-white">
                In-House Team Members
              </div>
              <p className="text-[11px] text-[#9CA3AF]">
                Developers, designers, marketers and engineers in Pakistan.
              </p>
            </div>

            <div className="p-6 cut-tr-sm border border-white/10 bg-white/[0.02] space-y-2">
              <div className="font-display text-4xl font-bold text-[#ED1C24]">
                {SITE_FACTS.stats.githubContributionsLastYear.value}
              </div>
              <div className="text-xs font-semibold text-white">
                GitHub Contributions / Year
              </div>
              <p className="text-[11px] text-[#9CA3AF]">
                Across 91 Next.js, React, Node.js and Flutter repositories.
              </p>
            </div>

            <div className="p-6 cut-tr-sm border border-white/10 bg-white/[0.02] space-y-2">
              <div className="font-display text-4xl font-bold text-white">
                {SITE_FACTS.stats.customCodedBuilds.value}
              </div>
              <div className="text-xs font-semibold text-white">
                Custom-Coded Builds
              </div>
              <p className="text-[11px] text-[#9CA3AF]">
                High-performance web apps, agency CRMs, and portals.
              </p>
            </div>

            <div className="p-6 cut-tr-sm border border-white/10 bg-white/[0.02] space-y-2">
              <div className="font-display text-4xl font-bold text-white">
                {SITE_FACTS.stats.cmsWebsitesBuilt.value}
              </div>
              <div className="text-xs font-semibold text-white">
                CMS Websites Delivered
              </div>
              <p className="text-[11px] text-[#9CA3AF]">
                WordPress, Shopify, Wix, Webflow, and Squarespace.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          6. OPERATING RULES (Porcelain with Notch)
         ========================================================================= */}
      <Section surface="porcelain" previousSurface="graphite" notch spacing="default">
        <Container>
          <div className="max-w-3xl space-y-3 mb-12">
            <Kicker>Values as operating commitments</Kicker>
            <h2 className="type-h2 text-[#111215]">
              Five rules that govern every client engagement
            </h2>
            <p className="type-body text-[#454954]">
              We avoid vague mission statements. These are concrete operating standards that our leadership and production team follow on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {operatingRules.map((rule) => (
              <div
                key={rule.number}
                className="p-6 rounded-lg bg-white border border-[#E4E6EB] shadow-xs space-y-3"
              >
                <span className="font-mono text-xs font-bold text-[#C8101A] px-2 py-0.5 rounded bg-[#FAF0F0]">
                  Rule {rule.number}
                </span>
                <h3 className="font-display text-base font-bold text-[#111215]">
                  {rule.rule}
                </h3>
                <p className="text-xs text-[#454954] leading-relaxed">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          7. WHERE WE ARE (Steel with Notch)
         ========================================================================= */}
      <Section surface="steel" previousSurface="porcelain" notch spacing="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Kicker>Headquarters & physical location</Kicker>
              <h2 className="type-h2 text-white">
                Our central production campus in Dunyapur, Pakistan
              </h2>
              <p className="type-body text-[#9CA3AF] leading-relaxed">
                Operating outside high-cost metropolitan centers like New York, Toronto, or London allows us to pass substantial structural cost savings to clients while offering competitive, highly rewarding career paths to top technical talent in Pakistan.
              </p>

              <div className="space-y-2 pt-2 text-xs text-[#D1D5DB]">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#ED1C24]" />
                  <span>
                    <strong>Headquarters:</strong> {SITE_FACTS.headquarters.fullDisplay}
                  </span>
                </div>
                <div className="flex items-center gap-2 pl-6 text-[#9CA3AF]">
                  <span>Meetings in Lahore arranged by prior appointment.</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-[#ED1C24]" />
                  <span>
                    <strong>Core Markets:</strong> Canada, United States, UAE, New Zealand & Pakistan.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="cut-tr-lg border border-white/15 bg-[#121214] p-6 sm:p-8 space-y-4 text-white">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#ED1C24]">
                  In-Person Visits
                </div>
                <h3 className="type-h3 text-white">
                  Visiting our engineering campus
                </h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Clients and partner agencies visiting Pakistan are welcome to tour our operations center in Dunyapur or schedule executive meetings in Lahore.
                </p>
                <div className="pt-2">
                  <Button href="/contact-us/" variant="secondary" size="sm">
                    Contact our operations team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          8. FAQ SECTION (Porcelain with Notch)
         ========================================================================= */}
      <FaqSection
        kicker="Direct answers"
        heading="Frequently asked questions about Webix Solutions"
        subtitle="Learn more about our team background, location, ownership, and operating structure."
        faqs={faqs.map((f) => ({ question: f.q, answer: f.a }))}
        surface="porcelain"
        previousSurface="steel"
        notch
      />

      {/* =========================================================================
          9. FINAL CTA (Deep Oxblood)
         ========================================================================= */}
      <FinalCtaSection previousSurface="porcelain" />
    </div>
  );
}
