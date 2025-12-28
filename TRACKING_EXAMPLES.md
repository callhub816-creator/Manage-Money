/**
 * TRACKING IMPLEMENTATION EXAMPLES
 * 
 * Shows how to use the tracking system in your components
 * Copy/paste these patterns into your components
 */

// ============================================
// EXAMPLE 1: TRACK PAGE VIEWS
// ============================================

/*
import { usePageTracking } from '../src/hooks/useTracking';

export const MyPage: React.FC = () => {
  // Initialize analytics and track page view automatically
  usePageTracking('/my-page', 'My Page Title', 'my_page');

  return (
    <div>
      <h1>My Page</h1>
    </div>
  );
};
*/

// ============================================
// EXAMPLE 2: TRACK CTA CLICKS
// ============================================

/*
import { useCTATracking } from '../src/hooks/useTracking';
import { CTAClickData } from '../src/utils/tracking';

export const CTAButton: React.FC = () => {
  const trackCTA = useCTATracking();

  const handleClick = () => {
    const ctaData: CTAClickData = {
      ctaText: 'Apply Now',
      ctaType: 'apply_now',
      section: 'product_card',
      page: 'credit_cards',
    };
    trackCTA(ctaData);
    // Then redirect or perform action
  };

  return <button onClick={handleClick}>Apply Now</button>;
};
*/

// ============================================
// EXAMPLE 3: TRACK FILTER CHANGES
// ============================================

/*
import { useFilterTracking } from '../src/hooks/useTracking';

export const ProductFilter: React.FC = () => {
  const trackFilter = useFilterTracking();

  const handleFilterChange = (filterType: string, value: string) => {
    trackFilter(filterType, value, 'credit_cards');
  };

  return (
    <button onClick={() => handleFilterChange('annual_fee', 'lifetime_free')}>
      Lifetime Free
    </button>
  );
};
*/

// ============================================
// EXAMPLE 4: TRACK CALCULATOR USAGE
// ============================================

/*
import { useCalculatorTracking } from '../src/hooks/useTracking';
import { useEffect } from 'react';

export const EMICalculator: React.FC = () => {
  const trackCalculator = useCalculatorTracking();

  useEffect(() => {
    // Track when calculator is first used
    trackCalculator('emi', {
      loan_amount: 500000,
      interest_rate: 10.5,
      tenure: 5,
    });
  }, [trackCalculator]);

  return <div>{/* Calculator UI */}</div>;
};
*/

// ============================================
// EXAMPLE 5: TRACK AFFILIATE CLICKS
// ============================================

/*
import { useAffiliateTracking } from '../src/hooks/useTracking';
import { AffiliateClickData } from '../src/utils/tracking';

export const AffiliateLink: React.FC = () => {
  const trackAffiliate = useAffiliateTracking();

  const handleAffiliateClick = () => {
    const affiliateData: AffiliateClickData = {
      productType: 'credit_card',
      productName: 'HDFC Bank Millennia',
      productId: 'hdfc_millennia_001',
      affiliateNetwork: 'flipkart_affiliate',
    };

    trackAffiliate(affiliateData);

    // Open affiliate link
    window.open('https://affiliate-link.com/hdfc-millennia', '_blank');
  };

  return <button onClick={handleAffiliateClick}>Apply via Affiliate</button>;
};
*/

// ============================================
// EXAMPLE 6: TRACK FORM SUBMISSIONS
// ============================================

/*
import { useFormTracking } from '../src/hooks/useTracking';
import { useState } from 'react';

export const EligibilityForm: React.FC = () => {
  const trackForm = useFormTracking();
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    cibil: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission
    trackForm('eligibility_check', {
      age: formData.age,
      income: formData.income,
    });

    // Submit form
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <button type="submit">Check Eligibility</button>
    </form>
  );
};
*/

// ============================================
// EXAMPLE 7: TRACK CONVERSIONS
// ============================================

/*
import { useConversionTracking } from '../src/hooks/useTracking';

export const ConversionButton: React.FC = () => {
  const trackConversion = useConversionTracking();

  const handleConversion = () => {
    // Track conversion with optional value
    trackConversion('lead_generation', 5000, 'INR');
    // Perform conversion action
  };

  return <button onClick={handleConversion}>Generate Lead</button>;
};
*/

// ============================================
// EXAMPLE 8: TRACK CUSTOM EVENTS
// ============================================

/*
import { useEventTracking } from '../src/hooks/useTracking';

export const CustomEventButton: React.FC = () => {
  const trackEvent = useEventTracking();

  const handleCustomEvent = () => {
    trackEvent('custom_action', {
      action_type: 'bookmark',
      item_id: 'cc_123',
      timestamp: new Date().toISOString(),
    });
  };

  return <button onClick={handleCustomEvent}>Bookmark</button>;
};
*/

// ============================================
// EXAMPLE 9: TRACK ERRORS
// ============================================

/*
import { useErrorTracking } from '../src/hooks/useTracking';

export const RiskyOperation: React.FC = () => {
  const trackError = useErrorTracking();

  const handleRiskyOperation = async () => {
    try {
      // Some operation that might fail
      await fetchData();
    } catch (error) {
      trackError('api_error', error instanceof Error ? error.message : 'Unknown error');
    }
  };

  return <button onClick={handleRiskyOperation}>Do Something</button>;
};
*/

// ============================================
// EXAMPLE 10: COMPLETE PAGE WITH TRACKING
// ============================================

/*
import React, { useState } from 'react';
import { usePageTracking, useCTATracking, useFilterTracking } from '../src/hooks/useTracking';
import { CTAClickData } from '../src/utils/tracking';

export const CreditCardsPage: React.FC = () => {
  // Track page view and time spent
  usePageTracking('/credit-cards/best-credit-cards', 'Best Credit Cards', 'credit_cards_page');

  // Get tracking functions
  const trackCTA = useCTATracking();
  const trackFilter = useFilterTracking();

  // Handle filter click
  const handleFilter = (filter: string) => {
    trackFilter('card_filter', filter, 'credit_cards');
  };

  // Handle apply click
  const handleApply = (cardName: string) => {
    const ctaData: CTAClickData = {
      ctaText: `Apply for ${cardName}`,
      ctaType: 'apply_now',
      section: 'product_card',
      page: 'credit_cards',
    };
    trackCTA(ctaData);
    // Redirect to application
  };

  return (
    <div>
      <h1>Best Credit Cards</h1>

      {/* Filters with tracking */}
      <button onClick={() => handleFilter('lifetime_free')}>Lifetime Free</button>
      <button onClick={() => handleFilter('cashback')}>Cashback</button>

      {/* Cards with tracking */}
      <div className="card">
        <h3>HDFC Bank Millennia</h3>
        <button onClick={() => handleApply('HDFC Bank Millennia')}>
          Apply Now
        </button>
      </div>
    </div>
  );
};
*/

export default {};
