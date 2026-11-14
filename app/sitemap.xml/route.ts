import { getSitemapGroups, sitemapIndexXml, sitemapResponse } from "@/lib/sitemap";

export const dynamic = "force-static";

export function GET() {
  return sitemapResponse(sitemapIndexXml(getSitemapGroups()));
}
