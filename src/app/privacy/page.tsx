import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dau Dau',
  description: 'Learn about how we protect and manage your data at Dau Dau.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-32 relative flex justify-center">
      <div className="container mx-auto px-6 max-w-4xl relative z-10 glass p-12 md:p-24 rounded-3xl mt-12 bg-black/40">
        <Link 
          href="/" 
          className="inline-flex items-center text-sm font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors mb-12"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Home
        </Link>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Effective Date: March 15, 2026
          </p>
        </header>

        <div className="prose prose-invert prose-emerald max-w-none prose-lg">
          <p>
            At Dau Dau ("Company", "we", "us", or "our"), keeping your data secure and private is a core part of our mission as a technology and infrastructure provider.
          </p>
          <br />

          <h3>1. Information We Collect</h3>
          <p>
            We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, place an order, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features or resources we make available on our Site.
          </p>
          <ul>
            <li>Email addresses</li>
            <li>First and last names</li>
            <li>Company names and business information</li>
            <li>Phone numbers</li>
          </ul>

          <br />
          <h3>2. How We Protect Your Information</h3>
          <p>
            Our infrastructure, including POS data syncing and Agentic Workflows, is built on offline-first edge databases synced safely to the cloud using end-to-end encryption protocols. Access to this information is strictly limited to authorized personnel only.
          </p>

          <br />
          <h3>3. Sharing Your Personal Information</h3>
          <p>
            We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers.
          </p>

          <br />
          <h3>4. Contacting Us</h3>
          <p>
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <a href="mailto:privacy@daudau.in" className="text-primary hover:underline">privacy@daudau.in</a>
          </p>
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-[-1] opacity-20" />
    </main>
  );
}
