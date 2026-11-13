import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/seo";
import { LEGACY_CATEGORIES } from "@/config/legacy-categories";
import { getPublishedServices } from "@/content/services";
import { getPublishedIndustryPages } from "@/content/industries";
import { getPublishedLocations } from "@/content/locations";
import { getPublishedWorkEntries } from "@/content/work";
import { getPublishedBlogPosts } from "@/content/blog/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/", "/services/", "/industries/", "/our-work/", "/pricing/", "/offers/",
    "/white-label-partners/", "/about-us/", "/book-a-call/", "/contact-us/",
    "/blogs/", "/careers/", "/privacy-policy/", "/terms-and-conditions/",
    "/cookie-policy/", "/refund-and-cancellation-policy/",
    "/case-studio/developed-a-custom-mobile-app-for-a-local-food-restaurant/",
    ...Object.keys(LEGACY_CATEGORIES).map((slug) => `/category/${slug}/`),
    ...getPublishedServices().map(({ slug }) => `/${slug}/`),
    ...getPublishedIndustryPages().map(({ slug }) => `/industries/${slug}/`),
    ...getPublishedLocations().map(({ slug }) => `/locations/${slug}/`),
    ...getPublishedWorkEntries().filter((work) => !work.scopeOnly).map(({ slug }) => `/our-work/${slug}/`),
  ];
  return [
    ...routes.map((route) => ({ url: `${SITE_URL}${route}` })),
    ...getPublishedBlogPosts().map((post) => ({
      url: `${SITE_URL}/${post.slug}/`,
      lastModified: post.modifiedDate ?? post.publishedDate,
      ...(post.cover ? { images: [`${SITE_URL}${post.cover.path}`] } : {}),
    })),
  ];
}
