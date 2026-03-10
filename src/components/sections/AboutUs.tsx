'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Globe, Rocket } from 'lucide-react';
import ParallaxElement from '@/components/effects/ParallaxElement';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 tracking-tight">
                Our Mission & <span className="text-secondary">Vision</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We are a modern business solutions company dedicated to helping organizations build 
                efficient workplaces and strong teams. Our mission is to simplify the way companies 
                manage people, workplaces, and resources by providing reliable services and 
                innovative digital solutions.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Brain className="text-primary" />, title: 'Smart Strategy', desc: 'Thinking ahead to solve tomorrow\'s workplace challenges today.' },
                  { icon: <Cpu className="text-secondary" />, title: 'Tech Innovation', desc: 'Leveraging cutting-edge digital tools to automate manual overhead.' },
                  { icon: <Globe className="text-accent" />, title: 'Global Standards', desc: 'Connecting businesses with top-tier talent and resources worldwide.' }
                ].map((item, i) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="mt-1 p-2 bg-white/5 rounded-lg border border-white/10">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 p-1 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 rounded-3xl"
            >
              <div className="bg-[#030712] rounded-[1.4rem] overflow-hidden p-12 relative flex flex-col items-center text-center">
                <Rocket className="w-16 h-16 text-primary mb-6 animate-pulse" />
                <h3 className="text-3xl font-bold mb-4">Agentic Workflow for Product</h3>
                <p className="text-muted-foreground mb-8">
                  Step into the future of productivity. We build agentic systems that don't just follow steps, 
                  but understand goals and execute complex workflows autonomously.
                </p>
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="p-4 glass rounded-xl text-xs font-mono text-primary">
                    {`>> INIT_AGENT`}
                  </div>
                  <div className="p-4 glass rounded-xl text-xs font-mono text-secondary">
                    {`GOAL: OPTIMIZE`}
                  </div>
                  <div className="p-4 glass rounded-xl text-xs font-mono text-accent">
                    {`SCANNING_RESOURCES...`}
                  </div>
                  <div className="p-4 glass rounded-xl text-xs font-mono text-white">
                    {`SUCCESS: SYNCED`}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Background Glow with Parallax */}
            <ParallaxElement offset={80} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-[100px]" />
            </ParallaxElement>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
