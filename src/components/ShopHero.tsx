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
      "email": "info@ExClaimStatedTs.com"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      
      <motion.section 
        ref={sectionRef}
        className="relative text-white min-h-screen flex items-center justify-start overflow-hidden"
        style={{ y, opacity }}
        itemScope
        itemType="https://schema.org/WebPageElement"
        role="banner"
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

        <div className="relative z-10 max-w-[1570px] mx-auto px-6 w-full h-full">
          {/* Main Hero Content */}
          <div className="flex items-center justify-start h-screen py-20">
            <header className="text-left max-w-3xl" itemScope itemType="https://schema.org/WPHeader">
              {/* Main Shop heading */}
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.h1 
                  className="text-6xl lg:text-8xl font-bold mb-6"
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

            

               

              </motion.div>
            </header>
          </div>
        </div>
      </motion.section>
    </>
  );
}