import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from './Icons';
import { INSIGHTS_DATA } from '../constants';

const Insights = memo(() => {
  // Show only the 3 most recent articles on homepage
  const recentArticles = INSIGHTS_DATA.slice(0, 3);

  return (
    <section className="py-32 md:py-48 bg-warm-50 dark:bg-zinc-975 relative border-t border-zinc-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div className="max-w-xl">
            <span className="text-gold-600 dark:text-gold-500 text-[10px] font-semibold tracking-[0.3em] uppercase mb-6 block">Intelligence Hub</span>
            <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 dark:text-white leading-tight font-medium tracking-tight transition-colors duration-500">
              Market intelligence
            </h2>
          </div>
          <div className="hidden md:block pb-2">
            <Link 
              to="/blog"
              className="text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 hover:text-gold-600 dark:hover:text-gold-500 transition-colors flex items-center gap-2"
            >
              View Intelligence Hub <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {recentArticles.map((article) => (
            <article 
              key={article.id} 
              className="group flex flex-col h-full"
            >
              {/* Thumbnail Placeholder */}
              <Link to={`/blog/${article.slug}`} className="block mb-6">
                <div className="w-full aspect-[4/3] bg-gradient-to-br from-gold-600/10 to-zinc-900/5 dark:from-gold-500/10 dark:to-white/5 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-gold-600 dark:group-hover:border-gold-500 transition-colors duration-300">
                  <span className="font-serif text-6xl text-zinc-300 dark:text-zinc-700 group-hover:text-gold-600 dark:group-hover:text-gold-500 transition-colors duration-300">
                    {article.category.charAt(0)}
                  </span>
                </div>
              </Link>

              {/* Meta Data */}
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.15em] text-zinc-500 mb-6 border-b border-zinc-200 dark:border-zinc-800 pb-4 group-hover:border-gold-500/50 transition-colors duration-500">
                <span className="text-gold-600 dark:text-gold-500 font-medium">{article.category}</span>
                <span className="w-px h-3 bg-zinc-300 dark:bg-zinc-700"></span>
                <span>{article.date}</span>
              </div>

              {/* Title */}
              <Link to={`/blog/${article.slug}`}>
                <h3 className="font-serif text-2xl text-zinc-900 dark:text-white mb-4 leading-[1.2] font-medium tracking-tight group-hover:underline decoration-gold-500/50 underline-offset-4 transition-all duration-300">
                  {article.title}
                </h3>
              </Link>

              {/* Excerpt */}
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-[180%] font-light line-clamp-3 mb-6 flex-grow">
                {article.excerpt}
              </p>

              {/* Read More Link */}
              <Link 
                to={`/blog/${article.slug}`}
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-zinc-900 dark:text-white font-medium group-hover:text-gold-600 dark:group-hover:text-gold-500 transition-colors"
              >
                Read Analysis <ArrowUpRight className="w-3 h-3" />
              </Link>
            </article>
          ))}
        </div>

        {/* Mobile "View All" Link */}
        <div className="mt-16 text-center md:hidden">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-900 dark:text-white hover:text-gold-600 dark:hover:text-gold-500 transition-colors border-b border-zinc-300 dark:border-zinc-700 pb-1"
          >
            View Intelligence Hub <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
});

export default Insights;