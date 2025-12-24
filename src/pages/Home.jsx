import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useNavigation } from 'react-router-dom';
import {
    CreditCard,
    Calculator,
    BarChart2,
    Banknote,
    FileText,
    Shield,
    TrendingUp,
    CheckCircle,
    ArrowRight
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import '../styles/Home.css';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Manage Money – Smart Financial Tools & Comparisons in India</title>
                <meta name="description" content="Compare credit cards, personal loans, check CIBIL score, and calculate EMI using simple financial tools in India." />
            </Helmet>

            {/* HERO SECTION */}
            <section className="hero-section">
                <div className="container">
                    <div className="hero-content text-center">
                        <h1 className="hero-title">Manage Your Money Smartly</h1>
                        <p className="hero-subtitle">
                            The best Indian financial tools and comparisons at your fingertips.
                            No clutter, just clear choices.
                        </p>
                        <div className="hero-cta-group">
                            <Button href="/credit-cards" variant="primary" className="hero-btn">
                                Find Credit Cards
                            </Button>
                            <Button href="/cibil-score" variant="secondary" className="hero-btn">
                                Check CIBIL Score
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUICK ACTIONS SECTION */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title text-center">Quick Actions</h2>
                    <div className="quick-actions-grid">

                        <Card className="action-card text-center hover-card">
                            <div className="icon-box bg-blue-100">
                                <CreditCard className="text-primary" size={32} />
                            </div>
                            <h3>Credit Cards</h3>
                            <p>Compare lifetime free & premium cards.</p>
                            <Link to="/credit-cards" className="text-link">Explore Cards <ArrowRight size={16} /></Link>
                        </Card>

                        <Card className="action-card text-center hover-card">
                            <div className="icon-box bg-green-100">
                                <Calculator className="text-success" size={32} />
                            </div>
                            <h3>Calculators</h3>
                            <p>EMI, SIP, FD and savings tools.</p>
                            <Link to="/emi-calculator" className="text-link">Use Calculators <ArrowRight size={16} /></Link>
                        </Card>

                        <Card className="action-card text-center hover-card">
                            <div className="icon-box bg-purple-100">
                                <BarChart2 className="text-accent" size={32} />
                            </div>
                            <h3>CIBIL Score</h3>
                            <p>Check and improve your credit score.</p>
                            <Link to="/cibil-score" className="text-link">Check Score <ArrowRight size={16} /></Link>
                        </Card>

                        <Card className="action-card text-center hover-card">
                            <div className="icon-box bg-orange-100">
                                <Banknote className="text-secondary" size={32} />
                            </div>
                            <h3>Personal Loans</h3>
                            <p>Compare rates & apply online.</p>
                            <Link to="/personal-loans" className="text-link">View Loans <ArrowRight size={16} /></Link>
                        </Card>

                    </div>
                </div>
            </section>

            {/* EXPLORE FINANCE SECTION */}
            <section className="section bg-light">
                <div className="container">
                    <h2 className="section-title text-center">Explore Finance</h2>
                    <div className="explore-grid">

                        <Card className="explore-card">
                            <div className="flex-row-center">
                                <FileText size={40} className="text-muted mr-4" />
                                <div>
                                    <h3>Documents Required</h3>
                                    <p className="mb-2">Checklists for loans provided.</p>
                                    <Button href="/documents" variant="outline" className="btn-sm">View Lists</Button>
                                </div>
                            </div>
                        </Card>

                        <Card className="explore-card">
                            <div className="flex-row-center">
                                <Shield size={40} className="text-accent mr-4" />
                                <div>
                                    <h3>Insurance</h3>
                                    <p className="mb-2">Protect your health and assets.</p>
                                    <Button href="/insurance" variant="outline" className="btn-sm">Compare Plans</Button>
                                </div>
                            </div>
                        </Card>

                        <Card className="explore-card">
                            <div className="flex-row-center">
                                <TrendingUp size={40} className="text-success mr-4" />
                                <div>
                                    <h3>Investment</h3>
                                    <p className="mb-2">Grow your wealth with SIP & FDs.</p>
                                    <Button href="/investment" variant="outline" className="btn-sm">Start Investing</Button>
                                </div>
                            </div>
                        </Card>

                    </div>
                </div>
            </section>

            {/* ABOUT BRAND SECTION */}
            <section className="section">
                <div className="container text-center max-w-3xl mx-auto">
                    <h2 className="section-title text-center">Manage Money</h2>
                    <p className="text-lg leading-relaxed text-muted">
                        Your trusted partner for smart financial decisions in India.
                        Compare credit cards, personal loans, and calculate EMIs quickly
                        using simple and easy-to-understand tools.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Home;
