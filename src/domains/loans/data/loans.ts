/**
 * Loans Domain - Product Data
 */

export const LOAN_TYPES = ['Bank Loan', 'Instant Loan'];

export const LOANS_DATA = [
  {
    name: 'HDFC Bank Personal Loan',
    provider: 'HDFC Bank',
    loanType: 'Bank Loan',
    interestRate: 'approx. 10.5% p.a.*',
    processingFee: 'Up to 2%',
    maxAmount: 'Up to 40 Lakhs',
    approvalTime: 'Fast Approval',
    category: 'Bank Loan',
    rating: 4.8,
    reviews: 5200,
    keyFeatures: [
      'Tenure: Up to 5 years',
      'Suitable For: Salaried & self-employed individuals',
      'RBI-Regulated Bank',
    ],
    eligibility: {
      minAge: 21,
      minIncome: '₹25,000/month',
      minCIBIL: 720,
    },
  },
  {
    name: 'Axis Bank Personal Loan',
    provider: 'Axis Bank',
    loanType: 'Bank Loan',
    interestRate: 'approx. 10.75% p.a.*',
    processingFee: '1-2%',
    maxAmount: 'Up to 40 Lakhs',
    approvalTime: 'Fast Approval',
    category: 'Bank Loan',
    rating: 4.7,
    reviews: 4100,
    keyFeatures: [
      'Tenure: Flexible repayment options',
      'Suitable For: Salaried professionals',
      'RBI-Regulated Bank',
    ],
    eligibility: {
      minAge: 21,
      minIncome: '₹25,000/month',
      minCIBIL: 700,
    },
  },
  {
    name: 'Bajaj Finserv Personal Loan',
    provider: 'Bajaj Finserv',
    loanType: 'Bank Loan',
    interestRate: 'approx. 11% p.a.*',
    processingFee: 'Up to 3%',
    maxAmount: 'Up to 35 Lakhs',
    approvalTime: 'Fast Approval',
    category: 'Bank Loan',
    rating: 4.6,
    reviews: 3800,
    keyFeatures: [
      'Tenure: Up to 6 years',
      'Suitable For: Salaried & self-employed',
      'Leading NBFC in India',
    ],
    eligibility: {
      minAge: 21,
      minIncome: '₹20,000/month',
      minCIBIL: 680,
    },
  },
  {
    name: 'Tata Capital Personal Loan',
    provider: 'Tata Capital',
    loanType: 'Bank Loan',
    interestRate: 'approx. 11% p.a.*',
    processingFee: '1.5-2.5%',
    maxAmount: 'Up to 35 Lakhs',
    approvalTime: 'Fast Approval',
    category: 'Bank Loan',
    rating: 4.6,
    reviews: 3200,
    keyFeatures: [
      'Tenure: Flexible repayment',
      'Suitable For: Salaried & business owners',
      'Trusted Tata Brand',
    ],
    eligibility: {
      minAge: 21,
      minIncome: '₹20,000/month',
      minCIBIL: 680,
    },
  },
  {
    name: 'CASHe Personal Loan',
    provider: 'CASHe (NBFC)',
    loanType: 'Instant Loan',
    interestRate: 'Monthly Interest*',
    processingFee: 'Variable',
    maxAmount: 'Up to 4 Lakhs',
    approvalTime: 'Fast Approval',
    category: 'Instant Loan',
    rating: 4.4,
    reviews: 2650,
    keyFeatures: [
      'Loan Type: Short-term personal loan',
      'Suitable For: Limited or low credit history',
      'Note: Digital NBFC lender',
      '⚠️ Interest rates may be higher compared to traditional bank loans.',
    ],
    eligibility: {
      minAge: 18,
      minIncome: '₹12,000/month',
      minCIBIL: 500,
    },
  },
  {
    name: 'Olyv Personal Loan',
    provider: 'Olyv (SmartCoin)',
    loanType: 'Instant Loan',
    interestRate: 'Variable*',
    processingFee: 'Variable',
    maxAmount: 'Up to 5 Lakhs',
    approvalTime: 'Fast Approval',
    category: 'Instant Loan',
    rating: 4.3,
    reviews: 1840,
    keyFeatures: [
      'Loan Type: Instant personal loan',
      'Suitable For: Urgent short-term needs',
      'Note: App-based lender',
      '⚠️ Loan approval and pricing depend on credit profile. Interest rates may be higher.',
    ],
    eligibility: {
      minAge: 18,
      minIncome: '₹15,000/month',
      minCIBIL: 500,
    },
  },
];

export const LOANS_COMPARISON_DATA = [
  ['Feature', 'Bank Loan (HDFC/Axis)', 'NBFC (Tata/Bajaj)', 'Instant App (CASHe/Olyv)'],
  [
    'Interest Rate',
    '10.5% - 15%',
    '11% - 18%',
    '18% - 36%',
  ],
  [
    'Processing Speed',
    '24-48 Hours',
    '24 Hours',
    'Same Day',
  ],
  [
    'Max Tenure',
    '5 Years',
    '6 Years',
    '1 Year',
  ],
  [
    'CIBIL Requirement',
    'High (700+)',
    'Medium (650+)',
    'Low (500+)',
  ],
];

export const LOANS_FAQ = [
  {
    question: 'How do I apply for these loans?',
    answer: 'Select a lender and click Apply Now. Fill in the basic lead form. You will be redirected to the official lender page to complete your application with documents like PAN and Aadhaar.',
  },
  {
    question: 'What is the difference between Bank and Instant loans?',
    answer: 'Banks offer lower interest rates and higher amounts but require good CIBIL scores. Instant apps (Olyv, CASHe) offer fast approval even with low credit scores but usually at higher interest rates.',
  },
  {
    question: 'Are these lenders RBI-regulated?',
    answer: 'Yes, we only feature RBI-regulated banks and NBFCs (Non-Banking Financial Companies). Your data and transactions are safe with these regulated entities.',
  },
];
