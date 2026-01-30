import { memo } from 'react';
import { Link } from 'react-router-dom';
import { STATS } from '../constants';

const About = memo(() => {
  return (
    <section className="py-24 md:py-32 bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-white relative overflow-hidden border-t border-zinc-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <span className="text-gold-600 dark:text-gold-500 text-[10px] font-semibold tracking-[0.3em] uppercase mb-8 block">The Firm</span>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-12 text-balance font-medium tracking-tight">
              Navigating international markets with <span className="text-zinc-500 dark:text-zinc-400 transition-colors duration-500">clarity</span>
            </h2>
            
            <div className="space-y-8 text-zinc-600 dark:text-zinc-400 font-light leading-[180%] text-lg border-l border-zinc-300 dark:border-white/10 pl-8 md:pl-12 transition-colors duration-500">
              <p>
                Boru Consulting supports global growth by managing the complexity that comes with cross-border business. We cover every part of business setup and expansion, from accounting and tax to entity management, governance, risk, and compliance.
              </p>
              <p>
                We also work with individuals and families to protect and grow their wealth through private wealth and trust services. Whether you want to preserve your legacy or strengthen your financial strategy, we provide clear, tailored solutions built around your goals.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-gold-600 dark:text-gold-500 hover:gap-3 transition-all duration-300 font-medium group"
              >
                Learn More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </div>

          {/* Stats & Presence Column */}
          <div className="lg:col-span-5 space-y-12">
             {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-8">
              {STATS.map((stat, index) => (
                <div key={index} className="pb-5 border-b border-zinc-200 dark:border-white/10 transition-colors duration-500">
                  <p className={`text-5xl md:text-6xl font-serif text-zinc-900 dark:text-white mb-2 tracking-tight transition-colors duration-500 ${index === 0 ? 'font-semibold' : 'font-medium'}`}>{stat.value}</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em]">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Global Presence typographic map */}
            <div className="bg-zinc-200/50 dark:bg-zinc-900/30 p-6 border border-zinc-200 dark:border-white/5 transition-colors duration-500">
               <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold-600 dark:text-gold-500 mb-5 font-semibold">Active Jurisdictions</h4>
               <ul className="space-y-4 text-sm font-sans text-zinc-600 dark:text-zinc-400 transition-colors duration-500">
                  <li className="flex flex-col">
                    <span className="flex items-center text-zinc-900 dark:text-white mb-1 tracking-wide font-medium">
                      <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full mr-3"></span>
                      United Kingdom
                    </span>
                    <span className="pl-5 text-[11px] text-zinc-500 dark:text-zinc-600 tracking-wider uppercase">Company No. 14435343</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="flex items-center text-zinc-900 dark:text-white mb-1 tracking-wide font-medium">
                      <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full mr-3"></span>
                      U.A.E.
                    </span>
                    <span className="pl-5 text-[11px] text-zinc-500 dark:text-zinc-600 tracking-wider uppercase">Company No. 2415755</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="flex items-center text-zinc-900 dark:text-white mb-1 tracking-wide font-medium">
                      <span className="w-1.5 h-1.5 bg-zinc-400 dark:bg-zinc-600 rounded-full mr-3"></span>
                      Ireland
                    </span>
                    <span className="pl-5 text-[11px] text-zinc-500 dark:text-zinc-600 tracking-wider uppercase">European Operations</span>
                  </li>
               </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

export default About;