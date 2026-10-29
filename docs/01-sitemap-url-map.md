# 01 — Sitemap, navigation and URL map

## URL rules
- Keep the existing WordPress slugs that already exist (flat, root-level, trailing slash). Google already knows them — no redirects needed.
- `trailingSlash: true` in Next.js config so every URL ends with `/` exactly like WordPress did.
- New service pages are also flat (root-level) to match. Industries live under `/industries/<slug>/`, locations under `/locations/<slug>/`, case studies under `/our-work/<slug>/`.
- Blog posts stay root-level (`/<post-slug>/`) like WordPress. New posts follow the same pattern.
- One canonical per page = the production URL with `https://webixsolutions.com` and trailing slash. Never canonical to a preview domain.

## Full page list

Legend: **K** keep slug (existing) · **N** new page · W1 = launch wave · W2 = second wave (within 30 days after launch)

### Core
| URL | Page | Status | Wave |
|---|---|---|---|
| `/` | Home | K | W1 |
| `/about-us/` | About | K | W1 |
| `/services/` | Services hub | K | W1 |
| `/industries/` | Industries hub | K | W1 |
| `/pricing/` | Pricing | K | W1 |
| `/offers/` | Growth packages (ad landing) | N | W1 |
| `/our-work/` | Portfolio hub | K | W1 |
| `/our-work/<case-slug>/` | Case studies (6–10) | N | W1 (4) / W2 (rest) |
| `/contact-us/` | Contact | K | W1 |
| `/book-a-call/` | Booking calendar | N | W1 |
| `/white-label-partners/` | For agencies & IT companies | N | W1 |
| `/blogs/` | Blog index | K | W1 |
| `/careers/` | Careers (links to code of conduct) | N | W2 |

### Services — existing (keep slugs, rewrite content)
| URL | H1 focus | Wave |
|---|---|---|
| `/web-design-development-service/` | Custom web design & development | W1 |
| `/seo-services/` | SEO services (Google) | W1 |
| `/social-media-management/` | Social media management | W1 |
| `/creative-services/` | Graphic design & creative studio | W1 |
| `/shopify-store-development-services/` | Shopify store development | W1 |
| `/paid-advertising-services/` | PPC & paid social (Meta, Google, TikTok) | W1 |
| `/ai-automation-services/` | AI automation & AI agents | W1 |
| `/mobile-app-development-services/` | Mobile apps (Flutter) | W1 |
| `/conversion-rate-optimization-services/` | CRO | W1 |
| `/brand-awareness-strategy/` | Brand strategy & awareness | W1 |
| `/reputation-management-service/` | Online reputation management | W1 |

### Services — new
| URL | Primary keyword | Wave |
|---|---|---|
| `/ai-digital-marketing-agency/` | AI digital marketing agency | W1 |
| `/ai-content-creation-services/` | AI content creation services | W1 |
| `/ai-social-media-content-creation/` | AI social media content creation services | W1 |
| `/ai-video-production-services/` | AI video production services | W1 |
| `/ai-ecommerce-automation/` | AI automation for e-commerce businesses | W1 |
| `/ai-chatbot-development/` | AI chatbot development services | W1 |
| `/google-business-profile-optimization/` | Google Business Profile optimization / Google Maps SEO | W1 |
| `/ai-voice-agent-development/` | AI voice agent / AI receptionist | W2 |
| `/ai-search-optimization/` | Generative engine optimization (GEO) / AI search optimization | W2 |
| `/custom-web-application-development/` | Custom web application development (Next.js/React/Node) | W2 |
| `/cms-website-development/` | CMS website development (WordPress, Shopify, Wix, Webflow, Squarespace, WooCommerce) | W2 |
| `/wordpress-development-services/` | WordPress development services | W2 |
| `/custom-crm-development/` | Custom CRM development | W2 |
| `/website-maintenance-services/` | Website maintenance services (links to care plans) | W2 |
| `/lead-generation-automation/` | B2B lead generation automation | W2 |

Cannibalisation guard (each page owns ONE intent):
- `/ai-content-creation-services/` = written content at scale (SEO articles, product descriptions, email, landing copy) produced with AI + human editors.
- `/ai-social-media-content-creation/` = posts, carousels, reels, captions and calendars made with AI for social.
- `/ai-video-production-services/` = video: ad creatives, UGC-style ads, explainers, product videos, avatar videos.
- `/ai-digital-marketing-agency/` = the umbrella: how AI is used across strategy, ads, SEO and reporting; links down to the specific AI pages. It must not try to rank for "digital marketing agency" (home owns that).
- `/seo-services/` = Google organic SEO. `/ai-search-optimization/` = visibility in AI answers (ChatGPT, Perplexity, AI Overviews). Each links to the other.
- `/ai-automation-services/` = business process automation & agents (any industry). `/ai-ecommerce-automation/` = store-specific (orders, support, catalog, reviews, abandoned carts). `/ai-chatbot-development/` = chat interfaces. `/ai-voice-agent-development/` = phone.

