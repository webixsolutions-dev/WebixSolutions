import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { buildMetadata } from "@/config/seo";
import { LEGACY_CATEGORIES } from "@/config/legacy-categories";
import { getPublishedBlogPosts } from "@/content/blog/posts";
import { buildBreadcrumbJsonLd } from "@/lib/schema";

type Category = keyof typeof LEGACY_CATEGORIES;
type Props = { params: Promise<{ categorySlug: string }> };

function getCategory(slug: string): Category {
  if (slug !== "blog" && slug !== "restaurant") notFound();
  return slug;
}

export function generateStaticParams() {
  return Object.keys(LEGACY_CATEGORIES).map((categorySlug) => ({ categorySlug }));
}

export async function generateMetadata({ params }: Props) {
  const category = getCategory((await params).categorySlug);
  return buildMetadata({ ...LEGACY_CATEGORIES[category], path: `/category/${category}/` });
}

export default async function LegacyCategoryPage({ params }: Props) {
  const category = getCategory((await params).categorySlug);
  const { title, description } = LEGACY_CATEGORIES[category];
  const breadcrumbs = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: category === "blog" ? "Blog" : "Industries", path: category === "blog" ? "/blogs/" : "/industries/" },
    { name: title, path: `/category/${category}/` },
  ]);
  const articles = getPublishedBlogPosts().filter((post) =>
    ["types-of-content-marketing", "local-business-growth-strategy-for-more-customers", "benefits-of-online-reputation-management"].includes(post.slug)
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <Section surface="graphite" spacing="hero">
        <Container>
          <h1 className="type-display text-white">{title}</h1>
          <p className="type-lead mt-5 max-w-2xl text-[#c5c9d1]">{description}</p>
        </Container>
      </Section>
      <Section surface="porcelain">
        <Container>
          {category === "blog" ? (
            <>
              <h2 className="type-h2">Digital marketing guides</h2>
              <ul className="mt-8 grid gap-5 md:grid-cols-3">
                {articles.map((post) => (
                  <li key={post.slug} className="rounded-2xl border border-[#D5D8E0] bg-white p-6">
                    <h3 className="type-h3"><Link className="underline-offset-4 hover:underline" href={`/${post.slug}/`}>{post.title}</Link></h3>
                    <p className="mt-3 text-[#454954]">{post.metaDescription}</p>
                  </li>
                ))}
              </ul>
              <Link className="studio-link mt-8" href="/blogs/">Explore all articles</Link>
            </>
          ) : (
            <>
              <h2 className="type-h2">Help diners find you and order directly</h2>
              <p className="type-body mt-4 max-w-3xl">Start with a menu customers can read on a phone, clear opening hours, and a short path to ordering or reserving. We can build the site or app and connect it to the tools your team already uses.</p>
              <ul className="mt-8 space-y-4">
                <li><Link className="studio-link" href="/web-design-development-service/">Restaurant website development</Link></li>
                <li><Link className="studio-link" href="/case-studio/developed-a-custom-mobile-app-for-a-local-food-restaurant/">Restaurant ordering app project</Link></li>
                <li><Link className="studio-link" href="/google-business-profile-optimization/">Google Business Profile setup and optimisation</Link></li>
                <li><Link className="studio-link" href="/book-a-call/">Book a strategy call</Link></li>
              </ul>
            </>
          )}
        </Container>
      </Section>
    </>
  );
}
