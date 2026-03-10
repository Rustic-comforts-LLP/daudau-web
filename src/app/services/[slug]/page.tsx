import React from 'react';
import { redirect } from 'next/navigation';
import { InteractiveIcon3D } from '@/components/effects/InteractiveIcon3D';

const serviceData = {
  'agentic-workflows': {
    title: 'Agentic Workflows',
    description: 'Custom AI-driven automation systems that autonomously execute complex organizational processes.',
    iconType: 'torus' as const,
    color: '#06b6d4',
    features: [
      'Autonomous Task Execution',
      'Dynamic Resource Allocation',
      'Seamless API Integrations',
      'Self-Learning AI Models'
    ]
  },
  'pos-systems': {
    title: 'Modern POS Systems',
    description: 'High-performance point-of-sale infrastructure with robust hardware support and cloud sync.',
    iconType: 'box' as const,
    color: '#8b5cf6',
    features: [
      'Offline-First Mode',
      'Real-Time Cloud Synchronization',
      'Advanced Inventory Analytics',
      'Multi-Location Management'
    ]
  },
  'travel-studio': {
    title: 'Travel Itinerary Studio',
    description: 'A dedicated platform for building, customizing, and sharing complex travel itineraries in real-time.',
    iconType: 'icosahedron' as const,
    color: '#10b981',
    features: [
      'Drag-and-Drop Builder',
      'Live Collaboration',
      'Dynamic Pricing Engines',
      'Integrated Booking Systems'
    ]
  },
  'recruiting': {
    title: 'Global Recruiting',
    description: 'End-to-end talent acquisition and pipeline management to build your dream technical team.',
    iconType: 'dodecahedron' as const,
    color: '#10b981',
    features: [
      'Technical Skill Vetting',
      'Culture Fit Analysis',
      'Global Talent Pools',
      'Streamlined Onboarding'
    ]
  },
  'hrms': {
    title: 'Digital HRMS Solutions',
    description: 'Streamline workforce management with automated attendance, data management, and analytics.',
    iconType: 'sphere' as const,
    color: '#06b6d4',
    features: [
      'Automated Payroll',
      'Performance Tracking',
      'Employee Self-Service',
      'Compliance Automation'
    ]
  },
  'workplace-support': {
    title: 'Workplace Support',
    description: 'Equipping offices with high-quality supplies and essential support for smooth operations.',
    iconType: 'octahedron' as const,
    color: '#8b5cf6',
    features: [
      'Inventory Management',
      'Vendor Coordination',
      'Hardware Procurement',
      'Office Facility Support'
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    redirect('/404');
  }

  return (
    <main className="min-h-screen py-32 relative flex items-center justify-center">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="glass p-12 md:p-24 rounded-3xl relative overflow-hidden flex flex-col items-center text-center">
          <div className="mb-12">
            <div className="w-32 h-32 ml-4 mt-4">
              <InteractiveIcon3D type={service.iconType} color={service.color} />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            {service.title}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-16 max-w-2xl">
            {service.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl text-left">
            {service.features.map((feature, i) => (
              <div key={i} className="bg-black/40 p-6 rounded-2xl border border-white/5 flex items-center space-x-4">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: service.color }} />
                <span className="text-white font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-white/10 w-full flex justify-center">
             <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-transform text-lg">
               Consult Our Experts
             </button>
          </div>

          {/* Background Glow specific to service color */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] pointer-events-none z-[-1] opacity-20"
            style={{ backgroundColor: service.color }}
          />
        </div>
      </div>
    </main>
  );
}
