import { useLocation } from 'react-router-dom';
import { getCanonicalUrl } from '../lib/meta-utils';

/**
 * Custom hook to handle dynamic page titles and meta information
 * Can be used for more complex scenarios like blog posts or dynamic content pages
 */
export function usePageMeta(
  title: string,
  options: {
    description?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
    route?: string;
  } = {}
) {
  const location = useLocation();
  
  // Get the current route or use the provided route override
  const route = options.route || location.pathname.replace(/^\//, '');
  
  // Create the canonical URL
  const canonicalUrl = getCanonicalUrl(route);
  
  return {
    title,
    description: options.description,
    ogUrl: canonicalUrl,
    ogImage: options.ogImage,
    ogType: options.ogType || 'website',
  };
} 