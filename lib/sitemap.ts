import { SITE_URL } from "@/config/seo";
import { LEGACY_CATEGORIES } from "@/config/legacy-categories";
import { getPublishedServices } from "@/content/services";
import { getPublishedIndustryPages } from "@/content/industries";
import { getPublishedLocations } from "@/content/locations";
import { getPublishedWorkEntries } from "@/content/work";
import { getPublishedBlogPosts } from "@/content/blog/posts";
import { SITE_FACTS } from "@/content/site-facts";

export interface SitemapImage {
  path: string;
  alt: string;
}

export interface SitemapEntry {
  path: string;
  title: string;
  lastModified?: string;
  images: SitemapImage[];
}

export interface SitemapGroup {
  slug: string;
  title: string;
  entries: SitemapEntry[];
}

export function getSitemapGroups(): SitemapGroup[] {
  const projects = getPublishedWorkEntries();
  const covers = projects.flatMap((project) => project.cover
    ? [{ path: project.cover, alt: project.coverAlt ?? project.title }]
    : []);
  const articles = getPublishedBlogPosts();
  const articleCovers = articles.map((article) => article.cover);
  const corePages: [string, string][] = [
    ["/", "Home"], ["/services/", "Services"], ["/industries/", "Industries"],
    ["/our-work/", "Our work"], ["/pricing/", "Pricing"], ["/offers/", "Growth packages"],
    ["/white-label-partners/", "White-label partnerships"], ["/about-us/", "About Webix Solutions"],
    ["/book-a-call/", "Book a strategy call"], ["/contact-us/", "Contact"],
    ["/blogs/", "Blog"], ["/careers/", "Careers"], ["/privacy-policy/", "Privacy policy"],
    ["/terms-and-conditions/", "Terms and conditions"], ["/cookie-policy/", "Cookie policy"],
    ["/refund-and-cancellation-policy/", "Refund and cancellation policy"],
    ...Object.entries(LEGACY_CATEGORIES).map(([slug, category]): [string, string] =>
      [`/category/${slug}/`, category.title]),
  ];
  const coreImages: Record<string, SitemapImage[]> = {
    "/": covers.filter((cover) => projects.some((project) =>
      !project.scopeOnly && project.cover === cover.path)),
    "/our-work/": covers,
    "/blogs/": articleCovers,
    "/about-us/": [{
      path: SITE_FACTS.founder.photo,
      alt: `${SITE_FACTS.founder.name}, ${SITE_FACTS.founder.role} of Webix Solutions`,
    }],
  };

  return [
    { slug: "pages", title: "Pages", entries: corePages.map(([path, title]) => ({
      path, title, images: coreImages[path] ?? [],
    })) },
    { slug: "services", title: "Services", entries: getPublishedServices().map((service) => ({
      path: `/${service.slug}/`, title: service.name, images: [],
    })) },
    { slug: "industries", title: "Industry guides", entries: getPublishedIndustryPages().map((industry) => ({
      path: `/industries/${industry.slug}/`, title: industry.name, images: [],
    })) },
    { slug: "locations", title: "Markets", entries: getPublishedLocations().map((location) => ({
      path: `/locations/${location.slug}/`, title: location.countryName, images: [],
    })) },
    { slug: "work", title: "Case studies", entries: [
      ...projects.filter((project) => !project.scopeOnly).map((project) => ({
        path: `/our-work/${project.slug}/`, title: project.title,
        images: project.cover ? [{ path: project.cover, alt: project.coverAlt ?? project.title }] : [],
      })),
      {
        path: "/case-studio/developed-a-custom-mobile-app-for-a-local-food-restaurant/",
        title: "Custom restaurant ordering app", images: [],
      },
    ] },
    { slug: "blog", title: "Blog articles", entries: articles.map((article) => ({
      path: `/${article.slug}/`, title: article.title,
      lastModified: article.modifiedDate ?? article.publishedDate,
      images: [article.cover],
    })) },
  ];
}

function escapeXml(text: string): string {
  return text.replace(/[<>&"']/g, (character) => ({
    "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;",
  })[character]!);
}

export function sitemapPath(group: string): string {
  return `/sitemap-${group}.xml`;
}

export function sitemapIndexXml(groups: SitemapGroup[]): string {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>',
    '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...groups.map((group) => `<sitemap><loc>${escapeXml(`${SITE_URL}${sitemapPath(group.slug)}`)}</loc></sitemap>`),
    "</sitemapindex>",
  ].join("\n");
}

export function sitemapGroupXml(entries: SitemapEntry[]): string {
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...entries.map((entry) => [
      "<url>",
      `<loc>${escapeXml(`${SITE_URL}${entry.path}`)}</loc>`,
      ...(entry.lastModified ? [`<lastmod>${escapeXml(entry.lastModified)}</lastmod>`] : []),
      ...entry.images.map((image) => `<image:image><image:loc>${escapeXml(`${SITE_URL}${image.path}`)}</image:loc></image:image>`),
      "</url>",
    ].join("")),
    "</urlset>",
  ].join("\n");
}

export function sitemapResponse(xml: string): Response {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
