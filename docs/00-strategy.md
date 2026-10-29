# 00 — Strategy: what this website must do

## The job of the site

1. Make a business owner in Toronto, Austin, Dubai or Auckland trust a Pakistan-based team enough to book a call.
2. Make an agency or IT company abroad see Webix Solutions as a safe white-label delivery partner.
3. Be readable and quotable by Google and AI assistants (ChatGPT, Claude, Perplexity, Gemini, Copilot).
4. Act as the landing page for paid ads (offers page) and as the portfolio Haroon sends in proposals.

Primary conversion: **booked strategy call** (calendar booking). Secondary: offer enquiry, WhatsApp chat, contact form, partner enquiry.

## Positioning

**One-line positioning (use in hero sub, llms.txt, About, schema description):**
Webix Solutions is a full-service digital agency with a 20+ person in-house team. We design and code websites, run SEO and paid ads, manage social media and build AI chatbots and automations for businesses in Canada, the United States, the UAE, New Zealand and Pakistan — and we work white-label for agencies.

**Why us — three honest differentiators (no fluff):**
1. **One in-house team, every discipline.** Developers, designers, video editors, SEO, ads and AI automation under one roof. No freelancer chains.
2. **Your hours, not ours.** We run a dedicated night shift (9 PM–5 AM Pakistan time), which overlaps North American business hours and New Zealand mornings; our day shift overlaps the UAE.
3. **Senior output at offshore cost.** Custom-coded sites (91 builds/repositories), 50+ CMS sites and 50+ social accounts managed — priced below US/Canada agency rates.

### On being Pakistan-based (decision)
Do **not** hide that the team is in Pakistan. Hidden origin gets discovered on the first call and kills trust; stated origin + time-zone overlap + clear process *is* the white-label selling point. Present it as "Delivery team in Pakistan, working your hours".
- Contact/schema address: Dunyapur, Punjab, Pakistan (must match Google Business Profile exactly).
- Copy can add: "Meetings in Lahore by appointment." When the Lahore move happens, switch NAP everywhere on the same day.
- Do not list addresses in Canada/US/UAE/NZ. Say "Clients in" / "Markets we serve".

### Pakistani clients (decision)
Yes, keep serving them — Pakistan already brings most of our search clicks. Give Pakistan one proper location page (`/locations/pakistan/`) and keep the rest of the site international (USD pricing). PKR pricing "on request".

## Audiences

| Audience | What they need to see | Main pages |
|---|---|---|
| SMB owner (CA/US/UAE/NZ) — service businesses, contractors, clinics, e-commerce | Proof, clear prices, fast replies, time-zone overlap, who owns the work | Home, services, offers, work, book |
| E-commerce brands | Store builds, ads results, AI automation for support/orders | Shopify, AI e-commerce automation, paid ads |
| Agencies & IT companies abroad (white-label) | NDA, unbranded delivery, partner pricing, capacity, process, QA | /white-label-partners/ |
| Pakistan businesses | Local trust, WhatsApp, PKR quotes | /locations/pakistan/ |

## Offers & pricing (market-checked, priced below market; all in `content/pricing.ts` so Haroon can change them)

Market reference points (2026): US/Canada small-business full-service marketing usually runs $2,000–$5,000/month; agency social media management $500–$2,000/month at the basic tier; AI UGC video ads $400–$900 per finished ad from agencies; custom AI chatbots $10,000+ from Western studios. Offshore partners commonly charge 2–3x less.

### Offers page (`/offers/`) — ad landing page

