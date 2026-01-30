import { memo } from 'react';

const TrustAnchor = memo(() => {
  return (
    <section className="py-16 md:py-20 bg-transparent relative">
      <div className="max-w-2xl mx-auto px-6 md:px-12 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 dark:text-white mb-8 font-medium tracking-tight italic leading-tight transition-colors duration-500">
          One final certainty.
        </h2>
        
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-10 transition-colors duration-500">
          We do not exit when complexity enters. We stand by our clients through every regulatory shift, audit, and challenge. Unwavering support is the foundation of our firm.
        </p>

        <a
          href="#contact"
          className="inline-block px-10 py-4 border border-zinc-900/10 dark:border-white/20 text-zinc-900 dark:text-white text-[11px] hover:bg-zinc-900/5 dark:hover:bg-white/5 hover:border-zinc-900 dark:hover:border-white transition-all duration-500 uppercase tracking-[0.15em] font-medium"
        >
          Let's Talk
        </a>
      </div>
    </section>
  );
});

export default TrustAnchor;
