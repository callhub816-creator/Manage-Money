---
description: Generate a high-quality SEO-optimized blog post
---

This workflow helps you generate a high-quality, human-like, SEO-optimized blog post for your website.

### Steps:

1. **Ask Antigravity**: Use the following prompt format to generate a blog:
   > "Generate a blog post about [TOPIC]. Make it SEO-optimized, human-written style, and target [KEYWORDS]. Save it to the blog system."

2. **Antigravity Action**: 
   - Antigravity will research the topic.
   - It will generate a title, description, and high-quality HTML content.
   - It will select a relevant professional image from Unsplash.
   - it will automatically update `src/data/blogs.json`.

3. **Verify**:
   - Check the new entry in `src/data/blogs.json`.
   - Run `npm run dev` to see the post live on `/blog`.

// turbo
4. Run the build to ensure everything is correct:
```powershell
npm run build
```
