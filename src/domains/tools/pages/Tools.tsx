import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../../../shared/components/SEO';

// EMI Calculator Component
export const EmiCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [interestRate, setInterestRate] = useState<number>(10.5);
  const [tenure, setTenure] = useState<number>(5);
  const [tenureType, setTenureType] = useState<'years' | 'months'>('years');

  const [result, setResult] = useState({
    emi: 0,
    totalInterest: 0,
    totalAmount: 0
  });

  useEffect(() => {
    const P = loanAmount;
    const annualRate = interestRate;
    const n = tenureType === 'years' ? tenure * 12 : tenure;
    const r = annualRate / 12 / 100;

    if (r === 0) {
      setResult({
        emi: Math.round(P / n),
        totalInterest: 0,
        totalAmount: P
      });
      return;
    }

    const emiVal = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalAmountVal = emiVal * n;
    const totalInterestVal = totalAmountVal - P;

    setResult({
      emi: isNaN(emiVal) ? 0 : Math.round(emiVal),
      totalInterest: isNaN(totalInterestVal) ? 0 : Math.round(totalInterestVal),
      totalAmount: isNaN(totalAmountVal) ? 0 : Math.round(totalAmountVal)
    });
  }, [loanAmount, interestRate, tenure, tenureType]);

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900">EMI Calculator</h3>
        <p className="text-slate-600 text-sm">Calculate your monthly loan EMI instantly.</p>
      </div>

      <div className="space-y-5 mb-8">
        {/* Loan Amount */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Loan Amount (₹)
          </label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium text-slate-900"
          />
          <input
            type="range"
            min="10000"
            max="10000000"
            step="10000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 mt-4"
          />
        </div>

        {/* Interest Rate */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Interest Rate (% p.a.)
          </label>
          <input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium text-slate-900"
          />
          <input
            type="range"
            min="5"
            max="30"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 mt-4"
          />
        </div>

        {/* Tenure */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Loan Tenure
          </label>
          <div className="flex gap-2 mb-4">
            <input
              type="number"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium text-slate-900"
            />
            <select
              value={tenureType}
              onChange={(e) => setTenureType(e.target.value as 'years' | 'months')}
              className="w-32 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-slate-50 font-semibold text-slate-700"
            >
              <option value="years">Years</option>
              <option value="months">Months</option>
            </select>
          </div>
          <input
            type="range"
            min="1"
            max={tenureType === 'years' ? 30 : 360}
            step="1"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 gap-4 mt-8">
          <div className="bg-blue-600 p-6 rounded-xl text-center shadow-md">
            <span className="block text-xs text-blue-100 uppercase tracking-widest font-bold mb-1">Monthly EMI</span>
            <span className="text-3xl font-black text-white">₹{result.emi.toLocaleString()}</span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <span className="block text-[10px] text-slate-500 uppercase font-bold mb-1">Total Interest</span>
              <span className="text-lg font-bold text-slate-900">₹{result.totalInterest.toLocaleString()}</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center">
              <span className="block text-[10px] text-slate-500 uppercase font-bold mb-1">Total Amount</span>
              <span className="text-lg font-bold text-slate-900">₹{result.totalAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-[10px] text-slate-400 text-center mt-6 leading-tight italic">
        *This calculator provides an estimate for reference only. Actual EMI may vary based on lender terms.
      </p>
    </div>
  );
};

// SIP Calculator Component
const SipCalculator: React.FC = () => {
  const [amount, setAmount] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const i = rate / 100 / 12;
    const n = years * 12;
    const total = amount * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    setResult(Math.round(total));
  }, [amount, rate, years]);

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-2xl font-bold mb-2 text-slate-900">SIP Calculator</h3>
      <p className="text-slate-600 mb-6">Plan your wealth growth with mutual fund investments. See returns on your monthly contributions.</p>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Monthly Investment: ₹{amount.toLocaleString()}</label>
          <input type="range" min="500" max="100000" step="500" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Expected Return: {rate}%</label>
          <input type="range" min="5" max="30" step="0.5" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Period: {years} Years</label>
          <input type="range" min="1" max="40" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-600" />
        </div>
        <div className="bg-green-50 p-6 rounded-xl text-center border border-green-100">
          <span className="block text-sm text-green-600 uppercase tracking-widest font-bold mb-2">Maturity Wealth</span>
          <span className="text-4xl font-extrabold text-green-900">₹{result.toLocaleString()}</span>
        </div>
      </div>

      <button
        onClick={() => window.location.href = '#sip-calculator'}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors"
      >
        Calculate Your SIP Goal
      </button>
      <p className="text-[10px] text-slate-500 text-center mt-2 leading-tight">
        *Educational tool only. Mutual fund investments are subject to market risks.
      </p>
    </div>
  );
};

