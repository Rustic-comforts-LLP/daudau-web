import React from 'react';
import Link from 'next/link';

export const blogPosts = [
  {
    slug: 'future-of-agentic-ai',
    title: 'The Future of Agentic AI in Enterprise',
    excerpt: 'How autonomous AI agents are replacing static workflows and reshaping human capital management.',
    date: 'March 15, 2026',
    author: 'Dau Dau Research'
  },
  {
    slug: 'modern-pos-architecture',
    title: 'Architecting Modern POS Systems for Scale',
    excerpt: 'Deep dive into offline-first capabilities, real-time cloud sync, and edge computing in retail.',
    date: 'March 02, 2026',
    author: 'Dau Dau Engineering'
  },
  {
    slug: 'global-tech-recruiting',
    title: 'Navigating Global Tech Recruiting in 2026',
    excerpt: 'Why culture fit and technical vetting must evolve beyond the traditional interview process.',
    date: 'February 18, 2026',
    author: 'Dau Dau HR'
  }
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen py-32 relative">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Insights & <span className="text-primary">Research</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
          Deep dives into Agentic AI, modern retail infrastructure, and the future of global work.
        </p>

        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/50 transition-colors">
                <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                  <span className="font-bold text-primary">{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center text-primary font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Read Article →
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-[-1]" />
    </main>
  );
}
