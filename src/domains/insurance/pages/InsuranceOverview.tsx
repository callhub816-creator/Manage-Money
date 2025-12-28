import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../shared/components/SEO';

const InsuranceOverview: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <SEO
                title="Compare Insurance Plans from Trusted Providers | ManageMoney"
                description="Compare health, term life, and car insurance plans. Understand coverage, benefits, and exclusions before you choose the best policy for your needs."
            />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Compare Insurance Plans from Trusted Providers</h1>
                    <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                        Understand coverage, benefits, and exclusions before you choose.
                    </p>
                </div>
            </section>

            {/* Insurance Categories */}
            <section className="py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-8">

                        {/* Health Insurance */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                            <div className="p-8 flex-grow">
                                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 text-2xl">🏥</div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Health Insurance</h2>
                                <div className="space-y-4 text-slate-600 mb-6">
                                    <p><strong>What it covers:</strong> Hospitalization expenses, pre and post-hospitalization costs, daycare procedures, and ambulance charges.</p>
                                    <p><strong>Who should buy:</strong> Everyone who wants to protect their savings from unexpected medical bills and high healthcare inflation.</p>
                                    <div className="bg-slate-50 p-4 rounded-lg">
                                        <p className="text-sm font-bold text-slate-900 mb-2">Key things to compare:</p>
                                        <ul className="text-sm space-y-1">
                                            <li>• Annual Premium Amount</li>
                                            <li>• Range of Coverage / Sum Insured</li>
                                            <li>• Number of Network Hospitals</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
                                <span className="block w-full bg-slate-200 text-slate-500 font-bold py-3 rounded-xl cursor-not-allowed">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        {/* Term Life Insurance */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                            <div className="p-8 flex-grow">
                                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 text-2xl">🛡️</div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Term Life Insurance</h2>
                                <div className="space-y-4 text-slate-600 mb-6">
                                    <p><strong>Pure Protection:</strong> Term insurance is a pure protection financial product that provides a fixed sum (Sum Assured) to nominees in case of an unfortunate event during the policy term.</p>
                                    <p><strong>Educational Goal:</strong> The primary objective is to provide financial substitute for the policyholder's income for the dependents.</p>
                                    <div className="bg-slate-50 p-4 rounded-lg">
                                        <p className="text-sm font-bold text-slate-900 mb-2">Comparison Parameter:</p>
                                        <p className="text-sm leading-relaxed"><strong>Claim Settlement Ratio (CSR):</strong> CSR is the percentage of claims an insurer has settled out of the total claims received. It's an indicator of historical claim processing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
                                <span className="block w-full bg-slate-200 text-slate-500 font-bold py-3 rounded-xl cursor-not-allowed">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                        {/* Car Insurance */}
                        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                            <div className="p-8 flex-grow">
                                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-2xl">🚗</div>
                                <h2 className="text-2xl font-bold text-slate-900 mb-4">Car Insurance</h2>
                                <div className="space-y-4 text-slate-600 mb-6">
                                    <p><strong>Coverage Types:</strong> Third-party insurance is legally mandatory and covers liabilities to others. Comprehensive policies cover both third-party and own-damage.</p>
                                    <div className="bg-slate-50 p-4 rounded-lg">
                                        <p className="text-sm font-bold text-slate-900 mb-2">IDV Explained:</p>
                                        <p className="text-sm leading-relaxed"><strong>Insured Declared Value:</strong> IDV represents the current market value of the vehicle which the insurer pays in case of total loss or theft. It is not the resale value.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
                                <span className="block w-full bg-slate-200 text-slate-500 font-bold py-3 rounded-xl cursor-not-allowed">
                                    Coming Soon
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Mandatory Disclaimer Section */}
            <section className="py-12 bg-slate-100 border-t border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm italic leading-relaxed">
                    <p className="mb-2 font-bold uppercase tracking-wider text-[10px] text-slate-400">Statutory Warning</p>
                    <p>Insurance is subject to policy terms and conditions. The information provided here is for comparison and informational purposes only. Customers are advised to read the policy documents carefully before making a purchase.</p>
                </div>
            </section>
        </div>
    );
};

export default InsuranceOverview;