// FD Calculator Component
const FdCalculator: React.FC = () => {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [result, setResult] = useState(0);

  useEffect(() => {
    const total = principal * Math.pow((1 + (rate / 100)), years);
    setResult(Math.round(total));
  }, [principal, rate, years]);

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-2xl font-bold mb-2 text-slate-900">Fixed Deposit (FD) Calculator</h3>
      <p className="text-slate-600 mb-6">Know your FD maturity value. Safe, secure returns on your savings from banks.</p>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Investment: ₹{principal.toLocaleString()}</label>
          <input type="range" min="5000" max="10000000" step="5000" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Interest Rate: {rate}% p.a.</label>
          <input type="range" min="3" max="10" step="0.25" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Duration: {years} Years</label>
          <input type="range" min="1" max="20" step="1" value={years} onChange={(e) => setYears(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600" />
        </div>
        <div className="bg-orange-50 p-6 rounded-xl text-center border border-orange-100">
          <span className="block text-sm text-orange-600 uppercase tracking-widest font-bold mb-2">Maturity Value</span>
          <span className="text-4xl font-extrabold text-orange-900">₹{result.toLocaleString()}</span>
        </div>
      </div>

      <button
        onClick={() => window.location.href = '#fd-calculator'}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition-colors"
      >
        Calculate FD Returns
      </button>
      <p className="text-[10px] text-slate-500 text-center mt-2 leading-tight">
        *Based on standard bank compounding formulas. Actual rates vary by bank.
      </p>
    </div>
  );
};

// CIBIL Score Checker Component
const CibilChecker: React.FC = () => {
  const [score, setScore] = useState(650);

  const getScoreStatus = (s: number) => {
    if (s >= 750) return { label: 'Excellent', color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-100' };
    if (s >= 700) return { label: 'Good', color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-blue-100' };
    if (s >= 650) return { label: 'Fair', color: 'text-yellow-700', bg: 'bg-yellow-50', border: 'border-yellow-100' };
    return { label: 'Poor', color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-100' };
  };

  const status = getScoreStatus(score);

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-2xl font-bold mb-2 text-slate-900">CIBIL Score Checker</h3>
      <p className="text-slate-600 mb-6">Understand your creditworthiness. Learn how CIBIL scores impact your loan approval chances.</p>

      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Your CIBIL Score</label>
          <input type="range" min="300" max="900" step="10" value={score} onChange={(e) => setScore(Number(e.target.value))} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600" />
        </div>

        <div className={`${status.bg} p-8 rounded-xl text-center border ${status.border}`}>
          <span className={`block text-sm uppercase tracking-widest font-bold mb-2 ${status.color}`}>Your Score Rating</span>
          <span className={`text-5xl font-extrabold ${status.color}`}>{score}</span>
          <span className={`block text-lg font-bold mt-2 ${status.color}`}>{status.label}</span>
        </div>

        <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700 space-y-2">
          <p><strong>750+:</strong> Excellent - Best loan rates & high approval chances</p>
          <p><strong>700-749:</strong> Good - Competitive rates, likely approval</p>
          <p><strong>650-699:</strong> Fair - May need co-applicant, slightly higher rates</p>
          <p><strong>Below 650:</strong> Poor - Limited options, consider improving score first</p>
        </div>
      </div>

      <button
        onClick={() => window.location.href = '/cibil-score'}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-colors"
      >
        Learn How to Improve Your Score
      </button>
      <p className="text-xs text-slate-500 text-center mt-2 leading-tight">
        Visit CIBIL.com to download your official credit report once a year for free.
      </p>
    </div>
  );
};

// Main Tools Page Component
// Main Tools Page Component
export const ToolsHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('EMI');
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#emi-calculator') setActiveTab('EMI');
    else if (hash === '#sip-calculator') setActiveTab('SIP');
    else if (hash === '#fd-calculator') setActiveTab('FD');
    else if (hash === '#cibil-score') setActiveTab('CIBIL');
  }, [hash]);

  const tabs = [
    { id: 'EMI', label: 'EMI Calculator', icon: '🧮' },
    { id: 'SIP', label: 'SIP Calculator', icon: '📈' },
    { id: 'FD', label: 'FD Calculator', icon: '💰' },
    { id: 'CIBIL', label: 'CIBIL Score', icon: '📊' },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <SEO
        title="Financial Calculators & Tools - EMI, SIP, FD, CIBIL"
        description="Free financial calculators in India: EMI calculator, SIP calculator, FD calculator, and CIBIL score checker. Plan your finances with ease."
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">Financial Tools Hub</h1>
          <p className="text-lg text-purple-100 max-w-2xl">
            Free calculators to plan your finances. No signup required.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-slate-200 sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-bold text-sm transition-all whitespace-nowrap ${activeTab === tab.id
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                  }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="transition-all duration-300">
            {/* Isolation Test & Component Rendering */}
            {activeTab === 'EMI' && (
              <div id="emi-calculator" className="block w-full h-auto opacity-100 animate-in fade-in zoom-in-95 duration-300">
                <EmiCalculator />
              </div>
            )}

            {activeTab === 'SIP' && (
              <div id="sip-calculator" className="block w-full h-auto opacity-100 animate-in fade-in zoom-in-95 duration-300">
                <SipCalculator />
              </div>
            )}

            {activeTab === 'FD' && (
              <div id="fd-calculator" className="block w-full h-auto opacity-100 animate-in fade-in zoom-in-95 duration-300">
                <FdCalculator />
              </div>
            )}

            {activeTab === 'CIBIL' && (
              <div id="cibil-score" className="block w-full h-auto opacity-100 animate-in fade-in zoom-in-95 duration-300">
                <CibilChecker />
              </div>
            )}

            {/* Fail-safe Fallback */}
            {!activeTab && (
              <div className="text-center p-12 bg-white rounded-xl border-2 border-dashed border-slate-200">
                <p className="text-slate-500">Please select a tool from the tabs above.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Why Use Our Tools */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12 text-slate-900">Why Use Our Tools?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-blue-600">✓</span>
              </div>
              <h3 className="font-bold mb-2 text-slate-900 text-sm">100% Free</h3>
              <p className="text-xs text-slate-600">No hidden charges or fees.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-green-600">✓</span>
              </div>
              <h3 className="font-bold mb-2 text-slate-900 text-sm">Accurate</h3>
              <p className="text-xs text-slate-600">Standard financial formulas.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-orange-600">✓</span>
              </div>
              <h3 className="font-bold mb-2 text-slate-900 text-sm">Real-time</h3>
              <p className="text-xs text-slate-600">Results as you adjust.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-purple-600">✓</span>
              </div>
              <h3 className="font-bold mb-2 text-slate-900 text-sm">Private</h3>
              <p className="text-xs text-slate-600">No data stored or shared.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolsHub;
