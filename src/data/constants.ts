/**
 * Site-wide constants and configuration
 */

export const SITE_NAME = 'Manage Money India';
export const SITE_URL = 'https://managemoney.local';
export const SITE_LOGO = 'ManageMoney';

export const CREDIT_CARD_FILTERS = ['Lifetime Free', 'Cashback', 'Travel', 'Low Income'];
export const LOAN_TYPES = ['Quick Approval', 'Low CIBIL', 'Business'];

export const COLOR_SCHEMES = {
  creditCards: {
    primary: 'blue',
    light: 'blue-50',
    dark: 'blue-700',
    border: 'border-blue-100',
  },
  loans: {
    primary: 'green',
    light: 'green-50',
    dark: 'green-700',
    border: 'border-green-100',
  },
  insurance: {
    primary: 'purple',
    light: 'purple-50',
    dark: 'purple-700',
    border: 'border-purple-100',
  },
  tools: {
    primary: 'indigo',
    light: 'indigo-50',
    dark: 'indigo-700',
    border: 'border-indigo-100',
  },
};

export const ROUTE_PATHS = {
  home: '/',
  creditCards: '/credit-cards/best-credit-cards',
  loans: '/loans/quick-disbursal-loan',
  insurance: '/insurance/health-insurance',
  cibilScore: '/cibil-score',
  tools: '/tools',
  aboutUs: '/about-us',
  privacy: '/privacy-policy',
  terms: '/terms-conditions',
  disclaimer: '/disclaimer',
};

export const FOOTER_LINKS = {
  legal: [
    { label: 'About Us', path: ROUTE_PATHS.aboutUs },
    { label: 'Privacy Policy', path: ROUTE_PATHS.privacy },
    { label: 'Terms & Conditions', path: ROUTE_PATHS.terms },
    { label: 'Disclaimer', path: ROUTE_PATHS.disclaimer },
  ],
  products: [
    { label: 'Credit Cards', path: ROUTE_PATHS.creditCards },
    { label: 'Personal Loans', path: ROUTE_PATHS.loans },
    { label: 'Insurance', path: ROUTE_PATHS.insurance },
    { label: 'Tools', path: ROUTE_PATHS.tools },
  ],
};
