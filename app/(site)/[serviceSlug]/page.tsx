import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata, SITE_URL } from "@/config/seo";
import {
  buildBreadcrumbJsonLd,
  buildServiceJsonLd,
  buildFaqJsonLd,
  ORG_ID,
  FOUNDER_ID,
} from "@/lib/schema";
import {
  getPublishedServices,
  getServiceBySlug,
  type ServiceFaq,
} from "@/content/services";
import { getServicePageContent } from "@/content/service-pages";
import {
  getPublishedBlogPosts,
  getBlogPostBySlug,
} from "@/content/blog/posts";
import { getNextOpenStrategySlot } from "@/lib/booking/next-slot";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { BlogPostView } from "@/components/blog/blog-post-view";

interface RouteParams {
  params: Promise<{ serviceSlug: string }>;
}

export async function generateStaticParams() {
  const publishedServices = getPublishedServices();
  const publishedBlogPosts = getPublishedBlogPosts();

  const serviceParams = publishedServices.map((service) => ({
    serviceSlug: service.slug,
  }));

  const blogParams = publishedBlogPosts.map((post) => ({
    serviceSlug: post.slug,
  }));

  return [...serviceParams, ...blogParams];
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  if (service) {
    return buildMetadata({
      title: service.title,
      description: service.metaDescription,
      path: `/${service.slug}/`,
    });
  }

  const blogPost = getBlogPostBySlug(serviceSlug);
  if (blogPost) {
    return buildMetadata({
      title: blogPost.metaTitle,
      description: blogPost.metaDescription,
      path: `/${blogPost.slug}/`,
      ogType: "article",
      publishedTime: blogPost.publishedDate,
      modifiedTime: blogPost.lastUpdated,
    });
  }

  return {
    title: "Page Not Found",
    robots: { index: false, follow: false },
  };
}

export default async function DynamicSlugPage({ params }: RouteParams) {
  const { serviceSlug } = await params;
  const service = getServiceBySlug(serviceSlug);

  // 1. Service Page Rendering
  if (service) {
    const pageContent = getServicePageContent(serviceSlug);
    const nextSlot = await getNextOpenStrategySlot();

    const breadcrumbs = buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services/" },
      { name: service.shortName, path: `/${service.slug}/` },
    ]);

    const serviceJsonLd = buildServiceJsonLd(service);

    const effectiveFaqs: ServiceFaq[] =
      pageContent?.faqs && pageContent.faqs.length > 0
        ? pageContent.faqs
        : service.faqs || [];

    const faqJsonLd = buildFaqJsonLd(effectiveFaqs);

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        <ServicePageTemplate
          service={service}
          pageContent={pageContent}
          nextSlot={nextSlot}
        />
      </>
    );
  }

  // 2. Blog Post Rendering
  const blogPost = getBlogPostBySlug(serviceSlug);
  if (blogPost) {
    const breadcrumbs = buildBreadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blogs/" },
      { name: blogPost.title, path: `/${blogPost.slug}/` },
    ]);

    const blogPostingJsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: blogPost.title,
      description: blogPost.metaDescription,
      datePublished: blogPost.publishedDate,
      dateModified: blogPost.lastUpdated,
      author: {
        "@type": "Person",
        name: blogPost.author.name,
        jobTitle: blogPost.author.role,
        sameAs: [blogPost.author.linkedin],
      },
      publisher: {
        "@type": "Organization",
        "@id": ORG_ID,
        name: "Webix Solutions",
        url: `${SITE_URL}/`,
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/${blogPost.slug}/`,
      },
    };

    const faqJsonLd =
      blogPost.faqs.length > 0
        ? buildFaqJsonLd(blogPost.faqs)
        : null;

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
        />
        {faqJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}
        <BlogPostView post={blogPost} />
      </>
    );
  }

  notFound();
}
