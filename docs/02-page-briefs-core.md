# 02 — Page briefs: core pages

How to read a brief:
- **Title** ≤ 60 characters, **Meta** ≤ 155 characters, exactly one **H1**.
- **Surface** = the background family for each section (see design system). Neighbouring sections never share the same surface.
- **FAQs** are written as real customer questions. Answer each in 2–4 sentences, first sentence answers directly, include a number/price/timeframe where we have one. Render as visible accordion + `FAQPage` JSON-LD of the same text.
- Copy rules: plain English, specific, no clichés ("unlock", "elevate", "take your business to the next level", "cutting-edge", "in today's digital landscape", "we're passionate"). Every claim must exist in `site-facts.md`.

---

## Home `/`

- **Title:** Digital Marketing, Web & AI Agency | Webix Solutions
- **Meta:** Websites, SEO, paid ads, social media and AI automation from a 20+ person in-house team. Serving Canada, the US, UAE and NZ. Book a free strategy call.
- **H1:** Websites, marketing and AI automation that grow your business
- **Primary keyword:** digital marketing agency · secondary: web design and development agency, AI automation agency, offshore digital agency

Sections (compact — the whole page should feel like 7–9 screens on desktop, not 15):

1. **Hero** — Surface: Graphite with oxblood glow.
   - H1 + sub (2 sentences, answers who/what/where): "Webix Solutions is a full-service digital agency with a 20+ person in-house team. We build websites, run SEO, ads and social media, and ship AI chatbots and automations for businesses in Canada, the US, the UAE, New Zealand and Pakistan."
   - Buttons: **Book a strategy call** (primary → `/book-a-call/`) · **See packages** (secondary → `/offers/`)
   - Right side: the **Growth Console** (signature element — see design system §Signature). Four rotating cards with real outcomes + the live "Next open slot" card from the booking API.
   - Under buttons: a single proof line with server-rendered numbers: "91 custom-coded builds · 50+ CMS websites · 50+ social accounts managed".
2. **Markets & hours strip** — Surface: Porcelain. Five markets with flag-free monograms (CA, US, AE, NZ, PK) and live local times; one sentence: "Our night shift overlaps North American business hours; our day shift overlaps the UAE."
3. **Services** — Surface: Graphite. Tabs: Build · Grow · AI · Create. Each tab = 3–6 compact rows (name, one line, arrow link). One "View all services" link. NOT 24 cards.
4. **AI systems we've shipped** — Surface: Signal Red (full bleed). Three short stories with a mini flow diagram each: AI chatbot (website/WhatsApp lead capture), AI voice agent (answers calls, books jobs), Google Maps lead engine (finds businesses → enriches → sends personalised email). Link → `/ai-automation-services/`.
5. **Selected work** — Surface: Porcelain. Horizontal slider of 6 case-study cards (chamfered frames), filter chips (All · Websites · E-commerce · AI · Ads · Social). Card = image, client descriptor, one metric. "View all work".
6. **Packages teaser** — Surface: Graphite. Three offers side by side (Launch Kit, Growth Engine, AI Automation Sprint) with price + 3 bullets each → `/offers/`.
7. **How we work** — Surface: Porcelain. 4 numbered steps (it IS a sequence): Strategy call → Plan & proposal in 48 hours [CONFIRM] → Build & launch → Report & improve monthly. Horizontal on desktop, swipeable on mobile.
8. **Two ways to work with us** — Surface: Steel. Split panel: For businesses (→ book) / For agencies & IT companies (white-label, NDA → `/white-label-partners/`).
9. **What clients say** — Surface: Graphite. Renders only verified testimonials. If fewer than 3 verified exist, render instead a "Proof wall": GitHub stat block + 3 ad-result cards + platform logos.
10. **FAQ** — Surface: Porcelain. 8 questions (below).
11. **Final CTA with inline booking** — Surface: Oxblood→Graphite. Headline: "Talk to the team that will do the work." Embedded compact booking widget (date strip + slots) + WhatsApp link.

Home FAQs:
1. What does Webix Solutions do? (services list in one sentence + markets)
2. How much does a website cost with Webix Solutions? (from $499 Launch Kit; custom builds quoted after a call)
3. Do you work with businesses outside Pakistan? (yes — CA, US, UAE, NZ; time-zone overlap via night shift)
4. What time zone do you work in? (two shifts, exact PKT + ET hours)
5. Who owns the website and ad accounts? (client owns domain, ad accounts, content; website ownership per package terms)
6. Do I pay ad spend separately? (yes, directly to Meta/Google; our fee is management only)
7. Can you work white-label for my agency? (yes, NDA, unbranded deliverables)
8. Is Webix Solutions related to the Webix JavaScript library? (no — different company)

