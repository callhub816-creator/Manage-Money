import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreditCardCTA from './CreditCardCTA';
import IllustratedCard from './IllustratedCard';

interface CardGridItemProps {
  slug: string;
  name: string;
  bank: string;
  annualFee: string;
  keyBenefits: string[];
  editorialRating: number;
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
  editorialRating,
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

  const isEntryLevel = minIncome === 'Entry-level';

  return (
    <div
      onClick={handleCardClick}
      className="bg-white border border-slate-100 rounded-xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] hover:border-blue-200 transition-all duration-300 cursor-pointer overflow-hidden group relative"
    >
      {/* Card Icon Container */}
      <div className="relative h-56 bg-slate-50 overflow-hidden flex flex-col items-center justify-center p-8 transition-colors duration-300">
        <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
          <IllustratedCard bank={bank} name={name} />
        </div>
        <p className="text-[10px] text-slate-400 mt-4 text-center leading-tight px-4 transition-opacity">
          Illustrative card design. Actual card appearance, features, and benefits are determined by the issuing bank.
        </p>
      </div>

      {/* Card Content */}
      <div className="p-5 md:p-6">
        <p className="text-[9px] text-slate-400 mb-4 block md:hidden italic leading-tight">
          *Illustrative design. Actual card appearance varies.
        </p>
        {isEntryLevel && (
          <div className="mb-3 space-y-1">
            <div className="inline-block bg-slate-100 text-slate-600 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider border border-slate-200">
              Entry-level card
            </div>
            <div className="text-[10px] text-orange-600 font-bold italic leading-tight">
              *Approval depends on bank verification.
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
                  className={`text-sm ${i < Math.floor(editorialRating) ? 'text-slate-400' : 'text-slate-200'}`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-slate-600 font-bold uppercase tracking-tight">
              Editorial Score: {editorialRating}/5
            </span>
          </div>
          <p className="text-[10px] text-slate-400 mt-1 italic">
            *Independent assessment based on product benefits.
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
