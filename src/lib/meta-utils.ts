// Base URL for the website
const BASE_URL = 'https://rehobothglow.com';

/**
 * Generates a full canonical URL for a specific path
 * @param path The path segment (e.g., "/about", "/services")
 * @returns Full URL including the base domain
 */
export function getCanonicalUrl(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  
  // For homepage, just return the base URL
  if (cleanPath === '' || cleanPath === 'home') {
    return BASE_URL;
  }
  
  // Return full URL for other pages
  return `${BASE_URL}/${cleanPath}`;
} 