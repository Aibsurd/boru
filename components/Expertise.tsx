import { memo } from 'react';
import { SERVICES } from '../constants';

const Expertise = memo(() => {
  return (
    <section className="py-32 md:py-48 bg-zinc-50 dark:bg-zinc-975 relative transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b border-zinc-200 dark:border-white/10 transition-colors duration-500">
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl md:text-6xl text-zinc-900 dark:text-white mb-6 font-medium tracking-tight transition-colors duration-500">Competencies</h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg font-light leading-[160%] transition-colors duration-500">
              We do not generalize. We specialize in the structural mechanics of large-scale business operations.
            </p>
          </div>
          <div className="hidden md:block text-right">
             <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 font-medium transition-colors duration-500">Service Matrix</span>
          </div>
        </div>

        {/* 
            Grid Logic:
            - Desktop: 3 columns.
            - Mobile: 1 column.
            - Borders: Use faint borders compatible with theme.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`
                group p-8 md:p-12 border-zinc-200 dark:border-white/5
                border-b
                ${index % 3 !== 2 ? 'lg:border-r' : ''} /* Right border on 1st & 2nd col desktop */
                ${index % 2 !== 1 ? 'md:border-r lg:border-r-0' : ''} /* Fix for tablet 2-col layout */
                hover:bg-zinc-100 dark:hover:bg-zinc-900/50 transition-colors duration-500
                flex flex-col min-h-[400px]
              `}
            >
              <div className="mb-12 flex justify-between items-start">
                 <span className="font-serif text-lg text-gold-600/80 dark:text-gold-500/80 font-medium transition-colors duration-500">0{index + 1}</span>
                 <service.icon className="w-5 h-5 text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-500" strokeWidth={1} />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-serif text-zinc-900 dark:text-white mb-6 group-hover:translate-x-2 transition-all duration-500 font-medium tracking-tight leading-tight">{service.title}</h3>
              
              <p className="text-zinc-600 dark:text-zinc-500 text-sm leading-[180%] mb-8 flex-grow font-light transition-colors duration-500">
                {service.description}
              </p>

              <div className="space-y-4 pt-8 border-t border-zinc-200 dark:border-white/5 transition-colors duration-500">
                {service.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center text-[10px] uppercase tracking-[0.15em] text-zinc-500 dark:text-zinc-500">
                        <span className="w-1 h-1 bg-zinc-400 dark:bg-zinc-700 rounded-full mr-3 group-hover:bg-gold-600 dark:group-hover:bg-gold-500 transition-colors duration-500"></span>
                        {detail}
                    </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Expertise;