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
  linkedin: string;
  avatarText: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  publishedDate: string;
  lastUpdated: string;
  category: BlogCategory;
  readingTimeMinutes: number;
  answerFirst: string;
  keyTakeaways: [string, string, string];
  tableOfContents: Array<{ id: string; label: string }>;
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
