'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

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
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/blogs.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shopping Cart.</h1>
          <p className="text-xl md:text-2xl opacity-90">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>
      </section>

      <div className="bg-white  my-4 rounded-2xl py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🛒</div>
              <h2 className="text-2xl font-bold text-black mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Add some items to get started</p>
              <Link 
                href="/shop" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors duration-200 font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm">
                      <div className="flex items-center space-x-6">
                        <div className="w-24 h-24 bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={96}
                            height={96}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        
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
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full border text-orange-500 border-orange-500 flex items-center justify-center hover:border-orange-500 transition-colors"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-orange-500  font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full border text-orange-500 border-orange-500 flex items-center justify-center hover:border-orange-500 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
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
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                      <p className="text-sm text-orange-800">
                        Add ${(50 - subtotal).toFixed(2)} more for free shipping!
                      </p>
                    </div>
                  )}
                  
                  <Link
                    href="/shipping"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-full font-medium transition-colors duration-200 block text-center"
                  >
                    Proceed to Checkout
                  </Link>
                  
                  <Link
                    href="/shop"
                    className="w-full border border-gray-300 hover:border-orange-500 text-black py-3 px-6 rounded-full font-medium transition-colors duration-200 block text-center mt-3"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}