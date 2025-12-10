<!-- PLACEHOLDERS: DOMAIN, SITE_NAME, CONTACT_EMAIL, YEAR -->
# Deploy Guide (Vercel & Netlify)

This file describes quick deploy steps for Vercel and Netlify.

## Common setup

- Ensure `package.json` has `build` and `dev` scripts. Example:

```
npm install
npm run build
```

- Set environment variables in the provider dashboard as needed (e.g., `GITHUB_TOKEN`, `NEWSAPI_KEY`).

## Vercel

1. Sign in to vercel.com and connect your GitHub repository.
2. Set Project settings:
   - Framework Preset: `Other` or detect
   - Build Command: `npm run build` (replace if different)
   - Output Directory: `dist` or `build` (set correctly for your framework)
3. Add domain: `manage-money.online` in Vercel dashboard and follow DNS instructions.
4. Add environment variables in Vercel > Settings > Environment Variables.
5. Enable Automatic Deploys for main branch.

## Netlify

1. Sign in to netlify.com and link your GitHub repo.
2. Set build options:
   - Build command: `npm run build`
   - Publish directory: `dist` or `build` (depends on your setup)
3. Add domain in Domain settings and follow DNS configuration.
4. Add environment variables in Site settings > Build & deploy > Environment.

## DNS notes

- For apex domain (`manage-money.online`) add A/ALIAS records as instructed by provider.
- For `www.manage-money.online` add CNAME -> provided target.

## Preview Deploys

- Both Vercel and Netlify support preview deploys for PRs. Enable in project settings.

## Verification

- After deploy, visit the site, check `/robots.txt`, `/sitemap.xml`, and analytics firing.
