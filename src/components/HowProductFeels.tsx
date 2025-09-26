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
  const [cart, setCart] = useState<{id: number, quantity: number}[]>([]);
  
  const categories = ['All', 'New Arrivals', 'Dresses', 'Tops', 'Outerwear', 'Bottoms'];
  
  const products = [
    {
      id: 1,
      name: 'Essential Black Dress',
      price: '$189',
      originalPrice: '$250',
      image: '/howporduct1.png',
      label: 'Sale',
      labelColor: 'bg-[#46c34c]',
      category: 'Dresses'
    },
    {
      id: 2,
      name: 'Casual White Tee',
      price: '$89',
      originalPrice: '$120',
      image: '/howporduct2.png',
      label: 'New',
      labelColor: 'bg-[#46c34c]',
      category: 'Tops'
    },
    {
      id: 3,
      name: 'Premium Denim Jacket',
      price: '$299',
      originalPrice: '$399',
      image: '/howporduct3.png',
      label: 'Sale',
      labelColor: 'bg-[#46c34c]',
      category: 'Outerwear'
    },
    {
      id: 4,
      name: 'Comfortable Joggers',
      price: '$129',
      image: '/howporduct4.png',
      label: 'Popular',
      labelColor: 'bg-[#46c34c]',
      category: 'Bottoms'
    },
    {
      id: 5,
      name: 'Elegant Evening Gown',
      price: '$459',
      originalPrice: '$599',
      image: '/howporduct1.png',
      label: 'New',
      labelColor: 'bg-[#46c34c]',
      category: 'Dresses'
    },
    {
      id: 6,
      name: 'Vintage Band Tee',
      price: '$79',
      image: '/howporduct2.png',
      category: 'Tops'
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

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
    <motion.section 
      ref={sectionRef}
      className="sticky top-0 bg-white py-8 sm:py-12 lg:py-16 max-w-[1570px] mx-auto rounded-2xl flex items-center z-30 w-full px-4 sm:px-6 lg:px-8"
      style={{ y, opacity, minHeight: 'auto' }}
    >
      <div className="w-full">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            How Our Products Feel
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-black max-w-3xl mx-auto leading-relaxed px-4"
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
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category
                  ? 'bg-[#46c34c] text-white shadow-lg'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
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
              <div className="overflow-hidden h-[40vh] sm:h-[50vh] lg:h-[60vh] relative">
                {product.label && (
                  <div 
                    className={`absolute top-2 sm:top-4 left-2 sm:left-4 ${product.labelColor} text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium z-10`}
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
              <div className="p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold text-black mb-2 group-hover:text-[#46c34c] transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg sm:text-xl font-bold text-black">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-black line-through">{product.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="flex flex-col gap-3 px-4">
                  <Link href="/shop">
                    <button className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-gray-100 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm sm:text-base w-full">
                      View Details
                    </button>
                  </Link>
                  <button 
                    onClick={() => addToCart(product.id)}
                    className="bg-[#46c34c] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-[#46c34c]/80 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm sm:text-base w-full"
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
          className="text-center mt-12 sm:mt-16"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <Link href="/shop">
            <motion.button 
              className="bg-[#46c34c] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#46c34c]/80 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Shop All Products
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}