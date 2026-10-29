# Rule 02 — Design system "Cut & Glass" (always on)

Full spec: `docs/05-design-system.md`. These are the rules you must never break.

## Identity in one sentence
The Webix logo is built from angular strokes with 45° cuts — so corners are **cut, not rounded**, sections join with a **45° notch**, red is used as **whole surfaces** (not only small accents), and glass appears in only four places.

## Tokens (CSS variables in `app/globals.css`)
```
--graphite #141519   --graphite-2 #1E2026   --graphite-line #2A2D35
--porcelain #F4F5F7  --steel #E4E6EB
--red #ED1C24 (brand, big type, fills)   --red-ink #C8101A (buttons, red text on light)
--ember #FF5C63 (red text on dark)       --oxblood #5A0B10 (deep red surface)
--ink #141519  --ink-muted #5B606B  --fog #A3A8B3  --white #FFFFFF
--cut 14px   --notch 48px (mobile 24px)   --gutter 24px (mobile 16px)
```
- White text on `--red` only at ≥ 24px regular / ≥ 19px bold. Buttons use `--red-ink`. Never `--red` small text on graphite — use `--ember`.
- Gradients only `--oxblood → --graphite`. No purple, blue or rainbow gradients. No grey drop-shadows under cards.

## Surfaces
- Surface families: Graphite, Porcelain, Steel, Signal Red, Oxblood. `<Section surface="graphite|porcelain|steel|red|oxblood" notch>`.
- **Two neighbouring sections never share a surface.** Signal Red max twice per page, Oxblood max once (final CTA).
- Dark → light transitions get the 45° notch on the lower section's top-left.
- Graphite may use the faint 64px engineered grid (4% white, radial mask). Signal Red may use one outlined monogram watermark.

## Typography
- Clash Grotesk (display, 500/600) + Switzer (text, 400/500/600). No other fonts, no monospace.
- H1 `clamp(2.6rem,1.5rem+4.6vw,5.5rem)`/1.0/-0.03em · H2 `clamp(2rem,1.4rem+2.4vw,3.5rem)`/1.05/-0.02em · H3 `clamp(1.25rem,1.1rem+.6vw,1.625rem)`/1.2 · Lead 19px/1.55 · Body 17px/1.65 · Small 14px.
- Sentence case. Paragraphs ≤ 68ch. **Do not** colour a single word of a headline red. **Do not** put an ALL-CAPS tracked label above every heading (max 3 sentence-case kickers per page). No "A · B · C" meta strings, no "→" appended to every link, no em-dash "WORD — fragment" labels.

## Shape
- Cut corner (`--cut`, top-right) on media frames, case cards, primary buttons, booking panel — via `clip-path` + pseudo-element border.
- Inputs 10px radius; chips are pills. Different elements, different shapes — never one radius everywhere.

## Glass — only these four
Header pill (after 80px scroll), hero Growth Console, booking panel, mobile sticky bar. `backdrop-filter: blur(18px) saturate(160%)`, solid fallback.

## Layout & compactness
- Container 1280px; 12 columns. Mobile side padding 16px. Section padding `clamp(64px, 6vw + 32px, 128px)`.
- Mobile hero height = content height (never 100vh).
- Any list > 6 items → tabs, slider, chips or accordion. A desktop section rarely exceeds one viewport. No section that is only a heading and two lines.
- Left-aligned by default; centre only short CTA blocks.

## Motion
- One orchestrated load moment (hero headline mask-rise + console assemble). Nothing else animates on load.
- **No fade-and-slide-up on every section.** Allowed scroll moments, each at most once per page: process line draw, work slider inertia, service tab cross-fade, stacked case cards on /our-work/.
- Buttons: cut-corner fill + 4px arrow nudge, 180ms ease-out.
- Numbers are final in HTML — never count up from 0.
- Lenis smooth scroll desktop only. `prefers-reduced-motion` → all motion off, carousels paused.

## Images
- One art direction: red-lacquer & graphite 3D renders on seamless #141519 or #F4F5F7, no text in images. Real people = real team photos only.
- `next/image`, AVIF/WebP, explicit sizes, hero `priority`, others lazy, ≤ 200KB on mobile. No WebGL in the hero.

## Accessibility floor
WCAG 2.2 AA. Focus ring 2px `--ember` (dark) / `--red-ink` (light), 3px offset. Tap targets ≥ 44px. All carousels/tabs keyboard operable with visible controls. No horizontal scroll at 360px.

## Self-review before showing me anything
Take screenshots at 390 and 1440. Ask: does any section look like a generic AI agency template (same card grid, same shadow, red word in headline, caps eyebrow everywhere)? Does every section feel separate from its neighbours? Is the page compact? Fix, then show me.
