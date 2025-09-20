'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative text-white min-h-screen flex items-center overflow-hidden">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full">
        {/* Main Hero Content */}
        <div className="flex items-center justify-between h-screen py-20">
          {/* Left Side - Content */}
          <motion.div 
            className="flex-1 max-w-2xl pr-8"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            >
              Wear Your Truth
            </motion.h1>
            
            <motion.p 
              className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
            >
              Premium bamboo-cotton streetwear for the culturally conscious. Express your authentic voice with sustainable fashion that makes a statement.
            </motion.p>

            <motion.p 
              className="text-gray-400 text-lg md:text-xl leading-relaxed mb-12"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
            >
              We partner with brands to create digital design that drives conversion and commands attention.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
            >
              <Link href="/shop">
                <motion.button
                  className="bg-yellow-400 hover:bg-yellow-500 text-black px-10 py-5 rounded-lg font-semibold text-xl shadow-md"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(250, 204, 21, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Shop Collection
                </motion.button>
              </Link>

              <Link href="/about">
                <motion.button
                  className="border-2 border-white text-white hover:bg-white hover:text-black px-10 py-5 rounded-lg font-semibold text-xl transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  Our Story
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Large Hero Image */}
          <motion.div
            className="flex-1 flex justify-end items-center h-full"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <Link href="/shop" className="cursor-pointer h-full flex items-center">
              <motion.div
                className="h-full flex items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Image
                  src="/hero.png"
                  alt="Life is Beautiful T-shirt"
                  width={1400}
                  height={1400}
                  className="w-auto h-[90vh] max-h-[90vh] "
                  priority
                />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
