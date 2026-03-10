'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { InteractiveIcon3D } from '@/components/effects/InteractiveIcon3D';
const services = [
  {
    title: 'Recruiting Services',
    description: 'Connect with top-tier talent that aligns with your organization\'s long-term vision and culture.',
    icon: <InteractiveIcon3D type="dodecahedron" color="#10b981" />,
    color: 'border-primary/20 bg-primary/5',
    link: '/services/recruiting'
  },
  {
    title: 'Digital HRMS Solutions',
    description: 'Streamline workforce management with automated attendance, data management, and analytics.',
    icon: <InteractiveIcon3D type="sphere" color="#06b6d4" />,
    color: 'border-secondary/20 bg-secondary/5',
    link: '/services/hrms'
  },
  {
    title: 'Modern POS Systems',
    description: 'Tech-heavy point-of-sale solutions designed for seamless transactions and inventory control.',
    icon: <InteractiveIcon3D type="box" color="#8b5cf6" />,
    color: 'border-accent/20 bg-accent/5',
    link: '/services/pos-systems'
  },
  {
    title: 'Itinerary Planning Studio',
    description: 'Revolutionizing travel planning with custom product builders and dynamic itinerary logic.',
    icon: <InteractiveIcon3D type="icosahedron" color="#10b981" />,
    color: 'border-primary/20 bg-primary/5',
    link: '/services/travel-studio'
  },
  {
    title: 'Agentic Workflows',
    description: 'Custom AI-driven automation for products, enhancing efficiency through smart digital tools.',
    icon: <InteractiveIcon3D type="torus" color="#06b6d4" />,
    color: 'border-secondary/20 bg-secondary/5',
    link: '/services/agentic-workflows'
  },
  {
    title: 'Workplace Support',
    description: 'Equipping offices with high-quality supplies and essential support for smooth operations.',
    icon: <InteractiveIcon3D type="octahedron" color="#8b5cf6" />,
    color: 'border-accent/20 bg-accent/5',
    link: '/services/workplace-support'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Powering the Modern <span className="text-primary">Workplace</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            We provide a comprehensive suite of digital and physical solutions 
            designed to help organizations grow, simplify management, and automate complex workflows.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`rounded-2xl border ${service.color} glass transition-all group overflow-hidden`}
            >
              <Link href={service.link} className="block w-full h-full p-8">
                <div className="mb-6 w-full h-24 flex items-center justify-start group-hover:scale-105 transition-transform pointer-events-none">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
