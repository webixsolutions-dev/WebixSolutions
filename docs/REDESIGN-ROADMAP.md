# Webix Solutions redesign

1. Preserve the Next.js content registries and existing public routes. Check the preview and canonical domain separately. Keep preview pages out of the index.
2. Apply the reference video's obsidian, chrome and red palette. Build a robot-led home page, a visual work gallery, a globe for the five confirmed markets and a keyboard-operable services menu.
3. Show separate paths for businesses and white-label agencies. Put website builds, custom CRMs and portals, search and AI visibility, and practical automation near the start of the site. Use the approved proof counts and describe the team as remote.
4. Publish Camz Cleaning and existing public work by name. Add anonymised scope summaries where client permission is unavailable. Use art-directed cover images as illustrations and keep client screenshots, prices and account details out of public assets unless cleared.
5. Make the booking dialog the main conversion path. Reuse the Karachi schedule and local-time slot engine. Store reservations transactionally, protect the staff dashboard, and test parallel submissions before release.
6. Verify the production build, responsive layouts, key visitor routes, keyboard navigation, contrast, canonical tags, redirects, crawlable content and booking persistence. Keep production release gated on operational configuration and tests.

## Search and outreach

- Canada: begin with Calgary home-service booking and lead handling, supported by Camz Cleaning.
- United States: connect the existing contractor case study to contractor websites, lead capture and follow-up automation.
- United Arab Emirates: connect the electronics storefront example to e-commerce and catalogue operations.
- Pakistan: connect Zelvomart to e-commerce, checkout and COD workflows.
- New Zealand: list as a market served. Publish an indexable local landing page when there is enough local evidence and distinct buyer information.

Use clear service definitions, linked case studies and useful buyer FAQs. Google applies the same core search eligibility requirements to its AI features. Track market and service queries in Search Console after canonical launch, then compare them with booking conversions by source.

## AI service priorities

Lead with customer support and intake assistants, CRM follow-up, document and reporting workflows, then offer voice reception where call volume warrants it. The 2026 OECD D4SME survey points to uneven integration of AI with existing operations. Statistics Canada and the UK Business Data Survey identify virtual agents, analytics and marketing automation as real business applications. CRM and portals are implementation offers, with demand to be validated by qualified outreach and bookings.

- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites
- https://www.oecd.org/en/publications/empowering-smes-in-the-age-of-ai_bf5a9816-en.html
- https://www150.statcan.gc.ca/n1/pub/11-621-m/11-621-m2026010-eng.pdf
- https://www.gov.uk/government/statistics/uk-business-data-survey-2026/uk-business-data-survey-2026

## Booking operations

- Apply `db/001-bookings.sql` to a dedicated preview database and verify the booking flow there before applying the schema to production.
- Set `BOOKING_DATABASE_URL` for each deployment environment. Set `BOOKING_ADMIN_PASSWORD` to an owner-controlled secret of at least 24 characters. The dashboard is at `/admin/bookings/`. Set both Turnstile keys before opening booking to public traffic.
- A reservation holds a time in the shared Webix schedule and appears as pending in the dashboard. Staff email the meeting details and mark it confirmed. Cancelling it releases the slot. The visitor can download an iCalendar file after reserving.
- The booking dashboard is the schedule of record for this version. Staff should check it when arranging calls outside the website. Automatic Google Calendar invites and outbound notifications require a separately configured and tested integration.
