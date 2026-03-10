'use client';

import React from 'react';
import Link from 'next/link';
import { Send, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5 bg-black/40 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-bold tracking-tighter text-white flex items-center gap-2">
                DAU <span className="text-primary">DAU</span>
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Empowering global organizations with next-gen HRMS, point-of-sale systems, and fully agentic workflows. Built for scale.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-primary hover:border-primary transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-secondary hover:border-secondary transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:text-accent hover:border-accent transition-all">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Solutions</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/services/agentic-workflows" className="hover:text-primary transition-colors">Agentic Workflows</Link></li>
              <li><Link href="/services/pos-systems" className="hover:text-primary transition-colors">POS Systems</Link></li>
              <li><Link href="/services/travel-studio" className="hover:text-primary transition-colors">Travel Studio</Link></li>
              <li><Link href="/services/recruiting" className="hover:text-primary transition-colors">Global Recruiting</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Company</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/blog" className="hover:text-primary transition-colors">Insights & Blog</Link></li>
              <li><Link href="/#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-widest uppercase text-sm">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">
              Get the latest insights on Agentic AI and business technology.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="hello@example.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors pr-12"
              />
              <button 
                type="button" 
                className="absolute right-2 top-2 p-1.5 bg-primary text-primary-foreground rounded-lg hover:bg-primary/80 transition-colors"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} DAU DAU. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
    </footer>
  );
};

export default Footer;
