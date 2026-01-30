import { memo } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * CorporateSchema Component
 * 
 * Injects advanced JSON-LD structured data using @graph structure
 * for LLM crawlers and knowledge graph optimization.
 * 
 * Implements:
 * - Organization entity with full corporate details
 * - Person entities (key personnel) with knowsAbout properties
 * - Relationships between entities (worksFor, alumniOf)
 * - Service offerings and expertise areas
 */
const CorporateSchema = memo(() => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization Node - Primary Entity
      {
        "@type": "ProfessionalService",
        "@id": "https://www.boruconsulting.com/#organization",
        "name": "Boru Consulting",
        "alternateName": "Boru Consulting Group",
        "legalName": "Boru Global (UK) Limited",
        "url": "https://www.boruconsulting.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.boruconsulting.com/#logo",
          "url": "https://www.boruconsulting.com/logo.png",
          "width": 250,
          "height": 60
        },
        "image": {
          "@id": "https://www.boruconsulting.com/#logo"
        },
        "description": "Global entity management, cross-border tax advisory, and private wealth services across UK, UAE, and Ireland. Specializing in corporate structuring, regulatory compliance, and international business expansion for 500+ entities.",
        "foundingDate": "2022",
        "slogan": "Navigating international markets with clarity",
        "knowsAbout": [
          "Cross-Border Tax Planning",
          "Corporate Governance",
          "UAE Free Zones",
          "UK Holding Companies",
          "Transfer Pricing",
          "AML/KYC Compliance",
          "Trust Services",
          "Entity Management",
          "Regulatory Compliance",
          "Private Wealth Management",
          "Business Expansion",
          "Operational Resilience",
          "UAE Corporate Tax Regime",
          "Substantial Shareholding Exemption",
          "OECD Guidelines",
          "Economic Crime Act Compliance"
        ],
        "areaServed": [
          {
            "@type": "Country",
            "name": "United Kingdom",
            "@id": "https://www.wikidata.org/wiki/Q145"
          },
          {
            "@type": "Country",
            "name": "United Arab Emirates",
            "@id": "https://www.wikidata.org/wiki/Q878"
          },
          {
            "@type": "Country",
            "name": "Ireland",
            "@id": "https://www.wikidata.org/wiki/Q27"
          }
        ],
        "serviceType": [
          "Global Entity Setup",
          "Accounting & Tax Advisory",
          "Risk & Governance",
          "Regulatory Compliance",
          "Private Wealth Management",
          "Business Expansion Strategy"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Boru Consulting Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Global Entity Setup",
                "description": "Incorporation, corporate secretarial, and local directorship services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cross-Border Tax Advisory",
                "description": "Tax planning, transfer pricing, and OECD compliance"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Regulatory Compliance",
                "description": "AML/KYC, licensing, and statutory reporting"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Private Wealth Services",
                "description": "Trust services, estate planning, and asset protection"
              }
            }
          ]
        },
        "sameAs": [
          "https://www.linkedin.com/company/boru-consulting/",
          "https://find-and-update.company-information.service.gov.uk/company/14435343"
        ],
        "address": [
          {
            "@type": "PostalAddress",
            "@id": "https://www.boruconsulting.com/#address-uk",
            "addressCountry": "GB",
            "addressRegion": "England",
            "addressLocality": "London",
            "name": "UK Headquarters"
          },
          {
            "@type": "PostalAddress",
            "@id": "https://www.boruconsulting.com/#address-uae",
            "addressCountry": "AE",
            "addressRegion": "Dubai",
            "name": "UAE Office"
          }
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+44-20-341-121-48",
            "contactType": "Customer Service",
            "areaServed": "GB",
            "availableLanguage": ["English"],
            "email": "rlm@boru-consulting.com"
          },
          {
            "@type": "ContactPoint",
            "telephone": "+971-50-435-4530",
            "contactType": "Customer Service",
            "areaServed": "AE",
            "availableLanguage": ["English", "Arabic"],
            "email": "jl@boru-consulting.com"
          }
        ],
        "identifier": [
          {
            "@type": "PropertyValue",
            "propertyID": "UK Company Number",
            "value": "14435343"
          },
          {
            "@type": "PropertyValue",
            "propertyID": "UAE Company Number",
            "value": "2415755"
          }
        ],
        "memberOf": [
          {
            "@type": "Organization",
            "name": "HMRC AML Supervised Entities"
          },
          {
            "@type": "Organization",
            "name": "Companies House Authorised Corporate Service Providers"
          }
        ],
        "employee": [
          {
            "@id": "https://www.boruconsulting.com/#person-managing-partner"
          }
        ]
      },
      
      // Person Node - Managing Partner (Example)
      {
        "@type": "Person",
        "@id": "https://www.boruconsulting.com/#person-managing-partner",
        "name": "Managing Partner",
        "jobTitle": "Managing Partner",
        "worksFor": {
          "@id": "https://www.boruconsulting.com/#organization"
        },
        "knowsAbout": [
          "Cross-Border Tax Strategy",
          "Corporate Governance Frameworks",
          "UAE Free Zone Regulations",
          "UK Holding Company Structures",
          "Transfer Pricing Documentation",
          "AML/KYC Compliance Procedures",
          "Trust and Estate Planning",
          "International Business Expansion",
          "Regulatory Risk Management",
          "Operational Resilience Frameworks",
          "OECD Guidelines Implementation",
          "Multi-Jurisdictional Entity Management"
        ],
        "alumniOf": {
          "@type": "EducationalOrganization",
          "name": "University of London",
          "sameAs": "https://www.wikidata.org/wiki/Q170027"
        },
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Professional Qualification",
            "name": "Chartered Accountant"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Professional Qualification",
            "name": "Tax Advisor"
          }
        ],
        "memberOf": {
          "@id": "https://www.boruconsulting.com/#organization"
        }
      },

      // WebSite Node
      {
        "@type": "WebSite",
        "@id": "https://www.boruconsulting.com/#website",
        "url": "https://www.boruconsulting.com",
        "name": "Boru Consulting",
        "description": "Global entity management and private wealth services",
        "publisher": {
          "@id": "https://www.boruconsulting.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.boruconsulting.com/blog?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        },
        "inLanguage": "en-GB"
      },

      // WebPage Node - Homepage
      {
        "@type": "WebPage",
        "@id": "https://www.boruconsulting.com/#webpage",
        "url": "https://www.boruconsulting.com",
        "name": "Boru Consulting | Global Entity Management & Private Wealth",
        "isPartOf": {
          "@id": "https://www.boruconsulting.com/#website"
        },
        "about": {
          "@id": "https://www.boruconsulting.com/#organization"
        },
        "description": "Cross-border entity structuring, tax advisory, and private wealth services across UK, UAE, and Ireland. 500+ entities structured.",
        "inLanguage": "en-GB"
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
});

CorporateSchema.displayName = 'CorporateSchema';

export default CorporateSchema;
