'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3 font-sans">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="rounded-xl bg-white border border-gray-200/80 shadow-sm overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left group hover:bg-gray-50/70 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-gray-900 group-hover:text-[#725b38] transition-colors text-sm sm:text-base pr-4">
                {item.question}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-[#725b38]/10 text-[#725b38] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#725b38]/15' : ''}`}>
                <ChevronDown size={18} />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-gray-600 text-sm leading-relaxed border-t border-gray-100/80">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
