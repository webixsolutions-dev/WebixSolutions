export type BlogCategory =
  | "SEO & Search"
  | "E-Commerce"
  | "AI & Automation"
  | "Web Development"
  | "Growth & Marketing";

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface AuthorProfile {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  organization?: boolean;
  avatarText: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedDate: string;
  modifiedDate?: string;
  cover: { path: string; alt: string };
  sources?: { label: string; href: string }[];
  category: BlogCategory;
  readingTimeMinutes: number;
  answerFirst: string;
  keyTakeaways: [string, string, string];
  relatedServiceSlug: string;
  relatedServiceCtaLabel: string;
  author: AuthorProfile;
  faqs: BlogFaq[];
  contentSections: Array<{
    id: string;
    heading: string;
    paragraphs: string[];
    table?: {
      headers: string[];
      rows: string[][];
      caption?: string;
    };
    bullets?: string[];
  }>;
}

export function formatBlogDate(date: string) {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(date));
}
