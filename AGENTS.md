# AGENTS.md — Webix Solutions website

This repository is the new marketing website for Webix Solutions (webixsolutions.com).

Before any task:
1. Read the always-on rules in `.agents/rules/` (stack, design, SEO/rendering, copy & truth).
2. Read the spec documents in `docs/` that the task touches. `docs/site-facts.md` is the only source for numbers, prices, addresses and claims.
3. Make a short plan and wait for approval before writing code.

Hard rules (short version):
- Server-render every piece of meaningful text (AI crawlers don't run JavaScript).
- Never invent facts, reviews, testimonials or client names.
- Neighbouring sections never share a background; corners are cut, not rounded; glass only in four places.
- Keep existing WordPress URLs; 410 for `/market/*`.
- Screenshots at 390 / 768 / 1440 px after every page, reviewed against `docs/05-design-system.md`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
