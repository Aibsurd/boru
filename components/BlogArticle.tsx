import { memo } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, Linkedin } from './Icons';
import { INSIGHTS_DATA } from '../constants';
import { Helmet } from 'react-helmet-async';
import { formatSmartQuotes } from '../utils/typography';

const BlogArticle = memo(() => {
  const { slug } = useParams<{ slug: string }>();
  const article = INSIGHTS_DATA.find(a => a.slug === slug);

  if (!article) {
    return <Navigate to="/blog" replace />;
  }

  const articleUrl = `https://www.boruconsulting.com/blog/${article.slug}`;
  const publishedDate = new Date(article.date).toISOString();

  // Get related articles from same category (limit to 2 for cleaner layout)
  const relatedArticles = INSIGHTS_DATA
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 2);

  // Extract key takeaways from content (mock - in real scenario, add to article data)
  const keyTakeaways = [
    'Strategic implications require careful analysis of regulatory frameworks',
    'Cross-border compliance demands proactive management and documentation',
    'Substance requirements are increasingly critical for tax efficiency'
  ];

  // JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "author": {
      "@type": "Organization",
      "name": article.author,
      "url": "https://www.boruconsulting.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Boru Consulting Group",
      "url": "https://www.boruconsulting.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.boruconsulting.com/logo.png"
      }
    },
    "datePublished": publishedDate,
    "dateModified": publishedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "keywords": article.keywords.join(", "),
    "articleSection": article.category,
    "inLanguage": "en-GB"
  };

  return (
    <>
      <Helmet>
        <title>{article.title} | Boru Consulting</title>
        <meta name="description" content={article.excerpt} />
        <meta name="keywords" content={article.keywords.join(', ')} />
        <meta name="author" content={article.author} />
        <link rel="canonical" href={articleUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:url" content={articleUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={publishedDate} />
        <meta property="article:author" content={article.author} />
        <meta property="article:section" content={article.category} />
        {article.keywords.map(keyword => (
          <meta key={keyword} property="article:tag" content={keyword} />
        ))}
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
        
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <article className="min-h-screen bg-white dark:bg-zinc-950 pt-24 pb-24 transition-colors duration-500">
        
        {/* Breadcrumbs */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-500">
          <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
            <nav className="flex items-center gap-2 text-xs text-zinc-500">
              <Link to="/" className="hover:text-gold-600 dark:hover:text-gold-500 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/blog" className="hover:text-gold-600 dark:hover:text-gold-500 transition-colors">Market Intelligence</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-zinc-400">{article.category}</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-zinc-900 dark:text-white truncate max-w-xs">{article.title}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12">
          
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Main Content */}
            <div className="lg:col-span-8 order-1">
              
              {/* Article Header */}
              <header className="mb-12 pb-12 border-b border-zinc-200 dark:border-zinc-800">
                {/* Category Badge */}
                <div className="inline-block text-[9px] uppercase tracking-[0.3em] text-gold-600 dark:text-gold-500 mb-6 font-semibold">
                  {formatSmartQuotes(article.category)}
                </div>
                
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-white leading-[1.05] font-medium tracking-tight mb-6">
                  {formatSmartQuotes(article.title)}
                </h1>

                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-8">
                  {formatSmartQuotes(article.excerpt)}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={publishedDate}>{article.date}</time>
                  </div>
                  <span className="w-px h-4 bg-zinc-300 dark:bg-zinc-700"></span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <span className="w-px h-4 bg-zinc-300 dark:bg-zinc-700"></span>
                  <span>By {article.author}</span>
                </div>
              </header>

              {/* Key Takeaways Box */}
              <div className="bg-zinc-50 dark:bg-zinc-900 border-l-4 border-gold-600 dark:border-gold-500 p-8 mb-12">
                <h2 className="font-serif text-xl text-zinc-900 dark:text-white font-medium tracking-tight mb-4">
                  Key Takeaways
                </h2>
                <ul className="space-y-3">
                  {keyTakeaways.map((takeaway, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      <span className="text-gold-600 dark:text-gold-500 mt-1">•</span>
                      <span>{formatSmartQuotes(takeaway)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Content */}
              <div className="prose prose-zinc dark:prose-invert max-w-none 
                prose-p:font-sans prose-p:font-light prose-p:text-lg prose-p:leading-[180%] prose-p:text-zinc-700 dark:prose-p:text-zinc-300
                prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-zinc-900 dark:prose-headings:text-white
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
                prose-strong:font-semibold prose-strong:text-zinc-900 dark:prose-strong:text-white
                prose-em:italic prose-em:text-zinc-700 dark:prose-em:text-zinc-300
                prose-a:text-zinc-200 prose-a:underline prose-a:decoration-zinc-600 prose-a:underline-offset-4 prose-a:decoration-1 hover:prose-a:decoration-white hover:prose-a:text-white prose-a:transition-colors
                prose-ul:my-8 prose-li:my-3
                prose-blockquote:not-italic prose-blockquote:font-normal
              ">
                {article.content}
              </div>

              {/* Pull Quote - "The Loud Whisper" */}
              <blockquote className="my-16 py-12 border-l-4 border-gold-600 dark:border-gold-500 pl-8 bg-zinc-900 dark:bg-zinc-950 -mx-6 px-14">
                <p className="font-serif text-3xl md:text-4xl italic text-white leading-[1.4] tracking-tight">
                  {formatSmartQuotes('"Modern governance requires moving beyond financial auditing to operational resilience."')}
                </p>
              </blockquote>

              {/* Keywords Tags */}
              <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 font-semibold">Related Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map(keyword => (
                    <span 
                      key={keyword}
                      className="px-3 py-1.5 text-[10px] uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Sticky */}
            <aside className="lg:col-span-4 order-2">
              <div className="lg:sticky lg:top-24 self-start space-y-8">
                
                {/* Author Card */}
                <div className="border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-950 transition-colors duration-500">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src="/2.png" 
                      alt={article.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-serif text-lg text-zinc-900 dark:text-white font-medium tracking-tight">
                        {article.author}
                      </h3>
                      <p className="text-xs text-zinc-500 uppercase tracking-wider">Strategic Advisory</p>
                    </div>
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4 font-light">
                    Oxford Business School alumni supporting clients with UK and EU company structures and practical international business experience.
                  </p>
                  <div className="flex items-center gap-3">
                    <a 
                      href="https://www.linkedin.com/company/boru-consulting/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 hover:text-gold-600 dark:hover:text-gold-500 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>Connect</span>
                    </a>
                    <span className="w-px h-4 bg-zinc-300 dark:bg-zinc-700"></span>
                    <Link 
                      to="/#contact"
                      className="text-xs text-zinc-900 dark:text-white hover:text-gold-600 dark:hover:text-gold-500 transition-colors font-medium"
                    >
                      Consult
                    </Link>
                  </div>
                </div>

                {/* Share */}
                <div className="border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-950">
                  <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 mb-4 font-semibold">Share</h3>
                  <div className="grid grid-cols-3 gap-2">
                    <a 
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(articleUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-2 text-[10px] text-center border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white transition-colors"
                      title="Share on LinkedIn"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(articleUrl)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-2 text-[10px] text-center border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white transition-colors"
                      title="Share on Facebook"
                    >
                      Facebook
                    </a>
                    <a 
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(articleUrl)}&text=${encodeURIComponent(article.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2 py-2 text-[10px] text-center border border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white transition-colors"
                      title="Share on X (Twitter)"
                    >
                      X
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related Intelligence Section */}
          {relatedArticles.length > 0 && (
            <div className="mt-24 pt-16 border-t-2 border-zinc-900 dark:border-white">
              <h2 className="font-serif text-3xl md:text-4xl text-zinc-900 dark:text-white font-medium tracking-tight mb-12">
                Related Intelligence
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedArticles.map(related => (
                  <article key={related.id} className="group border-b border-zinc-200 dark:border-zinc-800 pb-8">
                    <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-zinc-500 mb-4">
                      <span className="text-gold-600 dark:text-gold-500 font-semibold">{related.category}</span>
                      <span className="w-px h-3 bg-zinc-300 dark:bg-zinc-700"></span>
                      <span>{related.date}</span>
                    </div>
                    
                    <Link to={`/blog/${related.slug}`}>
                      <h3 className="font-serif text-2xl text-zinc-900 dark:text-white font-medium tracking-tight mb-4 group-hover:text-gold-600 dark:group-hover:text-gold-500 transition-colors leading-tight">
                        {formatSmartQuotes(related.title)}
                      </h3>
                    </Link>
                    
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light mb-4">
                      {formatSmartQuotes(related.excerpt)}
                    </p>

                    <Link 
                      to={`/blog/${related.slug}`}
                      className="inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.2em] text-zinc-900 dark:text-white font-semibold group-hover:text-gold-600 dark:group-hover:text-gold-500 transition-colors"
                    >
                      Read Analysis
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
});

export default BlogArticle;
