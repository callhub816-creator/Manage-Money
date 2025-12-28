import React from 'react';
import SEO from '../../../shared/components/SEO';

const PageLayout: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h1 className="text-4xl font-bold mb-8 text-slate-900">{title}</h1>
    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

export const AboutUs: React.FC = () => (
  <PageLayout title="About Us">
    <SEO title="About Us - ManageMoney" description="Learn about ManageMoney, your trusted finance comparison partner." />
    <p>ManageMoney is a premier financial comparison portal focused on the Indian market. We help users compare various financial products side-by-side to find the best match for their profile.</p>
    <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 my-6">
      <p><strong>Important Notice:</strong> ManageMoney is <strong>NOT a lender</strong>. We are a comparison platform that facilitates referrals to <strong>RBI-compliant financial institutions</strong>.</p>
    </div>
    <p>Our mission is to simplify complex financial products like credit cards, personal loans, and insurance for the common man with absolute transparency.</p>
  </PageLayout>
);

export const PrivacyPolicy: React.FC = () => (
  <PageLayout title="Privacy Policy">
    <SEO title="Privacy Policy - ManageMoney" description="How we handle and protect your data." />
    <p>At ManageMoney, we take your privacy seriously. We collect basic contact information (Name, Mobile, City, Income) when you use our assistance forms.</p>
    <h2 className="text-xl font-bold text-slate-800 mt-6">Data Purpose</h2>
    <p>This data is used solely to facilitate your application with our partner lenders. By providing your details, you authorize us to share this information with specific banks or NBFCs you are interested in.</p>
    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 my-8">
      <p className="font-bold text-blue-900 uppercase">We do not sell your personal data to third-party marketing agencies.</p>
    </div>
    <p>Any information collected via our tools or calculators is used only to provide you with accurate financial estimates.</p>
  </PageLayout>
);

export const TermsConditions: React.FC = () => (
  <PageLayout title="Terms & Conditions">
    <SEO title="Terms and Conditions - ManageMoney" description="Rules for using our platform." />
    <p>By accessing manage-money.online, you agree to these terms. Content is for informational purposes only and does not constitute financial advice.</p>
    <h2 className="text-xl font-bold text-slate-800 mt-6">Referee Role</h2>
    <p>ManageMoney is not a lender. The final approval of any loan or credit card is at the sole discretion of the RBI-regulated financial institution. Approval depends entirely on lender verification of your profile.</p>
    <h2 className="text-xl font-bold text-slate-800 mt-6">Accuracy</h2>
    <p>While we strive for accuracy, users are responsible for verifying all terms on the official lender website before signing any agreement.</p>
  </PageLayout>
);

export const Disclaimer: React.FC = () => (
  <PageLayout title="Disclaimer">
    <SEO title="Disclaimer - ManageMoney" description="Legal disclosures and risk warnings." />
    <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-8">
      <h2 className="text-xl font-bold text-slate-900 mb-4">Affiliate Disclosure</h2>
      <p>We may earn a referral commission when you apply through our links. This does not increase your cost. We recommend products based on eligibility, not commission. We only feature RBI-compliant lenders.</p>
    </section>
    <section className="bg-red-50 p-6 rounded-xl border border-red-100 mb-8">
      <h2 className="text-xl font-bold text-red-900 mb-4">Risk Warning</h2>
      <p className="text-red-800">Loans and credit cards carry financial risks. Defaulting can damage your CIBIL score. Always borrow responsibly and only what you can afford to repay.</p>
    </section>
    <p className="text-sm text-slate-500 italic mt-12 border-t pt-4">Last Updated: December 28, 2025</p>
  </PageLayout>
);
