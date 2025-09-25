'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import BlogHero from '../../components/BlogHero';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      slug: "2023-rebrand-website-business",
      title: "How a 2023 rebrand website made the brand your business",
      image: "/blogs.png",
      category: "Branding"
    },
    {
      id: 2,
      slug: "maximalism-ecommerce-design",
      title: "Maximalism in e-commerce",
      image: "/blogs2.png",
      category: "E-commerce"
    },
    {
      id: 3,
      title: "Maximalism in e-commerce",
      image: "/shop.png",
      category: "E-commerce"
    },
    {
      id: 4,
      title: "Maximalism in e-commerce",
      image: "/about.png",
      category: "Strategy"
    },
    {
      id: 5,
      title: "Maximalism in e-commerce",
      image: "/hero.png",
      category: "Design"
    },
    {
      id: 6,
      title: "Maximalism in e-commerce",
      image: "/prduct.png",
      category: "Development"
    },
    {
      id: 7,
      title: "Maximalism in e-commerce",
      image: "/blog.png",
      category: "Marketing"
    },
    {
      id: 8,
      title: "Maximalism in e-commerce",
      image: "/shop.png",
      category: "Business"
    }
  ];

  return (
    <div className="min-h-screen bg-[#171717]">
      <Navbar />
      
      {/* Hero Section - Fixed background */}
      <div className="fixed top-0 left-0 w-full z-0">
        <BlogHero />
      </div>
      
      {/* Scrollable content that overlays the hero */}
      <div className="relative z-10">
        {/* Spacer to push content down initially */}
        <div className="h-screen"></div>
        
        {/* Full-width background container */}
        <div className="w-full bg-white">
          {/* Blog Grid Section - First section to overlay hero */}
          <div className="w-full max-w-[1570px] mx-auto bg-white rounded-t-2xl">
            <div className="py-20 px-6">
              <motion.div 
                className="text-center mb-12"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                  Latest Articles
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Discover insights, trends, and stories that inspire creativity and innovation.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {blogPosts.map((post, index) => {
                  if (post.slug) {
                    return (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      >
                        <Link
                          href={`/blog/${post.slug}`}
                          className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group block ${index === 0 ? 'md:col-span-2 lg:row-span-2' : ''
                            }`}
                        >
                          <div className={`bg-gray-200 relative overflow-hidden ${index === 0 ? 'aspect-[2/1] md:aspect-[4/3]' : 'aspect-[4/3]'
                            }`}>
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className={`p-6 ${index === 0 ? 'md:p-8' : ''}`}>
                            <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                              {post.category}
                            </div>
                            <h3 className={`font-semibold text-black mb-2 leading-tight group-hover:text-orange-500 transition-colors duration-200 ${index === 0 ? 'text-xl md:text-2xl' : 'text-lg'
                              }`}>
                              {post.title}
                            </h3>
                            {index === 0 && (
                              <p className="text-gray-600 text-sm mt-3 hidden md:block">
                                Discover the latest design trends shaping the digital world and how they impact business.
                              </p>
                            )}
                          </div>
                        </Link>
                      </motion.div>
                    );
                  } else {
                    return (
                      <motion.div
                        key={post.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      >
                        <div className="bg-gray-200 relative overflow-hidden aspect-[4/3]">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                            {post.category}
                          </div>
                          <h3 className="font-semibold text-black mb-2 leading-tight group-hover:text-orange-500 transition-colors duration-200 text-lg">
                            {post.title}
                          </h3>
                        </div>
                      </motion.div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}