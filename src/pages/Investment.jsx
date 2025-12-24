import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, PieChart, DollarSign, ArrowRight } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import '../styles/Home.css';

const Investment = () => {
    return (
        <>
            <Helmet>
                <title>Investment & Savings - Grow Your Wealth | Manage Money</title>
                <meta name="description" content="Start your investment journey. Compare Fixed Deposits (FD), SIPs, and Mutual Funds to grow your money safely." />
            </Helmet>

            <section className="section bg-light">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h1 className="hero-title" style={{ fontSize: '2.5rem' }}>Grow Your Wealth</h1>
                        <p className="hero-subtitle text-muted">
                            Smart investment options to help you achieve your financial goals.
                            Start small, dream big.
                        </p>
                    </div>

                    <div className="grid-3-col" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

                        {/* SIP */}
                        <Card className="hover-card text-center p-8">
                            <div className="icon-box bg-green-100 mx-auto">
                                <TrendingUp className="text-success" size={32} />
                            </div>
                            <h2 className="text-xl mb-3">Systematic Investment Plan (SIP)</h2>
                            <p className="text-muted mb-6">
                                Invest small amounts monthly in mutual funds and perform wealth creation over time with the power of compounding.
                            </p>
                            <div className="flex flex-col gap-3">
                                <Button href="/sip-calculator" variant="outline" fullWidth>Calculate Returns</Button>
                                {/* [CONNECT AFFILIATE LINK HERE] */}
                                <Button href="#" external fullWidth>Start SIP</Button>
                            </div>
                        </Card>

                        {/* FD */}
                        <Card className="hover-card text-center p-8">
                            <div className="icon-box bg-blue-100 mx-auto">
                                <DollarSign className="text-primary" size={32} />
                            </div>
                            <h2 className="text-xl mb-3">Fixed Deposits (FD)</h2>
                            <p className="text-muted mb-6">
                                Fixed returns with low risk. A safe way to grow your savings for short to medium term goals.
                            </p>
                            <div className="flex flex-col gap-3">
                                <Button href="/fd-calculator" variant="outline" fullWidth>Check Rates</Button>
                                {/* [CONNECT AFFILIATE LINK HERE] */}
                                <Button href="#" external fullWidth>Open FD</Button>
                            </div>
                        </Card>

                        {/* Mutual Funds */}
                        <Card className="hover-card text-center p-8">
                            <div className="icon-box bg-purple-100 mx-auto">
                                <PieChart className="text-secondary" size={32} />
                            </div>
                            <h2 className="text-xl mb-3">Mutual Funds</h2>
                            <p className="text-muted mb-6">
                                Diversify your portfolio with equity and debt funds managed by experts. Higher returns for long term.
                            </p>
                            <div className="flex flex-col gap-3">
                                {/* [CONNECT AFFILIATE LINK HERE] */}
                                <Button href="#" external variant="outline" fullWidth>View Top Funds</Button>
                                {/* [CONNECT AFFILIATE LINK HERE] */}
                                <Button href="#" external fullWidth>Invest Now</Button>
                            </div>
                        </Card>

                    </div>

                    <div className="mt-16 text-center">
                        <Card className="max-w-2xl mx-auto bg-white highlight-border">
                            <h2 className="text-xl mb-4">Need Help Choosing?</h2>
                            <p className="text-muted mb-6">
                                Our financial experts can help you build a personalized portfolio based on your risk appetite.
                            </p>
                            {/* [CONNECT WHATSAPP NUMBER HERE] */}
                            <Button href="#" external variant="secondary">Talk to Advisor</Button>
                        </Card>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Investment;
