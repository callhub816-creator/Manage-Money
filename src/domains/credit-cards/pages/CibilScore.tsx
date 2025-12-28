
import React from 'react';
import SEO from '../../../shared/components/SEO';

const CibilScore: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SEO
        title="CIBIL Score India - Check Score & Improvement Tips"
        description="Learn how CIBIL score works in India. Find tips to improve your credit score, how to download CIBIL report, and why it matters for loans."
      />

      <article className="prose prose-slate lg:prose-lg max-w-none">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Everything You Need to Know About CIBIL Score</h1>

        <div className="bg-indigo-900 text-white p-8 rounded-2xl mb-12 flex flex-col md:flex-row items-center gap-8 shadow-xl">
          <div className="text-center md:text-left flex-grow">
            <h2 className="text-white text-2xl font-bold mb-2">What is a good CIBIL score?</h2>
            <p className="text-indigo-100 opacity-90">In India, a score of 750 or above is considered excellent for getting loans approved at low interest rates.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-full border-4 border-white/20">
            <span className="text-5xl font-black">750+</span>
          </div>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4">What is CIBIL Score?</h2>
          <p className="text-slate-600">
            A CIBIL score is a 3-digit numeric summary of your credit history. It ranges from 300 to 900. Lenders like banks and NBFCs check your CIBIL score to evaluate your creditworthiness before approving a loan or credit card.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 border-l-4 border-blue-600 pl-4">How to Improve Your CIBIL Score?</h2>
          <ul className="list-disc pl-6 space-y-3 text-slate-600">
            <li><strong>Pay Bills on Time:</strong> Late payments are the biggest killers of credit scores.</li>
            <li><strong>Keep Credit Utilization Low:</strong> Don't use more than 30% of your credit card limit.</li>
            <li><strong>Avoid Multiple Applications:</strong> Every time you apply for a loan, your score drops slightly.</li>
            <li><strong>Check for Errors:</strong> Regularly review your credit report for incorrect entries.</li>
          </ul>

          <div className="bg-slate-100 p-8 rounded-xl border border-slate-200 mt-12">
            <h3 className="text-xl font-bold mb-4">Want to check your score for FREE?</h3>
            <p className="text-slate-600 mb-6">We've partnered with top Indian credit bureaus to offer you a free monthly credit health check.</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 shadow">
              Check Free Credit Score
            </button>
          </div>
        </section>
      </article>
    </div>
  );
};

export default CibilScore;
