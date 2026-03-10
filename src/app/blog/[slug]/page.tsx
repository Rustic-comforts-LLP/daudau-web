import React from 'react';
import { notFound } from 'next/navigation';
import { blogPosts } from '../page';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen py-32 relative flex justify-center">
      <article className="container mx-auto px-6 max-w-4xl relative z-10 glass p-12 md:p-24 rounded-3xl mt-12">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Blog
        </Link>
        <header className="mb-16">
          <div className="flex items-center space-x-4 mb-8 text-sm text-primary font-bold tracking-widest uppercase">
            <span>{post.author}</span>
            <span>•</span>
            <span className="text-muted-foreground">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6">
            {post.excerpt}
          </p>
        </header>
        
        <div className="prose prose-invert prose-emerald max-w-none prose-lg">
          <p>
            In today's rapidly evolving technological landscape, the intersection of autonomous systems and human capital is more prominent than ever. Our goal at Dau Dau is to demystify these complex architectures...
          </p>
          <br/>
          <h3>The Architecture of Tomorrow</h3>
          <p>
            To build scalable platforms, organizations must move beyond static if statements and embrace highly-adaptive workflows. This shift requires not just a technical upgrade, but a paradigm change in operations. 
          </p>
          <p className="mt-12 text-center text-muted-foreground italic">
            This is a placeholder long-form blog post. In a production environment, this would integrate with a headless CMS like Sanity, Contentful, or locally parsed .mdx files for rich formatting.
          </p>
        </div>

        {/* Decorative background glow for blog card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-[-1] opacity-30" />
      </article>
    </main>
  );
}
