'use client';
import { useState } from 'react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "What's included in a monthly retainer?",
      answer: "Our monthly retainer includes dedicated design support, unlimited revisions, priority response times, and access to our full design team."
    },
    {
      question: "How many requests can I make per month?",
      answer: "You can make unlimited design requests per month. We work through them one at a time to ensure quality and attention to detail."
    },
    {
      question: "Is a retainer better than a one-off project?",
      answer: "Retainers provide consistent support, better rates, and priority access to our team, making them ideal for ongoing design needs."
    },
    {
      question: "Who will I be working with?",
      answer: "You'll work directly with our senior designers and have a dedicated account manager to ensure smooth communication."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with clients globally and accommodate different time zones to ensure effective collaboration."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 px-6 bg-white h-[80vh]">
      <div className="max-w-7xl mx-auto">
        {/* Premium Cotton Description */}
        <div className="text-center mb-20">
          <p className="text-lg text-gray-800 leading-relaxed max-w-4xl mx-auto font-extrabold">
            Premium cotton shirts that redefine comfort and style — crafted from 100% pure cotton, designed for breathability, durability, and an effortlessly elegant look. Soft on skin, light as air, and perfect for every occasion. Just pure comfort, no compromise.
          </p>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start">
          {/* Left Column - FAQ Title and Description */}
          <div className="lg:col-span-1">
            <h2 className="text-6xl md:text-7xl font-bold text-black mb-6">FAQ</h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Get quick answers about working with us and our approach to digital solutions.
            </p>

            {/* Ask a Question Button */}
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
              Ask a question
            </button>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-2 space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between text-left py-4 hover:text-gray-600 transition-colors duration-200 group"
                >
                  <span className="text-gray-800 font-medium pr-4 text-lg">{faq.question}</span>
                  <div className="flex items-center">
                    <span className="text-2xl text-gray-600 font-light">
                      {openItems.includes(index) ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {/* Expandable Answer */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openItems.includes(index)
                    ? 'max-h-96 opacity-100 mt-4'
                    : 'max-h-0 opacity-0'
                  }`}>
                  <p className="text-gray-600 leading-relaxed pr-8 text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}