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
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Mobile Number</label>
                <input
                    required
                    type="tel"
                    name="mobile"
                    pattern="[0-9]{10}"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Annual Income</label>
                    <select
                        name="income"
                        value={formData.income}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                    >
                        {INCOME_RANGES.map((range) => (
                            <option key={range} value={range}>{range}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">City</label>
                    <input
                        required
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="e.g. Mumbai"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    />
                </div>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="pt-2">
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors shadow-lg disabled:opacity-50"
                >
                    {loading ? 'Submitting...' : 'Continue to Application'}
                </button>
                <button
                    type="button"
                    onClick={onSkip}
                    className="w-full mt-2 text-slate-500 text-sm font-medium hover:text-slate-700 transition-colors"
                >
                    Skip and Continue directly
                </button>
            </div>

            <p className="text-[10px] text-slate-500 text-center leading-tight">
                By submitting, you consent to being contacted by our partner bank or their representative regarding this application.
                We do not sell your data for unrelated marketing; it is used only for application assistance.
            </p>
        </form>
    );
};

export default LeadCaptureForm;
