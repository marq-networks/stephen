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
            <div>
              <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
              <p className="text-lg leading-relaxed mb-4">
                We collect information you provide directly to us, such as when you create an account, make a purchase, 
                subscribe to our newsletter, or contact us for support.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal information (name, email address, phone number)</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Order history and preferences</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
              <p className="text-lg leading-relaxed mb-4">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send you order confirmations and shipping updates</li>
                <li>Provide customer support</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Improve our products and services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Information Sharing</h2>
              <p className="text-lg leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, 
                except as described in this policy. We may share your information with trusted service providers who assist 
                us in operating our website and conducting our business.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Data Security</h2>
              <p className="text-lg leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
              <p className="text-lg leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@stephen.com or 
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