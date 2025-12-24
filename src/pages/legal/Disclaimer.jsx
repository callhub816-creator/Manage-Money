import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, Info, DollarSign, ShieldAlert, CheckCircle, ExternalLink, Mail } from 'lucide-react';
import Card from '../../components/ui/Card';
import '../../styles/Legal.css';

const Disclaimer = () => {
    return (
        <>
            <Helmet>
                <title>Disclaimer | Manage Money</title>
                <meta name="description" content="Disclaimer for the Manage Money personal finance website. Read about our affiliate relationships and risk disclosures." />
            </Helmet>

            <section className="section bg-light">
                <div className="container">
                    <h1 className="page-title text-center">
                        <AlertTriangle className="inline-icon" /> Disclaimer
                    </h1>

                    <div className="legal-content-wrapper">

                        {/* SECTION 1: General Information */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <Info size={28} />
                                <h2>General Information</h2>
                            </div>
                            <p>
                                Manage Money is an independent informational website. All content provided on this website is for general information and educational purposes only.
                            </p>
                        </Card>

                        {/* SECTION 2: Affiliate Disclaimer */}
                        <Card className="legal-card hover-none highlight-border">
                            <div className="card-header-icon">
                                <DollarSign size={28} />
                                <h2>Affiliate Disclaimer</h2>
                            </div>
                            <p>
                                Some links on this website are affiliate links. This means we may earn a commission at no extra cost to you if you choose to apply for financial products through these links.
                            </p>
                        </Card>

                        {/* SECTION 3: No Financial Advice */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <ShieldAlert size={28} />
                                <h2>No Financial Advice</h2>
                            </div>
                            <p className="font-medium">
                                We do not provide financial advice. The information on this website should not be considered as financial, legal, or professional advice.
                                Users are advised to consult a qualified professional before making any financial decisions.
                            </p>
                        </Card>

                        {/* SECTION 4: Accuracy of Information */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <CheckCircle size={28} />
                                <h2>Accuracy of Information</h2>
                            </div>
                            <p>
                                While we strive to keep the information accurate and up to date, Manage Money does not guarantee the completeness, reliability, or accuracy of any information on this website.
                            </p>
                        </Card>

                        {/* SECTION 5: Risk Disclosure */}
                        <Card className="legal-card hover-none">
                            <h2>Risk Disclosure</h2>
                            <p>
                                Any action you take upon the information provided on this website is strictly at your own risk.
                                Manage Money will not be liable for any losses or damages in connection with the use of this website.
                            </p>
                        </Card>

                        {/* SECTION 6: External Links */}
                        <Card className="legal-card hover-none">
                            <div className="card-header-icon">
                                <ExternalLink size={28} />
                                <h2>External Links</h2>
                            </div>
                            <p>
                                Our website may contain links to third-party websites. Manage Money has no control over the content, services, or policies of these external websites and is not responsible for them.
                            </p>
                        </Card>

                        {/* SECTION 7: Contact Information */}
                        <div className="text-center mt-xl">
                            <div className="inline-flex items-center gap-2 justify-center mb-2">
                                <Mail size={24} className="text-primary" />
                                <h3>Contact Information</h3>
                            </div>
                            <p>
                                If you have any questions regarding this Disclaimer, please contact us through the <a href="/contact-us" className="text-link">Contact Us</a> page.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Disclaimer;
