'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  // Structured data for the hero section
  const heroStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Stephen - Sustainable Statement Tees",
    "description": "Discover Stephen's premium bamboo-cotton statement tees. Sustainable fashion that speaks your truth with meaningful designs and eco-friendly materials.",
    "url": "https://stephen.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Stephen",
      "description": "Sustainable statement tees made from premium bamboo-cotton blend",
      "url": "https://stephen.com",
      "logo": "https://stephen.com/logo.png",
      "sameAs": [
        "https://instagram.com/stephen",
        "https://facebook.com/stephen",
        "https://twitter.com/stephen"
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://stephen.com"
        }
      ]
    }
  };

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(heroStructuredData) }}
      />
      
      <motion.section 
        ref={sectionRef}
        className="relative text-white min-h-screen flex items-center justify-center overflow-hidden"
        style={{ y, opacity }}
        itemScope
        itemType="https://schema.org/WebPageElement"
        role="banner"
        aria-label="Hero section showcasing Stephen's sustainable statement tees"
      >
        {/* Background Image - Hero T-shirt */}
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative w-full h-full"
          >
            <Image
              src="/homeherobg.png"
              alt="Stephen's sustainable statement tee featuring 'Life is Beautiful' message - premium bamboo-cotton blend clothing"
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

        <div className="relative z-10 max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Main Content Container */}
          <header className="text-center lg:text-left">
            {/* Main Heading */}
            <motion.h1 
              className="text-white text-6xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl leading-tight text-left capitalize mb-6" 
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.5, 
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              itemProp="headline"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
               Life is
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                Beautiful
              </motion.span>
            </motion.h1>

            {/* Subtitle and Description */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="max-w-2xl"
            >
             
              <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed" itemProp="description">
                Discover Stephens premium bamboo-cotton blend tees featuring meaningful messages. 
                Sustainable fashion that combines comfort, style, and authentic self-expression.
              </p>
              
              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href="/shop"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0 }}
                >
                  Shop Statement Tees
                </motion.a>
             
              </div>
            </motion.div>

          
          </header>

        
        </div>
      </motion.section>
    </>
  );
}
