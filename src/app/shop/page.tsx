'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ShopHero from '@/components/ShopHero';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  slug: string;
  category: string;
  label?: string;
  labelColor?: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Processing... Tee",
    price: "$40",
    image: "/2.png",
    slug: "processing-tee",
    category: "Tees",
    label: "New",
    labelColor: "bg-green-400"
  },
  {
    id: 2,
    name: "Processor Tee",
    price: "$40",
    image: "/3.png",
    slug: "processor-tee",
    category: "Tees",
    label: "Popular",
    labelColor: "bg-blue-400"
  },
  {
    id: 3,
    name: "What's Your Forecast? Tee",
    price: "$40",
    originalPrice: "$50",
    image: "/4.png",
    slug: "whats-your-forecast-tee",
    category: "Tees",
    label: "Sale",
    labelColor: "bg-yellow-400"
  },
  {
    id: 4,
    name: "The Whether is in U Tee",
    price: "$40",
    image: "/one.png",
    slug: "the-whether-is-in-u-tee",
    category: "Tees"
  },
  {
    id: 5,
    name: "Life is Beautiful Tee",
    price: "$45",
    image: "/hero.png",
    slug: "life-is-beautiful-tee",
    category: "Tees",
    label: "New",
    labelColor: "bg-green-400"
  },
  {
    id: 6,
    name: "Mindful Statement Tee",
    price: "$40",
    originalPrice: "$55",
    image: "/howporduct1.png",
    slug: "mindful-statement-tee",
    category: "Tees",
    label: "Sale",
    labelColor: "bg-yellow-400"
  }
];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState<{id: number, quantity: number}[]>([]);
  
  const categories = ['All', 'New Arrivals', 'Tees'];
  
  // Show all products for each filter category
  const filteredProducts = (() => {
    if (activeCategory === 'All') {
      return products;
    } else if (activeCategory === 'New Arrivals') {
      return products; // Show all products in New Arrivals
    } else if (activeCategory === 'Tees') {
      return products; // Show all products in Tees
    }
    return products;
  })();

  const addToCart = (productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { id: productId, quantity: 1 }];
      }
    });
    
    // Show success message (you can implement a toast notification here)
    console.log('Product added to cart!');
  };

  return (
    <div className="min-h-screen bg-[#171717]">
      <Navbar />
      
      {/* Hero Section - Fixed background */}
      <div className="fixed top-0 left-0 w-full z-0">
        <ShopHero />
      </div>
      
      {/* Scrollable content that overlays the hero */}
      <div className="relative z-10">
        {/* Spacer to push content down initially */}
        <div className="h-screen"></div>
        
        {/* Full-width background container */}
        <div className="w-full bg-white">
          {/* Main Shop Section - First section to overlay hero */}
          <div className="w-full max-w-[1570px] mx-auto bg-white rounded-t-2xl">
            <section className="py-12 px-4 sm:px-6 lg:px-8">
              <div className="max-w-[1570px] mx-auto">
                {/* Header */}
                <motion.div 
                  className="text-center mb-12"
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
                    Shop Our Collection
                  </motion.h2>
                  
                  <motion.p 
                    className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Experience the perfect blend of comfort, style, and quality. Each piece is crafted with care to make you feel confident and comfortable all day long.
                  </motion.p>
                </motion.div>

                {/* Category Filter */}
                <motion.div 
                  className="flex flex-wrap justify-center gap-4 mb-12"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  {categories.map((category, index) => (
                    <motion.button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                        activeCategory === category
                          ? 'bg-black text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {category}
                    </motion.button>
                  ))}
                </motion.div>

                {/* Products Grid */}
                <motion.div 
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 1.2 + index * 0.1,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8 }}
                    >
                      {/* Product Label */}
                      {product.label && (
                        <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-semibold text-white ${product.labelColor}`}>
                          {product.label}
                        </div>
                      )}

                      {/* Product Image */}
                      <div className="relative aspect-square bg-gray-50 overflow-hidden">
                        <Link href={`/product/${product.slug}`}>
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </Link>
                        
                        {/* Quick Add to Cart Button */}
                        <motion.button
                          onClick={() => addToCart(product.id)}
                          className="absolute bottom-4 right-4 bg-black text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-gray-800"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </motion.button>
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <Link href={`/product/${product.slug}`}>
                          <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-200">
                            {product.name}
                          </h3>
                        </Link>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-gray-900">{product.price}</span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                            )}
                          </div>
                          
                          <motion.button
                            onClick={() => addToCart(product.id)}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Add to Cart
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
          </div>
        </div>
      </div>
      
      {/* Footer - Normal flow */}
      <Footer />
    </div>
  );
}
