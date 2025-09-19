'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative text-white min-h-screen flex flex-row items-end justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/homeherobg.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
      
      {/* Dark overlay for better text readability */}
      <motion.div 
        className="absolute inset-0 bg-black/40 z-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      <div className="relative z-10 flex flex-row items-end justify-center text-center">
        {/* Hero Image */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          <Link href="/shop" className="cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/hero.png"
                alt="Life is Beautiful T-shirt"
                width={800}
                height={100}
                className="w-auto h-auto mx-auto"
                priority
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Right Content - Text and Button */}
        <motion.div 
          className="max-w-md text-left mb-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
        >
          <motion.p 
            className="text-gray-300 text-base md:text-lg leading-relaxed mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            We partner with brands to create digital design that drives conversion and commands attention.
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <Link href="/shop">
              <motion.div
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium shadow-md inline-block"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Get Started
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
