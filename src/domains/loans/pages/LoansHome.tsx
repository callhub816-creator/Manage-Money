import React, { useState } from 'react';
import SEO from '../../../shared/components/SEO';
import { ProductFilter } from '../../../shared/components/ProductFilter';
import LoanItem from '../components/LoanItem';
import EligibilityChecker from '../components/EligibilityChecker';
import ComparisonTable from '../components/ComparisonTable';
import FAQSection from '../../../shared/components/FAQSection';
import { LOAN_TYPES, LOANS_DATA, LOANS_COMPARISON_DATA, LOANS_FAQ } from '../data/loans';

export const LoanList: React.FC<{ category?: string }> = ({ category = 'quick' }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredLoans =
    activeFilter === 'all'
      ? LOANS_DATA
      : LOANS_DATA.filter((loan) => loan.category === activeFilter);

  const pageData: Record<
    string,
    { h1: string; seoTitle: string; desc: string }
  > = {
    quick: {
      h1: 'Personal Loans with Efficient Approval',
      seoTitle: 'Personal Loans Online - Compare & Apply Today',
      desc: 'Compare personal loans up to 50 lakhs with efficient online processes. Minimal documentation and digital verification options.',
    },
    'low-cibil': {
      h1: 'Personal Loans for Low CIBIL Score',
      seoTitle: 'Personal Loans for Low CIBIL Score - Easy Approval',
      desc: 'Apply for personal loans even with CIBIL score below 600. Fast approval, higher interest rates, flexible terms.',
    },
    business: {
      h1: 'Business Loans for Self-Employed',
      seoTitle: 'Business Loans for Self-Employed - Online Process',
      desc: 'Unsecured business loans for entrepreneurs. Fast approval, flexible terms, up to 50 lakhs.',
    },
  };

  const page = pageData[category] || pageData['quick'];

  return (
    <div>
      <SEO title={page.seoTitle} description={page.desc} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-700 to-emerald-800 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{page.h1}</h1>
          <p className="text-lg text-green-100 max-w-2xl mb-8">{page.desc}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-green-700 px-8 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors shadow-lg">
              Check Eligibility
            </button>
            <button className="bg-green-600 border-2 border-green-400 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-500 transition-colors shadow-lg">
              Compare Loans
            </button>
          </div>
          <div className="mt-6 flex flex-col gap-2 text-xs text-green-100 opacity-90">
            <p className="flex items-center gap-1.5 font-bold">
              <span className="text-sm">🛡️</span> Cards issued by RBI-regulated banks
            </p>
            <p className="italic">
              *Approval subject to lender verification
            </p>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white py-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center text-sm">
            <div>
              <p className="font-bold text-slate-900">50,000+</p>
              <p className="text-slate-600">Loans Disbursed</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">24 Hours</p>
              <p className="text-slate-600">Max Processing</p>
            </div>
            <div>
              <p className="font-bold text-slate-900">Fully</p>
              <p className="text-slate-600">Online Options</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Checker */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Step 1: Check Your Eligibility</h2>
          <EligibilityChecker />
        </div>
      </section>

      {/* Loan Types Filter */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-center mb-8 text-slate-900">
            Filter by Loan Type
          </h2>
          <ProductFilter
            filters={LOAN_TYPES}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
      </section>

      {/* Results */}
      <section className="bg-slate-50 py-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-600">
            Showing {filteredLoans.length} loans{' '}
            {activeFilter !== 'all' && `in "${activeFilter}" category`}
          </p>
        </div>
      </section>

      {/* Loan Grid / List */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Global RBI Disclaimer */}
          <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-12 rounded-r-lg shadow-sm">
            <h3 className="text-blue-900 font-bold flex items-center gap-2 mb-2">
              <span>🔒</span> GLOBAL RBI DISCLAIMER
            </h3>
            <p className="text-blue-800 text-sm leading-relaxed">
              Manage Money is not a lender. We help users compare personal loan offers from RBI-regulated banks and NBFCs. Final loan approval, interest rate, tenure, and amount are decided solely by the lender based on eligibility criteria.
            </p>
          </div>

          {/* Main Section: Bank Loans */}
          {(activeFilter === 'all' || activeFilter === 'Bank Loan') && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">🥇</span>
                Personal Loans (Bank & Trusted NBFCs)
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredLoans
                  .filter((loan) => loan.category === 'Bank Loan')
                  .map((loan, idx) => (
                    <LoanItem key={idx} {...loan} />
                  ))}
              </div>
            </div>
          )}

          {/* Secondary Section: Digital Loans */}
          {(activeFilter === 'all' || activeFilter === 'Digital Loan') && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                <span className="bg-amber-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">💡</span>
                Digital / Alternative Credit Loans (Secondary Section)
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredLoans
                  .filter((loan) => loan.category === 'Digital Loan')
                  .map((loan, idx) => (
                    <LoanItem key={idx} {...loan} />
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Compare Loan Types Side-by-Side</h2>
          <ComparisonTable columns={LOANS_COMPARISON_DATA[0] as string[]} rows={LOANS_COMPARISON_DATA.slice(1)} />
        </div>
      </section>

      {/* Why Choose Personal Loans */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Personal Loans?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold mb-4 text-green-600">No Collateral</h3>
              <p className="text-slate-700">
                Borrow without pledging property or assets. Unsecured loans for individuals.
              </p>
              <p className="text-[10px] text-slate-400 mt-2 font-medium italic">
                *Approval timelines depend on lender verification
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold mb-4 text-blue-600">Flexible Use</h3>
              <p className="text-slate-700">
                Use the loan for education, medical, home renovation, wedding, or any purpose.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-bold mb-4 text-purple-600">Build Credit</h3>
              <p className="text-slate-700">
                Regular repayment improves your CIBIL score and credit history over time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection items={LOANS_FAQ} />
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-500 font-medium tracking-tight">
            Affiliate disclosure applies. This is not financial advice.
            Eligibility depends on lender verification and credit profile.
          </p>
          <p className="text-[10px] text-slate-400 mt-2">
            Updated: December 28, 2025
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoanList;
