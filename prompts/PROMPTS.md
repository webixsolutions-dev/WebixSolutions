# Antigravity prompts — paste one phase at a time

How to use:
- Start each phase in a **new conversation** in Antigravity (keeps the context clean). The rules in `.agents/rules/` load automatically; the prompt tells the agent which docs to read.
- Use **Planning** mode. Read the plan it gives you, then say "Approved, build it" (or correct it).
- Don't move to the next phase until the screenshots look right to you.
- Model per phase is noted (see README for why).

---

## Phase 0 — Audit the current build and make the plan
Model: Claude Opus 5.5 (Thinking)

```
Read AGENTS.md, every file in .agents/rules/, and every file in docs/ (start with docs/00-strategy.md, docs/site-facts.md, docs/01-sitemap-url-map.md, docs/05-design-system.md, docs/07-seo-geo-technical.md).

Then audit the current codebase (the version running on localhost:3000):
1. Framework/version, folder structure, package manager, dependencies, how content is stored, which pages exist.
2. Rendering: run a production build, start it, and curl the home page and one service page with a GPTBot user agent. Report whether the main text is in the HTML.
3. Design: take screenshots of the home page at 390 and 1440 and list every place it breaks docs/05-design-system.md.
4. Decide: refactor this codebase or start a clean branch and reuse only what fits. Explain the decision in 5 lines.

Deliver an implementation plan as an artifact: phases 1–10 from prompts/PROMPTS.md mapped to concrete files/components, the list of dependencies to add/remove (with gzipped sizes), risks, and every [CONFIRM] item from the docs collected into docs/OPEN-QUESTIONS.md. Do not write feature code yet.
```

---

## Phase 1 — Foundation: tokens, fonts, layout, header, footer, SEO plumbing
Model: Claude Opus 5.5 (Thinking)

```
Phase 1. Read .agents/rules/*, docs/05-design-system.md, docs/07-seo-geo-technical.md, docs/01-sitemap-url-map.md, docs/site-facts.md.

Build the foundation only (no page content yet):
1. Design tokens as CSS variables in app/globals.css + Tailwind v4 theme mapping (colors, type scale with clamp(), spacing, --cut, --notch, --gutter). Self-host Clash Grotesk (500, 600) and Switzer (400, 500, 600) with next/font/local; preload display 600 + text 400 only.
2. Primitives: <Section surface notch grid watermark>, <Container>, <Button variant="primary|secondary|text"> with the cut corner + hover fill, <Kicker>, <CutFrame> (cut-corner media frame with border), <Chip>.
3. Content registries with TypeScript types: content/site-facts.ts, services.ts, industries.ts, locations.ts, pricing.ts, testimonials.ts, navigation.ts (navigation is generated from the registries; published:false items are excluded). Seed them with slugs, titles, metas and H1s from docs/02–04 (copy bodies come later).
4. Header: transparent on hero, becomes a glass pill after 80px scroll; mega menu with Build / Grow / AI / Create columns from the registry; mobile Sheet from the right at 80% width with accordion; WhatsApp icon button; "Book a call" primary button. Sticky mobile bottom bar (Book a call / WhatsApp) with glass.
5. Footer: giant "webix solutions" wordmark, columns from registries, NAP block, hours table (PKT + ET), socials, newsletter field (server action stub), legal links.
6. SEO plumbing: lib/schema.ts (typed JSON-LD builders; Organization+Person+WebSite graph in the layout), generateMetadata helper reading from registries (title template "%s | Webix Solutions", canonical with trailing slash, OG/Twitter), app/robots.ts mirroring public-files/robots.txt, app/sitemap.ts from registries, public/llms.txt from public-files/llms.txt, next/og default OG image, not-found page.
7. middleware.ts: 410 for /market/* and WordPress endpoints, 301s from config/redirects.ts (fill from docs/01), X-Robots-Tag noindex on non-production hosts. trailingSlash: true.
8. Cookie consent banner; GA4, Microsoft Clarity and Meta Pixel load only after consent (IDs from env, components no-op if missing).

Make a /styleguide page (noindex) showing every token, type size, surface (with notch transitions between all surface pairs), buttons, frames and chips. Screenshot /styleguide at 390 and 1440 and review it against docs/05 before showing me.
```

---

## Phase 2 — Home page (the signature)
Model: Claude Opus 5.5 (Thinking). Optional: run the same prompt with Gemini 4 Argon in a second branch and keep the better hero.

