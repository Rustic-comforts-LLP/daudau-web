import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Dau Dau Success Stories',
  description: 'Discover how organizations are leveraging Dau Dau infrastructure to scale faster and operate smarter.',
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      client: "Global Retail Corp",
      title: "Scaling POS Infrastructure Across 500+ Stores",
      description: "How Dau Dau's offline-first POS architecture reduced checkout latency by 40% and synced millions of transactions.",
      metric: "+40%",
      metricLabel: "Speed Output",
      color: "border-primary/20 bg-primary/5 hover:border-primary/50"
    },
    {
      client: "Tech Startups Inc.",
      title: "End-to-End Agentic Recruitment Automation",
      description: "Implemented a fully autonomous pipeline that sourced, vetted, and onboarded 50 engineers in 3 months.",
      metric: "50+",
      metricLabel: "Engineers Hired",
      color: "border-secondary/20 bg-secondary/5 hover:border-secondary/50"
    },
    {
      client: "Wanderlust Travel Group",
      title: "Building the Next-Gen Itinerary Studio",
      description: "Developed a dynamic itinerary builder that allowed travel agents to compile complex multi-continent trips in minutes instead of hours.",
      metric: "10x",
      metricLabel: "Faster Creation",
      color: "border-accent/20 bg-accent/5 hover:border-accent/50"
    }
  ];

  return (
    <main className="min-h-screen py-32 relative flex justify-center">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Client <span className="text-primary">Success Stories</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
          Discover how organizations across the globe are leveraging Dau Dau infrastructure to scale faster and operate smarter.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, i) => (
            <article key={i} className={`p-8 rounded-2xl border glass transition-all group ${study.color} flex flex-col h-full`}>
               <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
                 {study.client}
               </div>
               <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                 {study.title}
               </h3>
               <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                 {study.description}
               </p>
               <div className="mt-auto border-t border-white/10 pt-6">
                 <div className="text-4xl font-bold text-white mb-1">{study.metric}</div>
                 <div className="text-xs uppercase tracking-widest text-muted-foreground">{study.metricLabel}</div>
               </div>
            </article>
          ))}
        </div>
      </div>
      {/* Background Glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-[-1]" />
    </main>
  );
}
