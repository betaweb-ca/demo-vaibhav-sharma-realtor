import { useState } from 'react';
import { faqs } from '../utils/data';
import SectionHeading from './SectionHeading';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const section = faqs.section;

  return (
    <section className="section bg-[var(--color-surface)]">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow={section.eyebrow} title={section.title} subtitle={section.subtitle} />
        <div className="bg-white rounded-2xl border border-slate-200 divide-y divide-slate-200">
          {faqs.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="w-full text-left px-4 py-4 bg-transparent border-0 cursor-pointer text-[var(--color-primary)] font-medium flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  {item.question}
                  <span className="text-[var(--color-accent)] text-xl leading-none">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-slate-600 leading-relaxed">{item.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
