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
    "name": "Contact Stephen - Sustainable Statement Tee Brand",
    "description": "Get in touch with Stephen for sustainable statement tees, custom orders, wholesale inquiries, and customer support. We're here to help with your eco-friendly fashion needs.",
    "url": "https://stephen.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Stephen",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-555-STEPHEN",
          "contactType": "customer service",
          "email": "info@ExClaimStatedTs.com",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "email": "wholesale@stephen.com",
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
          "item": "https://stephen.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://stephen.com/contact"
        }
      ]
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Stephen",
    "description": "Sustainable statement tee brand creating meaningful fashion with eco-friendly materials",
    "url": "https://stephen.com",
    "logo": "https://stephen.com/logo.png",
    "email": "info@ExClaimStatedTs.com",
    "telephone": "+1-555-STEPHEN",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://instagram.com/stephen",
      "https://facebook.com/stephen"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      
      <motion.section 
        ref={sectionRef}
        className="relative text-white min-h-screen flex items-center justify-start overflow-hidden"
        style={{ y, opacity }}
        itemScope
        itemType="https://schema.org/WebPageElement"
        role="banner"
        aria-label="Contact hero section for Stephen's sustainable statement tee brand"
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
              alt="Stephen's sustainable statement tee collection - contact us for eco-friendly fashion and meaningful clothing"
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
              {/* Main Contact heading */}
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
                  Get In <span className="text-green-400">Touch</span>
                </motion.h1>

                <motion.p 
                  className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  itemProp="description"
                >
                  Ready to make a statement? Contact Stephen for sustainable fashion inquiries, 
                  custom orders, wholesale opportunities, or any questions about our eco-friendly statement tees.
                </motion.p>

                {/* Contact Methods */}
                <motion.div 
                  className="flex flex-col sm:flex-row gap-4 mb-12"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                >
                  <motion.a
                    href="mailto:info@ExClaimStatedTs.com"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#46c34c] text-white font-semibold rounded-lg hover:bg-[#38db41] transition-colors duration-300 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Email Stephen for sustainable fashion inquiries"
                  >
                    Email Us
                  </motion.a>
                  <motion.a
                    href="#contact-form"
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-colors duration-300 text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Form
                  </motion.a>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.0 }}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm"
                  itemScope
                  itemType="https://schema.org/ContactPoint"
                >
                  <div className="text-center lg:text-left">
                    <div className="text-green-400 font-bold text-lg">Customer Service</div>
                    <div className="text-white/70" itemProp="email">info@ExClaimStatedTs.com</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-green-400 font-bold text-lg">Wholesale Inquiries</div>
                    <div className="text-white/70">wholesale@stephen.com</div>
                  </div>
                  <div className="text-center lg:text-left">
                    <div className="text-green-400 font-bold text-lg">Response Time</div>
                    <div className="text-white/70">Within 24 Hours</div>
                  </div>
                </motion.div>
              </motion.div>
            </header>
          </div>
        </div>
      </motion.section>
    </>
  );
}