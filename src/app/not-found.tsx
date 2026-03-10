import { NotFoundContent } from '@/components/NotFoundContent';

/**
 * Root not-found UI. Rendered when the user hits a path with no matching segment.
 * For missing slugs in dynamic routes we redirect to /404 to avoid Next 16
 * notFound() client-handling bug on Vercel.
 */
export default function NotFound() {
  return <NotFoundContent />;
}
