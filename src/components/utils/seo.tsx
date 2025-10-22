import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article';
  twitterCard?: 'summary' | 'summary_large_image';
  children?: React.ReactNode;
}

export function SEO({
  title = 'ProcureTriangle',
  description = 'ProcureTriangle - Your trusted partner for innovative solutions',
  keywords = 'procuretriangle, services, solutions',
  ogImage = '/og-image.jpg',
  ogUrl = 'https://procuretriangle.com',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  children,
}: SEOProps) {
  const siteTitle = title ? `${title} | ProcureTriangle` : 'ProcureTriangle';

  return (
    <Helmet prioritizeSeoTags defer={false}>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Canonical Link */}
      <link rel="canonical" href={ogUrl} />
      
      {/* Additional children elements if provided */}
      {children}
    </Helmet>
  );
} 