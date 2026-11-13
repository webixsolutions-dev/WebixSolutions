import type { Metadata } from "next";

export const SITE_URL = "https://www.webixsolutions.com";
export const SITE_NAME = "Webix Solutions";
export const DEFAULT_TITLE = "Digital Marketing, Web & AI Agency | Webix Solutions";
export const DEFAULT_DESCRIPTION =
  "Websites, SEO, paid ads, social media and AI automation from a team of 20+. Serving Canada, the US, UAE and NZ. Book a free strategy call.";

export const OG_IMAGE_URL = `${SITE_URL}/opengraph-image`;
export const OG_IMAGE_ALT = "Webix Solutions: websites, growth marketing and AI automation";

export interface PageMetaInput {
  /** Full title or short title. If it ends with '| Webix Solutions', used as-is; otherwise suffixed. Must be <= 60 chars total. */
  title: string;
  /** Meta description, max 155 characters. */
  description: string;
  /** Path starting with '/', e.g. '/ai-automation-services/' */
  path: string;
  /** Set true for non-indexed utility pages like /styleguide/ or /code-of-conduct/ */
  noindex?: boolean;
  ogType?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  image?: { path: string; alt: string; width?: number; height?: number };
}

export function ensureTrailingSlash(path: string): string {
  if (!path || path === "/") return "/";
  const clean = path.startsWith("/") ? path : `/${path}`;
  return clean.endsWith("/") ? clean : `${clean}/`;
}

export function buildMetadata(input: PageMetaInput): Metadata {
  const normalizedPath = ensureTrailingSlash(input.path);
  const canonicalUrl = `${SITE_URL}${normalizedPath}`;

  const fullTitle = input.title.includes(SITE_NAME)
    ? input.title
    : `${input.title} | ${SITE_NAME}`;

  // Enforce strict limits in dev/build warnings
  if (fullTitle.length > 60) {
    console.warn(`[SEO Warning] Title exceeds 60 chars (${fullTitle.length}): "${fullTitle}"`);
  }
  if (input.description.length > 155) {
    console.warn(
      `[SEO Warning] Meta description exceeds 155 chars (${input.description.length}): "${input.description}"`
    );
  }

  const image = input.image
    ? { url: new URL(input.image.path, SITE_URL).href, alt: input.image.alt, width: input.image.width, height: input.image.height }
    : { url: OG_IMAGE_URL, width: 1200, height: 630, alt: OG_IMAGE_ALT };

  return {
    title: {
      absolute: fullTitle,
    },
    description: input.description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: input.noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: input.description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type: input.ogType ?? "website",
      images: [image],
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
      ...(input.modifiedTime ? { modifiedTime: input.modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      images: [image],
      description: input.description,
    },
  };
}
