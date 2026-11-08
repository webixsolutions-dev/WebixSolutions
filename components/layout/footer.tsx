import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFooterColumns } from "@/content/navigation";
import { SITE_FACTS } from "@/content/site-facts";
import { STUDIO } from "@/content/studio";
import { BrandSocialIcon } from "@/components/layout/social-icons";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { CookieSettingsTrigger } from "@/components/analytics/cookie-settings-trigger";

const socialLinks = [
  ["linkedin", "LinkedIn"], ["github", "GitHub"], ["instagram", "Instagram"], ["facebook", "Facebook"], ["youtube", "YouTube"], ["x", "X"],
] as const;

export function Footer() {
  const columns = getFooterColumns();
  const links = [
    { title: "Services", items: [...STUDIO.services.map(({ title, href }) => ({ label: title, href })), { label: "All services", href: "/services/" }] },
    { title: "Explore", items: [...columns.company.filter((item) => item.href !== "/book-a-call/"), { label: "Industries", href: "/industries/" }] },
    { title: "Markets", items: columns.markets },
  ];

  return (
    <footer className="studio-footer" data-surface="graphite">
      <div className="studio-footer-cta">
        <div className="studio-wrap studio-footer-cta-inner">
          <div><p>Let’s talk</p><h2>What are you building?</h2><span>Book a free 30-minute call to talk through your project.</span></div>
          <Link href="/book-a-call/" className="studio-button">Book a strategy call <ArrowUpRight size={18} /></Link>
        </div>
      </div>
      <div className="studio-wrap">
        <div className="studio-footer-main">
          <div className="studio-footer-identity">
            <Link href="/" aria-label="Webix Solutions home"><Image src="/images/logo.png" alt="" width={154} height={40} /></Link>
            <p>Websites, search and software for businesses and agency partners.</p>
            <address><span>{SITE_FACTS.headquarters.fullDisplay}</span><a href={`mailto:${SITE_FACTS.contact.email}`}>{SITE_FACTS.contact.email}</a><a href={`tel:${SITE_FACTS.contact.phoneE164}`}>{SITE_FACTS.contact.phoneDisplay}</a></address>
            <div className="studio-footer-social">
              {socialLinks.map(([key, name]) => <a key={key} href={SITE_FACTS.socials[key]} aria-label={name} target="_blank" rel="noopener noreferrer"><BrandSocialIcon name={key} className="size-4" /></a>)}
            </div>
          </div>
          {links.map((column) => <div className="studio-footer-column" key={column.title}>
            <p>{column.title}</p><ul>{column.items.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
          </div>)}
        </div>
        <div className="studio-footer-news"><div><p>Notes from the studio</p><span>Occasional updates on web, search and automation.</span></div><NewsletterForm /></div>
        <div className="studio-footer-legal"><span>© {new Date().getFullYear()} Webix Solutions</span><div>{columns.legal.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}<CookieSettingsTrigger /></div></div>
      </div>
    </footer>
  );
}
