import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calculator } from 'lucide-react';
import Card from '../../components/ui/Card';
import Input from '../../components/forms/Input';
import Button from '../../components/ui/Button';
import { calculateEMI, formatCurrency } from '../../utils/finance';
import '../../styles/EmiCalculator.css';

const EmiCalculator = () => {
    const [amount, setAmount] = useState(500000);
    const [rate, setRate] = useState(10.5);
    const [tenure, setTenure] = useState(5); // in years
    const [result, setResult] = useState(null);

    const handleCalculate = () => {
        const calc = calculateEMI(amount, rate, tenure);
        setResult(calc);
    };

    // Calculate initially on mount
    useEffect(() => {
        handleCalculate();
    }, []);

    return (
        <>
            <Helmet>
                <title>EMI Calculator - Calculate Home, Personal & Car Loan EMI</title>
                <meta name="description" content="Free EMI Calculator for Personal Loan, Home Loan, and Car Loan in India. Check monthly EMI, total interest, and payout instantly." />
            </Helmet>

            <section className="section">
                <div className="container">
                    <h1 className="page-title text-center">
                        <Calculator className="inline-icon" /> EMI Calculator
                    </h1>
                    <p className="page-subtitle text-center">
                        Plan your loan smartly. Calculate your monthly EMI and total interest payable.
                    </p>

                    <div className="calculator-layout">
                        {/* Input Section */}
                        <div className="calc-inputs">
                            <Card title="Loan Details">
                                <Input
                                    label="Loan Amount (₹)"
                                    type="number"
                                    value={amount}
                                    onChange={(e) => setAmount(Number(e.target.value))}
                                    prefix="₹"
                                    placeholder="Enter loan amount"
                                />
                                <Input
                                    label="Interest Rate (%)"
                                    type="number"
                                    value={rate}
                                    onChange={(e) => setRate(Number(e.target.value))}
                                    suffix="%"
                                    placeholder="Enter annual interest rate"
                                />
                                <Input
                                    label="Loan Tenure (Years)"
                                    type="number"
                                    value={tenure}
                                    onChange={(e) => setTenure(Number(e.target.value))}
                                    suffix="Years"
                                    placeholder="Enter tenure in years"
                                />

                                <Button fullWidth onClick={handleCalculate} variant="primary">
                                    Calculate EMI
                                </Button>
                            </Card>
                        </div>

                        {/* Result Section */}
                        <div className="calc-results">
                            {result && (
                                <Card title="Calculation Result" className="result-card">
                                    <div className="result-item highlight">
                                        <span>Monthly EMI</span>
                                        <span className="value">{formatCurrency(result.emi)}</span>
                                    </div>
                                    <div className="result-item">
                                        <span>Principal Amount</span>
                                        <span>{formatCurrency(amount)}</span>
                                    </div>
                                    <div className="result-item">
                                        <span>Total Interest</span>
                                        <span>{formatCurrency(result.totalInterest)}</span>
                                    </div>
                                    <div className="result-item total">
                                        <span>Total Amount Payable</span>
                                        <span>{formatCurrency(result.totalAmount)}</span>
                                    </div>

                                    <div className="result-cta">
                                        <p className="cta-text">Looking for the best loan rates?</p>

                                        {/* [CONNECT AFFILIATE LINK HERE] */}
                                        <Button
                                            href="https://link-to-affiliate-partner.com"
                                            external
                                            fullWidth
                                            variant="secondary"
                                            className="mb-2"
                                        >
                                            Apply for Best Loan Options
                                        </Button>

                                        {/* [CONNECT AFFILIATE LINK HERE] */}
                                        <Button
                                            href="https://link-to-check-eligibility.com"
                                            external
                                            fullWidth
                                            variant="outline"
                                        >
                                            Check Eligibility
                                        </Button>
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

export default EmiCalculator;
