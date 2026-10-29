"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/layout/social-icons";
import { SITE_FACTS } from "@/content/site-facts";

/**
 * Sticky Mobile Bottom Bar (< 768px) — Allowed liquid-glass surface #4 in docs/05.
 * Appears ONLY after the hero CTAs ([data-hero-ctas]) scroll out of view via IntersectionObserver,
 * so it never covers hero content.
 */
export function MobileStickyBar() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const target = document.querySelector("[data-hero-ctas]");

    if (target && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          // Show sticky bar only when hero CTAs have scrolled above the viewport
          const scrolledPastHeroCtas =
            !entry.isIntersecting && entry.boundingClientRect.bottom < 0;
          setVisible(scrolledPastHeroCtas);
        },
        {
          threshold: 0,
        }
      );

      observer.observe(target);
      return () => observer.disconnect();
    }

    // Fallback for pages without [data-hero-ctas]: show after scrolling 420px
    const onScroll = () => {
      setVisible(window.scrollY > 420);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 p-2.5 md:hidden transition-all duration-250 ease-out",
        visible
          ? "translate-y-0 opacity-100 pointer-events-none"
          : "translate-y-full opacity-0 pointer-events-none"
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center gap-2 rounded-xl glass-surface-dark p-2",
          visible ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <Button
          href="/book-a-call/"
          variant="primary"
          size="sm"
          tabIndex={visible ? 0 : -1}
          className="flex-1"
        >
          Book a call
        </Button>
        <a
          href={SITE_FACTS.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={visible ? 0 : -1}
          className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-4 text-sm font-medium text-white hover:border-[#ED1C24] transition-colors"
        >
          <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
