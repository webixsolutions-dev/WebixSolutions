import { buildMetadata } from "@/config/seo";
import { Section, type SurfaceType } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button } from "@/components/ui/button";
import { CutFrame } from "@/components/ui/cut-frame";
import { Chip } from "@/components/ui/chip";
import { SITE_FACTS } from "@/content/site-facts";
import { getPublishedServices } from "@/content/services";
import { getAllHubIndustries } from "@/content/industries";
import { getPublishedLocations } from "@/content/locations";

export const metadata = buildMetadata({
  title: "Cut & Glass Design System Styleguide | Webix Solutions",
  description:
    "Internal living styleguide for the Webix Solutions Cut & Glass design system: tokens, typography, surfaces, notch transitions and primitives.",
  path: "/styleguide/",
  noindex: true,
});

const SURFACE_SPECS: {
  id: SurfaceType;
  name: string;
  hex: string;
  elevatedHex: string;
  textHex: string;
  usage: string;
}[] = [
  {
    id: "graphite",
    name: "Carbon Graphite",
    hex: "#141519",
    elevatedHex: "#1C1E24",
    textHex: "#F5F6F8",
    usage: "Hero, Services Tabs, Technical & Proof sections, Footer (~35% of page)",
  },
  {
    id: "porcelain",
    name: "Warm Porcelain",
    hex: "#F4F5F7",
    elevatedHex: "#FFFFFF",
    textHex: "#111215",
    usage: "Proof strips, Selected Work, How We Work, FAQ & reading sections (~40% of page)",
  },
  {
    id: "steel",
    name: "Cool Steel",
    hex: "#E4E6EB",
    elevatedHex: "#FFFFFF",
    textHex: "#111215",
    usage: "Secondary light sections, Two-ways split, comparison tables (~15% of page)",
  },
  {
    id: "red",
    name: "Signal Red",
    hex: "#ED1C24",
    elevatedHex: "#C8141B",
    textHex: "#FFFFFF",
    usage: "Kicker squares and 1 signature band per page (AI Systems). White on #ED1C24 is 4.38:1 (large text ≥19px bold or ≥24px only; body copy sits inside dark cards).",
  },
  {
    id: "oxblood",
    name: "Deep Oxblood",
    hex: "#5A0B10",
    elevatedHex: "#6E0E15",
    textHex: "#F5F6F8",
    usage: "Used once per page for the Final CTA / inline booking band",
  },
];

const TYPE_SPEC_ROWS = [
  {
    token: "--text-display",
    className: "type-display",
    spec: "clamp(2.5rem, 4.6vw + 1rem, 4.5rem) · 600 · lh 1.02 · -0.03em",
    sample: "Precision engineering for digital growth",
  },
  {
    token: "--text-h1",
    className: "type-h1",
    spec: "clamp(2.125rem, 3.4vw + 1rem, 3.5rem) · 600 · lh 1.06 · -0.025em",
    sample: "Websites, marketing and AI automation that grow your business",
  },
  {
    token: "--text-h2",
    className: "type-h2",
    spec: "clamp(1.625rem, 2.2vw + 0.8rem, 2.5rem) · 600 · lh 1.12 · -0.02em",
    sample: "Three AI systems running in production today",
  },
  {
    token: "--text-h3",
    className: "type-h3",
    spec: "clamp(1.25rem, 1.1vw + 0.9rem, 1.625rem) · 500 · lh 1.22 · -0.015em",
    sample: "01. Strategy call & technical scope",
  },
  {
    token: "--text-h4",
    className: "type-h4",
    spec: "1.125rem (18px) · Switzer 600 · lh 1.35 · -0.01em",
    sample: "Deliverables included in every website build",
  },
  {
    token: "--text-lead",
    className: "type-lead",
    spec: "clamp(1.0625rem, 0.4vw + 0.95rem, 1.25rem) · Switzer 400 · lh 1.55",
    sample:
      "A 20+ person in-house team in Pakistan building custom websites, search campaigns and AI agents for clients across five countries.",
  },
  {
    token: "--text-body",
    className: "type-body",
    spec: "1rem (16px) · Switzer 400 · lh 1.65 · 60–70ch measure",
    sample:
      "Every page is server-rendered so search engines and AI assistants read the complete content, pricing and FAQs on the first request without executing client scripts.",
  },
  {
    token: "--text-sm",
    className: "type-sm",
    spec: "0.875rem (14px) · Switzer 400 · lh 1.55",
    sample: "Ad spend is paid directly to Meta, Google or TikTok by the client.",
  },
  {
    token: "--text-xs",
    className: "type-xs",
    spec: "0.75rem (12px) · Switzer 500 · lh 1.4",
    sample: "Serving clients across Canada, the United States, the UAE, New Zealand and Pakistan.",
  },
];

