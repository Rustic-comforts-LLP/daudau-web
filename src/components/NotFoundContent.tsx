'use client';

import Link from 'next/link';
import { Home } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * Shared 404 message and actions. Used by the root not-found UI
 * and the /404 route (workaround for Next 16 notFound() handling on Vercel).
 */
export function NotFoundContent() {
  return (
    <main className="min-h-screen py-32 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass p-12 md:p-24 rounded-3xl max-w-lg text-center relative z-10"
      >
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 text-primary">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-12">
          The coordinates you entered don&apos;t match any known destinations in our system.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(16,185,129,0.3)]"
        >
          <Home size={20} /> Back to Base
        </Link>
      </motion.div>

      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
    </main>
  );
}
