import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/config/seo";
import { getPublishedBlogPosts } from "@/content/blog/posts";
import { BlogIndexView } from "@/components/blog/blog-index-view";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Blog — Web, SEO, Ads & AI Insights | Webix Solutions",
  description:
    "Technical guides and benchmarks on web architecture, SEO, paid ads, and AI automation from the 20+ person team at Webix Solutions.",
  path: "/blogs/",
});

export default function BlogsPage() {
  const posts = getPublishedBlogPosts();

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Webix Solutions Blog",
    description:
      "Technical guides and benchmarks on web architecture, SEO, paid ads, and AI automation.",
    url: `${SITE_URL}/blogs/`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `${SITE_URL}/${post.slug}/`,
        name: post.title,
      })),
    },
  };

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blogs/" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogIndexView posts={posts} />
    </>
  );
}
