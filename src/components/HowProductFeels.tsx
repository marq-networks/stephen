'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { useState, useRef } from 'react';

export default function HowProductFeels() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'New Arrivals', 'Dresses', 'Tops', 'Outerwear', 'Bottoms'];
  
  const products = [
    {
      id: 1,
      name: 'Essential Black Dress',
      price: '$189',
      originalPrice: '$250',
      image: '/howporduct1.png',
      label: 'Sale',
      labelColor: 'bg-yellow-400',
      category: 'Dresses'
    },
    {
      id: 2,
      name: 'Minimalist White Shirt',
      price: '$95',
      image: '/howporduct2.png',
      label: 'New',
      labelColor: 'bg-yellow-400',
      category: 'Tops'
    },
    {
      id: 3,
      name: 'Editorial Black Jacket',
      price: '$265',
      image: '/howporduct3.png',
      label: '',
      labelColor: '',
      category: 'Outerwear'
    },
    {
      id: 4,
      name: 'Casual Brown Sweater',
      price: '$145',
      image: '/howporduct4.png',
      label: 'Best Seller',
      labelColor: 'bg-yellow-400',
      category: 'Tops'
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <motion.section 
      ref={sectionRef}
      className="sticky top-0 bg-white py-20 rounded-2xl min-h-screen flex items-center z-30"
      style={{ y, opacity }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            How Product Feels
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Experience the comfort and quality that defines our collection
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.6 + (index * 0.1),
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              initial={{ y: 100, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 1.0 + (index * 0.2),
                ease: "easeOut",
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
              }}
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                {product.label && (
                  <motion.div 
                    className={`absolute top-4 left-4 ${product.labelColor} text-black px-3 py-1 rounded-full text-sm font-medium z-10`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.2 + (index * 0.2),
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                  >
                    {product.label}
                  </motion.div>
                )}
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Product Info */}
              <motion.div 
                className="p-6"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 + (index * 0.2) }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-xl font-bold text-black mb-2"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 + (index * 0.2) }}
                  viewport={{ once: true }}
                >
                  {product.name}
                </motion.h3>
                
                <motion.div 
                  className="flex items-center gap-2"
                  initial={{ y: 10, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.8 + (index * 0.2) }}
                  viewport={{ once: true }}
                >
                  <span className="text-2xl font-bold text-black">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through">{product.originalPrice}</span>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}