/**
 * Custom React Hook for Tracking
 * Provides easy access to tracking functions in components
 */

import { useEffect } from 'react';
import {
  initializeAnalytics,
  trackEvent,
  trackPageView,
  trackCTAClick,
  trackFilterChange,
  trackCalculatorUse,
  trackFormSubmit,
  trackTimeOnPage,
  trackError,
  trackConversion,
  trackAffiliateClick,
  type CTAClickData,
  type AffiliateClickData,
} from '../utils/tracking';

/**
 * Hook to initialize analytics and track page views
 * @param pagePath - Page path
 * @param pageTitle - Page title
 * @param pageName - Page name (for time tracking)
 */
export const usePageTracking = (
  pagePath: string,
  pageTitle: string,
  pageName?: string
) => {
  useEffect(() => {
    // Initialize analytics on first load
    initializeAnalytics();

    // Track page view
    trackPageView(pagePath, pageTitle);

    // Track time on page
    if (pageName) {
      const startTime = Date.now();

      return () => {
        const timeSpent = Math.round((Date.now() - startTime) / 1000);
        if (timeSpent > 3) {
          // Only track if user spent more than 3 seconds
          trackTimeOnPage(pageName, timeSpent);
        }
      };
    }
  }, [pagePath, pageTitle, pageName]);
};

/**
 * Hook for tracking CTA clicks
 * @returns Function to call on CTA click
 */
export const useCTATracking = () => {
  return (data: CTAClickData) => {
    trackCTAClick(data);
  };
};

/**
 * Hook for tracking filter changes
 * @returns Function to call on filter change
 */
export const useFilterTracking = () => {
  return (filterType: string, filterValue: string, page: string) => {
    trackFilterChange(filterType, filterValue, page);
  };
};

/**
 * Hook for tracking calculator usage
 * @returns Function to call when calculator is used
 */
export const useCalculatorTracking = () => {
  return (
    calculatorType: 'emi' | 'sip' | 'fd' | 'cibil',
    inputs?: Record<string, string | number>
  ) => {
    trackCalculatorUse(calculatorType, inputs);
  };
};

/**
 * Hook for tracking form submissions
 * @returns Function to call on form submit
 */
export const useFormTracking = () => {
  return (formName: string, fields?: Record<string, string>) => {
    trackFormSubmit(formName, fields);
  };
};

/**
 * Hook for tracking errors
 * @returns Function to call on error
 */
export const useErrorTracking = () => {
  return (errorType: string, errorMessage: string) => {
    trackError(errorType, errorMessage);
  };
};

/**
 * Hook for tracking conversions
 * @returns Function to call on conversion
 */
export const useConversionTracking = () => {
  return (
    conversionType: string,
    value?: number,
    currency?: string
  ) => {
    trackConversion(conversionType, value, currency);
  };
};

/**
 * Hook for tracking affiliate clicks
 * @returns Function to call on affiliate click
 */
export const useAffiliateTracking = () => {
  return (data: AffiliateClickData) => {
    trackAffiliateClick(data);
  };
};

/**
 * Hook for custom events
 * @returns Function to track custom events
 */
export const useEventTracking = () => {
  return (eventName: string, eventData?: Record<string, string | number | boolean>) => {
    trackEvent(eventName, eventData);
  };
};
