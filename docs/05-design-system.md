# 05 — Signal design system

The logo’s angle belongs on large media. Rounded controls and distinct surfaces carry the rest of the site.

| Token | Hex | Use |
|---|---|---|
| `--signal` | `#ED1C24` | Logo red, large type, key graphics, full-bleed bands |
| `--signal-ink` | `#C8101A` | Primary controls and red text on light |
| `--ember` | `#FF5A60` | Red text and icons on dark |
| `--oxblood` | `#4A0A0E` | Final call to action |
| `--ink` | `#0E0E10` | Main dark surface |
| `--ink-2` | `#17171B` | Raised dark surface |
| `--ink-3` | `#222228` | Hover or active dark surface |
| `--paper` | `#FFFFFF` | Main light surface |
| `--paper-2` | `#F3F3F5` | Raised light surface |
| `--text-dim` | `#A6A6B0` | Secondary text on dark |
| `--text-mute` | `#5C5F69` | Secondary text on light |

Use Signal Red as a full surface at most twice per page. White on Signal Red is for bold type from 20px or regular type from 24px. For body text, require 4.5:1 contrast. For large type, require 3:1. The background gradient runs from oxblood into ink. Hero and globe use a faint grain and a red pointer light.

## Shape and typography

- Cards use surface contrast and 14px radius. Hover lifts 4px with a 2px Signal Red ring and soft red glow.
- Large showcase media, featured case images and the booking dialog can cut the top-left and bottom-right corners by `clamp(24px, 3vw, 44px)`.
- Primary buttons are at least 52px tall with 10px corners, Signal Ink fill and white text. Magnetic hover moves up to 6px and the arrow moves 3px. Secondary buttons have a 1.5px border that turns red on hover.
- Inputs use 10px radius and a 2px visible focus ring. Pills use 13px Switzer Medium. Dividers are full width at 8% opacity where needed.
- Sections have straight edges. One full-width Signal Red text band can use slanted top and bottom edges.
- Use Clash Grotesk 600 and Switzer 400/500/600. H1 is `clamp(2.8rem, 1.6rem + 5vw, 6.2rem)`, line-height .98 and tracking −.035em. H2 is `clamp(2.1rem, 1.4rem + 2.6vw, 3.8rem)`, line-height 1.04 and tracking −.025em. Body is 17px at 1.65 and up to 68ch.
- Use sentence case, at most three kickers, and one color across each headline.

## Motion and assets

Use Lenis with fine pointers and native touch momentum. Use GSAP for selected scroll effects and route wipes, and Motion for component interactions. Under reduced motion, disable Lenis and decorative animations and leave content readable. Keep headlines, copy and final stats in the initial HTML.

Use art-directed WebP or AVIF up to 1600px with `next/image`, descriptive alt text and responsive `sizes`. Show client screenshots or named project details only when approved.

Verify each page type at 390, 768 and 1440 px. Check keyboard navigation, 44px targets, contrast, reduced motion and horizontal overflow. Mobile Lighthouse targets are Performance ≥ 85, Accessibility ≥ 95, SEO 100 and Best Practices ≥ 95.
