import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import EmiCalculator from './pages/calculators/EmiCalculator';
import SipCalculator from './pages/calculators/SipCalculator';
import FdCalculator from './pages/calculators/FdCalculator';
import Documents from './pages/Documents';
import AboutUs from './pages/legal/AboutUs';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsConditions from './pages/legal/TermsConditions';
import Disclaimer from './pages/legal/Disclaimer';
import CreditCards from './pages/CreditCards';
import PersonalLoans from './pages/PersonalLoans';
import CibilScore from './pages/CibilScore';
import Insurance from './pages/Insurance';
import ContactUs from './pages/ContactUs';
import Investment from './pages/Investment';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Placeholder components


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Products */}
        <Route path="credit-cards" element={<CreditCards />} />
        <Route path="personal-loans" element={<PersonalLoans />} />
        <Route path="cibil-score" element={<CibilScore />} />
        <Route path="insurance" element={<Insurance />} />
        <Route path="investment" element={<Investment />} />

        {/* Blog */}
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogPost />} />

        {/* Tools */}
        <Route path="emi-calculator" element={<EmiCalculator />} />
        <Route path="sip-calculator" element={<SipCalculator />} />
        <Route path="fd-calculator" element={<FdCalculator />} />
        <Route path="documents" element={<Documents />} />

        {/* Legal */}
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-conditions" element={<TermsConditions />} />
        <Route path="disclaimer" element={<Disclaimer />} />

        <Route path="*" element={
          <div className="container section text-center">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
          </div>
        } />
      </Route>
    </Routes>
  );
}

export default App;
