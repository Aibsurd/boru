import { Building2, FileText, Globe2, Landmark, Scale, ShieldCheck } from './components/Icons';
import { ServiceItem, StatItem, ClientTestimonial, NavItem, InsightItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Capabilities', href: '#expertise' },
  { label: 'The Firm', href: '#about' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'entity',
    title: 'Global Entity Setup',
    description: 'We handle the logistical, legal, and cultural friction of scaling borders. From incorporation to ongoing management.',
    icon: Globe2,
    details: ['Incorporation', 'Corporate Secretarial', 'Local Directorship']
  },
  {
    id: 'accounting',
    title: 'Accounting & Tax',
    description: 'Managing statutory and regulatory demands in the background. Keeping operations steady while you scale.',
    icon: FileText,
    details: ['Cross-border Tax', 'Financial Reporting', 'Payroll & Bookkeeping']
  },
  {
    id: 'governance',
    title: 'Risk & Governance',
    description: 'Giving your business a strong foundation. We navigate international markets with clarity and confidence.',
    icon: ShieldCheck,
    details: ['Regulatory Compliance', 'Internal Controls', 'Risk Frameworks']
  },
  {
    id: 'compliance',
    title: 'Regulatory Compliance',
    description: 'Proactive management of statutory obligations across multiple jurisdictions. We ensure you remain good standing.',
    icon: Scale,
    details: ['AML/KYC', 'Licensing', 'Regulatory Reporting']
  },
  {
    id: 'wealth',
    title: 'Private Wealth',
    description: 'Protecting and growing wealth for individuals and families. Tailored solutions built around your legacy goals.',
    icon: Landmark,
    details: ['Trust Services', 'Estate Planning', 'Asset Protection']
  },
  {
    id: 'expansion',
    title: 'Business Expansion',
    description: 'Supporting global growth by managing the complexity of cross-border business operations.',
    icon: Building2,
    details: ['Market Entry', 'Operational Scaling', 'Strategic Advisory']
  }
];

export const STATS: StatItem[] = [
  { value: '500+', label: 'Entities Structured' }, // Social proof - primary trust indicator
  { value: 'UK/UAE/IE', label: 'Global Reach' },
  { value: 'ON-DEMAND', label: 'Operational Support' },
];

export const TESTIMONIAL: ClientTestimonial = {
  quote: "We manage the statutory and regulatory demands in the background, keeping your operations steady while you focus on building the business you want.",
  author: "Boru Consulting",
  role: "Mission Statement",
  company: "Global"
};

