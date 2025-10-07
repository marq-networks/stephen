'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function ShopHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  // Structured Data for Shop Page
  const shopStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Stephen Statement Tees - Sustainable Fashion Collection",
    "description": "Shop premium sustainable statement tees from Stephen. Eco-friendly bamboo-cotton blend clothing with meaningful messages. Free shipping on orders over $75.",
    "url": "https://stephen.com/shop",
    "mainEntity": {
      "@type": "ItemList",
      "name": "Statement Tee Collection",
      "description": "Sustainable statement tees with meaningful messages",
      "numberOfItems": "50+"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://stephen.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Shop",
          "item": "https://stephen.com/shop"
        }
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://stephen.com/shop?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Stephen",
    "description": "Sustainable statement tee brand creating meaningful fashion with eco-friendly materials",
    "url": "https://stephen.com",
    "logo": "https://stephen.com/logo.png",
    "sameAs": [
      "https://instagram.com/stephen",
      "https://facebook.com/stephen"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-555-STEPHEN",
      "contactType": "customer service",
      "email": "info@exclaimstatedts.com"
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(shopStructuredData) }}
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
            "description": "Sustainable statement tees with meaningful messages"
          })
        }}
      />
      
      <motion.section 
        ref={sectionRef}
        className="relative text-white min-h-screen flex items-center justify-start overflow-hidden"
        style={{ y, opacity }}
        itemScope
        itemType="https://schema.org/WebPageElement"
        aria-label="Shop hero section featuring Stephen's sustainable statement tee collection"
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
              alt="Stephen's sustainable statement tee collection - premium bamboo-cotton blend clothing with meaningful messages"
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

        <div className="relative z-10 w-full max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Hero Content with responsive positioning */}
          <div className="flex items-center justify-start min-h-screen pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
            <header className="text-left w-full max-w-4xl" itemScope itemType="https://schema.org/WPHeader">
              {/* Main Shop heading */}
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.h1 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
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
                  Shop <span className="text-green-400">Statement</span> Tees
                </motion.h1>

                <motion.p 
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  Discover our collection of premium bamboo-cotton statement tees. 
                  Sustainable fashion with meaningful messages for conscious consumers.
                </motion.p>

               

              </motion.div>
            </header>
          </div>
        </div>
      </motion.section>
    </>
  );
}