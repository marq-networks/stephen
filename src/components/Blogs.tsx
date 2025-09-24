'use client';
import Image from 'next/image';

export default function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "Launching a bold identity for a leading company",
      subtitle: "How we crafted a compelling narrative brand for a startup.",
      image: "/hero.png",
      featured: true
    },
    {
      id: 2,
      title: "Maximalism in e-commerce",
      subtitle: "Why more is more when it comes to online retail.",
      image: "/prduct.png",
      featured: false
    },
    {
      id: 3,
      title: "Speaking at OFFF Barcelona 2023",
      subtitle: "Sharing insights on brand branding & creative process.",
      image: "/blog.png",
      featured: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">Blogs</h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto">
            Fresh reads, sharp takes. Stories, ideas, and updates from our world.
          </p>
        </div>

        {/* Blog Grid - 3 equal columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] bg-gray-200 relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-black mb-2 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {post.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
        
        {/* Bottom Actions */}
        <div className="flex justify-between items-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full transition-colors duration-200 text-sm font-medium">
            See More
          </button>
          <button className="text-gray-600 hover:text-black transition-colors duration-200 text-sm font-medium">
            More news
          </button>
        </div>
      </div>
    </section>
  );
}