| Offer | Price | What's inside | Guard-rails |
|---|---|---|---|
| **Launch Kit** (one-time) | $499 | 5-page custom website (mobile-first, server-rendered, SEO-ready), Google Business Profile setup & optimisation, basic SEO + AI-search setup (schema, llms.txt, sitemap), 15 launch social posts, 30 days of support. Delivered in ~14 days. | Content/images supplied by client or AI-generated; extra pages priced separately |
| **Growth Engine** (Haroon's offer) | $399/month | Website (new or redesign, up to 5 pages) delivered in month 1 + hosting & care, social media management on 2 platforms (12 posts incl. 4 reels/month), Meta ads management (1 platform), Google Business Profile management, monthly report + call | **6-month minimum.** Ad spend paid by client directly to Meta. Website ownership transfers in full after the minimum term (or buy-out fee if cancelled early) — put this in the contract |
| **Growth Engine Pro** | $799/month | Everything in Growth Engine + Google Ads, 20 posts incl. 8 reels (AI video), SEO & AI-search: 2 new/optimised pages or articles per month, AI lead-capture chatbot on the website with WhatsApp/email follow-up, quarterly CRO landing page, bi-weekly calls | 6-month minimum. Ad spend + AI usage (API) costs billed at cost |
| **AI Automation Sprint** (one-time) | $999 | One production AI system in ~21 days: website/WhatsApp chatbot trained on your business, OR AI voice receptionist, OR lead-generation automation (e.g. Google Maps lead list → enrichment → personalised email). 30 days of tuning included. Optional care $99/month after | Third-party usage costs (OpenAI, telephony, email sending) billed at cost |

All prices are **[CONFIRM]** — Haroon said they can change later. Keep them in one config file.

### Pricing page (`/pricing/`) — full menu (keep current structure, clean it up)
- Monthly care plans (existing): Foundation Care $99, Growth Care $149, Performance Care $299 — keep, rewrite descriptions to be specific.
- "Build" prices — *starting from* [CONFIRM each]: Business website, Shopify store, custom web app (Next.js), mobile app (Flutter), custom CRM, AI chatbot, AI voice agent.
- One-time services (existing list) — keep, fix wording (e.g. "Website Design $99–$299" currently describes a "fix sprint" — rename to "Website fix sprint").
- Existing payment terms stay: 40% onboarding deposit, ad spend paid directly to platforms.
- Link to `/offers/` ("Prefer a bundle? See growth packages") and to `/white-label-partners/`.

### White-label partner pricing
Show "Partner rates are 25–40% below our retail prices" only if Haroon confirms; otherwise "Partner rate card on request" with a form. [CONFIRM]

## Proof strategy (high-ticket clients buy proof, not adjectives)

1. Case studies with numbers (see `08-portfolio-proof.md`): problem → what we built → result → stack.
2. Own brands shown by name (Zelvomart, LaptopSouq.ae, Miraj Builders) as "built and run by our team".
3. Live GitHub stat block (91 repos, 1,053 contributions/year) linking to the org.
4. AI systems shown as short screen-recordings or clean UI renders with demo data.
5. **Testimonials: real only.** See below.
6. Process transparency: what happens in week 1, who you talk to, how you get reports.

### Testimonials and reviews
The site ships with a testimonial component that only renders entries marked `verified: true` with a `source` (Google, Clutch, Upwork, LinkedIn, email with permission). No invented names. No `Review`/`AggregateRating` schema for our own reviews (Google ignores self-serving review markup for an organisation, and fake markup risks a manual action).
**Collection plan (week 1):** message 10 past clients (WhatsApp, short), ask for a Google review + one sentence for the site + permission to show their first name, company and country. Ask 2–3 for a 30-second phone video. Ask Bright Shine Studio and other Upwork clients for Upwork feedback. Add Clutch and GoodFirms profiles.

## Brand entity problem (important)
Search "Webix Solutions" today and our own site does not lead the results; "webix" also collides with the Webix UI library (webix.com) — GSC shows people searching "webix login", "webix license", "webix coupons". Fixes:
- Always "Webix Solutions" (two words) in titles, schema `name`, OG tags, GBP, socials.
- `Organization` schema with `sameAs` to every real profile (LinkedIn, Facebook, Instagram, YouTube, X, GitHub, GBP, Clutch, Upwork agency).
- One FAQ: "Is Webix Solutions related to the Webix JavaScript library?" → "No. Webix Solutions is a digital agency founded by Haroon Sukhera…"
- Build real off-site profiles: Clutch, GoodFirms, DesignRush, Crunchbase, LinkedIn company page (complete), Product Hunt maker page already exists (hunted.space shows webixsolutions.com).

## Google Business Profile (Google Maps) plan
GSC/GBP show impressions with few clicks. Actions:
- Primary category: "Internet marketing service"; secondary: "Website designer", "Marketing agency", "Software company", "Social media agency" [check availability in GBP].
- Service-area business: hide street address if the location is not staffed for walk-ins; service areas = Pakistan cities you actually serve. GBP cannot be used for Canada/US/UAE/NZ without a real staffed location there — use the website + Clutch for those markets.
- Name exactly "Webix Solutions" (no keywords in the name — that gets profiles suspended).
- Weekly GBP posts (reuse case studies/offers), 20+ real photos (team, office, work on screens), services list with prices, Q&A seeded with real FAQs, booking link → `/book-a-call/`, UTM on website link (`?utm_source=gbp&utm_medium=organic`).
- Reviews: the collection plan above. Reply to every review.
- Sell this as a service page too: `/google-business-profile-optimization/`.
