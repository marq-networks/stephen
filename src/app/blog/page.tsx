'use client';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
    <div className="min-h-screen bg-black">
      <Navbar />
      {/* Header */}
      <div className="relative bg-black text-white py-32 px-6 h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/blogherobg.png"
            alt="Blog hero background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>



      </div>

      {/* Blog Grid */}
      <div className="bg-white  my-4 rounded-2xl py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post, index) => {
              if (post.slug) {
                return (
                  <Link
                    key={post.id}
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
                );
              } else {
                return (
                  <article
                    key={post.id}
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
                  </article>
                );
              }
            })}
          </div>

          {/* Bottom Section */}

        </div>
      </div>

      <div className="mt-16 bg-white py-20 text-center">
        <p className="text-black font-bold text-2xl mb-8 max-w-4xl mx-auto">
          Premium cotton extra that matches comfort and style — crafted from 100% pure cotton, designed for breathability, durability, and an effortlessly elegant fit. Soft to skin, light as air, and perfect for every occasion, just like you.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-colors duration-200 font-medium">
          Load More Articles
        </button>
      </div>
      <Footer />
    </div>
  );
}