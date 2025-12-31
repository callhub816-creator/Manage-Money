
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="ManageMoney" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <div className="relative group">
              <button className="text-slate-600 hover:text-blue-600 font-medium py-4">Credit Cards</button>
              <div className="absolute left-0 mt-0 w-56 bg-white border border-slate-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link to="/credit-cards/best-credit-cards" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Best Credit Cards</Link>
                <Link to="/credit-cards/lifetime-free-cards" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Lifetime Free Cards</Link>
                <Link to="/credit-cards/salary-based-cards" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Salary Based Cards</Link>
                <Link to="/credit-cards/student-beginner-cards" className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Student/Beginner Cards</Link>
              </div>
            </div>

            <Link to="/loans/quick-disbursal-loan" className="text-slate-600 hover:text-blue-600 font-medium">Loans</Link>
            <Link to="/insurance" className="text-slate-600 hover:text-blue-600 font-medium">Insurance</Link>
            <Link to="/cibil-score" className="text-slate-600 hover:text-blue-600 font-medium">CIBIL Score</Link>
            <Link to="/tools" className="text-slate-600 hover:text-blue-600 font-medium">Tools</Link>
            <Link to="/blog" className="text-slate-600 hover:text-blue-600 font-medium font-bold text-blue-600">Blog</Link>
          </nav>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-1">
          <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Home</Link>
          <Link to="/credit-cards/best-credit-cards" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Credit Cards</Link>
          <Link to="/loans/quick-disbursal-loan" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Loans</Link>
          <Link to="/insurance" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Insurance</Link>
          <Link to="/cibil-score" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">CIBIL Score</Link>
          <Link to="/tools" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50">Tools</Link>
          <Link to="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 bg-blue-50">Blog</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
