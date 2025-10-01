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
    "headline": "Stephen's Mission: Sustainable Statement Tees That Speak Your Truth",
    "description": "Learn about Stephen's commitment to creating meaningful statement tees using sustainable bamboo-cotton materials, our design philosophy, and why we believe fashion should be a force for positive change.",
    "author": {
      "@type": "Organization",
      "name": "Stephen"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Stephen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://stephen.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://stephen.com/about"
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
                Stephen believes in the transformative power of fashion to tell stories, evoke emotions, and create meaningful connections. Our approach combines sustainable materials with thoughtful design to deliver statement tees that not only look exceptional but also reflect your authentic self.
              </p>
            </motion.div>

            {/* Right - Second Paragraph */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <p className="text-black text-sm leading-relaxed">
                Our team consists of passionate designers, sustainability advocates, and storytellers who are dedicated to pushing boundaries in eco-friendly fashion. We believe that great clothing should be accessible, sustainable, and impactful - principles that guide every tee we create.
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
              alt="Stephen team working on sustainable statement tee designs - showcasing our collaborative approach to meaningful fashion"
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
                <p className="text-sm sm:text-md text-black">Sustainable fashion through meaningful design.</p>
              </header>
              <div>
                <p className="text-sm sm:text-md text-black font-bold leading-relaxed">
                  At Stephen, we approach fashion and sustainability as a unified mission. We recognize that a successful statement tee is not just about aesthetics its about creating a meaningful experience that s thoughtfully crafted using premium bamboo-cotton blend materials. Every design is implemented with care for both the wearer and the environment, ensuring that your personal expression doesn t come at the cost of our planets wellbeing.
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
                <p className="text-sm sm:text-md text-black">Premium bamboo-cotton blend for ultimate comfort.</p>
              </header>
              <div>
                <p className="text-sm sm:text-md font-bold text-black leading-relaxed">
                  At Stephen, we prioritize quality over quantity in every aspect of our production. We source premium bamboo-cotton blend materials that are naturally breathable, incredibly soft, and environmentally sustainable. By working closely with ethical manufacturers, we ensure that every statement tee meets our high standards for comfort, durability, and positive environmental impact. Our commitment to sustainable practices means you can wear your values with pride.
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
                  Our mission is to create statement tees that inspire, resonate, and drive meaningful change in both fashion and society. At Stephen, we believe that clothing is a powerful tool for self-expression and environmental stewardship. Each tee is an opportunity to make a statement—about who you are, what you believe in, and how you want to impact the world. We are not just creating clothing; we are fostering a community of conscious consumers who choose sustainability without compromising on style or comfort.
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
                  Every Stephen tee represents a step toward a more sustainable future. We measure our success not just in sales, but in the positive environmental impact we create through our choice of materials, ethical manufacturing processes, and the meaningful messages we help our customers share with the world. From reducing water usage in production to supporting fair labor practices, we are committed to transparency and continuous improvement in our sustainability journey.
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
              Join thousands who have discovered the perfect blend of sustainability, comfort, and meaningful expression with Stephens statement tees.
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
              "headline": "About Stephen - Sustainable Statement Tees",
              "description": "Learn about Stephen's mission to create meaningful, sustainable statement tees using eco-friendly materials and ethical manufacturing practices.",
              "author": {
                "@type": "Organization",
                "name": "Stephen",
                "url": "/LOGO.png"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Stephen",
                "logo": {
                  "@type": "ImageObject",
                  "url": "/LOGO.png"
                }
              }
            })
          }}
        />