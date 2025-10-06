'use client';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-[#171717]">
      <Navbar />
      
      {/* Hero Section - Fixed background */}
      <div className="fixed top-0 left-0 w-full z-0">
        <ShippingPolicyHero />
      </div>
      
      {/* Scrollable content that overlays the hero */}
      <div className="relative z-10">
        {/* Spacer to push content down initially */}
        <div className="h-screen"></div>
        
        {/* Full-width background container */}
        <div className="w-full bg-white">
          {/* Shipping Policy Content - First section to overlay hero */}
          <div className="w-full max-w-[1570px] mx-auto bg-white rounded-t-2xl">
            <ShippingPolicyContent />
          </div>
        </div>
      </div>
      
      {/* Footer - Normal flow */}
      <Footer />
    </div>
  );
}

function ShippingPolicyHero() {
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
            alt="Shipping Policy"
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
          {/* Main Shipping Policy heading */}
          <motion.div 
            className="text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-4">
              SHIPPING
            </h1>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-none text-white/80">
              POLICY
            </h2>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

function ShippingPolicyContent() {
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
              <h2 className="text-3xl font-bold mb-4">🚚 Shipping Policy</h2>
            </div>

            {/* Processing Time */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Processing Time</h3>
              <p className="text-lg leading-relaxed">
                Orders are processed within <strong>3–5 business days</strong> after payment confirmation.
              </p>
            </div>

            {/* Delivery Time */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Delivery Time</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>USA Shipping:</strong> Approximately <strong>10–14 business days (2 weeks)</strong> after dispatch.</li>
                <li><strong>International Shipping:</strong> Coming soon.</li>
              </ul>
            </div>

            {/* Shipping Confirmation & Tracking */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Shipping Confirmation & Tracking</h3>
              <p className="text-lg leading-relaxed">
                Once your order ships, you’ll receive a confirmation email with tracking details.
              </p>
            </div>

            {/* Shipping Fees */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Shipping Fees</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Calculated at checkout.</li>
                <li>Free shipping promotions may apply at select times.</li>
              </ul>
            </div>

            {/* Delays */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Delays</h3>
              <p className="text-lg leading-relaxed">
                While we do our best to deliver on time, occasional delays may occur due to weather, customs, or courier issues.
              </p>
            </div>

            {/* Incorrect Address Disclaimer */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Incorrect Address Disclaimer</h3>
              <p className="text-lg leading-relaxed">
                Please double-check your shipping address before confirming your order. ExClaim is not responsible for packages lost due to incorrect or incomplete addresses.
              </p>
            </div>

            <div className="text-sm text-gray-600 pt-8 border-t">
              <p>Last updated: October 2025</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}