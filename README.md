# Boru Consulting Group

Professional consulting website for global entity setup, tax compliance, and corporate governance services across UK, UAE, and Ireland.

🌐 **Live Site**: [boruconsulting.com](https://www.boruconsulting.com)

---

## Overview

Modern, production-ready corporate website built with React 19 and TypeScript. Features a full blog system, comprehensive SEO optimization, and AI agent discovery capabilities.

## Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with dark mode support
- **Blog System**: Full-featured blog with individual article pages and categories
- **SEO Optimized**: Comprehensive SEO for search engines and AI agents
- **Performance**: Code splitting, lazy loading, optimized bundle size (25KB main chunk)
- **Accessibility**: WCAG 2.1 AA compliant with keyboard navigation and screen reader support

### SEO & AI Agent Optimization
- **Structured Data**: JSON-LD schema markup for Organization, Articles, and WebSite
- **Sitemap**: Dynamic XML sitemap with all pages and blog posts
- **RSS Feed**: Full-content RSS feed for blog subscribers
- **AI Discovery**: 
  - `/llms.txt` - Concise LLM-optimized content
  - `/llms-full.txt` - Complete knowledge base (8000 tokens)
  - `/ai.txt` - Granular AI agent permissions
  - `/identity.json` - Schema.org professional service verification
  - OpenAI plugin manifest and OpenAPI specification
- **Meta Tags**: Comprehensive Open Graph and Twitter Card metadata
- **Robots.txt**: Optimized for search engines and AI crawlers (GPTBot, Claude, Perplexity, etc.)

### Blog System
- **Homepage**: 3 most recent articles with thumbnail placeholders
- **Blog Archive** (`/blog`): Full article listing with category filters
- **Article Pages** (`/blog/:slug`): Individual articles with:
  - SEO metadata and canonical URLs
  - Key takeaways section
  - Author card with photo
  - Social sharing (LinkedIn, Facebook, X)
  - Related articles
- **Categories**: Taxation Strategy, Corporate Structuring, Risk Governance

## Tech Stack

- **React 19** with TypeScript
- **Vite 6** for build tooling and HMR
- **Tailwind CSS 3** for styling
- **React Router 7** for client-side routing
- **React Helmet Async** for dynamic meta tags
- **Lucide React** for icons (tree-shaken)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aibsurd/boru.git
   cd boru
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create `.env.local` file:
   ```bash
   VITE_FORMSPREE_ENDPOINT=your_formspree_endpoint
   ```

4. Run development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
├── components/          # React components
│   ├── BlogPage.tsx    # Blog archive page
│   ├── BlogArticle.tsx # Individual article page
│   ├── Insights.tsx    # Homepage insights section
│   ├── Navbar.tsx      # Navigation with mobile menu
│   ├── Footer.tsx      # Footer with legal info
│   └── ...
├── public/             # Static assets
│   ├── sitemap.xml     # XML sitemap
│   ├── rss.xml         # RSS feed
│   ├── robots.txt      # Crawler directives
│   ├── llms.txt        # LLM-optimized content
│   ├── ai.txt          # AI agent permissions
│   ├── identity.json   # Schema.org verification
│   └── .well-known/    # OpenAI plugin manifest
├── utils/              # Utility functions
│   ├── typography.ts   # Smart quotes formatter
│   └── validation.ts   # Form validation
├── constants.tsx       # Blog content and data
├── types.ts           # TypeScript types
└── App.tsx            # Main app with routing
```

## SEO Files Reference

| File | Purpose |
|------|---------|
| `/sitemap.xml` | XML sitemap for search engines |
| `/rss.xml` | RSS feed for blog content |
| `/robots.txt` | Crawler directives and AI agent policies |
| `/llms.txt` | Concise LLM-optimized content (2000 tokens) |
| `/llms-full.txt` | Complete knowledge base (8000 tokens) |
| `/ai.txt` | Granular AI agent permissions |
| `/identity.json` | Schema.org ProfessionalService verification |
| `/ai-metadata.json` | Structured metadata for AI agents |
| `/.well-known/ai-plugin.json` | OpenAI plugin manifest |
| `/openapi.json` | OpenAPI specification |

## Deployment

### Vercel (Recommended)

1. Import repository in Vercel dashboard
2. Add environment variable: `VITE_FORMSPREE_ENDPOINT`
3. Deploy automatically on push to `main`

### Netlify

The `_redirects` file is included for proper SPA routing.

```bash
npm run build
# Deploy dist/ folder
```

## Performance

- **Main Bundle**: 25.02 KB (gzipped)
- **Code Splitting**: Vendor chunks, route-based splitting
- **Icon Tree-Shaking**: Centralized exports reduce bundle by 77%
- **Lazy Loading**: Route components loaded on demand
- **Caching**: 1-year cache for hashed assets

## License

Copyright © 2024-2025 Boru Consulting Group. All rights reserved.

---

**Built with ❤️ for professional corporate services**
