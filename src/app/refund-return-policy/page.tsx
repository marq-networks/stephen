'use client';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function RefundReturnPolicyPage() {
  return (
    <div className="min-h-screen bg-[#171717]">
      <Navbar />

      <div className="relative z-10">
        <div className="w-full bg-white">
          <div className="w-full max-w-[1570px] mx-auto bg-white rounded-t-2xl">
            <RefundReturnPolicyContent />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function RefundReturnPolicyContent() {
  return (
    <section className="relative py-20 px-6">
      <div className="w-full max-w-4xl mx-auto">
        <motion.div
          className="prose prose-lg max-w-none text-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">💰 Refund & Return Policy</h2>

            {/* All Sales Are Final */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">All Sales Are Final</h3>
              <p className="text-lg leading-relaxed">
                At <strong>ExClaim Statement Tees</strong>, every product is made with care and intention. Due to the nature of our items and limited production runs, <strong>we do not accept returns, exchanges, or refunds</strong>.
              </p>
              <p className="text-lg leading-relaxed">
                Please ensure you review your size, color, and design selection carefully before placing an order.
              </p>
            </div>

            {/* Damaged or Incorrect Orders */}
            <div>
              <h3 className="text-2xl font-semibold mb-3">Damaged or Incorrect Orders</h3>
              <p className="text-lg leading-relaxed">
                If your order arrives damaged or you receive the wrong item, please contact <a href="mailto:info@exclaimstatedts.com">info@exclaimstatedts.com</a> within <strong>7 days of delivery</strong>. We’ll review each case individually to ensure a fair resolution.
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