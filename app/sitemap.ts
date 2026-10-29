import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/seo";
import { getPublishedServices } from "@/content/services";
import { getPublishedIndustryPages } from "@/content/industries";
import { getPublishedLocations } from "@/content/locations";
import { getPublishedBlogPosts } from "@/content/blog/posts";

/**
 * Dynamically generated sitemap from published content registries.
 * Excludes any `published: false` entry and any `noindex` route (/styleguide/, /code-of-conduct/).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const coreRoutes = [
    "/",
    "/services/",
    "/industries/",
    "/our-work/",
    "/pricing/",
    "/offers/",
    "/white-label-partners/",
    "/about-us/",
    "/book-a-call/",
    "/contact-us/",
    "/blogs/",
    "/careers/",
    "/privacy-policy/",
    "/terms-and-conditions/",
    "/cookie-policy/",
    "/refund-and-cancellation-policy/",
  ];

  const coreEntries: MetadataRoute.Sitemap = coreRoutes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1.0 : route === "/offers/" ? 0.9 : 0.8,
  }));

  const serviceEntries: MetadataRoute.Sitemap = getPublishedServices().map(
    (s) => ({
      url: `${SITE_URL}/${s.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  const industryEntries: MetadataRoute.Sitemap = getPublishedIndustryPages().map(
    (ind) => ({
      url: `${SITE_URL}/industries/${ind.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const locationEntries: MetadataRoute.Sitemap = getPublishedLocations().map(
    (loc) => ({
      url: `${SITE_URL}/locations/${loc.slug}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  const blogEntries: MetadataRoute.Sitemap = getPublishedBlogPosts().map(
    (post) => ({
      url: `${SITE_URL}/${post.slug}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.75,
    })
  );

  return [
    ...coreEntries,
    ...serviceEntries,
    ...industryEntries,
    ...locationEntries,
    ...blogEntries,
  ];
}
