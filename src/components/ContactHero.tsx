'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function ContactHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  // Structured Data for Contact Page
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Exclaim - Sustainable Statement Tee Brand",
    "description": "Get in touch with Exclaim for sustainable statement tees, custom orders, wholesale inquiries, and customer support. We're here to help with your eco-friendly fashion needs.",
    "url": "https://Exclaim.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Exclaim",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-555-Exclaim",
          "contactType": "customer service",
          "email": "info@exclaimstatedts.com",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "email": "wholesale@Exclaim.com",
          "contactType": "sales",
          "availableLanguage": "English"
        }
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://Exclaim.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://Exclaim.com/contact"
        }
      ]
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Exclaim",
    "description": "Sustainable statement tee brand creating meaningful fashion with eco-friendly materials",
    "url": "https://Exclaim.com",
    "logo": "https://Exclaim.com/logo.png",
    "email": "info@ExClaimStatedTs.com",
    "telephone": "+1-555-Exclaim",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://instagram.com/Exclaim",
      "https://facebook.com/Exclaim"
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Exclaim",
            "url": "https://Exclaim.com",
            "logo": "/LOGO.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-555-Exclaim",
              "contactType": "customer service",
              "email": "hello@Exclaim.com"
            }
          })
        }}
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
        aria-label="Contact hero section for Exclaim's sustainable statement tee brand"
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
              alt="Exclaim's sustainable statement tee collection - contact us for eco-friendly fashion and meaningful clothing"
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
              {/* Main Contact heading */}
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
                  Get In <span className="text-green-400">Touch</span>
                </motion.h1>

                <motion.p 
                  className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  itemProp="description"
                >
                  Ready to make a statement? Contact Exclaim for sustainable fashion inquiries, 
                  custom orders, wholesale opportunities, or any questions about our eco-friendly statement tees.
                </motion.p>

                {/* Contact Methods */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                >
                  <a
                    href="mailto:info@exclaimstatedts.com"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 text-sm sm:text-base"
                  >
                    Send Email
                  </a>
                  <a
                    href="tel:+14149998833"
                    className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-300 text-sm sm:text-base"
                  >
                    Call Us
                  </a>
                </motion.div>

                {/* Contact Information */}
                {/* <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0 }}
                  className="grid grid-cols-2 lg:grid-cols-3 gap-6 text-sm"
                  itemScope
                  itemType="https://schema.org/ContactPoint"
                >
                  <div className="text-center lg:text-left">
                    <div className="text-green-400 font-bold text-lg">Customer Service</div>
                    <a href="mailto:info@exclaimstatedts.com" className="text-white/70" itemProp="email">info@exclaimstatedts.com</a>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-green-400 font-bold text-lg">Wholesale Inquiries</div>
                    <a href="mailto:info@exclaimstatedts.com" className="text-white/70">info@exclaimstatedts.com</a>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-green-400 font-bold text-lg">Response Time</div>
                    <div className="text-white/70">Within 24 Hours</div>
                  </div>
                </motion.div> */}
              </motion.div>
            </header>
          </div>
        </div>
      </motion.section>
    </>
  );
}