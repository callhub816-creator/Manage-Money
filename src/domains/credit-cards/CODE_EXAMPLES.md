// CREDIT CARDS AFFILIATE INTEGRATION - CODE EXAMPLES
// Copy-paste ready code snippets for common tasks

// ============================================================================
// EXAMPLE 1: Enable a single affiliate link
// ============================================================================

// File: src/domains/credit-cards/data/affiliateStatus.ts
// Task: Activate HDFC Bank Millennia affiliate link

export const AFFILIATE_STATUS: Record<string, AffiliateConfig> = {
  'hdfc-bank-millennia': {
    enabled: true,  // ← CHANGE: false to true
    bankName: 'HDFC Bank',
    link: 'https://affiliate.hdfc.com/millennia', // ← ADD: Full URL from bank
  },
  // ... rest of cards
};

// ============================================================================
// EXAMPLE 2: Enable multiple cards at once
// ============================================================================

export const AFFILIATE_STATUS: Record<string, AffiliateConfig> = {
  'hdfc-bank-millennia': {
    enabled: true,
    bankName: 'HDFC Bank',
    link: 'https://affiliate.hdfc.com/millennia',
  },
  'hdfc-bank-regalia': {
    enabled: true,  // ← Enabled
    bankName: 'HDFC Bank',
    link: 'https://affiliate.hdfc.com/regalia',  // ← Added
  },
  'axis-bank-ace': {
    enabled: true,  // ← Enabled
    bankName: 'Axis Bank',
    link: 'https://affiliate.axis.com/ace',  // ← Added
  },
  'sbi-cashback-card': {
    enabled: false, // Still disabled
    bankName: 'State Bank of India',
    // link: '...' // Waiting for agreement
  },
  // ... rest
};

// ============================================================================
// EXAMPLE 3: Using affiliate config in custom code
// ============================================================================

import {
  getAffiliateConfig,
  isAffiliateActive,
  getAffiliateLink,
} from '../data/affiliateStatus';

function checkCard(slug: string) {
  // Get full config
  const config = getAffiliateConfig(slug);
  console.log(config);
  // Output: { enabled: true, link: 'https://...', bankName: 'HDFC Bank' }

  // Check if active
  const isActive = isAffiliateActive(slug);
  console.log(isActive); // true or false

  // Get link (or null if disabled)
  const link = getAffiliateLink(slug);
  console.log(link); // 'https://...' or null
}

// ============================================================================
// EXAMPLE 4: Conditional rendering based on affiliate status
// ============================================================================

import React from 'react';
import { isAffiliateActive, getAffiliateLink } from '../data/affiliateStatus';

function MyCardComponent({ cardSlug, cardName }) {
  const link = getAffiliateLink(cardSlug);

  return (
    <div>
      <h3>{cardName}</h3>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Apply Now
        </a>
      ) : (
        <button disabled>Coming Soon</button>
      )}
    </div>
  );
}

// ============================================================================
// EXAMPLE 5: How CreditCardCTA component works internally
// ============================================================================

import { getAffiliateLink, getAffiliateConfig } from '../data/affiliateStatus';

interface CreditCardCTAProps {
  cardSlug: string;
  cardName: string;
}

