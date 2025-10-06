'use client';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#171717]">
      <Navbar />
      
      {/* Hero Section - Fixed background */}
      <div className="fixed top-0 left-0 w-full z-0">
        <TermsOfServiceHero />
      </div>
      
      {/* Scrollable content that overlays the hero */}
      <div className="relative z-10">
        {/* Spacer to push content down initially */}
        <div className="h-screen"></div>
        
        {/* Full-width background container */}
        <div className="w-full bg-white">
          {/* Terms of Service Content - First section to overlay hero */}
          <div className="w-full max-w-[1570px] mx-auto bg-white rounded-t-2xl">
            <TermsOfServiceContent />
          </div>
        </div>
      </div>
      
      {/* Footer - Normal flow */}
      <Footer />
    </div>
  );
}

function TermsOfServiceHero() {
  return (
    <motion.section 
      className="relative text-white min-h-screen flex items-center justify-start overflow-hidden"
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
            alt="Terms of Service"
            width={1400}
            height={1400}
            className="w-full h-full object-cover object-center"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-[1570px] mx-auto px-6 w-full h-full">
        {/* Main Hero Content */}
        <div className="flex items-center justify-start h-screen py-20">
          {/* Main Terms of Service heading */}
          <motion.div 
            className="text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-4">
              TERMS
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-none text-white/80">
              OF SERVICE
            </h2>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function TermsOfServiceContent() {
  return (
    <section className="relative py-20 px-6">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div 
          className="prose prose-lg max-w-none"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-black space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Acceptance of Terms</h2>
              <p className="text-lg leading-relaxed">
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Use License</h2>
              <p className="text-lg leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials on STEPHENs website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Product Information</h2>
              <p className="text-lg leading-relaxed">
                We strive to provide accurate product descriptions and pricing. However, we do not warrant that product descriptions 
                or other content is accurate, complete, reliable, current, or error-free. We reserve the right to correct any errors, 
                inaccuracies, or omissions and to change or update information at any time without prior notice.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Orders and Payment</h2>
              <p className="text-lg leading-relaxed mb-4">
                By placing an order, you represent that you are authorized to use the designated payment method and authorize us to charge your order total.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All orders are subject to acceptance and availability</li>
                <li>We reserve the right to refuse or cancel any order</li>
                <li>Payment must be received before shipment</li>
                <li>Prices are subject to change without notice</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Returns and Exchanges</h2>
              <p className="text-lg leading-relaxed">
                We want you to be completely satisfied with your purchase. Items may be returned within 30 days of delivery 
                in original condition with tags attached. Custom or personalized items are not eligible for return.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
              <p className="text-lg leading-relaxed">
                In no event shall STEPHEN or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, 
                or due to business interruption) arising out of the use or inability to use the materials on STEPHENs website.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Governing Law</h2>
              <p className="text-lg leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the 
                exclusive jurisdiction of the courts in that state or location.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="text-lg leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at <a href="mailto:info@exclaimstatedts.com">info@exclaimstatedts.com</a> or 
                through our contact page.
              </p>
            </div>

            <div className="text-sm text-gray-600 pt-8 border-t">
              <p>Last updated: January 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}