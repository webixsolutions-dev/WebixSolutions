import * as React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { SITE_FACTS } from "@/content/site-facts";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { ShieldCheck, FileText, AlertCircle } from "lucide-react";

export interface LegalPageLayoutProps {
  title: string;
  kicker?: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPageLayout({
  title,
  kicker = "Legal & Compliance",
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Section surface="porcelain" className="pt-24 pb-16">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border-b border-[#E4E6EB] pb-8 space-y-3">
              <Kicker>{kicker}</Kicker>
              <h1 className="type-display text-[#111215]">{title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#717684]">
                <span>Last updated: {lastUpdated}</span>
                <span>•</span>
                <span>Entity: {SITE_FACTS.brandName}</span>
                <span>•</span>
                <span>{SITE_FACTS.headquarters.fullDisplay}</span>
              </div>
            </div>

            {/* Legal Notice Callout */}
            <div className="p-4 rounded-lg bg-[#FAF0F0] border border-[#ED1C24]/20 flex items-start gap-3 text-xs text-[#717684]">
              <AlertCircle className="h-4 w-4 text-[#ED1C24] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                This document sets out the commercial and operational terms of {SITE_FACTS.brandName}. If you have any specific legal or compliance questions regarding our cross-border operations, please email{" "}
                <a href={`mailto:${SITE_FACTS.contact.email}`} className="text-[#C8101A] underline font-medium">
                  {SITE_FACTS.contact.email}
                </a>.
              </p>
            </div>

            {/* Prose Content */}
            <div className="prose prose-sm max-w-none text-[#454954] space-y-8 pt-4 leading-relaxed">
              {children}
            </div>
          </div>
        </Container>
      </Section>

      <FinalCtaSection previousSurface="porcelain" />
    </div>
  );
}
