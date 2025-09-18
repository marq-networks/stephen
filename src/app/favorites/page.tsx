'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function FavoritesPage() {
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
    console.log(`Moving item ${id} to cart`);
    removeFavorite(id);
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Favorites.</h1>
          <p className="text-xl md:text-2xl opacity-90">
            {favorites.length} {favorites.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </div>
      </section>

      {/* Favorites Grid */}
      <div className="bg-white  my-8 rounded-2xl py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {favorites.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">💝</div>
              <h2 className="text-2xl font-bold text-black mb-4">Your favorites list is empty</h2>
              <p className="text-gray-600 mb-8">Start adding items you love to keep track of them</p>
              <Link 
                href="/shop" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors duration-200 font-medium"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {favorites.map((item) => (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="aspect-square bg-gray-200 relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                    {!item.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>
                  
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
                      <button
                        onClick={() => moveToCart(item.id)}
                        disabled={!item.inStock}
                        className={`flex-1 py-2 px-4 rounded-full font-medium transition-colors duration-200 ${
                          item.inStock
                            ? 'bg-orange-500 hover:bg-orange-600 text-white'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                      </button>
                      <button
                        onClick={() => removeFavorite(item.id)}
                        className="p-2 border border-orange-500 text-orange-500 rounded-full hover:border-red-500 hover:text-red-500 transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
}