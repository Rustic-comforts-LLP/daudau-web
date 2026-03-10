'use client';

import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  { name: 'TechFlow', logo: 'TF' },
  { name: 'Nexus Corp', logo: 'NC' },
  { name: 'Global POS Solutions', logo: 'GP' },
  { name: 'Apex HR', logo: 'AH' },
  { name: 'Vanguard AI', logo: 'VA' },
  { name: 'Horizon Travel', logo: 'HT' },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-12 border-y border-white/5 bg-black/20 overflow-hidden">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm font-bold tracking-widest text-muted-foreground uppercase mb-8">
          Trusted by Innovative Teams Worldwide
        </p>
        
        {/* Infinite CSS Marquee Approach using Framer Motion */}
        <div className="relative w-full flex overflow-hidden mask-image-fade">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex items-center space-x-12 sm:space-x-24 w-max whitespace-nowrap"
          >
            {/* Double the list to create a seamless loop */}
            {[...clients, ...clients].map((client, i) => (
              <div 
                key={`${client.name}-${i}`} 
                className="flex items-center space-x-3 opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default"
              >
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-bold text-primary">
                  {client.logo}
                </div>
                <span className="text-xl font-semibold tracking-tight text-white/80">{client.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
