'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Settings, 
  ShoppingCart, 
  Map, 
  Zap, 
  Layout
} from 'lucide-react';

const services = [
  {
    title: 'Recruiting Services',
    description: 'Connect with top-tier talent that aligns with your organization\'s long-term vision and culture.',
    icon: <Users className="w-8 h-8 text-primary" />,
    color: 'border-primary/20 bg-primary/5'
  },
  {
    title: 'Digital HRMS Solutions',
    description: 'Streamline workforce management with automated attendance, data management, and analytics.',
    icon: <Settings className="w-8 h-8 text-secondary" />,
    color: 'border-secondary/20 bg-secondary/5'
  },
  {
    title: 'Modern POS Systems',
    description: 'Tech-heavy point-of-sale solutions designed for seamless transactions and inventory control.',
    icon: <ShoppingCart className="w-8 h-8 text-accent" />,
    color: 'border-accent/20 bg-accent/5'
  },
  {
    title: 'Itinerary Planning Studio',
    description: 'Revolutionizing travel planning with custom product builders and dynamic itinerary logic.',
    icon: <Map className="w-8 h-8 text-primary" />,
    color: 'border-primary/20 bg-primary/5'
  },
  {
    title: 'Agentic Workflows',
    description: 'Custom AI-driven automation for products, enhancing efficiency through smart digital tools.',
    icon: <Zap className="w-8 h-8 text-secondary" />,
    color: 'border-secondary/20 bg-secondary/5'
  },
  {
    title: 'Workplace Support',
    description: 'Equipping offices with high-quality supplies and essential support for smooth operations.',
    icon: <Layout className="w-8 h-8 text-accent" />,
    color: 'border-accent/20 bg-accent/5'
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
              className={`p-8 rounded-2xl border ${service.color} glass transition-all group`}
            >
              <div className="mb-6 p-3 rounded-lg bg-black/20 w-fit group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
