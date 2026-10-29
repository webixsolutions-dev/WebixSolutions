"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { CutFrame } from "@/components/ui/cut-frame";
import { ClientSlotTime } from "@/components/home/client-slot-time";
import type { NextSlotResult } from "@/lib/booking/next-slot";

export interface GrowthSignalItem {
  id: string;
  kicker: string;
  metricValue?: string;
  title: string;
  detail: string;
  sourceLabel: string;
  href: string;
  linkLabel: string;
  slotData?: NextSlotResult;
  confirmed: boolean;
}

export interface GrowthConsoleProps {
  signals: GrowthSignalItem[];
}

/**
 * Right-side hero proof panel (docs/05-design-system.md).
 * - All 4 active signals are server-rendered in a <ul> list so crawlers read every signal.
 * - Cross-fades every 4.5s on the client, pauses on hover/focus, provides dot controls
 *   and Left/Right arrow keyboard navigation.
 */
export function GrowthConsole({ signals }: GrowthConsoleProps) {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (paused || signals.length <= 1) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % signals.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused, signals.length]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % signals.length);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + signals.length) % signals.length);
    }
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Proof at a glance"
      className="w-full max-w-[440px] lg:ml-auto animate-hero-console"
    >
      <CutFrame
        cutSize="lg"
        glass="dark"
        innerClassName="p-6 md:p-7 flex flex-col justify-between min-h-[330px]"
      >
        {/* Console Header Bar */}
        <div className="flex items-center justify-between border-b border-white/12 pb-3.5 text-xs text-[#A7ACB8]">
          <span className="inline-flex items-center gap-2 font-medium text-white">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#16A34A]"
            />
            <span>Proof at a glance</span>
          </span>
          <span className="font-metric text-white">
            0{activeIndex + 1} / 0{signals.length}
          </span>
        </div>

        {/* All 4 Signals Rendered in a Server-Rendered <ul> List */}
        <ul
          aria-live="polite"
          className="relative my-5 grid grid-cols-1 grid-rows-1"
        >
          {signals.map((sig, idx) => {
            const isActive = idx === activeIndex;
            return (
              <li
                key={sig.id}
                aria-hidden={!isActive}
                className={cn(
                  "col-start-1 row-start-1 transition-opacity duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-between space-y-3",
                  isActive
                    ? "opacity-100 z-10 pointer-events-auto"
                    : "opacity-0 z-0 pointer-events-none select-none"
                )}
              >
                <div className="text-xs font-medium text-[#ED1C24]">
                  {sig.kicker}
                </div>

                {sig.slotData ? (
                  sig.slotData.mode === "slot" &&
                  sig.slotData.slotIso &&
                  sig.slotData.easternTimeFormatted ? (
                    <div className="space-y-2">
                      <ClientSlotTime
                        slotIso={sig.slotData.slotIso}
                        easternFallback={sig.slotData.easternTimeFormatted}
                      />
                      <p className="text-sm text-[#A7ACB8] leading-relaxed">
                        {sig.detail}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="font-display text-xl md:text-2xl font-semibold text-white">
                        {sig.slotData.meetingTitle}
                      </div>
                      <p className="text-sm text-[#A7ACB8] leading-relaxed">
                        {sig.slotData.fallbackMessage}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 pt-1 text-xs font-medium text-white">
                        <a
                          href={sig.slotData.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={isActive ? 0 : -1}
                          className="underline underline-offset-4 hover:text-[#ED1C24]"
                        >
                          WhatsApp {sig.slotData.phoneDisplay}
                        </a>
                        <a
                          href={`mailto:${sig.slotData.email}`}
                          tabIndex={isActive ? 0 : -1}
                          className="underline underline-offset-4 hover:text-[#ED1C24]"
                        >
                          {sig.slotData.email}
                        </a>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="space-y-1.5">
                    {sig.metricValue && (
                      <div className="font-metric text-4xl md:text-5xl text-white">
                        {sig.metricValue}
                      </div>
                    )}
                    <div className="font-display text-lg font-semibold text-white">
                      {sig.title}
                    </div>
                    <p className="text-sm text-[#A7ACB8] leading-relaxed">
                      {sig.detail}
                    </p>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between text-xs text-[#A7ACB8]">
                  <span>{sig.sourceLabel}</span>
                  <Link
                    href={sig.href}
                    tabIndex={isActive ? 0 : -1}
                    className="font-medium text-white hover:text-[#ED1C24] transition-colors underline underline-offset-4"
                  >
                    {sig.linkLabel}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Console Footer: Accessible Dot Controls */}
        <div className="flex items-center justify-between border-t border-white/12 pt-3.5">
          <div
            role="tablist"
            aria-label="Select proof signal"
            className="flex items-center gap-2"
          >
            {signals.map((sig, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={sig.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`Signal ${idx + 1}: ${sig.kicker}`}
                  onClick={() => setActiveIndex(idx)}
                  className={cn(
                    "h-2.5 transition-all duration-200 rounded-full",
                    isSelected
                      ? "w-7 bg-[#ED1C24]"
                      : "w-2.5 bg-white/25 hover:bg-white/50"
                  )}
                />
              );
            })}
          </div>
        </div>
      </CutFrame>
    </div>
  );
}
