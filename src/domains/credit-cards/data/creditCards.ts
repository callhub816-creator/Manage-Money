/**
 * Credit Cards Domain - Product Data
 */

export const CREDIT_CARD_FILTERS = ['Lifetime Free', 'Cashback', 'Travel', 'Low Income'];

export interface CreditCard {
  slug: string;
  name: string;
  bank: string;
  image: string;
  annualFee: string;
  category: string;
  rating: number;
  reviews: number;
  keyBenefits: string[];
  eligibility: {
    minAge: number;
    minIncome: string;
    minCIBIL: number;
  };
}

export const CREDIT_CARDS: CreditCard[] = [
  {
    slug: 'hdfc-millennia-credit-card',
    name: 'HDFC Millennia Credit Card',
    bank: 'HDFC Bank',
    image: 'https://via.placeholder.com/300x180?text=HDFC+Millennia',
    annualFee: '₹1,500 (Waived on ₹1L+ spend)',
    category: 'Cashback',
    rating: 4.5,
    reviews: 2840,
    keyBenefits: [
      '5% cashback on online shopping',
      '2.5% cashback on dining',
      'Complimentary airport lounge',
      'Domestic air accident cover',
    ],
    eligibility: {
      minAge: 21,
      minIncome: '₹25,000/month',
      minCIBIL: 650,
    },
  },
  {
    slug: 'hdfc-bank-regalia-gold-credit-card',
    name: 'HDFC Bank Regalia Gold Credit Card',
    bank: 'HDFC Bank',
    image: 'https://via.placeholder.com/300x180?text=HDFC+Regalia+Gold',
    annualFee: '₹2,500 (Waived on ₹4L+ spend)',
    category: 'Travel',
    rating: 4.8,
    reviews: 1250,
    keyBenefits: [
      'Club Vistara Silver Membership',
      'MMT Black Elite Membership',
      'Flight & Hotel vouchers on spend',
      'Unlimited lounge access (international)',
    ],
    eligibility: {
      minAge: 21,
      minIncome: '₹1,00,000/month',
      minCIBIL: 720,
    },
  },
  {
    slug: 'axis-bank-ace-credit-card',
    name: 'Axis Bank Ace Credit Card',
    bank: 'Axis Bank',
    image: 'https://via.placeholder.com/300x180?text=Axis+Ace',
    annualFee: '₹499 (Waived on ₹2L+ spend)',
    category: 'Cashback',
    rating: 4.4,
    reviews: 3200,
    keyBenefits: [
      '5% cashback on Bill Payments (GPay)',
      '4% cashback on Swiggy, Zomato, Ola',
      '2% flat cashback on all spends',
      '4 complimentary lounge visits/year',
    ],
    eligibility: {
      minAge: 21,
      minIncome: '₹20,000/month',
      minCIBIL: 700,
    },
  },
  {
    slug: 'sbi-cashback-credit-card',
    name: 'SBI Cashback Credit Card',
    bank: 'State Bank of India',
    image: 'https://via.placeholder.com/300x180?text=SBI+Cashback',
    annualFee: '₹999 + GST (Waived on ₹2L+ spend)',
    category: 'Cashback',
    rating: 4.2,
    reviews: 1950,
    keyBenefits: [
      '5% cashback on all online spends',
      '1% cashback on all offline spends',
      'No merchant restrictions for 5% cashback',
      '1% fuel surcharge waiver',
    ],
    eligibility: {
      minAge: 21,
      minIncome: '₹25,000/month',
      minCIBIL: 700,
    },
  },
  {
    slug: 'idfc-first-wow-credit-card',
    name: 'IDFC FIRST WOW Credit Card',
    bank: 'IDFC FIRST Bank',
    image: 'https://via.placeholder.com/300x180?text=IDFC+WOW',
    annualFee: 'Lifetime Free',
    category: 'Lifetime Free',
    rating: 4.5,
    reviews: 850,
    keyBenefits: [
      'Secured card against Fixed Deposit',
      'No income proof required',
      'Zero markup on international spends',
      'Earn reward points on every ₹100',
    ],
    eligibility: {
      minAge: 18,
      minIncome: '₹0 (Against FD)',
      minCIBIL: 300,
    },
  },
  {
    slug: 'axis-airtel-credit-card',
    name: 'Axis Airtel Credit Card',
    bank: 'Axis Bank',
    image: 'https://via.placeholder.com/300x180?text=Axis+Airtel',
    annualFee: '₹500 (Waived on ₹2L+ spend)',
    category: 'Cashback',
    rating: 4.6,
    reviews: 1100,
    keyBenefits: [
      '25% cashback on Airtel bills',
      '10% cashback on BigBasket, Zomato, Swiggy',
      '10% cashback on Utility bills',
      '4 complimentary lounge visits/year',
    ],
    eligibility: {
      minAge: 21,
      minIncome: '₹25,000/month',
      minCIBIL: 720,
    },
  },
  {
    slug: 'au-lit-credit-card',
    name: 'AU LIT Credit Card',
    bank: 'AU Small Finance Bank',
    image: 'https://via.placeholder.com/300x180?text=AU+LIT',
    annualFee: 'Lifetime Free',
    category: 'Lifetime Free',
    rating: 4.3,
    reviews: 920,
    keyBenefits: [
      'Customizable features - pay as you use',
      'Earn 5% cashback on dining & travel',
      'Global airport lounge access',
      'Advisory: Higher fees for specific add-ons',
    ],
    eligibility: {
      minAge: 21,
      minIncome: '₹15,000/month',
      minCIBIL: 650,
    },
  },
  {
    slug: 'sbi-simply-click-credit-card',
    name: 'SBI Simply Click Credit Card',
    bank: 'State Bank of India',
    image: 'https://via.placeholder.com/300x180?text=SBI+SimplyClick',
    annualFee: '₹499 + GST',
    category: 'Low Income',
    rating: 4.1,
    reviews: 1540,
    keyBenefits: [
      '10X reward points on online partners',
      '5X reward points on all other online spends',
      '₹500 Amazon voucher on joining',
      'Fuel surcharge waiver',
    ],
    eligibility: {
      minAge: 21,
      minIncome: '₹15,000/month',
      minCIBIL: 650,
    },
  },
];

