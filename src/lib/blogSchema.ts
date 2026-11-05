import { organizationId } from '../data/business';

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  /** Optional last-updated date (YYYY-MM-DD). Falls back to `date`. */
  updated?: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  category?: string;
}

const SITE = 'https://www.goodmarksclasses.com';

export function generateBlogSchema(post: BlogPostMeta) {
  const url = `${SITE}/blogs/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    headline: post.metaTitle,
    description: post.metaDescription,
    image: [`${SITE}${post.image}`],
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Person",
      name: "Sunil Gola",
      description: "Founder of Good Marks Classes, B.Tech, Delhi Technological University (DTU)",
      url: `${SITE}/physics-classes-sunil-gola/`,
    },
    publisher: { "@id": organizationId },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: [post.category || "Education", "Good Marks Classes"],
    articleSection: post.category || "General",
    inLanguage: "en-IN",
    about: { "@id": organizationId },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
    isPartOf: {
      "@type": "Blog",
      name: "Good Marks Classes Blog",
      url: `${SITE}/blogs/`,
    },
  };
}
