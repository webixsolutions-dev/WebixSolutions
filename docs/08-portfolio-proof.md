# 08 — Portfolio, proof and image prompts

## Rule for every case study
Problem → what we built → result (only real numbers) → stack → related service. Client named only with written permission; otherwise a descriptor ("Electrical contractor · United States"). Cover image may be art-directed 3D; the screenshots *inside* the case study must be real (re-shot with demo data where the real data is private). Never present an AI-generated "screenshot" as the real product.

Store case studies as MDX in `content/work/<slug>.mdx` with front-matter: `title, descriptor, country, services[], stack[], metrics[{label,value,source}], cover, gallery[], permission: "named"|"anonymised", published: boolean`.

## Launch set (W1 — 4 to 6 case studies)

| Slug | Title | What to show | Data needed from Haroon |
|---|---|---|---|
| `zelvomart-ecommerce-platform` | Zelvomart — custom e-commerce platform + WhatsApp ads (own brand) | Next.js storefront + admin, product page redesign, COD flow, click-to-WhatsApp campaigns (Rs 15.01 per conversation if this is Zelvomart's account) | Confirm the ads account, screenshots of storefront (mobile), permission to name |
| `custom-crm-agency-operations` | Custom CRM for agency operations | Modules: HR, tools & access, client management, business dashboard, tasks & projects, team communication | Re-shoot all screens with demo data (fake clients like "Northwind Dental"), never real P&L |
| `ai-lead-engine-google-maps` | AI lead engine: from Google Maps to personalised outreach | Flow diagram: search by niche + city → collect public business data → enrich (website, email) → AI writes a personalised first line → human review → send → reply tracking | Volume numbers (leads/day, reply rate) if real; screen recording of the flow (n8n/Make/code) |
| `ai-voice-receptionist` | AI voice receptionist for service businesses | Call flow: answer → qualify → book → SMS summary. Audio clip (demo voice) + transcript | Which platform/stack was used; any real call stats |
| `us-contractor-websites` | Websites for US contractors (3 builds) | Electrical contractor, exterior & holiday-lighting installer, garage-bay leasing — before/after slider, mobile screens, click-to-call | Permission to name or keep anonymised; before screenshots |
| `meta-ads-lead-generation` | Meta ads: leads and WhatsApp conversations across 3 markets | Results cards rebuilt from Ads Manager numbers in site-facts (no raw screenshots) | Industry per account, permission |

## W2 additions
LaptopSouq.ae (Dubai store rebrand + catalog), Miraj Builders platform, fightwear store rebuild (Elementor), personal-training one-page site, plant-based powders store, book landing page, invoice system, before/after comparison tool, AI chatbot (website/WhatsApp), social media management showcase (grid of real posts/reels with permission — 50+ accounts).

## Proof blocks used across the site
- **Stat band** (server-rendered): 91 custom-coded builds · 50+ CMS websites · 50+ social accounts managed · markets: CA, US, UAE, NZ, PK. ("60+ clients" and "3+ years" only after [CONFIRM].)
- **GitHub block**: "1,053 contributions in the last 12 months across 91 repositories" + static contribution-graph SVG (regenerate monthly; don't call the GitHub API on page load) + link to github.com/webixsolutions-dev.
- **Ad result cards**: label · metric · market · objective. E.g. "WhatsApp conversations · Rs 15.01 each · Pakistan · e-commerce". Footnote: "Results from live campaigns; past results don't guarantee future performance."
- **Platform marquee**: tools and platforms we build on/use (logos are fine as tool references).

## Do-not-publish list
CEO business dashboard (internal profit/loss, salaries), ROAS/ROI tiles, real client names/logos without permission, any review a client didn't give, HBL account details.

## Testimonials — collection script (send on WhatsApp, short, Haroon's voice)
"Hi {name}, hope all is well. We're launching our new website and I'd really value a short review of working with Webix Solutions. Could you leave one on Google here: {GBP review link}? And would you be okay if we show your first name, company and country with it on our site? Thanks a lot."
Store each approved quote in `content/testimonials.ts` with `{ quote, name, role, company, country, source: "google"|"clutch"|"upwork"|"email", sourceUrl?, permission: true, verified: true }`. The component renders only `verified && permission` items.

---

## Image prompts (ChatGPT / Nano Banana)

Use the same style block at the start of every prompt so all images look like one family. Generate at 1536×1024 (landscape) or 1024×1536 (portrait), then convert to AVIF/WebP. No text in images (add text in HTML). Re-generate until edges are clean.

**Style block (paste first, every time):**
> Premium 3D product-render style. Objects made of glossy red lacquer (#ED1C24) and brushed dark graphite metal, with small frosted-glass details. Soft studio lighting, gentle reflections, subtle film grain. Clean geometric forms with 45-degree cut corners. Seamless background in solid {#141519 dark graphite | #F4F5F7 cool light grey}. Minimal, engineered, high-end tech agency look. No text, no letters, no logos, no people, no hands. Lots of negative space on the {left|right} side for headline text.

Prompts (append after the style block):
1. **Hero monogram** — "A large abstract monogram made of two interlocking angular strokes forming a 'W' and an 'S', with 45-degree cut ends, red lacquer front faces and graphite sides, floating at a slight angle, a faint red glow beneath. Dark background. Negative space on the left." (Then ask your designer to replace it with the true logo geometry in 3D/Blender if ChatGPT can't match the mark — logo accuracy matters.)
2. **Web design & development** — "A floating stack of three thin graphite slabs like browser windows, the top one with a red lacquer cut corner, tiny glass UI blocks hovering above. Light background."
3. **SEO / AI search** — "A graphite magnifying lens with a frosted glass lens, resting on stepped red lacquer bars rising left to right like a ranking chart. Dark background."
4. **Social media management** — "Floating rounded-square tiles in red lacquer and graphite arranged in a loose grid like a content calendar, two tiles showing glass play-button shapes. Light background."
5. **Paid advertising** — "A red lacquer arrow-shaped prism hitting a graphite target made of concentric cut-corner rings, small glass particles bursting. Dark background."
6. **AI automation** — "Graphite nodes connected by thin glowing red lines forming a workflow, one central frosted glass cube with a soft red light inside. Dark background."
7. **AI chatbot** — "Two speech-bubble shapes with cut corners, one red lacquer and one frosted glass, overlapping, three small graphite dots inside the glass bubble. Light background."
8. **AI voice agent** — "A sleek graphite telephone-handset form standing upright with red lacquer sound-wave rings radiating from it, glass rings between. Dark background."
9. **AI video production** — "A graphite film clapperboard with a red lacquer top bar, a frosted glass play-button prism floating in front, a few film-frame tiles orbiting. Light background."
10. **AI content creation** — "A red lacquer fountain-pen nib merged with a graphite circuit block, small glass pages floating upward. Dark background."
11. **E-commerce automation** — "A graphite shopping bag with a red lacquer handle, small glass parcels on a looping conveyor ribbon around it. Light background."
12. **Shopify / e-commerce build** — "A red lacquer storefront awning shape over a graphite display plinth with three glass product cubes. Dark background."
13. **Google Business Profile / Maps** — "A red lacquer map-pin with a cut-corner top standing on a folded graphite map surface with glass grid lines. Light background."
14. **Mobile apps** — "Two graphite phone slabs at angles, one with a red lacquer screen face, glass app tiles floating out of it. Dark background."
15. **Custom CRM / web apps** — "Layered graphite dashboard panels in isometric view with red lacquer bar-chart blocks and a glass pipeline ribbon connecting them. Light background."
16. **White-label partners** — "Two puzzle-like graphite blocks with 45-degree cut edges locking together, a thin red lacquer seam where they meet, glass glow at the joint. Dark background."
17. **Booking / strategy call** — "A graphite desk-calendar block with a red lacquer page flipped forward and a frosted glass clock disc leaning against it. Light background."
18. **Markets (CA, US, UAE, NZ, PK)** — "A graphite globe made of horizontal slices, five small red lacquer pins at different points, glass orbit ring around it. Dark background."
19. **Case-study cover (generic)** — "A red lacquer cut-corner frame floating in front of a graphite slab, with glass shards suggesting a screen. {Dark|Light} background, negative space on the right."
20. **404 page** — "A single red lacquer puzzle piece with a 45-degree cut missing from a graphite tile grid. Light background."

Device mockups for case studies (real screenshots placed inside): "Clean device mockup: a laptop and a phone, dark graphite finish, angled 20 degrees, seamless #F4F5F7 background, soft shadow, screens left blank pure white for compositing." Composite the real screenshot in Figma/Photoshop — don't let the image model invent the UI.
