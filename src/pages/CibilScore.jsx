import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart2, CheckCircle, TrendingUp, AlertTriangle, ArrowRight, MessageCircle } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/forms/Input';
import '../styles/CibilScore.css';

const CibilScore = () => {
    const [formData, setFormData] = useState({ name: '', mobile: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleLeadSubmit = () => {
        console.log("CIBIL Lead submitted:", formData);
        // [CONNECT WHATSAPP NUMBER HERE] or [CONNECT EMAIL HERE]
    };

    return (
        <>
            <Helmet>
                <title>Check CIBIL Score for Free | Manage Money</title>
                <meta name="description" content="Check your CIBIL score for free, understand your credit score, and learn how to improve it easily." />
            </Helmet>

            <section className="section bg-light">
                <div className="container">

                    {/* SECTION 1: Introduction */}
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <h1 className="page-title">
                            <BarChart2 className="inline-icon" /> CIBIL Score – Check, Understand & Improve
                        </h1>
                        <p className="page-subtitle">
                            CIBIL Score is a 3-digit number (300-900) that shows your creditworthiness.
                            Ideally, a score above 750 is needed for easy loan and credit card approvals.
                            Iska hona zaruri hai agar aapko future mein loan chahiye.
                        </p>
                    </div>

                    <div className="cibil-grid">

                        {/* SECTION 2: CIBIL SCORE CHECK (MAIN ACTION) */}
                        <Card className="cibil-check-card highlight-border text-center">
                            <h2>Check Your Free CIBIL Score</h2>
                            <p className="mb-4 text-muted">
                                Get your detailed credit report quickly. Free & Safe.
                            </p>

                            {/* [CONNECT AFFILIATE LINK HERE] */}
                            <Button href="#" external variant="primary" className="btn-lg w-full md:w-auto">
                                Check Free CIBIL Score
                            </Button>

                            <p className="text-xs mt-3 text-muted">
                                *Checking your CIBIL score does not affect your credit score.
                            </p>
                        </Card>

                        {/* SECTION 3: WHAT IS A GOOD CIBIL SCORE */}
                        <Card title="What is a Good CIBIL Score?">
                            <div className="score-table-wrapper">
                                <table className="score-table">
                                    <thead>
                                        <tr>
                                            <th>Score Range</th>
                                            <th>Verdict</th>
                                            <th>Approval Chance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-success-light">
                                            <td className="font-bold">750 – 900</td>
                                            <td>Excellent</td>
                                            <td>Very High (Easy)</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">700 – 749</td>
                                            <td>Good</td>
                                            <td>High</td>
                                        </tr>
                                        <tr>
                                            <td className="font-bold">650 – 699</td>
                                            <td>Average</td>
                                            <td>Moderate/Difficult</td>
                                        </tr>
                                        <tr className="bg-danger-light">
                                            <td className="font-bold">Below 650</td>
                                            <td>Low</td>
                                            <td>Difficult</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card>

                        {/* SECTION 4 & 5: Factors & Reasons */}
                        <div className="grid-2-col">
                            <Card title="How CIBIL is Calculated">
                                <ul className="icon-list">
                                    <li><TrendingUp size={18} className="text-primary" /> <strong>Payment History</strong> (On-time payments matter most)</li>
                                    <li><TrendingUp size={18} className="text-primary" /> <strong>Credit Utilization</strong> (Don't max out cards)</li>
                                    <li><TrendingUp size={18} className="text-primary" /> <strong>Credit Age</strong> (Old cards are gold)</li>
                                    <li><TrendingUp size={18} className="text-primary" /> <strong>Credit Mix</strong> (Loans + Cards balance)</li>
                                </ul>
                            </Card>

                            <Card title="Reasons for Low Score">
                                <ul className="icon-list">
                                    <li><AlertTriangle size={18} className="text-accent" /> Late EMI or credit card payments</li>
                                    <li><AlertTriangle size={18} className="text-accent" /> High credit card usage ({'>'}30% limit)</li>
                                    <li><AlertTriangle size={18} className="text-accent" /> Multiple loan enquiries in short time</li>
                                    <li><AlertTriangle size={18} className="text-accent" /> Loan defaults or settlements</li>
                                </ul>
                            </Card>
                        </div>

                        {/* SECTION 6: IMPROVE YOUR CIBIL SCORE */}
                        <Card className="improvement-card">
                            <div className="improvement-content">
                                <div className="improvement-text">
                                    <h3>Want to Improve Your CIBIL Score?</h3>
                                    <p>A low score isn't permanent. You can improve it in 6-12 months with the right financial habits.</p>
                                </div>
                                <div className="improvement-actions">
                                    {/* [CONNECT AFFILIATE LINK HERE] */}
                                    <Button href="#" external >Improve CIBIL Score</Button>

                                    {/* [CONNECT AFFILIATE LINK HERE] */}
                                    <Button href="#" external variant="outline">Apply for Beginner Card</Button>
                                </div>
                            </div>
                        </Card>

                        {/* SECTION 7: SOFT LEAD CAPTURE */}
                        <Card title="Get Free Credit Improvement Tips" className="lead-form-card">
                            <div className="form-grid-inline">
                                <Input
                                    id="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <Input
                                    id="mobile"
                                    placeholder="Mobile Number"
                                    type="tel"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                />
                                {/* [CONNECT WHATSAPP NUMBER HERE] or [CONNECT EMAIL HERE] */}
                                <Button onClick={handleLeadSubmit} variant="secondary">
                                    <MessageCircle size={18} className="mr-2 inline" /> Get Tips
                                </Button>
                            </div>
                        </Card>

                    </div>
                </div>
            </section>
        </>
    );
};

export default CibilScore;
