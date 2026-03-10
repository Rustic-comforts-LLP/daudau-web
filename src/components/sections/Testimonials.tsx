'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Dau Dau's Agentic Workflows completely transformed how our team manages resources. What used to take days now takes minutes.",
    author: "Sarah Jenkins",
    role: "CEO, TechFlow",
  },
  {
    quote: "Their modern POS system integrated seamlessly with our existing HRMS. It's truly a tech-heavy solution that runs lightweight.",
    author: "David Chen",
    role: "Operations Director, Global POS Solutions",
  },
  {
    quote: "The Travel Itinerary Studio is beautifully designed. The interactive pointer effects alone show they understand premium UI.",
    author: "Elena Rodriguez",
    role: "Founder, Horizon Travel",
  }
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 relative overflow-hidden bg-white/5 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight inline-block"
          >
            What Our <span className="text-secondary">Partners</span> Say
          </motion.h2>
        </div>

        <div className="relative glass p-10 md:p-16 rounded-3xl min-h-[350px] flex items-center justify-center">
          <Quote className="absolute top-8 left-8 w-16 h-16 text-white/5" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-xl md:text-3xl font-medium text-white/90 mb-8 leading-relaxed">
                "{testimonials[index].quote}"
              </p>
              <div>
                <p className="text-primary font-bold text-lg">{testimonials[index].author}</p>
                <p className="text-muted-foreground">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute bottom-6 right-8 flex space-x-2">
            <button 
              onClick={prevTestimonial}
              className="p-3 glass rounded-full hover:bg-white/10 transition-colors text-white"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-3 glass rounded-full hover:bg-white/10 transition-colors text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/10 rounded-full blur-[150px] z-0 pointer-events-none" />
    </section>
  );
};

export default Testimonials;
