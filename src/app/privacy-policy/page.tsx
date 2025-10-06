'use client';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#171717]">
      <Navbar />
      
      {/* Hero Section - Fixed background */}
      <div className="fixed top-0 left-0 w-full z-0">
        <PrivacyPolicyHero />
      </div>
      
      {/* Scrollable content that overlays the hero */}
      <div className="relative z-10">
        {/* Spacer to push content down initially */}
        <div className="h-screen"></div>
        
        {/* Full-width background container */}
        <div className="w-full bg-white">
          {/* Privacy Policy Content - First section to overlay hero */}
          <div className="w-full max-w-[1570px] mx-auto bg-white rounded-t-2xl">
            <PrivacyPolicyContent />
          </div>
        </div>
      </div>
      
      {/* Footer - Normal flow */}
      <Footer />
    </div>
  );
}

function PrivacyPolicyHero() {
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
            alt="Privacy Policy"
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
          {/* Main Privacy Policy heading */}
          <motion.div 
            className="text-left"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-4">
              PRIVACY
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

function PrivacyPolicyContent() {
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
            {/* Effective Date */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Privacy Policy</h2>
              <p className="text-lg leading-relaxed">
                <strong>Effective Date:</strong> October 6, 2025
              </p>
              <p className="text-lg leading-relaxed">
                At <strong>ExClaim Statement Tees</strong>, we value your trust and are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you visit <strong>exclaimstatedts.com</strong>.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal details such as name, email, phone number, and shipping address.</li>
                <li>Payment information processed securely through trusted gateways.</li>
                <li>Site usage data (cookies, analytics) to improve your browsing experience.</li>
              </ul>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To process orders and deliver products.</li>
                <li>To provide customer support and shipping updates.</li>
                <li>To send updates and offers (only if you opt in).</li>
              </ul>
            </div>

            {/* How We Protect Your Data */}
            <div>
              <h2 className="text-3xl font-bold mb-4">How We Protect Your Data</h2>
              <p className="text-lg leading-relaxed">
                We use SSL encryption and secure hosting to ensure your information stays private. Payment information is handled by verified third-party processors and <strong>never stored on our servers</strong>.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
              <p className="text-lg leading-relaxed">
                You may request access, correction, or deletion of your data at any time by contacting <a href="mailto:info@exclaimstatedts.com">info@exclaimstatedts.com</a>.
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