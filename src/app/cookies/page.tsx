import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookies Policy | Dau Dau',
  description: 'How we use cookies to improve your experience on Dau Dau.',
};

export default function CookiesPolicyPage() {
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
            Cookies Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Effective Date: March 15, 2026
          </p>
        </header>

        <div className="prose prose-invert prose-emerald max-w-none prose-lg">
          <p>
            Dau Dau uses cookies and similar tracking technologies on our website and within our applications to maintain preferences, understand traffic patterns, and provide better tools and services.
          </p>
          <br />

          <h3>1. What are Cookies?</h3>
          <p>
            Cookies are small pieces of data, stored in text files, that are stored on your computer or other device when websites are loaded in a browser. They are widely used to "remember" you and your preferences, either for a single visit or for multiple repeat visits.
          </p>

          <br />
          <h3>2. How We Use Cookies</h3>
          <p>
            We use cookies for the following purposes:
          </p>
          <ul>
            <li><strong>Authentication:</strong> To identify you when you visit our website and as you navigate it.</li>
            <li><strong>Status:</strong> To help determine if you are logged into our applications.</li>
            <li><strong>Personalization:</strong> To store information about your preferences, such as Dark Theme settings.</li>
            <li><strong>Security:</strong> To protect our user accounts and infrastructure.</li>
            <li><strong>Analysis:</strong> To help us analyze the use and performance of our website and services via aggregated, anonymized metrics to shape future product development.</li>
          </ul>

          <br />
          <h3>3. Managing Cookies</h3>
          <p>
            Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. You can however obtain up-to-date information about blocking and deleting cookies via your browser's documentation. Blocking all cookies will have a negative impact upon the usability of our Agentic AI portals and HRMS SaaS offerings.
          </p>

          <br />
          <h3>4. Contact</h3>
          <p>
            For any queries about our cookies policy, please reach us at <a href="mailto:privacy@daudau.in" className="text-primary hover:underline">privacy@daudau.in</a>.
          </p>
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] pointer-events-none z-[-1] opacity-20" />
    </main>
  );
}
