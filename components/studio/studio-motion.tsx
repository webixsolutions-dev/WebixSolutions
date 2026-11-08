"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function StudioMotion() {
  const path = usePathname();
  const wipe = useRef<HTMLDivElement>(null);
  const previous = useRef(path);

  useEffect(() => {
    const changed = previous.current !== path;
    previous.current = path;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches) return;

    let disposed = false;
    let cleanup: (() => void) | undefined;
    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(([{ gsap }, { ScrollTrigger }]) => {
      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);
      const context = gsap.context(() => {
        if (changed && wipe.current) {
          gsap.fromTo(wipe.current, { scaleX: 1, autoAlpha: 1 }, {
            scaleX: 0, autoAlpha: 0, transformOrigin: "right", duration: 0.38, ease: "power3.inOut",
          });
        }

        const headings = gsap.utils.toArray<HTMLElement>("[data-studio-hero-line]");
        gsap.from(headings, { yPercent: 78, opacity: 0.15, stagger: 0.09, duration: 0.75, ease: "power3.out" });

        const responsive = gsap.matchMedia();
        responsive.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
          const gallery = document.querySelector("[data-studio-gallery]");
          if (gallery) {
            gsap.to(gallery.querySelectorAll("[data-studio-cover]"), {
              yPercent: -10, ease: "none",
              scrollTrigger: { trigger: gallery, start: "top bottom", end: "bottom top", scrub: 0.7 },
            });
          }
          const line = document.querySelector("[data-studio-marquee]");
          if (line) {
            gsap.fromTo(line, { x: 0 }, {
              x: -120, ease: "none",
              scrollTrigger: { trigger: line, start: "top bottom", end: "bottom top", scrub: true },
            });
          }
        });
        return () => responsive.revert();
      });
      cleanup = () => context.revert();
    }).catch(() => { /* Content remains visible if motion cannot load. */ });
    const stop = () => { if (preference.matches) cleanup?.(); };
    preference.addEventListener("change", stop);
    return () => {
      disposed = true;
      preference.removeEventListener("change", stop);
      cleanup?.();
    };
  }, [path]);

  return <div className="studio-wipe" ref={wipe} aria-hidden="true" />;
}
