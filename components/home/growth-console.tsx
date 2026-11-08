"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { useEffect, useId, useState, useSyncExternalStore } from "react";
import { ClientSlotTime } from "@/components/home/client-slot-time";
import type { GrowthSignalItem } from "@/content/home-proof";

export type { GrowthSignalItem } from "@/content/home-proof";

const motionPreference = "(prefers-reduced-motion: reduce)";

function prefersReducedMotion() {
  return window.matchMedia(motionPreference).matches;
}

function subscribeToMotionPreference(callback: () => void) {
  const media = window.matchMedia(motionPreference);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

export function GrowthConsole({ signals }: { signals: GrowthSignalItem[] }) {
  const id = useId();
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const reduced = useSyncExternalStore(subscribeToMotionPreference, prefersReducedMotion, () => false);

  useEffect(() => {
    if (!playing || hovered || focused || reduced || signals.length < 2) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % signals.length), 7000);
    return () => window.clearInterval(timer);
  }, [playing, hovered, focused, reduced, signals.length]);

  const select = (index: number) => {
    setActive((index + signals.length) % signals.length);
    setPlaying(false);
  };

  return (
    <div className="studio-growth-console studio-cut-frame" role="region" aria-roledescription="carousel" aria-label="Proof at a glance"
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)} onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}>
      <div className="growth-console-header">
        <span><i aria-hidden="true" /> Proof at a glance</span>
        <span className="growth-console-count">{String(active + 1).padStart(2, "0")} / {String(signals.length).padStart(2, "0")}</span>
      </div>
      <div className="growth-console-panels" aria-live={playing && !reduced ? "off" : "polite"}>
        {signals.map((signal, index) => (
          <article key={signal.id} id={`${id}-${index}`} className="growth-console-panel" aria-hidden={index !== active} inert={index !== active} aria-roledescription="slide" aria-label={`${index + 1} of ${signals.length}`}>
            <div className="growth-console-image">
              <Image src={signal.image} fill sizes="(max-width: 740px) 92vw, (max-width: 1100px) 49vw, 610px" loading={index === 0 ? "eager" : "lazy"} fetchPriority={index === 0 ? "high" : undefined} alt="" />
            </div>
            <div className="growth-console-copy">
              <p className="growth-console-kicker">{signal.kicker}</p>
              <div className="growth-console-title">
                {signal.metricValue && <strong className="growth-console-metric">{signal.metricValue}</strong>}
                <h2>{signal.title}</h2>
              </div>
              {signal.slotData?.slotIso && signal.slotData.easternTimeFormatted && <ClientSlotTime slotIso={signal.slotData.slotIso} easternFallback={signal.slotData.easternTimeFormatted} />}
              <p className="growth-console-detail">{signal.detail}</p>
              <div className="growth-console-meta"><span>{signal.sourceLabel}</span>
                {signal.href.startsWith("/#")
                  ? <a href={signal.href.slice(1)}>{signal.linkLabel} <ArrowUpRight size={14} /></a>
                  : <Link href={signal.href}>{signal.linkLabel} <ArrowUpRight size={14} /></Link>}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="growth-console-controls" onKeyDown={(event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        select(active + (event.key === "ArrowRight" ? 1 : -1));
      }}>
        <div className="growth-console-dots" role="group" aria-label="Proof cards">
          {signals.map((signal, index) => <button key={signal.id} type="button" aria-label={`Show ${signal.kicker}`} aria-controls={`${id}-${index}`} aria-pressed={index === active} onClick={() => select(index)}><i /></button>)}
        </div>
        <div className="growth-console-nav">
          {!reduced && <button type="button" aria-label={playing ? "Pause rotation" : "Play rotation"} onClick={() => setPlaying(!playing)}>{playing ? <Pause size={15} /> : <Play size={15} />}</button>}
          <button type="button" aria-label="Previous proof card" onClick={() => select(active - 1)}><ArrowLeft size={16} /></button>
          <button type="button" aria-label="Next proof card" onClick={() => select(active + 1)}><ArrowRight size={16} /></button>
        </div>
      </div>
    </div>
  );
}
