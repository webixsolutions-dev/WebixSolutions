---
description: Quality check for any page — rendering for AI crawlers, SEO tags, design rules, mobile, accessibility, performance.
---

# Workflow: page QA

Run for the page URL I give you (default: the page you just built). Report pass/fail for each line, then fix the fails.

## Rendering (AI crawlers)
1. `pnpm build && pnpm start` (production mode, not dev).
2. `curl -s -A "GPTBot" http://localhost:3000/<slug>/ > /tmp/page.html`
3. Confirm the HTML contains: the H1, every H2, the first paragraph, all FAQ questions and answers, all prices on the page, stats as final numbers (not 0), footer links. Print the matching lines.
4. Confirm no "Loading…" text and no empty `<main>`.

## SEO
5. Title length ≤ 60, meta description ≤ 155 (print the counts). Exactly one `<h1>`. Heading order has no skipped levels; no H4–H6 used for styling.
6. Canonical is `https://webixsolutions.com/<slug>/`. Robots meta is correct for this page type.
7. Extract JSON-LD blocks and validate them (schema-dts types compile; paste into validator.schema.org if available). No Review/AggregateRating for our own business.
8. Every image has `alt` (descriptive or empty for decorative). Internal links have descriptive anchors; at least 3 related-service links on service pages.

## Design (compare with docs/05-design-system.md)
9. Screenshots at 360, 390, 768, 1024, 1440. No horizontal scroll at 360.
10. Neighbouring sections have different surfaces; notches present on dark→light transitions.
11. No red single word inside headlines; ≤ 3 kickers on the page; no identical-card grid with grey shadows; corners cut on primary buttons and media frames.
12. Mobile: hero height fits content, sticky bar visible, tap targets ≥ 44px, text ≥ 16px.

## Accessibility & motion
13. Tab through the page: focus always visible, menus/tabs/accordions/sliders/booking usable by keyboard.
14. Emulate `prefers-reduced-motion: reduce`: no animation, carousels paused.
15. Contrast spot-check on red and muted text.

## Performance
16. Lighthouse mobile (production build): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO = 100. Report LCP, CLS, TBT and the LCP element.
17. JS for the route < 150KB gzipped (check build output).