const CreditCardCTA: React.FC<CreditCardCTAProps> = ({ cardSlug, cardName }) => {
  // Step 1: Get the affiliate link (returns null if disabled)
  const affiliateLink = getAffiliateLink(cardSlug);

  // Step 2: Get full config for tracking
  const config = getAffiliateConfig(cardSlug);

  // Step 3: Determine if active
  const isActive = !!affiliateLink;

  // Step 4: Render conditional button
  if (isActive && affiliateLink) {
    // Affiliate enabled: Show "Apply Now" link
    return (
      <a
        href={affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700"
      >
        Apply Now
      </a>
    );
  }

  // Affiliate disabled: Show "Coming Soon" button
  return (
    <button
      disabled
      className="w-full bg-slate-300 text-slate-500 py-3 rounded-lg font-bold cursor-not-allowed"
    >
      Coming Soon
    </button>
  );
};

// ============================================================================
// EXAMPLE 6: Adding tracking to affiliate clicks (Optional)
// ============================================================================

const CreditCardCTA: React.FC<CreditCardCTAProps> = ({ cardSlug, cardName }) => {
  const affiliateLink = getAffiliateLink(cardSlug);
  const config = getAffiliateConfig(cardSlug);
  const isActive = !!affiliateLink;

  // UNCOMMENT THIS SECTION when GA is configured:
  const handleAffiliateClick = (e: React.MouseEvent) => {
    // Import tracking function (see TRACKING_SETUP.md)
    // import { trackAffiliateClick } from '../../../utils/tracking';

    // trackAffiliateClick({
    //   cardSlug,
    //   cardName,
    //   bankName: config.bankName,
    //   link: affiliateLink
    // });
  };

  if (isActive && affiliateLink) {
    return (
      <a
        href={affiliateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700"
        onClick={handleAffiliateClick}
      >
        Apply Now
      </a>
    );
  }

  return (
    <button disabled className="w-full bg-slate-300 text-slate-500 py-3 rounded-lg">
      Coming Soon
    </button>
  );
};

// ============================================================================
// EXAMPLE 7: Creating new card with slug
// ============================================================================

// File: src/domains/credit-cards/data/creditCards.ts

const newCard = {
  slug: 'xyz-bank-premium', // ← IMPORTANT: Use slug format
  name: 'XYZ Bank Premium',
  bank: 'XYZ Bank',
  image: 'https://via.placeholder.com/300x180?text=XYZ+Premium',
  annualFee: '₹2,000',
  category: 'Travel',
  rating: 4.8,
  reviews: 150,
  keyBenefits: [
    'Lounge access',
    'Travel insurance',
    'Concierge service',
  ],
  eligibility: {
    minAge: 21,
    minIncome: '₹50,000/month',
    minCIBIL: 750,
  },
};

// Then add to affiliateStatus.ts:

export const AFFILIATE_STATUS: Record<string, AffiliateConfig> = {
  // ... existing cards

  'xyz-bank-premium': {
    enabled: false,
    bankName: 'XYZ Bank',
    // link: 'https://affiliate.xyz.com/premium' // Add when ready
  },
};

// ============================================================================
// EXAMPLE 8: Updating affiliate URL without enabling
// ============================================================================

// Safe to add URL before enabling:

export const AFFILIATE_STATUS: Record<string, AffiliateConfig> = {
  'new-bank-card': {
    enabled: false, // ← Still disabled
    bankName: 'New Bank',
    link: 'https://affiliate.newbank.com/card', // ← URL already added
    // Users will see "Coming Soon" until enabled: true
  },
};

// When ready:
// enabled: true, // ← Button becomes active link

// ============================================================================
// EXAMPLE 9: Batch enable cards for a bank
// ============================================================================

// All HDFC cards enabled:

export const AFFILIATE_STATUS: Record<string, AffiliateConfig> = {
  'hdfc-bank-millennia': {
    enabled: true,
    bankName: 'HDFC Bank',
    link: 'https://affiliate.hdfc.com/millennia',
  },
  'hdfc-bank-regalia': {
    enabled: true, // ← Same bank
    bankName: 'HDFC Bank',
    link: 'https://affiliate.hdfc.com/regalia',
  },
  // Mix of enabled/disabled is fine
  'axis-bank-ace': {
    enabled: false,
    bankName: 'Axis Bank',
  },
};

// ============================================================================
// EXAMPLE 10: Image asset integration
// ============================================================================

// When images are ready, update creditCards.ts:

// Before (placeholder):
export const CREDIT_CARDS = [
  {
    slug: 'hdfc-bank-millennia',
    name: 'HDFC Bank Millennia',
    image: 'https://via.placeholder.com/300x180?text=HDFC+Millennia',
    // ...
  },
];

// After (local assets):
// Method 1: Direct path
export const CREDIT_CARDS = [
  {
    slug: 'hdfc-bank-millennia',
    name: 'HDFC Bank Millennia',
    image: '/src/domains/credit-cards/assets/images/hdfc-bank-millennia.png',
    // ...
  },
];

// Method 2: Import
import millenniaImg from '../assets/images/hdfc-bank-millennia.png';

export const CREDIT_CARDS = [
  {
    slug: 'hdfc-bank-millennia',
    name: 'HDFC Bank Millennia',
    image: millenniaImg,
    // ...
  },
];

// ============================================================================
// EXAMPLE 11: Testing affiliate links
// ============================================================================

// 1. Manual test in browser:
//    - Open: http://localhost:3001/credit-cards/best-credit-cards
//    - Look for "Apply Now" buttons (blue, enabled)
//    - Click button → Opens affiliate link in new tab
//    - Verify: Bank affiliate page loads

// 2. Test disabled state:
//    - Change enabled: true to enabled: false
//    - Refresh page
//    - Button changes to "Coming Soon" (gray, disabled)
//    - Click disabled button → nothing happens (correct)

// 3. Test with console:
import { getAffiliateLink, isAffiliateActive } from './affiliateStatus';

console.log(isAffiliateActive('hdfc-bank-millennia')); // true/false
console.log(getAffiliateLink('hdfc-bank-millennia')); // URL or null

// ============================================================================
// EXAMPLE 12: Common mistakes (and how to fix)
// ============================================================================

// ❌ WRONG: Typo in URL
link: 'https://affiiliate.hdfc.com/millennia' // Extra 'i'

// ✅ RIGHT:
link: 'https://affiliate.hdfc.com/millennia'

// ❌ WRONG: Missing https://
link: 'affiliate.hdfc.com/millennia'

// ✅ RIGHT:
link: 'https://affiliate.hdfc.com/millennia'

// ❌ WRONG: Forgot comma
{
  enabled: true
  link: 'https://...'  // Missing comma before 'link'
}

// ✅ RIGHT:
{
  enabled: true,
  link: 'https://...'
}

// ❌ WRONG: Changed button text in CTA
// CTA component is read-only, don't modify

// ✅ RIGHT:
// Only modify: affiliateStatus.ts

// ============================================================================

// For more examples and detailed guidance, see:
// - AFFILIATE_INTEGRATION.md (setup guide)
// - TECHNICAL_REFERENCE.md (architecture)
// - ACTIVATION_CHECKLIST.md (quick start)
