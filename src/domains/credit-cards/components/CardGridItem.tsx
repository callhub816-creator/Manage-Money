import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreditCardCTA from './CreditCardCTA';

interface CardGridItemProps {
  slug: string;
  name: string;
  bank: string;
  annualFee: string;
  keyBenefits: string[];
  rating: number;
  reviews: number;
  category: string;
  minIncome: string;
}

/**
 * CardGridItem Component
 *
 * Clickable card item for the credit cards listing page.
 * - Entire card navigates to detail page on click (except CTA)
 * - Shows image with graceful fallback
 * - Displays key highlights (first 2-3 benefits)
 * - CTA button with affiliate state
 */
const CardGridItem: React.FC<CardGridItemProps> = ({
  slug,
  name,
  bank,
  annualFee,
  keyBenefits,
  rating,
  reviews,
  category,
  minIncome,
}) => {
  const navigate = useNavigate();

  // Handle card click - navigate to detail page
  const handleCardClick = (e: React.MouseEvent) => {
    // Don't navigate if clicking on CTA button
    if ((e.target as HTMLElement).closest('[data-cta-button]')) {
      return;
    }
    navigate(`/credit-cards/${slug}`);
  };

  const isEntryLevel = parseInt(minIncome.replace(/[^0-9]/g, '')) <= 15000;

  // Muted per-bank accent color (~12-16% intensity)
  const getBankColor = (bankName: string) => {
    const b = bankName.toLowerCase();
    if (b.includes('hdfc')) return 'bg-blue-100';
    if (b.includes('axis')) return 'bg-rose-100';
    if (b.includes('sbi') || b.includes('state bank')) return 'bg-cyan-100';
    if (b.includes('idfc')) return 'bg-red-100';
    if (b.includes('au ')) return 'bg-orange-100';
    if (b.includes('icici')) return 'bg-sky-100';
    if (b.includes('kotak')) return 'bg-red-100';
    if (b.includes('amex') || b.includes('american express')) return 'bg-emerald-100';
    return 'bg-slate-100';
  };

  const bankColorClass = getBankColor(bank);

  return (
    <div
      onClick={handleCardClick}
      className="bg-white border border-slate-100 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] hover:border-blue-200 transition-all duration-300 cursor-pointer overflow-hidden group relative"
    >
      {/* Card Icon Container */}
      <div className={`relative h-48 ${bankColorClass} overflow-hidden flex items-center justify-center p-8 transition-colors duration-300`}>
        <img
          src="/icons/credit-card.svg"
          alt={`${name} - ${bank}`}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 opacity-90"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 md:p-6">
        {isEntryLevel && (
          <div className="mb-3 space-y-1">
            <div className="inline-block bg-slate-100 text-slate-600 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-slate-200">
              Entry-level card
            </div>
            <div className="text-[10px] text-orange-600 font-bold italic leading-tight">
              *May have higher interest rates and limited rewards.
            </div>
          </div>
        )}
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
            {name}
          </h3>
          <p className="text-sm text-slate-600">{bank}</p>
        </div>

        {/* Rating & Reviews */}
        <div className="flex flex-col mb-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-slate-300'}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-slate-600">
              {rating} ({reviews}+ reviews)
            </span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1">
            Ratings based on aggregated public data and user feedback.
          </p>
        </div>

        {/* Key Highlights - Show first 2-3 benefits */}
        <div className="mb-5 pb-5 border-b border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase mb-3 tracking-wide">
            Key Highlights
          </p>
          <ul className="space-y-2">
            {keyBenefits.slice(0, 3).map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                <span className="text-sm text-slate-700 line-clamp-2">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Annual Fee */}
        <div className="mb-5">
          <p className="text-xs text-slate-500 uppercase font-semibold mb-1 tracking-wide">
            Annual Fee
          </p>
          <p className="font-bold text-slate-900 text-base">{annualFee}</p>
        </div>

        {/* CTA Button - Prevent card navigation on click */}
        <div data-cta-button onClick={(e) => e.stopPropagation()}>
          <CreditCardCTA cardSlug={slug} cardName={name} />
        </div>
      </div>

      {/* Hover Indicator Badge */}
      <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1.5 text-xs font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg">
        View Details & Eligibility →
      </div>
    </div>
  );
};

export default CardGridItem;
