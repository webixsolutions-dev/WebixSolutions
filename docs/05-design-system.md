# 05 — Design system: "Cut & Glass"

## Why the last design failed (do not repeat)
- One dark background on every section → the page reads as one long block, sections don't feel separate.
- Every section is a heading + grid of identical rounded cards with the same shadow → template look.
- Counters animate from 0 in JavaScript → users and AI crawlers see "0+".
- Long lists rendered in full (11 services, 12 industries, 5 FAQ, 3 blogs, 2 forms) → endless scroll.
- Tracked ALL-CAPS labels above every heading, red word in every headline → generic AI agency look.

## Concept
The Webix logo is built from angular strokes with 45° cuts. That cut is the identity: **corners are cut, not rounded**; sections join with a **45° notch**; the red is used as **whole surfaces**, not only as small accents. Glass appears in only four places so it stays special. One signature moment (the Growth Console in the hero); everything else is calm, precise and fast.

Words that describe the feel: engineered, confident, precise, warm red heat on cool graphite and porcelain.

## Color tokens

| Token | Hex | Use |
|---|---|---|
| `--graphite` | `#141519` | Dark surface (main dark sections, footer) |
| `--graphite-2` | `#1E2026` | Raised elements on dark (rows, inputs) |
| `--graphite-line` | `#2A2D35` | Hairlines/borders on dark |
| `--porcelain` | `#F4F5F7` | Light surface (cool, not cream) |
| `--steel` | `#E4E6EB` | Second light surface / borders on light |
| `--red` | `#ED1C24` | Webix red (sampled from logo). Big type, fills, full-bleed sections, decorative |
| `--red-ink` | `#C8101A` | Primary button background (white text 5.9:1), red text on light (5.4:1) |
| `--ember` | `#FF5C63` | Red text/links on dark (6.0:1 on graphite) |
| `--oxblood` | `#5A0B10` | Deep red surface and hero glow (white text 14:1) |
| `--ink` | `#141519` | Body text on light (16.7:1 on porcelain) |
| `--ink-muted` | `#5B606B` | Secondary text on light (5.8:1) |
| `--fog` | `#A3A8B3` | Secondary text on dark (7.6:1) |
| `--white` | `#FFFFFF` | Text on dark/red |

Rules:
- White text on `--red` is only 4.4:1 → allowed for text ≥ 24px regular or ≥ 19px bold. Buttons use `--red-ink`.
- Never put `--red` small text on graphite (4.2:1) — use `--ember`.
- Gradients: only `--oxblood → --graphite` (hero glow, final CTA). No rainbow/purple gradients.

## Surfaces and section rhythm
Five surface families: **Graphite, Porcelain, Steel, Signal Red (`--red`), Oxblood**.
- Two neighbouring sections never use the same surface.
- Each page uses Signal Red at most twice, Oxblood at most once (final CTA).
- Where a dark section meets a light one, the lower section gets the **notch**: a 45° cut at its top-left corner (`clip-path`), 48px desktop / 24px mobile, revealing the previous surface. This makes every section feel separate without dividers.
- Graphite sections may carry the "engineered grid" texture: 1px lines every 64px at 4% white, faded with a radial mask. Porcelain sections stay clean.
- Signal Red sections may carry one oversized outlined Webix monogram as a watermark (8% opacity).

## Typography
- **Display:** Clash Grotesk (Fontshare, free for commercial use) — weights 500, 600.
- **Text:** Switzer (Fontshare, free for commercial use) — weights 400, 500, 600.
- Self-host as WOFF2 with `next/font/local`, `display: swap`, preload only the display 600 + text 400.
- No monospace, no third typeface.

Fluid scale:
| Role | Size | Line height | Tracking | Weight |
|---|---|---|---|---|
| Display (H1) | `clamp(2.6rem, 1.5rem + 4.6vw, 5.5rem)` | 1.0 | -0.03em | 600 |
| H2 | `clamp(2rem, 1.4rem + 2.4vw, 3.5rem)` | 1.05 | -0.02em | 600 |
| H3 | `clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem)` | 1.2 | -0.01em | 600 |
| Lead | `1.1875rem` (19px) | 1.55 | 0 | 400 |
| Body | `1.0625rem` (17px) | 1.65 | 0 | 400 |
| Small | `0.875rem` | 1.5 | 0 | 500 |

