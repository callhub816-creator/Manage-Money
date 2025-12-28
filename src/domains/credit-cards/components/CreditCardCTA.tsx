import React from 'react';
import { creditCardAffiliateLinks } from '../data/affiliateLinks';
import { LeadCaptureModal } from '../../../shared/components';

interface CreditCardCTAProps {
  cardSlug: string;
  cardName: string;
}

/**
 * Credit Card CTA Component
 *
 * Renders context-aware call-to-action button for credit card applications.
 * - If affiliate link enabled in config: opens lead capture modal before redirecting
 * - Otherwise: renders disabled "Coming Soon" button
 */
const CreditCardCTA: React.FC<CreditCardCTAProps> = ({ cardSlug, cardName }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const affiliateConfig = creditCardAffiliateLinks[cardSlug];
  const isEnabled = affiliateConfig?.enabled || false;
  const affiliateUrl = affiliateConfig?.url || "";

  // Safety check & warning
  if (isEnabled && !affiliateUrl) {
    console.warn(`Affiliate link enabled for ${cardSlug} but URL is missing!`);
  }

  if (isEnabled && affiliateUrl) {
    return (
      <>
        <button
          onClick={() => setIsModalOpen(true)}
          className="block w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors text-center shadow-md active:translate-y-0.5"
        >
          Apply Now
        </button>

        <p className="text-[10px] text-slate-400 mt-2 text-center leading-tight">
          Approval subject to lender verification. Affiliate disclosure applies.
        </p>

        <LeadCaptureModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          productType={cardName}
          affiliateUrl={affiliateUrl}
        />
      </>
    );
  }

  return (
    <button
      disabled
      className="w-full bg-slate-200 text-slate-500 py-3 rounded-lg font-bold cursor-not-allowed transition-colors"
      title={`Coming soon for ${cardName}`}
    >
      Coming Soon
    </button>
  );
};

export default CreditCardCTA;
