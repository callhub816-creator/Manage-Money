import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { PiggyBank } from 'lucide-react';
import Card from '../../components/ui/Card';
import Input from '../../components/forms/Input';
import Button from '../../components/ui/Button';
import { calculateFD, formatCurrency } from '../../utils/finance';
import '../../styles/EmiCalculator.css';

const FdCalculator = () => {
    const [investment, setInvestment] = useState(100000);
    const [rate, setRate] = useState(6.5);
    const [years, setYears] = useState(5);
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const calc = calculateFD(investment, rate, years);
        setResult(calc);
    };

    return (
        <>
            <Helmet>
                <title>FD Calculator - Fixed Deposit Maturity Calculator</title>
                <meta name="description" content="Calculate returns on your Fixed Deposits (FD). Compare interest rates and maturity amounts." />
            </Helmet>

            <section className="section">
                <div className="container">
                    <h1 className="page-title text-center">
                        <PiggyBank className="inline-icon" /> FD Calculator
                    </h1>
                    <p className="page-subtitle text-center">
                        Secure your savings. Check how much your fixed deposit will earn at maturity.
                    </p>

                    <div className="calculator-layout">
                        <div className="calc-inputs">
                            <Card title="Deposit Details">
                                <Input
                                    label="Total Investment (₹)"
                                    type="number"
                                    value={investment}
                                    onChange={(e) => setInvestment(Number(e.target.value))}
                                    prefix="₹"
                                />
                                <Input
                                    label="Interest Rate (p.a %)"
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
                                    Calculate Maturity
                                </Button>
                            </Card>
                        </div>

                        <div className="calc-results">
                            {result ? (
                                <Card title="Maturity Details" className="result-card">
                                    <div className="result-item">
                                        <span>Invested Amount</span>
                                        <span>{formatCurrency(result.invested)}</span>
                                    </div>
                                    <div className="result-item">
                                        <span>Est. Returns</span>
                                        <span className="text-success" style={{ color: 'var(--accent)' }}>{formatCurrency(result.returns)}</span>
                                    </div>
                                    <div className="result-item total highlight">
                                        <span>Total Maturity Value</span>
                                        <span>{formatCurrency(result.total)}</span>
                                    </div>

                                    <div className="result-cta">
                                        <p className="cta-text">Get high interest FD rates now</p>

                                        {/* [CONNECT AFFILIATE LINK HERE] */}
                                        <Button
                                            href="#"
                                            external
                                            fullWidth
                                            variant="secondary"
                                            className="mb-2"
                                        >
                                            Compare FD Rates
                                        </Button>
                                    </div>
                                </Card>
                            ) : (
                                <Card className="result-card empty-state">
                                    <div className="text-center p-4">
                                        <p>Enter details and click calculate.</p>
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

export default FdCalculator;
