import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Info, ShieldCheck, Target, Users, AlertTriangle, FileText } from 'lucide-react';
import Card from '../../components/ui/Card';
import '../../styles/Legal.css';

const AboutUs = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Manage Money</title>
                <meta name="description" content="Learn more about Manage Money, an independent personal finance information platform in India helping you make smart financial decisions." />
            </Helmet>

            <section className="section bg-light">
                <div className="container">
                    <h1 className="page-title text-center">
                        <Info className="inline-icon" /> About Us
                    </h1>

                    <div className="legal-content-wrapper">
                        {/* SECTION 1: Introduction */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <Users size={32} />
                                <h2>Who We Are</h2>
                            </div>
                            <p>
                                Manage Money is an independent personal finance information platform designed to help people in India make better financial decisions.
                                We simplify complex topics like credit cards, personal loans, CIBIL score, insurance, and financial planning using easy-to-understand language.
                            </p>
                        </Card>

                        {/* SECTION 2: What We Do */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <FileText size={32} />
                                <h2>What We Do</h2>
                            </div>
                            <ul className="legal-list">
                                <li>Help users compare credit cards, loans, and insurance options</li>
                                <li>Provide free financial tools like EMI and SIP calculators</li>
                                <li>Explain documents required for financial products</li>
                                <li>Educate users about CIBIL score and how to improve it</li>
                                <li>Share practical, problem-based financial guides</li>
                            </ul>
                        </Card>

                        {/* SECTION 3: How We Earn Money */}
                        <Card className="legal-card hover-none highlight-border">
                            <div className="card-header-icon">
                                <Target size={32} />
                                <h2>How We Earn Money</h2>
                            </div>
                            <p>
                                Manage Money earns revenue through affiliate partnerships with banks, financial institutions, and fintech companies.
                                When users apply for products through links on our website, we may earn a commission at no extra cost to the user.
                            </p>
                        </Card>

                        {/* SECTION 4: What We Are NOT */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <AlertTriangle size={32} />
                                <h2>What We Are NOT</h2>
                            </div>
                            <ul className="legal-list cross-list">
                                <li>We are not a bank or financial institution</li>
                                <li>We do not provide financial advice</li>
                                <li>We do not charge users any money</li>
                                <li>We do not ask for sensitive information like OTPs, passwords, or bank details</li>
                            </ul>
                        </Card>

                        {/* SECTION 5: User Data & Privacy */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <ShieldCheck size={32} />
                                <h2>User Data & Privacy</h2>
                            </div>
                            <p>
                                We may collect basic user information such as name, email, or phone number when users voluntarily submit forms on our website.
                                This data is used only to contact users regarding relevant financial products or services and is handled as per our Privacy Policy.
                            </p>
                        </Card>

                        {/* SECTION 6: Our Mission */}
                        <div className="mission-statement text-center">
                            <h3>Our Mission</h3>
                            <p>
                                "Our mission is to make financial information simple, transparent, and accessible for everyone in India so they can manage their money smarter."
                            </p>
                        </div>

                        {/* SECTION 7: Contact Reference */}
                        <div className="text-center mt-xl">
                            <p>
                                If you have any questions or concerns, feel free to contact us through the <a href="/contact-us" className="text-link">Contact Us</a> page.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
