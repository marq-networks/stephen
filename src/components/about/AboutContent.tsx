'use client';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function AboutContent() {
  // Structured data for About content
  const aboutContentStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Exclaim's Mission: Sustainable Statement Tees That Speak Your Truth",
    "description": "Learn About ExClaim's commitment to creating meaningful statement tees using sustainable bamboo-cotton materials, our design philosophy, and why we believe fashion should be a force for positive change.",
    "author": {
      "@type": "Organization",
      "name": "Exclaim"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Exclaim",
      "logo": {
        "@type": "ImageObject",
        "url": "https://Exclaim.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://Exclaim.com/about"
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutContentStructuredData) }}
      />
      
      <section 
        className="py-12 sm:py-16 lg:py-20 font-extrabold text-black"
        itemScope
        itemType="https://schema.org/Article"
        id="story"
      >
        <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Content - Heading, Button and Text Paragraphs */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 lg:mb-16 items-center justify-baseline"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Left - Main Heading and Button */}
            <motion.div className="lg:col-span-2" variants={itemVariants}>
              <h2 
                className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-black mb-4 sm:mb-6"
                itemProp="headline"
              >
                We create statement tees that cut through the noise, speak with authenticity and, above all, inspire meaningful change.
              </h2>
              <motion.a
                href="/shop"
                className="inline-block bg-[#46c34c] hover:bg-[#479f78] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium transition-colors duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Shop Our Collection
              </motion.a>
            </motion.div>

            {/* Middle - First Paragraph */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <p className="text-black text-sm leading-relaxed">
                ExClaim believes in the transformative power of fashion to tell stories, evoke emotions, and create meaningful connections. Our approach blends sustainable materials with thoughtful design, crafting statement tees that not only look exceptional but also reflect the wearer’s authentic self.
              </p>
            </motion.div>

            {/* Right - Second Paragraph */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <p className="text-black text-sm leading-relaxed">
                Our team brings together passionate designers, sustainability advocates, and storytellers who share one mission to push boundaries in conscious fashion. We believe that great clothing should be accessible, sustainable, and impactful principles that shape every tee we create.
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom - Brand Image */}
          <motion.div 
            className="w-full mb-12 lg:mb-20"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/about.png"
              alt="Exclaim team working on sustainable statement tee designs - showcasing our collaborative approach to meaningful fashion"
              width={1200}
              height={600}
              className="rounded-lg object-cover w-full h-auto"
              itemProp="image"
            />
          </motion.div>

          {/* Philosophy Section */}
          <motion.div 
            className="space-y-12 lg:space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Our Philosophy */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
              variants={itemVariants}
            >
              <header>
                <h3 className="text-3xl sm:text-4xl font-bold text-black mb-3 sm:mb-4">Our Philosophy</h3>
                <p className="text-sm sm:text-md text-black">At ExClaim, we believe quality speaks louder than quantity.</p>
              </header>
              <div>
                <p className="text-sm sm:text-md text-black font-bold leading-relaxed">
                   We believe a true statement tee is more than just aesthetics it’s a form of self-expression that connects meaning, comfort, and mindfulness.
Each piece is thoughtfully crafted from a premium bamboo-cotton blend, merging softness, strength, and environmental care. Every design is created with respect for both the wearer and the planet, proving that style and sustainability can coexist without compromise
                </p>
              </div>
            </motion.div>

            {/* Materials & Craftsmanship */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
              variants={itemVariants}
            >
              <header>
                <h3 className="text-3xl sm:text-4xl font-bold text-black mb-3 sm:mb-4">Materials & Craftsmanship</h3>
                <p className="text-sm sm:text-md text-black">At ExClaim, we believe quality speaks louder than quantity.</p>
              </header>
              <div>
                <p className="text-sm sm:text-md font-bold text-black leading-relaxed">
                   Every statement tee begins with a premium bamboo-cotton blend naturally breathable, ultra-soft, and environmentally conscious.
We collaborate with ethical manufacturers who share our dedication to responsible production, ensuring each piece meets the highest standards of comfort, durability, and design integrity.
Our commitment to sustainable craftsmanship means you’re not just wearing a tee you’re wearing your values
                </p>
              </div>
            </motion.div>

            {/* Why We Do It */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
              variants={itemVariants}
            >
              <header>
                <h3 className="text-3xl sm:text-4xl font-bold text-black mb-3 sm:mb-4">Why We Do It</h3>
                <p className="text-sm sm:text-md text-black">Fashion as a force for positive change.</p>
              </header>
              <div>
                <p className="text-sm sm:text-md font-bold text-black leading-relaxed">
                  At ExClaim, our mission is to create statement tees that inspire, resonate, and spark meaningful change — in both fashion and society.
We believe clothing is more than fabric; it’s a medium for self-expression and environmental consciousness. Each tee is an opportunity to make a statement about who you are, what you believe in, and the change you want to see in the world.
We’re not just designing apparel; we’re building a community of conscious individuals who choose sustainability, authenticity, and comfort without compromise.
                </p>
              </div>
            </motion.div>

            {/* Our Impact */}
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start"
              variants={itemVariants}
            >
              <header>
                <h3 className="text-3xl sm:text-4xl font-bold text-black mb-3 sm:mb-4">Our Impact</h3>
                <p className="text-sm sm:text-md text-black">Measuring success beyond profit.</p>
              </header>
              <div>
                <p className="text-sm sm:text-md font-bold text-black leading-relaxed">
                  Every Exclaim tee represents a step toward a more sustainable future. We measure our success not just in sales, but in the positive environmental impact we create through our choice of materials, ethical manufacturing processes, and the meaningful messages we help our customers share with the world. From reducing water usage in production to supporting fair labor practices, we are committed to transparency and continuous improvement in our sustainability journey.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Call-to-Action Section */}
          <motion.div
            className="mt-16 lg:mt-20 text-center bg-gray-50 rounded-2xl p-8 sm:p-12"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
              Ready to Make Your Statement?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands who have discovered the perfect blend of sustainability, comfort, and meaningful expression with Exclaims statement tees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#46c34c] text-white font-semibold rounded-lg hover:bg-[#38db41] transition-colors duration-300"
              >
                Shop Statement Tees
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#46c34c] text-[#46c34c] font-semibold rounded-lg hover:bg-[#46c34c] hover:text-white transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// ...existing code ...
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "About ExClaim - Sustainable Statement Tees",
              "description": "Learn About ExClaim's mission to create meaningful, sustainable statement tees using eco-friendly materials and ethical manufacturing practices.",
              "author": {
                "@type": "Organization",
                "name": "Exclaim",
                "url": "/LOGO.png"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Exclaim",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/LOGO.png"
                }
              }
            })
          }}
        />