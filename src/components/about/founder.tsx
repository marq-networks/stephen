'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { ShoppingCart, Plus } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Premium Cotton Tee", price: "$45", image: "/howporduct1.png" },
  { id: 2, name: "Comfort Blend Shirt", price: "$50", image: "/howporduct2.png" },
  { id: 3, name: "Classic Design Tee", price: "$40", image: "/howporduct3.png" },
  { id: 4, name: "Versatile Style Shirt", price: "$48", image: "/howporduct4.png" }
];

const Founder = () => {
    const [addedToCart, setAddedToCart] = useState<number[]>([]);

    const handleAddToCart = (productId: number) => {
        setAddedToCart(prev => [...prev, productId]);
        // Remove the "added" state after 2 seconds
        setTimeout(() => {
            setAddedToCart(prev => prev.filter(id => id !== productId));
        }, 2000);
    };

    return (
        <div className="w-full bg-white py-12 sm:py-16 lg:py-20">
            <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Left - Product Image */}
                    <motion.div 
                        className="relative rounded-lg aspect-square overflow-hidden group"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="/prduct.png"
                            alt="Product"
                            className="w-full h-full object-cover"
                        />
                        
                        {/* Add to Cart Button */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <motion.button
                                onClick={() => handleAddToCart(1)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                    addedToCart.includes(1)
                                        ? 'bg-green-500 text-white'
                                        : 'bg-white text-black hover:bg-gray-100'
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                disabled={addedToCart.includes(1)}
                            >
                                {addedToCart.includes(1) ? (
                                    <>
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-4 h-4 rounded-full bg-white"
                                        />
                                        Added!
                                    </>
                                ) : (
                                    <>
                                        <ShoppingCart size={16} />
                                        Add to Cart
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right - Testimonial Content */}
                    <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
                        <h3 className="text-xl sm:text-2xl font-bold text-black">The Founder</h3>

                        <blockquote className="text-lg sm:text-xl font-bold text-black leading-relaxed">
                            &quot;The closest thing to having an in-house design team without actually hiring one&rdquo;
                        </blockquote>

                        <p className="text-sm text-black font-light leading-relaxed">
                            From strategy to execution, they integrated seamlessly into our workflow and brought clarity to every step of the process.
                        </p>

                        <div className="pt-2 sm:pt-4">
                            <p className="font-medium text-black">Alex Morgan</p>
                            <p className="text-sm text-black">CEO at IDEO</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div 
                className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20 mt-12 lg:mt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="w-full max-w-[1570px] mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {products.map((product, index) => (
                            <motion.div 
                                key={product.id}
                                className="relative rounded-lg aspect-square overflow-hidden group"
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                
                                {/* Product Info Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                                    <h4 className="text-white font-semibold text-xs sm:text-sm mb-1">{product.name}</h4>
                                    <p className="text-white/80 text-xs mb-2 sm:mb-3">{product.price}</p>
                                    
                                    {/* Add to Cart Button */}
                                    <motion.button
                                        onClick={() => handleAddToCart(product.id)}
                                        className={`flex items-center justify-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                                            addedToCart.includes(product.id)
                                                ? 'bg-green-500 text-white'
                                                : 'bg-white text-black hover:bg-gray-100'
                                        }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        disabled={addedToCart.includes(product.id)}
                                    >
                                        {addedToCart.includes(product.id) ? (
                                            <>
                                                <motion.div
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white"
                                                />
                                                <span className="hidden sm:inline">Added!</span>
                                                <span className="sm:hidden">✓</span>
                                            </>
                                        ) : (
                                            <>
                                                <ShoppingCart size={10} className="sm:w-3 sm:h-3" />
                                                <span className="hidden sm:inline">Add to Cart</span>
                                                <span className="sm:hidden">Add</span>
                                            </>
                                        )}
                                    </motion.button>
                                </div>

                                {/* Quick Add Button (Always Visible on Mobile) */}
                                <div className="absolute top-2 right-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                    <motion.button
                                        onClick={() => handleAddToCart(product.id)}
                                        className={`p-1.5 sm:p-2 rounded-full shadow-lg transition-all duration-300 ${
                                            addedToCart.includes(product.id)
                                                ? 'bg-green-500 text-white'
                                                : 'bg-white text-black hover:bg-gray-100'
                                        }`}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        disabled={addedToCart.includes(product.id)}
                                    >
                                        {addedToCart.includes(product.id) ? (
                                            <motion.div
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white"
                                            />
                                        ) : (
                                            <Plus size={12} className="sm:w-4 sm:h-4" />
                                        )}
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Founder;