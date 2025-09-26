'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion, AnimatePresence, Variants } from 'framer-motion';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

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

const itemVariants: Variants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeIn" }
  }
};

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Life is Beautiful T-Shirt",
      price: 29.99,
      image: "/prduct.png",
      size: "M",
      color: "White",
      quantity: 2
    },
    {
      id: 2,
      name: "Minimalist Hoodie",
      price: 59.99,
      image: "/shop.png",
      size: "L",
      color: "Black",
      quantity: 1
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 50 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <motion.div
      className="min-h-screen bg-black"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shopping Cart.</h1>
          <p className="text-xl md:text-2xl opacity-90">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </motion.div>
      </section>

      <motion.div
        className="bg-white my-4 rounded-2xl py-16 px-6"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          {cartItems.length === 0 ? (
            <motion.div
              className="text-center py-20"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-6">🛒</div>
              <h2 className="text-2xl font-bold text-black mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Add some items to get started</p>
              <Link
                href="/shop"
                className="bg-[#46c34c] hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors duration-200 font-medium"
              >
                Continue Shopping
              </Link>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <motion.div
                  className="space-y-6"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <AnimatePresence>
                    {cartItems.map((item) => (
                      <motion.div
                        key={item.id}
                        className="bg-white rounded-2xl p-6 shadow-sm"
                        variants={itemVariants}
                        layout
                        whileHover={{ scale: 1.02 }}
                        exit="exit"
                      >
                        <div className="flex items-center space-x-6">
                          <motion.div
                            className="w-24 h-24 bg-gray-200 rounded-xl overflow-hidden flex-shrink-0"
                            whileHover={{ scale: 1.1 }}
                          >
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={96}
                              height={96}
                              className="object-cover w-full h-full"
                            />
                          </motion.div>

                          <div className="flex-1">
                            <h3 className="font-semibold text-black mb-1">{item.name}</h3>
                            <div className="text-sm text-gray-500 mb-2">
                              Size: {item.size} • Color: {item.color}
                            </div>
                            <div className="text-lg font-bold text-black">
                              ${item.price}
                            </div>
                          </div>

                          <div className="flex items-center space-x-3">
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 rounded-full border text-orange-500 border-orange-500 flex items-center justify-center hover:border-orange-500 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              -
                            </motion.button>
                            <span className="w-8 text-center text-orange-500 font-medium">{item.quantity}</span>
                            <motion.button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 rounded-full border text-orange-500 border-orange-500 flex items-center justify-center hover:border-orange-500 transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              +
                            </motion.button>
                          </div>

                          <motion.button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Order Summary */}
              <motion.div
                className="lg:col-span-1"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-8">
                  <h2 className="text-xl font-bold text-black mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span className="font-medium">
                        {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-lg font-bold">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  {shipping > 0 && (
                    <motion.div
                      className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <p className="text-sm text-orange-800">
                        Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                      </p>
                    </motion.div>
                  )}

                  <Link
                    href="/shipping"
                    className="w-full bg-[#46c34c] hover:bg-orange-600 text-white py-3 px-6 rounded-full font-medium transition-colors duration-200 block text-center"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block"
                    >
                      Proceed to Checkout
                    </motion.span>
                  </Link>

                  <Link
                    href="/shop"
                    className="w-full border border-gray-300 hover:border-orange-500 text-black py-3 px-6 rounded-full font-medium transition-colors duration-200 block text-center mt-3"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block"
                    >
                      Continue Shopping
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>

      <Footer />
    </motion.div>
  );
}