import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Heart, Truck, Bike, Umbrella, Car, Phone } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/forms/Input';
import '../styles/CreditCards.css';

const Insurance = () => {
    const [formData, setFormData] = useState({ name: '', mobile: '', type: 'Health Insurance' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleLeadSubmit = () => {
        console.log("Insurance Lead submitted:", formData);
        // [CONNECT WHATSAPP NUMBER HERE]
    };

    return (
        <>
            <Helmet>
                <title>Compare & Buy Insurance Online - Health, Term, Car & Bike | Manage Money</title>
                <meta name="description" content="Get the best insurance plans at affordable premiums. Compare health insurance, term life insurance, car and bike insurance policies online." />
            </Helmet>

            <section className="section bg-light">
                <div className="container">
                    <div className="product-header text-center">
                        <h1 className="page-title">
                            <Shield className="inline-icon" /> Insurance
                        </h1>
                        <p className="page-subtitle">
                            Protect yourself and your family from financial uncertainties. Compare and choose the right insurance policy today.
                        </p>
                    </div>

                    <div className="cards-grid">

                        {/* Category 1: Health Insurance */}
                        <Card title="Health Insurance" className="product-card">
                            <div className="card-icon-wrapper">
                                <Heart size={40} className="text-secondary" />
                            </div>
                            <p className="product-desc">
                                Cashless treatment at top hospitals. Covers pre-hospitalization and post-hospitalization expenses.
                            </p>
                            <div className="product-cta">
                                {/* [CONNECT AFFILIATE LINK HERE] */}
                                <Button href="#" external fullWidth className="mb-2">Get Best Plan</Button>
                            </div>
                        </Card>

                        {/* Category 2: Term Insurance */}
                        <Card title="Term Insurance" className="product-card">
                            <div className="card-icon-wrapper">
                                <Umbrella size={40} className="text-primary" />
                            </div>
                            <p className="product-desc">
                                Secure your family's future with high claim settlement ratio plans and affordable premiums.
                            </p>
                            <div className="product-cta">
                                {/* [CONNECT AFFILIATE LINK HERE] */}
                                <Button href="#" external fullWidth className="mb-2">Check Premium</Button>
                            </div>
                        </Card>

                        {/* Category 3: Car Insurance */}
                        <Card title="Car Insurance" className="product-card">
                            <div className="card-icon-wrapper">
                                <Car size={40} className="text-accent" />
                            </div>
                            <p className="product-desc">
                                Comprehensive coverage for your car against accidents, theft, and third-party liabilities.
                            </p>
                            <div className="product-cta">
                                {/* [CONNECT AFFILIATE LINK HERE] */}
                                <Button href="#" external fullWidth className="mb-2">Get Quote</Button>
                            </div>
                        </Card>

                        {/* Category 4: Bike Insurance */}
                        <Card title="Bike Insurance" className="product-card">
                            <div className="card-icon-wrapper">
                                <Bike size={40} className="text-success" />
                            </div>
                            <p className="product-desc">
                                Quick two-wheeler insurance renewal starting at just ₹500/year.
                            </p>
                            <div className="product-cta">
                                {/* [CONNECT AFFILIATE LINK HERE] */}
                                <Button href="#" external fullWidth className="mb-2">Renew Now</Button>
                            </div>
                        </Card>

                    </div>

                    {/* Lead Gen Form */}
                    <div className="eligibility-section">
                        <Card title="Talk to Insurance Expert" className="form-card">
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
                                <div className="input-group">
                                    <label className="input-label" htmlFor="type">Insurance Type</label>
                                    <select
                                        id="type"
                                        className="input-field select-field"
                                        value={formData.type}
                                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                    >
                                        <option>Health Insurance</option>
                                        <option>Term Life Insurance</option>
                                        <option>Car Insurance</option>
                                        <option>Bike Insurance</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-footer">
                                {/* [CONNECT WHATSAPP NUMBER HERE] */}
                                <Button fullWidth onClick={handleLeadSubmit} variant="primary">
                                    <Phone size={18} className="mr-2 inline" /> Get Call Back
                                </Button>
                            </div>
                        </Card>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Insurance;
