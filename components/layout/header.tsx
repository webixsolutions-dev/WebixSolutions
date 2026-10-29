"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/layout/social-icons";
import { SITE_FACTS } from "@/content/site-facts";
import {
  PRIMARY_NAV_LINKS,
  type MegaMenuColumn,
} from "@/content/navigation";

export interface HeaderProps {
  megaMenuColumns: MegaMenuColumn[];
  simplified?: boolean;
}

export function Header({ megaMenuColumns, simplified = false }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [megaOpen, setMegaOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileAccordionOpen, setMobileAccordionOpen] = React.useState<string | null>("Build");
  const megaContainerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMegaOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled ? "pt-3.5 px-3 md:px-6" : "pt-0 px-0"
        )}
      >
        <div
          onMouseLeave={() => setMegaOpen(false)}
          ref={megaContainerRef}
          className={cn(
            "mx-auto transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]",
            scrolled
              ? "max-w-[1180px] rounded-2xl glass-surface-dark px-4 md:px-6 h-16"
              : "max-w-[1280px] px-[var(--gutter)] h-20 bg-transparent border-b border-white/[0.07]"
          )}
        >
          <div className="flex h-full items-center justify-between gap-4">
            {/* Brand Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 shrink-0 focus-visible:outline-offset-4"
              aria-label="Webix Solutions — Home"
            >
              <Image
                src="/images/logo.png"
                alt="Webix Solutions"
                width={154}
                height={40}
                priority
                className="h-9 md:h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop Primary Navigation (hidden on simplified LP layout) */}
            {!simplified && (
              <nav
                aria-label="Main navigation"
                className="hidden lg:flex items-center gap-1"
              >
                {PRIMARY_NAV_LINKS.map((item) => {
                  const isServices = item.label === "Services";
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname?.startsWith(item.href));

                  if (isServices) {
                    return (
                      <div
                        key={item.href}
                        className="relative"
                        onMouseEnter={() => setMegaOpen(true)}
                      >
                        <button
                          type="button"
                          aria-expanded={megaOpen}
                          aria-haspopup="true"
                          onClick={() => setMegaOpen((prev) => !prev)}
                          className={cn(
                            "inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-150",
                            megaOpen || isActive
                              ? "text-white bg-white/[0.07]"
                              : "text-[#A7ACB8] hover:text-white"
                          )}
                        >
                          <span>Services</span>
                          <ChevronDown
                            strokeWidth={1.5}
                            className={cn(
                              "h-4 w-4 transition-transform duration-180",
                              megaOpen && "rotate-180 text-[#ED1C24]"
                            )}
                          />
                        </button>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "px-3.5 py-2 text-sm font-medium rounded-md transition-colors duration-150",
                        isActive
                          ? "text-white bg-white/[0.07]"
                          : "text-[#A7ACB8] hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            )}

            {/* Right CTAs */}
            <div className="flex items-center gap-2.5">
              <a
                href={SITE_FACTS.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Webix Solutions on WhatsApp"
                title="Chat on WhatsApp"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] text-[#F5F6F8] hover:border-[#ED1C24] hover:text-white transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4" />
              </a>

              <div className="hidden sm:block">
                <Button href="/book-a-call/" variant="primary" size="sm">
                  Book a call
                </Button>
              </div>

              {!simplified && (
                <button
                  type="button"
                  aria-label={mobileOpen ? "Close menu" : "Open menu"}
                  aria-expanded={mobileOpen}
                  onClick={() => setMobileOpen(true)}
                  className="inline-flex lg:hidden h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/[0.04] text-white"
                >
                  <Menu strokeWidth={1.5} className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Desktop 4-Column Mega Menu (All links remain in DOM for crawlers) */}
          {!simplified && (
            <div
              aria-hidden={!megaOpen}
              className={cn(
                "hidden lg:block absolute left-1/2 -translate-x-1/2 w-[min(1140px,calc(100vw-2rem))] pt-3 transition-all duration-200",
                megaOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto visible"
                  : "opacity-0 -translate-y-2 pointer-events-none invisible"
              )}
            >
              <div className="rounded-xl bg-[#141519]/95 backdrop-blur-xl border border-white/12 shadow-2xl p-6">
                <div className="grid grid-cols-4 gap-6">
                  {megaMenuColumns.map((col) => (
                    <div key={col.category} className="space-y-3">
                      <div className="border-b border-white/10 pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="inline-block h-2.5 w-2.5 bg-[#ED1C24]" />
                          <span className="font-display text-sm font-semibold text-white">
                            {col.heading}
                          </span>
                        </div>
                        <p className="text-xs text-[#A7ACB8] mt-0.5">
                          {col.subtitle}
                        </p>
                      </div>
                      <ul className="space-y-1.5">
                        {col.items.map((srv) => (
                          <li key={srv.href}>
                            <Link
                              href={srv.href}
                              className="group block rounded-md p-2 hover:bg-white/[0.05] transition-colors"
                            >
                              <div className="text-sm font-medium text-[#F5F6F8] group-hover:text-[#ED1C24] transition-colors">
                                {srv.label}
                              </div>
                              {srv.description && (
                                <p className="text-xs text-[#A7ACB8] line-clamp-1 mt-0.5">
                                  {srv.description}
                                </p>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Mega Menu Footer Bar */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#A7ACB8]">
                  <div className="flex items-center gap-6">
                    <Link
                      href="/services/"
                      className="font-medium text-white hover:text-[#ED1C24] transition-colors"
                    >
                      View all 18 services
                    </Link>
                    <Link
                      href="/offers/"
                      className="font-medium text-white hover:text-[#ED1C24] transition-colors"
                    >
                      Growth packages from $399/mo
                    </Link>
                    <Link
                      href="/white-label-partners/"
                      className="font-medium text-white hover:text-[#ED1C24] transition-colors"
                    >
                      White-label agency partnership
                    </Link>
                  </div>
                  <span>Serving Canada, the US, the UAE, New Zealand and Pakistan</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Mobile Right-Side Sheet (80% width) with Accordion */}
      {!simplified && (
        <div
          aria-hidden={!mobileOpen}
          className={cn(
            "fixed inset-0 z-50 lg:hidden transition-opacity duration-200",
            mobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-xs"
          />
          <aside
            aria-label="Mobile navigation drawer"
            className={cn(
              "absolute right-0 top-0 bottom-0 w-[80%] max-w-[360px] bg-[#141519] border-l border-white/12 flex flex-col justify-between overflow-y-auto p-6 transition-transform duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]",
              mobileOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <span className="font-display text-base font-semibold text-white">
                  Menu
                </span>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-white"
                >
                  <X strokeWidth={1.5} className="h-4 w-4" />
                </button>
              </div>

              <div className="mt-5 space-y-2">
                <p className="text-xs font-medium text-[#A7ACB8] mb-2">
                  Services by category
                </p>
                {megaMenuColumns.map((col) => {
                  const isOpen = mobileAccordionOpen === col.category;
                  return (
                    <div
                      key={col.category}
                      className="rounded-md border border-white/10 bg-[#1C1E24]/60"
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() =>
                          setMobileAccordionOpen(isOpen ? null : col.category)
                        }
                        className="flex w-full items-center justify-between px-3.5 py-2.5 text-left text-sm font-medium text-white"
                      >
                        <span className="inline-flex items-center gap-2">
                          <span className="h-2 w-2 bg-[#ED1C24]" />
                          {col.heading}
                          <span className="text-xs text-[#A7ACB8] font-normal">
                            — {col.subtitle}
                          </span>
                        </span>
                        <ChevronDown
                          strokeWidth={1.5}
                          className={cn(
                            "h-4 w-4 shrink-0 text-[#A7ACB8] transition-transform",
                            isOpen && "rotate-180 text-[#ED1C24]"
                          )}
                        />
                      </button>
                      <ul
                        className={cn(
                          "px-3.5 pb-3 space-y-1.5 border-t border-white/8 pt-2",
                          !isOpen && "hidden"
                        )}
                      >
                        {col.items.map((srv) => (
                          <li key={srv.href}>
                            <Link
                              href={srv.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-1 text-sm text-[#A7ACB8] hover:text-white"
                            >
                              {srv.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}

                <div className="pt-4 space-y-1 border-t border-white/10 mt-4">
                  <Link
                    href="/services/"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-white hover:text-[#ED1C24]"
                  >
                    All Services Hub
                  </Link>
                  <Link
                    href="/our-work/"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-white hover:text-[#ED1C24]"
                  >
                    Our Work
                  </Link>
                  <Link
                    href="/industries/"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-white hover:text-[#ED1C24]"
                  >
                    Industries
                  </Link>
                  <Link
                    href="/pricing/"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-white hover:text-[#ED1C24]"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/offers/"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-white hover:text-[#ED1C24]"
                  >
                    Growth Packages
                  </Link>
                  <Link
                    href="/white-label-partners/"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-white hover:text-[#ED1C24]"
                  >
                    White-Label Partners
                  </Link>
                  <Link
                    href="/about-us/"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-white hover:text-[#ED1C24]"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact-us/"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-medium text-white hover:text-[#ED1C24]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-2.5">
              <Button
                href="/book-a-call/"
                variant="primary"
                className="w-full"
              >
                Book a strategy call
              </Button>
              <Button
                href={SITE_FACTS.contact.whatsappUrl}
                external
                variant="secondary"
                className="w-full"
              >
                WhatsApp {SITE_FACTS.contact.phoneDisplay}
              </Button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
