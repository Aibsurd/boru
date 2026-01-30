import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LazyLoadError from './components/LazyLoadError';
import CorporateSchema from './components/CorporateSchema';
import { ThemeProvider } from './context/ThemeContext';

// Optimization: Lazy load below-the-fold heavy components to unblock Main Thread
const Expertise = lazy(() => 
  import('./components/Expertise').catch(err => {
    if (import.meta.env.DEV) {
      console.error('Failed to load Expertise component:', err);
    }
    return { default: (() => <LazyLoadError componentName="Expertise" />) as any };
  })
);

const About = lazy(() => 
  import('./components/About').catch(err => {
    if (import.meta.env.DEV) {
      console.error('Failed to load About component:', err);
    }
    return { default: (() => <LazyLoadError componentName="About" />) as any };
  })
);

const Insights = lazy(() => 
  import('./components/Insights').catch(err => {
    if (import.meta.env.DEV) {
      console.error('Failed to load Insights component:', err);
    }
    return { default: (() => <LazyLoadError componentName="Insights" />) as any };
  })
);

const Contact = lazy(() => 
  import('./components/Contact').catch(err => {
    if (import.meta.env.DEV) {
      console.error('Failed to load Contact component:', err);
    }
    return { default: (() => <LazyLoadError componentName="Contact" />) as any };
  })
);

const Footer = lazy(() => 
  import('./components/Footer').catch(err => {
    if (import.meta.env.DEV) {
      console.error('Failed to load Footer component:', err);
    }
    return { default: (() => <LazyLoadError componentName="Footer" />) as any };
  })
);

const TrustAnchor = lazy(() => 
  import('./components/TrustAnchor').catch(err => {
    if (import.meta.env.DEV) {
      console.error('Failed to load TrustAnchor component:', err);
    }
    return { default: (() => <LazyLoadError componentName="TrustAnchor" />) as any };
  })
);

const BlogPage = lazy(() => 
  import('./components/BlogPage').catch(err => {
    if (import.meta.env.DEV) {
      console.error('Failed to load BlogPage component:', err);
    }
    return { default: (() => <LazyLoadError componentName="BlogPage" />) as any };
  })
);

const BlogArticle = lazy(() => 
  import('./components/BlogArticle').catch(err => {
    if (import.meta.env.DEV) {
      console.error('Failed to load BlogArticle component:', err);
    }
    return { default: (() => <LazyLoadError componentName="BlogArticle" />) as any };
  })
);

const AboutPage = lazy(() => 
  import('./components/AboutPage').catch(err => {
    if (import.meta.env.DEV) {
      console.error('Failed to load AboutPage component:', err);
    }
    return { default: (() => <LazyLoadError componentName="AboutPage" />) as any };
  })
);

// Minimalist, brand-aligned loader prevents CLS during chunk loading
const SectionLoader = () => (
  <div className="w-full py-24 flex items-center justify-center bg-zinc-50 dark:bg-zinc-975" aria-busy="true" aria-label="Loading section">
    <div className="w-6 h-6 border-2 border-gold-500/20 border-t-gold-500 rounded-full animate-spin"></div>
  </div>
);

// Homepage Component
const HomePage = () => (
  <main>
    <Hero />
    
    <section id="expertise">
      <Suspense fallback={<SectionLoader />}>
        <Expertise />
      </Suspense>
    </section>
    
    <section id="about">
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>
    </section>

    <section id="insights">
      <Suspense fallback={<SectionLoader />}>
        <Insights />
      </Suspense>
    </section>
    
    <section id="contact">
      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>
    </section>
  </main>
);

function App() {
  return (
    <ThemeProvider>
      <CorporateSchema />
      <div className="bg-zinc-50 dark:bg-zinc-975 min-h-screen text-zinc-900 dark:text-zinc-100 font-sans selection:bg-gold-500/30 selection:text-black dark:selection:text-white transition-colors duration-500">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={
            <Suspense fallback={<SectionLoader />}>
              <AboutPage />
            </Suspense>
          } />
          <Route path="/blog" element={
            <Suspense fallback={<SectionLoader />}>
              <BlogPage />
            </Suspense>
          } />
          <Route path="/blog/:slug" element={
            <Suspense fallback={<SectionLoader />}>
              <BlogArticle />
            </Suspense>
          } />
        </Routes>
        
        <Suspense fallback={<div className="h-12 bg-zinc-900 dark:bg-zinc-950" />}>
          <TrustAnchor />
        </Suspense>
        
        <Suspense fallback={<div className="h-12 bg-zinc-50 dark:bg-zinc-975" />}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;