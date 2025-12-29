
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  React.useEffect(() => {
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'ManageMoney',
      url: 'https://managemoney.local',
      description: "India's leading platform to compare credit cards, loans, and insurance products",
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Support',
        areaServed: 'IN'
      },
      sameAs: [
        'https://www.facebook.com/managemoney',
        'https://twitter.com/managemoney',
        'https://www.linkedin.com/company/managemoney'
      ]
    };

    let script = document.querySelector('script[data-organization-schema]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-organization-schema', 'true');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaData);
  }, []);

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <img src="/logo.svg" alt="ManageMoney" className="h-7 w-auto brightness-0 invert" />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              India's leading platform to compare credit cards, loans, and insurance products. Empowering you to make smarter financial decisions.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/credit-cards/best-credit-cards" className="hover:text-blue-400">Credit Cards</Link></li>
              <li><Link to="/loans/quick-disbursal-loan" className="hover:text-blue-400">Personal Loans</Link></li>
              <li><Link to="/insurance" className="hover:text-blue-400">Insurance</Link></li>
              <li><Link to="/cibil-score" className="hover:text-blue-400">CIBIL Score</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tools#emi-calculator" className="hover:text-blue-400">EMI Calculator</Link></li>
              <li><Link to="/tools#sip-calculator" className="hover:text-blue-400">SIP Calculator</Link></li>
              <li><Link to="/tools#fd-calculator" className="hover:text-blue-400">FD Calculator</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-us" className="hover:text-blue-400">About Us</Link></li>
              <li><Link to="/contact-us" className="hover:text-blue-400">Contact Us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="hover:text-blue-400">Terms & Conditions</Link></li>
              <li><Link to="/disclaimer" className="hover:text-blue-400">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} ManageMoney India. All rights reserved.</p>
          <div className="mt-4 space-y-2 max-w-2xl mx-auto text-slate-500 italic">
            <p><strong>Affiliate Disclosure:</strong> ManageMoney is an independent comparison platform. We may receive compensation from the banks and issuers featured on this site for refers made through our links. This does not impact the cost to you.</p>
            <p>Financial products are subject to market risks and lender approval. Please read official offer documents carefully before applying. ManageMoney is not a lender or credit provider.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
