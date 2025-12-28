
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../shared/components/SEO';

const Home: React.FC = () => {
  const quickLinks = [
    { name: "Credit Cards", path: "/credit-cards/best-credit-cards", icon: "💳", color: "bg-blue-100 text-blue-700" },
    { name: "Personal Loans", path: "/loans/quick-disbursal-loan", icon: "💰", color: "bg-green-100 text-green-700" },
    { name: "Insurance", path: "/insurance", icon: "🛡️", color: "bg-purple-100 text-purple-700" },
    { name: "CIBIL Score", path: "/cibil-score", icon: "📊", color: "bg-orange-100 text-orange-700" },
    { name: "EMI Calculator", path: "/tools#emi-calculator", icon: "🧮", color: "bg-slate-100 text-slate-700" },
  ];

  return (
    <div>
      <SEO
        title="Manage Your Money Smartly in India"
        description="Compare best credit cards, fast personal loans, and insurance plans in India. Get expert advice on CIBIL score and use our financial calculators."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Find Your Best Financial Match</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Compare credit cards that earn you rewards, loans with fast approval, and insurance plans that protect your family—all in one place.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-6 text-blue-100 text-sm md:text-base mb-10">
              <div className="flex items-center gap-2">
                <span className="text-lg">✓</span>
                <span>100% Free</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">✓</span>
                <span>No Spam</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">✓</span>
                <span>Unbiased Data</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">🛡️</span>
                <span>RBI-compliant Lenders Only</span>
              </div>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-2xl mx-auto">
            <Link to="/credit-cards/best-credit-cards" className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg text-center">
              Check Best Credit Cards
            </Link>
            <Link to="/loans/quick-disbursal-loan" className="bg-blue-500 border-2 border-blue-400 px-8 py-4 rounded-lg font-bold hover:bg-blue-400 transition-colors shadow-lg text-center">
              Explore Fast Loans
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Choose Your Financial Goal</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">Start comparing products that help you earn more, save more, and protect more</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${link.color} p-6 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform shadow-sm`}
              >
                <span className="text-4xl mb-3">{link.icon}</span>
                <span className="font-semibold text-center text-sm md:text-base">{link.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Smart Indians Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-blue-600">📊 Data-Driven Comparisons</h3>
              <p className="text-slate-600">We analyze 500+ financial products across interest rates, fees, rewards, and eligibility criteria. Get the real picture, not marketing hype.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-green-600">🔒 Unbiased & Transparent</h3>
              <p className="text-slate-600">No hidden deals. No affiliate bias. Our job is helping you save money and make informed decisions—not pushing a product.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-purple-600">🧮 Smart Tools (Free)</h3>
              <p className="text-slate-600">EMI Calculator, SIP Planner, FD Calculator—all free, no signup required. See real numbers before you apply.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories Links */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Most Searched By Indians</h2>
          <p className="text-center text-slate-600 mb-8">Quick access to popular comparisons</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/credit-cards/lifetime-free-cards" className="px-4 py-2 bg-slate-100 hover:bg-blue-100 rounded-full text-sm font-medium">Lifetime Free Cards</Link>
            <Link to="/loans/low-cibil-loan" className="px-4 py-2 bg-slate-100 hover:bg-green-100 rounded-full text-sm font-medium">Low CIBIL Loans</Link>
            <Link to="/insurance" className="px-4 py-2 bg-slate-100 hover:bg-purple-100 rounded-full text-sm font-medium">Top Health Plans</Link>
            <Link to="/tools#sip-calculator" className="px-4 py-2 bg-slate-100 hover:bg-blue-100 rounded-full text-sm font-medium">SIP Planner</Link>
          </div>
        </div>
      </section>

      {/* FAQ / Additional Trust */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Your Questions, Answered</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3">Are these comparisons really free?</h3>
              <p className="text-slate-600 text-sm">Yes. 100% free. No credit card required. No hidden charges. You can browse, compare, and apply directly from here.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3">Will you call me or spam me?</h3>
              <p className="text-slate-600 text-sm">Never. We don't collect phone numbers or emails unless you fill a form. When you apply to a product, only that bank will contact you.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3">How do you choose which products to feature?</h3>
              <p className="text-slate-600 text-sm">We compare based on RBI-compliant data: interest rates, fees, eligibility, and real user benefits. No fake reviews, no paid rankings.</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-3">Can I apply directly?</h3>
              <p className="text-slate-600 text-sm">Yes. Once you find a product you like, click "Apply" and you'll be directed to the bank's official application page. Fast and safe.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
