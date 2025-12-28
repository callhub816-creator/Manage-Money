import React, { useState } from 'react';
import { loanAffiliateLinks } from '../data/loanAffiliateLinks';
import { LeadCaptureModal } from '../../../shared/components';

interface LoanItemProps {
  name: string;
  provider: string;
  loanType: string;
  interestRate: string;
  processingFee: string;
  maxAmount: string;
  approvalTime: string;
  keyFeatures: string[];
  eligibility: {
    minAge: number;
    minIncome: string;
    minCIBIL: number;
  };
  rating: number;
  reviews: number;
}

const LoanItem: React.FC<LoanItemProps> = ({
  name,
  provider,
  loanType,
  interestRate,
  processingFee,
  maxAmount,
  approvalTime,
  keyFeatures,
  eligibility,
  rating,
  reviews,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Derive slug from name (consistent with loanAffiliateLinks.ts)
  const slug = name.toLowerCase().replace(/\s+/g, '-');
  const affiliateConfig = loanAffiliateLinks[slug];
  const isEnabled = affiliateConfig?.enabled || false;
  const affiliateUrl = affiliateConfig?.url || "";

  // Safety check & warning
  if (isEnabled && !affiliateUrl) {
    console.warn(`Affiliate link enabled for loan ${name} (${slug}) but URL is missing!`);
  }

  const handleApplyClick = () => {
    if (isEnabled && affiliateUrl) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Loan Header */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 flex items-start justify-between">
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-slate-900">{name}</h3>
          <p className="text-slate-500 font-medium">{provider}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 mb-1">
            <span className="text-yellow-400">★</span>
            <span className="font-bold text-slate-900">{rating}</span>
            <span className="text-xs text-slate-500">({reviews}+)</span>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-200">
          <div>
            <span className="text-xs uppercase text-slate-400 block mb-1 font-semibold">
              Interest Rate
            </span>
            <span className="font-bold text-slate-900 text-lg">{interestRate}</span>
          </div>
          <div>
            <span className="text-xs uppercase text-slate-400 block mb-1 font-semibold">
              Processing Fee
            </span>
            <span className="font-bold text-slate-900">{processingFee}</span>
          </div>
          <div>
            <span className="text-xs uppercase text-slate-400 block mb-1 font-semibold">
              Max Amount
            </span>
            <span className="font-bold text-slate-900">{maxAmount}</span>
          </div>
          <div>
            <span className="text-xs uppercase text-slate-400 block mb-1 font-semibold">
              Approval Time
            </span>
            <span className="font-bold text-slate-900">{approvalTime}</span>
          </div>
        </div>

        {/* Key Features */}
        <h4 className="font-semibold text-slate-900 mb-3 text-sm uppercase text-slate-500">
          Key Benefits
        </h4>
        <ul className="space-y-2 mb-6">
          {keyFeatures.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              {feature.startsWith('⚠️') ? (
                <>
                  <span className="text-amber-600 font-bold mt-0.5">⚠️</span>
                  <span className="text-amber-700 text-xs font-bold leading-tight">{feature.replace('⚠️', '').trim()}</span>
                </>
              ) : (
                <>
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-slate-700 text-sm">{feature}</span>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Eligibility */}
        <div className="bg-slate-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold text-slate-900 mb-3 text-sm">Quick Eligibility</h4>
          <div className="text-sm text-slate-700 space-y-1">
            <p>Age: {eligibility.minAge}+ years</p>
            <p>Min Income: {eligibility.minIncome}</p>
            <p>Min CIBIL: {eligibility.minCIBIL}+</p>
          </div>
        </div>

        {/* CTA */}
        {isEnabled && affiliateUrl ? (
          <>
            <button
              onClick={handleApplyClick}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-md active:translate-y-0.5"
            >
              Apply Now
            </button>
            <p className="text-[10px] text-slate-400 mt-2 text-center leading-tight">
              Approval subject to lender verification. Affiliate disclosure applies.
            </p>
          </>
        ) : (
          <div className="space-y-3">
            <button
              disabled
              className="w-full bg-slate-200 text-slate-500 py-3 rounded-lg font-bold cursor-not-allowed transition-colors"
            >
              Coming Soon
            </button>
            <p className="text-[10px] text-slate-400 text-center leading-tight italic">
              Check back soon for available offers.
            </p>
          </div>
        )}

        {isEnabled && affiliateUrl && (
          <LeadCaptureModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            productType={`${name} (${provider})`}
            affiliateUrl={affiliateUrl}
          />
        )}
      </div>

      {/* Disclaimer Note */}
      <div className="bg-slate-50 px-6 py-4 border-t border-slate-200">
        <p className="text-[10px] text-slate-500 leading-tight">
          Eligibility, interest rates, and approval timelines depend on lender verification. Funds typically credited after final document approval.
        </p>
      </div>
    </div>
  );
};

export default LoanItem;
