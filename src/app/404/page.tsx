import { NotFoundContent } from '@/components/NotFoundContent';

/**
 * Dedicated /404 route. Used as the target of redirects from dynamic routes
 * when content is missing, to avoid the Next 16 notFound() bug on Vercel
 * (client mishandles 404 and shows "Application Error").
 */
export default function NotFoundPage() {
  return <NotFoundContent />;
}