export default function StyleguidePage() {
  const publishedServices = getPublishedServices();
  const industries = getAllHubIndustries();
  const locations = getPublishedLocations();

  return (
    <>
      {/* 1. HERO (Graphite) */}
      <Section surface="graphite" spacing="hero" grid>
        <Container>
          <div className="max-w-3xl space-y-5">
            <Kicker>Design system specification · Cut & Glass</Kicker>
            <h1 className="type-display text-white">
              Webix Solutions living styleguide
            </h1>
            <p className="type-lead text-[#A7ACB8]">
              Precision-cut 45° top-right geometry, five alternating surface
              families with top-left corner notches, self-hosted Clash Grotesk &
              Switzer typography, and disciplined liquid glass.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Chip asSpan active>
                noindex, follow
              </Chip>
              <Chip asSpan>{publishedServices.length} W1 Services Seeded</Chip>
              <Chip asSpan>{industries.length} Hub Industries</Chip>
              <Chip asSpan>{locations.length} Active Markets</Chip>
            </div>
          </div>

          {/* 5 Surface Swatches */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SURFACE_SPECS.map((s) => (
              <CutFrame key={s.id} innerClassName="p-0 overflow-hidden">
                <div
                  style={{ backgroundColor: s.hex, color: s.textHex }}
                  className="p-5 h-32 flex flex-col justify-between border-b border-white/10"
                >
                  <span className="text-xs font-medium opacity-85">
                    data-surface=&quot;{s.id}&quot;
                  </span>
                  <div className="font-metric text-xl">{s.hex}</div>
                </div>
                <div className="p-4 space-y-1.5 bg-[#1C1E24] text-[#F5F6F8]">
                  <p className="font-display text-sm font-semibold">{s.name}</p>
                  <p className="text-xs text-[#A7ACB8] leading-relaxed">
                    {s.usage}
                  </p>
                </div>
              </CutFrame>
            ))}
          </div>
        </Container>
      </Section>

      {/* 2. NOTCH TRANSITION: Graphite -> Porcelain */}
      <Section surface="porcelain" previousSurface="graphite" notch>
        <Container>
          <div className="space-y-3 max-w-2xl">
            <Kicker>Notch transition: Graphite → Porcelain</Kicker>
            <h2 className="type-h2">
              Fluid typography scale & tabular numerals
            </h2>
            <p className="type-body text-[var(--text-secondary)]">
              Self-hosted Clash Grotesk (500, 600) and Switzer (400, 500, 600).
              Only Clash Grotesk 600 and Switzer 400 are preloaded in the
              document head.
            </p>
          </div>

          {/* Tabular Numbers Showcase (Clash Grotesk 600 + tabular-nums) */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              SITE_FACTS.stats.customCodedBuilds,
              SITE_FACTS.stats.githubContributionsLastYear,
              SITE_FACTS.stats.cmsWebsitesBuilt,
              SITE_FACTS.stats.socialAccountsManaged,
            ].map((stat) => (
              <CutFrame key={stat.label} innerClassName="p-6">
                <div className="font-metric text-4xl md:text-5xl text-[#111215]">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium text-[#111215]">
                  {stat.label}
                </div>
              </CutFrame>
            ))}
          </div>

          {/* Fluid Type Scale Table */}
          <div className="mt-12 divide-y divide-[var(--border)] border-t border-b border-[var(--border)]">
            {TYPE_SPEC_ROWS.map((row) => (
              <div
                key={row.token}
                className="py-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline"
              >
                <div className="lg:col-span-4 space-y-1">
                  <div className="font-metric text-sm text-[#C8101A]">
                    {row.token}
                  </div>
                  <div className="text-xs text-[var(--text-muted)]">
                    {row.spec}
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <div className={row.className}>{row.sample}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 3. NOTCH TRANSITION: Porcelain -> Steel */}
      <Section surface="steel" previousSurface="porcelain" notch>
        <Container>
          <div className="space-y-3 max-w-2xl">
            <Kicker>Notch transition: Porcelain → Steel</Kicker>
            <h2 className="type-h2">
              Buttons, pill chips, kickers & cut-corner frames
            </h2>
            <p className="type-body text-[var(--text-secondary)]">
              Primary buttons use --red-ink (#C8101A) with a 180ms hover fill to
              #ED1C24 and a 45° top-right cut corner (--cut: 10px). Filter chips
              are full pills.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <CutFrame innerClassName="p-6 md:p-8 space-y-6">
              <h3 className="type-h3">Button variants & sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">Primary button (#C8101A)</Button>
                <Button variant="secondary">Secondary button</Button>
                <Button variant="text">Text link button</Button>
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-[var(--border)]">
                <Button variant="primary" size="sm">
                  Small (h-10)
                </Button>
                <Button variant="primary" size="default">
                  Default (h-12)
                </Button>
                <Button variant="primary" size="lg">
                  Large (h-13)
                </Button>
              </div>
            </CutFrame>

            <CutFrame innerClassName="p-6 md:p-8 space-y-6">
              <h3 className="type-h3">Full-pill chips & kickers</h3>
              <div className="flex flex-wrap gap-2">
                <Chip active>All work (Active pill)</Chip>
                <Chip>Websites</Chip>
                <Chip>E-commerce</Chip>
                <Chip>AI & automation</Chip>
                <Chip>Paid ads</Chip>
                <Chip>Social media</Chip>
              </div>
              <div className="pt-4 border-t border-[var(--border)] space-y-3">
                <Kicker>Standard section kicker (sentence case)</Kicker>
                <div className="flex items-center gap-4 text-xs font-medium">
                  <span className="inline-flex items-center gap-1.5 text-[#16A34A]">
                    <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
                    Success (#16A34A)
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#D97706]">
                    <span className="h-2 w-2 rounded-full bg-[#D97706]" />
                    Warning (#D97706)
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#DC2626]">
                    <span className="h-2 w-2 rounded-full bg-[#DC2626]" />
                    Danger (#DC2626)
                  </span>
                </div>
              </div>
            </CutFrame>
          </div>
        </Container>
      </Section>

      {/* 4. NOTCH TRANSITION: Steel -> Graphite */}
      <Section surface="graphite" previousSurface="steel" notch grid>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <Kicker>Notch transition: Steel → Graphite</Kicker>
              <h2 className="type-h2 text-white">
                CutFrame sizes & disciplined liquid glass
              </h2>
              <p className="type-body text-[#A7ACB8]">
                Liquid glass is restricted to four places across the entire
                site: the scrolled header pill, the hero Growth Console, the
                booking panel, and the mobile sticky bottom bar.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-2">
                <CutFrame cutSize="sm" innerClassName="p-4">
                  <div className="font-metric text-sm text-white">--cut-sm</div>
                  <div className="text-xs text-[#A7ACB8]">10px top-right</div>
                </CutFrame>
                <CutFrame cutSize="default" innerClassName="p-4">
                  <div className="font-metric text-sm text-white">--cut</div>
                  <div className="text-xs text-[#A7ACB8]">14px top-right</div>
                </CutFrame>
                <CutFrame cutSize="lg" innerClassName="p-4">
                  <div className="font-metric text-sm text-white">--cut-lg</div>
                  <div className="text-xs text-[#A7ACB8]">22px top-right</div>
                </CutFrame>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(237,28,36,0.24)_0%,rgba(90,11,16,0.08)_50%,transparent_75%)] blur-2xl"
              />
              <CutFrame
                cutSize="lg"
                glass="dark"
                innerClassName="p-6 md:p-8 space-y-4"
              >
                <div className="flex items-center justify-between text-xs text-[#A7ACB8]">
                  <span className="inline-flex items-center gap-2 text-white font-medium">
                    <span className="h-2 w-2 rounded-full bg-[#16A34A]" />
                    Growth Console Glass Preview
                  </span>
                  <span className="font-metric">01 / 04</span>
                </div>
                <div className="pt-2">
                  <div className="font-metric text-5xl text-white">91</div>
                  <div className="mt-1 font-display text-lg font-medium text-white">
                    Custom-coded builds shipped
                  </div>
                  <p className="mt-1 text-sm text-[#A7ACB8]">
                    1,053 contributions in the last 12 months across 91 Next.js,
                    React, Node.js and Flutter repositories.
                  </p>
                </div>
              </CutFrame>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. NOTCH TRANSITION: Graphite -> Signal Red (with Outlined Monogram Watermark & 4.38:1 Rule) */}
      <Section
        surface="red"
        previousSurface="graphite"
        notch
        watermark="monogram"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Kicker inverted className="text-white text-[19px] font-semibold">
                Notch transition: Graphite → Signal Red
              </Kicker>
              <h2 className="type-h2 text-white">
                Signal Red signature band (#ED1C24)
              </h2>
              <p className="text-[20px] font-semibold leading-snug text-white">
                White on #ED1C24 is 4.38:1 (WCAG AA large text: ≥19px bold or
                ≥24px). Smaller body copy sits inside an oxblood or graphite
                card as shown on the right.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div
                data-surface="graphite"
                className="cut-tr rounded-none bg-[#141519] p-6 border border-white/15 space-y-3"
              >
                <p className="font-display text-base font-semibold text-white">
                  Graphite card inside Signal Red band
                </p>
                <p className="text-sm text-[#A7ACB8]">
                  Small body copy (14–16px) and diagram node labels sit on
                  #141519 Graphite or #5A0B10 Oxblood panels for 13.8:1 contrast.
                </p>
                <Button href="/ai-automation-services/" variant="primary" size="sm">
                  Explore AI automation
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6. NOTCH TRANSITION: Signal Red -> Porcelain */}
      <Section
        surface="porcelain"
        previousSurface="red"
        notch
        spacing="compact"
      >
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <Kicker>Notch transition: Signal Red → Porcelain</Kicker>
              <h2 className="type-h3">
                Clean transition from Signal Red back to Warm Porcelain
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <Chip asSpan active>
                18 W1 Services
              </Chip>
              <Chip asSpan>8 W2 Services</Chip>
              <Chip asSpan>14 Industries</Chip>
              <Chip asSpan>5 Markets</Chip>
            </div>
          </div>
        </Container>
      </Section>

      {/* 7. NOTCH TRANSITION: Porcelain -> Oxblood (Final CTA Surface, Once Per Page) */}
      <Section surface="oxblood" previousSurface="porcelain" notch>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <Kicker>Notch transition: Porcelain → Oxblood (Final CTA)</Kicker>
              <h2 className="type-h2 text-white">
                Deep Oxblood (#5A0B10) — reserved for the final CTA band
              </h2>
              <p className="type-body text-[#E2C6C8] max-w-xl">
                Oxblood appears once per page at the closing conversion moment,
                paired with the compact booking panel or direct strategy call
                actions.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-wrap lg:justify-end gap-3">
              <Button href="/book-a-call/" variant="primary">
                Book a free strategy call
              </Button>
              <Button
                href={SITE_FACTS.contact.whatsappUrl}
                external
                variant="secondary"
              >
                WhatsApp our team
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
