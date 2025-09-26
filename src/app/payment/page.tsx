'use client';
import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    email: '',
    saveCard: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission
    // Redirect to success page or show confirmation
  };
  
  return (
    <div className="min-h-screen bg-[#171717]">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Payment.</h1>
          <p className="text-xl md:text-2xl opacity-90">Secure payment processing</p>
        </div>
      </section>

      <div className="bg-white mx-4 md:mx-8 my-8 rounded-2xl py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Payment Form */}
            <div className="bg-white rounded-lg p-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Method</h2>
              
              {/* Payment Method Selection */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 border-2 rounded-lg flex items-center justify-center space-x-2 transition-colors ${
                    paymentMethod === 'card' 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
                    {paymentMethod === 'card' && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
                  </div>
                  <span className="font-medium text-black">Card</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-4 border-2 rounded-lg flex items-center justify-center space-x-2 transition-colors ${
                    paymentMethod === 'paypal' 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
                    {paymentMethod === 'paypal' && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
                  </div>
                  <span className="font-medium text-black">Paypal</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => setPaymentMethod('gpay')}
                  className={`p-4 border-2 rounded-lg flex items-center justify-center space-x-2 transition-colors ${
                    paymentMethod === 'gpay' 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
                    {paymentMethod === 'gpay' && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
                  </div>
                  <span className="font-medium text-black">G Pay</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => setPaymentMethod('applepay')}
                  className={`p-4 border-2 rounded-lg flex items-center justify-center space-x-2 transition-colors ${
                    paymentMethod === 'applepay' 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
                    {paymentMethod === 'applepay' && <div className="w-3 h-3 bg-green-500 rounded-full"></div>}
                  </div>
                  <span className="font-medium text-black">A Pay</span>
                </button>
              </div>
                
              
              {paymentMethod === 'card' && (
                <form id="payment-form" onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Name on card
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-sm"
                        placeholder="Enter name on card"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-gray-600 mb-1">
                        Card number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-sm"
                        placeholder="Enter card number"
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          Expired date
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-sm"
                          placeholder="Enter name on card"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-600 mb-1">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="w-full px-3 py-3 border border-gray-300 rounded-md focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-sm"
                          placeholder="Enter CVV"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="saveCard"
                      checked={formData.saveCard}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-[#46c34c] rounded"
                    />
                    <label className="ml-2 text-sm text-gray-600">
                      Save this card for future purchases
                    </label>
                  </div>
                  
                  <div className="mt-6 text-center text-xs text-gray-500 space-x-4">
                    <a href="#" className="hover:text-gray-700">Where is Card number?</a>
                    <a href="#" className="hover:text-gray-700">Where is Expired date?</a>
                    <a href="#" className="hover:text-gray-700">Where is my CVV?</a>
                  </div>
                </form>
              )}

              {paymentMethod === 'paypal' && (
                <div className="text-center py-8">
                  <button 
                    type="button"
                    className="w-full bg-[#46c34c] hover:bg-[#3a9e40] text-white py-3 px-6 rounded-lg font-medium transition-colors"
                  >
                    Continue with PayPal
                  </button>
                </div>
              )}

              {paymentMethod === 'gpay' && (
                <div className="text-center py-8">
                  <button 
                    type="button"
                    className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                  >
                    Continue with Google Pay
                  </button>
                </div>
              )}

              {paymentMethod === 'applepay' && (
                <div className="text-center py-8">
                  <button 
                    type="button"
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg font-medium transition-colors"
                  >
                    Continue with Apple Pay
                  </button>
                </div>
              )}
            </div>
            
            {/* Order Summary */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Summary ( 2 items )</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">16.25 USD</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold">Total</span>
                    <span className="text-lg font-semibold">16.25 USD</span>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                form="payment-form"
                className="w-full bg-gray-400 hover:bg-gray-500 text-white py-3 px-6 rounded-lg font-medium transition-colors mb-4"
              >
                Continue
              </button>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-600 mb-2">Payment accepted</p>
                  <div className="flex space-x-2">
                    <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                    <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                    <div className="w-8 h-5 bg-[#46c34c] rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                    <div className="w-8 h-5 bg-gray-700 rounded text-white text-xs flex items-center justify-center font-bold">PP</div>
                    <div className="w-8 h-5 bg-green-500 rounded text-white text-xs flex items-center justify-center font-bold">GP</div>
                    <div className="w-8 h-5 bg-black rounded text-white text-xs flex items-center justify-center font-bold">AP</div>
                  </div>
                </div>
                
                <div>
                  <p className="text-xs text-gray-600">Customer services: <span className="font-medium">24/7 +855 (240) 389 328</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}