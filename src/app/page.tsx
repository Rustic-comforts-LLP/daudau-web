import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import AboutUs from '@/components/sections/AboutUs';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <Services />
      <AboutUs />
      <Contact />
      
      <footer className="py-12 border-t border-white/5 relative bg-black/40">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} DAU DAU. All rights reserved. 
            <span className="mx-2 text-primary">|</span> 
            Modern Business Solutions & Agentic Workflows.
          </p>
        </div>
      </footer>
    </main>
  );
}
