# 03 — Page briefs: service pages

## Shared service-page template (every service page uses it)

The old service pages were ~400–700 words, had no FAQs, broken heading levels (H5/H6 for steps, H2 in the footer), counters showing "0", typos, and two different quote forms. The new template fixes all of that.

Section order and surfaces (sections alternate; never two neighbours on the same surface):

| # | Section | Surface | Notes |
|---|---|---|---|
| 1 | Hero | Graphite | Breadcrumb (Home › Services › X), H1, 2-sentence answer-first intro (what it is, who it's for, typical price/timeline), CTAs: Book a call / See pricing, one proof chip |
| 2 | Outcomes | Porcelain | 3 outcomes the client gets (not features), each with a concrete detail |
| 3 | What's included | Graphite | Deliverables as a compact two-column checklist (H3 per group). Real deliverables, quantities where known |
| 4 | How it works | Steel | Numbered steps (3–5) with timeline per step. Proper H3s |
| 5 | Proof | Porcelain | 1–2 case-study cards relevant to this service + a result metric (only real) |
| 6 | Pricing snapshot | Signal Red (or Oxblood) | "From $X" + what's in the base price + link to pricing/offers. If price not confirmed: "Quoted after a 30-minute call" |
| 7 | Tools & platforms | Graphite | Logo row (small, monochrome) |
| 8 | FAQ | Porcelain | 6–8 questions, visible + FAQPage JSON-LD |
| 9 | Related services | Steel | 3 links (internal linking) |
| 10 | CTA + compact booking | Oxblood → Graphite | |

Word count target: 1,100–1,600 words of real content per service page. No filler to hit a number.
Schema per page: `Service` (name, description, provider → Organization @id, areaServed: CA, US, AE, NZ, PK, offers if price confirmed) + `BreadcrumbList` + `FAQPage`.
Internal links: every service page links to ≥3 related services, 1 industry, 1 case study, and `/book-a-call/`.

Below: per-page specifics. "KW" = primary keyword; "Sec" = secondary keywords to use naturally in H2/H3/body.

---

## Existing services (keep URLs)

### Web design & development — `/web-design-development-service/`
- **Title:** Custom Web Design & Development Services | Webix Solutions
- **Meta:** Custom-coded and CMS websites that load fast, rank and convert. Next.js, WordPress, Shopify. From $499 for a 5-page site. Book a free call.
- **H1:** Custom web design and development services
- KW: custom web design and development services · Sec: business website design, website redesign, responsive web design, Next.js development, WordPress website design, offshore web development
- Unique sections: "Custom-coded or CMS — which one do you need?" decision table (speed, editing, cost, scale); performance promise (Core Web Vitals targets: LCP < 2.5 s, INP < 200 ms, CLS < 0.1); "Built to be read by Google and AI" (server-rendered, schema).
- FAQs: How much does a website cost? · How long does a website take? · WordPress or custom code? · Will I be able to edit my website myself? · Do you redesign existing websites? · Is hosting included? · Who owns the website after launch? · Do you build multilingual (English/Arabic) sites?
- Related: Shopify, CMS & WordPress, Custom web apps, Website maintenance.

### SEO — `/seo-services/`
- **Title:** SEO Services for Rankings & Leads | Webix Solutions
- **Meta:** Technical, on-page, local and content SEO that brings qualified traffic — plus visibility in AI answers. Monthly reporting from Search Console and GA4.
- **H1:** SEO services that bring in qualified leads
- KW: SEO services · Sec: technical SEO, local SEO, on-page SEO, SEO audit, link building, SEO agency for small business
- Unique: what a month of SEO looks like (hours/deliverables), audit sample screenshot (anonymised), reporting stack (GSC, GA4, Ahrefs, Semrush, Screaming Frog, Rank Math).
- FAQs: How long does SEO take to work? · How much do SEO services cost per month? · Do you guarantee rankings? (no — explain why) · What's included in an SEO audit? · Do you build backlinks? How? · Local SEO vs national SEO? · Do you also optimise for ChatGPT and AI Overviews? (link GEO page)
- Related: AI search optimization, Google Business Profile, Content, CRO.

### Social media management — `/social-media-management/`
- **Title:** Social Media Management Services | Webix Solutions
- **Meta:** Strategy, content, posting and community management for Instagram, Facebook, TikTok and LinkedIn. 50+ accounts managed. Plans from $149/month.
- **H1:** Social media management services
- KW: social media management services · Sec: social media management agency, Instagram management, Facebook page management, TikTok management, LinkedIn management, social media marketing
- Unique: monthly content calendar example (visual), posting cadence by plan, approval workflow, community-management hours.
- FAQs: How many posts per month do I get? · Which platforms do you manage? · Do you make reels and videos? · Who approves content before posting? · Do you reply to comments and DMs? · Do you run ads too? · How do you report results?
- Related: AI social content, AI video, Paid advertising, Creative.

### Creative services — `/creative-services/`
- **Title:** Graphic Design & Creative Studio Services | Webix Solutions
- **Meta:** Logos, brand kits, social graphics, ad creatives, packaging and video editing from an in-house creative team. Batches from $99.
- **H1:** Graphic design and creative studio services
- KW: graphic design services · Sec: logo design, brand identity design, ad creative design, social media graphics, video editing services
- Unique: creative gallery grid (masonry, 12 items, lazy loaded), turnaround times per deliverable [CONFIRM].
- FAQs: How many revisions are included? · What files do I receive? · How fast can you deliver ad creatives? · Do you design packaging? · Can you match my existing brand guidelines?

### Shopify — `/shopify-store-development-services/`
- **Title:** Shopify Store Development Services | Webix Solutions
- **Meta:** Shopify stores designed to sell: theme setup or custom theme, apps, payments, product import and conversion-focused product pages. Launch in weeks.
- **H1:** Shopify store development services
- KW: Shopify store development services · Sec: Shopify developer, Shopify store setup, custom Shopify theme, Shopify migration (WooCommerce → Shopify), Shopify SEO
- Unique: "Shopify, WooCommerce or custom?" comparison (link refreshed blog post); launch checklist; AI add-ons (support bot, product descriptions at scale).
- FAQs: How much does a Shopify store cost? · How long to launch? · Can you migrate from WooCommerce/Wix? · Do you build custom themes? · Which apps do you recommend? · Can you set up COD/WhatsApp ordering (Pakistan/UAE)?

### Paid advertising — `/paid-advertising-services/`
- **Title:** PPC & Paid Social Advertising Services | Webix Solutions
- **Meta:** Meta, Google, TikTok and LinkedIn ads managed for leads and sales. Click-to-WhatsApp campaigns from Rs 15 per conversation. Ad spend paid directly by you.
  - (Use the Rs 15 figure only after [CONFIRM] in site-facts; otherwise drop that sentence.)
- **H1:** PPC and paid social advertising services
- KW: PPC management services · Sec: Facebook ads management, Google Ads management, Meta ads agency, TikTok ads, click-to-WhatsApp ads, lead generation ads
- Unique: results cards from site-facts (anonymised), what we need from you (pixel, catalog, access), reporting cadence, management fee model.
- FAQs: What budget do I need to start? · How fast will I see leads? · Do you create the ad creatives? · What's your management fee? · Do you set up Pixel and Conversions API? · Do I keep ownership of the ad account?

### AI automation — `/ai-automation-services/`
- **Title:** AI Automation Services & AI Agents | Webix Solutions
- **Meta:** We build AI agents and automations that answer leads, update your CRM, follow up and report — using OpenAI, n8n, Make and Zapier. Sprints from $999.
- **H1:** AI automation services and AI agents for business
- KW: AI automation services · Sec: AI business automation, AI agent development, workflow automation, business process automation, AI automation agency, CRM automation
  - GSC note: "ai automation solutions" (1,031 impressions, position 64) and "ai business automation solutions" (145) already show demand — use "AI automation solutions" in an H2.
- Unique: 3 shipped systems as mini case studies (chatbot, voice agent, Google Maps lead engine), automation ROI calculator (hours saved × hourly cost — runs client-side, but the default result is server-rendered text), tools grid (OpenAI, Claude, Gemini, n8n, Make, Zapier, HubSpot, Google Workspace, WhatsApp Business API, Twilio [CONFIRM]).
- FAQs: What business tasks can be automated with AI? · How much does AI automation cost? · How long does a build take? · Is my data safe? · Do I need to change my current tools? · What ongoing costs should I expect (API usage)? · What happens if the AI gets something wrong? (human-in-the-loop design)

### Mobile apps — `/mobile-app-development-services/`
- **Title:** Mobile App Development Services (Flutter) | Webix Solutions
- **Meta:** iOS and Android apps from one Flutter codebase — MVPs, booking apps, e-commerce and internal tools — with backend, admin panel and store submission.
- **H1:** Mobile app development services
- KW: mobile app development services · Sec: Flutter app development, iOS and Android app, MVP app development, app development company
- FAQs: How much does an app cost? · Flutter vs native? · Do you publish to App Store and Google Play? · Do you build the backend/admin panel? · Can you maintain an existing app?

### CRO — `/conversion-rate-optimization-services/`
- **Title:** Conversion Rate Optimization Services | Webix Solutions
- **Meta:** Turn more visitors into leads and sales with research, heatmaps (Microsoft Clarity), A/B tests and faster pages. Audit from $99.
- **H1:** Conversion rate optimization services
- KW: conversion rate optimization services · Sec: CRO agency, landing page optimization, A/B testing, ecommerce CRO
- FAQs: What is a good conversion rate? · How much traffic do I need for A/B tests? · What do you look at in a CRO audit? · How fast do changes go live?

### Brand strategy — `/brand-awareness-strategy/`
- **Title:** Brand Strategy & Awareness Services | Webix Solutions
- **Meta:** Positioning, messaging, visual identity and awareness campaigns that make your business recognisable — and easy to recommend.
- **H1:** Brand strategy and awareness services
- KW: brand awareness strategy · Sec: brand strategy agency, brand positioning, brand identity, brand awareness campaigns
- FAQs: What's included in a brand strategy? · How do you measure brand awareness? · Do you redesign logos? · How long does it take?

### Reputation management — `/reputation-management-service/`
- **Title:** Online Reputation Management Services | Webix Solutions
- **Meta:** Get more genuine reviews, respond to every review professionally, and fix what people see when they search your name. Google, Facebook, Trustpilot.
- **H1:** Online reputation management services
- KW: online reputation management services · Sec: review management, Google review generation, ORM agency
- Note: never offer fake reviews or review removal "guarantees". Offer review-request automation, response management, listing cleanup.
- FAQs: Can you remove negative reviews? (only policy-violating ones via platform processes) · How do you get more reviews? · How fast do you respond? · Is buying reviews safe? (no — explain)

---

## New services

### AI digital marketing agency — `/ai-digital-marketing-agency/`
- **Title:** AI Digital Marketing Agency | Webix Solutions
- **Meta:** Human strategists plus AI for faster content, sharper ad testing, smarter SEO and automated follow-up. See how AI is built into every Webix service.
- **H1:** An AI digital marketing agency with a human team behind it
- KW: AI digital marketing agency · Sec: AI marketing agency, AI-powered marketing, AI marketing services
- Unique: "Where AI helps / where humans decide" table per channel (SEO, ads, social, content, reporting); our AI stack; guardrails (brand voice, fact checks, human approval). Hub linking to all AI pages.
- FAQs: What is an AI digital marketing agency? · Will AI content hurt my SEO? · Is AI marketing cheaper? · Do humans review everything? · Which AI tools do you use?

### AI content creation — `/ai-content-creation-services/`
- **Title:** AI Content Creation Services | Webix Solutions
- **Meta:** SEO articles, product descriptions, landing pages and emails produced with AI and edited by people — on brand, fact-checked and built to rank.
- **H1:** AI content creation services, edited by humans
- KW: AI content creation services · Sec: AI content writing services, AI SEO content, AI product descriptions, AI copywriting
- Unique: workflow (brief → AI draft → editor → SEO check → client approval), bulk e-commerce descriptions (link e-commerce automation), sample before/after paragraph.
- FAQs: Does Google penalise AI content? (Google rewards helpful content regardless of how it is produced; we edit and fact-check) · How many articles per month? · Can you write in my brand voice? · Do you write in Arabic/Urdu? [CONFIRM] · Who owns the content?

### AI social media content — `/ai-social-media-content-creation/`
- **Title:** AI Social Media Content Creation Services | Webix Solutions
- **Meta:** Posts, carousels, reels and captions created with AI and finished by designers — a month of on-brand content, planned, approved and scheduled.
- **H1:** AI social media content creation services
- KW: AI social media content creation services · Sec: AI social media posts, AI reels, AI content calendar, AI generated social media content
- Unique: monthly content pack sizes (12/20/30), turnaround, examples grid (AI-made reels/posts), approval flow.
- FAQs: Will the content look AI-generated? · Can you keep the same character/face across videos? · Do you post for us too? · Which platforms? · How do revisions work?

### AI video production — `/ai-video-production-services/`
- **Title:** AI Video Production Services | Webix Solutions
- **Meta:** AI video ads, UGC-style videos, product videos and explainers in days, not weeks. Scripts, voiceover, captions and every aspect ratio included.
- **H1:** AI video production services
- KW: AI video production services · Sec: AI video ads, AI UGC ads, AI generated video for business, AI explainer video, AI avatar video
- Unique: video types grid with typical length + delivery time; price per video vs typical agency $400–$900 per AI UGC ad; process: script → storyboard → generation → edit → captions → formats (9:16, 1:1, 16:9); honest limits (what AI video still can't do well).
- Embed 2–3 sample videos (lazy-loaded, poster image, muted, captions).
- FAQs: How much does an AI video cost? · How long does it take? · Can you use my product/real photos? · Do you write the script? · Is AI video allowed in Meta/TikTok ads? (yes; follow platform AI-disclosure rules) · Who owns the video?

### AI e-commerce automation — `/ai-ecommerce-automation/`
- **Title:** AI Automation for E-commerce Businesses | Webix Solutions
- **Meta:** Automate order confirmations, WhatsApp support, product content, abandoned carts and reviews with custom AI for Shopify, WooCommerce and custom stores.
- **H1:** Custom AI automation for e-commerce businesses
- KW: AI automation for ecommerce · Sec: ecommerce automation, Shopify AI automation, AI customer support for ecommerce, WhatsApp order confirmation automation, AI product descriptions
- Unique: automation menu (order confirmation & COD verification on WhatsApp, support bot trained on policies, catalog enrichment, review requests, abandoned-cart recovery, ad-creative generation, daily sales report); "built from running our own stores" (Zelvomart, LaptopSouq.ae).
- FAQs: Which platforms do you support? · Can AI confirm COD orders on WhatsApp? · Will the bot hand over to a human? · How much time does it save? · What does it cost to run monthly?

### AI chatbot development — `/ai-chatbot-development/`
- **Title:** AI Chatbot Development Services | Webix Solutions
- **Meta:** Custom AI chatbots for your website and WhatsApp, trained on your services, prices and policies. Captures leads, books calls, hands off to humans.
- **H1:** AI chatbot development services
- KW: AI chatbot development services · Sec: custom AI chatbot, WhatsApp chatbot, website chatbot for business, GPT chatbot development
- Unique: live demo widget (optional, phase 11), conversation example (static, server-rendered transcript), integrations (WhatsApp Business API, CRM, Google Calendar).
- FAQs: How much does a custom chatbot cost? · Chatbot vs live chat? · Can it book appointments? · Does it work in Urdu/Arabic? [CONFIRM] · How do you stop it making things up? · What are the monthly running costs?

### Google Business Profile — `/google-business-profile-optimization/`
- **Title:** Google Business Profile Optimization | Webix Solutions
- **Meta:** Show up on Google Maps and turn profile views into calls: setup, verification support, categories, photos, posts, Q&A, reviews and monthly reporting.
- **H1:** Google Business Profile and Google Maps optimization
- KW: Google Business Profile optimization · Sec: Google Maps SEO, Google My Business optimization, local map pack ranking, GBP management
- Unique: "Impressions but no calls?" checklist (category, photos, reviews, hours, website link, posts), monthly GBP report sample, what we will NOT do (fake addresses, keyword-stuffed names, fake reviews — these get profiles suspended).
- FAQs: How long does it take to rank on Google Maps? · Why do I get views but no calls? · Can you verify my profile? · Can I rank in a city where I don't have an address? · How many reviews do I need?

### AI voice agents — `/ai-voice-agent-development/` (W2)
- **Title:** AI Voice Agents & AI Receptionists | Webix Solutions
- **Meta:** An AI receptionist that answers every call, qualifies the job, books it in your calendar and texts you a summary. Built for contractors and clinics.
- **H1:** AI voice agents and AI receptionists
- KW: AI receptionist · Sec: AI voice agent development, AI phone answering service, virtual receptionist AI for contractors
- FAQs: Will callers know it's AI? (disclose — explain) · What happens with complex calls? · Which phone numbers work? · Cost per month? · Can it book into my calendar?

### AI search optimization (GEO) — `/ai-search-optimization/` (W2)
- **Title:** AI Search Optimization (GEO) Services | Webix Solutions
- **Meta:** Make sure ChatGPT, Perplexity, Gemini and Google AI Overviews can reach, read and correctly describe your business. Audits, fixes, schema and llms.txt.
- **H1:** AI search optimization (GEO) services
- KW: generative engine optimization services · Sec: AI search optimization, GEO agency, AEO, optimize for ChatGPT, AI Overviews optimization
- Positioning rule (honesty): we make the business reachable, readable and accurately described; nobody can force an AI to recommend a business. Say this on the page — it's a trust signal.
- Unique: what we check (crawler access, server-rendered content, schema, llms.txt, facts consistency, third-party listings), monthly "assistant test" report format.
- FAQs: What is GEO? · Is GEO different from SEO? · Can you get my business recommended by ChatGPT? · What is llms.txt? · How do you measure AI visibility?

### Custom web apps — `/custom-web-application-development/` (W2)
- **Title:** Custom Web Application Development | Webix Solutions
- **Meta:** Portals, dashboards, booking systems, invoicing tools and SaaS MVPs built with Next.js, React and Node.js — fast, secure and made to scale.
- **H1:** Custom web application development
- KW: custom web application development · Sec: Next.js development company, React development services, SaaS MVP development, web portal development
- Unique: things we've built (CRM, invoice system, before/after tool, booking systems, e-commerce platform — from portfolio), stack, how we scope (fixed-price phases).
- FAQs: How much does a web app cost? · Fixed price or hourly? · Do I own the code? · Can you take over an existing codebase? · How do you handle hosting and security?

### CMS websites — `/cms-website-development/` (W2)
- **Title:** CMS Website Development Services | Webix Solutions
- **Meta:** WordPress, WooCommerce, Shopify, Wix, Webflow and Squarespace websites — 50+ CMS builds delivered. Easy to edit, fast and SEO-ready.
- **H1:** CMS website development on every major platform
- KW: CMS website development · Sec: Wix website design, Webflow development, Squarespace website design, WooCommerce development
- Unique: platform chooser table (best for, monthly cost, editing ease, limits).
- FAQs: Which CMS is best for my business? · Can you migrate between platforms? · Can my team edit it? · Do you provide training?

### WordPress — `/wordpress-development-services/` (W2)
- **Title:** WordPress Development Services | Webix Solutions
- **Meta:** Custom WordPress and Elementor Pro websites, WooCommerce stores, speed fixes, malware cleanup and ongoing care from a team that has built 50+ CMS sites.
- **H1:** WordPress development services
- KW: WordPress development services · Sec: WordPress developer, Elementor website design, WooCommerce development, WordPress speed optimization, WordPress malware removal
- FAQs: How much does a WordPress site cost? · Elementor or custom theme? · Can you fix a hacked WordPress site? · Do you offer maintenance?

### Custom CRM — `/custom-crm-development/` (W2)
- **Title:** Custom CRM Development Services | Webix Solutions
- **Meta:** A CRM built around how your team actually sells: pipelines, tasks, invoices, HR and dashboards in one place — no per-seat fees.
- **H1:** Custom CRM development
- KW: custom CRM development · Sec: CRM software development, custom CRM for small business, CRM integration
- Proof: our own internal CRM (screens re-shot with demo data — never the real dashboard).
- FAQs: Custom CRM vs HubSpot/Zoho? · How long does it take? · Can it import our data? · Who hosts it?

### Website maintenance — `/website-maintenance-services/` (W2)
- **Title:** Website Maintenance from $99/month | Webix Solutions
- **Meta:** Updates, backups, security checks, uptime and speed monitoring, content edits and monthly reports for WordPress, Shopify and custom sites.
- **H1:** Website maintenance services
- KW: website maintenance services · Sec: WordPress maintenance, website care plan, website support
- Links to care plans on `/pricing/`.

### Lead generation automation — `/lead-generation-automation/` (W2)
- **Title:** B2B Lead Generation Automation | Webix Solutions
- **Meta:** Automated prospect lists, enrichment and personalised outreach — built on compliant data sources, with human review before anything is sent.
- **H1:** B2B lead generation automation
- KW: lead generation automation · Sec: automated lead generation, B2B lead generation services, cold email automation
- Compliance note on page: respect platform terms, CAN-SPAM/CASL, opt-out in every email.
- FAQs: Where do the leads come from? · Is cold email legal in Canada/US? · How many emails per day is safe? · Do you write the emails?
