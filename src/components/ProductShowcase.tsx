'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function ProductShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gray-100 py-20 rounded-2xl">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Description */}
        <motion.div 
          className="text-center mb-16 py-20"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-black text-lg md:text-2xl leading-7 font-bold max-w-4xl mx-auto">
            <strong>Premium cotton shirts that redefine comfort and style crafted from 100% pure cotton, designed for breathability, durability, and an effortlessly elegant look. Soft on skin, light as air, and perfect for every occasion. Just pure comfort, no compromise.</strong>
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          className="gap-12 w-full items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Right Column - Product Images */}
          <div className="space-y-4 w-full">
            {/* First Row: 3 Divs */}
            <motion.div 
              className="grid grid-cols-3 gap-4 w-full"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-white rounded-2xl p-6 shadow-sm w-full"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Thoughtful design that moves the needle.</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  This brand required a new approach to communicate their unique value proposition and stand out in a crowded market.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">JS</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Jane Doe</p>
                    <p className="text-xs text-gray-500">Creative Director</p>
                  </div>
                </div>
              </motion.div>

              <Link href="/shop">
                <motion.div 
                  className="bg-white rounded-2xl shadow-sm cursor-pointer w-full overflow-hidden"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image src="/howporduct1.png" alt="T-shirt" width={150} height={180} className="w-full h-auto" />
                  </motion.div>
                </motion.div>
              </Link>

              <Link href="/shop">
                <motion.div 
                  className="bg-white rounded-2xl shadow-sm cursor-pointer w-full overflow-hidden"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image src="/howporduct2.png" alt="T-shirt" width={150} height={180} className="w-full h-auto" />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>

            {/* Second Row: 2 Divs */}
            <motion.div 
              className="grid grid-cols-2 gap-4 w-full"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-white rounded-2xl shadow-sm w-full overflow-hidden"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/chart.png"
                    alt="THE WHETHER OR U. T-shirt"
                    width={150}
                    height={180}
                    className="w-full h-auto"
                  />
                </motion.div>
              </motion.div>

              <Link href="/shop">
                <motion.div 
                  className="bg-white rounded-2xl shadow-sm cursor-pointer w-full overflow-hidden"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image src="/howporduct4.png" alt="T-shirt" width={150} height={180} className="w-full h-auto" />
                  </motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link href="/shop">
            <motion.div
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium shadow-md inline-block"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              View Work
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}