'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate an API call to a mail service like Resend or EmailJS
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-black/20 border-y border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 tracking-tight">Ready to <span className="text-primary">Evolve?</span></h2>
              <p className="text-muted-foreground text-lg mb-12">
                Whether you need a custom POS, an agentic workflow, or a world-class travel studio, 
                we're here to build it. Reach out and let's discuss your next project.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="p-3 glass rounded-full text-primary group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email Us</p>
                    <p className="font-medium text-white">hello@daudau.in</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="p-3 glass rounded-full text-secondary group-hover:scale-110 transition-transform">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Call Us</p>
                    <p className="font-medium text-white">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 group cursor-pointer">
                  <div className="p-3 glass rounded-full text-accent group-hover:scale-110 transition-transform">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Location</p>
                    <p className="font-medium text-white">IT Park, Bangalore, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden"
            >
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center py-12"
                >
                  <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Request Sent!</h3>
                  <p className="text-muted-foreground">
                    Our team will analyze your requirements and reach out to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Name</label>
                      <input 
                        id="name"
                        type="text" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors focus:bg-white/10"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Email</label>
                      <input 
                        id="email"
                        type="email" 
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors focus:bg-white/10"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="project" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Project Type</label>
                    <select id="project" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none focus:bg-white/10">
                      <option className="bg-black text-white">Agentic Workflow</option>
                      <option className="bg-black text-white">Modern POS System</option>
                      <option className="bg-black text-white">Travel Planning Studio</option>
                      <option className="bg-black text-white">HRMS & Recruiting</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                    <textarea 
                      id="message"
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors min-h-[120px] focus:bg-white/10"
                      placeholder="Tell us about the scale and scope of your needs..."
                    />
                  </div>
                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className={`w-full py-4 rounded-xl font-bold transition-all flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'bg-primary/50 text-white/50 cursor-not-allowed' : 'bg-primary text-primary-foreground hover:scale-[1.02] active:scale-[0.98]'
                    }`}
                  >
                    <span>{isSubmitting ? 'Sending Transmission...' : 'Send Message'}</span>
                    {!isSubmitting && <Send size={18} />}
                  </button>
                </form>
              )}
              {/* Decorative background glow for form card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