---

## About `/about-us/`

- **Title:** About Webix Solutions | In-House Digital & AI Team
- **Meta:** Founded by Haroon Sukhera, Webix Solutions is a 20+ person in-house team building websites, growth marketing and AI systems for clients worldwide.
- **H1:** About Webix Solutions
Sections:
1. Intro (Porcelain): who we are in 3 sentences (positioning line) + founder portrait.
2. Founder story (Graphite): Haroon Sukhera — started as a freelance WordPress/CMS developer, built the agency, now runs own brands too (Zelvomart, LaptopSouq.ae, Miraj Builders [CONFIRM public]). First-person quote from Haroon (he writes/approves it).
3. Team by department (Porcelain): grid of departments with headcount only if confirmed — SMM, SEO, paid ads, video, design, WordPress, full-stack, Flutter, CRM, Google Maps/GBP, product management. Team photos if available (real photos only).
4. How we work across time zones (Steel): shift diagram (24-hour bar showing PKT shifts vs ET/PT/GST/NZT).
5. Numbers (Graphite): server-rendered stats from site-facts.
6. Values as operating rules (Porcelain): e.g. "Reply within one business day" [CONFIRM], "Weekly written update", "You own your accounts" — only rules Webix actually follows.
7. Where we are (Porcelain): HQ Dunyapur, Punjab, Pakistan; meetings in Lahore by appointment; markets served.
8. CTA (Signal Red).
Schema: `AboutPage`, `Organization` (founder → `Person` Haroon Sukhera with `sameAs` LinkedIn).
FAQs: Who founded Webix Solutions? · Where is Webix Solutions based? · How big is the team? · Do you outsource work? (no — in-house; say only if true) · Can I meet the team? (video calls; Lahore by appointment)

---

## Services hub `/services/`

- **Title:** Digital Marketing, Web & AI Services | Webix Solutions
- **Meta:** Every service in one place: websites, Shopify, apps, SEO, AI search, Google Maps, paid ads, social media, AI chatbots, automation and AI video.
- **H1:** Services
Layout: sticky left category list (Build / Grow / AI / Create) + right column of service rows (name, one-line outcome, starting price if confirmed, link). Mobile: category chips + list. Then "Not sure where to start?" → book a call. FAQs: Which service should I start with? · Can I combine services? · Do you offer monthly packages? · Do you sign NDAs?

---

## Industries hub `/industries/`

- **Title:** Industries We Serve | Webix Solutions
- **Meta:** Marketing, websites and AI automation for e-commerce, contractors, real estate, clinics, professional services, restaurants and more.
- **H1:** Industries we serve
Layout: horizontal-scrolling industry selector (chips) driving one content panel (what this industry struggles with → what we do → relevant services → case study link). This keeps 14 industries in one screen height instead of a long list. Each industry gets **different** top needs (current site repeats the same three for every industry — fix this).
Industry → specific needs (examples to write from):
- E-commerce: product page CRO, catalog SEO, Meta/Google Shopping ads, AI support & order automation
- Home services & contractors: Google Maps visibility, call tracking, missed-call AI receptionist, local service ads, review generation
- Real estate & construction: listing pages, lead forms to CRM, project galleries, WhatsApp follow-up
- Healthcare & clinics: appointment booking, local SEO, reputation, privacy-aware forms
- Professional services: authority content, LinkedIn, consultation booking, AI intake chat
- Restaurants: Google Maps, menus with schema, reels, reservations/ordering links
- SaaS & startups: landing pages, product-led SEO, paid acquisition tests, onboarding automation
- Education & training: course pages, enrolment funnels, webinar ads
- Automotive: inventory pages, local ads, review generation
- Multi-location: location pages done right, GBP at scale, central reporting
- Fitness & wellness: memberships, class booking, reels
- Beauty & salons: booking integration, Instagram, reviews
- Logistics & trucking: driver recruitment ads, quote forms, Google Maps
- Travel & immigration consultants: trust content, WhatsApp funnels, lead qualification bots
FAQs: Do you specialise in one industry? · Have you worked with businesses like mine? · Do you work with startups?

---

## Pricing `/pricing/`

- **Title:** Pricing — Website, SEO, Ads & AI Plans | Webix Solutions
- **Meta:** Clear prices for care plans, website builds, SEO, ads and AI automation. Packages from $399/month. Ad spend is paid directly to the platforms.
- **H1:** Pricing
Sections: monthly care plans (3 cards) → build prices "from" table → one-time services list → packages banner → payment terms (40% deposit, retainer billing, ad spend direct) → what's never included (ad spend, paid stock, third-party subscriptions) → FAQ → CTA.
Use a segmented control (Care plans · Builds · One-time) so the page stays short.
Schema: `Service` + `Offer` with `price`, `priceCurrency: USD` for each priced item (only confirmed prices).
FAQs: Why are your prices lower than US agencies? (team in Pakistan; same tools and process) · Is there a contract? · How do payments work for international clients? [CONFIRM methods] · Can I cancel? (link refund policy) · Do prices include ad spend? (no)