```
Phase 2. Read .agents/rules/*, docs/02-page-briefs-core.md (Home section), docs/05-design-system.md (Signature, Motion, Wireframes), docs/06-booking-system.md (next-slot endpoint), docs/08-portfolio-proof.md, docs/site-facts.md.

Build the home page exactly per the brief: 11 sections, the surfaces listed, compact. Key parts:
- Hero with the Growth Console (four signals, all server-rendered as a list; cross-fade every 4.5s, pause on hover/focus, dot controls, keyboard accessible). Signal 4 "Next open strategy call" reads from a server function that later calls the booking API — for now stub it with a deterministic function in lib/booking/next-slot.ts and render the time in the visitor's zone on the client (server renders it in Eastern Time as fallback text).
- Hero background: placeholder for the 3D monogram image (/public/images/hero-monogram.avif) with the oxblood glow. No WebGL.
- Services as tabs (Build / Grow / AI / Create) — every panel in the HTML.
- AI systems section on Signal Red with three mini flow diagrams (inline SVG, accessible titles).
- Work slider (Embla) with filter chips and cut-corner cards; uses content/work entries (create 4 placeholder entries with published:false and clearly fake "Sample" labels so production shows nothing until real ones are added).
- Packages teaser, How we work (4 numbered steps, line draws once on scroll), Two-ways split, Testimonials (verified-only) falling back to the Proof Wall, FAQ (8 questions from the brief, answers written per Rule 04, FAQPage JSON-LD), final CTA with a compact booking placeholder.
- One orchestrated load animation only (headline mask-rise + console assemble). Reduced motion respected.

Write all copy into content files, answer-first, no banned phrases, numbers only from site-facts. Then run the page-qa workflow and show me screenshots at 390, 768, 1440 plus the GPTBot curl check.
```

---

## Phase 3 — Service page template + first service page
Model: Claude Opus 5.5 (Thinking)

```
Phase 3. Read .agents/rules/*, docs/03-page-briefs-services.md (shared template + "AI automation" brief), docs/05-design-system.md.

Build the reusable service page template (10 sections, surfaces as in the table) driven entirely by content/services.ts. Then fill and build /ai-automation-services/ as the first real page (1,100–1,600 words, FAQs, Service + BreadcrumbList + FAQPage JSON-LD, related links, ROI calculator whose default result is server-rendered text).
Run the page-qa workflow. Show screenshots. After I approve, this template is frozen — later pages only add content.
```

---

## Phase 4 — All W1 service pages
Model: Claude Sonnet 5.5 (Thinking) — repetitive work on a frozen template. Switch to Opus if quality drops.

```
Phase 4. Use the workflow .agents/workflows/build-page-from-brief.md for each of these pages, one at a time, in this order. After every 3 pages, stop and show me screenshots + the curl checks:
/web-design-development-service/, /seo-services/, /social-media-management/, /paid-advertising-services/, /shopify-store-development-services/, /ai-digital-marketing-agency/, /ai-chatbot-development/, /ai-ecommerce-automation/, /ai-content-creation-services/, /ai-social-media-content-creation/, /ai-video-production-services/, /google-business-profile-optimization/, /creative-services/, /mobile-app-development-services/, /conversion-rate-optimization-services/, /brand-awareness-strategy/, /reputation-management-service/.
Respect the cannibalisation map in docs/01 — each page owns one intent and links to its siblings. Then build /services/ (hub with sticky category list) from the registry.
```

---

## Phase 5 — Industries and locations
Model: Claude Sonnet 5.5 (Thinking)

```
Phase 5. Read docs/02 (Industries hub + Location pages sections), docs/04-page-briefs-industries.md, .agents/rules/*.
1. /industries/ hub: horizontal industry chip selector driving one content panel; all 14 industries' content in the HTML; each industry has its own specific needs (no repeated three bullets).
2. W1 industry pages: /industries/ecommerce/, /industries/home-services-contractors/, /industries/real-estate-construction/.
3. W1 location pages: /locations/canada/, /locations/united-states/, /locations/uae/, /locations/pakistan/. Each must contain its own time-overlap table, local-currency price note, market-specific platforms/rules and FAQs — if two location pages share more than ~30% of their sentences, rewrite. No addresses outside Pakistan; schema Service with areaServed only.
Run page-qa on each. Show screenshots.
```

---

## Phase 6 — Work, pricing, offers, white-label
Model: Claude Opus 5.5 (Thinking)

```
Phase 6. Read docs/02 (Our Work, Pricing, Offers, White-label sections), docs/00-strategy.md (offers & pricing), docs/08-portfolio-proof.md, .agents/rules/*.
1. /our-work/ hub + case-study template (MDX in content/work/, stacked cards scroll moment, before/after slider component, GitHub block with a static contribution-graph SVG, own-brands band). Only entries with published:true show.
2. /pricing/ with a segmented control (Care plans · Builds · One-time), prices from content/pricing.ts, payment terms, Offer JSON-LD for confirmed prices only.
3. /offers/ as an ad landing page in the (lp) layout style (simplified header, single goal), the four offers, the "cost to hire separately" table using the market ranges in docs/00, proof, 30-day timeline, FAQ, inline booking placeholder. Fire GA4/Pixel events on CTA clicks.
4. /white-label-partners/ per the brief.
Run page-qa on each. Show screenshots.
```

---

## Phase 7 — Booking system
Model: Claude Opus 5.5 (Thinking) for the backend; Gemini 4 Argon is a good second opinion for the time-zone tests.

