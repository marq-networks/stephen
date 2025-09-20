'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function HowProductFeels() {
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
    },
    {
      id: 5,
      name: 'Premium Denim Jacket',
      price: '$220',
      image: '/howporduct1.png',
      label: '',
      labelColor: '',
      category: 'Outerwear'
    },
    {
      id: 6,
      name: 'Elegant White Blouse',
      price: '$125',
      image: '/howporduct2.png',
      label: 'New',
      labelColor: 'bg-yellow-400',
      category: 'New Arrivals'
    },
    {
      id: 7,
      name: 'Classic Blue Jeans',
      price: '$89',
      image: '/howporduct3.png',
      label: '',
      labelColor: '',
      category: 'Bottoms'
    },
    {
      id: 8,
      name: 'Summer Floral Dress',
      price: '$155',
      image: '/howporduct4.png',
      label: 'New',
      labelColor: 'bg-yellow-400',
      category: 'Dresses'
    }
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => 
        product.category === activeCategory || 
        (activeCategory === 'New Arrivals' && product.label === 'New')
      );

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Curated <span className="text-yellow-400">Collection</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our carefully curated selection of editorial pieces designed to make a statement and elevate your wardrobe.
          </motion.p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-yellow-400 text-black shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 min-h-[600px]"
          key={activeCategory} // This forces re-animation when category changes
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={`${activeCategory}-${product.id}`} // Unique key for re-animation
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              layout
            >
              <Link href={`/product/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="relative overflow-hidden rounded-2xl bg-gray-50 mb-4">
                  {/* Product Label */}
                  {product.label && (
                    <div className={`absolute top-4 left-4 ${product.labelColor} text-black px-3 py-1 rounded-full text-sm font-semibold z-10`}>
                      {product.label}
                    </div>
                  )}
                  
                  {/* Product Image */}
                  <div className="aspect-[4/5] relative overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-gray-900 group-hover:text-gray-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-xl text-gray-900">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-gray-500 line-through text-lg">{product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Show message if no products found */}
        {filteredProducts.length === 0 && (
          <motion.div 
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </motion.div>
        )}

        {/* Call to Action */}
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
            <Link href="/shop" className="bg-black hover:bg-gray-800 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg inline-block">
              View All Products
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}