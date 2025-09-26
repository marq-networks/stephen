'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Processing... Tee",
    description: "A mindful statement on the beauty of waiting, processing, and becoming.",
    price: 40,
    image: "/2.png",
    slug: "processing-tee"
  },
  {
    id: 2,
    name: "Processor Tee",
    description: "For the ones who process, analyze, and transform thoughts into action.",
    price: 40,
    image: "/3.png",
    slug: "processor-tee"
  },
  {
    id: 3,
    name: "What's Your Forecast? Tee",
    description: "A question that challenges perception and invites introspection.",
    price: 40,
    image: "/4.png",
    slug: "whats-your-forecast-tee"
  },
  {
    id: 4,
    name: "The Whether is in U Tee",
    description: "The power of choice, the strength of decision - it's all within you.",
    price: 40,
    image: "/one.png",
    slug: "the-whether-is-in-u-tee"
  }
];

export default function ProductGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      ref={sectionRef}
      className="sticky top-0 bg-[#fff] text-black py-20 rounded-2xl min-h-screen flex items-center z-20"
      style={{ y, opacity }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-black text-4xl md:text-5xl font-bold mb-4">
            Shop the Collection
          </h2>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className=" rounded-2xl overflow-hidden"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Product Details */}
              <div className="p-2">
                <h3 className="text-black text-xl font-bold mb-1">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mb-1 leading-relaxed">
                  {product.description}
                </p>
                
                {/* Price and Button */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[#46c34c] text-2xl font-bold">
                    ${product.price}
                  </span>
                  <Link href={`/product/${product.slug}`}>
                    <motion.button
                      className="bg-[#46c34c] hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 10px 25px rgba(249, 115, 22, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      Buy Now
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}