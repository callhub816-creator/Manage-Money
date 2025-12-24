import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, CreditCard, Banknote, Home, UserCheck, Download, CheckCircle2 } from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import '../styles/Documents.css';

const DocumentSection = ({ title, icon: Icon, items, children }) => (
    <Card className="doc-card" title={
        <div className="doc-card-header">
            <Icon className="doc-icon" /> {title}
        </div>
    }>
        <ul className="doc-list">
            {items.map((item, index) => (
                <li key={index} className="doc-item">
                    <CheckCircle2 size={18} className="check-icon" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
        {children}
    </Card>
);

const Documents = () => {
    return (
        <>
            <Helmet>
                <title>Documents Required for Loans & Credit Cards in India</title>
                <meta name="description" content="Check mandatory documents for Credit Cards, Personal Loans, Home Loans, and KYC in India. Download free checklists PDF." />
            </Helmet>

            <section className="section bg-light">
                <div className="container">
                    <h1 className="page-title text-center">
                        <FileText className="inline-icon" /> Documents Required
                    </h1>
                    <p className="page-subtitle text-center">
                        Keep these documents handy for faster processing of loans and credit cards.
                    </p>

                    <div className="docs-grid">

                        {/* SECTION 1: Credit Cards */}
                        <DocumentSection
                            title="Credit Card Documents"
                            icon={CreditCard}
                            items={[
                                "PAN Card (Mandatory)",
                                "Aadhaar Card / Voter ID / Passport",
                                "Address Proof (Utility Bill / Rent Agreement)",
                                "Income Proof (Salary Slip / ITR)",
                                "Passport size photo"
                            ]}
                        >
                            <div className="doc-cta">
                                <p className="cta-text">Documents Ready? Apply for Credit Card</p>
                                <div className="cta-buttons">
                                    {/* [CONNECT AFFILIATE LINK HERE] */}
                                    <Button href="#" external >Apply Now</Button>

                                    {/* [CONNECT AFFILIATE LINK HERE] */}
                                    <Button href="#" external variant="outline">Check Eligibility</Button>
                                </div>
                            </div>
                        </DocumentSection>

                        {/* SECTION 2: Personal Loan */}
                        <DocumentSection
                            title="Personal Loan Documents"
                            icon={Banknote}
                            items={[
                                "PAN Card",
                                "Aadhaar Card",
                                "Address Proof (Passport / Driving License)",
                                "Last 3–6 months Bank Statement",
                                "Salary Slips / ITR",
                                "Employment Proof (ID Card)"
                            ]}
                        >
                            <div className="doc-cta">
                                <p className="cta-text">Get Personal Loan with These Documents</p>
                                <div className="cta-buttons">
                                    {/* [CONNECT AFFILIATE LINK HERE] */}
                                    <Button href="#" external>Apply for Loan</Button>

                                    {/* [CONNECT WHATSAPP NUMBER HERE] */}
                                    <Button href="#" external variant="secondary">Get Free Call Back</Button>
                                </div>
                            </div>
                        </DocumentSection>

                        {/* SECTION 3: Home Loan */}
                        <DocumentSection
                            title="Home Loan Documents"
                            icon={Home}
                            items={[
                                "PAN Card & Aadhaar Card",
                                "Address Proof (Current Residence)",
                                "Income Proof (Form 16 / ITR)",
                                "Property Documents (Chain of Title)",
                                "Sale Agreement / Allotment Letter",
                                "Bank Statements (Last 6 Months)"
                            ]}
                        >
                            <div className="doc-cta">
                                <p className="cta-text">Check Home Loan Eligibility</p>
                                <div className="cta-buttons">
                                    {/* [CONNECT AFFILIATE LINK HERE] */}
                                    <Button href="#" external fullWidth>Check Eligibility</Button>
                                </div>
                            </div>
                        </DocumentSection>

                        {/* SECTION 4: KYC Documents */}
                        <DocumentSection
                            title="KYC Documents List"
                            icon={UserCheck}
                            items={[
                                "PAN Card (Permanent Account Number)",
                                "Aadhaar Card (UIDAI)",
                                "Passport",
                                "Driving License",
                                "Voter ID Code"
                            ]}
                        >
                            <div className="doc-note">
                                <p>Note: KYC is mandatory for all financial products in India as per RBI guidelines.</p>
                            </div>
                        </DocumentSection>

                    </div>

                    {/* SECTION 5: Downloadable Checklists */}
                    <div className="downloads-section">
                        <h2 className="section-title text-center">Download Checklists</h2>
                        <div className="downloads-grid">
                            {[
                                { title: "Credit Card Checklist", file: "credit-card-docs.pdf" },
                                { title: "Personal Loan Checklist", file: "personal-loan-docs.pdf" },
                                { title: "Home Loan Checklist", file: "home-loan-docs.pdf" }
                            ].map((item, idx) => (
                                <Card key={idx} className="download-card">
                                    <div className="download-content">
                                        <FileText size={32} className="text-muted" />
                                        <h3>{item.title}</h3>

                                        {/* [CONNECT DOWNLOAD LINK HERE] */}
                                        <Button href="#" external variant="outline" className="btn-sm">
                                            <Download size={16} className="mr-2" /> Download PDF
                                        </Button>

                                        {/* [CONNECT WHATSAPP NUMBER HERE] or [CONNECT EMAIL HERE] */}
                                        {/* Optional capture form placeholder */}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default Documents;
