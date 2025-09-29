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
              <h2 className="text-3xl font-bold mb-4">Shipping Methods & Timeframes</h2>
              <p className="text-lg leading-relaxed mb-4">
                We offer several shipping options to meet your needs:
              </p>
              <div className="space-y-4">
                <div className="border-l-4 border-[#46c34c] pl-4">
                  <h3 className="text-xl font-semibold">Standard Shipping (FREE)</h3>
                  <p>5-7 business days | Orders over $75</p>
                </div>
                <div className="border-l-4 border-[#46c34c] pl-4">
                  <h3 className="text-xl font-semibold">Express Shipping ($9.99)</h3>
                  <p>2-3 business days</p>
                </div>
                <div className="border-l-4 border-[#46c34c] pl-4">
                  <h3 className="text-xl font-semibold">Overnight Shipping ($24.99)</h3>
                  <p>Next business day (orders placed before 2 PM EST)</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Processing Time</h2>
              <p className="text-lg leading-relaxed mb-4">
                All orders are processed within 1-2 business days. Orders are not shipped or delivered on weekends or holidays.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Orders placed before 2 PM EST ship the same day</li>
                <li>Orders placed after 2 PM EST ship the next business day</li>
                <li>Custom or personalized items may require additional processing time</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Shipping Destinations</h2>
              <p className="text-lg leading-relaxed mb-4">
                We currently ship to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>All 50 United States</li>
                <li>Canada (additional fees may apply)</li>
                <li>International shipping available to select countries</li>
              </ul>
              <p className="text-lg leading-relaxed mt-4">
                International customers are responsible for any customs duties, taxes, or fees imposed by their country.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Order Tracking</h2>
              <p className="text-lg leading-relaxed">
                Once your order ships, you ll receive a confirmation email with tracking information. You can track your package 
                using the provided tracking number on our website or the carrier s website.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Shipping Costs</h2>
              <p className="text-lg leading-relaxed mb-4">
                Shipping costs are calculated based on the shipping method selected and your location:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Free standard shipping on orders over $75</li>
                <li>Standard shipping under $75: $5.99</li>
                <li>Express shipping: $9.99</li>
                <li>Overnight shipping: $24.99</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Delivery Issues</h2>
              <p className="text-lg leading-relaxed mb-4">
                If you experience any issues with your delivery:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact us within 48 hours of expected delivery</li>
                <li>We ll work with the carrier to locate your package</li>
                <li>If the package is lost, we ll send a replacement at no charge</li>
                <li>Damaged packages should be reported immediately</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Address Changes</h2>
              <p className="text-lg leading-relaxed">
                Once an order is placed, shipping addresses cannot be changed. Please ensure your shipping information is correct 
                before completing your purchase. We are not responsible for packages shipped to incorrect addresses provided by the customer.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg leading-relaxed">
                For questions about shipping or to track your order, contact us at shipping@stephen.com or 
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