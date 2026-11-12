"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function trackSpotlight(surface: HTMLElement) {
  let frame = 0;
  let x = 0;
  let y = 0;
  const move = (event: PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    x = event.clientX;
    y = event.clientY;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const bounds = surface.getBoundingClientRect();
      surface.style.setProperty("--studio-pointer-x", `${x - bounds.left}px`);
      surface.style.setProperty("--studio-pointer-y", `${y - bounds.top}px`);
      surface.dataset.pointerActive = "";
    });
  };
  const clear = () => {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
    delete surface.dataset.pointerActive;
  };
  surface.addEventListener("pointermove", move, { passive: true });
  surface.addEventListener("pointerleave", clear);
  return () => {
    clear();
    surface.removeEventListener("pointermove", move);
    surface.removeEventListener("pointerleave", clear);
    surface.style.removeProperty("--studio-pointer-x");
    surface.style.removeProperty("--studio-pointer-y");
  };
}

export function StudioMotion() {
  const path = usePathname();
  const wipe = useRef<HTMLDivElement>(null);
  const previous = useRef(path);

  useEffect(() => {
    const changed = previous.current !== path;
    previous.current = path;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(pointer: fine) and (min-width: 1000px)");
    let disposed = false;
    let restart = 0;
    let cleanup: (() => void) | undefined;

    const start = async () => {
      const run = ++restart;
      cleanup?.();
      cleanup = undefined;
      if (preference.matches) return;
      const [{ gsap }, { ScrollTrigger }, lenisModule] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
        desktop.matches ? import("lenis") : Promise.resolve(null),
      ]);
      if (disposed || run !== restart) return;
      gsap.registerPlugin(ScrollTrigger);

      const lenis = lenisModule ? new lenisModule.default({
        duration: 0.85,
        anchors: { offset: -95 },
        stopInertiaOnNavigate: true,
        prevent: (node) => node.hasAttribute("data-lenis-prevent") || node.tagName === "DIALOG",
      }) : null;
      const tick = (time: number) => lenis?.raf(time * 1000);
      if (lenis) {
        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add(tick);
      }

      const stage = document.querySelector<HTMLElement>("[data-hero-stage]");
      const tilt = stage?.querySelector<HTMLElement>("[data-hero-tilt]");
      let removePointer: (() => void) | undefined;
      const removeSpotlights = desktop.matches
        ? Array.from(document.querySelectorAll<HTMLElement>("[data-studio-spotlight]"), trackSpotlight)
        : [];
      const context = gsap.context(() => {
        if (changed && wipe.current) {
          gsap.fromTo(wipe.current, { scaleX: 1, autoAlpha: 1 }, {
            scaleX: 0, autoAlpha: 0, transformOrigin: "right", duration: 0.48, ease: "power3.inOut",
          });
        }
        if (stage) {
          const hero = gsap.timeline({ defaults: { ease: "power3.out" } });
          hero.from("[data-studio-hero-line]", { yPercent: 96, opacity: 0.18, stagger: 0.12, duration: 0.9 }, 0);
          hero.from("[data-hero-intro]", { y: 20, opacity: 0.2, stagger: 0.11, duration: 0.65 }, 0.18);
          hero.from("[data-hero-card]", { y: 70, scale: 0.93, opacity: 0.25, stagger: 0.14, duration: 1 }, 0.12);
          hero.from("[data-hero-slab]", { scaleX: 0, opacity: 0, duration: 1.1 }, 0.5);
          hero.from("[data-hero-float]", { y: 40, opacity: 0, stagger: 0.16, duration: 0.8 }, 0.75);
        }

        for (const group of gsap.utils.toArray<HTMLElement>("[data-studio-reveal], [data-studio-stagger]")) {
          gsap.from(group.hasAttribute("data-studio-stagger") ? group.children : group, {
            y: 32, duration: 0.7, stagger: 0.09, ease: "power2.out",
            scrollTrigger: { trigger: group, start: "top 92%", once: true },
          });
        }
        const gallery = document.querySelector("[data-studio-gallery]");
        if (gallery) {
          const cards = gallery.querySelectorAll("[data-studio-project]");
          if (cards.length) gsap.from(cards, {
            y: desktop.matches ? 84 : 32, stagger: 0.12, duration: 0.82, ease: "power3.out",
            scrollTrigger: { trigger: gallery, start: "top 91%", once: true },
          });
          for (const cover of gallery.querySelectorAll<HTMLElement>("[data-studio-cover]")) {
            if (!desktop.matches) break;
            gsap.fromTo(cover, { yPercent: -1 }, {
              yPercent: -12, ease: "none",
              scrollTrigger: { trigger: cover.closest(".studio-cover"), start: "top bottom", end: "bottom top", scrub: 0.65 },
            });
          }
        }
        const marquee = document.querySelector("[data-studio-marquee]");
        if (marquee && desktop.matches) gsap.fromTo(marquee, { xPercent: 0 }, {
          xPercent: -36, ease: "none",
          scrollTrigger: { trigger: marquee.parentElement, start: "top bottom", end: "bottom top", scrub: 0.8 },
        });
        const proofBand = document.querySelector("[data-studio-proof-band]");
        if (proofBand) {
          gsap.fromTo(proofBand, { "--studio-proof-cut": `${Math.round(window.innerWidth * 0.1)}px` }, {
            "--studio-proof-cut": "0px", ease: "none",
            scrollTrigger: { trigger: proofBand, start: "top bottom", end: "top 30%", scrub: 0.5 },
          });
          gsap.to(proofBand.querySelector("[data-studio-proof-track]"), {
            xPercent: -28, ease: "none",
            scrollTrigger: { trigger: proofBand, start: "top bottom", end: "bottom top", scrub: 0.65 },
          });
          gsap.from(proofBand.querySelector("[data-studio-proof-mark]"), {
            yPercent: 38, opacity: 0.4, ease: "none",
            scrollTrigger: { trigger: proofBand, start: "top 95%", end: "bottom 83%", scrub: 0.75 },
          });
        }
        const footerCall = document.querySelector("[data-studio-footer-cta] h2");
        if (footerCall) gsap.from(footerCall, {
          xPercent: -6, ease: "none",
          scrollTrigger: { trigger: footerCall, start: "top bottom", end: "top 55%", scrub: 0.6 },
        });
        // The home page uses flat logo surfaces, so the travelling section light only runs on interior pages.
        const lit = document.querySelector("#main > .studio-hero") ? [] : gsap.utils.toArray<HTMLElement>("[data-studio-light], #main section[data-surface], #main .studio-section");
        for (const surface of lit) {
          gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: surface, start: "top bottom", end: "bottom top", scrub: 0.65 },
          })
            .fromTo(surface, { "--studio-spread": 0.18, "--studio-light-opacity": 0.05, "--studio-light-travel": "-6%" }, {
              "--studio-spread": 1, "--studio-light-opacity": 0.9, "--studio-light-travel": "12%", duration: 0.55,
            })
            .to(surface, { "--studio-spread": 1.25, "--studio-light-opacity": 0.16, "--studio-light-travel": "27%", duration: 0.45 });
        }
        const lamp = document.querySelector("[data-studio-lamp]");
        if (lamp) {
          gsap.fromTo(lamp.querySelector(".studio-ai-light"), { scaleX: 0.12, scaleY: 0.4, opacity: 0.12 }, {
            scaleX: 1, scaleY: 1, opacity: 1, ease: "none",
            scrollTrigger: { trigger: lamp, start: "top 94%", end: "bottom 51%", scrub: 0.55 },
          });
        }
        const process = document.querySelector(".studio-process");
        if (process) gsap.fromTo(process, { "--studio-progress": 0 }, {
          "--studio-progress": 1, ease: "none",
          scrollTrigger: { trigger: process, start: "top 90%", end: "bottom 52%", scrub: 0.65 },
        });
        const network = document.querySelector("[data-studio-network]");
        if (network) ScrollTrigger.create({
          trigger: network, start: "top 92%", end: "bottom top", toggleClass: "is-flowing",
        });
        if (stage && tilt && desktop.matches) {
          const rotateX = gsap.quickTo(tilt, "rotationX", { duration: 0.55, ease: "power3.out" });
          const rotateY = gsap.quickTo(tilt, "rotationY", { duration: 0.55, ease: "power3.out" });
          const move = (event: PointerEvent) => {
            const bounds = stage.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width;
            const y = (event.clientY - bounds.top) / bounds.height;
            rotateX((0.5 - y) * 8);
            rotateY((x - 0.5) * 10);
          };
          const reset = () => { rotateX(0); rotateY(0); };
          stage.addEventListener("pointermove", move);
          stage.addEventListener("pointerleave", reset);
          removePointer = () => {
            stage.removeEventListener("pointermove", move);
            stage.removeEventListener("pointerleave", reset);
          };
          gsap.fromTo(stage, { rotationX: 16, scale: 0.92, transformPerspective: 1400, transformOrigin: "50% 0%" }, {
            rotationX: 0, scale: 1, ease: "none",
            scrollTrigger: { trigger: stage, start: "top 95%", end: "top 34%", scrub: 0.6 },
          });
        }
      });
      document.documentElement.dataset.studioMotion = "ready";
      cleanup = () => {
        delete document.documentElement.dataset.studioMotion;
        removePointer?.();
        removeSpotlights.forEach((remove) => remove());
        context.revert();
        if (lenis) {
          gsap.ticker.remove(tick);
          lenis.destroy();
        }
      };
    };
    const sync = () => { void start().catch((error: unknown) => console.error("Studio motion could not initialize", error)); };
    sync();
    preference.addEventListener("change", sync);
    desktop.addEventListener("change", sync);
    return () => {
      disposed = true;
      preference.removeEventListener("change", sync);
      desktop.removeEventListener("change", sync);
      cleanup?.();
    };
  }, [path]);

  return <div className="studio-wipe" ref={wipe} aria-hidden="true" />;
}
