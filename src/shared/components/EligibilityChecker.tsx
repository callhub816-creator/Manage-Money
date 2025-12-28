import React, { useState } from 'react';

interface EligibilityCheckerProps {
  onSubmit?: (data: any) => void;
}

const EligibilityChecker: React.FC<EligibilityCheckerProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    age: '',
    monthlyIncome: '',
    cibilScore: '',
    employment: '',
  });

  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheck = () => {
    const { age, monthlyIncome, cibilScore } = formData;

    if (!age || !monthlyIncome || !cibilScore) {
      setResult('Please fill in all fields');
      return;
    }

    const ageNum = parseInt(age);
    const incomeNum = parseInt(monthlyIncome);
    const cibilNum = parseInt(cibilScore);

    if (ageNum >= 21 && incomeNum >= 15000 && cibilNum >= 550) {
      setResult('eligible');
    } else if (ageNum >= 18 && incomeNum >= 12000 && cibilNum >= 500) {
      setResult('likely');
    } else {
      setResult('unlikely');
    }

    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-8 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-slate-900 mb-2">Fast Eligibility Check</h3>
      <p className="text-slate-600 mb-2">See if you qualify for a personal loan in 30 seconds</p>
      <div className="flex items-center gap-1.5 text-[10px] text-green-700 font-bold mb-6 bg-green-50 px-2 py-1 rounded w-fit">
        <span>🛡️</span> Featured Lenders are RBI-compliant
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Your Age (in years)
          </label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="25"
            min="18"
            max="65"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Monthly Income (in Rupees)
          </label>
          <input
            type="number"
            name="monthlyIncome"
            value={formData.monthlyIncome}
            onChange={handleChange}
            placeholder="30000"
            min="10000"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            CIBIL Score (if you know it)
          </label>
          <input
            type="number"
            name="cibilScore"
            value={formData.cibilScore}
            onChange={handleChange}
            placeholder="650"
            min="300"
            max="900"
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-2">
            Employment Type
          </label>
          <select
            name="employment"
            value={formData.employment}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Select employment type</option>
            <option value="salaried">Salaried Employee</option>
            <option value="self-employed">Self-Employed</option>
            <option value="business">Business Owner</option>
            <option value="freelance">Freelancer</option>
          </select>
        </div>
      </div>

      <button
        onClick={handleCheck}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors mb-4"
      >
        Check Eligibility
      </button>

      {result && (
        <div className="space-y-4">
          <div
            className={`p-4 rounded-lg text-center font-semibold ${result === 'eligible'
              ? 'bg-green-50 text-green-700 border border-green-200'
              : result === 'likely'
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : result === 'unlikely'
                  ? 'bg-orange-50 text-orange-700 border border-orange-200'
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}
          >
            {result === 'eligible' && 'Great! You are likely eligible for most personal loans.'}
            {result === 'likely' && 'You may qualify for some loans. Check specific lender requirements.'}
            {result === 'unlikely' && 'You might face approval challenges. Consider improving your CIBIL score first.'}
            {result === 'Please fill in all fields' && result}
          </div>

          {(result === 'eligible' || result === 'likely') && (
            <div className="bg-slate-800 text-white p-6 rounded-xl text-center shadow-lg transform transition-all animate-in fade-in slide-in-from-bottom-4">
              <p className="text-slate-400 text-[10px] uppercase tracking-wider font-bold mb-2">Indicative only. Not a loan offer.</p>
              <p className="text-3xl md:text-4xl font-black text-green-400">
                ₹{result === 'eligible' ?
                  `${(parseInt(formData.monthlyIncome) * 10).toLocaleString()} – ${(parseInt(formData.monthlyIncome) * 25).toLocaleString()}` :
                  `${(parseInt(formData.monthlyIncome) * 5).toLocaleString()} – ${(parseInt(formData.monthlyIncome) * 12).toLocaleString()}`
                }
              </p>
              <p className="text-xs text-slate-400 mt-3 font-medium">(Range may vary based on actual documents)</p>
            </div>
          )}
        </div>
      )}

      <p className="text-xs text-slate-500 mt-4 text-center">
        This is an indicative check. Actual approval depends on lender verification.
      </p>
    </div>
  );
};

export default EligibilityChecker;