Rules:
- Max line length 68ch for paragraphs, 18ch for H1, 24ch for H2.
- Headlines are sentence case. Do **not** colour one word red inside a headline. Do **not** put an ALL-CAPS tracked label above every heading — a short sentence-case kicker is allowed on at most 3 sections per page.
- Numbers (prices, stats) use the display face with `font-variant-numeric: tabular-nums`.

## Layout
- Container 1280px max for content, 1440px for full-bleed media; 12-column grid, 24px gutters desktop, 16px mobile.
- Mobile side padding: 16px (Haroon's Elementor standard is 10px — change `--gutter-mobile` if preferred).
- Section padding: `clamp(64px, 6vw + 32px, 128px)` top and bottom. Hero on mobile is as tall as its content, never forced to 100vh.
- Left-aligned text by default. Centered only for short CTA blocks.
- Compactness rules: any list longer than 6 items becomes tabs, a slider, chips or an accordion. A desktop section should rarely exceed one viewport height (exceptions: hero, work slider). No section that is only a heading and two lines.

## Shape language
- `--cut: 14px` — cut corner (top-right) on media frames, case-study cards, primary buttons, the booking panel. Implement with `clip-path: polygon(0 0, calc(100% - var(--cut)) 0, 100% var(--cut), 100% 100%, 0 100%)`. Add a matching 1px border with a pseudo-element.
- Inputs: 10px radius. Chips/tags: fully rounded pills. Icons: 1.5px stroke (lucide).
- Different elements get different shapes on purpose — never one radius on everything.
- Shadows: almost none. Depth comes from surface contrast, not grey shadows.

## Glass ("liquid glass") — only four places
1. Floating header pill (after 80px scroll).
2. Growth Console card in the hero.
3. Booking panel.
4. Mobile sticky bottom bar.
Spec: `backdrop-filter: blur(18px) saturate(160%)`; background `rgba(255,255,255,.06)` on dark, `rgba(255,255,255,.6)` on light; 1px top highlight `rgba(255,255,255,.18)`; fallback to solid `--graphite-2` when `backdrop-filter` is unsupported or `prefers-reduced-transparency`.

## Signature: the Growth Console (hero, right side)
A glass panel (about 440px wide) that shows four real "signals" from Webix, one at a time, cross-fading every 4.5 s (pause on hover/focus, dot controls, keyboard accessible):
1. "Rs 15.01 per WhatsApp conversation — e-commerce campaign, Pakistan" [CONFIRM]
2. "91 custom-coded builds · 1,053 commits in the last 12 months" + mini contribution graph (static SVG)
3. "AI receptionist — answers, qualifies and books the job" with a 3-step mini flow
4. **"Next open strategy call: Tue 7:00 PM (your time)"** — real data from the booking API, converted to the visitor's time zone, with a "Book it" button.
All four signals are **server-rendered as a list in the HTML** (crawlers read them); rotation is a visual enhancement. On mobile, show only card 4 under the CTAs plus a swipe row for the others.
Behind the console: a pre-rendered 3D Webix monogram in red lacquer and graphite (AVIF poster + optional 6 s muted WebM loop ≤ 600 KB). No WebGL in the hero (protects LCP).

## Motion
- Library: `motion` (Framer Motion) for components, `lenis` for smooth scroll on desktop only (off on touch devices and with reduced motion).
- One orchestrated load moment: hero headline lines rise through a mask (600 ms, 80 ms stagger), then the console assembles. Nothing else animates on load.
- Do NOT fade-and-slide-up every section. Allowed scroll moments (each used once per page at most): process line draws across the steps; work slider gains inertia; service tabs cross-fade panels; stacked case-study cards on `/our-work/`.
- Buttons: on hover the cut corner fills and the arrow moves 4px (180 ms ease-out). Links: underline grows from the left.
- Numbers never count up from 0. The final number is in the HTML; if animated, it ticks only the last digits.
- `prefers-reduced-motion: reduce` → all motion off, carousels stop auto-play.

## Components (build each once in `components/`, reuse everywhere)
Header (pill + mega menu + mobile sheet) · Footer (giant wordmark) · Section (surface prop + notch prop) · Button (primary cut / secondary outline / text) · Kicker · StatBand (server-rendered) · ServiceTabs · ServiceRow · CaseCard (cut frame) · WorkSlider (Embla) · OfferCard · PriceTable · ProcessSteps · SplitPanel · ProofWall · Testimonials (verified-only) · FAQ (accordion + JSON-LD) · BookingWidget (full + compact) · GrowthConsole · BeforeAfter slider · LogoMarquee (pause on hover, reduced-motion safe) · Breadcrumbs (+ JSON-LD) · CTASection · ContactForm · CookieBanner · WhatsAppButton · StickyMobileBar.

## 21st.dev references (inspiration — rebuild in our tokens, don't paste foreign styles)
Antigravity can install these with `npx shadcn@latest add "<url>"` if you have a 21st.dev API key; otherwise use them as visual references.
- Booking: "Meeting Booking Calendar" — 21st.dev/@kedhareswer/components/open-slot-booking (host card, time-zone aware week, confirm form, .ics) · "Booking Slot Calendar" — 21st.dev/@bidyut10/components/booking-slot-calendar (week strip + slots — best mobile pattern)
- Services: "Services Stack" — 21st.dev/@ivarunchaudhary/components/services-stack (sticky stacked panels — use on `/services/` only) · "Animated Tabs" — 21st.dev/@kuratlielia/components/tabs (home service tabs)
- Work: "Stacking Cards" — 21st.dev/@danielpetho/components/stacking-cards · "Scroll Horizontal Gallery" — 21st.dev/@motiondotdev/components/motion-scroll-horizontal
- Proof: "Testimonials Marquee" — 21st.dev/@shadcnspace/components/marquee-01 · "Image Comparison" — 21st.dev/@ibelick/components/image-comparison (before/after)
- FAQ: "Two-Column FAQ" — 21st.dev/@ln-dev7/components/faqs-02 (sticky intro + accordion)
- Glass: "Liquid Glass Navbar" — 21st.dev/@gughigug/components/liquid-glass-navbar (take the restraint, not the water-drop effect) · "Liquid Glass Card" — 21st.dev/@designali-in/components/liquid-glass-card
- Pricing: "Pricing Plans with Billing Toggle" — 21st.dev/@uiable/components/block-pricing-18
- Footer: "Light Beam Footer with Giant Wordmark" — 21st.dev/@kedhareswer/components/beam-wordmark-footer

## Imagery art direction ("red lacquer & graphite")
All illustrations and service visuals in ONE style so the site looks designed, not stock: glossy red-lacquer and brushed-graphite 3D objects, frosted glass details, soft studio light, seamless background in exactly `#141519` or `#F4F5F7`, 45° cut geometry echoing the logo, no text in images, no people in 3D renders. Real people = real team photos only. Prompts are in `08-portfolio-proof.md`.
Formats: AVIF + WebP via `next/image`, explicit width/height, `sizes` set, hero image `priority`, everything else lazy. Max 200 KB per image on mobile.

## Wireframes

Home hero — desktop
```
┌──────────────────────────────────────────────────────────────────────┐
│ [logo]   Services▾ Industries Work Pricing About   [Book a call] (◎)│  ← glass pill after scroll
│                                                                      │
│  Websites, marketing                       ┌───────────────────────┐ │
│  and AI automation that                    │ ░ Growth Console ░    │ │
│  grow your business                        │ Next open strategy    │ │
│                                            │ call: Tue 7:00 PM     │ │
│  Webix Solutions is a full-service…        │ (your time) [Book it] │ │
│  (2 sentences)                             │ ● ○ ○ ○               │ │
│  [Book a strategy call ◣] [See packages]   └───────────────────────┘ │
│  91 custom-coded builds · 50+ CMS sites · 50+ social accounts        │
└──────────────────────────────────────────────────────────────────────┘
◣ = cut corner
```

Home hero — mobile (390px)
```
┌──────────────────────┐
│ [logo]          [≡]  │
│ Websites, marketing  │
│ and AI automation    │
│ that grow your       │
│ business             │
│ 2-sentence intro     │
│ [Book a strategy call]│
│ [See packages]       │
│ ┌──────────────────┐ │
│ │ Next open call:  │ │
│ │ Tue 7:00 PM [Book]│ │
│ └──────────────────┘ │
│ 91 builds · 50+ CMS  │
└──────────────────────┘
[ Book a call ][ WhatsApp ]  ← sticky bar
```

## Quality floor (non-negotiable)
Responsive at 360, 390, 768, 1024, 1280, 1440, 1920. Visible keyboard focus (2px `--ember` on dark / `--red-ink` on light, 3px offset). Tap targets ≥ 44px. WCAG 2.2 AA contrast. `prefers-reduced-motion` respected. No horizontal scroll at any width. Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, SEO 100, Best Practices ≥ 95.
