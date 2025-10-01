'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  // Structured data for About page
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Stephen - Sustainable Statement Tees",
    "description": "Learn about Stephen's mission to create meaningful statement tees using sustainable bamboo-cotton blend materials. Discover our story of authentic self-expression through fashion.",
    "url": "https://stephen.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Stephen",
      "description": "Sustainable statement tees that speak your truth. Premium bamboo-cotton blend clothing for authentic self-expression.",
      "foundingDate": "2024",
      "founder": {
        "@type": "Person",
        "name": "Stephen"
      },
      "mission": "To create meaningful statement tees that combine sustainability, comfort, and authentic self-expression",
      "values": [
        "Sustainability",
        "Authentic Expression",
        "Premium Quality",
        "Environmental Responsibility"
      ],
      "products": [
        {
          "@type": "Product",
          "name": "Statement Tees",
          "description": "Premium bamboo-cotton blend tees with meaningful messages"
        }
      ]
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />
      
      <motion.section 
        ref={sectionRef}
        className="relative text-white min-h-screen flex items-center justify-start overflow-hidden"
        style={{ y, opacity }}
        itemScope
        itemType="https://schema.org/AboutPage"
        role="banner"
        aria-label="About Stephen - Our story and mission"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/homeherobg.png"
              alt="Stephen's sustainable statement tee showcasing our brand philosophy - Life is Beautiful message on premium bamboo-cotton blend"
              width={1400}
              height={1400}
              className="w-full h-full object-cover object-center"
              priority
              itemProp="image"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/60"></div>
          </motion.div>
        </div>

        {/* Responsive Container with max width */}
        <div className="relative z-10 w-full max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Hero Content */}
          <div className="flex items-center justify-start h-screen py-12 sm:py-16 lg:py-20">
            {/* Main About Us heading and content */}
            <header className="text-left w-full max-w-4xl">
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 1.0, 
                  delay: 0.8, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 80
                }}
                itemProp="headline"
              >
                About Stephen.
              </motion.h1>

              {/* Subtitle and Mission */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="space-y-6"
              >
               
                
                <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl" itemProp="description">
                  We believe fashion should be a force for good. Stephen creates premium bamboo-cotton statement tees 
                  that combine meaningful messages with sustainable materials, empowering authentic self-expression 
                  while caring for our planet.
                </p>

                {/* Key Values */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#46c34c] rounded-full"></div>
                    <span className="text-white/90 font-medium">Sustainable</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#46c34c] rounded-full"></div>
                    <span className="text-white/90 font-medium">Meaningful</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#46c34c] rounded-full"></div>
                    <span className="text-white/90 font-medium">Premium Quality</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-[#46c34c] rounded-full"></div>
                    <span className="text-white/90 font-medium">Authentic</span>
                  </div>
                </motion.div>

                {/* Call-to-Action */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.2 }}
                  className="flex flex-col sm:flex-row gap-4 mt-8"
                >
                  <a
                    href="/shop"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#46c34c] text-white font-semibold rounded-lg hover:bg-[#38db41] transition-colors duration-300 text-lg"
                  >
                    Shop Our Collection
                  </a>
                  <a
                    href="#story"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-300 text-lg"
                  >
                    Read Our Story
                  </a>
                </motion.div>
              </motion.div>
            </header>
          </div>

          {/* Brand Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8 }}
            className="absolute bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                <div className="text-white/70 text-sm">Sustainable Materials</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">50+</div>
                <div className="text-white/70 text-sm">Meaningful Designs</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">1000+</div>
                <div className="text-white/70 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">30 Day</div>
                <div className="text-white/70 text-sm">Return Policy</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

<div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
  {/* Left Content */}
  <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
    <h2 className="text-4xl lg:text-6xl font-bold mb-6">
      LIFE IS
      <br />
      BEAUTIFUL
    </h2>
    <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
      We believe in creating products that inspire and bring joy to everyday life. Our mission is to spread positivity through thoughtful design.
    </p>
    <button className="bg-[#46c34c] hover:bg-[#479f78] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
      Learn More
    </button>
  </div>

  {/* Right Content - Hero Image */}
  <div className="flex-1 flex justify-center">
    <Image
      src="/hero.png"
      alt="Life is Beautiful T-shirt"
      width={400}
      height={500}
      className="w-auto h-auto max-w-sm"
      priority
    />
  </div>
</div>