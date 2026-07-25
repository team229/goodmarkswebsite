export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  metaTitle: string;
  metaDescription: string;
  category?: string;
}

export function generateBlogSchema(post: BlogPostMeta) {
  const url = `https://goodmarksclasses.com/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    headline: post.metaTitle,
    description: post.metaDescription,
    image: [`https://goodmarksclasses.com${post.image}`],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Good Marks Classes",
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: "Good Marks Classes",
      logo: {
        "@type": "ImageObject",
        url: "https://goodmarksclasses.com/logo.png",
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
      url: "https://goodmarksclasses.com",
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
      url: "https://goodmarksclasses.com/blog",
    },
  };
}
