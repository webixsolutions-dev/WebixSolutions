import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/seo";

/**
 * Mirrors public-files/robots.txt exactly.
 * Welcomes Googlebot, Bingbot, and all major AI search & assistant crawlers.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "*",
          "Googlebot",
          "Bingbot",
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "Claude-User",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
        ],
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
