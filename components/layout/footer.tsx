import * as React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { getFooterColumns } from "@/content/navigation";
import { SITE_FACTS } from "@/content/site-facts";
import { getComputedShiftTable } from "@/lib/timezone";
import { BrandSocialIcon, WhatsAppIcon } from "@/components/layout/social-icons";
import { NewsletterForm } from "@/components/layout/newsletter-form";
import { CookieSettingsTrigger } from "@/components/analytics/cookie-settings-trigger";

export function Footer() {
  const cols = getFooterColumns();
  const currentYear = new Date().getFullYear();
  const shifts = getComputedShiftTable();

  return (
    <footer
      data-surface="graphite"
      className="relative border-t border-white/10 bg-[#141519] text-[#F5F6F8] pb-24 md:pb-12 overflow-hidden"
    >
      <Container className="pt-16 md:pt-20">
        {/* Top Row: Positioning + Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-[#A7ACB8]">
              <span className="h-2.5 w-2.5 bg-[#ED1C24]" />
              <span>Full-service digital & AI engineering partner</span>
            </div>
            <p className="font-display text-xl md:text-2xl font-medium text-white max-w-2xl leading-snug">
              {SITE_FACTS.positioningOneLiner}
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1 text-sm text-[#A7ACB8]">
              <a
                href={`mailto:${SITE_FACTS.contact.email}`}
                className="hover:text-white transition-colors"
              >
                {SITE_FACTS.contact.email}
              </a>
              <span aria-hidden="true" className="text-white/20">
                ·
              </span>
              <a
                href={`tel:${SITE_FACTS.contact.phoneE164}`}
                className="font-metric hover:text-white transition-colors"
              >
                {SITE_FACTS.contact.phoneDisplay}
              </a>
              <span aria-hidden="true" className="text-white/20">
                ·
              </span>
              <a
                href={SITE_FACTS.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-white hover:text-[#ED1C24] transition-colors"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                <span>WhatsApp our team</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <NewsletterForm />
          </div>
        </div>

        {/* Middle Row: Registry-Driven Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-14 border-b border-white/10">
          <div>
            <p className="font-display text-sm font-semibold text-white mb-4">
              Build & AI Systems
            </p>
            <ul className="space-y-2.5 text-sm text-[#A7ACB8]">
              {cols.buildAndAi.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-white mb-4">
              Grow & Creative
            </p>
            <ul className="space-y-2.5 text-sm text-[#A7ACB8]">
              {cols.growAndCreate.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-white mb-4">
              Industries & Markets
            </p>
            <ul className="space-y-2.5 text-sm text-[#A7ACB8]">
              {cols.industries.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-display text-sm font-semibold text-white mt-6 mb-3">
              Markets Served
            </p>
            <ul className="space-y-2 text-sm text-[#A7ACB8]">
              {cols.markets.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold text-white mb-4">
              Company
            </p>
            <ul className="space-y-2.5 text-sm text-[#A7ACB8]">
              {cols.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* NAP Block (City-level only) + Dual-Shift Operating Hours Table (Intl computed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-b border-white/10 text-xs text-[#A7ACB8]">
          <div className="lg:col-span-4 space-y-2">
            <p className="font-display text-sm font-semibold text-white">
              Headquarters & Presence
            </p>
            <address className="not-italic leading-relaxed">
              <strong className="text-white font-medium">
                {SITE_FACTS.brandName}
              </strong>
              <br />
              {SITE_FACTS.headquarters.fullDisplay}
              <br />
              <span className="text-[#6C7280]">
                ({SITE_FACTS.headquarters.secondaryNote})
              </span>
            </address>
          </div>

          <div className="lg:col-span-8">
            <p className="font-display text-sm font-semibold text-white mb-3">
              Operating Shifts Across Time Zones
            </p>
            <div className="overflow-x-auto rounded-md border border-white/10">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-[#1C1E24] text-white">
                    <th className="py-2 px-3 font-medium">Shift</th>
                    <th className="py-2 px-3 font-medium">Pakistan (PKT)</th>
                    <th className="py-2 px-3 font-medium">
                      Eastern ({shifts.etZoneShort})
                    </th>
                    <th className="py-2 px-3 font-medium">
                      Pacific ({shifts.ptZoneShort})
                    </th>
                    <th className="py-2 px-3 font-medium">UAE (GST)</th>
                    <th className="py-2 px-3 font-medium">
                      NZ ({shifts.nztZoneShort})
                    </th>
                    <th className="py-2 px-3 font-medium">Primary Markets</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/8">
                  <tr>
                    <td className="py-2 px-3 text-white font-medium">Day Shift</td>
                    <td className="py-2 px-3 font-metric">{shifts.dayShift.pkt}</td>
                    <td className="py-2 px-3 font-metric">{shifts.dayShift.et}</td>
                    <td className="py-2 px-3 font-metric">{shifts.dayShift.pt}</td>
                    <td className="py-2 px-3 font-metric">{shifts.dayShift.gst}</td>
                    <td className="py-2 px-3 font-metric">{shifts.dayShift.nzt}</td>
                    <td className="py-2 px-3">{shifts.dayShift.markets}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 text-white font-medium">Night Shift</td>
                    <td className="py-2 px-3 font-metric">{shifts.nightShift.pkt}</td>
                    <td className="py-2 px-3 font-metric">{shifts.nightShift.et}</td>
                    <td className="py-2 px-3 font-metric">{shifts.nightShift.pt}</td>
                    <td className="py-2 px-3 font-metric">{shifts.nightShift.gst}</td>
                    <td className="py-2 px-3 font-metric">{shifts.nightShift.nzt}</td>
                    <td className="py-2 px-3">{shifts.nightShift.markets}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Socials Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#6C7280]">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>
              © {currentYear} {SITE_FACTS.brandName}. All rights reserved.
            </span>
            {cols.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <CookieSettingsTrigger />
          </div>

          <div className="flex items-center gap-2.5">
            {(
              [
                ["linkedin", SITE_FACTS.socials.linkedin, "LinkedIn"],
                ["github", SITE_FACTS.socials.github, "GitHub"],
                ["instagram", SITE_FACTS.socials.instagram, "Instagram"],
                ["facebook", SITE_FACTS.socials.facebook, "Facebook"],
                ["youtube", SITE_FACTS.socials.youtube, "YouTube"],
                ["x", SITE_FACTS.socials.x, "X (Twitter)"],
              ] as const
            ).map(([key, url, label]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Webix Solutions on ${label}`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-[#1C1E24] text-[#A7ACB8] hover:border-[#ED1C24] hover:text-white transition-colors"
              >
                <BrandSocialIcon name={key} className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Giant Cropped Wordmark (docs/05-design-system.md) */}
        <div
          aria-hidden="true"
          className="mt-10 pt-4 select-none pointer-events-none overflow-hidden"
        >
          <div className="font-display font-semibold lowercase tracking-[-0.04em] leading-[0.82] text-[clamp(3.2rem,11.5vw,10.5rem)] text-white/[0.05] whitespace-nowrap">
            webix solutions
          </div>
        </div>
      </Container>
    </footer>
  );
}
