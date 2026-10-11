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
    publisher: {
      "@type": "EducationalOrganization",
      name: "Good Marks Classes",
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/good-marks-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: [post.category || "Education", "Good Marks Classes"],
    articleSection: post.category || "General",
    inLanguage: "en-IN",
    about: {
      "@type": "EducationalOrganization",
      name: "Good Marks Classes",
      description:
        "Coaching institute in Gurugram offering CBSE, IIT JEE, NEET, CUET and Foundation programs through offline, online, hybrid and home tuition formats.",
      telephone: "+91-8800880028",
      email: "info@goodmarksclasses.com",
      url: SITE,
      founder: { "@type": "Person", name: "Sunil Gola" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
    },
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
