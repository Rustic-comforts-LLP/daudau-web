/**
 * Shared blog post data for the blog index and individual post pages.
 * Kept in a dedicated module so route segments do not import from each other.
 */

export const blogPosts = [
  {
    slug: "future-of-agentic-ai",
    title: "The Future of Agentic AI in Enterprise",
    excerpt:
      "How autonomous AI agents are replacing static workflows and reshaping human capital management.",
    date: "March 15, 2026",
    author: "Dau Dau Research",
  },
  {
    slug: "modern-pos-architecture",
    title: "Architecting Modern POS Systems for Scale",
    excerpt:
      "Deep dive into offline-first capabilities, real-time cloud sync, and edge computing in retail.",
    date: "March 02, 2026",
    author: "Dau Dau Engineering",
  },
  {
    slug: "global-tech-recruiting",
    title: "Navigating Global Tech Recruiting in 2026",
    excerpt:
      "Why culture fit and technical vetting must evolve beyond the traditional interview process.",
    date: "February 18, 2026",
    author: "Dau Dau HR",
  },
] as const;
