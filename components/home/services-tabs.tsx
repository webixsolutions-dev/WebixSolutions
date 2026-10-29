"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Kicker } from "@/components/ui/kicker";
import { CutFrame } from "@/components/ui/cut-frame";
import { Button, ArrowUpRightIcon } from "@/components/ui/button";
import { HOME_CONTENT } from "@/content/home";
import type { MegaMenuColumn } from "@/content/navigation";
import type { ServiceCategory } from "@/content/services";

export interface ServicesTabsProps {
  columns: MegaMenuColumn[];
}

/**
 * Home Section 3 — Services by Outcome on Carbon Graphite (#141519).
 * All 4 tab panels (Build / Grow / AI / Create) are rendered in the initial HTML
 * so search engines and AI crawlers read every service link and outcome.
 */
export function ServicesTabs({ columns }: ServicesTabsProps) {
  const [activeCat, setActiveCat] = React.useState<ServiceCategory>("Build");

  return (
    <Section surface="graphite" previousSurface="porcelain" notch grid>
      <Container>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <Kicker>{HOME_CONTENT.servicesSection.kicker}</Kicker>
            <h2 className="type-h2 text-white">
              {HOME_CONTENT.servicesSection.h2}
            </h2>
            <p className="type-body text-[#A7ACB8]">
              {HOME_CONTENT.servicesSection.lead}
            </p>
          </div>

          {/* Accessible Category Tabs */}
          <div
            role="tablist"
            aria-label="Service categories"
            className="inline-flex flex-wrap gap-2 rounded-lg border border-white/12 bg-[#1C1E24] p-1.5"
          >
            {columns.map((col) => {
              const isSelected = col.category === activeCat;
              return (
                <button
                  key={col.category}
                  id={`tab-${col.category}`}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls={`panel-${col.category}`}
                  onClick={() => setActiveCat(col.category)}
                  className={cn(
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors duration-150",
                    isSelected
                      ? "bg-[#C8101A] text-white"
                      : "text-[#A7ACB8] hover:text-white"
                  )}
                >
                  <span>{col.heading}</span>
                  <span className="ml-1.5 text-xs opacity-75">
                    ({col.items.length})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* All 4 Tab Panels Rendered in DOM */}
        <div className="mt-10">
          {columns.map((col) => {
            const isSelected = col.category === activeCat;
            return (
              <div
                key={col.category}
                id={`panel-${col.category}`}
                role="tabpanel"
                aria-labelledby={`tab-${col.category}`}
                className={cn(!isSelected && "hidden")}
              >
                <div className="mb-4 flex items-center justify-between text-xs text-[#A7ACB8]">
                  <span>
                    <strong className="text-white font-medium">
                      {col.heading}:
                    </strong>{" "}
                    {col.subtitle}
                  </span>
                  <Link
                    href="/services/"
                    className="text-white hover:text-[#ED1C24] underline underline-offset-4"
                  >
                    See all services
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {col.items.map((item) => (
                    <CutFrame
                      key={item.href}
                      className="hover:bg-[#ED1C24]"
                      innerClassName="p-6 flex flex-col justify-between gap-4"
                    >
                      <div className="space-y-2">
                        <h3 className="type-h3 text-white">
                          <Link
                            href={item.href}
                            className="hover:text-[#ED1C24] transition-colors"
                          >
                            {item.label}
                          </Link>
                        </h3>
                        {item.description && (
                          <p className="text-sm text-[#A7ACB8] leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="pt-2 border-t border-white/8">
                        <Link
                          href={item.href}
                          className="group inline-flex items-center gap-2 text-xs font-medium text-white hover:text-[#ED1C24] transition-colors"
                        >
                          <span>Service details & scope</span>
                          <ArrowUpRightIcon className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </CutFrame>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-[#A7ACB8]">
            Need a combined website, marketing and AI scope? We can package them
            into one monthly plan.
          </p>
          <Button href="/services/" variant="secondary" size="sm">
            Explore all 18 services
          </Button>
        </div>
      </Container>
    </Section>
  );
}
