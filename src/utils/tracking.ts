/**
 * Analytics & Tracking Utilities
 * Handles Google Analytics, affiliate tracking, and CTA events
 * 
 * SETUP REQUIRED:
 * 1. Replace GA_TRACKING_ID with your Google Analytics measurement ID (G-XXXXXXXXXX)
 * 2. Replace AFFILIATE_API_KEY with your affiliate tracking API key
 * 3. Add Google Analytics script to index.html (see comments below)
 */

// ============================================
// CONFIGURATION - ADD YOUR IDS HERE
// ============================================

const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your GA4 measurement ID
const AFFILIATE_API_KEY = 'YOUR_AFFILIATE_API_KEY'; // TODO: Replace with affiliate tracking API
const ENABLE_TRACKING = true; // Set to false to disable all tracking in development

// ============================================
// GOOGLE ANALYTICS - EVENT TRACKING
// ============================================

/**
 * Initialize Google Analytics
 * Call this once on app load
 */
export const initializeAnalytics = () => {
  if (!ENABLE_TRACKING) return;
  
  // Google Analytics is loaded via script tag in index.html
  // gtag will be available globally once the script loads
  if (typeof window !== 'undefined' && (window as any).gtag) {
    console.log('✓ Google Analytics initialized');
  } else {
    console.warn('⚠️ Google Analytics script not loaded. Add to index.html:');
    console.warn(`
      <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}');
      </script>
    `);
  }
};

/**
 * Track a custom event in Google Analytics
 * @param eventName - Event name (e.g., 'apply_click', 'filter_change')
 * @param eventData - Additional event data
 */
export const trackEvent = (
  eventName: string,
  eventData?: Record<string, string | number | boolean>
) => {
  if (!ENABLE_TRACKING) return;

  try {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        timestamp: new Date().toISOString(),
        ...eventData,
      });
      console.log(`📊 Event tracked: ${eventName}`, eventData);
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

/**
 * Track page view
 * @param pagePath - Page path (e.g., '/credit-cards/best-credit-cards')
 * @param pageTitle - Page title
 */
export const trackPageView = (pagePath: string, pageTitle: string) => {
  if (!ENABLE_TRACKING) return;

  try {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', GA_TRACKING_ID, {
        page_path: pagePath,
        page_title: pageTitle,
      });
      console.log(`📄 Page view: ${pageTitle} (${pagePath})`);
    }
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

// ============================================
// AFFILIATE CLICK TRACKING
// ============================================

interface AffiliateClickData {
  productType: 'credit_card' | 'loan' | 'insurance' | 'tool';
  productName: string;
  productId?: string;
  affiliateNetwork?: string;
  referrer?: string;
}

/**
 * Track affiliate link click
 * @param data - Click data (product type, name, etc.)
 */
export const trackAffiliateClick = async (data: AffiliateClickData) => {
  if (!ENABLE_TRACKING) return;

  const payload = {
    timestamp: new Date().toISOString(),
    productType: data.productType,
    productName: data.productName,
    productId: data.productId || null,
    affiliateNetwork: data.affiliateNetwork || 'direct',
    referrer: data.referrer || window.location.pathname,
    userAgent: navigator.userAgent,
    // Add more tracking data as needed
  };

  try {
    // Send to your affiliate tracking backend
    // TODO: Replace with your affiliate tracking API endpoint
    if (AFFILIATE_API_KEY !== 'YOUR_AFFILIATE_API_KEY') {
      const response = await fetch('/api/track-affiliate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${AFFILIATE_API_KEY}`,
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('✓ Affiliate click tracked:', data.productName);
      } else {
        console.warn('⚠️ Failed to track affiliate click');
      }
    } else {
      console.warn('⚠️ Affiliate API key not configured');
    }

    // Also track in GA for redundancy
    trackEvent('affiliate_click', {
      product_type: data.productType,
      product_name: data.productName,
      affiliate_network: data.affiliateNetwork || 'direct',
    });
  } catch (error) {
    console.error('Error tracking affiliate click:', error);
  }
};

// ============================================
// CTA CLICK TRACKING
// ============================================

interface CTAClickData {
  ctaText: string;
  ctaType:
    | 'apply_now'
    | 'compare'
    | 'check_eligibility'
    | 'learn_more'
    | 'download'
    | 'get_offer'
    | 'view_details'
    | 'other';
  section: string; // e.g., 'hero', 'product_card', 'comparison_table', 'faq'
  page: string; // e.g., 'credit_cards', 'loans', 'tools'
}

/**
 * Track CTA (Call-To-Action) click
 * @param data - CTA click data
 */
export const trackCTAClick = (data: CTAClickData) => {
  if (!ENABLE_TRACKING) return;

  try {
    // Track in Google Analytics
    trackEvent('cta_click', {
      cta_text: data.ctaText,
      cta_type: data.ctaType,
      section: data.section,
      page: data.page,
    });

    console.log(`🎯 CTA Clicked: ${data.ctaText} (${data.ctaType})`);
  } catch (error) {
    console.error('Error tracking CTA click:', error);
  }
};

