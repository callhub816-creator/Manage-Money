
import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

/**
 * SEO Component - Unified SEO management for all pages
 * Handles meta tags and structured data
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "credit cards, loans, insurance, CIBIL score, financial comparison, India",
  image = "https://managemoney.local/og-image.png",
  url = "https://managemoney.local"
}) => {
  const siteName = "ManageMoney";
  const fullTitle = `${title} | ${siteName}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Update Open Graph tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateMeta('og:title', fullTitle);
    updateOrCreateMeta('og:description', description);
    updateOrCreateMeta('og:image', image);
    updateOrCreateMeta('og:url', url);
    updateOrCreateMeta('og:type', 'website');

    // Update Twitter Card tags
    const updateOrCreateName = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    updateOrCreateName('twitter:title', fullTitle);
    updateOrCreateName('twitter:description', description);
    updateOrCreateName('twitter:image', image);
    updateOrCreateName('twitter:card', 'summary_large_image');

    // Canonical Tag
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Structured Data - WebPage
    const webpageSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: fullTitle,
      description: description,
      url: url,
      publisher: {
        '@type': 'Organization',
        name: siteName,
        url: 'https://managemoney.local'
      }
    };

    // Structured Data - Breadcrumbs
    const pathParts = new URL(url).pathname.split('/').filter(p => p);
    const breadcrumbList = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://managemoney.local'
        },
        ...pathParts.map((part, index) => ({
          '@type': 'ListItem',
          position: index + 2,
          name: part.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
          item: `https://managemoney.local/${pathParts.slice(0, index + 1).join('/')}`
        }))
      ]
    };

    let schemaScript = document.getElementById('schema-org') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'schema-org';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.innerHTML = JSON.stringify([webpageSchema, breadcrumbList]);
  }, [title, description, keywords, image, url, fullTitle]);

  return null;
};

export default SEO;
