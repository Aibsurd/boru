<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Boru Consulting Group - Corporate Website

Professional consulting website for global entity setup, tax compliance, and corporate governance services across UK, UAE, and Ireland.

## Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with dark mode support
- **Blog System**: Full-featured blog with individual article pages
- **SEO Optimized**: Comprehensive SEO implementation for search engines and AI agents
- **Performance**: Code splitting, lazy loading, and optimized bundle size
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support

### SEO & AI Agent Optimization
- **Structured Data**: JSON-LD schema markup for all pages and articles
- **Sitemap**: Dynamic XML sitemap with all pages and blog posts
- **RSS Feed**: Full-content RSS feed for blog subscribers
- **AI Discovery**: OpenAI plugin manifest and OpenAPI specification
- **Meta Tags**: Comprehensive Open Graph and Twitter Card metadata
- **Robots.txt**: Optimized for search engines and AI crawlers (GPTBot, Claude, Perplexity, etc.)

### Blog System
- **Homepage**: Shows 3 most recent articles
- **Blog Page** (`/blog`): Full archive of all articles
- **Article Pages** (`/blog/:slug`): Individual article pages with SEO metadata
- **Categories**: Taxation Strategy, Corporate Structuring, Risk Governance
- **Keywords**: Each article tagged with relevant keywords for discoverability

## Tech Stack

- **React 19** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS 3** for styling
- **React Router** for client-side routing
- **React Helmet Async** for dynamic meta tags
- **Lucide React** for icons

## Run Locally

**Prerequisites:** Node.js 18+

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set environment variables in `.env.local`:
   ```bash
   VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. Preview production build:
   ```bash
   npm run preview
   ```

## SEO Files

- `/public/sitemap.xml` - XML sitemap for search engines
- `/public/rss.xml` - RSS feed for blog content
- `/public/robots.txt` - Crawler directives
- `/public/ai-metadata.json` - Structured metadata for AI agents
- `/public/.well-known/ai-plugin.json` - OpenAI plugin manifest
- `/public/openapi.json` - OpenAPI specification

## Deployment

The app is configured for deployment on Vercel or Netlify with proper SPA routing support.

### Vercel
```bash
vercel deploy
```

### Netlify
The `_redirects` file is included for proper SPA routing.

## Project Structure

```
├── components/          # React components
│   ├── BlogPage.tsx    # Blog archive page
│   ├── BlogArticle.tsx # Individual article page
│   ├── Insights.tsx    # Homepage insights section
│   └── ...
├── public/             # Static assets
│   ├── sitemap.xml
│   ├── rss.xml
│   ├── robots.txt
│   └── .well-known/
├── constants.tsx       # Blog content and data
├── types.ts           # TypeScript types
└── App.tsx            # Main app with routing

```

## License

Copyright © 2024 Boru Consulting Group. All rights reserved.
