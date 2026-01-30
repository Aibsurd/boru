import { memo } from 'react';
import { ArrowDown } from './Icons';

const Hero = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-zinc-50 dark:bg-zinc-975 transition-colors duration-500">
      {/* Abstract Architectural Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Vertical Lines */}
         <div className="absolute left-1/4 top-0 bottom-0 w-[1px] bg-zinc-900/[0.03] dark:bg-white/[0.02] transition-colors duration-500"></div>
         <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-900/[0.03] dark:bg-white/[0.02] transition-colors duration-500"></div>
         <div className="absolute left-3/4 top-0 bottom-0 w-[1px] bg-zinc-900/[0.03] dark:bg-white/[0.02] transition-colors duration-500"></div>
         
         {/* Horizontal Lines */}
         <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-zinc-900/[0.03] dark:bg-white/[0.02] transition-colors duration-500"></div>
         <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-zinc-900/[0.03] dark:bg-white/[0.02] transition-colors duration-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full py-32 md:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-10">
            <div className="flex items-center gap-4 mb-10 animate-fade-in will-change-[opacity]">
                <div className="w-12 h-[1px] bg-gold-600/50 dark:bg-gold-500/50"></div>
                <p className="text-gold-600 dark:text-gold-500 tracking-[0.2em] uppercase text-[10px] font-semibold">
                  Dedicated Partner
                </p>
            </div>
            
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-zinc-900 dark:text-white leading-[1.05] mb-16 tracking-tight font-medium animate-slide-up text-balance will-change-transform transition-colors duration-500">
              You build the <br />
              <span className="text-zinc-500 dark:text-zinc-300 transition-colors duration-500">vision.</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-4xl">
                <div>
                   <h2 className="text-3xl md:text-4xl font-serif text-zinc-900 dark:text-white mb-6 animate-slide-up-delayed will-change-transform font-medium tracking-tight transition-colors duration-500">We handle the noise.</h2>
                   <p className="text-zinc-600 dark:text-zinc-400 text-lg leading-[170%] font-light animate-slide-up-delayed will-change-transform transition-colors duration-500">
                     We support global growth by managing the complexity of cross-border business. From accounting and tax to risk governance and compliance.
                   </p>
                </div>
            </div>
          </div>
        </div>
        
        {/* Our Services Button - Centered at bottom */}
        <div className="absolute bottom-12 md:bottom-14 left-1/2 -translate-x-1/2 animate-slide-up-delayed-more will-change-transform">
           <a href="#expertise" className="group flex items-center gap-6 text-zinc-900 dark:text-white hover:text-gold-600 dark:hover:text-gold-500 transition-colors cursor-pointer">
              <div className="w-12 h-12 border border-zinc-900/10 dark:border-white/20 rounded-full flex items-center justify-center group-hover:border-gold-600 dark:group-hover:border-gold-500 transition-colors">
                  <ArrowDown className="w-4 h-4" />
              </div>
              <span className="uppercase tracking-[0.2em] text-[10px] font-medium">Our Services</span>
           </a>
        </div>
      </div>
      
      {/* Bottom ticker/decoration */}
      <div className="absolute bottom-0 left-0 w-full border-t border-zinc-200 dark:border-white/5 py-6 px-6 md:px-12 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-600 font-medium transition-colors duration-500">
        <span>London &bull; Dublin &bull; Dubai</span>
        <span className="hidden md:inline">Global Reach &bull; Local Reliability</span>
      </div>
    </section>
  );
});

export default Hero;