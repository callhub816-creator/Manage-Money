import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../../../shared/components/SEO';
import CreditCardCTA from '../components/CreditCardCTA';
import { CREDIT_CARDS } from '../data/creditCards';

/**
 * CardDetailPage Component
 *
 * Generic detail page for any credit card using slug-based routing.
 * Dynamically loads card data from creditCards.ts based on route parameter.
 * 
 * Route: /credit-cards/:slug
 * Example: /credit-cards/hdfc-bank-millennia
 * 
 * Features:
 * - SEO optimization with dynamic meta tags
 * - Card image with graceful fallback
 * - Affiliate-ready CTA component
 * - Eligibility criteria display
 * - Benefits list
 * - Application process steps
 * - FAQ section
 * - Mobile-first responsive design
 */

const CardDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find card data by slug
  const card = CREDIT_CARDS.find((c) => c.slug === slug);

  if (!card) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Card Not Found</h1>
          <p className="text-slate-600 mb-8">
            The credit card you're looking for doesn't exist or has been removed.
          </p>
          <a
            href="/credit-cards/best-credit-cards"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Credit Cards
          </a>
        </div>
      </div>
    );
  }

  // Generate SEO description
  const seoDescription = `Explore ${card.name} from ${card.bank}. Annual fee: ${card.annualFee}. Benefits: ${card.keyBenefits.slice(0, 2).join(', ')}. Min income: ${card.eligibility.minIncome}. Check eligibility and apply now!`;

  return (
    <>
      <SEO
        title={`${card.name} - Credit Card Details & Review`}
        description={seoDescription}
        keywords={`${card.name}, ${card.bank}, credit card, cashback, benefits, eligibility`}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Link */}
          <div className="mb-8">
            <a
              href="/credit-cards/best-credit-cards"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              ← Back to Credit Cards
            </a>
          </div>

          {/* Header Section */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Card Icon */}
              <div className="md:col-span-1 flex justify-center bg-slate-50 rounded-lg p-6 border border-slate-100">
                <img
                  src="/icons/credit-card.svg"
                  alt="Credit Card Icon"
                  className="w-full max-w-xs h-auto object-contain rounded-lg shadow-sm"
                />
              </div>

              {/* Card Info */}
              <div className="md:col-span-2">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                  {card.name}
                </h1>
                <p className="text-lg text-slate-600 mb-4">{card.bank}</p>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${i < Math.floor(card.rating)
                            ? 'text-yellow-400'
                            : 'text-slate-300'
                            }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="font-bold text-slate-900">{card.rating}</span>
                  </div>
                  <span className="text-slate-600">
                    {card.reviews.toLocaleString()} reviews
                  </span>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-slate-600 font-medium">Annual Fee</p>
                    <p className="text-lg font-bold text-slate-900 mt-1">
                      {card.annualFee}
                    </p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-slate-600 font-medium">Category</p>
                    <p className="text-lg font-bold text-slate-900 mt-1">
                      {card.category}
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mb-4">
                  <CreditCardCTA cardSlug={slug} cardName={card.name} />
                </div>

                <p className="text-xs text-slate-500">
                  By applying, you agree to the bank's terms and conditions. Approval
                  subject to eligibility criteria.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {card.keyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg bg-slate-50 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-600 text-white">
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-800 font-medium">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Eligibility Section */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Eligibility Criteria</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                <p className="text-sm text-slate-600 font-medium mb-2">Minimum Age</p>
                <p className="text-2xl font-bold text-slate-900">
                  {card.eligibility.minAge} Years
                </p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200">
                <p className="text-sm text-slate-600 font-medium mb-2">Minimum Income</p>
                <p className="text-2xl font-bold text-slate-900">
                  {card.eligibility.minIncome}
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
                <p className="text-sm text-slate-600 font-medium mb-2">Minimum CIBIL</p>
                <p className="text-2xl font-bold text-slate-900">
                  {card.eligibility.minCIBIL}+
                </p>
              </div>
            </div>

            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900 mb-2 font-medium">💡 Pro Tip</p>
              <p className="text-slate-700 text-sm">
                Make sure your monthly income is consistent and your CIBIL score meets the
                minimum requirement for better approval chances.
              </p>
            </div>
          </div>

          {/* Application Process */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Application Process</h2>
            <div className="space-y-4">
              {[
                {
                  step: '01',
                  title: 'Click Apply Now',
                  desc: 'Start your application through our secure link.',
                },
                {
                  step: '02',
                  title: 'Provide Details',
                  desc: 'Fill in your personal and income information.',
                },
                {
                  step: '03',
                  title: 'Verification',
                  desc: 'Bank verifies your documents (24-48 hours).',
                },
                {
                  step: '04',
                  title: 'Approval & Card',
                  desc: 'Get approval and physical card within 7-14 days.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600 text-white font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 md:p-12 text-white text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Apply?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              {card.name} from {card.bank} offers great benefits. Apply now and start earning
              rewards!
            </p>
            <div className="max-w-xs mx-auto">
              <CreditCardCTA cardSlug={slug} cardName={card.name} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetailPage;
