'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function EditorialFashion() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1570px', width: '100%' }}>
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div 
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Redefining
              Editorial<br />
              <span className="text-yellow-400">Fashion</span>
            </motion.h2>
            
            <motion.div 
              className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>
                Since our founding, ExClaim has been at the forefront of editorial fashion, creating pieces that challenge conventions and celebrate individual expression. Our design philosophy centers on the belief that clothing should be a form of personal storytelling.
              </p>
              
              <p>
                Every piece in our collection is carefully crafted with attention to detail, sustainable practices, and a commitment to empowering those who wear them to make their mark on the world.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link href="/about">
                <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto">
                  Our Story
                </button>
              </Link>
              <Link href="/shop">
                <button className="border-2 border-black text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-black hover:text-white transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto">
                  Shop Collection
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/about.png"
                alt="Editorial Fashion"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay with stats */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 sm:p-6">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">500+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Designs</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">50K+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Customers</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-gray-900">15+</div>
                      <div className="text-xs sm:text-sm text-gray-600">Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}