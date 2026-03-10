import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers | Join the Dau Dau Team',
  description: 'Shape the future of work with Dau Dau. We are looking for visionary engineers, architects, and operators.',
};

export default function CareersPage() {
  const openRoles = [
    {
      title: "Senior AI Agentic Engineer",
      department: "Engineering",
      location: "Bangalore, India / Remote",
      type: "Full-time",
    },
    {
      title: "POS Integration Architect",
      department: "Infrastructure",
      location: "Bangalore, India",
      type: "Full-time",
    },
    {
      title: "Global Supply Chain Lead",
      department: "Operations",
      location: "Remote",
      type: "Contract",
    },
    {
      title: "Technical Recruiter",
      department: "HRMS & Talent",
      location: "Mumbai, India",
      type: "Full-time",
    }
  ];

  return (
    <main className="min-h-screen py-32 relative flex justify-center">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            Shape the <span className="text-secondary">Future of Work</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-secondary pl-6 max-w-2xl">
            We are always looking for visionary engineers, architects, and operators to join Dau Dau in redefining organizational workflows and digital infrastructure.
          </p>
        </header>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold mb-8">Open Positions</h2>
          {openRoles.map((role, i) => (
            <div key={i} className="glass p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center group hover:border-secondary/50 transition-colors cursor-pointer">
              <div className="mb-4 md:mb-0">
                <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors mb-2">
                  {role.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="bg-white/5 px-3 py-1 rounded-full">{role.department}</span>
                  <span className="bg-white/5 px-3 py-1 rounded-full">{role.location}</span>
                  <span className="bg-white/5 px-3 py-1 rounded-full">{role.type}</span>
                </div>
              </div>
              <button className="bg-white/10 text-white px-6 py-2 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-secondary hover:text-secondary-foreground transition-all">
                Apply Now
              </button>
            </div>
          ))}
        </section>

        <section className="mt-24 text-center glass p-12 rounded-3xl border border-white/5">
          <h3 className="text-2xl font-bold mb-4">Don't see a fit?</h3>
          <p className="text-muted-foreground mb-8">
            Send us your resume anyway. We're always creating new roles for exceptional talent.
          </p>
          <a href="mailto:careers@daudau.in" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            careers@daudau.in
          </a>
        </section>

      </div>
      
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none z-[-1] opacity-40 translate-y-1/2 -translate-x-1/2" />
    </main>
  );
}
