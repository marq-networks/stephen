'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function EditorialFashion() {
  return (
    <section
      className="py-12 sm:py-16 lg:py-20 mx-auto px-4 sm:px-6 lg:px-8"
      style={{ maxWidth: '1570px', width: '100%' }}
      role="region"
      aria-label="Editorial Fashion Philosophy and Brand Story"
    >
      {/* SEO-optimized structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Stephen Fashion",
            "description": "Sustainable statement fashion brand creating meaningful apparel for authentic self-expression",
            "foundingDate": "2020",
            "url": typeof window !== 'undefined' ? window.location.origin : '',
            "logo": typeof window !== 'undefined' ? `${window.location.origin}/logo.png` : '',
            "sameAs": [],
            "brand": {
              "@type": "Brand",
              "name": "Stephen",
              "description": "Editorial fashion meets conscious living through sustainable statement tees"
            },
            "makesOffer": {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Statement T-Shirts",
                "category": "Apparel",
                "material": "Organic Cotton",
                "description": "Sustainable statement tees with meaningful messages for authentic self-expression"
              }
            },
            "values": [
              "Sustainability",
              "Authentic Self-Expression",
              "Mindful Living",
              "Quality Craftsmanship",
              "Environmental Responsibility"
            ]
          })
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Stephen",
            "url": "https://stephen.com",
            "logo": "/LOGO.png",
            "description": "Sustainable statement tees with meaningful messages for conscious consumers"
          })
        }}
      />

      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Redefining
              Statement<br />
              <span className="text-[#46c34c]">Fashion</span>
            </motion.h1>

            <motion.div
              className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                Since its founding, ExClaim has stood at the forefront of sustainable statement fashion — creating premium tees that challenge conventions and celebrate authentic self-expression.
              </p>

              <p>
                Our philosophy is simple: clothing should be a form of storytelling, a reflection of thought, and a celebration of individuality. Each design begins with an idea — a spark of reflection on culture, consciousness, or truth — and transforms into something tangible that can be worn with pride.
              </p>

              <p>
                Our philosophy is simple: clothing should be a form of storytelling, a reflection of thought, and a celebration of individuality. Each design begins with an idea — a spark of reflection on culture, consciousness, or truth — and transforms into something tangible that can be worn with pride.
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              className="grid grid-cols-2 gap-4 text-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#46c34c] rounded-full"></span>
                <span className="text-gray-700">100% Organic Cotton</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#46c34c] rounded-full"></span>
                <span className="text-gray-700">Eco-Friendly Printing</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#46c34c] rounded-full"></span>
                <span className="text-gray-700">Meaningful Messages</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-[#46c34c] rounded-full"></span>
                <span className="text-gray-700">Sustainable Practices</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/about">
                <button
                  className="bg-[#46c34c] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#46c34c]/90 transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto font-medium"
                  aria-label="Learn more About ExClaim's sustainable fashion story"
                >
                  Our Sustainable Story
                </button>
              </Link>
              <Link href="/shop">
                <button
                  className="border-2 border-[#46c34c] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-[#46c34c] hover:text-white transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto font-medium"
                  aria-label="Shop Stephen's statement tee collection"
                >
                  Shop Statement Tees
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/about.png"
                alt="Stephen sustainable statement fashion - organic cotton tees with meaningful messages for authentic self-expression"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority={false}
              />

              {/* Overlay with brand stats */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-lg">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">50+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Statement Designs</div>
                    </div>
                    {/* <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">10K+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Conscious Customers</div>
                    </div> */}
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">100%</div>
                      <div className="text-xs sm:text-sm text-gray-600">Organic Cotton</div>
                    </div>
                  </div>

                  {/* Additional brand values */}
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex justify-center space-x-4 text-xs text-gray-600">
                      <span className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></span>
                        Sustainable
                      </span>
                      <span className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-1"></span>
                        Authentic
                      </span>
                      <span className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-1"></span>
                        Meaningful
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional SEO Content Section */}
        <motion.div
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Why Choose Stephen Statement Fashion?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <motion.div
              className="text-center p-6 bg-gray-50 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-12 h-12 bg-[#46c34c] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🌱</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Sustainable Materials</h3>
              <p className="text-gray-600 text-sm">
                100% organic cotton sourced ethically, ensuring premium comfort while protecting our environment.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-gray-50 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="w-12 h-12 bg-[#46c34c] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">💭</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Meaningful Messages</h3>
              <p className="text-gray-600 text-sm">
                Each design carries philosophical depth, inspiring personal growth and authentic self-expression.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-gray-50 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="w-12 h-12 bg-[#46c34c] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">✨</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                Pre-shrunk, reinforced seams, and eco-friendly printing ensure lasting durability and comfort.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 bg-gray-50 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <div className="w-12 h-12 bg-[#46c34c] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Authentic Expression</h3>
              <p className="text-gray-600 text-sm">
                Wear your truth with confidence. Our designs empower authentic self-expression and mindful living.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Hidden SEO content */}
        <div className="sr-only">
          <h2>Stephen Sustainable Statement Fashion Keywords</h2>
          <p>
            Keywords: sustainable fashion, statement tees, organic cotton t-shirts, eco-friendly apparel,
            mindful fashion, conscious clothing, authentic self-expression, meaningful messages,
            sustainable statement fashion, organic cotton tees, eco-conscious apparel,
            philosophical fashion, mindful living clothing, sustainable t-shirts,
            ethical fashion brand, conscious fashion choices, meaningful apparel,
            sustainable clothing brand, organic statement tees, eco-friendly fashion
          </p>
          <p>
            Categories: Sustainable Fashion, Statement T-Shirts, Organic Cotton Apparel,
            Eco-Friendly Clothing, Mindful Fashion, Conscious Living, Authentic Expression
          </p>
        </div>
      </div>
    </section>
  );
}