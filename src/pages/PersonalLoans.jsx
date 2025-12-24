import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Banknote, Clock, Percent, ThumbsUp, MessageCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/forms/Input';
import '../styles/CreditCards.css'; // Reusing product styles

const PersonalLoans = () => {
    const [formData, setFormData] = useState({ name: '', mobile: '', amount: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleLeadSubmit = () => {
        console.log("Lead submitted:", formData);
        // [CONNECT WHATSAPP NUMBER HERE] - In real implementation, redirect to WhatsApp
    };

    return (
        <>
            <Helmet>
                <title>Personal Loans - Compare & Apply Online | Low Interest Rates</title>
                <meta name="description" content="Apply for personal loans online. Compare low interest rates, flexible tenure, and quick disbursal options for salaried and self-employed individuals." />
            </Helmet>

            <section className="section bg-light">
                <div className="container">
                    <div className="product-header text-center">
                        <h1 className="page-title">
                            <Banknote className="inline-icon" /> Personal Loans
                        </h1>
                        <p className="page-subtitle">
                            Need funds for an emergency, travel, or wedding? Apply for personal loans online with minimal documentation.
                        </p>
                    </div>

                    <div className="cards-grid">

                        {/* Type 1: Quick Disbursal Loan */}
                        <Card title="Quick Disbursal Personal Loan" className="product-card">
                            <div className="card-icon-wrapper">
                                <Clock size={40} className="text-primary" />
                            </div>
                            <p className="product-desc">
                                Fast disbursal subject to approval. Fully digital process with minimal physical paperwork.
                            </p>
                            <div className="product-features">
                                <span><ThumbsUp size={14} /> Paperless</span>
                                <span><Clock size={14} /> 24hr Disbursal</span>
                            </div>
                            <div className="product-cta">
                                {/* [CONNECT AFFILIATE LINK HERE] */}
                                <Button href="#" external fullWidth className="mb-2">Apply for Loan</Button>
                            </div>
                        </Card>

                        {/* Type 2: Low CIBIL Loan */}
                        <Card title="Low CIBIL Loan" className="product-card">
                            <div className="card-icon-wrapper">
                                <Percent size={40} className="text-secondary" />
                            </div>
                            <p className="product-desc">
                                Score below 700? No problem. Special loan products designed for low credit score applicants.
                            </p>
                            <div className="product-features">
                                <span><ThumbsUp size={14} /> Simplified Process</span>
                                <span><Percent size={14} /> Flexible Rates</span>
                            </div>
                            <div className="product-cta">
                                {/* [CONNECT AFFILIATE LINK HERE] */}
                                <Button href="#" external fullWidth className="mb-2">Check Eligibility</Button>
                            </div>
                        </Card>

                        {/* Type 3: Salaried & Self-Employed */}
                        <Card title="Salary & Business Loan" className="product-card">
                            <div className="card-icon-wrapper">
                                <Banknote size={40} className="text-accent" />
                            </div>
                            <p className="product-desc">
                                High loan amounts up to ₹50 Lakhs for salaried employees and business owners.
                            </p>
                            <div className="product-features">
                                <span><ThumbsUp size={14} /> High Amount</span>
                                <span><Clock size={14} /> Long Tenure</span>
                            </div>
                            <div className="product-cta">
                                {/* [CONNECT AFFILIATE LINK HERE] */}
                                <Button href="#" external fullWidth className="mb-2">Apply Now</Button>
                            </div>
                        </Card>

                    </div>

                    {/* Lead Gen Form */}
                    <div className="eligibility-section">
                        <Card title="Get Free Call Back" className="form-card">
                            <div className="form-grid">
                                <Input
                                    id="name"
                                    label="Full Name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <Input
                                    id="mobile"
                                    label="Mobile Number"
                                    type="tel"
                                    placeholder="Enter 10-digit number"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                />
                                <Input
                                    id="amount"
                                    label="Required Loan Amount (₹)"
                                    type="number"
                                    placeholder="e.g. 100000"
                                    value={formData.amount}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-footer">
                                {/* [CONNECT WHATSAPP NUMBER HERE] */}
                                <Button fullWidth onClick={handleLeadSubmit} variant="primary">
                                    <MessageCircle size={18} className="mr-2 inline" /> Request Call Back
                                </Button>
                            </div>
                        </Card>
                    </div>

                </div>
            </section>
        </>
    );
};

export default PersonalLoans;
