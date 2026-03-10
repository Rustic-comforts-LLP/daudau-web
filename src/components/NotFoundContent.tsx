import Link from 'next/link';
import { Home } from 'lucide-react';

/**
 * Shared 404 message and actions. Used by the root not-found UI
 * and the /404 route (workaround for Next 16 notFound() handling on Vercel).
 */
export function NotFoundContent() {
  return (
    <main className="min-h-screen py-32 flex flex-col items-center justify-center px-6">
      <div className="glass p-12 md:p-24 rounded-3xl max-w-lg text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          404
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-transform"
        >
          <Home size={20} /> Back to Home
        </Link>
      </div>
    </main>
  );
}
