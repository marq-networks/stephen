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
  const categories = ['All', 'Statement Tees', 'Empowerment Series', 'Mindful Collection'];
  
  const products = [
    {
      id: 1,
      name: 'Processing... Tee',
      price: '$40',
      originalPrice: '$50',
      image: '/howporduct1.png',
      label: 'Bestseller',
      labelColor: 'bg-[#46c34c]',
      category: 'Statement Tees',
      description: 'Embrace the beauty of becoming. Premium organic cotton with mindful messaging.',
      keywords: 'processing tee, mindful fashion, organic cotton, statement shirt',
      feelDescription: 'Soft, breathable organic cotton that moves with you through every moment of growth and reflection.'
    },
    {
      id: 2,
      name: 'The Whether is in U Tee',
      price: '$40',
      originalPrice: '$45',
      image: '/howporduct2.png',
      label: 'Popular',
      labelColor: 'bg-[#46c34c]',
      category: 'Empowerment Series',
      description: 'The power of choice lives within you. Comfortable fit for confident living.',
      keywords: 'empowerment tee, choice, inner strength, motivational clothing',
      feelDescription: 'Empowering comfort that reminds you of your inner strength with every wear.'
    },
    {
      id: 3,
      name: 'Life is Beautiful Tee',
      price: '$45',
      originalPrice: '$55',
      image: '/howporduct3.png',
      label: 'New',
      labelColor: 'bg-[#46c34c]',
      category: 'Mindful Collection',
      description: 'Celebrate life\'s beauty in sustainable style. Eco-friendly materials and positive vibes.',
      keywords: 'life is beautiful, positive fashion, sustainable tee, uplifting apparel',
      feelDescription: 'Uplifting softness that celebrates life\'s beautiful moments with premium comfort.'
    },
    {
      id: 4,
      name: 'What\'s Your Forecast? Tee',
      price: '$40',
      image: '/howporduct4.png',
      label: 'Thought-Provoking',
      labelColor: 'bg-[#46c34c]',
      category: 'Statement Tees',
      description: 'Challenge perceptions with this conversation-starting design. Quality that lasts.',
      keywords: 'forecast tee, thought provoking, conversation starter, unique design',
      feelDescription: 'Conversation-starting comfort that invites introspection and meaningful dialogue.'
    },
    {
      id: 5,
      name: 'Processor Tee',
      price: '$40',
      originalPrice: '$48',
      image: '/howporduct1.png',
      label: 'Analytical',
      labelColor: 'bg-[#46c34c]',
      category: 'Statement Tees',
      description: 'For those who process, analyze, and transform. Premium cotton for deep thinkers.',
      keywords: 'processor tee, analytical mind, deep thinking, premium cotton',
      feelDescription: 'Thoughtful comfort designed for minds that process deeply and think analytically.'
    },
    {
      id: 6,
      name: 'Mindful Statement Tee',
      price: '$42',
      image: '/howporduct2.png',
      category: 'Mindful Collection',
      description: 'Wear your mindfulness. Sustainable materials meet conscious living.',
      keywords: 'mindful tee, conscious living, sustainable fashion, awareness',
      feelDescription: 'Mindfully crafted comfort that connects you to the present moment.'
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
      role="region"
      aria-label="Product Experience and Feel"
    >
      {/* SEO-optimized structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Stephen Statement Tee Collection",
            "description": "Premium organic cotton statement tees with meaningful messages for authentic self-expression",
            "numberOfItems": products.length,
            "itemListElement": products.map((product, index) => ({
              "@type": "Product",
              "position": index + 1,
              "name": product.name,
              "description": product.description,
              "image": product.image,
              "offers": {
                "@type": "Offer",
                "price": product.price.replace('$', ''),
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "Stephen Fashion"
                }
              },
              "brand": {
                "@type": "Brand",
                "name": "Stephen"
              },
              "category": "Apparel > T-Shirts",
              "material": "Organic Cotton",
              "keywords": product.keywords
            }))
          })
        }}
      />

      <div className="w-full">
        {/* SEO-optimized Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            How Our Statement Tees Feel
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-black max-w-4xl mx-auto leading-relaxed px-4 mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Experience the perfect fusion of comfort, consciousness, and authentic self-expression. 
            Each premium organic cotton tee is crafted to feel as meaningful as the message it carries, 
            providing all-day comfort while inspiring personal growth and mindful living.
          </motion.p>

          <motion.div
            className="text-sm text-gray-600 max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p>✓ 100% Organic Cotton • ✓ Pre-shrunk for Perfect Fit • ✓ Eco-friendly Printing • ✓ Reinforced Seams</p>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
          role="group"
          aria-label="Product category filters"
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
              transition={{ duration: 0.5, delay: 1.0 + (index * 0.1), type: "spring", stiffness: 200 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-pressed={activeCategory === category}
              aria-label={`Filter by ${category}`}
              type="button"
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.ul 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          viewport={{ once: true }}
          aria-label="Statement tee collection"
        >
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <motion.li
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
                      className={`absolute top-2 sm:top-4 left-2 sm:left-4 ${product.labelColor} text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium z-10`}
                    >
                      {product.label}
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={`${product.name} - ${product.description}`}
                    fill
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Product Info */}
                <div className="p-3 sm:p-4">
                  <h2 className="text-base sm:text-lg font-semibold text-black mb-2 group-hover:text-[#46c34c] transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg sm:text-xl font-bold text-black">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 italic">
                    Feel: {product.feelDescription}
                  </p>
                  
                  {/* Hidden SEO content */}
                  <div className="sr-only">
                    <span>Keywords: {product.keywords}</span>
                    <span>Material: 100% Organic Cotton</span>
                    <span>Category: {product.category}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col gap-3 px-4">
                    <Link href={`/product/${product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                      <button 
                        className="bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-gray-100 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm sm:text-base w-full"
                        aria-label={`View details for ${product.name}`}
                      >
                        View Details
                      </button>
                    </Link>
                    <button 
                      onClick={() => addToCart(product.id)}
                      className="bg-[#46c34c] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-[#46c34c]/80 transition-colors transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm sm:text-base w-full"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.li>
            ))
          ) : (
            <motion.div 
              className="col-span-full text-center py-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-black mb-4">No Products Available</h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                We could not find any products in the {activeCategory} category. Try selecting a different category or check back later.
              </p>
              <motion.button
                onClick={() => setActiveCategory('All')}
                className="bg-[#46c34c] text-white px-8 py-3 rounded-full font-medium hover:bg-[#46c34c]/80 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All Products
              </motion.button>
            </motion.div>
          )}
        </motion.ul>

        {/* Feel & Quality Section */}
        <motion.div 
          className="mt-12 sm:mt-16 bg-gray-50 rounded-2xl p-6 sm:p-8"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-black mb-8">
            The Exclaim Experience: More Than Just a Tee
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#46c34c] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🌱</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-black">Sustainable Comfort</h4>
              <p className="text-gray-600 text-sm">
                100% organic cotton thats gentle on your skin and kind to the planet. 
                Each tee is pre-shrunk and designed to maintain its shape and softness wash after wash.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#46c34c] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💭</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-black">Meaningful Messages</h4>
              <p className="text-gray-600 text-sm">
                Every design carries deep philosophical meaning, inspiring personal growth and 
                authentic self-expression. Wear your values, not just your style.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#46c34c] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-black">Premium Quality</h4>
              <p className="text-gray-600 text-sm">
                Reinforced seams, eco-friendly printing, and attention to detail ensure 
                your statement tee looks and feels amazing for years to come.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-12 sm:mt-16"
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-black mb-4">
            Ready to Wear Your Truth?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands who have discovered the perfect blend of comfort, consciousness, and style. 
            Every purchase supports sustainable fashion and meaningful self-expression.
          </p>
          <Link href="/shop">
            <motion.button 
              className="bg-[#46c34c] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-[#46c34c]/80 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Shop all statement tees collection"
            >
              Shop All Statement Tees
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}