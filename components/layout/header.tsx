"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { type KeyboardEvent as ReactKeyboardEvent, useEffect, useRef, useState } from "react";
import { PRIMARY_NAV_LINKS, type MegaMenuColumn, type NavLinkItem } from "@/content/navigation";

type Panel = "services" | "industries";
type HeaderProps = { megaMenuColumns: MegaMenuColumn[]; industries?: NavLinkItem[]; simplified?: boolean };

const featured = {
  services: { title: "AI search (AEO & GEO)", copy: "Make it easier for search and AI tools to understand what your business offers.", href: "/seo-services/", image: "/images/studio/proof-ai-editorial.webp" },
  industries: { title: "Camz Cleaning", copy: "A booking website for a Calgary home-service business.", href: "/our-work/camz-cleaning-booking/", image: "/images/studio/camz.webp" },
};

function moveFocus(event: ReactKeyboardEvent<HTMLElement>, axis: "vertical" | "horizontal") {
  const keys = axis === "vertical" ? ["ArrowUp", "ArrowDown"] : ["ArrowLeft", "ArrowRight"];
  if (!keys.includes(event.key) && !["Home", "End"].includes(event.key)) return;
  const items = [...event.currentTarget.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")];
  const current = items.indexOf(document.activeElement as HTMLElement);
  if (current < 0) return;
  event.preventDefault();
  const index = event.key === "Home" ? 0 : event.key === "End" ? items.length - 1 :
    (current + (event.key === keys[0] ? -1 : 1) + items.length) % items.length;
  items[index]?.focus();
}

function Navigation({ megaMenuColumns, industries = [], simplified, path }: HeaderProps & { path: string }) {
  const [panel, setPanel] = useState<Panel | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [position, setPosition] = useState({ floating: false, hidden: false });
  const reduced = useReducedMotion();
  const header = useRef<HTMLElement>(null);
  const menu = useRef<HTMLElement>(null);
  const mobileMenu = useRef<HTMLDialogElement>(null);
  const mobileToggle = useRef<HTMLButtonElement>(null);
  const focusPanel = useRef(false);

  useEffect(() => {
    let last: number | undefined;
    const sync = () => {
      const y = Math.max(0, window.scrollY);
      const floating = y > 80;
      const difference = last === undefined ? 0 : y - last;
      if (last !== undefined && Math.abs(difference) < 4 && floating) return;
      last = y;
      setPosition((current) => {
        const hidden = floating && difference > 0;
        return current.floating === floating && current.hidden === hidden ? current : { floating, hidden };
      });
    };
    const frame = requestAnimationFrame(sync);
    window.addEventListener("scroll", sync, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", sync);
    };
  }, []);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1000px)");
    const close = () => {
      setPanel(null);
      mobileMenu.current?.close();
    };
    desktop.addEventListener("change", close);
    return () => desktop.removeEventListener("change", close);
  }, []);

  useEffect(() => {
    if (!panel) return;
    if (focusPanel.current) {
      menu.current?.querySelector<HTMLAnchorElement>("a[href]")?.focus();
      focusPanel.current = false;
    }
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !header.current?.contains(event.target)) setPanel(null);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      header.current?.querySelector<HTMLButtonElement>(`[data-panel-trigger="${panel}"]`)?.focus();
      setPanel(null);
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", escape);
    };
  }, [panel]);

  const displayPanel = panel ?? "services";
  const feature = featured[displayPanel];
  const showMobile = () => {
    mobileMenu.current?.showModal();
    setMobileOpen(true);
  };
  const closeMobile = (restoreFocus = true) => {
    mobileMenu.current?.close();
    if (restoreFocus) mobileToggle.current?.focus();
  };

  return (
    <header
      ref={header}
      className="studio-nav"
      data-scrolled={position.floating}
      data-hidden={position.hidden && !panel && !mobileOpen}
      onBlur={(event) => {
        if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) setPanel(null);
      }}
    >
      <div className="studio-nav-shell">
        <Link href="/" className="studio-nav-brand" aria-label="Webix Solutions home" onClick={() => setPanel(null)}>
          <Image src="/images/logo.svg" alt="" width={152} height={51} priority unoptimized />
        </Link>
        {!simplified && (
          <nav className="studio-nav-links" aria-label="Main navigation" onKeyDown={(event) => moveFocus(event, "horizontal")}>
            {PRIMARY_NAV_LINKS.filter(({ href }) => href !== "/ai-automation-services/").map(({ href, label }) => {
              const name = href === "/services/" ? "services" : href === "/industries/" ? "industries" : null;
              const active = panel === name && name !== null;
              return name ? (
                <button key={href} type="button" className="studio-nav-link" data-panel-trigger={name}
                  aria-controls="studio-mega-menu" aria-expanded={active}
                  onPointerEnter={() => { if (panel && !active) setPanel(name); }}
                  onClick={() => { if (active) setPanel(null); else setPanel(name); }}
                  onKeyDown={(event) => {
                    if (event.key !== "ArrowDown") return;
                    event.preventDefault();
                    if (active) menu.current?.querySelector<HTMLAnchorElement>("a[href]")?.focus();
                    else {
                      focusPanel.current = true;
                      setPanel(name);
                    }
                  }}
                >
                  {label} <ChevronDown size={14} />
                  {active && <motion.span layoutId="nav-indicator" className="studio-nav-indicator" transition={{ duration: reduced ? 0 : 0.24 }} />}
                </button>
              ) : (
                <Link key={href} className="studio-nav-link" href={href}
                  aria-current={path.startsWith(href) ? "page" : undefined}
                  onClick={() => setPanel(null)}>{label}</Link>
              );
            })}
          </nav>
        )}
        <div className="studio-nav-actions">
          <Link href="/book-a-call/" className="studio-button studio-nav-book" onClick={() => setPanel(null)}>Book a call <ArrowUpRight size={17} /></Link>
          {!simplified && <button ref={mobileToggle} className="studio-nav-toggle" type="button" aria-expanded={mobileOpen}
            aria-controls="studio-mobile-menu" aria-label="Open menu" onClick={showMobile}><Menu size={24} /></button>}
        </div>
      </div>
      {!simplified && (
        <>
          <motion.nav id="studio-mega-menu" ref={menu} className="studio-nav-panel" data-panel={displayPanel}
            aria-label={displayPanel === "services" ? "Services" : "Industries"}
            hidden={!panel} data-lenis-prevent layout={!reduced}
            transition={{ layout: { duration: 0.32, ease: [0.22, 1, 0.36, 1] } }}
            onKeyDown={(event) => moveFocus(event, "vertical")}>
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div key={displayPanel} layout={!reduced} className="studio-nav-panel-content"
                initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.2 }}>
                <div className="studio-nav-panel-intro">
                  <span>{displayPanel === "services" ? "What we do" : "Who we work with"}</span>
                  <Link href={`/${displayPanel}/`} onClick={() => setPanel(null)}>See all {displayPanel} <ArrowUpRight size={15} /></Link>
                </div>
                <div className="studio-nav-columns">
                  {displayPanel === "services" ? megaMenuColumns.map((column) => (
                    <div key={column.category} data-mega-column>
                      <p>{column.heading}</p><span>{column.subtitle}</span>
                      <ul>{column.items.map((item) => <li key={item.href}><Link href={item.href} onClick={() => setPanel(null)}>{item.label}</Link></li>)}</ul>
                    </div>
                  )) : (
                    <div><p>Industries we serve</p><ul>{industries.map((item) => <li key={item.href}><Link href={item.href} onClick={() => setPanel(null)}>{item.label}</Link></li>)}</ul></div>
                  )}
                  <Link className="studio-nav-feature" href={feature.href} onClick={() => setPanel(null)}>
                    <Image src={feature.image} alt="" width={220} height={124} sizes="(min-width: 1200px) 220px, 160px" />
                    <strong>{feature.title} <ArrowUpRight size={15} /></strong>
                    <span>{feature.copy}</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.nav>
          <dialog className="studio-nav-mobile" ref={mobileMenu} id="studio-mobile-menu" aria-label="Site menu" data-lenis-prevent
            onClose={() => setMobileOpen(false)}>
            <div className="studio-nav-mobile-head">
              <Image src="/images/logo.svg" alt="Webix Solutions" width={152} height={51} unoptimized />
              <button type="button" aria-label="Close menu" onClick={() => closeMobile()}><X size={24} /></button>
            </div>
            <nav aria-label="Mobile navigation" onKeyDown={(event) => moveFocus(event, "vertical")}>
              {[...PRIMARY_NAV_LINKS, { href: "/contact-us/", label: "Contact" }].map((item, index) => (
                <motion.div key={item.href} initial={false} animate={mobileOpen && !reduced ? { opacity: [0, 1], y: [14, 0] } : { opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: mobileOpen && !reduced ? index * 0.045 : 0 }}>
                  <Link href={item.href} aria-current={path === item.href ? "page" : undefined} onClick={() => closeMobile(false)}>
                    {item.label} <ArrowUpRight size={21} />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <Link href="/book-a-call/" className="studio-button studio-mobile-book" onClick={() => closeMobile()}>
              Book a free call <ArrowUpRight size={18} />
            </Link>
          </dialog>
        </>
      )}
    </header>
  );
}

export function Header(props: HeaderProps) {
  const path = usePathname();
  return <Navigation key={path} path={path} {...props} />;
}
