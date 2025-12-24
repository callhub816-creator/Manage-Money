import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp } from 'lucide-react';
import Card from '../../components/ui/Card';
import Input from '../../components/forms/Input';
import Button from '../../components/ui/Button';
import { calculateSIP, formatCurrency } from '../../utils/finance';
import '../../styles/EmiCalculator.css'; // Reusing calculator styles

const SipCalculator = () => {
    const [investment, setInvestment] = useState(5000);
    const [rate, setRate] = useState(12);
    const [years, setYears] = useState(10);
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const calc = calculateSIP(investment, rate, years);
        setResult(calc);
    };

    return (
        <>
            <Helmet>
                <title>SIP Calculator - Mutual Fund Returns Calculator</title>
                <meta name="description" content="Calculate returns on your Systematic Investment Plan (SIP) instantly. Check how your money grows with compounding." />
            </Helmet>

            <section className="section">
                <div className="container">
                    <h1 className="page-title text-center">
                        <TrendingUp className="inline-icon" /> SIP Calculator
                    </h1>
                    <p className="page-subtitle text-center">
                        See the power of compounding. Calculate how much your small monthly investments can grow.
                    </p>

                    <div className="calculator-layout">
                        <div className="calc-inputs">
                            <Card title="Investment Details">
                                <Input
                                    label="Monthly Investment (₹)"
                                    type="number"
                                    value={investment}
                                    onChange={(e) => setInvestment(Number(e.target.value))}
                                    prefix="₹"
                                />
                                <Input
                                    label="Expected Return Rate (p.a %)"
                                    type="number"
                                    value={rate}
                                    onChange={(e) => setRate(Number(e.target.value))}
                                    suffix="%"
                                />
                                <Input
                                    label="Time Period (Years)"
                                    type="number"
                                    value={years}
                                    onChange={(e) => setYears(Number(e.target.value))}
                                    suffix="Yr"
                                />

                                <Button fullWidth onClick={handleCalculate} variant="primary">
                                    Calculate Returns
                                </Button>
                            </Card>
                        </div>

                        <div className="calc-results">
                            {result ? (
                                <Card title="Estimated Returns" className="result-card">
                                    <div className="result-item">
                                        <span>Invested Amount</span>
                                        <span>{formatCurrency(result.invested)}</span>
                                    </div>
                                    <div className="result-item">
                                        <span>Est. Returns</span>
                                        <span className="text-success" style={{ color: 'var(--accent)' }}>{formatCurrency(result.returns)}</span>
                                    </div>
                                    <div className="result-item total highlight">
                                        <span>Total Value</span>
                                        <span>{formatCurrency(result.total)}</span>
                                    </div>

                                    <div className="result-cta">
                                        <p className="cta-text">Start your wealth creation journey today</p>

                                        {/* [CONNECT AFFILIATE LINK HERE] */}
                                        <Button
                                            href="#"
                                            external
                                            fullWidth
                                            variant="secondary"
                                            className="mb-2"
                                        >
                                            Start SIP Now
                                        </Button>
                                    </div>
                                </Card>
                            ) : (
                                <Card className="result-card empty-state">
                                    <div className="text-center p-4">
                                        <p>Enter details and click calculate to see your future wealth.</p>
                                    </div>
                                </Card>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SipCalculator;