### Industries
Hub `/industries/` lists 14 industries (short sections). Dedicated pages only where we have something specific to say:
| URL | Wave |
|---|---|
| `/industries/ecommerce/` | W1 |
| `/industries/home-services-contractors/` (roofers, HVAC, electricians, cleaning, exterior/lighting) | W1 |
| `/industries/real-estate-construction/` | W1 |
| `/industries/healthcare-clinics/` | W2 |
| `/industries/professional-services/` (legal, accounting, consulting, immigration) | W2 |
| `/industries/restaurants-hospitality/` | W2 |
| `/industries/fitness-wellness/` | W2 |
| `/industries/saas-startups/` | W2 |
Hub-only (no own page yet): Education & training, Automotive & dealerships, Multi-location & franchises, Beauty & salons, Logistics & trucking, Travel & immigration consultants, Nonprofits.

### Locations (market pages — must be genuinely different, see page briefs)
| URL | Wave |
|---|---|
| `/locations/canada/` | W1 |
| `/locations/united-states/` | W1 |
| `/locations/uae/` | W1 |
| `/locations/new-zealand/` | W2 |
| `/locations/pakistan/` | W1 |

### Legal & policy
| URL | Index? | Notes |
|---|---|---|
| `/privacy-policy/` | index | Rewrite (see page briefs) |
| `/terms-and-conditions/` | index | New |
| `/cookie-policy/` | index | New |
| `/refund-and-cancellation-policy/` | index | New — needed for the offers page and for ad platform approval |
| `/code-of-conduct/` | **noindex, follow** | Keep page, remove from sitemap and main nav. Do NOT block it in robots.txt (Google must crawl it to see the noindex). Link only from `/careers/` |

### Ads-only landing pages
`/lp/<campaign>/` — variants of `/offers/` for specific ads. `noindex, follow`, not in sitemap.

## Redirects and removals (from GSC data, Oct 27 2026)

### Critical: spam URLs
GSC "Valid" coverage export lists **982 indexed URLs like `/market/R04184209678`**, and the indexed-page count went from 416 (Aug 5) to **68,336 (Aug 11)** before falling to 3,447 (Oct 23). That pattern is a classic spam-injection hack on the WordPress site.
- New site: middleware returns **410 Gone** for `/market/*` (and any path matching `^/market/`).
- Before launch: scan the live WordPress install (Wordfence or host malware scan), remove injected files/users, change all passwords, check GSC → Security & Manual actions, and remove any spam sitemaps in GSC.
- After launch: GSC → Removals → temporary removal for prefix `https://webixsolutions.com/market/`.

### 301 redirects
| From | To | Why |
|---|---|---|
| `/web-design-development/` | `/web-design-development-service/` | Duplicate URL found in GSC |
| `/category/blog/` | `/blogs/` | Thin archive |
| `/category/restaurant/` | `/industries/restaurants-hospitality/` (until W2 page exists → `/industries/`) | Thin archive |
| `/category/*`, `/tag/*`, `/author/*` | `/blogs/` | WordPress archives |
| `/ai-automation-agency-business-model/` | `/ai-automation-services/` | Targets people starting their own agency — wrong audience |
| `/feed/`, `/comments/feed/` | `/blogs/` | WP leftovers |

### 410 Gone
| Path | Why |
|---|---|
| `/market/*` | Hack spam |
| `/ai-contextual-governance-solution/` | Off-topic jargon page, zero clicks, unrelated to our services [CONFIRM — if Haroon wants it, move it to the blog and refresh instead] |
| `/wp-admin/*`, `/wp-login.php`, `/xmlrpc.php`, `/?s=*` | WordPress endpoints |

### Blog posts — keep and refresh (keep same URL)
See `09-blog-plan.md`.

## Navigation

### Header (desktop)
Logo · Services (mega menu) · Industries · Work · Pricing · About · [Book a call] (primary button) · WhatsApp icon button

Mega menu — four columns, plain labels, each item = name + one short line:
- **Build:** Web design & development · Custom web apps · Shopify stores · CMS & WordPress · Mobile apps · Custom CRM · Website maintenance
- **Grow:** SEO · AI search optimization (GEO) · Google Business Profile · Paid advertising · Social media management · Conversion optimization · Reputation management · Brand strategy
- **AI:** AI digital marketing · AI automation · AI for e-commerce · AI chatbots · AI voice agents · AI content · AI social content · AI video production
- **Create:** Creative services
- Footer strip inside the mega menu: "Packages from $399/month →" (`/offers/`) and "For agencies: white-label →"

(W2 pages appear in the menu only once they are built — the menu reads from the content registry, so unfinished pages never 404.)

### Mobile
Full-height sheet from the right (80% width, page visible behind), logo on top, accordion for Services, sticky bottom bar on every page: [Book a call] [WhatsApp].

### Footer
Giant "webix solutions" wordmark. Columns: Services (top 8) · AI services · Company (About, Work, Pricing, Offers, Careers, Blog, Contact) · Markets (Canada, US, UAE, NZ, Pakistan) · Legal (Privacy, Terms, Cookies, Refunds). NAP block (name, Dunyapur address, phone, email, working hours in PKT + ET). Social icons. Newsletter (email only).
