import React from 'react';
import SEO from '../../../shared/components/SEO';
import { INSURANCE_CONFIGS } from '../data/insurance';
import { insuranceAffiliateLinks } from '../data/insuranceAffiliateLinks';
import { LeadCaptureModal } from '../../../shared/components';

export const InsuranceList: React.FC<{ category: string }> = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const data = INSURANCE_CONFIGS[category as keyof typeof INSURANCE_CONFIGS] || INSURANCE_CONFIGS.health;

  const affiliateConfig = insuranceAffiliateLinks[category];
  const isEnabled = affiliateConfig?.enabled || false;
  const affiliateUrl = affiliateConfig?.url || "";

  // Safety check & warning
  if (isEnabled && !affiliateUrl) {
    console.warn(`Affiliate link enabled for insurance category ${category} but URL is missing!`);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO title={data.seoTitle} description={data.desc} />
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 md:p-12">
        <h1 className="text-3xl font-bold mb-6 text-slate-900">{data.h1}</h1>
        <p className="text-slate-600 text-lg mb-8 leading-relaxed">{data.desc}</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 className="font-bold text-blue-900 mb-2">Why Compare?</h3>
            <ul className="text-blue-800 text-sm space-y-2">
              <li>• Save up to 50% on premiums</li>
              <li>• Access to 5000+ Cashless Hospitals</li>
              <li>• Quick 30-minute claim settlements</li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-xl border border-green-100">
            <h3 className="font-bold text-green-900 mb-2">Our Promise</h3>
            <ul className="text-green-800 text-sm space-y-2">
              <li>• Unbiased expert advice</li>
              <li>• Dedicated claim assistance</li>
              <li>• No Spam guarantee</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          {isEnabled && affiliateUrl ? (
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 text-white text-lg px-10 py-4 rounded-xl font-bold hover:bg-blue-700 shadow-lg transition-transform hover:-translate-y-1"
            >
              View Plans & Check Prices
            </button>
          ) : (
            <button
              disabled
              className="bg-slate-200 text-slate-500 text-lg px-10 py-4 rounded-xl font-bold cursor-not-allowed"
            >
              Coming Soon
            </button>
          )}

          <p className="text-[10px] text-slate-400 mt-4 text-center leading-tight">
            Eligibility, premium rates, and approval depend on your profile. Affiliate disclosure applies.
          </p>
          <div className="mt-4 flex flex-col gap-1 text-[10px] text-slate-500 items-center opacity-80">
            <p className="font-bold flex items-center gap-1">🛡️ RBI-compliant Lenders Only</p>
            <p className="italic">*Approval subject to lender verification</p>
          </div>

          {isEnabled && affiliateUrl && (
            <LeadCaptureModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              productType={`${data.h1}`}
              affiliateUrl={affiliateUrl}
            />
          )}
          <p className="mt-4 text-xs text-slate-400 italic">Trusted by over 1 Million Indians.</p>
        </div>
      </div>
    </div>
  );
};

export default InsuranceList;
