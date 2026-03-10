'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Check } from 'lucide-react';

const PricingCalculator: React.FC = () => {
  const [projectType, setProjectType] = useState<'agentic' | 'pos' | 'travel'>('agentic');
  const [scale, setScale] = useState(1);
  const [timeline, setTimeline] = useState(3);

  const calculateEstimate = () => {
    let base = 0;
    if (projectType === 'agentic') base = 5000;
    if (projectType === 'pos') base = 3500;
    if (projectType === 'travel') base = 4000;

    // Scale multiplier
    let scaleMultiplier = 1;
    if (scale === 2) scaleMultiplier = 1.5;
    if (scale === 3) scaleMultiplier = 2.5;

    // Timeline multiplier (faster = more expensive)
    let timelineMultiplier = 1;
    if (timeline === 1) timelineMultiplier = 1.8;
    if (timeline === 2) timelineMultiplier = 1.3;

    const total = base * scaleMultiplier * timelineMultiplier;
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(total * 80); // Assuming ~80 INR per USD for Indian context
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Transparent <span className="text-primary">Estimates</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Use our interactive calculator to get an instant, no-obligation estimate for your next big project. 
            We believe in honest pricing for world-class solutions.
          </p>
        </div>

        <div className="glass p-8 md:p-12 rounded-3xl flex flex-col lg:flex-row gap-12">
          {/* Controls */}
          <div className="flex-1 space-y-8">
            <div>
              <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 block">1. Select Solution</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { id: 'agentic', label: 'Agentic Workflow' },
                  { id: 'pos', label: 'Modern POS' },
                  { id: 'travel', label: 'Travel Studio' }
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id as any)}
                    className={`p-4 rounded-xl border text-sm font-bold transition-all ${
                      projectType === type.id 
                        ? 'bg-primary/20 border-primary text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]' 
                        : 'bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 flex justify-between">
                <span>2. Organization Scale</span>
                <span className="text-white">
                  {scale === 1 ? 'Startup / SME' : scale === 2 ? 'Mid-Market' : 'Enterprise'}
                </span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="3" 
                step="1" 
                value={scale} 
                onChange={(e) => setScale(parseInt(e.target.value))}
                className="w-full accent-primary bg-white/10 rounded-lg appearance-none h-2 cursor-pointer"
              />
            </div>

            <div>
              <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4 flex justify-between">
                <span>3. Desired Timeline</span>
                <span className="text-white">
                  {timeline === 1 ? '< 1 Month (Rush)' : timeline === 2 ? '1-3 Months' : '3+ Months (Standard)'}
                </span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="3" 
                step="1" 
                value={timeline} 
                onChange={(e) => setTimeline(parseInt(e.target.value))}
                className="w-full accent-primary bg-white/10 rounded-lg appearance-none h-2 cursor-pointer rotate-180" 
                // Rotate 180 to make right-side the standard/slower timeline
              />
            </div>
          </div>

          {/* Result */}
          <div className="lg:w-1/3 bg-[#030712] rounded-2xl p-8 border border-white/10 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <Calculator className="w-12 h-12 text-primary/30 mb-6" />
            <h3 className="text-muted-foreground font-bold tracking-widest uppercase text-xs mb-4">Estimated Range</h3>
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
              <motion.span 
                key={calculateEstimate()}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {calculateEstimate()}
              </motion.span>
            </div>
            <p className="text-xs text-muted-foreground mt-4 mb-8">* This is a rough estimation. Exact costs depend on scope and API integrations.</p>
            
            <button className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:scale-[1.02] transition-transform">
              Get Formal Quote
            </button>

            {/* Glowing orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingCalculator;
