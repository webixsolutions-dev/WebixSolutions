"use client";

import Link from "next/link";
import { ArrowUpRight, Move } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createEarthRenderer } from "./earth-renderer";

const markets = [
  { lat: 51.05, lon: -114.07, code: "CA", name: "Canada", href: "/locations/canada/" },
  { lat: 38.9, lon: -77.04, code: "US", name: "United States", href: "/locations/united-states/" },
  { lat: 25.2, lon: 55.27, code: "AE", name: "United Arab Emirates", href: "/locations/uae/" },
  { lat: -36.85, lon: 174.76, code: "NZ", name: "New Zealand", href: "/locations/new-zealand/" },
  { lat: 29.8, lon: 71.7, code: "PK", name: "Pakistan", href: "/locations/pakistan/" },
];

export function MarketGlobe() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const focusMarket = useRef<(market: (typeof markets)[number]) => void>(() => {});
  const [active, setActive] = useState<(typeof markets)[number] | null>(null);

  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    let disposed = false;
    let visible = false;
    let loading = false;
    let frame = 0;
    let lastPaint = 0;
    let render: ReturnType<typeof createEarthRenderer>;
    let longitude = 13;
    let latitude = 19;
    let targetLon = 13;
    let targetLat = 19;
    let panLon = 0;
    let panLat = 0;
    let scrollLon = 0;
    let hoverLon = 0;
    let hoverLat = 0;
    let selected: (typeof markets)[number] | null = null;
    let pointer: { id: number; x: number; y: number } | null = null;

    const paint = (now: number) => {
      frame = 0;
      if (!render || !visible) return;
      if (now - lastPaint < 24) {
        frame = requestAnimationFrame(paint);
        return;
      }
      lastPaint = now;
      const deltaLon = targetLon - longitude;
      const deltaLat = targetLat - latitude;
      const easing = reduced.matches ? 1 : 0.24;
      const settled = Math.abs(deltaLon) + Math.abs(deltaLat) < 0.08;
      longitude = settled ? targetLon : longitude + deltaLon * easing;
      latitude = settled ? targetLat : latitude + deltaLat * easing;
      render(longitude, latitude, markets, selected?.code ?? null);
      element.dataset.earthLongitude = longitude.toFixed(2);
      element.dataset.earthReady = "true";
      if (!settled && !reduced.matches) frame = requestAnimationFrame(paint);
    };

    const update = () => {
      targetLon = selected ? selected.lon : 13 + scrollLon + panLon + hoverLon;
      targetLat = selected ? selected.lat : Math.max(-68, Math.min(68, 19 + panLat + hoverLat));
      if (!frame && render && visible) frame = requestAnimationFrame(paint);
    };

    const scroll = () => {
      if (!visible || reduced.matches || selected || pointer) return;
      const section = element.closest("section");
      if (!section) return;
      const { top, height } = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - top) / (window.innerHeight + height)));
      scrollLon = (progress - 0.42) * 150;
      update();
    };

    const pointerDown = (event: PointerEvent) => {
      if (pointer || event.button !== 0) return;
      if (selected) {
        panLon = longitude - 13 - scrollLon;
        panLat = latitude - 19;
        selected = null;
        setActive(null);
      }
      hoverLon = hoverLat = 0;
      pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
      element.setPointerCapture(event.pointerId);
    };
    const pointerMove = (event: PointerEvent) => {
      if (pointer?.id === event.pointerId) {
        panLon -= (event.clientX - pointer.x) * 0.48;
        panLat = Math.max(-87, Math.min(49, panLat + (event.clientY - pointer.y) * 0.35));
        pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
      } else {
        if (reduced.matches || selected || !finePointer.matches) return;
        const bounds = element.getBoundingClientRect();
        hoverLon = ((event.clientX - bounds.left) / bounds.width - 0.5) * 34;
        hoverLat = ((event.clientY - bounds.top) / bounds.height - 0.5) * 15;
      }
      update();
    };
    const pointerEnd = (event: PointerEvent) => {
      if (pointer?.id === event.pointerId) pointer = null;
      hoverLon = hoverLat = 0;
      update();
    };
    focusMarket.current = (market) => {
      if (selected?.code === market.code) {
        selected = null;
        setActive(null);
      } else {
        selected = market;
        longitude += Math.round((market.lon - longitude) / 360) * 360;
        setActive(market);
      }
      update();
    };

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) {
        cancelAnimationFrame(frame);
        frame = 0;
        return;
      }
      if (!render && !loading) {
        loading = true;
        const texture = new Image();
        texture.src = "/images/studio/earth-texture.webp";
        void texture.decode().then(() => {
          if (disposed) return;
          render = createEarthRenderer(element, texture);
          update();
        }).catch(() => { /* The satellite image remains visible. */ });
      }
      scroll();
      update();
    }, { rootMargin: "100px" });
    observer.observe(element);
    window.addEventListener("scroll", scroll, { passive: true });
    element.addEventListener("pointerdown", pointerDown);
    element.addEventListener("pointermove", pointerMove);
    element.addEventListener("pointerup", pointerEnd);
    element.addEventListener("pointercancel", pointerEnd);
    element.addEventListener("pointerleave", pointerEnd);
    return () => {
      disposed = true;
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scroll);
      element.removeEventListener("pointerdown", pointerDown);
      element.removeEventListener("pointermove", pointerMove);
      element.removeEventListener("pointerup", pointerEnd);
      element.removeEventListener("pointercancel", pointerEnd);
      element.removeEventListener("pointerleave", pointerEnd);
    };
  }, []);

  return (
    <div className="studio-earth">
      <figure className="studio-earth-stage">
        <div className="studio-globe">
          <div className="studio-globe-fallback" aria-hidden="true" />
          <canvas ref={canvas} role="img" aria-label="Satellite view of Earth showing locations in our markets" />
        </div>
        <figcaption><span><Move size={14} /> Drag to explore</span><span>Earth imagery by NASA</span></figcaption>
      </figure>
      <div className="studio-market-picker" aria-label="Focus the globe on a market">
        {markets.map((market) => <button key={market.code} type="button" aria-pressed={active?.code === market.code} aria-label={`Focus on ${market.name}`} onClick={() => focusMarket.current(market)}>{market.code}</button>)}
      </div>
      <div className="studio-market-result" aria-live="polite">
        {active?.href ? <Link href={active.href}>{active.name} <ArrowUpRight size={15} /></Link> : active?.name ?? "Select a market to explore."}
      </div>
    </div>
  );
}