export const CREDIT_CARD_FAQ = [
  {
    question: 'How do I apply for a credit card?',
    answer: 'Click Apply Now on any card you like. You will be redirected to the bank official application page where you can complete the process in 5-10 minutes. You will need basic info like PAN, Aadhaar, income proof, and employment details.',
  },
  {
    question: 'What is CIBIL score and why does it matter?',
    answer: 'Your CIBIL score (300-900) is your credit report card managed by TransUnion CIBIL. Banks use this to assess your creditworthiness. A higher score (750+) increases approval chances and helps you get better interest rates.',
  },
  {
    question: 'Can I get approved for a credit card with low income?',
    answer: 'Yes! Our comparison includes beginner-friendly cards with minimum income requirements starting from ₹15,000 per month. Some banks also offer secured credit cards against fixed deposits if your income is lower or your CIBIL score needs improvement.',
  },
  {
    question: 'How long does approval take?',
    answer: 'Most banks process applications in 5-7 business days. Some banks may approve in 24-48 hours. You will receive an SMS or email once your card is approved, and the physical card arrives within 10-14 business days.',
  },
  {
    question: 'Are there any hidden charges?',
    answer: 'All cards on MoneyMachine show transparent fees upfront: annual fee, joining fee, late payment charges, and foreign transaction markup. There are no hidden charges. The terms and conditions are clearly displayed before you apply.',
  },
  {
    question: 'How is this website making money if comparisons are free?',
    answer: 'We earn a referral commission from banks when you apply through our platform. This does not increase your cost. You pay the same whether you apply here or directly. We are transparent about our affiliate model and always recommend based on your fit, not commission.',
  },
];
