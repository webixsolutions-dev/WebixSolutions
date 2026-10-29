# Webix Solutions — website rebuild kit for Antigravity

This folder is everything Antigravity needs to rebuild webixsolutions.com properly: the strategy, every page's content brief, the design system, the booking system spec, the SEO/AI-visibility rules, and the prompts to run phase by phase.

**Why not one big prompt?** One giant prompt makes the agent skim, guess and fall back to a template look (that's what happened last time). This kit works like a real agency handover: rules the agent always follows + spec documents it reads + small phases you review with screenshots.

---

## Step by step

1. **Copy this whole folder into the root of your website repo** (the project running on localhost:3000). You should then have `AGENTS.md`, `.agents/rules/`, `.agents/workflows/`, `docs/`, `prompts/`, `public-files/` and `QA-CHECKLIST.md` in the repo root.
2. Open the repo in Antigravity. Check that the four rules in `.agents/rules/` show up as workspace rules (Customizations panel). Each file is under the 12,000-character limit.
3. Open `prompts/PROMPTS.md`. Start **Phase 0** in a new conversation, in Planning mode, with the model listed for that phase.
4. Read the plan it makes. Approve or correct. Let it build.
5. After every page it must show you screenshots at 390 / 768 / 1440 px. If something looks generic, use the "Fix a design problem" prompt at the bottom of PROMPTS.md.
6. One phase per conversation. Don't skip Phase 0 and Phase 1 — the foundation is what makes the rest look premium.
7. Before launch, go through `QA-CHECKLIST.md`.

---

## Which model to use in Antigravity

| Work | Model | Why |
|---|---|---|
| Phase 0–3, 6, 7, 10 (plan, foundation, home page, template, offers, booking, final QA) | **Claude Opus 5.5 (Thinking)** | Highest quality for design taste, architecture and tricky logic. Worth the quota here |
| Phase 4, 5, 8 (many pages on a frozen template) | **Claude Sonnet 5.5 (Thinking)** | Faster and uses less quota; the template and rules carry the quality |
| Phase 9 (site-wide SEO sweep), second opinions, when Claude quota runs out | **Gemini 4 Argon** | Strong at large refactors and audits. Gemini and Claude have separate quota pools, so switching keeps you working |
| Tiny text or CSS fixes | Gemini 3.8 Flash | Cheap and quick |
| Avoid | GPT-OSS 120B | Weakest option here; Antigravity's model page says it is being removed on Nov 2, 2026 |

Fair test for the hero: run the Phase 2 prompt with Opus 5.5 in one branch and Gemini 4 Argon in another, compare screenshots, keep the better one. (I'm a Claude model, so I'd rather you decide on screenshots than on my word.)

---

## What I found on the current site (short version)

1. **The site was hacked.** Search Console lists 982 indexed spam URLs like `/market/R04184209678`, and indexed pages jumped from 416 to 68,336 in August. Clean the WordPress install now (malware scan, passwords) — the new site returns "410 Gone" for all of them.
2. **Only brand searches bring clicks** (83 clicks in 3 months, 76 to the homepage). Real demand exists ("ai automation solutions" had 1,031 impressions) but we sit on page 6–7.
3. **AI crawlers see empty numbers.** Counters show "0" without JavaScript. The new build server-renders everything.
4. **"Webix" collides with the Webix UI library** — people searching "webix login / license / coupons" land on you, and a search for "Webix Solutions" doesn't show your site first. The kit fixes the brand entity (schema, profiles, consistent name).
5. **Thin pages:** service pages are 400–700 words, no FAQs, no prices, broken heading levels, typos, two different quote forms.
6. **The Industries page repeats the same 3 needs for every industry**, and "Our Work" has no projects on it.

Full details: `docs/07-seo-geo-technical.md` and `docs/01-sitemap-url-map.md`.

---

## Decisions I made (change them if you disagree)

- **Pakistan is shown, not hidden.** HQ Dunyapur (same as your Google Business Profile), "meetings in Lahore by appointment". Foreign clients find out on the first call anyway; being upfront + working their hours is the trust builder. When you move to Lahore, update address everywhere on the same day.
- **No addresses in Canada / US / UAE / NZ.** They become "markets we serve" with real location pages (time-zone tables, local currency, local rules) — not copy-paste city pages, which Google treats as spam.
- **Pakistani clients:** yes, one proper `/locations/pakistan/` page; the rest of the site stays international in USD.
- **Offers page** with 4 packages: Launch Kit $499 one-time, Growth Engine $399/month (your offer, with a 6-month minimum so clients can't take the website and leave), Growth Engine Pro $799/month, AI Automation Sprint $999. All prices sit in one file so you can change them.
- **Booking:** custom calendar (date → time slot → 4 fields → booked with a Google Meet link), running free on Google Calendar. **No dashboard needed** — Google Calendar is the dashboard. Slots are set around your two shifts so US, Canada, UAE and NZ clients all get times in their working hours.
- **No CMS.** Content lives in files in the repo, as you wanted.
- **Hosting:** Vercel's free plan doesn't allow business use, so the kit targets Cloudflare (free, business use allowed).
- **Design:** "Cut & Glass" — the 45° cuts from your logo become the visual identity (cut corners, notched section joins), red used as full sections, liquid glass only in 4 places (header, hero console, booking, mobile bar), every section on a different background, long lists turned into tabs/sliders so the page stays short. Fonts: Clash Grotesk + Switzer (free for commercial use).
- **Code of Conduct** stays live but is `noindex` and removed from the sitemap.

---

## About the reviews

I didn't write made-up client reviews. Fake testimonials on a live agency site are exactly what high-ticket clients and Google look for — one reverse-image search or "can I speak to this client?" and the deal is gone, and Google can penalise invented review markup. Instead, the site only shows reviews marked verified, and until 3 real ones exist it shows a proof wall (GitHub activity, ad results, own brands). There's a short WhatsApp message in `docs/08-portfolio-proof.md` to collect real reviews from past clients this week — with 60+ clients, 5–10 real ones is very doable.

---

## What you need to confirm (also collected in `docs/OPEN-QUESTIONS.md` during Phase 0)

- Founding year, current team size, "60+ clients" claim
- Which ad account each result belongs to (and whether Zelvomart, LaptopSouq.ae, Miraj Builders can be shown by name)
- All package prices and "build from" prices
- Booking hours (default in `docs/06-booking-system.md`)
- Social profile URLs, Haroon's LinkedIn URL
- Which client projects can be named
- Whether `/ai-contextual-governance-solution/` should be removed
- Payment methods for international clients
- Refund/cancellation rules

## What you need to do by hand

- Clean the hacked WordPress site (now, before anything else).
- Create Google OAuth credentials + Cloudflare Turnstile keys for booking (Phase 7 writes the step-by-step guide).
- Generate images with the prompts in `docs/08-portfolio-proof.md` (ChatGPT or Nano Banana inside Antigravity) — and get the hero monogram matched to your real logo.
- Collect real reviews and client permissions.
- Re-shoot the CRM screens with demo data (never use the real business dashboard publicly).
- Export the existing blog posts from WordPress for Phase 8.

---

## Folder map

```
AGENTS.md                         short always-read instructions
.agents/rules/                    4 always-on rules (stack, design, SEO, copy & truth)
.agents/workflows/                build-page-from-brief, page-qa
docs/00-strategy.md               positioning, markets, offers, pricing, proof, GBP plan
docs/01-sitemap-url-map.md        every URL, nav, redirects, 410s, noindex
docs/02-page-briefs-core.md       home, about, hubs, pricing, offers, work, contact, booking, white-label, locations, legal
docs/03-page-briefs-services.md   26 service pages: titles, metas, H1s, keywords, FAQs
docs/04-page-briefs-industries.md industry pages
docs/05-design-system.md          "Cut & Glass" design system + 21st.dev references + wireframes
docs/06-booking-system.md         calendar booking spec
docs/07-seo-geo-technical.md      rendering, schema, robots, llms.txt, hosting, migration, AI assistant test
docs/08-portfolio-proof.md        case studies, proof blocks, review collection, 20 image prompts
docs/09-blog-plan.md              keep/refresh/remove + 24 new posts
docs/site-facts.md                the only source for numbers and claims
public-files/robots.txt, llms.txt ready-to-use files
prompts/PROMPTS.md                Phase 0–11 prompts + reusable small prompts
QA-CHECKLIST.md                   launch checklist
```
