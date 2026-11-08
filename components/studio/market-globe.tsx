"use client";

import { useEffect, useRef } from "react";

const markets: [number, number][] = [
  [51.05, -114.07], [38.9, -77.04], [25.2, 55.27], [-36.85, 174.76], [29.8, 71.7],
];

export function MarketGlobe() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const element = canvas.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let frame = 0;
    let visible = false;
    let destroy: (() => void) | undefined;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) {
        cancelAnimationFrame(frame);
        destroy?.();
        destroy = undefined;
        delete element.dataset.ready;
        return;
      }
      void import("cobe").then(({ default: createGlobe }) => {
        if (disposed || !visible || destroy || !element.isConnected) return;
        const size = element.clientWidth;
        const ratio = Math.min(window.devicePixelRatio, 1.5);
        const globe = createGlobe(element, {
          width: size * ratio, height: size * ratio, devicePixelRatio: ratio,
          phi: 0.1, theta: 0.22, dark: 1, diffuse: 1.4, mapSamples: 13000,
          mapBrightness: 4, baseColor: [0.29, 0.31, 0.35], markerColor: [1, 0.18, 0.23],
          glowColor: [0.20, 0.10, 0.13], opacity: 0.96,
          markers: markets.map((location) => ({ location, size: 0.07 })),
        });
        if (!globe) return;
        destroy = () => globe.destroy();
        element.dataset.ready = "true";
        let start = 0;
        const draw = (time: number) => {
          start ||= time;
          globe.update({ phi: 0.1 + (time - start) * 0.00022 });
          frame = requestAnimationFrame(draw);
        };
        if (!preference.matches) frame = requestAnimationFrame(draw);
      }).catch(() => { /* The static globe and market links remain available. */ });
    }, { rootMargin: "140px" });
    observer.observe(element);
    const stop = () => { if (preference.matches) cancelAnimationFrame(frame); };
    preference.addEventListener("change", stop);
    return () => {
      disposed = true;
      observer.disconnect();
      preference.removeEventListener("change", stop);
      cancelAnimationFrame(frame);
      destroy?.();
    };
  }, []);

  return (
    <div className="studio-globe" aria-hidden="true">
      <div className="studio-globe-fallback" />
      <canvas ref={canvas} />
    </div>
  );
}
