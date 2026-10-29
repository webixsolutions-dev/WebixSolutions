import * as React from "react";
import Link from "next/link";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { Button, ArrowUpRightIcon } from "@/components/ui/button";
import { HOME_CONTENT } from "@/content/home";

function MiniFlowDiagramSvg({
  id,
  title,
  nodes,
}: {
  id: string;
  title: string;
  nodes: readonly [string, string, string];
}) {
  const titleId = `flow-title-${id}`;
  const descId = `flow-desc-${id}`;

  return (
    <svg
      viewBox="0 0 360 76"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
      className="w-full h-auto"
    >
      <title id={titleId}>{title} workflow diagram</title>
      <desc id={descId}>
        Three-step flow from {nodes[0]} to {nodes[1]} to {nodes[2]}.
      </desc>

      {/* Connecting Lines */}
      <line
        x1="108"
        y1="38"
        x2="126"
        y2="38"
        stroke="#ED1C24"
        strokeWidth="1.5"
      />
      <polygon points="124,34 130,38 124,42" fill="#ED1C24" />

      <line
        x1="234"
        y1="38"
        x2="252"
        y2="38"
        stroke="#ED1C24"
        strokeWidth="1.5"
      />
      <polygon points="250,34 256,38 250,42" fill="#ED1C24" />

      {/* Node 1 */}
      <rect
        x="2"
        y="12"
        width="106"
        height="52"
        rx="4"
        fill="#1C1E24"
        stroke="rgba(255,255,255,0.16)"
      />
      <text
        x="55"
        y="34"
        textAnchor="middle"
        fill="#A7ACB8"
        fontSize="9"
        fontFamily="sans-serif"
      >
        Trigger
      </text>
      <text
        x="55"
        y="49"
        textAnchor="middle"
        fill="#F5F6F8"
        fontSize="10"
        fontWeight="600"
        fontFamily="sans-serif"
      >
        {nodes[0]}
      </text>

      {/* Node 2 (Active AI Node) */}
      <rect
        x="128"
        y="12"
        width="106"
        height="52"
        rx="4"
        fill="#1C1E24"
        stroke="#ED1C24"
        strokeWidth="1.5"
      />
      <text
        x="181"
        y="34"
        textAnchor="middle"
        fill="#ED1C24"
        fontSize="9"
        fontWeight="600"
        fontFamily="sans-serif"
      >
        AI Agent
      </text>
      <text
        x="181"
        y="49"
        textAnchor="middle"
        fill="#F5F6F8"
        fontSize="10"
        fontWeight="600"
        fontFamily="sans-serif"
      >
        {nodes[1]}
      </text>

      {/* Node 3 */}
      <rect
        x="254"
        y="12"
        width="104"
        height="52"
        rx="4"
        fill="#1C1E24"
        stroke="rgba(255,255,255,0.16)"
      />
      <text
        x="306"
        y="34"
        textAnchor="middle"
        fill="#16A34A"
        fontSize="9"
        fontWeight="600"
        fontFamily="sans-serif"
      >
        Outcome
      </text>
      <text
        x="306"
        y="49"
        textAnchor="middle"
        fill="#F5F6F8"
        fontSize="10"
        fontWeight="600"
        fontFamily="sans-serif"
      >
        {nodes[2]}
      </text>
    </svg>
  );
}

/**
 * Home Section 4 — AI Systems on Signal Red (#ED1C24) with the outlined Webix monogram watermark.
 * Contrast compliance (Fix #3):
 * - Direct white text on #ED1C24 is >= 20px bold/semibold (4.38:1 passes WCAG AA large text).
 * - All smaller body copy and the 3 mini SVG flow diagrams sit inside #141519 Graphite panels (13.8:1 contrast).
 */
export function AiSystemsSection() {
  return (
    <Section
      surface="red"
      previousSurface="graphite"
      notch
      watermark="monogram"
    >
      <Container>
        <div className="max-w-3xl space-y-4">
          <Kicker inverted className="text-white text-[19px] font-semibold">
            {HOME_CONTENT.aiSystemsSection.kicker}
          </Kicker>
          <h2 className="type-h2 text-white">
            {HOME_CONTENT.aiSystemsSection.h2}
          </h2>
          <p className="text-[20px] md:text-[22px] font-semibold leading-snug text-white">
            {HOME_CONTENT.aiSystemsSection.lead}
          </p>
        </div>

        {/* 3 Graphite Panels containing the inline SVG flow diagrams */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {HOME_CONTENT.aiSystemsSection.systems.map((sys, idx) => (
            <article
              key={sys.id}
              data-surface="graphite"
              className="cut-tr bg-[#141519] border border-white/20 p-6 md:p-7 flex flex-col justify-between gap-6 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#A7ACB8]">
                  <span className="font-metric text-sm text-[#ED1C24]">
                    0{idx + 1}
                  </span>
                  <span>Production architecture</span>
                </div>

                <h3 className="type-h3 text-white">{sys.title}</h3>

                {/* Inline Accessible SVG Mini Flow Diagram */}
                <div className="rounded-md bg-[#141519] pt-1">
                  <MiniFlowDiagramSvg
                    id={sys.id}
                    title={sys.title}
                    nodes={sys.nodes}
                  />
                </div>

                <p className="text-sm text-[#A7ACB8] leading-relaxed">
                  {sys.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href={sys.href}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#ED1C24] transition-colors"
                >
                  <span>Explore this AI system</span>
                  <ArrowUpRightIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 bg-[#141519] cut-tr p-6 border border-white/15">
          <p className="text-base font-medium text-white">
            Want to automate lead replies, WhatsApp orders or CRM data entry in
            10 days?
          </p>
          <Button href="/ai-automation-services/" variant="primary">
            See AI automation services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
