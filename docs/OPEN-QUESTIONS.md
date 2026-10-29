# Open Questions (`[CONFIRM]` Items Collected from Docs)

Every fact, metric, policy, and technical detail marked `[CONFIRM]` across `docs/site-facts.md` and `docs/00-strategy.md` through `docs/09-blog-plan.md` is consolidated below.

> **Operating Rule (from `.agents/rules/04-content-truth.md`):**
> Any item marked `[CONFIRM]` below **will NOT be published as a specific number or claim** until confirmed by Haroon. Until confirmed, the site will use neutral wording or hide the specific badge/metric.

---

## 1. Company Identity, Legal & Locations (`docs/site-facts.md`, `docs/02-page-briefs-core.md`)

- [ ] **[CONFIRM-01] Legal Entity & Registration**: Exact legal registered name, legal form (Sole proprietorship / SMC-Pvt Ltd / Pvt Ltd / Partnership), registration number, NTN, and founding year (`2024` vs earlier).
- [ ] **[CONFIRM-02] Secondary Meeting Address**: Confirm if there is a public Lahore meeting address or if copy should strictly say *"Meetings in Lahore by appointment"*.
- [ ] **[CONFIRM-03] Reply Time & Proposal SLA**: Confirm whether *"Reply within one business day"* (for `/about-us/` and `/contact-us/`) and *"Plan & proposal in 48 hours"* (for Home How-we-work Step 2) are the official commitments.
- [ ] **[CONFIRM-04] Who Joins Discovery Calls**: On `/book-a-call/`, confirm whether calls are hosted by *"Haroon Sukhera or a department lead"*.
- [ ] **[CONFIRM-05] Legal Governing Law & Refund Rules**:
  - Confirm governing law (Pakistan) and dispute jurisdiction for `/terms-and-conditions/`.
  - Confirm exact deposit non-refundability, monthly retainer notice period (e.g., 14 or 30 days), 6-month minimum term cancellation rules on `/offers/`, and milestone-based refund rules for `/refund-and-cancellation-policy/`.
  - **Lawyer Review Note**: All legal pages (`/privacy-policy/`, `/terms-and-conditions/`, `/cookie-policy/`, `/refund-and-cancellation-policy/`, `/code-of-conduct/`) are drafted in plain English and should be reviewed by qualified legal counsel before launch.

---

## 2. Verified Numbers & Proof (`docs/site-facts.md`, `docs/08-portfolio-proof.md`)

- [x] **[CONFIRM-06] Total Clients & Years in Operation**: *"60+ happy clients"* confirmed and displayed in proof strip. *"3+ years"* remains [CONFIRM].
- [x] **[CONFIRM-07] Own Ventures Public Naming**: Confirmed. **Zelvomart**, **LaptopSouq.ae**, and **Miraj Builders** are approved for display by name, labelled *"Our own brands — built and run by the Webix team"*.
- [ ] **[CONFIRM-08] Department Headcounts**: On `/about-us/`, confirm whether individual department headcounts should be shown or just the overall *"20+ in-house specialists"* figure.
- [x] **[CONFIRM-09] Paid Ads Campaign Metrics (`docs/site-facts.md` & `docs/03-page-briefs-services.md`)**:
  - Confirmed: **"64 WhatsApp conversations at Rs 15.01 each"** is Zelvomart's campaign (own brand, Pakistan e-commerce, click-to-WhatsApp, last 30 days). Displayed with Zelvomart name in Hero Console Signal 1 and Proof Wall.
  - Other rows from that ads report remain hidden.
  - Confirm industry vertical and anonymised display permission for the US (`$21,375.94` spend / `1,304` leads at `$16.39`), CAD (`CA$2,282.34` spend / `488` convs), and PKR ad accounts listed in `docs/site-facts.md`.
- [ ] **[CONFIRM-10] Launch Case Studies (`docs/08-portfolio-proof.md` & `docs/04-page-briefs-industries.md`)**:
  - `zelvomart-ecommerce-platform`: Confirm ads account tie-in, storefront screenshots, and named permission.
  - `custom-crm-agency-operations`: Provide screens re-shot exclusively with demo data (never real P&L/salaries).
  - `ai-lead-engine-google-maps`: Confirm real volume numbers (leads/day, reply rate) and stack (n8n/Make/custom).
  - `ai-voice-receptionist`: Confirm voice stack used (e.g., Twilio/Vapi/Retell/OpenAI) and any real call stats.
  - `us-contractor-websites`: Confirm anonymised vs. named permission for the US electrical contractor, exterior/holiday-lighting installer, and garage-bay leasing sites, plus the personal-training one-page site for `/industries/fitness-wellness/`.
