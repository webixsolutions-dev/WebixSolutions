# Launch QA checklist

Tick every line on the production build before switching DNS.

## Content & truth
- [ ] Every number/price/claim matches `docs/site-facts.md`; all [CONFIRM] items resolved or hidden
- [ ] No invented testimonials, reviews, client names or logos; testimonials only verified + permission
- [ ] No internal dashboards with real financial data, no ROAS/ROI tiles
- [ ] Prices identical on pricing, offers, service pages, llms.txt and schema
- [ ] No banned phrases (search the content folder)
- [ ] Spelling/grammar pass on every page (the old site had "We delivers", "for for")

## Rendering for AI crawlers
- [ ] `curl -A "GPTBot"` on home, every template type: H1, H2s, body, FAQs, prices, stats present
- [ ] Stats show final numbers in HTML (never 0)
- [ ] Growth Console signals present as text in HTML
- [ ] Hidden tab/accordion panels present in HTML

## SEO
- [ ] Titles ≤ 60, metas ≤ 155, unique across the site
- [ ] One H1 per page, logical heading order
- [ ] Canonicals absolute with trailing slash; no canonical to preview domains
- [ ] JSON-LD valid on every template; Organization/Person/WebSite graph sitewide
- [ ] `/code-of-conduct/`, `/lp/*`, success pages = noindex, follow; not in sitemap; not blocked in robots.txt
- [ ] sitemap.xml = only indexable published URLs
- [ ] robots.txt + llms.txt live and correct
- [ ] Every old URL (Screaming Frog export) → 200, 301 or 410 as mapped; `/market/R123` → 410
- [ ] Preview host returns `X-Robots-Tag: noindex`
- [ ] 404 page useful (search-free links to services, contact, booking)

## Design
- [ ] Screens at 360/390/768/1024/1440/1920 — no horizontal scroll, no overlaps
- [ ] Neighbouring sections never share a surface; notches on dark→light
- [ ] Glass only in the four allowed places
- [ ] Mobile hero fits content; sticky bottom bar works; menu sheet 80% width from right
- [ ] Images AVIF/WebP, sharp on retina, no layout shift

## Booking & forms
- [ ] Booking works end-to-end: event in Google Calendar, Meet link, invite email received
- [ ] Time zones correct for Toronto, Los Angeles, Dubai, Auckland, Karachi
- [ ] Double booking blocked; Turnstile works; rate limit works
- [ ] Google API down → friendly fallback (WhatsApp/email)
- [ ] Contact form delivers to info@webixsolutions.com; success + error states
- [ ] Analytics events fire (GA4 DebugView, Meta Pixel Helper) only after consent

## Accessibility
- [ ] Keyboard-only run through header, mega menu, tabs, slider, FAQ, booking, forms
- [ ] Visible focus everywhere; reduced motion respected
- [ ] Contrast AA (check muted text and red text)
- [ ] Form labels, error messages, aria-live for booking selections

## Performance (Lighthouse mobile, production)
- [ ] Home ≥ 90 / service ≥ 90 / offers ≥ 90 / our-work ≥ 90 / blog ≥ 90
- [ ] LCP < 2.0 s, CLS < 0.05, INP < 200 ms
- [ ] Route JS < 150 KB gzipped

## Security & ops
- [ ] Secrets only in host environment variables; `.env.example` complete
- [ ] Security headers: HSTS, X-Content-Type-Options, Referrer-Policy, frame-ancestors
- [ ] Old WordPress cleaned (malware scan) and moved to a noindexed subdomain or shut down
- [ ] Uptime monitor set (free tier) on home and /api/booking/next-slot

## Launch day (by hand)
- [ ] DNS switched; SSL valid; www → apex redirect
- [ ] GSC: sitemap submitted, URL inspection on home + top 10, Removals for prefix `/market/`
- [ ] Bing Webmaster Tools: sitemap + IndexNow
- [ ] Google Business Profile website link updated (with UTM), booking link added
- [ ] Social profiles, Upwork, Clutch, GitHub org link to the new site
- [ ] Day 7 and day 30: check GSC Pages report, 404s, Core Web Vitals; run the AI assistant test from docs/07
