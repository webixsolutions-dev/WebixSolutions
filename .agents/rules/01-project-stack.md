# Rule 01 — Project, stack and structure (always on)

You are building the new marketing website for **Webix Solutions** (webixsolutions.com), a full-service digital & AI agency. The old site was WordPress; this is a full rebuild in code. Read `docs/` before each phase — the docs are the spec. If the docs and your own idea disagree, follow the docs and tell me the disagreement.

## Stack (do not change without asking)
- Next.js (App Router, latest stable already in the repo), TypeScript strict, React Server Components by default.
- Tailwind CSS v4 with design tokens as CSS variables (`app/globals.css`), shadcn/ui primitives (Tabs, Accordion, Dialog, Sheet, Calendar, Select), lucide-react icons.
- `motion` (Framer Motion) for component animation, `lenis` for desktop smooth scroll, `embla-carousel-react` for sliders.
- Content: TypeScript + MDX files in the repo (`content/`). No CMS, no database. Content changes = edit files + redeploy.
- Fonts: Clash Grotesk + Switzer (Fontshare), self-hosted WOFF2 via `next/font/local`.
- Forms/booking: Next.js route handlers, zod validation, Cloudflare Turnstile, Google Calendar API (booking), Resend (optional email).
- Hosting target: Cloudflare Workers via `@opennextjs/cloudflare` (free plan allows commercial use). Do not deploy production to Vercel Hobby (non-commercial only).

## Folder structure
```
app/
  (site)/layout.tsx            header, footer, org JSON-LD, sticky mobile bar
  (site)/page.tsx              home
  (site)/[slug]/page.tsx       services + blog posts + core pages that are flat (resolved from content registry)
  (site)/industries/[slug]/
  (site)/locations/[slug]/
  (site)/our-work/[slug]/
  (lp)/lp/[campaign]/          ad landing pages (noindex, simplified header)
  api/booking/slots|book|next-slot/route.ts
  api/contact/route.ts
  robots.ts  sitemap.ts  opengraph-image.tsx  not-found.tsx
components/                    one component per file, PascalCase
content/
  site-facts.ts                every number/claim/address (mirror of docs/site-facts.md)
  services.ts                  service registry (slug, group, title, meta, h1, sections, faqs, related)
  industries.ts  locations.ts  pricing.ts  testimonials.ts  navigation.ts
  work/*.mdx  blog/*.mdx
config/
  booking.ts  redirects.ts  seo.ts
lib/                           schema builders, google calendar client, utils
public/                        llms.txt, images, fonts
```
- Every page reads its text from `content/`. No hard-coded copy inside components (except UI labels).
- Navigation, footer, sitemap, related-links and the contact form's service list are all generated from the registries → one source of truth, no inconsistent lists.
- A registry item with `published: false` never renders, never appears in nav or sitemap.

## Routing rules
- `trailingSlash: true`. Keep existing WordPress slugs exactly (see `docs/01-sitemap-url-map.md`).
- Redirects (301) and Gone (410) live in `config/redirects.ts` and are applied in `middleware.ts` (410 for `/market/*` is mandatory).
- Middleware adds `X-Robots-Tag: noindex` on any host that is not `webixsolutions.com`.

## Commands you may run
Use the package manager already in the repo (check the lockfile; examples below use pnpm). `install`, `dev`, `build`, `lint`, `typecheck`, `test`, `npx shadcn@latest add …`. Ask before installing any other dependency; explain why it's needed and its gzipped size.

## Working style
- Work in small, reviewable steps. After each page or component: run `pnpm build` + `pnpm lint` + `pnpm typecheck`, then open the browser and take screenshots at **390px, 768px and 1440px**, review them against `docs/05-design-system.md`, fix what's off, and show me the screenshots.
- Before writing code for a phase, produce a short implementation plan (files to create/change, components reused) and wait for my approval.
- Never delete content files or pages without asking. Never commit secrets. Secrets come from environment variables only (`.env.local` is git-ignored; provide `.env.example`).
- If something in the docs is marked **[CONFIRM]**, build it behind a flag (`confirmed: false` → hidden in production) and list it in `docs/OPEN-QUESTIONS.md`.

## Definition of done (every page)
1. Builds with zero TypeScript/lint errors.
2. Server-rendered: `curl` of the page (with a GPTBot user agent) contains the H1, all H2s, body text, FAQs and prices.
3. Title ≤ 60 chars, meta description ≤ 155 chars, one H1, canonical correct, JSON-LD valid (Rich Results Test / schema validator).
4. Looks right at 360/390/768/1024/1440 with no horizontal scroll; keyboard focus visible; reduced-motion respected.
5. Lighthouse mobile ≥ 90 performance, ≥ 95 accessibility, 100 SEO.
