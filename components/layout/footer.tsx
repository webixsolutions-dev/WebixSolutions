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

const marketHours = {
  CA: ["🇨🇦", "11 am–7 pm EST / noon–8 pm EDT"],
  US: ["🇺🇸", "8 am–4 pm PST / 9 am–5 pm PDT"],
  AE: ["🇦🇪", "From 8 am Gulf time"],
  NZ: ["🇳🇿", "5 am–1 pm NZST / 6 am–2 pm NZDT"],
  PK: ["🇵🇰", "From 9 am, plus 9 pm–5 am PKT"],
} as const;

export function Footer() {
  const columns = getFooterColumns();
  const links = [
    { title: "Services", items: [...STUDIO.services.map(({ title, href }) => ({ label: title, href })), { label: "All services", href: "/services/" }] },
    { title: "Company", items: columns.company.filter(({ href }) => !["/book-a-call/", "/blogs/"].includes(href)) },
    { title: "Resources", items: [{ label: "Blog", href: "/blogs/" }, ...columns.industries] },
  ];

  return (
    <footer className="studio-footer" data-surface="graphite">
      <div className="studio-wrap">
        <div className="studio-footer-cta">
          <h2>Let’s build what’s next.</h2>
          <div className="studio-footer-actions">
            <Link href="/book-a-call/" className="studio-button">Book a free call <ArrowUpRight size={18} /></Link>
            <a href={`mailto:${SITE_FACTS.contact.email}`}>{SITE_FACTS.contact.email}</a>
          </div>
        </div>
        <div className="studio-footer-main">
          {links.map((column) => <div className="studio-footer-column" key={column.title}>
            <p>{column.title}</p>
            <ul>{column.items.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
          </div>)}
          <div className="studio-footer-column studio-footer-markets">
            <p>Markets</p>
            <ul>{SITE_FACTS.markets.map((market) => {
              const [flag, hours] = marketHours[market.shortCode];
              const page = columns.markets.find((item) => item.href === `/locations/${market.slug}/`);
              return (
                <li key={market.slug}>
                  <span aria-hidden="true">{flag}</span>
                  <div>
                    {page ? <Link href={page.href}>{market.name}</Link> : <strong>{market.name}</strong>}
                    <small>{hours}</small>
                  </div>
                </li>
              );
            })}</ul>
          </div>
        </div>
        <div className="studio-footer-news">
          <address>
            <span>{SITE_FACTS.headquarters.fullDisplay}</span>
            <span>{SITE_FACTS.headquarters.secondaryNote}</span>
            <a href={`tel:${SITE_FACTS.contact.phoneE164}`}>{SITE_FACTS.contact.phoneDisplay}</a>
            <a href={SITE_FACTS.contact.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </address>
          <div><p>Notes from the studio</p><NewsletterForm /></div>
        </div>
        <div className="studio-footer-mark" aria-hidden="true"><div className="studio-footer-wordmark" data-footer-wordmark>webix solutions</div></div>
        <div className="studio-footer-legal">
          <span>© {new Date().getFullYear()} Webix Solutions</span>
          <div>{columns.legal.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}<CookieSettingsTrigger /></div>
          <div className="studio-footer-social">
            {socialLinks.map(([key, name]) => <a key={key} href={SITE_FACTS.socials[key]} aria-label={name} target="_blank" rel="noopener noreferrer"><BrandSocialIcon name={key} className="size-4" /></a>)}
          </div>
        </div>
      </div>
    </footer>
  );
}
