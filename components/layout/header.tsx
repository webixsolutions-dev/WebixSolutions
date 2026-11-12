"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PRIMARY_NAV_LINKS, type MegaMenuColumn } from "@/content/navigation";

type HeaderProps = { megaMenuColumns: MegaMenuColumn[]; simplified?: boolean };

function Navigation({ megaMenuColumns, simplified, path }: HeaderProps & { path: string }) {
  const [open, setOpen] = useState<"services" | "mobile" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const shell = useRef<HTMLElement>(null);
  const serviceToggle = useRef<HTMLButtonElement>(null);
  const mobileToggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const sync = () => setScrolled(window.scrollY > 80);
    const frame = requestAnimationFrame(sync);
    window.addEventListener("scroll", sync, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", sync); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const key = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      (open === "services" ? serviceToggle : mobileToggle).current?.focus();
      setOpen(null);
    };
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !shell.current?.contains(event.target)) setOpen(null);
    };
    const desktop = window.matchMedia("(min-width: 1000px)");
    const close = () => setOpen(null);
    document.addEventListener("keydown", key);
    document.addEventListener("pointerdown", outside);
    desktop.addEventListener("change", close);
    return () => {
      document.removeEventListener("keydown", key);
      document.removeEventListener("pointerdown", outside);
      desktop.removeEventListener("change", close);
    };
  }, [open]);

  return (
    <header ref={shell} className="studio-nav" data-scrolled={scrolled} onBlur={(event) => {
      if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) setOpen(null);
    }}>
      <div className="studio-nav-shell">
        <Link href="/" className="studio-nav-brand" aria-label="Webix Solutions home" onClick={() => setOpen(null)}>
          <Image src="/images/logo.png" alt="" width={154} height={40} priority />
        </Link>
        {!simplified && (
          <nav className="studio-nav-links" aria-label="Main navigation">
            <button ref={serviceToggle} className="studio-nav-link" type="button" aria-expanded={open === "services"} aria-controls="studio-service-menu" onClick={() => setOpen(open === "services" ? null : "services")}>Services <ChevronDown size={14} /></button>
            {PRIMARY_NAV_LINKS.filter((item) => item.href !== "/services/" && item.href !== "/ai-automation-services/").map((item) => (
              <Link className="studio-nav-link" href={item.href} key={item.href} aria-current={path.startsWith(item.href) ? "page" : undefined} onClick={() => setOpen(null)}>{item.label}</Link>
            ))}
          </nav>
        )}
        <div className="studio-nav-actions">
          <Link href="/book-a-call/" className="studio-button studio-nav-book" onClick={() => setOpen(null)}>Book a call <ArrowUpRight size={15} /></Link>
          {!simplified && <button ref={mobileToggle} className="studio-nav-toggle" type="button" aria-expanded={open === "mobile"} aria-controls="studio-mobile-menu" aria-label={open === "mobile" ? "Close menu" : "Open menu"} onClick={() => setOpen(open === "mobile" ? null : "mobile")}>{open === "mobile" ? <X size={23} /> : <Menu size={23} />}</button>}
        </div>
      </div>
      {!simplified && (
        <>
          <nav className="studio-nav-panel" id="studio-service-menu" aria-label="Services" hidden={open !== "services"} data-lenis-prevent>
            <div className="studio-nav-panel-intro"><span>What we do</span><Link href="/services/" onClick={() => setOpen(null)}>See all services <ArrowUpRight size={15} /></Link></div>
            <div className="studio-nav-columns">
              {megaMenuColumns.map((column) => <div key={column.category} data-mega-column>
                <p>{column.heading}</p><span>{column.subtitle}</span>
                <ul>{column.items.map((item) => <li key={item.href}><Link href={item.href} onClick={() => setOpen(null)}>{item.label}</Link></li>)}</ul>
              </div>)}
            </div>
          </nav>
          <nav className="studio-nav-panel studio-nav-mobile" id="studio-mobile-menu" aria-label="Mobile navigation" hidden={open !== "mobile"} data-lenis-prevent>
            {PRIMARY_NAV_LINKS.map((item) => <Link key={item.href} href={item.href} aria-current={path === item.href ? "page" : undefined} onClick={() => setOpen(null)}>{item.label} <ArrowUpRight size={18} /></Link>)}
            <Link href="/contact-us/" onClick={() => setOpen(null)}>Contact <ArrowUpRight size={18} /></Link>
          </nav>
        </>
      )}
    </header>
  );
}

export function Header(props: HeaderProps) {
  const path = usePathname();
  return <Navigation key={path} path={path} {...props} />;
}
