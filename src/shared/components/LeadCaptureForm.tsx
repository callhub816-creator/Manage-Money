import React, { useState } from 'react';
import { submitLead } from '../utils/leadService';

interface LeadCaptureFormProps {
    productType: string;
    onSuccess: () => void;
    onSkip: () => void;
}

const INCOME_RANGES = [
    'Below ₹2.5 Lakhs',
    '₹2.5L - ₹5L',
    '₹5L - ₹10L',
    '₹10L - ₹20L',
    'Above ₹20L'
];

const LeadCaptureForm: React.FC<LeadCaptureFormProps> = ({ productType, onSuccess, onSkip }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        income: INCOME_RANGES[0],
        city: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Validation based on requirements:
        // - Name min 2 characters
        // - Mobile exactly 10 digits
        // - City & Income required (enforced by 'required' attribute on select/input)
        if (formData.name.trim().length < 2) {
            setError('Name must be at least 2 characters long.');
            setLoading(false);
            return;
        }
        if (!/^\d{10}$/.test(formData.mobile)) {
            setError('Mobile number must be exactly 10 digits.');
            setLoading(false);
            return;
        }

        try {
            await submitLead({
                name: formData.name,
                mobile: formData.mobile,
                loanType: productType,
                incomeRange: formData.income,
                city: formData.city,
                sourcePage: window.location.pathname
            });

            setLoading(false);
            onSuccess();
        } catch (err) {
            console.error('Lead capture error:', err);
            setError('Something went wrong. Please try again or skip to continue.');
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Full Name</label>
                    <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 font-medium"
                    />
                </div>

                <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Mobile Number</label>
                    <input
                        required
                        type="tel"
                        name="mobile"
                        pattern="[0-9]{10}"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="10-digit number"
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 font-medium"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">Annual Income</label>
                    <select
                        name="income"
                        value={formData.income}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 outline-none transition-all font-medium appearance-none cursor-pointer"
                    >
                        {INCOME_RANGES.map((range) => (
                            <option key={range} value={range}>{range}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2">City</label>
                    <input
                        required
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Mumbai"
                        className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-blue-500 outline-none transition-all placeholder:text-slate-400 font-medium"
                    />
                </div>
            </div>

            {error && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg border border-red-100 animate-shake">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs font-semibold">{error}</span>
                </div>
            )}

            <div className="pt-4">
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Submitting...</span>
                        </>
                    ) : (
                        <>
                            <span>Continue to Application</span>
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </>
                    )}
                </button>
                <button
                    type="button"
                    onClick={onSkip}
                    className="w-full mt-4 text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-slate-600 transition-colors"
                >
                    Skip and Continue Directly
                </button>
            </div>

            <p className="text-[10px] text-slate-400 text-center leading-relaxed">
                We value your privacy. Your data is used strictly for application assistance with our partner banks.
                By proceeding, you agree to our <a href="#/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</a>.
            </p>
        </form>
    );
};

export default LeadCaptureForm;
