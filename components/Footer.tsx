import { memo, useState } from 'react';
import { ChevronDown, ChevronUp, Linkedin, Facebook } from './Icons';

// X (Twitter) icon component - lucide-react doesn't have X icon yet
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = memo(() => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-975 py-8 border-t border-zinc-200 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end text-[10px] text-zinc-500 dark:text-zinc-600 uppercase tracking-[0.2em] space-y-6 md:space-y-0">
        <div className="flex flex-col space-y-3 max-w-4xl">
           <p className="text-zinc-500 dark:text-zinc-500">&copy; {new Date().getFullYear()} Boru Consulting Group.</p>
           
           {/* Expandable Legal Information */}
           <div className="normal-case tracking-normal leading-relaxed text-[9px]">
             <div className={`text-zinc-500 dark:text-zinc-500 transition-all duration-300 ${isExpanded ? '' : 'line-clamp-2'}`}>
               <p className="mb-3">
                 Boru Consulting L.L.C-FZ is a company registered in U.A.E. under Company No. 2415755, with its registered office at Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba, Dubai, and is licensed to provide Accounting, Bookkeeping, Tax Consulting, Auditing, Management Consultancy and Corporate Services. <a href="https://www.moec.gov.ae/en/business-license-search" target="_blank" rel="noopener noreferrer" className="text-gold-600 dark:text-gold-500 hover:underline">UAE Ministry of Economy Business License Search</a>
               </p>
               
               {isExpanded && (
                 <>
                   <p className="mb-3">
                     Boru Global (UK) Limited, trading as Boru Consulting, is a company registered in England and Wales under Company No. 14435343, with its registered office at 66 Canterbury Avenue, Sidcup, DA15 9AS, and is supervised by HM Revenue & Customs for Anti-Money Laundering purposes as an Accounting & Corporate Service Provider (Reg. No. XCML0000187357) <a href="https://www.tax.service.gov.uk/anti-money-laundering/search" target="_blank" rel="noopener noreferrer" className="text-gold-600 dark:text-gold-500 hover:underline">HMRC AML Supervised Business Register</a>.
                   </p>
                   
                   <p>
                     Boru Consulting is listed at Companies House in the UK as a Company Formation and Secretarial Agent <a href="https://www.gov.uk/government/organisations/companies-house" target="_blank" rel="noopener noreferrer" className="text-gold-600 dark:text-gold-500 hover:underline">Companies House List</a> and is registered with Companies House as an Authorised Corporate Service Provider (ACSP) under the Economic Crime and Corporate Transparency Act 2023.
                   </p>
                 </>
               )}
             </div>
             
             {/* Expand/Collapse Button */}
             <button
               onClick={() => setIsExpanded(!isExpanded)}
               className="mt-2 flex items-center gap-1 text-zinc-600 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300 transition-colors group"
               aria-expanded={isExpanded}
               aria-label={isExpanded ? "Show less information" : "Show more information"}
             >
               <span className="text-[9px] uppercase tracking-wider">{isExpanded ? 'Show Less' : 'Show More'}</span>
               {isExpanded ? (
                 <ChevronUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
               ) : (
                 <ChevronDown className="w-3 h-3 group-hover:translate-y-0.5 transition-transform" />
               )}
             </button>
           </div>
        </div>
        
        <div className="flex items-center gap-4 shrink-0">
          <a 
            href="https://www.linkedin.com/company/boru-consulting/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-400 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://www.facebook.com/share/17gAvVpyPq/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-400 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-zinc-500 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-400 transition-colors"
            aria-label="X (Twitter)"
          >
            <XIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;