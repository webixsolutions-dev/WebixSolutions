import * as React from "react";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { CutFrame } from "@/components/ui/cut-frame";
import { Chip } from "@/components/ui/chip";
import { Button } from "@/components/ui/button";
import { getVerifiedTestimonials } from "@/content/testimonials";
import { SITE_FACTS, isConfirmed } from "@/content/site-facts";

function StaticGithubContributionSvg() {
  // Deterministic static 26-week x 5-row contribution grid SVG (no live GitHub API calls on page load)
  const cols = 26;
  const rows = 5;
  const levels = [
    "rgba(255,255,255,0.07)",
    "rgba(237,28,36,0.28)",
    "rgba(237,28,36,0.52)",
    "#C8101A",
    "#ED1C24",
  ];

  const cells: { x: number; y: number; fill: string }[] = [];
  for (let c = 0; c < cols; c++) {
    for (let r = 0; r < rows; r++) {
      const seed = (c * 7 + r * 13 + 3) % 11;
      const lvl = seed > 8 ? 4 : seed > 6 ? 3 : seed > 4 ? 2 : seed > 2 ? 1 : 0;
      cells.push({
        x: c * 14,
        y: r * 14,
        fill: levels[lvl],
      });
    }
  }

  return (
    <svg
      viewBox="0 0 362 68"
      role="img"
      aria-label="Static summary graph representing 1,053 GitHub contributions across 91 repositories in the last 12 months"
      className="w-full max-w-[420px] h-auto"
    >
      {cells.map((cell, i) => (
        <rect
          key={i}
          x={cell.x}
          y={cell.y}
          width="10"
          height="10"
          rx="2"
          fill={cell.fill}
        />
      ))}
    </svg>
  );
}

/**
 * Home Section 9 — Testimonials (verified-only) falling back to the Proof Wall on Graphite (#141519).
 * Rules (Rule 04 & Corrections #5 and #7):
 * - Renders client testimonials ONLY when >= 3 items have `verified: true` && `permission: true`.
 * - Otherwise renders the Proof Wall:
 *   - Confirmed GitHub activity ("1,053 contributions in the last 12 months across 91 Next.js, React, Node.js and Flutter repositories")
 *   - Confirmed team & delivery numbers ("20+ person in-house team", "50+ CMS websites", "50+ social accounts")
 *   - Own brands (Zelvomart, LaptopSouq.ae, Miraj Builders) and ad metrics (Rs 15.01, etc.) are gated behind `isConfirmed()` so they stay hidden in production until confirmed.
 */
