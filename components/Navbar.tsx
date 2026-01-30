import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from './Icons';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoRotation, setLogoRotation] = useState(0);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let velocity = 0;
    let currentRotation = 0;
    let animationFrameId: number;
    let lastTime = Date.now();
    let scrollTimeout: NodeJS.Timeout;

    const applyInertia = () => {
      const now = Date.now();
      const deltaTime = (now - lastTime) / 1000; // Convert to seconds
      lastTime = now;

      // Apply friction to velocity (exponential decay)
      velocity *= Math.pow(0.92, deltaTime * 60); // Friction coefficient adjusted for 60fps

      // Update rotation
      currentRotation += velocity * deltaTime * 60;

      // Stop animation when velocity is very small
      if (Math.abs(velocity) > 0.1) {
        setLogoRotation(currentRotation);
        animationFrameId = requestAnimationFrame(applyInertia);
      } else {
        velocity = 0;
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - lastScrollY;
      
      setIsScrolled(scrollY > 50);

      // Calculate velocity based on scroll delta
      // Positive scroll = rotate forward, negative = rotate backward
      velocity = scrollDelta * 2; // Sensitivity multiplier

      // Update rotation immediately during scroll
      currentRotation += scrollDelta * 0.5;
      setLogoRotation(currentRotation);

      lastScrollY = scrollY;

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // Cancel existing inertia animation
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      // Start inertia after scroll stops
      scrollTimeout = setTimeout(() => {
        lastTime = Date.now();
        animationFrameId = requestAnimationFrame(applyInertia);
      }, 50); // Wait 50ms after last scroll event
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Escape key handler for mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  // Body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
    
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Capabilities', href: '/#expertise', isAnchor: true },
    { label: 'The Firm', href: '/#about', isAnchor: true },
    { label: 'Insights', href: '/blog', isAnchor: false },
    { label: 'Contact', href: '/#contact', isAnchor: true },
  ];

  const handleNavClick = (href: string, isAnchor: boolean) => {
    setMobileMenuOpen(false);
    
    if (isAnchor && !isHomePage) {
      // If we're not on homepage and clicking an anchor link, navigate to homepage first
      window.location.href = href;
    }
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ${
          isScrolled
            ? 'bg-white/80 dark:bg-zinc-975/80 backdrop-blur-xl py-4 border-b border-zinc-200 dark:border-white/5 shadow-lg'
            : 'bg-transparent py-8 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex flex-col group z-50" aria-label="Boru Consulting Home">
            <span className="font-serif text-3xl tracking-tight font-medium text-zinc-900 dark:text-white transition-colors duration-500 inline-flex items-baseline gap-[0.08em]" style={{ perspective: '1000px' }}>
              <span>B</span>
              <img 
                src="/logo-o.png" 
                alt="" 
                className="h-[0.65em] w-auto inline-block" 
                style={{ 
                  transform: `rotateY(${logoRotation}deg) translateY(0.08em)`,
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'visible'
                }}
                aria-hidden="true" 
              />
              <span>RU</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              item.isAnchor && isHomePage ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.1em] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-500 font-medium font-sans"
                >
                  {item.label}
                </a>
              ) : item.isAnchor ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.1em] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-500 font-medium font-sans"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.href}
                  className="text-[11px] uppercase tracking-[0.1em] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-500 font-medium font-sans"
                >
                  {item.label}
                </Link>
              )
            ))}
            
            <div className="flex items-center gap-6">
              <ThemeToggle />
              {isHomePage ? (
                <a
                  href="#contact"
                  className="px-8 py-3 border border-zinc-900/10 dark:border-white/20 text-zinc-900 dark:text-white text-[11px] hover:bg-zinc-900/5 dark:hover:bg-white/5 hover:border-zinc-900 dark:hover:border-white transition-all duration-500 uppercase tracking-[0.15em] font-medium"
                >
                  Let's Talk
                </a>
              ) : (
                <Link
                  to="/#contact"
                  className="px-8 py-3 border border-zinc-900/10 dark:border-white/20 text-zinc-900 dark:text-white text-[11px] hover:bg-zinc-900/5 dark:hover:bg-white/5 hover:border-zinc-900 dark:hover:border-white transition-all duration-500 uppercase tracking-[0.15em] font-medium"
                >
                  Let's Talk
                </Link>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden z-50">
             <ThemeToggle />
             <button
              className="text-zinc-900 dark:text-white p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 bg-zinc-50 dark:bg-zinc-950 z-30 transition-transform duration-500 ease-in-out md:hidden flex flex-col justify-center items-center space-y-8 ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {navItems.map((item) => (
          item.isAnchor ? (
            <a
              key={item.label}
              href={item.href}
              className="text-4xl font-serif font-medium tracking-tight text-zinc-400 dark:text-zinc-300 hover:text-gold-500 dark:hover:text-gold-500 transition-colors"
              onClick={() => handleNavClick(item.href, item.isAnchor)}
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.href}
              className="text-4xl font-serif font-medium tracking-tight text-zinc-400 dark:text-zinc-300 hover:text-gold-500 dark:hover:text-gold-500 transition-colors"
              onClick={() => handleNavClick(item.href, item.isAnchor)}
            >
              {item.label}
            </Link>
          )
        ))}
        {isHomePage ? (
          <a
            href="#contact"
            className="mt-8 px-8 py-4 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-300 text-xs uppercase tracking-widest hover:border-zinc-900 dark:hover:border-white transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let's Talk
          </a>
        ) : (
          <Link
            to="/#contact"
            className="mt-8 px-8 py-4 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-300 text-xs uppercase tracking-widest hover:border-zinc-900 dark:hover:border-white transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Let's Talk
          </Link>
        )}
      </div>
    </>
  );
};

export default Navbar;