'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function HowProductFeels() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header with Animation */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-4xl md:text-[90px] font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            How Our Product Feels
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-sm mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Every piece tells a story behind the story. We believe that our signature look is all about togetherness.
          </motion.p>
        </motion.div>

        {/* Product Grid with Staggered Animations */}
        <motion.div 
          className="grid grid-cols-2 gap-6 max-w-6xl mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Top Row */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <Link href="/shop" className="flex items-center justify-center cursor-pointer transition-transform duration-300">
              <Image
                src="/howporduct1.png"
                alt="Life is Beautiful T-shirt"
                width={200}
                height={240}
                className="w-full"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <Link href="/shop" className="flex items-center justify-center cursor-pointer transition-transform duration-300">
              <Image
                src="/howporduct2.png"
                alt="Life is Beautiful T-shirt"
                width={200}
                height={240}
                className="w-full"
              />
            </Link>
          </motion.div>
          
          {/* Bottom Row */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <Link href="/shop" className="flex items-center justify-center cursor-pointer transition-transform duration-300">
              <Image
                src="/howporduct3.png"
                alt="Life is Beautiful T-shirt"
                width={200}
                height={240}
                className="w-full"
              />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <Link href="/shop" className="flex items-center justify-center cursor-pointer transition-transform duration-300">
              <Image
                src="/howporduct4.png"
                alt="Life is Beautiful T-shirt"
                width={200}
                height={240}
                className="w-full"
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Call to Action with Animation */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/shop" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-md inline-block">
              Shop Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}