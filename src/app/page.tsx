import Hero from '@/components/sections/Hero';
import TrustedBy from '@/components/sections/TrustedBy';
import Services from '@/components/sections/Services';
import AboutUs from '@/components/sections/AboutUs';
import Testimonials from '@/components/sections/Testimonials';
import PricingCalculator from '@/components/sections/PricingCalculator';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <TrustedBy />
      <Services />
      <AboutUs />
      <Testimonials />
      <PricingCalculator />
      <Contact />
    </main>
  );
}
