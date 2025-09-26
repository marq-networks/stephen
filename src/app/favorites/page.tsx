'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: {
    scale: 0.8,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" }
  }
};

export default function FavoritesPage() {
  const [mounted, setMounted] = useState(false);
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Life is Beautiful T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      image: "/prduct.png",
      size: "M",
      color: "White",
      inStock: true
    },
    {
      id: 2,
      name: "Minimalist Hoodie",
      price: 59.99,
      originalPrice: 79.99,
      image: "/shop.png",
      size: "L",
      color: "Black",
      inStock: true
    },
    {
      id: 3,
      name: "Classic Cotton Tee",
      price: 24.99,
      originalPrice: 34.99,
      image: "/hero.png",
      size: "S",
      color: "Gray",
      inStock: false
    }
  ]);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const moveToCart = (id: number) => {
    // In a real app, this would add to cart and remove from favorites
    removeFavorite(id);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <motion.div 
      className="min-h-screen bg-[#171717]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/blogs.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>
        
        {/* Content */}
        <motion.div 
          className="relative z-10 text-center text-white px-6"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Favorites.</h1>
          <p className="text-xl md:text-2xl opacity-90">
            {favorites.length} {favorites.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </motion.div>
      </section>

      {/* Favorites Grid */}
      <motion.div 
        className="bg-white my-8 rounded-2xl py-16 px-6"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          {favorites.length === 0 ? (
            <motion.div 
              className="text-center py-20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-6">💝</div>
              <h2 className="text-2xl font-bold text-black mb-4">Your favorites list is empty</h2>
              <p className="text-gray-600 mb-8">Start adding items you love to keep track of them</p>
              <Link 
                href="/shop" 
                className="bg-[#46c34c] hover:bg-[#479f78] text-white px-8 py-3 rounded-full transition-colors duration-200 font-medium"
              >
                Continue Shopping
              </Link>
            </motion.div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                {favorites.map((item) => (
                  <motion.div 
                    key={item.id} 
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                    variants={cardVariants}
                    layout
                    whileHover={{ y: -5, scale: 1.02 }}
                    exit="exit"
                  >
                    <motion.div 
                      className="aspect-square bg-gray-200 relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      {!item.inStock && (
                        <motion.div 
                          className="absolute inset-0 bg-black/50 flex items-center justify-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                            Out of Stock
                          </span>
                        </motion.div>
                      )}
                    </motion.div>
                    
                    <div className="p-6">
                      <h3 className="font-semibold text-black mb-2">{item.name}</h3>
                      <div className="text-sm text-gray-500 mb-3">
                        Size: {item.size} • Color: {item.color}
                      </div>
                      <div className="flex items-center mb-4">
                        <span className="text-xl font-bold text-black">${item.price}</span>
                        {item.originalPrice > item.price && (
                          <span className="text-sm text-gray-500 line-through ml-2">
                            ${item.originalPrice}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex space-x-3">
                        <motion.button
                          onClick={() => moveToCart(item.id)}
                          disabled={!item.inStock}
                          className={`flex-1 py-2 px-4 rounded-full font-medium transition-colors duration-200 ${
                            item.inStock
                              ? 'bg-[#46c34c] hover:bg-[#479f78] text-white'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                          whileHover={item.inStock ? { scale: 1.05 } : {}}
                          whileTap={item.inStock ? { scale: 0.95 } : {}}
                        >
                          {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </motion.button>
                        <motion.button
                          onClick={() => removeFavorite(item.id)}
                          className="p-2 border border-[#479f78] text-[#46c34c] rounded-full hover:border-red-500 hover:text-red-500 transition-colors duration-200"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </motion.div>
      
      <Footer />
    </motion.div>
  );
}