export const INSIGHTS_DATA: InsightItem[] = [
  {
    id: 'uae-tax-regime',
    category: 'Taxation Strategy',
    date: 'January 15, 2025',
    readTime: '4 min read',
    title: 'What Are the Strategic Implications of the UAE Corporate Tax Regime?',
    excerpt: 'The UAE Federal Decree-Law No. 47 of 2022 introduces a 9% corporate tax rate effective June 1, 2023, fundamentally changing Free Zone entity taxation and requiring rigorous substance demonstration for 0% qualifying income treatment.',
    slug: 'uae-corporate-tax-regime-strategic-implications',
    author: 'Ruairi Laughlin-Mccann',
    keywords: ['UAE Corporate Tax', 'Free Zone Tax', 'UAE Business', 'Transfer Pricing', 'OECD Guidelines'],
    content: (
      <>
        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">What is the UAE Corporate Tax Regime?</h2>
        <p className="mb-6">
          The United Arab Emirates introduced Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses, effective for financial years starting on or after June 1, 2023. This regime introduces a headline 9% corporate tax rate, marking the UAE's transition from a zero-tax jurisdiction to a modern fiscal framework aligned with international standards.
        </p>
        
        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">What is the Free Zone Question?</h2>
        <p className="mb-6">
          Free Zone Persons face the most significant structural change. While the UAE Corporate Tax Law maintains a 0% rate for "Qualifying Income," the definition requires rigorous compliance. Entities must maintain adequate substance in the UAE and derive income exclusively from qualifying activities. Passive income or transactions with mainland entities trigger the standard 9% rate.
        </p>
        <p className="mb-6">
          The substance requirement is not merely registration-based. Free Zone entities must demonstrate adequate qualified employees in the UAE, adequate operating expenditure incurred in the UAE, core income-generating activities (CIGA) performed in the UAE, adequate physical presence, and strategic decisions made by UAE-resident directors.
        </p>
        
        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">What are the Transfer Pricing Compliance Requirements?</h2>
        <p className="mb-6">
          The UAE Corporate Tax Law mandates adherence to the Arm's Length Principle (ALP) for related party transactions, aligning UAE standards with OECD Transfer Pricing Guidelines. Multinational groups operating in the UAE must prepare contemporaneous transfer pricing documentation, including master files, local files, and country-by-country reports (CbCR) for groups exceeding €750 million in consolidated revenue.
        </p>
        <p className="mb-6">
          Documentation requirements include functional analysis identifying risks and functions, economic analysis with benchmarking studies using comparable uncontrolled transactions, intercompany agreements reflecting arm's length terms, and advance pricing agreements (APAs) for certainty on complex transactions.
        </p>
        
        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">What are the Consequences of Non-Compliance?</h2>
        <p className="mb-6">
          Failure to meet substance requirements results in loss of the 0% Free Zone tax rate, application of the standard 9% corporate tax rate, potential penalties ranging from AED 10,000 to AED 1,000,000, interest charges on unpaid tax, and reputational risk with UAE regulatory authorities. The Federal Tax Authority (FTA) conducts substance audits with increasing frequency.
        </p>
        
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <h3 className="text-xl font-serif font-medium mb-4">References & Sources</h3>
          <ol className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2 list-decimal list-inside">
            <li><a href="https://www.moec.gov.ae/en/business-license-search" target="_blank" rel="noopener noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:underline">UAE Ministry of Economy - Federal Decree-Law No. 47 of 2022</a></li>
            <li><a href="https://tax.gov.ae/" target="_blank" rel="noopener noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:underline">UAE Federal Tax Authority - Corporate Tax Guidelines</a></li>
            <li><a href="https://www.oecd.org/tax/transfer-pricing/" target="_blank" rel="noopener noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:underline">OECD Transfer Pricing Guidelines for Multinational Enterprises</a></li>
          </ol>
          <p className="text-xs text-zinc-500 dark:text-zinc-600 mt-4 italic">
            Last updated: January 15, 2025. Information based on current UAE tax legislation and OECD guidelines.
          </p>
        </div>
      </>
    )
  },
  {
    id: 'uk-holding-co',
    category: 'Corporate Structuring',
    date: 'December 18, 2024',
    readTime: '5 min read',
    title: 'Why Use a UK Holding Company in the Post-Brexit Landscape?',
    excerpt: 'The UK Substantial Shareholding Exemption (SSE) allows tax-free disposal of subsidiary shares with 10%+ ownership held for 12 months, while the UK\'s 130+ Double Taxation Treaties and zero dividend withholding tax create efficient profit repatriation despite Brexit.',
    slug: 'uk-holding-company-post-brexit-analysis',
    author: 'Ruairi Laughlin-Mccann',
    keywords: ['UK Holding Company', 'Brexit', 'Corporate Structure', 'SSE', 'Tax Planning'],
    content: (
      <>
        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">Why Use a UK Holding Company Post-Brexit?</h2>
        <p className="mb-6">
          Post-Brexit analysis demonstrates that the United Kingdom's legal certainty, mature financial infrastructure, and extensive treaty network outweigh Single Market access friction. The UK maintains over 130 Double Taxation Treaties, robust corporate law frameworks under the Companies Act 2006, and zero withholding tax on outbound dividends regardless of shareholder residence.
        </p>
        
        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">What is the Substantial Shareholding Exemption (SSE)?</h2>
        <p className="mb-6">
          The Substantial Shareholding Exemption (SSE) under sections 192A-192C of the Taxation of Chargeable Gains Act 1992 allows UK companies to dispose of shares in subsidiary companies free from Corporation Tax on capital gains. The SSE requires shareholding of at least 10% of ordinary share capital, continuous 12-month holding period within 6 years before disposal, both parent and subsidiary qualifying as trading companies or holding companies of trading groups, and disposal of a substantial shareholding in a qualifying company.
        </p>
        <p className="mb-6">
          The SSE eliminates capital gains tax on exit events, enabling tax-efficient restructuring, mergers and acquisitions, and portfolio rationalization. This exemption applies to both UK-resident and non-UK-resident shareholders, provided the UK company meets the trading requirement.
        </p>
        
        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">What are the UK Dividend Withholding Tax Rules?</h2>
        <p className="mb-6">
          The United Kingdom does not impose withholding tax on dividends paid to shareholders, regardless of their residence or jurisdiction. This zero withholding tax policy creates highly efficient profit repatriation mechanisms, particularly when combined with the UK's Double Taxation Treaty network covering over 130 jurisdictions.
        </p>
        <p className="mb-6">
          Treaty benefits include reduced withholding tax on inbound dividends, interest, and royalties from treaty jurisdictions, elimination of double taxation through foreign tax credit relief, access to mutual agreement procedures (MAP) for dispute resolution, and treaty shopping protection through principal purpose test (PPT) and limitation on benefits (LOB) clauses.
        </p>
        
        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">What are the UK Substance Requirements?</h2>
        <p className="mb-6">
          The Economic Crime (Transparency and Enforcement) Act 2022 introduced the Register of Overseas Entities (ROE), increasing transparency requirements for foreign owners of UK property. UK holding companies must demonstrate real management and control within the UK to satisfy substance requirements and avoid challenges from foreign tax authorities.
        </p>
        <p className="mb-6">
          Substance requirements include board meetings held in the UK with UK-resident directors making strategic decisions, adequate office space and administrative support in the UK, UK bank accounts and professional advisors (accountants, lawyers), demonstrable economic substance beyond mere registration, and contemporaneous documentation of decision-making processes.
        </p>
        
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <h3 className="text-xl font-serif font-medium mb-4">References & Sources</h3>
          <ol className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2 list-decimal list-inside">
            <li><a href="https://www.gov.uk/government/organisations/companies-house" target="_blank" rel="noopener noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:underline">Companies House UK - Companies Act 2006</a></li>
            <li><a href="https://www.legislation.gov.uk/ukpga/1992/12/part/II/chapter/I" target="_blank" rel="noopener noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:underline">Taxation of Chargeable Gains Act 1992 - Sections 192A-192C (SSE)</a></li>
            <li><a href="https://www.gov.uk/hmrc-internal-manuals/international-manual" target="_blank" rel="noopener noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:underline">HMRC International Manual - Double Taxation Treaties</a></li>
            <li><a href="https://www.legislation.gov.uk/ukpga/2022/10/contents" target="_blank" rel="noopener noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:underline">Economic Crime (Transparency and Enforcement) Act 2022</a></li>
          </ol>
          <p className="text-xs text-zinc-500 dark:text-zinc-600 mt-4 italic">
            Last updated: December 18, 2024. Information based on current UK tax legislation and Companies House guidance.
          </p>
        </div>
      </>
    )
  },
  {
    id: 'risk-governance',
    category: 'Risk Governance',
    date: 'November 22, 2024',
    readTime: '3 min read',
    title: 'What is Operational Resilience and Why Does it Matter?',
    excerpt: 'UK PRA/FCA Policy Statement PS21/3 and EU DORA require firms to map critical business services, set impact tolerances for maximum tolerable disruption, and conduct annual scenario testing to ensure recovery within tolerance periods during systemic shocks.',
    slug: 'operational-resilience-risk-governance',
    author: 'Ruairi Laughlin-Mccann',
    keywords: ['Operational Resilience', 'Risk Management', 'Corporate Governance', 'Business Continuity', 'Regulatory Compliance'],
    content: (
      <>
        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">What is Operational Resilience?</h2>
        <p className="mb-6">
          Operational Resilience represents the evolution from traditional business continuity planning to a comprehensive framework ensuring firms can prevent, adapt, respond to, recover from, and learn from operational disruptions. UK regulators (PRA/FCA) and EU regulators (DORA) shifted focus from "Can you survive a shock?" to "How quickly can you recover critical services?" This distinction fundamentally changes board-level governance requirements.
        </p>
        
        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">What is Critical Service Mapping?</h2>
        <p className="mb-6">
          Critical service mapping identifies important business services, those that, if disrupted, would cause intolerable harm to consumers, market integrity, or financial stability. The mapping process requires identifying important business services based on regulatory criteria, mapping dependencies including people, processes, technology, third parties, and data, setting impact tolerances defining maximum tolerable disruption before intolerable harm occurs, designing resilience measures including redundancy, substitutability, and recovery procedures, and conducting scenario testing at least annually.
        </p>
        <p className="mb-6">
          Impact tolerance setting answers: What is the maximum time a critical service can be disrupted before causing intolerable harm? For example, if a payroll provider in a secondary jurisdiction goes offline, is the tolerance 24 hours, 48 hours, or 72 hours? The answer determines required resilience investments.
        </p>
        
        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">What are the UK Regulatory Requirements?</h2>
        <p className="mb-6">
          UK Policy Statement PS21/3 (March 2021) establishes operational resilience requirements for banks, insurers, and designated investment firms. Requirements include identifying important business services, setting impact tolerances for each important business service, mapping dependencies and vulnerabilities, conducting scenario testing at least annually, self-assessment and board attestation of operational resilience framework, and public disclosure of operational resilience approach in annual reports.
        </p>
        <p className="mb-6">
          The PRA and FCA expect firms to be able to remain within impact tolerances for important business services during severe but plausible scenarios, including cyber attacks, third-party failures, natural disasters, and pandemic events.
        </p>
        
        <h2 className="text-3xl font-serif font-medium mb-6 mt-12">What is DORA and How Does it Apply?</h2>
        <p className="mb-6">
          The Digital Operational Resilience Act (DORA), Regulation (EU) 2022/2554, establishes a comprehensive ICT risk management framework for EU financial entities. DORA requirements include ICT risk management framework with governance, risk assessment, and control measures, incident reporting to regulators within strict timelines (major incidents within 4 hours), digital operational resilience testing including threat-led penetration testing (TLPT), third-party ICT service provider oversight with contractual arrangements and exit strategies, and information sharing arrangements on cyber threats and vulnerabilities.
        </p>
        
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <h3 className="text-xl font-serif font-medium mb-4">References & Sources</h3>
          <ol className="text-sm text-zinc-600 dark:text-zinc-400 space-y-2 list-decimal list-inside">
            <li><a href="https://www.bankofengland.co.uk/prudential-regulation/publication/2021/march/operational-resilience-impact-tolerances-for-important-business-services-ps" target="_blank" rel="noopener noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:underline">Bank of England - Policy Statement PS21/3 on Operational Resilience</a></li>
            <li><a href="https://www.fca.org.uk/publication/policy/ps21-3.pdf" target="_blank" rel="noopener noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:underline">FCA Policy Statement PS21/3 - Operational Resilience</a></li>
            <li><a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022R2554" target="_blank" rel="noopener noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:underline">EU Regulation 2022/2554 - Digital Operational Resilience Act (DORA)</a></li>
          </ol>
          <p className="text-xs text-zinc-500 dark:text-zinc-600 mt-4 italic">
            Last updated: November 22, 2024. Information based on UK PRA/FCA regulations and EU DORA requirements.
          </p>
        </div>
      </>
    )
  }
];