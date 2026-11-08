"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/layout/social-icons";
import { SITE_FACTS } from "@/content/site-facts";

export function MobileStickyBar() {
  const [visible, setVisible] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const hero = document.querySelector("[data-hero-ctas]");
      setVisible(hero ? hero.getBoundingClientRect().bottom < 0 : window.scrollY > 420);
    };
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [path]);

  return (
    <div className="studio-mobile-sticky" data-visible={visible} inert={!visible}>
      <Button href="/book-a-call/" variant="primary" className="flex-1">Book a free call</Button>
      {path === "/contact-us/" && (
        <a className="studio-sticky-contact" href={SITE_FACTS.contact.whatsappUrl} aria-label="Message Webix Solutions on WhatsApp" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="size-5" />
        </a>
      )}
    </div>
  );
}