---

## Offers `/offers/` (ad landing page)

- **Title:** Growth Packages from $399/month | Webix Solutions
- **Meta:** Website, social media, ads and Google Maps managed by one team from $399/month. Or launch in 14 days for $499. Book a free strategy call.
- **H1:** Growth packages for businesses that want results, not reports
Landing-page rules: header simplified (logo + Book a call + WhatsApp, no mega menu), one goal, fast LCP (<2.0 s on 4G), Meta Pixel + GA4 events on CTA clicks and bookings.
Sections:
1. Hero (Graphite): H1, sub with the 4 offers, CTA "Book a free strategy call", trust line (markets + numbers).
2. Offer cards (Porcelain): Launch Kit · **Growth Engine (featured)** · Growth Engine Pro · AI Automation Sprint. Each: price, who it's for, full inclusions, delivery time, guard-rails in small print (min term, ad spend excluded).
3. "What it would cost to hire this separately" comparison table (Steel): typical US/Canada agency ranges vs our package (use market numbers from `00-strategy.md`; cite as "typical market range", not as a competitor's price).
4. Proof (Graphite): 3 case-study cards + ad-result cards.
5. Timeline of the first 30 days for Growth Engine (Porcelain).
6. FAQ (Porcelain → keep surfaces alternating by placing FAQ on Steel).
7. Booking widget inline (Oxblood).
FAQs: What's the minimum term? · What if I already have a website? (redesign included) · Which ad platforms? · Who writes the content? · What happens after 6 months? · Can I upgrade?

---

## Our Work `/our-work/`

- **Title:** Our Work — Websites, E-commerce, AI & Ads | Webix Solutions
- **Meta:** Case studies from 91 custom-coded builds, 50+ CMS websites and 50+ managed social accounts: websites, Shopify, CRM, AI agents and ad campaigns.
- **H1:** Our work
Sections: stats band (server-rendered) → filter chips (All, Websites, E-commerce, Custom software & CRM, AI & automation, Paid ads, Social media) → case-study grid (chamfered frames; 2 columns desktop, 1 mobile; 8 visible, "Show more") → "Our own brands" band (Zelvomart, LaptopSouq.ae, Miraj Builders) → GitHub activity block (91 repos, 1,053 contributions/year, link to org) → platforms we build on (logo marquee: WordPress, Shopify, Wix, Webflow, Squarespace, WooCommerce, Next.js, React, Node.js, Flutter, Laravel [CONFIRM list]) → CTA.
Case-study page template (`/our-work/<slug>/`): hero with descriptor ("Electrical contractor · United States"), challenge, what we built (bullets), results (only real numbers), stack chips, gallery (desktop+mobile mockups), before/after slider where we have both, related services, CTA. Schema: `CreativeWork` (or `Article`) + `BreadcrumbList`.

---

## Contact `/contact-us/`

- **Title:** Contact Webix Solutions | Book a Call or Get a Quote
- **Meta:** Call +92 322 9472354, email info@webixsolutions.com, message us on WhatsApp or book a free strategy call. Replies within one business day.
- **H1:** Contact us
Sections: three big action tiles (Book a call · WhatsApp · Email) → one clean form (name, email, phone/WhatsApp, company, website, service (single list from the content registry — ONE list, not the two inconsistent lists on the old site), budget range, message, Turnstile) → NAP block + working hours table (PKT / ET / PT / GST / NZT) → markets served → FAQ.
Schema: `ContactPage` + `Organization` contactPoint.
FAQs: How fast do you reply? [CONFIRM] · Can we talk on WhatsApp? · Do you have an office I can visit? (HQ Dunyapur; Lahore meetings by appointment) · What should I prepare before a call?

---

## Book a call `/book-a-call/`

- **Title:** Book a Free Strategy Call | Webix Solutions
- **Meta:** Pick a time that suits you — slots shown in your own time zone. 30-minute video call with the Webix Solutions team. No obligation.
- **H1:** Book a free strategy call
Spec in `06-booking-system.md`. Page: left column = what the call covers (3 bullets), who you'll meet (Haroon or department lead [CONFIRM]), what happens after; right = booking widget. Mobile: widget first.

---

## White-label partners `/white-label-partners/`

- **Title:** White-Label Web, Marketing & AI Partner | Webix Solutions
- **Meta:** Outsource websites, social media, SEO and AI automation to an in-house team that works your hours. Unbranded delivery, NDA, partner pricing.
- **H1:** White-label delivery partner for agencies and IT companies
- **Primary keywords:** white label web development, white label digital marketing, outsource web development to Pakistan, offshore development partner
Sections:
1. Hero (Graphite): H1 + "Sell it under your brand. We build it, on your time zone, under NDA." CTA "Book a partner call".
2. What we deliver white-label (Porcelain): websites (WordPress, Shopify, Next.js), Flutter apps, SMM content, SEO, ads management, AI chatbots/automation, video editing.
3. How it works (Steel): numbered 5-step flow — NDA → pilot project → dedicated channel (Slack/WhatsApp) → delivery with QA checklist → monthly capacity planning.
4. Guarantees we can actually keep (Graphite): unbranded files, no client contact unless you ask, your project-management tool, timezone overlap, revision policy [CONFIRM all].
5. Partner pricing (Porcelain): "Partner rate card on request" or confirmed % [CONFIRM].
6. Pilot offer (Signal Red): first project at partner rate with a defined scope [CONFIRM].
7. FAQ + partner booking (Graphite).
FAQs: Will my clients know you exist? · How do you handle quality? · What tools do you use? · How do payments work? · Can you join our client calls as our team?

---

## Location pages `/locations/<market>/`

Each must be **genuinely different** (not a city-name swap). Required unique content per market:
- Local time overlap table (exact hours in that market's time zone).
- Pricing in local currency equivalent (CAD, USD, AED, NZD; PKR on request) — display "approx." with a fixed rate note [CONFIRM rates].
- Market-specific platforms & rules: Canada — CASL consent for email marketing, Google Local Services Ads; US — Local Services Ads, state-level privacy notes, contractor focus (Texas etc.); UAE — WhatsApp-first commerce, Arabic/English pages, Meta + Snapchat/TikTok; New Zealand — NZ Privacy Act 2020, small-business focus; Pakistan — COD e-commerce, WhatsApp funnels, Daraz.
- 1–2 relevant case studies from that market (only real).
- Market FAQ (5).

Titles/metas:
- Canada — **Title:** Digital Marketing & Web Agency for Canada | Webix Solutions · **Meta:** Websites, SEO, Meta and Google ads and AI automation for Canadian businesses — working Eastern and Pacific business hours. Prices in CAD.
- United States — **Title:** US Web Design, SEO & AI Agency | Webix Solutions · **Meta:** Custom websites, SEO, Google and Meta ads, and AI receptionists for US businesses and contractors — on your business hours, at offshore prices.
- UAE — **Title:** Digital Marketing & Web Agency for the UAE | Webix Solutions · **Meta:** Websites, Shopify stores, WhatsApp-first ads and AI chatbots for businesses in Dubai, Abu Dhabi and across the UAE. Day-shift overlap with GST.
- New Zealand — **Title:** Web & Digital Marketing Agency for NZ | Webix Solutions · **Meta:** Websites, Google Maps, SEO and ads for New Zealand businesses, with a team online during your mornings. Prices in NZD.
- Pakistan — **Title:** Digital Marketing Agency in Pakistan | Webix Solutions · **Meta:** Websites, COD e-commerce stores, Meta and WhatsApp ads, SEO and AI automation for Pakistani businesses. Quotes in PKR. Book a call or WhatsApp us.
H1 pattern: "Digital marketing, websites and AI for businesses in Canada" (etc.).
Schema: `Service` with `areaServed` = the country. No fake `LocalBusiness` address for that country.

---

## Legal pages
Write in plain English, dated, with the company name, Dunyapur address and email. Not legal advice — Haroon should have a lawyer review.
- **Privacy policy** — fix the gaps found on the current page: name the processors (hosting, email, Google Calendar for bookings, analytics: GA4, Microsoft Clarity, Meta Pixel), state retention periods, describe the cookie consent banner, list rights for users in Canada (PIPEDA), the EU/UK (GDPR, if any EU traffic), California (CCPA basics), New Zealand (Privacy Act 2020) and UAE (PDPL), cross-border transfer note, breach notification, complaint route.
- **Terms and conditions** — website use, quotes/proposals, IP ownership after payment, payment terms (deposit, invoicing), limitation of liability, governing law (Pakistan) [CONFIRM].
- **Cookie policy** — list each cookie/script and purpose; link to banner settings.
- **Refund & cancellation policy** — deposits, monthly retainers (notice period), offers minimum term, one-time projects (milestone-based refunds) [CONFIRM all rules with Haroon].
- **Code of conduct** — keep text, `noindex, follow`, out of sitemap.
