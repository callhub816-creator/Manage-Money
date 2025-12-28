import React from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ items, title = "Frequently Asked Questions" }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="bg-white rounded-xl border border-slate-200">
      <div className="p-6 border-b border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900">{title}</h3>
      </div>

      <div className="divide-y divide-slate-200">
        {items.map((item, idx) => (
          <div key={idx} className="border-b border-slate-200 last:border-b-0">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
              className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
            >
              <span className="font-semibold text-slate-900 text-left">{item.question}</span>
              <span
                className={`text-2xl text-blue-600 transition-transform ${openIndex === idx ? 'rotate-180' : ''
                  }`}
                aria-hidden="true"
              >
                ⌄
              </span>
            </button>
            <div
              id={`faq-answer-${idx}`}
              role="region"
              className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <div className="py-2 text-slate-700 text-sm leading-relaxed">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