- [ ] **[CONFIRM-11] Verified Client Testimonials**: Provide real client reviews (`quote`, `name`, `role`, `company`, `country`, `source`, `sourceUrl`) with written permission. Until at least 3 verified quotes are added to `content/testimonials.ts`, the site will automatically render the **Proof Wall** (GitHub activity + own brands + anonymised ad results).

---

## 3. Offers, Pricing & Payment Terms (`docs/00-strategy.md`, `docs/site-facts.md`, `docs/02-page-briefs-core.md`)

- [ ] **[CONFIRM-12] Flagship Offers & Starting Prices**:
  - Confirm the 4 flagship offers on `/offers/`: **Launch Kit ($499)**, **Growth Engine ($399/mo, 6-month min term)**, **Growth Engine Pro ($799/mo)**, and **AI Automation Sprint ($999)**.
  - Confirm individual service starting prices in `docs/site-facts.md`: Care plans (`$99 / $249 / $449/mo`), Business site (`from $499`), WordPress (`from $699`), E-commerce (`from $1,199`), Custom Next.js (`from $1,999`), Custom Web App/CRM (`from $3,500`), Mobile App (`from $3,900`), SEO (`from $299/mo`), GBP (`$199 setup / $149/mo`), SMM (`from $149/mo`), Paid Ads (`from $249/mo` or `15%`), AI Chatbot (`from $499`), AI Voice Agent (`from $799 + $149/mo`), AI Video (`from $149/video` or `$499/mo`), Creative (`from $99`), CRO/GEO Audit (`$99`).
- [ ] **[CONFIRM-13] International Payment Methods**: Confirm accepted payment methods for international clients (e.g., Stripe, Wise, Payoneer, international bank wire) for `/pricing/` FAQs.
- [ ] **[CONFIRM-14] Local Currency Conversion Rates**: Confirm the fixed approximate conversion rates and display notes for `CAD`, `USD`, `AED`, `NZD`, and `PKR` on `/locations/<market>/`.
- [ ] **[CONFIRM-15] White-Label Partner Terms (`/white-label-partners/`)**:
  - Confirm the 5 guarantees (unbranded files, no client contact, partner PM tool, timezone overlap, revision policy).
  - Confirm whether partner pricing shows *"Partner rate card on request"* or a specific discount percentage.
  - Confirm scope and price of the white-label **Pilot Offer**.

---

## 4. Service Capabilities, Tools & Platforms (`docs/02-page-briefs-core.md`, `docs/03-page-briefs-services.md`)

- [ ] **[CONFIRM-16] Platforms & AI Tools List**:
  - Confirm the platform marquee list on `/our-work/`: WordPress, Shopify, Wix, Webflow, Squarespace, WooCommerce, Next.js, React, Node.js, Flutter, Laravel.
  - Confirm the AI automation tools grid on `/ai-automation-services/`: OpenAI, Claude, Gemini, n8n, Make, Zapier, HubSpot, Google Workspace, WhatsApp Business API, Twilio.
- [ ] **[CONFIRM-17] Creative Studio Turnaround Times**: Confirm standard turnaround times per deliverable (logo, brand kit, ad creative batch, reel edit) for `/creative-services/`.
- [ ] **[CONFIRM-18] Arabic & Urdu Language Support**: Confirm whether Webix Solutions offers Arabic and Urdu copywriting (`/ai-content-creation-services/`) and Arabic/Urdu AI chatbots (`/ai-chatbot-development/`).

---

## 5. SEO Migrations & Content Cadence (`docs/01-sitemap-url-map.md`, `docs/09-blog-plan.md`)

- [ ] **[CONFIRM-19] Off-Topic Blog Post 410**: Confirm returning `410 Gone` for `/ai-contextual-governance-solution/` (230 impressions, off-topic).
- [ ] **[CONFIRM-20] Blog Publishing Capacity**: Confirm whether the content team can sustain the `docs/09-blog-plan.md` cadence of **2 posts/week for 12 weeks** (24 buyer-intent posts).

---

## 6. Booking System & Infrastructure (`docs/06-booking-system.md`, `docs/07-seo-geo-technical.md`)

- [ ] **[CONFIRM-21] Booking Availability Windows (`config/booking.ts`)**: Confirm the booking slot windows from `docs/06-booking-system.md`: Mon–Fri `10:00–13:00`, `21:00–23:59`, `00:00–02:00` PKT and Sat `14:00–18:00` PKT, `10 min` buffers, `12 hours` minimum notice, `30 days` advance window, `6` max bookings/day, and meeting types (`strategy` 30m, `intro` 15m, `partner` 45m).
- [ ] **[CONFIRM-22] Environment Credentials for Launch**:
  - Google Calendar OAuth (`GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`, `GOOGLE_CALENDAR_ID`)
  - Cloudflare Turnstile (`NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`)
  - Email delivery (`RESEND_API_KEY`)
  - Analytics (`NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_CLARITY_ID`, `NEXT_PUBLIC_META_PIXEL_ID`)
