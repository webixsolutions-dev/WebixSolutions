import { getSitemapGroups, sitemapGroupXml, sitemapResponse } from "@/lib/sitemap";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getSitemapGroups().map((group) => ({ filename: `${group.slug}.xml` }));
}

export async function GET(_request: Request, { params }: {
  params: Promise<{ filename: string }>;
}) {
  const { filename } = await params;
  const group = getSitemapGroups().find((group) => `${group.slug}.xml` === filename);
  if (!group) return new Response("Sitemap not found", { status: 404 });
  return sitemapResponse(sitemapGroupXml(group.entries));
}
