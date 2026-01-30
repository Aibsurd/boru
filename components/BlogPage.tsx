import { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ChevronRight } from './Icons';
import { INSIGHTS_DATA } from '../constants';
import { Helmet } from 'react-helmet-async';

const BlogPage = memo(() => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(INSIGHTS_DATA.map(a => a.category)))];
  
  // Filter articles by category
  const filteredArticles = selectedCategory === 'All' 
    ? INSIGHTS_DATA 
    : INSIGHTS_DATA.filter(a => a.category === selectedCategory);
  
  // Featured article (first one)
  const featuredArticle = INSIGHTS_DATA[0];
  const remainingArticles = filteredArticles.slice(selectedCategory === 'All' ? 1 : 0);

  return (
    <>
      <Helmet>
        <title>Market Intelligence Hub | Boru Consulting</title>
        <meta name="description" content="Strategic insights on global tax, corporate structuring, regulatory compliance, and cross-border operations from Boru Consulting Group." />
        <meta name="keywords" content="market intelligence, tax strategy, corporate governance, UAE tax, UK holding company, risk management, compliance" />
        <link rel="canonical" href="https://www.boruconsulting.com/blog" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Market Intelligence Hub | Boru Consulting" />
        <meta property="og:description" content="Strategic insights on global tax, corporate structuring, and regulatory compliance." />
        <meta property="og:url" content="https://www.boruconsulting.com/blog" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Market Intelligence Hub | Boru Consulting" />
        <meta name="twitter:description" content="Strategic insights on global tax and corporate structuring." />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-zinc-950 pt-24 pb-24 transition-colors duration-500">
        
        {/* Breadcrumbs */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-xs text-zinc-500">
              <Link to="/" className="hover:text-gold-600 dark:hover:text-gold-500 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-zinc-900 dark:text-white">Market Intelligence</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Page Header */}
          <div className="py-16 border-b border-zinc-200 dark:border-zinc-800 mb-12">
            <span className="text-gold-600 dark:text-gold-500 text-[9px] font-semibold tracking-[0.3em] uppercase mb-6 block">
              Intelligence Hub
            </span>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-zinc-900 dark:text-white leading-[1.05] font-medium tracking-tight mb-6">
              Market Intelligence
            </h1>
            
            <p className="text-xl text-zinc-600 dark:text-zinc-400 font-light leading-relaxed max-w-3xl">
              Strategic analysis on global tax architecture, corporate structuring, regulatory frameworks, and cross-border operations.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mb-12 overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 pb-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.15em] whitespace-nowrap transition-all duration-300 border ${
                    selectedCategory === category
                      ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 border-zinc-900 dark:border-white'
                      : 'bg-transparent text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Article Hero (only show when "All" is selected) */}
          {selectedCategory === 'All' && (
            <Link to={`/blog/${featuredArticle.slug}`} className="block mb-20 group">
              <article className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-16 border-b-2 border-zinc-900 dark:border-white">
                
                {/* Left: Content (2/3) */}
                <div className="lg:col-span-2 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-zinc-500 mb-6">
                    <span className="text-gold-600 dark:text-gold-500 font-semibold">Featured Analysis</span>
                    <span className="w-px h-3 bg-zinc-300 dark:bg-zinc-700"></span>
                    <span>{featuredArticle.category}</span>
                  </div>
                  
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-white leading-[1.05] font-medium tracking-tight mb-6 group-hover:text-gold-600 dark:group-hover:text-gold-500 transition-colors duration-300">
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-8">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-zinc-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredArticle.readTime}</span>
                    </div>
                    <span className="w-px h-4 bg-zinc-300 dark:bg-zinc-700"></span>
                    <span>{featuredArticle.date}</span>
                  </div>
                </div>

                {/* Right: Visual Element (1/3) */}
                <div className="lg:col-span-1 flex items-center justify-center">
                  <div className="w-full aspect-square bg-gradient-to-br from-gold-600/10 to-zinc-900/5 dark:from-gold-500/10 dark:to-white/5 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-gold-600 dark:group-hover:border-gold-500 transition-colors duration-300">
                    <span className="font-serif text-6xl text-zinc-300 dark:text-zinc-700 group-hover:text-gold-600 dark:group-hover:text-gold-500 transition-colors duration-300">
                      {featuredArticle.category.charAt(0)}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          )}

          {/* Articles Grid - Asymmetric Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {remainingArticles.map((article, index) => {
              // Create asymmetric layout: first article spans 2 columns on desktop
              const isLarge = index === 0 && remainingArticles.length > 1;
              
              return (
                <article 
                  key={article.id}
                  className={`group flex flex-col border-b border-zinc-200 dark:border-zinc-800 pb-8 ${
                    isLarge ? 'md:col-span-2' : ''
                  }`}
                >
                  {/* Meta Data */}
                  <div className="flex items-center gap-4 text-[9px] uppercase tracking-[0.2em] text-zinc-500 mb-4">
                    <span className="text-gold-600 dark:text-gold-500 font-semibold">{article.category}</span>
                    <span className="w-px h-3 bg-zinc-300 dark:bg-zinc-700"></span>
                    <span>{article.date}</span>
                    <span className="w-px h-3 bg-zinc-300 dark:bg-zinc-700"></span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <Link to={`/blog/${article.slug}`}>
                    <h3 className={`font-serif text-zinc-900 dark:text-white leading-[1.15] font-medium tracking-tight mb-4 group-hover:text-gold-600 dark:group-hover:text-gold-500 transition-colors duration-300 ${
                      isLarge ? 'text-3xl md:text-4xl' : 'text-2xl'
                    }`}>
                      {article.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className={`text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-6 flex-grow ${
                    isLarge ? 'text-base' : 'text-sm'
                  }`}>
                    {article.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link 
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-zinc-900 dark:text-white font-semibold group-hover:text-gold-600 dark:group-hover:text-gold-500 transition-colors"
                  >
                    Read Full Analysis
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
});

export default BlogPage;
