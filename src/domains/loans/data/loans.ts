/**
 * Loans Domain - Product Data
 */

export const LOAN_TYPES = ['Bank Loan', 'Digital Loan'];

export const LOANS_DATA = [
  {
    name: 'HDFC Bank Personal Loan',
    provider: 'HDFC Bank',
    loanType: 'Bank Loan',
    interestRate: 'approx. 10.5% p.a.*',
    processingFee: 'Up to 2%',
    maxAmount: 'Up to 40 Lakhs',
    approvalTime: 'Varies by Profile',
    category: 'Bank Loan',
    editorialRating: 4.8,
    keyFeatures: [
      'Tenure: Up to 5 years',
      'Suitable For: Salaried & self-employed individuals',
      'RBI-Regulated Bank',
    ],
    eligibility: {
      minAge: 21,
      minIncome: 'Standard',
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
    approvalTime: 'Varies by Profile',
    category: 'Bank Loan',
    editorialRating: 4.7,
    keyFeatures: [
      'Tenure: Flexible repayment options',
      'Suitable For: Salaried professionals',
      'RBI-Regulated Bank',
    ],
    eligibility: {
      minAge: 21,
      minIncome: 'Standard',
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
    approvalTime: 'Varies by Profile',
    category: 'Bank Loan',
    editorialRating: 4.6,
    keyFeatures: [
      'Tenure: Up to 6 years',
      'Suitable For: Salaried & self-employed',
      'Leading NBFC in India',
    ],
    eligibility: {
      minAge: 21,
      minIncome: 'Standard',
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
    approvalTime: 'Varies by Profile',
    category: 'Bank Loan',
    editorialRating: 4.6,
    keyFeatures: [
      'Tenure: Flexible repayment',
      'Suitable For: Salaried & business owners',
      'Trusted Tata Brand',
    ],
    eligibility: {
      minAge: 21,
      minIncome: 'Standard',
      minCIBIL: 680,
    },
  },
  {
    name: 'CASHe Personal Loan',
    provider: 'CASHe (NBFC)',
    loanType: 'Digital Loan',
    interestRate: 'Monthly Interest*',
    processingFee: 'Variable',
    maxAmount: 'Up to 4 Lakhs',
    approvalTime: 'Varies by Profile',
    category: 'Digital Loan',
    editorialRating: 4.4,
    keyFeatures: [
      'Loan Type: Short-term personal loan',
      'Suitable For: Limited or low credit history',
      'Note: Digital NBFC lender',
      '⚠️ Interest rates may be higher compared to traditional bank loans.',
    ],
    eligibility: {
      minAge: 18,
      minIncome: 'Entry-level',
      minCIBIL: 500,
    },
  },
  {
    name: 'Olyv Personal Loan',
    provider: 'Olyv (SmartCoin)',
    loanType: 'Digital Loan',
    interestRate: 'Variable*',
    processingFee: 'Variable',
    maxAmount: 'Up to 5 Lakhs',
    approvalTime: 'Varies by Profile',
    category: 'Digital Loan',
    editorialRating: 4.3,
    keyFeatures: [
      'Loan Type: Instant personal loan',
      'Suitable For: Urgent short-term needs',
      'Note: App-based lender',
      '⚠️ Loan approval and pricing depend on credit profile. Interest rates may be higher.',
    ],
    eligibility: {
      minAge: 18,
      minIncome: 'Entry-level',
      minCIBIL: 500,
    },
  },
];

export const LOANS_COMPARISON_DATA = [
  ['Feature', 'Bank Loan (HDFC/Axis)', 'NBFC (Tata/Bajaj)', 'Digital App (CASHe/Olyv)'],
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
    question: 'What is the difference between Bank and Digital loans?',
    answer: 'Banks offer lower interest rates and higher amounts but require good CIBIL scores. Digital apps (Olyv, CASHe) offer an efficient online process even with limited credit history but usually at higher interest rates.',
  },
  {
    question: 'Are these lenders RBI-regulated?',
    answer: 'Yes, we only feature RBI-regulated banks and NBFCs (Non-Banking Financial Companies). Your data and transactions are safe with these regulated entities.',
  },
];
