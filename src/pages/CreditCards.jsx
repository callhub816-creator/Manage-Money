import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CreditCard, CheckCircle, Gift, Briefcase, GraduationCap, ArrowRight, Shield, ThumbsUp, Wallet } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/forms/Input';
import '../styles/CreditCards.css';

const CreditCards = () => {
    return (
        <>
            <Helmet>
                <title>Best Credit Cards in India | Compare & Apply – Manage Money</title>
                <meta name="description" content="Compare the best credit cards in India, check eligibility, and apply for lifetime free and premium credit cards easily." />
            </Helmet>

            {/* SECTION 1: INTRODUCTION */}
            <section className="section bg-light pb-0">
                <div className="container">
                    <div className="product-header text-center">
                        <h1 className="page-title">
                            <CreditCard className="inline-icon" /> Credit Cards – Compare & Apply
                        </h1>
                        <p className="page-subtitle">
                            Credit cards help you manage expenses, earn rewards, and build a strong credit score when used responsibly.
                            Here you can compare different types of credit cards in India and choose the one that fits your needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* SECTION 2: CATEGORIES */}
            <section className="section pt-0">
                <div className="container">
                    <h2 className="section-title text-center mb-8">Choose by Category</h2>
                    <div className="cards-grid">

                        <Card title="Best Credit Cards" className="product-card">
                            <div className="card-icon-wrapper">
                                <CheckCircle size={40} className="text-success" />
                            </div>
                            <p className="product-desc">
                                Top-rated credit cards with the best overall benefits, rewards, and lounge access.
                            </p>
                            <div className="product-cta">
                                <Button href="#" variant="primary" fullWidth className="mb-2">View Cards</Button>
                            </div>
                        </Card>

                        <Card title="Lifetime Free Cards" className="product-card">
                            <div className="card-icon-wrapper">
                                <Gift size={40} className="text-primary" />
                            </div>
                            <p className="product-desc">
                                No annual fee or joining fee. Best for maximum savings without fixed costs.
                            </p>
                            <div className="product-cta">
                                <Button href="#" variant="primary" fullWidth className="mb-2">View Free Cards</Button>
                            </div>
                        </Card>

                        <Card title="Salary Based Cards" className="product-card">
                            <div className="card-icon-wrapper">
                                <Briefcase size={40} className="text-accent" />
                            </div>
                            <p className="product-desc">
                                Exclusive cards for salaried professionals based on your monthly income.
                            </p>
                            <div className="product-cta">
                                <Button href="#" variant="primary" fullWidth className="mb-2">Check Eligibility</Button>
                            </div>
                        </Card>

                        <Card title="Student / Beginner" className="product-card">
                            <div className="card-icon-wrapper">
                                <GraduationCap size={40} className="text-secondary" />
                            </div>
                            <p className="product-desc">
                                Best cards for first-time users and students to start their credit journey.
                            </p>
                            <div className="product-cta">
                                <Button href="#" variant="primary" fullWidth className="mb-2">Explore Cards</Button>
                            </div>
                        </Card>

                    </div>
                </div>
            </section>

            {/* SECTION 3: WHY CHOOSE */}
            <section className="section bg-white">
                <div className="container">
                    <Card className="benefits-card highlight-border">
                        <h2 className="text-center mb-6">Why Choose a Credit Card?</h2>
                        <div className="benefits-grid">
                            <div className="benefit-item">
                                <Wallet className="text-primary mb-2" size={24} />
                                <span>Easy cashless payments</span>
                            </div>
                            <div className="benefit-item">
                                <Gift className="text-success mb-2" size={24} />
                                <span>Rewards, cashback & offers</span>
                            </div>
                            <div className="benefit-item">
                                <ThumbsUp className="text-accent mb-2" size={24} />
                                <span>Builds your CIBIL score</span>
                            </div>
                            <div className="benefit-item">
                                <Shield className="text-secondary mb-2" size={24} />
                                <span>Emergency spending support</span>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* SECTION 4: ELIGIBILITY CHECKER */}
            <section className="section bg-light">
                <div className="container">
                    <div className="eligibility-section">
                        <Card title="Check Credit Card Eligibility" className="form-card text-center">
                            <p className="mb-6 text-sm text-muted">Find out which cards you are eligible for in seconds.</p>
                            <div className="form-grid">
                                <Input label="Monthly Income (₹)" placeholder="e.g. 30000" type="number" />
                                <div className="input-group text-left">
                                    <label className="input-label">Employment Type</label>
                                    <select className="input-field select-field">
                                        <option>Salaried</option>
                                        <option>Self-Employed</option>
                                        <option>Student</option>
                                    </select>
                                </div>
                                <Input label="City" placeholder="Your current city" />
                            </div>
                            <div className="form-footer">
                                {/* [CONNECT AFFILIATE LINK HERE] */}
                                <Button fullWidth variant="secondary" external href="#">Check Eligibility</Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* SECTION 5: POPULAR CREDIT CARDS (SAMPLE LIST) */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title text-center mb-8">Popular Credit Cards</h2>
                    <div className="cards-list">

                        {/* Sample Card 1 */}
                        <Card className="horizontal-card">
                            <div className="h-card-content">
                                <div>
                                    <h3>Premium Rewards Card</h3>
                                    <ul className="product-list-sm">
                                        <li>5% Cashback on Online Spending</li>
                                        <li>Complimentary Airport Lounge Access</li>
                                        <li>Fuel Surcharge Waiver</li>
                                    </ul>
                                </div>
                                <div className="h-card-actions">
                                    {/* [CONNECT AFFILIATE LINK HERE] */}
                                    <Button href="#" external className="mb-2 w-full">Apply Now</Button>
                                    {/* [CONNECT AFFILIATE LINK HERE] */}
                                    <Button href="#" external variant="outline" className="w-full">Check Eligibility</Button>
                                </div>
                            </div>
                        </Card>

                        {/* Sample Card 2 */}
                        <Card className="horizontal-card">
                            <div className="h-card-content">
                                <div>
                                    <h3>Lifetime Free Shopper</h3>
                                    <ul className="product-list-sm">
                                        <li>No Annual Fee (Lifetime Free)</li>
                                        <li>10x Rewards on Departmental Stores</li>
                                        <li>Welcome Bonus Points</li>
                                    </ul>
                                </div>
                                <div className="h-card-actions">
                                    {/* [CONNECT AFFILIATE LINK HERE] */}
                                    <Button href="#" external className="mb-2 w-full">Apply Now</Button>
                                    {/* [CONNECT AFFILIATE LINK HERE] */}
                                    <Button href="#" external variant="outline" className="w-full">Check Eligibility</Button>
                                </div>
                            </div>
                        </Card>

                    </div>
                </div>
            </section>

            {/* SECTION 6: IMPORTANT TIPS */}
            <section className="section bg-light">
                <div className="container">
                    <div className="tips-box">
                        <h3>Tips Before Applying</h3>
                        <ul className="tips-list">
                            <li>Pay your dues on time to avoid high interest charges.</li>
                            <li>Keep your credit utilization ratio below 30%.</li>
                            <li>Avoid applying for multiple cards at once to protect your score.</li>
                            <li>Choose a card that matches your spending habits (Travel vs Shopping).</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* SECTION 7: FINAL CTA */}
            <section className="section text-center">
                <div className="container">
                    <Card className="cta-card highlight-border max-w-2xl mx-auto">
                        <h2 className="mb-4">Ready to Apply for a Credit Card?</h2>
                        <div className="flex gap-4 justify-center flex-wrap">
                            {/* [CONNECT AFFILIATE LINK HERE] */}
                            <Button href="#" external variant="primary" className="btn-lg">Apply for Best Credit Card</Button>
                            {/* [CONNECT AFFILIATE LINK HERE] */}
                            <Button href="#" external variant="outline" className="btn-lg">Check Eligibility Now</Button>
                        </div>
                    </Card>
                </div>
            </section>
        </>
    );
};

export default CreditCards;
