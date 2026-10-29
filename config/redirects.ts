/**
 * Redirects and 410 Gone rules per docs/01-sitemap-url-map.md
 */

export const EXACT_301_REDIRECTS: Record<string, string> = {
  "/home": "/",
  "/home/": "/",
  "/blog": "/blogs/",
  "/blog/": "/blogs/",
  "/portfolio": "/our-work/",
  "/portfolio/": "/our-work/",
  "/work": "/our-work/",
  "/work/": "/our-work/",
  "/about": "/about-us/",
  "/about/": "/about-us/",
  "/contact": "/contact-us/",
  "/contact/": "/contact-us/",
  "/category/restaurant": "/industries/",
  "/category/restaurant/": "/industries/",
  "/ai-automation-agency-business-model": "/ai-automation-services/",
  "/ai-automation-agency-business-model/": "/ai-automation-services/",
};

export const PREFIX_301_TO_BLOGS: string[] = [
  "/category/",
  "/tag/",
  "/author/",
  "/feed",
];

export const EXACT_410_PATHS = new Set<string>([
  "/ai-contextual-governance-solution",
  "/ai-contextual-governance-solution/",
  "/wp-login.php",
  "/xmlrpc.php",
]);

export const PREFIX_410_PATHS: string[] = [
  "/market/",
  "/wp-admin",
  "/wp-content/",
  "/wp-includes/",
  "/wp-json",
];
