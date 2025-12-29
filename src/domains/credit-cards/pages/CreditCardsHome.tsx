import React, { useState } from 'react';
import SEO from '../../../shared/components/SEO';
import { CreditCardFilters } from '../components/CreditCardFilters';
import CardGridItem from '../components/CardGridItem';
import FAQSection from '../../../shared/components/FAQSection';
import { CREDIT_CARDS, CREDIT_CARD_FILTERS, CREDIT_CARD_FAQ } from '../data/creditCards';

export const CreditCardList: React.FC<{ category?: string }> = ({ category = 'best' }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredCards =
    activeFilter === 'all'
      ? CREDIT_CARDS
      : activeFilter === 'Low Income'
        ? CREDIT_CARDS.filter((card) => {
          const rawIncome = card.eligibility.minIncome.replace(/[^0-9]/g, '');
          const income = rawIncome ? parseInt(rawIncome) : 0;
          return income <= 15000;
        })
        : CREDIT_CARDS.filter((card) => card.category === activeFilter);

  const pageData: Record<
    string,
    { h1: string; seoTitle: string; desc: string }
  > = {
    best: {
      h1: 'Best Credit Cards in India (2025)',
      seoTitle: 'Best Credit Cards in India 2025 - Compare & Apply',
      desc: 'Compare top-rated credit cards with rewards, cashback, and travel benefits. Find the best card for your lifestyle and apply online.',
    },
    'lifetime-free': {
      h1: 'Lifetime Free Credit Cards in India',
      seoTitle: 'Best Lifetime Free Credit Cards in India - No Annual Fee',
      desc: 'Compare credit cards with zero annual fee for life. Earn rewards without paying anything. Perfect for beginners and everyday spenders.',
    },
    salary: {
      h1: 'Best Credit Cards for Salaried Professionals',
      seoTitle: 'Best Credit Cards for Salaried Employees in India',
      desc: 'Credit cards designed for your salary bracket with high spending limits and exclusive perks. Compare cards by income level.',
    },
    student: {
      h1: 'Best Credit Cards for Students & Beginners',
      seoTitle: 'Credit Cards for Students & First-Time Earners in India',
      desc: 'Start your credit journey with beginner-friendly cards. Zero income cards, secured cards, and student specials.',
    },
  };

  const page = pageData[category] || pageData['best'];

  return (
    <div>
      <SEO title={page.seoTitle} description={page.desc} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Best Credit Cards in India (2025) – Compare Cashback, Lifetime Free & Travel Cards
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl mb-8">
            Compare top credit cards from leading Indian banks based on fees, rewards, and eligibility.
          </p>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors shadow-lg">
            Check Best Cards
          </button>
          <div className="mt-6 flex flex-col gap-2 text-xs text-blue-100 opacity-90">
            <p className="flex items-center gap-1.5 font-bold">
              <span className="text-sm">🛡️</span> Cards issued by RBI-regulated banks
            </p>
            <p className="italic">
              *Approval subject to lender verification
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-center mb-8 text-slate-900">
            Filter by Type
          </h2>
          <CreditCardFilters
            filters={CREDIT_CARD_FILTERS}
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <p className="text-xs text-slate-500 text-center mt-4 italic">
            Low income cards are designed for first-time or entry-level applicants. Eligibility criteria vary by bank and approval is not guaranteed.
          </p>
        </div>
      </section>

      {/* Results Count & Advisory */}
      <section className="bg-slate-50 py-6 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeFilter === 'Low Income' && (
            <div className="mb-6 bg-blue-50 border border-blue-100 p-4 rounded-lg">
              <p className="text-blue-800 text-sm font-medium">
                Low-income cards usually offer basic rewards and may have annual fees. Improving your credit score can unlock better options.
              </p>
              <p className="text-blue-600 text-[10px] mt-1 font-bold italic">
                *Low income cards may have higher fees and limited benefits.
              </p>
            </div>
          )}
          <p className="text-slate-600 font-medium">
            {activeFilter === 'Low Income'
              ? `Showing ${filteredCards.length} entry-level credit cards suitable for beginners`
              : `Showing ${filteredCards.length} credit cards${activeFilter !== 'all' ? ` matching "${activeFilter}"` : ''}`
            }
          </p>
        </div>
      </section>

      {/* Card Grid */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCards.map((card) => (
              <CardGridItem
                key={card.slug}
                slug={card.slug}
                name={card.name}
                bank={card.bank}
                annualFee={card.annualFee}
                keyBenefits={card.keyBenefits}
                editorialRating={card.editorialRating}
                category={card.category}
                minIncome={card.eligibility.minIncome}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection items={CREDIT_CARD_FAQ} />
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold mb-6 text-slate-900">
            Affiliate Disclosure & Disclaimer
          </h3>
          <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
            <p>
              <strong>How We Make Money:</strong> ManageMoney earns referral commissions from banks
              when you apply through our links. This commission does not increase the cost of your
              application—you pay the same whether you apply directly or through us.
            </p>
            <p>
              <strong>No Bias:</strong> We compare products based on objective criteria (interest rates,
              fees, eligibility, benefits) and user ratings. Our recommendations are not influenced by
              commission amounts.
            </p>
            <p>
              <strong>Risk Disclosure:</strong> Credit products carry inherent financial risks. Higher
              credit limits and lower interest rates may encourage overspending. Ensure you borrow only
              what you can repay. Late payments attract penalties and negatively impact your CIBIL score.
            </p>
            <p>
              <strong>Eligibility:</strong> All cards listed require standard KYC documentation as per RBI regulations.
              Approval is subject to the bank's underwriting criteria. The information provided is general
              guidance and should not be considered financial advice. Consult a financial advisor for
              personalized recommendations.
            </p>
            <p>
              <strong>Data Accuracy:</strong> Information about credit cards is sourced from official
              bank websites and updated regularly. However, terms and benefits may change. Always verify
              current terms on the bank's official website before applying.
            </p>
            <p className="text-xs text-slate-500 italic">
              This page was last updated on December 28, 2025. All comparisons are based on accurate
              market data available at the time of publication.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreditCardList;
