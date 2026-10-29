---
description: Build one page (service, industry, location or core page) from its brief in docs/, using existing components, then QA it.
---

# Workflow: build a page from its brief

1. Ask me which page (slug) if I didn't say. Find its brief in `docs/02`, `docs/03` or `docs/04`.
2. Read `docs/site-facts.md`, `content/site-facts.ts` and `content/pricing.ts`. List any fact the brief needs that is missing or marked [CONFIRM].
3. Write the page content into the right registry (`content/services.ts`, `industries.ts`, `locations.ts`) — title, meta, H1, intro (answer-first), sections, FAQs (6–8), related links. Follow Rule 04 (voice, banned phrases). Show me the copy as a diff before building UI.
4. Build the page with existing components only (Section, Hero, ServiceRow, ProcessSteps, CaseCard, FAQ, CTASection, BookingWidget…). If a new component is truly needed, explain why first.
5. Assign surfaces so no two neighbours match (see brief table / Rule 02).
6. Add JSON-LD (Service/BreadcrumbList/FAQPage or the type in the brief) through `lib/schema.ts`.
7. Run build, lint, typecheck. Fix everything.
8. Run the `page-qa` workflow.
9. Show me: screenshots (390, 768, 1440), the curl check output, title/meta character counts, and any [CONFIRM] items added to `docs/OPEN-QUESTIONS.md`.
