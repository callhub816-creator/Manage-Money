import React from 'react';
import CreditCardCTA from './CreditCardCTA';

interface CreditCardItemProps {
  slug: string;
  name: string;
  bank: string;
  image: string;
  annualFee: string;
  keyBenefits: string[];
  eligibility: {
    minAge: number;
    minIncome: string;
    minCIBIL: number;
  };
  category: string;
  rating: number;
  reviews: number;
}

const CreditCardItem: React.FC<CreditCardItemProps> = ({
  slug,
  name,
  bank,
  image,
  annualFee,
  keyBenefits,
  eligibility,
  rating,
  reviews,
}) => (
  <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    {/* Card Header */}
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 flex items-start justify-between">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-slate-900">{name}</h3>
        <p className="text-slate-500 font-medium">{bank}</p>
      </div>
      <div className="text-right flex flex-col items-end">
        <div className="flex items-center gap-1 mb-1">
          <span className="text-yellow-400">★</span>
          <span className="font-bold text-slate-900">{rating}</span>
          <span className="text-xs text-slate-500">({reviews}+)</span>
        </div>
        <p className="text-[10px] text-slate-400 mt-0.5">
          Ratings based on aggregated public data and user feedback.
        </p>
      </div>
    </div>

    {/* Card Image */}
    <div className="h-40 bg-slate-100 flex items-center justify-center overflow-hidden">
      <img src={image} alt={name} className="max-h-40 object-cover" />
    </div>

    {/* Key Benefits */}
    <div className="p-6">
      <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase text-slate-500">
        Key Benefits
      </h4>
      <ul className="space-y-2 mb-6">
        {keyBenefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <span className="text-green-600 font-bold mt-0.5">✓</span>
            <span className="text-slate-700 text-sm">{benefit}</span>
          </li>
        ))}
      </ul>

      {/* Annual Fee & Eligibility */}
      <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-200">
        <div>
          <span className="text-xs uppercase text-slate-400 block mb-1 font-semibold">
            Annual Fee
          </span>
          <span className="font-bold text-slate-900 text-lg">{annualFee}</span>
        </div>
        <div>
          <span className="text-xs uppercase text-slate-400 block mb-1 font-semibold">
            Min Income
          </span>
          <span className="font-bold text-slate-900">{eligibility.minIncome}</span>
        </div>
        <div className="col-span-2">
          <span className="text-xs uppercase text-slate-400 block mb-1 font-semibold">
            Requirements
          </span>
          <span className="text-sm text-slate-700">
            Age 18+ • Min CIBIL {eligibility.minCIBIL}+ • Salaried/Self-Employed
          </span>
        </div>
      </div>

      {/* CTA */}
      <CreditCardCTA cardSlug={slug} cardName={name} />
    </div>

    {/* Disclaimer Note */}
    <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
      <p className="text-xs text-slate-500">
        Approval subject to bank's eligibility criteria. Processing typically takes 5-7 business days.
      </p>
    </div>
  </div>
);

export default CreditCardItem;
