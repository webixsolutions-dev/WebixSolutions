# 07 — SEO, AI visibility (GEO) and technical rules

## What the data says (Search Console, Jul 26 – Oct 26 2026)
- 83 clicks / 6,777 impressions in 3 months. Almost every click is a brand search ("webix solutions", "webix solution"). The homepage has 76 of the 83 clicks.
- Non-brand demand already exists but we rank on page 5–8: "ai automation solutions" 1,031 impressions at position 64; "ai business automation solutions" 145; "social media solutions" 245; "woocommerce vs magento" 363+308 (blog).
- 85% of impressions are desktop; mobile CTR is double desktop CTR.
- The US gives the most impressions (3,345) but 1 click; Pakistan gives most clicks (48).
- Index: 982 spam URLs `/market/R…` in the "valid" report; indexed pages jumped 416 → 68,336 in August (hack), now 3,447 and falling. **This is the most urgent SEO problem.** See redirects in `01`.
- Brand collision with the Webix UI library (searches for "webix login", "webix license", "webix coupons" land on us).
- Current site: counters render "0" without JavaScript; service pages ~400–700 words with no FAQs; H5/H6 used for steps; two different quote forms; og:type "article" on service pages; missing alt text; `/code-of-conduct/` is indexable.

## Rendering rule (the AI-crawler problem)
Vercel's crawler study found GPTBot (ChatGPT), ClaudeBot and PerplexityBot fetch pages but **do not execute JavaScript**; only Googlebot/Gemini and AppleBot render it. So anything that loads with JS is invisible to most assistants ("a header, a footer and Loading…").

Therefore:
1. Every indexable page is a **React Server Component, statically generated (SSG)** at build time. Pages that need fresh data (next booking slot) use ISR (`revalidate`).
2. All important text — headings, body, prices, FAQs, stats, case-study results, the four Growth Console signals, the testimonial text, nav and footer links — must be present in the **initial HTML**. Interactivity (tabs, sliders, accordions) wraps server-rendered content; hidden tab panels are in the DOM (use `hidden`/`data-state`, not conditional rendering).
3. `"use client"` only on leaf components (tabs, slider, booking widget, cookie banner). Never on a page or layout.
4. No content fetched in `useEffect`. No "Loading…" placeholders for content.
5. Check with `curl -A "GPTBot" https://<preview>/<page>/ | grep "<some H2 text>"` for every template — this is in the QA checklist.

## Metadata (Next.js Metadata API)
- `metadataBase: https://webixsolutions.com`; per-page `title`, `description`, `alternates.canonical` (absolute, trailing slash), `openGraph` (type `website` for pages, `article` for blog posts), `twitter: summary_large_image`.
- Title template: `%s | Webix Solutions`; home uses an absolute title.
- OG images generated per page with `next/og` (graphite background, red cut corner, page H1) — 1200×630.
- `robots`: index/follow by default; `noindex, follow` for `/code-of-conduct/`, `/lp/*`, `/book-a-call/success`, `/admin/*`, 404.
- **Preview/staging domains** (e.g. `*.pages.dev`, `*.vercel.app`, `*.workers.dev`): send `X-Robots-Tag: noindex` from middleware when `host !== "webixsolutions.com"`. This prevents the duplicate-domain indexing that often hurts Next.js migrations.

## Structured data (JSON-LD, server-rendered, only for visible + true content)
One `@graph` per page. Shared ids: `https://webixsolutions.com/#organization`, `#website`, `#founder`.