// ============================================
// INTERACTION TRACKING
// ============================================

/**
 * Track form submission
 * @param formName - Name of the form
 * @param fields - Form fields submitted (without sensitive data)
 */
export const trackFormSubmit = (
  formName: string,
  fields?: Record<string, string>
) => {
  if (!ENABLE_TRACKING) return;

  trackEvent('form_submit', {
    form_name: formName,
    field_count: fields ? Object.keys(fields).length : 0,
  });

  console.log(`📝 Form submitted: ${formName}`);
};

/**
 * Track search/filter action
 * @param filterType - Type of filter
 * @param filterValue - Filter value
 * @param page - Page name
 */
export const trackFilterChange = (
  filterType: string,
  filterValue: string,
  page: string
) => {
  if (!ENABLE_TRACKING) return;

  trackEvent('filter_change', {
    filter_type: filterType,
    filter_value: filterValue,
    page: page,
  });

  console.log(`🔍 Filter applied: ${filterType} = ${filterValue}`);
};

/**
 * Track calculator usage
 * @param calculatorType - Type of calculator (emi, sip, fd, cibil)
 * @param inputs - Input parameters
 */
export const trackCalculatorUse = (
  calculatorType: 'emi' | 'sip' | 'fd' | 'cibil',
  inputs?: Record<string, string | number>
) => {
  if (!ENABLE_TRACKING) return;

  trackEvent('calculator_use', {
    calculator_type: calculatorType,
    input_count: inputs ? Object.keys(inputs).length : 0,
  });

  console.log(`🧮 Calculator used: ${calculatorType}`);
};

/**
 * Track external link click
 * @param url - External URL
 * @param linkText - Link text
 */
export const trackExternalLink = (url: string, linkText: string) => {
  if (!ENABLE_TRACKING) return;

  trackEvent('external_link', {
    url: url,
    link_text: linkText,
  });

  console.log(`🔗 External link clicked: ${linkText}`);
};

/**
 * Track scroll depth
 * @param percentage - Scroll percentage (0-100)
 */
export const trackScrollDepth = (percentage: number) => {
  if (!ENABLE_TRACKING) return;

  trackEvent('scroll_depth', {
    scroll_percentage: percentage,
  });
};

/**
 * Track time spent on page
 * @param pageName - Name of page
 * @param seconds - Seconds spent
 */
export const trackTimeOnPage = (pageName: string, seconds: number) => {
  if (!ENABLE_TRACKING) return;

  trackEvent('time_on_page', {
    page_name: pageName,
    time_seconds: seconds,
  });

  console.log(`⏱️ Time on page: ${pageName} - ${seconds}s`);
};

// ============================================
// CONVERSION TRACKING
// ============================================

/**
 * Track conversion (e.g., form submission, account creation)
 * @param conversionType - Type of conversion
 * @param value - Conversion value (optional)
 * @param currency - Currency code (default: INR)
 */
export const trackConversion = (
  conversionType: string,
  value?: number,
  currency: string = 'INR'
) => {
  if (!ENABLE_TRACKING) return;

  const conversionData: Record<string, any> = {
    conversion_type: conversionType,
  };

  if (value) {
    conversionData.value = value;
    conversionData.currency = currency;
  }

  trackEvent('conversion', conversionData);
  console.log(`✅ Conversion tracked: ${conversionType}`);
};

// ============================================
// ERROR TRACKING
// ============================================

/**
 * Track errors
 * @param errorType - Type of error
 * @param errorMessage - Error message
 */
export const trackError = (errorType: string, errorMessage: string) => {
  if (!ENABLE_TRACKING) return;

  trackEvent('error', {
    error_type: errorType,
    error_message: errorMessage,
  });

  console.error(`❌ Error tracked: ${errorType} - ${errorMessage}`);
};

// ============================================
// UTILITY: SAFE CLICK HANDLER
// ============================================

/**
 * Higher-order function to track CTA clicks with redirect
 * @param ctaData - CTA data for tracking
 * @param redirectUrl - URL to redirect after tracking
 */
export const createTrackedCTAHandler = (
  ctaData: CTAClickData,
  redirectUrl: string
) => {
  return () => {
    trackCTAClick(ctaData);
    if (redirectUrl) {
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 100); // Small delay to ensure tracking completes
    }
  };
};

/**
 * Higher-order function to track affiliate clicks with redirect
 * @param affiliateData - Affiliate data for tracking
 * @param affiliateUrl - URL to redirect to affiliate site
 */
export const createTrackedAffiliateHandler = (
  affiliateData: AffiliateClickData,
  affiliateUrl: string
) => {
  return () => {
    trackAffiliateClick(affiliateData);
    if (affiliateUrl) {
      setTimeout(() => {
        window.open(affiliateUrl, '_blank');
      }, 100); // Small delay to ensure tracking completes
    }
  };
};