```
Phase 7. Read docs/06-booking-system.md fully and .agents/rules/*.
Build the booking system exactly as specified: config/booking.ts, Google Calendar client (OAuth refresh token from env), GET /api/booking/slots, POST /api/booking/book (zod, Turnstile, rate limit, re-check freeBusy, events.insert with Meet link and sendUpdates=all), GET /api/booking/next-slot (cached, used by the hero console via ISR).
UI: <BookingWidget variant="full|compact"> — meeting type pills, month calendar on desktop / week strip on mobile, slot buttons in the visitor's time zone with a changeable zone select, details step, confirm, success screen with Meet link + .ics + Google Calendar link. URL query state, keyboard accessible, live-region announcements, no-JS fallback text.
Replace all booking placeholders (home final CTA, offers, service pages, /book-a-call/).
Write unit tests for slot generation across DST (America/Toronto, America/Los_Angeles, Pacific/Auckland, Asia/Dubai, Asia/Karachi) and a double-booking race test. Provide .env.example and a short docs/BOOKING-SETUP.md explaining how I create the Google OAuth credentials and refresh token step by step.
```

---

## Phase 8 — About, contact, legal, blog, careers
Model: Claude Sonnet 5.5 (Thinking)

```
Phase 8. Read docs/02 (About, Contact, Legal sections), docs/09-blog-plan.md, .agents/rules/*.
1. /about-us/ (founder section for Haroon Sukhera, shift diagram across time zones, departments, operating rules marked [CONFIRM] where needed).
2. /contact-us/ with ONE contact form whose service list comes from the registry; POST /api/contact (zod, Turnstile, email via Resend or fallback), NAP + hours table, FAQ.
3. Legal: /privacy-policy/ (fix every gap listed in docs/02), /terms-and-conditions/, /cookie-policy/, /refund-and-cancellation-policy/, /code-of-conduct/ (noindex, follow; not in sitemap; linked only from /careers/). Put a visible "Last updated" date. Add a note in docs/OPEN-QUESTIONS.md that a lawyer should review them.
4. Blog: MDX pipeline (content/blog), /blogs/ index with category chips + pagination, post template per docs/09 (answer-first, key takeaways, TOC, FAQ, author box, BlogPosting JSON-LD). Migrate the existing posts I will paste/export into content/blog with their exact slugs; apply the keep/refresh/301/410 decisions from docs/09.
5. /careers/ (simple: how we hire, open roles from a content file, link to code of conduct).
Run page-qa on each template.
```

---

## Phase 9 — SEO & AI-visibility hardening
Model: Gemini 4 Argon (good at sweeping audits/refactors) or Claude Opus 5.5

```
Phase 9. Read docs/07-seo-geo-technical.md and .agents/rules/03-seo-geo.md.
Crawl the whole site in production mode and produce a table for every URL: status code, title (chars), meta (chars), H1 count, canonical, robots, JSON-LD types, word count, internal links in/out, GPTBot curl check (H1+H2 present?). Fix every problem.
Then: verify every old URL in config/redirects.ts behaves (301/410), /market/anything returns 410, non-production host sends X-Robots-Tag noindex, sitemap.xml lists only indexable published URLs, robots.txt and llms.txt match the docs, llms.txt facts match content/site-facts.ts exactly. Generate /llms-full.txt at build time from the service registry.
Report bundle sizes per route and Lighthouse mobile scores for home, one service, offers, our-work, a blog post.
```

---

## Phase 10 — Final QA and launch prep
Model: Claude Opus 5.5 (Thinking)

```
Phase 10. Go through QA-CHECKLIST.md line by line on the production build and the preview deployment (Cloudflare Workers via @opennextjs/cloudflare; write docs/DEPLOY.md with exact steps and the environment variables list). Mark each line pass/fail with evidence (screenshot, command output). Fix fails. Then list what I must do by hand on launch day (DNS, GSC, Bing, GBP link, removals for /market/, social links).
```

---

## Phase 11 (optional, after launch) — W2 pages and live AI demo
```
Build the W2 pages from docs/01 using the build-page-from-brief workflow, one at a time. Optionally add a small on-site AI assistant on /ai-chatbot-development/ that answers only from llms-full.txt content (server-side API route, rate-limited, clear "AI assistant" label, hand-off to WhatsApp) — ask me before adding any paid API.
```

---

## Small prompts you'll reuse

Fix a design problem:
```
On <page> at <390|1440>px, <describe what looks wrong>. Check it against docs/05-design-system.md, fix it without changing other pages, then show before/after screenshots.
```

Add a real testimonial:
```
Add this verified testimonial to content/testimonials.ts with verified:true and permission:true. Source: <google|clutch|upwork|email>, URL: <url>. Quote: "<exact text>". Name: <name>, Role: <role>, Company: <company>, Country: <country>. Don't edit the wording.
```

Add a case study:
```
Create content/work/<slug>.mdx from the details below using the case-study template in docs/08. Permission: <named|anonymised>. Use only these numbers: <…>. Images are in /public/work/<slug>/. Set published:true, run page-qa, show screenshots.
```
