/*
  Sitemap generator for static sites
  PLACEHOLDERS at top: DOMAIN, SITE_NAME, CONTACT_EMAIL, YEAR

  Usage:
    node ./scripts/generate-sitemap.js

  (Hinglish: Ye script `pages` folder aur `data/content.ts` ke blogPosts ids ko padhega aur
  `/public/sitemap.xml` generate karega.)
*/

import fs from 'fs/promises';
import path from 'path';

// Edit these placeholders as needed
const DOMAIN = 'https://manage-money.online'; // TODO: replace with your domain
const SITE_NAME = 'Manage Money Online';
const CONTACT_EMAIL = 'hello@manage-money.online';
const YEAR = new Date().getFullYear();

async function listPages(dir) {
  const pagesDir = path.resolve(dir);
  let urls = [];
  try {
    const files = await fs.readdir(pagesDir);
    for (const f of files) {
      const full = path.join(pagesDir, f);
      const stat = await fs.stat(full);
      if (stat.isFile() && /\.tsx?$/.test(f)) {
        const name = path.basename(f, path.extname(f));
        let slug = '/' + name.toLowerCase();
        if (name.toLowerCase() === 'home' || name.toLowerCase() === 'index') slug = '/';
        // Normalize Guides and Blog file names that act as list pages
        if (slug === '/guides') slug = '/guides';
        if (slug === '/blog') slug = '/blog';
        urls.push({ loc: DOMAIN.replace(/\/$/, '') + slug, file: full });
      }
    }
  } catch (err) {
    console.log('No pages directory found at', pagesDir);
  }
  return urls;
}

async function listBlogPostsFromData(dataPath) {
  const resolved = path.resolve(dataPath);
  let urls = [];
  try {
    const content = await fs.readFile(resolved, 'utf8');
    // Try to find blogPosts ids via simple regex
    const blogSection = content.match(/export const blogPosts[\s\S]*?=\s*\[([\s\S]*?)\]\s*;/m);
    if (blogSection && blogSection[1]) {
      const ids = [...blogSection[1].matchAll(/id:\s*['\"]([^'\"]+)['\"]/g)].map(m => m[1]);
      for (const id of ids) {
        urls.push({ loc: DOMAIN.replace(/\/$/, '') + '/blog/' + id, file: resolved });
      }
    }
  } catch (err) {
    // no data file
  }
  return urls;
}

async function writeSitemap(urls) {
  const sitemapPath = path.resolve(process.cwd(), 'public', 'sitemap.xml');
  const now = new Date().toISOString().split('T')[0];
  const parts = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
  ];

  for (const u of urls) {
    parts.push('  <url>');
    parts.push(`    <loc>${u.loc}</loc>`);
    parts.push(`    <lastmod>${now}</lastmod>`);
    parts.push('  </url>');
  }

  parts.push('</urlset>');
  const xml = parts.join('\n');
  await fs.mkdir(path.dirname(sitemapPath), { recursive: true });
  await fs.writeFile(sitemapPath, xml, 'utf8');
  console.log('Wrote sitemap to', sitemapPath);
}

async function main() {
  console.log('Generating sitemap for', DOMAIN);
  const pages = await listPages(path.join(process.cwd(), 'pages'));
  const blogs = await listBlogPostsFromData(path.join(process.cwd(), 'data', 'content.ts'));
  const urls = [...pages, ...blogs];

  // Deduplicate by loc
  const seen = new Set();
  const uniq = [];
  for (const u of urls) {
    if (!seen.has(u.loc)) {
      seen.add(u.loc);
      uniq.push(u);
    }
  }

  if (uniq.length === 0) {
    // fallback: include root
    uniq.push({ loc: DOMAIN, file: null });
  }

  await writeSitemap(uniq);
}

// If run directly from Node, execute main()
if (process.argv[1] && process.argv[1].endsWith('generate-sitemap.js')) {
  main().catch(err => {
    console.error('Sitemap generation failed:', err);
    process.exit(1);
  });
}
