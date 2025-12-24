import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, FileText, Globe, UserCheck, Mail } from 'lucide-react';
import Card from '../../components/ui/Card';
import '../../styles/Legal.css';

const PrivacyPolicy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Manage Money</title>
                <meta name="description" content="Privacy Policy of Manage Money explaining how user data is collected, used, and protected on our finance platform." />
            </Helmet>

            <section className="section bg-light">
                <div className="container">
                    <h1 className="page-title text-center">
                        <Shield className="inline-icon" /> Privacy Policy
                    </h1>

                    <div className="legal-content-wrapper">

                        {/* SECTION 1: Introduction */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <FileText size={28} />
                                <h2>Introduction</h2>
                            </div>
                            <p>
                                At Manage Money, we respect your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit or interact with our website.
                            </p>
                        </Card>

                        {/* SECTION 2: Information We Collect */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <Eye size={28} />
                                <h2>Information We Collect</h2>
                            </div>
                            <p className="mb-2">We may collect the following basic information:</p>
                            <ul className="legal-list">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Basic usage data (pages visited, tools used)</li>
                            </ul>
                            <div className="doc-note mt-2">
                                <strong>Important:</strong> We do not collect sensitive personal data such as bank account details, credit/debit card numbers, OTPs, or passwords.
                            </div>
                        </Card>

                        {/* SECTION 3: How We Use Your Information */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <UserCheck size={28} />
                                <h2>How We Use Your Information</h2>
                            </div>
                            <ul className="legal-list">
                                <li>To respond to user inquiries</li>
                                <li>To contact users regarding financial products or offers</li>
                                <li>To improve website tools and content</li>
                                <li>To communicate updates if required</li>
                            </ul>
                        </Card>

                        {/* SECTION 4: Affiliate Links */}
                        <Card className="legal-card hover-none highlight-border">
                            <div className="card-header-icon">
                                <Globe size={28} />
                                <h2>Affiliate Links</h2>
                            </div>
                            <p>
                                Some pages on this website contain affiliate links. If you click on these links and apply for a product, we may earn a commission at no extra cost to you.
                            </p>
                        </Card>

                        {/* SECTION 5: Cookies */}
                        <Card className="legal-card hover-none">
                            <h2>Cookies</h2>
                            <p>
                                We may use cookies to improve user experience and analyze website traffic. Users can choose to disable cookies through their browser settings.
                            </p>
                        </Card>

                        {/* SECTION 6: Data Protection */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <Lock size={28} />
                                <h2>Data Protection</h2>
                            </div>
                            <p>
                                We take reasonable steps to protect user information and do not sell or misuse personal data.
                            </p>
                        </Card>

                        {/* SECTION 7: Third-Party Links */}
                        <Card className="legal-card hover-none">
                            <h2>Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites.
                            </p>
                        </Card>

                        {/* SECTION 8: User Consent */}
                        <Card className="legal-card hover-none">
                            <h2>User Consent</h2>
                            <p>
                                By using this website, you consent to this Privacy Policy.
                            </p>
                        </Card>

                        {/* SECTION 9: Updates */}
                        <Card className="legal-card hover-none">
                            <h2>Updates</h2>
                            <p>
                                This Privacy Policy may be updated from time to time. Changes will be reflected on this page.
                            </p>
                        </Card>

                        {/* SECTION 10: Contact Information */}
                        <div className="text-center mt-xl">
                            <div className="inline-flex items-center gap-2 justify-center mb-2">
                                <Mail size={24} className="text-primary" />
                                <h3>Contact Information</h3>
                            </div>
                            <p>
                                For any privacy-related questions, please contact us through the <a href="/contact-us" className="text-link">Contact Us</a> page.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;
