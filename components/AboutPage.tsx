import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Globe2, Users, Award, Target } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const AboutPage = memo(() => {
  return (
    <>
      <Helmet>
        <title>About Us | Boru Consulting Group</title>
        <meta name="description" content="Learn about Boru Consulting Group - elite strategic advisory for complex cross-border business challenges across UK, UAE, and Ireland." />
        <link rel="canonical" href="https://www.boruconsulting.com/about" />
      </Helmet>

      <article className="min-h-screen bg-warm-50 dark:bg-zinc-975 pt-32 pb-24 transition-colors duration-500">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          
          {/* Navigation */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-zinc-500 hover:text-gold-600 dark:hover:text-gold-500 mb-12 transition-colors group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Header */}
          <header className="mb-20">
            <span className="text-gold-600 dark:text-gold-500 text-[10px] font-semibold tracking-[0.3em] uppercase mb-8 block">About Us</span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-zinc-900 dark:text-white leading-[1.1] font-medium tracking-tight mb-8">
              Strategic clarity in complex markets.
            </h1>

            <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light max-w-3xl">
              Boru Consulting Group provides elite strategic advisory services for businesses and individuals navigating the complexities of international markets.
            </p>
          </header>

          {/* Main Content */}
          <div className="prose prose-zinc dark:prose-invert max-w-none mb-20">
            
            <h2 className="font-serif text-3xl text-zinc-900 dark:text-white font-medium tracking-tight mt-16 mb-6">Our Approach</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-[180%] font-light mb-6">
              We do not generalize. We specialize in the structural mechanics of large-scale business operations. Our team manages the logistical, legal, and cultural friction that comes with scaling across borders—from entity setup and tax compliance to governance frameworks and regulatory reporting.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-[180%] font-light mb-6">
              Every engagement is built around precision and discretion. We work with clients who require more than surface-level advice—they need partners who understand the nuances of multi-jurisdictional operations and can execute with surgical accuracy.
            </p>

            <h2 className="font-serif text-3xl text-zinc-900 dark:text-white font-medium tracking-tight mt-16 mb-6">Global Presence</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-[180%] font-light mb-6">
              We maintain active operations across three strategic jurisdictions: the United Kingdom, United Arab Emirates, and Ireland. This positioning allows us to serve clients with complex cross-border requirements while maintaining deep local expertise in each market.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              <div className="border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 transition-colors duration-500">
                <h3 className="text-xl font-serif text-zinc-900 dark:text-white mb-2 font-medium">United Kingdom</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Boru Global (UK) Limited</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-600 uppercase tracking-wider">Company No. 14435343</p>
              </div>

              <div className="border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 transition-colors duration-500">
                <h3 className="text-xl font-serif text-zinc-900 dark:text-white mb-2 font-medium">U.A.E.</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">Boru Consulting L.L.C-FZ</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-600 uppercase tracking-wider">Company No. 2415755</p>
              </div>

              <div className="border border-zinc-200 dark:border-zinc-800 p-6 bg-white dark:bg-zinc-900 transition-colors duration-500">
                <h3 className="text-xl font-serif text-zinc-900 dark:text-white mb-2 font-medium">Ireland</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">European Operations</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-600 uppercase tracking-wider">Strategic Hub</p>
              </div>
            </div>

            <h2 className="font-serif text-3xl text-zinc-900 dark:text-white font-medium tracking-tight mt-16 mb-6">Our Values</h2>
            
            <div className="space-y-8 my-12">
              <div className="flex gap-4">
                <Target className="w-6 h-6 text-gold-600 dark:text-gold-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-serif text-zinc-900 dark:text-white mb-2 font-medium">Precision</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    We operate with surgical accuracy. Every structure, every filing, every advisory opinion is built on rigorous analysis and deep jurisdictional knowledge.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Users className="w-6 h-6 text-gold-600 dark:text-gold-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-serif text-zinc-900 dark:text-white mb-2 font-medium">Partnership</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    We do not exit when complexity enters. Our clients rely on us through regulatory shifts, audits, and strategic pivots. Unwavering support is foundational to how we work.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Globe2 className="w-6 h-6 text-gold-600 dark:text-gold-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-serif text-zinc-900 dark:text-white mb-2 font-medium">Global Expertise</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Cross-border operations require more than theoretical knowledge. We maintain active presence in key jurisdictions, ensuring real-time compliance and strategic execution.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Award className="w-6 h-6 text-gold-600 dark:text-gold-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-serif text-zinc-900 dark:text-white mb-2 font-medium">Discretion</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    High-stakes advisory requires absolute confidentiality. We operate with the discretion expected by sophisticated clients managing complex international affairs.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl text-zinc-900 dark:text-white font-medium tracking-tight mt-16 mb-6">Regulatory Standing</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-[180%] font-light mb-6">
              Boru Global (UK) Limited is supervised by HM Revenue & Customs for Anti-Money Laundering purposes (Reg. No. XCML0000187357) and is registered with Companies House as an Authorised Corporate Service Provider (ACSP) under the Economic Crime and Corporate Transparency Act 2023.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-[180%] font-light mb-6">
              Boru Consulting L.L.C-FZ operates under UAE Free Zone regulations and is licensed to provide Accounting, Bookkeeping, Tax Consulting, Auditing, Management Consultancy, and Corporate Services.
            </p>
          </div>

          {/* CTA */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-12">
            <div className="text-center">
              <h3 className="font-serif text-2xl md:text-3xl text-zinc-900 dark:text-white mb-4 font-medium">
                Ready to discuss your requirements?
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
                Our team is available to discuss complex cross-border structures and compliance requirements.
              </p>
              <Link 
                to="/#contact"
                className="inline-block px-10 py-4 border border-zinc-900 dark:border-white text-zinc-900 dark:text-white text-[11px] uppercase tracking-[0.15em] hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all duration-500 font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
});

export default AboutPage;
