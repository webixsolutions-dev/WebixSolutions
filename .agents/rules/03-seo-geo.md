# Rule 03 — SEO, AI visibility and rendering (always on)

Full spec: `docs/07-seo-geo-technical.md`.

## Rendering — the most important rule
ChatGPT's GPTBot, ClaudeBot and PerplexityBot do **not** run JavaScript. If text appears only after JS runs, those assistants see an empty page.
- Every indexable page = Server Component, statically generated (SSG); ISR only where fresh data is needed (next booking slot).
- All meaningful text (H1, H2/H3, body, prices, FAQs, stats, case results, testimonials, nav, footer links) is in the initial HTML.
- Tabs/accordions/sliders render ALL panels in the HTML and toggle visibility; never conditionally mount content.
- `"use client"` only on leaf interactive components. Never on pages/layouts. No content in `useEffect` fetches. No "Loading…" for content.
- Verify: `curl -s -A "GPTBot" <url> | grep -c "<a known H2>"` must be ≥ 1.

## Per-page SEO
- Exactly one H1. H2 for sections, H3 inside. Never use H4–H6 for styling; footer column titles are not headings.
- Title ≤ 60 chars, meta ≤ 155 chars, taken from the content registry. Title template `%s | Webix Solutions`.
- Canonical = `https://webixsolutions.com/<slug>/` (absolute, trailing slash). OG + Twitter tags. OG image via `next/og`.
- Answer-first copy: first 2 sentences under every H1/H2 answer the implied question.
- Descriptive internal links; every service links to 3 related services + 1 case study + `/book-a-call/`.
- Alt text describes the image; decorative images `alt=""`.
- Brand is always "Webix Solutions" (two words) in titles, schema, OG — never "Webix" alone (collides with the Webix UI library).

## Structured data (JSON-LD, server-rendered)
- Layout: `@graph` with Organization (+ProfessionalService) `#organization`, Person `#founder` (Haroon Sukhera), WebSite `#website`. NAP = Dunyapur, Punjab, PK; phone +92-322-9472354; email info@webixsolutions.com; `areaServed` CA, US, AE, NZ, PK.
- Service pages: Service + BreadcrumbList + FAQPage. Pricing/offers: Offer items (confirmed prices only). Blog: BlogPosting. Case studies: CreativeWork. Contact: ContactPage. About: AboutPage.
- Only mark up content that is visible and true. **Never** AggregateRating/Review for our own business. Never fake addresses for CA/US/AE/NZ.
- Build JSON-LD with typed helpers in `lib/schema.ts`; validate with `schema-dts` types.

## Indexing controls
- `noindex, follow`: `/code-of-conduct/`, `/lp/*`, booking success page, `/admin/*`, 404. These must stay crawlable (no robots.txt block) so the noindex is seen.
- Middleware: 410 for `/market/*` (hack spam), WordPress endpoints; 301s from `config/redirects.ts`.
- Non-production hosts send `X-Robots-Tag: noindex`.
- `app/sitemap.ts` lists only published, indexable pages with `lastModified`.
- `app/robots.ts` mirrors `public-files/robots.txt` (allow all search + AI crawlers; disallow `/api/`, `/admin/`).
- `public/llms.txt` mirrors `public-files/llms.txt`; facts must match `content/site-facts.ts`.

## Performance budget (mobile)
LCP < 2.0s, INP < 200ms, CLS < 0.05, JS < 150KB gzipped per marketing route. GA4, Microsoft Clarity, Meta Pixel load only after cookie consent with `strategy="lazyOnload"`.

## Never do
Hidden text, cloaking, keyword stuffing, text or HTML comments addressed to AI systems, fake reviews/ratings, invented statistics, doorway pages that only swap a city/country name.
