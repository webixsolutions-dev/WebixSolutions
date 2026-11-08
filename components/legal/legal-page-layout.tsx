import * as React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { SITE_FACTS } from "@/content/site-facts";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { AlertCircle } from "lucide-react";

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
      <Section surface="graphite" spacing="hero">
        <Container size="narrow">
          <div className="space-y-4">
            <Kicker>{kicker}</Kicker>
            <h1 className="type-display text-white">{title}</h1>
            <div className="interior-document-meta">
              <span>Last updated {lastUpdated}</span>
              <span>{SITE_FACTS.brandName}</span>
              <span>{SITE_FACTS.headquarters.fullDisplay}</span>
            </div>
          </div>
        </Container>
      </Section>
      <Section surface="porcelain" previousSurface="graphite" notch spacing="compact">
        <Container size="narrow">
          <div className="interior-legal-document">
            {/* Legal Notice Callout */}
            <div className="p-4 rounded-lg bg-[#FAF0F0] border border-[#ED1C24]/20 flex items-start gap-3 text-xs text-[#717684]">
              <AlertCircle className="h-4 w-4 text-[#ED1C24] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Questions about this policy? Email{" "}
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
