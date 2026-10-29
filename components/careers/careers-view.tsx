"use client";

import * as React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/shared/faq-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { CAREERS_CONTENT, type OpenRole } from "@/content/careers";
import { SITE_FACTS } from "@/content/site-facts";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Mail,
  ShieldCheck,
  FileCode2,
  Sparkles,
} from "lucide-react";

export function CareersView() {
  const { hero, howWeHire, workplaceValues, openRoles, faqs } = CAREERS_CONTENT;
  const [selectedRole, setSelectedRole] = React.useState<OpenRole | null>(null);

  return (
    <div className="flex flex-col min-h-screen">
      {/* =========================================================================
          1. HERO (Graphite)
         ========================================================================= */}
      <Section surface="graphite" className="pt-24 pb-14">
        <Container>
          <div className="max-w-3xl space-y-4 mb-6">
            <Kicker>{hero.kicker}</Kicker>
            <h1 className="type-display text-white">{hero.h1}</h1>
            <p className="type-lead text-[#9CA3AF]">{hero.lead}</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-[#D1D5DB] pt-2 border-t border-white/10">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-[#ED1C24]" />
              <span>Campus in Dunyapur, Punjab</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-[#ED1C24]" />
              <span>Coordinated Day & Night Shifts</span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-[#ED1C24]" />
              <span>Direct Applications: {SITE_FACTS.contact.hrEmail}</span>
            </span>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          2. HOW WE HIRE (Porcelain with Notch)
         ========================================================================= */}
      <Section surface="porcelain" previousSurface="graphite" notch spacing="default">
        <Container>
          <div className="max-w-3xl space-y-3 mb-12">
            <Kicker>Fast, practical evaluation</Kicker>
            <h2 className="type-h2 text-[#111215]">
              How we hire: zero whiteboard trivia, real paid work
            </h2>
            <p className="type-body text-[#454954]">
              We evaluate you on real-world engineering and marketing execution. Here is our 4-step hiring process from application to offer.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeHire.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-xl bg-white border border-[#E4E6EB] shadow-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs font-bold text-[#C8101A] px-2 py-0.5 rounded bg-[#FAF0F0] inline-block">
                    Step {step.step}
                  </span>
                  <h3 className="font-display text-base font-bold text-[#111215]">
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
          3. WORKPLACE VALUES & CODE OF CONDUCT (Steel with Notch)
         ========================================================================= */}
      <Section surface="steel" previousSurface="porcelain" notch spacing="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Kicker>Operating culture</Kicker>
              <h2 className="type-h2 text-white">
                Engineering excellence with respect for your life outside work
              </h2>

              <div className="space-y-4 pt-1">
                {workplaceValues.map((val, idx) => (
                  <div
                    key={idx}
                    className="p-5 cut-tr-sm border border-white/10 bg-white/[0.03] space-y-1.5"
                  >
                    <h3 className="font-display text-sm font-bold text-white flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#ED1C24]" />
                      <span>{val.title}</span>
                    </h3>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed pl-6">
                      {val.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 5 Columns: Code of Conduct Card */}
            <div className="lg:col-span-5">
              <div className="cut-tr-lg border border-white/15 bg-[#121214] p-6 sm:p-8 space-y-4 text-white">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#ED1C24] uppercase tracking-wider">
                  <ShieldCheck className="h-4 w-4 text-[#ED1C24]" />
                  <span>Ethical Framework</span>
                </div>
                <h3 className="type-h3 text-white">
                  Our Code of Conduct
                </h3>
                <p className="text-xs text-[#9CA3AF] leading-relaxed">
                  Every member of our team adheres to strict client non-disclosure, responsible AI engineering principles, and a merit-based, anti-harassment workplace policy.
                </p>
                <div className="pt-2">
                  <Link
                    href="/code-of-conduct/"
                    className="inline-flex h-11 items-center justify-center gap-2 cut-tr-sm bg-white/10 hover:bg-white/15 border border-white/20 px-5 text-xs font-medium text-white transition-colors"
                  >
                    <span>Read our Code of Conduct</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          4. OPEN ROLES (Graphite with Notch)
         ========================================================================= */}
      <Section surface="graphite" previousSurface="steel" notch spacing="default">
        <Container>
          <div className="max-w-3xl space-y-3 mb-10">
            <Kicker>Current opportunities</Kicker>
            <h2 className="type-h2 text-white">Open positions at Webix Solutions</h2>
            <p className="type-body text-[#9CA3AF]">
              We are actively hiring experienced software developers, performance marketers, and automation engineers.
            </p>
          </div>

          <div className="space-y-4">
            {openRoles.map((role) => (
              <div
                key={role.id}
                className="cut-tr-md border border-white/12 bg-white/[0.03] p-6 sm:p-7 space-y-5"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#ED1C24] font-semibold uppercase tracking-wider">
                      {role.department}
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">
                      {role.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded bg-white/10 text-white font-mono text-[11px]">
                      {role.type}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-white/10 text-[#9CA3AF] text-[11px]">
                      {role.experience}
                    </span>
                    <a
                      href={`mailto:${SITE_FACTS.contact.hrEmail}?subject=Application%20for%20${encodeURIComponent(role.title)}`}
                      className="inline-flex h-9 items-center justify-center gap-1.5 cut-tr-sm bg-[#C8101A] hover:bg-[#ED1C24] px-4 text-xs font-semibold text-white transition-colors ml-2"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>Apply Now</span>
                    </a>
                  </div>
                </div>

                <p className="text-xs text-[#D1D5DB] leading-relaxed">
                  {role.overview}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-1 text-xs">
                  <div className="space-y-2">
                    <span className="font-semibold text-white uppercase tracking-wider text-[11px] block">
                      Key Responsibilities:
                    </span>
                    <ul className="space-y-1.5 text-[#9CA3AF]">
                      {role.keyResponsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#ED1C24] mt-0.5">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <span className="font-semibold text-white uppercase tracking-wider text-[11px] block">
                      Core Requirements:
                    </span>
                    <ul className="space-y-1.5 text-[#9CA3AF]">
                      {role.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#ED1C24] mt-0.5">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* =========================================================================
          5. FAQ ACCORDION (Porcelain with Notch)
         ========================================================================= */}
      <FaqSection
        kicker="Direct answers"
        heading="Frequently asked questions about careers"
        subtitle="Hiring timeline, work environment, compensation, and interview expectations."
        faqs={faqs}
        surface="porcelain"
        previousSurface="graphite"
        notch
      />

      {/* =========================================================================
          6. FINAL CTA (Oxblood with Notch)
         ========================================================================= */}
      <FinalCtaSection previousSurface="porcelain" />
    </div>
  );
}