Organization (every page, via layout):
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": "https://webixsolutions.com/#organization",
      "name": "Webix Solutions",
      "alternateName": "Webix Solutions Digital Agency",
      "url": "https://webixsolutions.com/",
      "logo": "https://webixsolutions.com/brand/webix-solutions-logo.png",
      "description": "Full-service digital agency with an in-house team building websites, SEO, paid ads, social media and AI automation for businesses in Canada, the United States, the UAE, New Zealand and Pakistan.",
      "founder": { "@id": "https://webixsolutions.com/#founder" },
      "email": "info@webixsolutions.com",
      "telephone": "+92-322-9472354",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dunyapur",
        "addressRegion": "Punjab",
        "addressCountry": "PK"
      },
      "areaServed": ["CA", "US", "AE", "NZ", "PK"],
      "knowsAbout": ["Web development", "Search engine optimization", "Generative engine optimization", "Social media marketing", "Pay-per-click advertising", "AI automation", "AI chatbots", "Shopify development", "Flutter app development"],
      "sameAs": [
        "https://github.com/webixsolutions-dev"
        /* add every real profile URL: LinkedIn, Facebook, Instagram, YouTube, X, Google Business Profile, Clutch, Upwork agency — [CONFIRM URLs] */
      ]
    },
    {
      "@type": "Person",
      "@id": "https://webixsolutions.com/#founder",
      "name": "Haroon Sukhera",
      "jobTitle": "Founder & CEO",
      "worksFor": { "@id": "https://webixsolutions.com/#organization" }
      /* "sameAs": [LinkedIn URL] [CONFIRM] */
    },
    {
      "@type": "WebSite",
      "@id": "https://webixsolutions.com/#website",
      "url": "https://webixsolutions.com/",
      "name": "Webix Solutions",
      "publisher": { "@id": "https://webixsolutions.com/#organization" }
    }
  ]
}
```
Per page type:
- Service pages: `Service` { name, serviceType, description, provider: {@id org}, areaServed, offers: { price, priceCurrency: "USD" } only if confirmed } + `BreadcrumbList` + `FAQPage`.
- Pricing/offers: `OfferCatalog` with `Offer` items (confirmed prices only).
- Case studies: `CreativeWork` (or `Article`) + `BreadcrumbList`.
- Blog: `BlogPosting` (headline, datePublished, dateModified, author → Person with real name, image) + `BreadcrumbList`.
- Contact: `ContactPage`; About: `AboutPage`.
- **Never**: `AggregateRating`/`Review` for our own business, schema for content not visible on the page, fake addresses for foreign markets.
Note: Google shows FAQ rich results only for a few authoritative government/health sites now — we still add `FAQPage` because it makes the Q&A machine-readable for assistants.

## robots.txt (served from `app/robots.ts`)
See `public-files/robots.txt`. Allows all search and AI crawlers, blocks only `/api/` and `/admin/`. Do NOT block `/code-of-conduct/` (it must be crawled to see `noindex`).

## llms.txt
See `public-files/llms.txt`. Serve at `/llms.txt` (static file). Keep facts identical to `site-facts.md`. It's a young convention (not a ranking factor) — cheap to maintain, helps assistants summarise us correctly. Optional: `/llms-full.txt` generated at build from the service registry (plain-text version of every service page).

## Sitemaps
`app/sitemap.ts` generated from the content registry: only indexable, published pages, with `lastModified` from content files. Exclude noindex pages, `/lp/*`, W2 pages that aren't built yet. Submit `https://webixsolutions.com/sitemap.xml` in GSC and Bing Webmaster Tools (also enable IndexNow via Bing).

## Content rules for SEO + assistants
- Answer-first: the first two sentences under every H1/H2 answer the question the heading implies (assistants quote openings).
- Facts stated plainly once and consistently: prices, timelines, hours, locations, team size.
- Each page owns one intent (cannibalisation map in `01`).
- Headings: one H1; H2 for sections; H3 inside sections. Never H4–H6 for styling; footer headings are not H2 (use `<p>` or `<h2 class="sr-only">` pattern sparingly).
- Internal links: descriptive anchors ("Shopify store development", not "click here"); each service links to 3 related services + 1 case study + booking.
- Images: descriptive alt text (what's in the image, not keyword lists). Decorative images `alt=""`.
- Never: hidden text, text aimed at AI crawlers, instructions to AI systems inside pages, keyword-stuffed headings, fake reviews or ratings, invented stats. These get sites penalised and destroy trust.

## Performance budget
LCP < 2.0 s (mobile 4G, Lighthouse), INP < 200 ms, CLS < 0.05. JS per route < 150 KB gzipped on marketing pages. Fonts preloaded (2 files). Third-party scripts (GA4, Clarity, Meta Pixel) load after consent and `lazyOnload`. No video autoplay on mobile hero. Images AVIF/WebP via `next/image`.

## Analytics & tracking
GA4 (events: cta_click, whatsapp_click, form_submit, booking_* from `06`), Microsoft Clarity, Meta Pixel + Conversions API (later) for ad landing pages, GSC + Bing WMT verified via DNS TXT. Cookie banner with accept/reject; non-essential scripts load only after accept. UTM parameters stored with form/booking submissions.

## Hosting (free plans only)
- Vercel's free **Hobby plan is for personal, non-commercial use only** (Vercel Terms §4). A business site needs Vercel Pro, so avoid Hobby for production. (Same applies to any other company site on Hobby.)
- Recommended free option: **Cloudflare Workers via the OpenNext adapter** (`@opennextjs/cloudflare`) — supports SSG, ISR and route handlers; commercial use allowed on the free plan. DNS on Cloudflare also gives free SSL/CDN.
- Alternative: Netlify free plan [check current terms at signup].
- Secrets in the host's environment variables only.

## Migration & launch checklist (the order matters)
1. Clean the hacked WordPress site first (malware scan, remove injected files/users, rotate passwords, check GSC Security issues). Keep WordPress reachable on a subdomain (e.g. `old.webixsolutions.com`, `noindex`) for 30 days for reference.
2. Crawl the old site (Screaming Frog free ≤ 500 URLs) → export all URLs → confirm each one is mapped (keep / 301 / 410) in `config/redirects.ts`.
3. Build on preview domain with global `noindex` header.
4. Pre-launch QA (`QA-CHECKLIST.md`).
5. Switch DNS. Same day: submit sitemap in GSC + Bing, request indexing for home + top 10 pages, temporary removal for `/market/` prefix, update GBP website link (with UTM), update all social profile links.
6. Day 1–7: watch GSC Pages report, 404s, Core Web Vitals; fix any 404 with a 301.
7. Day 30: re-run the AI assistant test (below) and compare.

## AI assistant test (monthly, record — don't score)
Ask ChatGPT, Perplexity, Claude and Gemini the same 6 prompts, record verbatim whether Webix Solutions appears and which sources are cited:
1. "Webix Solutions digital agency — who are they and what do they do?"
2. "Who is the founder of Webix Solutions?"
3. "White label web development partner in Pakistan for a Canadian agency"
4. "Affordable agency to build a website and run Meta ads for a small business in Toronto"
5. "AI chatbot development company for small business UAE"
6. "Webix Solutions pricing"
Results vary run to run — it's a snapshot, not a ranking. The first two are the ones we can fix fastest (entity + facts). Baseline before launch: a web search for "Webix Solutions" digital marketing agency did not return webixsolutions.com in the top results (Oct 27, 2026).

## Off-site (assistants read these heavily)
Create/complete with identical name, phone, URL and description: Google Business Profile, LinkedIn company page, Clutch, GoodFirms, DesignRush, Crunchbase, Upwork agency profile, Facebook, Instagram, YouTube, GitHub org description (already good). Ask real clients for reviews on Google and Clutch.
