'use client';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ShopHeroSection from '@/components/ShopHeroSection';

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
    <div className="min-h-screen bg-white">
      <Navbar />
      <ShopHeroSection />

      {/* Main Shop Section */}
      <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.0 + (index * 0.1),
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            viewport={{ once: true }}
          >
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                initial={{ y: 80, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.4 + (index * 0.1),
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Product Image */}
                <div className="overflow-hidden h-[60vh] relative">
                  {product.label && (
                    <div 
                      className={`absolute top-4 left-4 ${product.labelColor} text-black px-3 py-1 rounded-full text-sm font-medium z-10`}
                    >
                      {product.label}
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-black">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col gap-3">
                    <Link href={`/product/${product.slug}`}>
                      <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                      </button>
                    </Link>
                    <button 
                      onClick={() => addToCart(product.id)}
                      className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium hover:from-orange-600 hover:to-pink-600 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-16"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            viewport={{ once: true }}
          >
            <Link href="/contact">
              <motion.button 
                className="bg-black text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