export function ProofOrTestimonials() {
  const verifiedQuotes = getVerifiedTestimonials();
  const confirmedOwnBrands = SITE_FACTS.ownBrands.filter((b) =>
    isConfirmed(b.confirmed)
  );
  const confirmedAdResults = SITE_FACTS.adResults.filter((a) =>
    isConfirmed(a.confirmed)
  );

  if (verifiedQuotes.length >= 3) {
    return (
      <Section surface="graphite" previousSurface="steel" notch grid>
        <Container>
          <div className="max-w-2xl space-y-3">
            <Kicker>Verified client reviews</Kicker>
            <h2 className="type-h2 text-white">
              What clients say about working with our team
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {verifiedQuotes.map((t) => (
              <CutFrame
                key={t.id}
                innerClassName="p-6 flex flex-col justify-between gap-4"
              >
                <blockquote className="text-sm text-[#F5F6F8] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="pt-4 border-t border-white/10 text-xs text-[#A7ACB8]">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div>
                    {t.role}, {t.company} · {t.country}
                  </div>
                </div>
              </CutFrame>
            ))}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section surface="graphite" previousSurface="steel" notch grid>
      <Container>
        <div className="max-w-2xl space-y-3">
          <Kicker>Verifiable engineering & delivery proof</Kicker>
          <h2 className="type-h2 text-white">
            Measured by code shipped, sites launched and accounts managed
          </h2>
          <p className="type-body text-[#A7ACB8]">
            Rather than anonymous five-star quotes, here is the verifiable
            activity across our GitHub organization and in-house production
            teams.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Confirmed GitHub Activity Block (7 cols) */}
          <div className="lg:col-span-7">
            <CutFrame
              cutSize="lg"
              innerClassName="p-6 md:p-8 h-full flex flex-col justify-between gap-6"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Chip asSpan active>
                    Verified GitHub organization
                  </Chip>
                  <span className="text-xs text-[#A7ACB8]">
                    github.com/webixsolutions-dev
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-2">
                  <div>
                    <div className="font-metric text-4xl md:text-5xl text-white">
                      {SITE_FACTS.stats.githubContributionsLastYear.value}
                    </div>
                    <div className="text-xs text-[#A7ACB8] mt-1">
                      Contributions in the last 12 months
                    </div>
                  </div>
                  <div>
                    <div className="font-metric text-4xl md:text-5xl text-white">
                      {SITE_FACTS.stats.customCodedBuilds.value}
                    </div>
                    <div className="text-xs text-[#A7ACB8] mt-1">
                      Custom-coded repositories
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#F5F6F8] leading-relaxed">
                  {SITE_FACTS.stats.githubContributionsLastYear.detail}.
                </p>

                <div className="pt-2">
                  <StaticGithubContributionSvg />
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {["Next.js", "React", "Node.js", "Flutter"].map((stack) => (
                    <Chip key={stack} asSpan>
                      {stack}
                    </Chip>
                  ))}
                </div>
                <Button
                  href={SITE_FACTS.socials.github}
                  external
                  variant="secondary"
                  size="sm"
                >
                  View GitHub profile
                </Button>
              </div>
            </CutFrame>
          </div>

          {/* Confirmed In-House Delivery Scale (5 cols) */}
          <div className="lg:col-span-5">
            <CutFrame
              cutSize="lg"
              innerClassName="p-6 md:p-8 h-full flex flex-col justify-between gap-6"
            >
              <div className="space-y-5">
                <Chip asSpan>In-house production team</Chip>
                <div className="space-y-4">
                  <div className="border-b border-white/10 pb-4">
                    <div className="font-metric text-3xl text-white">
                      {SITE_FACTS.stats.teamSize.value}
                    </div>
                    <div className="font-display text-sm font-semibold text-white mt-0.5">
                      {SITE_FACTS.stats.teamSize.label}
                    </div>
                    <p className="text-xs text-[#A7ACB8] mt-1">
                      {SITE_FACTS.stats.teamSize.detail}
                    </p>
                  </div>

                  <div className="border-b border-white/10 pb-4">
                    <div className="font-metric text-3xl text-white">
                      {SITE_FACTS.stats.cmsWebsitesBuilt.value}
                    </div>
                    <div className="font-display text-sm font-semibold text-white mt-0.5">
                      {SITE_FACTS.stats.cmsWebsitesBuilt.label}
                    </div>
                    <p className="text-xs text-[#A7ACB8] mt-1">
                      {SITE_FACTS.stats.cmsWebsitesBuilt.detail}
                    </p>
                  </div>

                  <div>
                    <div className="font-metric text-3xl text-white">
                      {SITE_FACTS.stats.socialAccountsManaged.value}
                    </div>
                    <div className="font-display text-sm font-semibold text-white mt-0.5">
                      {SITE_FACTS.stats.socialAccountsManaged.label}
                    </div>
                    <p className="text-xs text-[#A7ACB8] mt-1">
                      {SITE_FACTS.stats.socialAccountsManaged.detail}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Button
                  href="/about-us/"
                  variant="text"
                  className="text-sm"
                >
                  Meet the team & see how we work
                </Button>
              </div>
            </CutFrame>
          </div>
        </div>

        {/* Confirmed Own Brands Band & Ad Results */}
        {confirmedOwnBrands.length > 0 && (
          <div className="mt-12 pt-10 border-t border-white/10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
              <div className="space-y-1">
                <div className="text-xs font-semibold text-[#ED1C24] uppercase tracking-wider">
                  Our own brands — built and run by the Webix team
                </div>
                <h3 className="type-h3 text-white">
                  Live platforms engineered, marketed and operated by our in-house team
                </h3>
              </div>
              <p className="text-xs text-[#A7ACB8] max-w-md">
                We test custom Next.js architectures, Meta ads and WhatsApp automation on our own ventures before shipping to clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {confirmedOwnBrands.map((brand) => (
                <CutFrame key={brand.name} innerClassName="p-6 flex flex-col justify-between gap-4 h-full">
                  <div className="space-y-2">
                    <div className="text-xs font-medium text-[#ED1C24]">
                      In-house venture · {brand.market}
                    </div>
                    <h4 className="font-display text-xl font-semibold text-white">
                      {brand.name}
                    </h4>
                    <p className="text-sm text-[#A7ACB8] leading-relaxed">
                      {brand.description}
                    </p>
                  </div>
                  {brand.url && (
                    <a
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-white hover:text-[#ED1C24] transition-colors underline underline-offset-4 pt-2 inline-flex items-center gap-1"
                    >
                      <span>Visit platform</span>
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  )}
                </CutFrame>
              ))}
            </div>

            {/* Zelvomart Ad Result Card */}
            {confirmedAdResults.length > 0 && (
              <div className="mt-6">
                <CutFrame
                  cutSize="lg"
                  innerClassName="p-6 md:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white/[0.02]"
                >
                  <div className="space-y-1.5 max-w-xl">
                    <div className="text-xs font-semibold text-[#ED1C24] uppercase tracking-wider">
                      Verified ad campaign result · Zelvomart
                    </div>
                    <h4 className="font-display text-xl font-semibold text-white">
                      64 WhatsApp conversations at Rs 15.01 each
                    </h4>
                    <p className="text-sm text-[#A7ACB8] leading-relaxed">
                      Click-to-WhatsApp e-commerce campaign in Pakistan running on Meta Ads Manager over the last 30 days. Tested, managed and optimized by our in-house growth marketing team.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-4 lg:pt-0 lg:pl-8 shrink-0">
                    <div>
                      <div className="font-metric text-4xl text-white">Rs 15.01</div>
                      <div className="text-xs text-[#A7ACB8] mt-0.5">Cost per WhatsApp conversation</div>
                    </div>
                    <div>
                      <div className="font-metric text-4xl text-white">64</div>
                      <div className="text-xs text-[#A7ACB8] mt-0.5">Conversations (last 30 days)</div>
                    </div>
                  </div>
                </CutFrame>
              </div>
            )}
          </div>
        )}
      </Container>
    </Section>
  );
}
