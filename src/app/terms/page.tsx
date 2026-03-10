import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Dau Dau',
  description: 'The legal terms governing the use of Dau Dau software and services.',
};

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Effective Date: March 15, 2026
          </p>
        </header>

        <div className="prose prose-invert prose-emerald max-w-none prose-lg">
          <p>
            By accessing or using Dau Dau ("we", "us", or "our") services, including our Point of Sale (POS) software, HRMS tools, recruiting pipelines, and agentic workflows, you agree to be bound by these Terms.
          </p>
          <br />

          <h3>1. License to Use</h3>
          <p>
            Unless otherwise stated, Dau Dau and/or its licensors own the intellectual property rights for all material on Dau Dau websites and services. You may access this from Dau Dau for your own personal and business use within the scope of our Master Service Agreements (MSAs), subjected to restrictions set in these terms and conditions.
          </p>
          <ul>
            <li>You must not republish material from Dau Dau</li>
            <li>You must not sell, rent or sub-license material from Dau Dau</li>
            <li>You must not reverse engineer our Agentic AI or POS architecture</li>
          </ul>

          <br />
          <h3>2. SaaS Subscriptions & Payments</h3>
          <p>
            Certain components of the Dau Dau suite are offered on a subscription basis. By selecting a subscription plan, you agree to pay Dau Dau the monthly or annual subscription fees indicated for that service.
          </p>

          <br />
          <h3>3. Limitation of Liability</h3>
          <p>
            In no event shall Dau Dau, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Dau Dau, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
          </p>

          <br />
          <h3>4. Contact</h3>
          <p>
            If you have any queries regarding any of our terms, please consult our experts or contact us at <a href="mailto:legal@daudau.in" className="text-primary hover:underline">legal@daudau.in</a>.
          </p>
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none z-[-1] opacity-20" />
    </main>
  );
}
