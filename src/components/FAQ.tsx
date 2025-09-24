'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What materials do you use in your clothing?",
      answer: "We use premium, sustainable materials including 100% organic cotton, recycled polyester, and ethically sourced wool. All our fabrics are carefully selected for comfort, durability, and environmental responsibility."
    },
    {
      question: "How do I determine my size?",
      answer: "We provide detailed size charts for each product. We recommend measuring yourself and comparing with our size guide. If you're between sizes, we generally recommend sizing up for a more comfortable fit."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unworn items in original condition with tags attached. Returns are free for exchanges, and we provide prepaid return labels for your convenience."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days within the US. Express shipping (1-2 business days) and international shipping options are also available. You'll receive tracking information once your order ships."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide. International shipping times vary by location (typically 7-14 business days). Customs duties and taxes may apply depending on your country's regulations."
    },
    {
      question: "How do I care for my garments?",
      answer: "Each item comes with specific care instructions on the label. Generally, we recommend washing in cold water, using mild detergent, and air drying when possible to maintain the quality and longevity of your garments."
    }
  ];

  return (
    <section className="py-20 bg-white h-auto px-10 w-full">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our products, shipping, and policies.
          </p>
        </div>

        <div className=" mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-black pr-8">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}