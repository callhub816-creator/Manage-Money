<!-- PLACEHOLDERS: DOMAIN, SITE_NAME, CONTACT_EMAIL, YEAR -->
# Pre-launch Checklist

Follow this checklist before going live.

- [ ] Meta tags present (`<title>`, `meta description`, `canonical`, `og:*`, `twitter:*`)
- [ ] `privacy-policy.md` and `contact.md` present and linked from footer
- [ ] `robots.txt` and `sitemap.xml` present and valid
- [ ] Favicon (`/favicon.svg`) and `manifest.json` present
- [ ] Mobile responsive tested across common devices
- [ ] Remove dev-only scripts and console.log statements
- [ ] Run `node ./scripts/generate-sitemap.js` and verify `/public/sitemap.xml`
- [ ] Add analytics snippet (`src/snippets/analytics-snippet.html`) and verify in GA4
- [ ] Add `static/ads.txt` and register ad network accounts
- [ ] Optimize and compress images (WebP/AVIF where possible)
- [ ] Run Lighthouse and address major accessibility/performance issues
- [ ] Set up hosting, add custom domain (manage-money.online), enable HTTPS
- [ ] Add canonical tags & Open Graph images for key pages
- [ ] Add redirects and custom 404 if needed
- [ ] Prepare example commit messages and PR flow for content changes

Example commit messages:

- `chore: update sitemap` 
- `feat: add new guide on budgeting`
- `fix: correct metadata for blog post`

(Hinglish: Ye checklist follow karne se Google/Ads approvals me help milegi.)
