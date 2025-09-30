'use client';
import { motion } from 'motion/react';

export default function Features() {
  return (
    <section 
      className="py-12 sm:py-16 lg:py-20 mx-auto px-4 sm:px-6 lg:px-8" 
      style={{ maxWidth: '1570px', width: '100%' }}
      role="region"
      aria-label="Stephen Statement Fashion Features and Benefits"
    >
      {/* SEO-optimized structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Stephen Statement Tees",
            "description": "Premium organic cotton statement t-shirts with meaningful messages for authentic self-expression",
            "brand": {
              "@type": "Brand",
              "name": "Stephen"
            },
            "category": "Apparel",
            "material": "100% Organic Cotton",
            "features": [
              "Sustainable organic cotton material",
              "Eco-friendly printing process", 
              "Meaningful philosophical messages",
              "Pre-shrunk for perfect fit",
              "Reinforced seams for durability",
              "Authentic self-expression designs"
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "USD",
              "price": "40",
              "availability": "https://schema.org/InStock"
            }
          })
        }}
      />

      <div className="w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            What Makes Stephen Statement Tees Special
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Every Stephen tee combines sustainable materials, meaningful messages, and premium quality 
            to create clothing that feels as good as the values it represents.
          </p>
        </motion.div>

        {/* Sustainable Materials */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 border-b border-gray-200 pb-8 sm:pb-12 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black">
              Sustainable Materials
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our commitment to the planet starts with our choice of materials. Every Stephen tee is crafted 
              from premium organic cotton thats gentle on your skin and kind to the environment.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">100% Organic Cotton</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#46c34c]">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">GOTS Certified</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#46c34c]">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Pesticide-Free</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Ethically Sourced</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#46c34c]">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Carbon Neutral Shipping</span>
            </div>
          </div>
        </motion.div>

        {/* Meaningful Messages */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 border-b border-gray-200 pb-8 sm:pb-12 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black">
              Meaningful Messages
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Each design carries deep philosophical meaning, inspiring personal growth, mindful living, 
              and authentic self-expression. Wear your truth with confidence.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Processing...</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#46c34c]">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">The Whether is in U</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Life is Beautiful</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#46c34c]">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Whats Your Forecast?</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#46c34c]">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Processor</span>
            </div>
          </div>
        </motion.div>

        {/* Premium Quality */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 border-b border-gray-200 pb-8 sm:pb-12 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black">
              Premium Quality
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We believe in creating clothing that lasts. Every Stephen tee is built with attention to detail, 
              ensuring comfort, durability, and style that stands the test of time.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Pre-shrunk Fabric</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#46c34c]">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Reinforced Seams</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#46c34c]">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Perfect Fit</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Fade-Resistant Printing</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#46c34c]">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Machine Washable</span>
            </div>
          </div>
        </motion.div>

        {/* Authentic Expression */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 border-b border-gray-200 pb-8 sm:pb-12 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black">
              Authentic Expression
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Our designs empower you to express your authentic self. Each message is carefully crafted 
              to inspire conversation, reflection, and personal growth.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Mindful Living</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#46c34c]">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Personal Growth</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#46c34c]">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Self-Reflection</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Conversation Starters</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#46c34c]">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Empowerment</span>
            </div>
          </div>
        </motion.div>

        {/* Eco-Friendly Process */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black">
              Eco-Friendly Process
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              From design to delivery, we prioritize environmental responsibility. Our entire production 
              process is designed to minimize impact while maximizing quality and meaning.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Water-Based Inks</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#46c34c]">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Minimal Waste</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#46c34c]">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Renewable Energy</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Plastic-Free Packaging</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-[#46c34c]">•</span>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-[28px] text-black font-medium">Local Production</span>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16 sm:mt-20 bg-gray-50 rounded-2xl p-8 sm:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            Experience the Stephen Difference
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands who have discovered the perfect blend of sustainability, comfort, and meaningful expression. 
            Every purchase supports conscious fashion and authentic living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/shop" 
              className="bg-[#46c34c] text-white px-8 py-4 rounded-full hover:bg-[#46c34c]/90 transition-colors duration-300 font-medium text-lg"
              aria-label="Shop Stephen's sustainable statement tee collection"
            >
              Shop Statement Tees
            </a>
            <a 
              href="/about" 
              className="border-2 border-[#46c34c] text-black px-8 py-4 rounded-full hover:bg-[#46c34c] hover:text-white transition-colors duration-300 font-medium text-lg"
              aria-label="Learn more about Stephen's sustainable fashion mission"
            >
              Our Mission
            </a>
          </div>
        </motion.div>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h2>Stephen Statement Tee Features and Benefits</h2>
          <p>
            Keywords: sustainable statement tees, organic cotton t-shirts, eco-friendly apparel, 
            meaningful message clothing, authentic self-expression, mindful fashion, conscious clothing, 
            premium quality tees, sustainable fashion brand, ethical clothing, 
            philosophical t-shirts, personal growth apparel, empowerment clothing, 
            conversation starter tees, mindful living fashion, sustainable materials, 
            eco-friendly printing, reinforced seams, pre-shrunk cotton, fade-resistant printing
          </p>
          <p>
            Features: 100% organic cotton, GOTS certified, pesticide-free, ethically sourced, 
            carbon neutral shipping, meaningful messages, pre-shrunk fabric, reinforced seams, 
            perfect fit, fade-resistant printing, machine washable, water-based inks, 
            minimal waste production, renewable energy, plastic-free packaging, local production
          </p>
          <p>
            Benefits: authentic self-expression, mindful living, personal growth, self-reflection, 
            conversation starters, empowerment, sustainable fashion choice, premium comfort, 
            lasting durability, environmental responsibility, conscious living
          </p>
        </div>
      </div>
    </section>
  );
}