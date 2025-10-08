'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What materials do you use in your clothing?",
      answer: "Every Exclaim tee is made with a premium bamboo-cotton blend. This fabric is softer than standard cotton, naturally breathable, durable, and more eco-friendly."
    },
    {
      question: "How do I determine my size?",
      answer: "Our tees run true to size. Please check the size guide on each product page for exact measurements to find your perfect fit."
    },
    {
      question: "What is your return policy?",
      answer: "We offer free returns within 30 days of delivery. Items must be unworn, unwashed, and in original condition."
    },
    {
      question: "How long does shipping take?",
      answer: "Orders ship within 2–3 business days. Standard US shipping typically takes 5–7 business days."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we ship across the USA. We're working on expanding international shipping soon — join our newsletter to stay updated."
    },
    {
      question: "How do I care for my garments?",
      answer: "For best results, machine wash cold with similar colors and line dry. This helps preserve both the softness of the bamboo cotton and the print quality."
    }
  ];

  // Structured data for FAQ
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      
      <section 
        className="py-12 sm:py-16 lg:py-20 bg-white h-auto px-4 sm:px-6 lg:px-8 mx-auto" 
        style={{ maxWidth: '1570px', width: '100%' }}
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <div className="w-full">
          <header className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Everything you need to know About ExClaims sustainable statement tees, from materials to shipping and care instructions.
            </p>
          </header>

          <div className="mx-auto space-y-4 ">
            {faqs.map((faq, index) => (
              <article 
                key={index} 
                className="border border-gray-200 rounded-2xl overflow-hidden"
                itemScope
                itemType="https://schema.org/Question"
              >
                <button
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h2 
                    className="text-base sm:text-lg font-semibold text-gray-900 pr-4"
                    itemProp="name"
                  >
                    {faq.question}
                  </h2>
                  <svg
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div 
                    className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 bg-gray-50"
                    id={`faq-answer-${index}`}
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p 
                      className="text-sm sm:text-base text-gray-600 leading-relaxed"
                      itemProp="text"
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>

          {/* Additional Help Section */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Cant find what you are looking for? Our customer service team is here to help with any questions about our sustainable statement tees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Contact Support
                </a>
                <a 
                  href="mailto:info@exclaimstatedts.com" 
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black hover:text-white transition-colors duration-200"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}