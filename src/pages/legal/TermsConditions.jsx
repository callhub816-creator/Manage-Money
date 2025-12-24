import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, AlertCircle, ShieldAlert, Link as LinkIcon, Lock, Gavel, Mail } from 'lucide-react';
import Card from '../../components/ui/Card';
import '../../styles/Legal.css';

const TermsConditions = () => {
    return (
        <>
            <Helmet>
                <title>Terms & Conditions | Manage Money</title>
                <meta name="description" content="Terms and conditions governing the use of the Manage Money website. Please read carefully before using our services." />
            </Helmet>

            <section className="section bg-light">
                <div className="container">
                    <h1 className="page-title text-center">
                        <Gavel className="inline-icon" /> Terms & Conditions
                    </h1>

                    <div className="legal-content-wrapper">

                        {/* SECTION 1: Acceptance of Terms */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <FileText size={28} />
                                <h2>1. Acceptance of Terms</h2>
                            </div>
                            <p>
                                By accessing and using the Manage Money website, you agree to comply with and be bound by these Terms & Conditions.
                                If you do not agree with any part of these terms, please do not use this website.
                            </p>
                        </Card>

                        {/* SECTION 2: Website Purpose */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <AlertCircle size={28} />
                                <h2>2. Website Purpose</h2>
                            </div>
                            <p>
                                Manage Money is an independent informational platform that provides content related to personal finance,
                                including credit cards, personal loans, insurance, CIBIL score, calculators, and financial guides.
                            </p>
                        </Card>

                        {/* SECTION 3: No Financial Advice */}
                        <Card className="legal-card hover-none highlight-border">
                            <div className="card-header-icon">
                                <ShieldAlert size={28} />
                                <h2>3. No Financial Advice</h2>
                            </div>
                            <p className="font-medium">
                                The information provided on this website is for general informational and educational purposes only.
                                It should not be considered as financial, legal, or professional advice.
                            </p>
                        </Card>

                        {/* SECTION 4: Affiliate Relationships */}
                        <Card className="legal-card hover-none">
                            <h2>4. Affiliate Relationships</h2>
                            <p>
                                Manage Money participates in affiliate marketing programs with banks, financial institutions, and fintech companies.
                                This means we may earn a commission when users apply for products through links available on our website, at no extra cost to the user.
                            </p>
                        </Card>

                        {/* SECTION 5: User Responsibilities */}
                        <Card className="legal-card hover-none">
                            <h2>5. User Responsibilities</h2>
                            <ul className="legal-list">
                                <li>Users must provide accurate and truthful information in forms</li>
                                <li>Users are responsible for verifying product details independently</li>
                                <li>Users should use calculators and tools for estimation purposes only</li>
                                <li>Any financial decision taken based on website content is at the user’s own risk</li>
                            </ul>
                        </Card>

                        {/* SECTION 6: Limitation of Liability */}
                        <Card className="legal-card hover-none">
                            <h2>6. Limitation of Liability</h2>
                            <p>
                                Manage Money shall not be held responsible for any loss, damage, or financial decisions made by users based on the information provided on this website.
                            </p>
                        </Card>

                        {/* SECTION 7: External Links */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <LinkIcon size={28} />
                                <h2>7. External Links</h2>
                            </div>
                            <p>
                                Our website may contain links to third-party websites. We do not control or take responsibility for the content, policies, or services offered by these external websites.
                            </p>
                        </Card>

                        {/* SECTION 8: Intellectual Property */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <Lock size={28} />
                                <h2>8. Intellectual Property</h2>
                            </div>
                            <p>
                                All content, design, text, and logos on this website are the property of Manage Money unless otherwise stated.
                                Unauthorized use or reproduction of content is prohibited.
                            </p>
                        </Card>

                        {/* SECTION 9: Changes to Terms */}
                        <Card className="legal-card hover-none">
                            <h2>9. Changes to Terms</h2>
                            <p>
                                Manage Money reserves the right to modify or update these Terms & Conditions at any time without prior notice.
                                Continued use of the website signifies acceptance of the updated terms.
                            </p>
                        </Card>

                        {/* SECTION 10: Governing Law */}
                        <Card className="legal-card hover-none">
                            <h2>10. Governing Law</h2>
                            <p>
                                These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.
                            </p>
                        </Card>

                        {/* SECTION 11: Contact Information */}
                        <div className="text-center mt-xl">
                            <div className="inline-flex items-center gap-2 justify-center mb-2">
                                <Mail size={24} className="text-primary" />
                                <h3>Contact Information</h3>
                            </div>
                            <p>
                                If you have any questions regarding these Terms & Conditions, please contact us through the <a href="/contact-us" className="text-link">Contact Us</a> page.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default TermsConditions;
