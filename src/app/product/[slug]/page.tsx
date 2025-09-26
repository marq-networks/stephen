'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import ProductHero from '../../../components/ProductHero';

interface Product {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  images: string[];
  sizes: string[];
  colors: string[];
  features: string[];
}

// This would typically come from a database or API
const getProductBySlug = (slug: string): Product | null => {
  const products: { [key: string]: Product } = {
    'processing-tee': {
      id: 1,
      name: "Processing... Tee",
      shortDescription: "A mindful statement on the beauty of waiting, processing, and becoming.",
      longDescription: "This premium cotton t-shirt represents more than just clothing—it's a philosophy. The 'Processing...' design speaks to those moments of growth, reflection, and transformation that we all experience. Made from 100% organic cotton with a soft, breathable weave that gets better with every wash. The minimalist design features high-quality screen printing that won't fade or crack over time.",
      price: 40,
      images: ["/2.png", "/howporduct1.png", "/howporduct2.png"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Gray"],
      features: [
        "100% Organic Cotton",
        "Pre-shrunk for perfect fit",
        "Reinforced seams for durability",
        "Eco-friendly printing process",
        "Machine washable"
      ]
    },
    'processor-tee': {
      id: 2,
      name: "Processor Tee",
      shortDescription: "For the ones who process, analyze, and transform thoughts into action.",
      longDescription: "Designed for the analytical minds and deep thinkers, this t-shirt celebrates the power of processing information and turning insights into action. The clean, modern design reflects the clarity that comes from thoughtful analysis. Crafted with premium materials and attention to detail.",
      price: 40,
      images: ["/3.png", "/howporduct3.png", "/howporduct4.png"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Navy"],
      features: [
        "100% Organic Cotton",
        "Pre-shrunk for perfect fit",
        "Reinforced seams for durability",
        "Eco-friendly printing process",
        "Machine washable"
      ]
    },
    'whats-your-forecast-tee': {
      id: 3,
      name: "What's Your Forecast? Tee",
      shortDescription: "A question that challenges perception and invites introspection.",
      longDescription: "More than a question, it's an invitation to look within and consider your personal outlook. This thought-provoking design encourages self-reflection and mindful consideration of one's perspective on life. Premium quality construction meets meaningful messaging.",
      price: 40,
      images: ["/4.png", "/chart.png"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Gray"],
      features: [
        "100% Organic Cotton",
        "Pre-shrunk for perfect fit",
        "Reinforced seams for durability",
        "Eco-friendly printing process",
        "Machine washable"
      ]
    },
    'the-whether-is-in-u-tee': {
      id: 4,
      name: "The Whether is in U Tee",
      shortDescription: "The power of choice, the strength of decision - it's all within you.",
      longDescription: "A powerful reminder that the ability to choose, to decide, and to shape your reality lies within you. This empowering message is printed on premium cotton that feels as good as the message it carries. Perfect for those who believe in personal agency and inner strength.",
      price: 40,
      images: ["/one.png", "/prduct.png"],
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      colors: ["Black", "White", "Navy"],
      features: [
        "100% Organic Cotton",
        "Pre-shrunk for perfect fit",
        "Reinforced seams for durability",
        "Eco-friendly printing process",
        "Machine washable"
      ]
    }
  };

  return products[slug] || null;
};

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = getProductBySlug(params.slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl mb-4">Product Not Found</h1>
          <Link href="/" className="text-[#46c34c] hover:text-orange-400">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    // Add to cart logic here
    console.log('Added to cart:', {
      product: product.name,
      size: selectedSize,
      color: selectedColor,
      quantity
    });
    alert('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-[#171717]">
      <Navbar />
      
      {/* Hero Section - Fixed background */}
      <div className="fixed top-0 left-0 w-full z-0">
        <ProductHero productName={product.name} />
      </div>
      
      {/* Scrollable content that overlays the hero */}
      <div className="relative z-10">
        {/* Spacer to push content down initially */}
        <div className="h-screen"></div>
        
        {/* Full-width background container */}
        <div className="w-full bg-white">
          {/* Product Details Section - First section to overlay hero */}
          <div className="w-full max-w-[1570px] mx-auto bg-white rounded-t-2xl">
            <div className="pt-16 pb-16 px-6">
              {/* Breadcrumb */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link href="/" className="text-gray-600 hover:text-black">Home</Link>
                <span className="text-gray-400 mx-2">/</span>
                <Link href="/shop" className="text-gray-600 hover:text-black">Shop</Link>
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-black font-medium">{product.name}</span>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Images */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Main Image */}
                  <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
                    <Image
                      src={product.images[selectedImage]}
                      alt={product.name}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Thumbnail Images */}
                  {product.images.length > 1 && (
                    <div className="flex space-x-4">
                      {product.images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                            selectedImage === index ? 'border-orange-500' : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`${product.name} ${index + 1}`}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>

                {/* Product Details */}
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <div>
                    <h1 className="text-black text-3xl md:text-4xl font-bold mb-4">
                      {product.name}
                    </h1>
                    <p className="text-gray-600 text-lg mb-6">
                      {product.shortDescription}
                    </p>
                    <div className="text-[#46c34c] text-3xl font-bold mb-6">
                      ${product.price}
                    </div>
                  </div>

                  {/* Size Selection */}
                  <div>
                    <h3 className="text-black text-lg font-semibold mb-3">Size</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                            selectedSize === size
                              ? 'border-orange-500 bg-[#46c34c] text-white'
                              : 'border-gray-300 text-gray-700 hover:border-gray-400'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Color Selection */}
                  <div>
                    <h3 className="text-black text-lg font-semibold mb-3">Color</h3>
                    <div className="flex flex-wrap gap-3">
                      {product.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                            selectedColor === color
                              ? 'border-orange-500 bg-[#46c34c] text-white'
                              : 'border-gray-300 text-gray-700 hover:border-gray-400'
                          }`}
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div>
                    <h3 className="text-black text-lg font-semibold mb-3">Quantity</h3>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:border-gray-400 transition-colors duration-300"
                      >
                        -
                      </button>
                      <span className="text-black text-lg font-semibold w-8 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-lg border border-gray-300 text-gray-700 hover:border-gray-400 transition-colors duration-300"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    onClick={handleAddToCart}
                    className="w-full bg-[#46c34c] hover:bg-orange-600 text-white py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Add to Cart - ${product.price * quantity}
                  </motion.button>

                  {/* Product Features */}
                  <div>
                    <h3 className="text-black text-lg font-semibold mb-3">Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-[#46c34c] rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Long Description */}
                  <div>
                    <h3 className="text-black text-lg font-semibold mb-3">Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {product.longDescription}
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}