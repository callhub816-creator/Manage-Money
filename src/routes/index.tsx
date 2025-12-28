import React from 'react';
import { Route } from 'react-router-dom';

// Domain Imports
import { CreditCardList, CardDetailPage, CibilScore } from '../domains/credit-cards';
import { LoanList } from '../domains/loans';
import { InsuranceList, InsuranceOverview } from '../domains/insurance';
import { Home } from '../domains/home';
import { Tools } from '../domains/tools';
import { AboutUs, PrivacyPolicy, TermsConditions, Disclaimer } from '../domains/legal';

/**
 * Centralized routing configuration for all 20 routes
 * Organized by domain and feature area
 */
export const AppRoutes = (
  <>
    {/* Home */}
    <Route path="/" element={<Home />} />

    {/* Credit Cards - 5 routes */}
    <Route path="/credit-cards/best-credit-cards" element={<CreditCardList category="best" />} />
    <Route path="/credit-cards/lifetime-free-cards" element={<CreditCardList category="lifetime-free" />} />
    <Route path="/credit-cards/salary-based-cards" element={<CreditCardList category="salary" />} />
    <Route path="/credit-cards/student-beginner-cards" element={<CreditCardList category="student" />} />
    <Route path="/credit-cards/:slug" element={<CardDetailPage />} />

    {/* Loans - 3 routes */}
    <Route path="/loans/quick-disbursal-loan" element={<LoanList category="quick" />} />
    <Route path="/loans/low-cibil-loan" element={<LoanList category="low-cibil" />} />
    <Route path="/loans/salary-business-loan" element={<LoanList category="business" />} />

    {/* Insurance - 5 routes */}
    <Route path="/insurance" element={<InsuranceOverview />} />
    <Route path="/insurance/health-insurance" element={<InsuranceList category="health" />} />
    <Route path="/insurance/term-insurance" element={<InsuranceList category="term" />} />
    <Route path="/insurance/car-insurance" element={<InsuranceList category="car" />} />
    <Route path="/insurance/bike-insurance" element={<InsuranceList category="bike" />} />

    {/* Other Features - 7 routes */}
    <Route path="/cibil-score" element={<CibilScore />} />
    <Route path="/tools" element={<Tools />} />
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-conditions" element={<TermsConditions />} />
    <Route path="/disclaimer" element={<Disclaimer />} />
  </>
);

export default AppRoutes;
