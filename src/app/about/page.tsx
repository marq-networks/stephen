'use client';
import type { Metadata } from "next";
import Navbar from '../../components/Navbar';
import AboutHero from '../../components/about/AboutHero';
import AboutContent from '../../components/about/AboutContent';
import Footer from '../../components/Footer';
import Founder from '@/components/about/founder';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Note: Since this is a client component, we'll need to handle metadata differently
// We'll create a separate layout.tsx file for this route

export default function About() {
  const products = [
    {
      id: 1,
      name: "Premium Cotton Tee",
      price: "$45",
      image: "/howporduct1.png"
    },
    {
      id: 2,
      name: "Comfort Blend Shirt", 
      price: "$50",
      image: "/howporduct2.png"
    },
    {
      id: 3,
      name: "Classic Design Tee",
      price: "$40", 
      image: "/howporduct3.png"
    },
    {
      id: 4,
      name: "Versatile Style Shirt",
      price: "$48",
      image: "/howporduct4.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#171717]">
      <Navbar />
      
      {/* Hero Section - Fixed background */}
      <div className="fixed top-0 left-0 w-full z-0">
        <AboutHero />
      </div>
      
      {/* Scrollable content that overlays the hero */}
      <div className="relative z-10">
        {/* Spacer to push content down initially */}
        <div className="h-screen"></div>
        
        {/* Full-width background container */}
        <div className="w-full bg-white">
          {/* About Content Section - First section to overlay hero */}
          <div className="w-full bg-white rounded-t-2xl">
            <AboutContent />
          </div>
        </div>
        
        {/* Full-width background container for Founder */}
        <div className="w-full bg-white py-2">
          <div className="w-full bg-white rounded-2xl">
            <Founder />
          </div>
        </div>
        
        {/* Full-width background container for last section */}
        <div className="w-full bg-white py-2">
          <div className="w-full bg-white rounded-2xl">
            <section className="w-full py-12 sm:py-16 lg:py-20">
              <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Left - Text Content */}
                  <div className="max-w-4xl">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 sm:mb-8">
                      WE ARE <span className="text-gray-500">NUMEROUS</span>,<br />
                      YET, WE OPERATE<br />
                      AS A <span className="text-black">UNIFIED<br />
                        BEING.</span>
                    </h2>

                    <button className="bg-[#46c34c] hover:bg-[#479f78] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base">
                      Shop Now
                    </button>
                  </div>

                  {/* Right - Product Slider */}
                  <div className="w-full">
                    <motion.div 
                      className="grid grid-cols-2 gap-4"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      {products.map((product, index) => (
                        <motion.div
                          key={product.id}
                          className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.1 
                          }}
                          viewport={{ once: true }}
                          whileHover={{ y: -5, scale: 1.02 }}
                        >
                          {/* Product Image */}
                          <Link href="/shop">
                            <div className="aspect-square overflow-hidden cursor-pointer">
                              <Image
                                src={product.image}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          </Link>

                          {/* Product Info Overlay */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                            <h4 className="text-white font-semibold text-sm mb-1">{product.name}</h4>
                            <p className="text-white/80 text-xs mb-2">{product.price}</p>
                            
                            <Link href="/shop">
                              <button className="bg-white text-black px-3 py-1.5 rounded-lg text-xs font-medium hover:bg-gray-100 transition-colors w-full">
                                View Product
                              </button>
                            </Link>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      {/* Footer - Normal flow */}
      <div className="w-full bg-[#171717]">
        <Footer />
      </div>
    </div>
  );
}