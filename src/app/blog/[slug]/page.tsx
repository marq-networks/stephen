'use client';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

interface BlogPost {
  id: number;
  slug: string;
  title: string;
  image: string;
  category: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "2023-rebrand-website-business",
    title: "How a 2023 rebrand website made the brand your business",
    image: "/blogs.png",
    category: "Branding",
    excerpt: "Discover how strategic rebranding can transform your business and create lasting impact in the digital landscape.",
    content: `
      <h2>The Power of Strategic Rebranding</h2>
      <p>In today's rapidly evolving digital landscape, a strategic rebrand can be the catalyst that transforms your business from ordinary to extraordinary. The year 2023 marked a pivotal moment for many companies who recognized that their brand identity needed to evolve with changing consumer expectations and market dynamics.</p>
      
      <h3>Understanding the Rebrand Process</h3>
      <p>A successful rebrand goes far beyond just changing your logo or color scheme. It's about reimagining your entire brand experience and how customers interact with your business. This comprehensive approach includes:</p>
      <ul>
        <li>Brand strategy and positioning</li>
        <li>Visual identity redesign</li>
        <li>Website and digital presence overhaul</li>
        <li>Customer experience optimization</li>
        <li>Internal culture alignment</li>
      </ul>
      
      <h3>The Business Impact</h3>
      <p>Companies that invested in strategic rebranding in 2023 saw remarkable results. From increased customer engagement to improved market positioning, the benefits were both immediate and long-lasting. The key was ensuring that every touchpoint reflected the new brand vision consistently.</p>
      
      <p>The digital transformation aspect was particularly crucial, as businesses needed to ensure their online presence matched their evolved brand identity. This meant not just updating websites, but rethinking the entire customer journey from first impression to post-purchase experience.</p>
    `,
    author: "Stephen Design Team",
    date: "March 15, 2024",
    readTime: "5 min read"
  },
  {
    id: 2,
    slug: "maximalism-ecommerce-design",
    title: "Maximalism in e-commerce",
    image: "/blogs2.png",
    category: "E-commerce",
    excerpt: "Exploring how bold, maximalist design principles are reshaping the e-commerce landscape.",
    content: `
      <h2>Embracing Bold Design in E-commerce</h2>
      <p>Maximalism in e-commerce represents a bold departure from the minimalist trends that have dominated digital design for years. This approach embraces rich visuals, vibrant colors, and complex layouts to create immersive shopping experiences.</p>
      
      <h3>Key Elements of Maximalist E-commerce Design</h3>
      <p>Successful maximalist e-commerce sites incorporate several key elements:</p>
      <ul>
        <li>Rich, layered visual hierarchies</li>
        <li>Bold typography and color schemes</li>
        <li>Interactive elements and animations</li>
        <li>Detailed product storytelling</li>
        <li>Immersive brand experiences</li>
      </ul>
      
      <h3>The Psychology Behind Maximalism</h3>
      <p>Maximalist design taps into consumers' desire for authentic, memorable experiences. In a world saturated with similar-looking minimalist sites, maximalist approaches help brands stand out and create emotional connections with their audience.</p>
    `,
    author: "Stephen Design Team",
    date: "March 10, 2024",
    readTime: "4 min read"
  }
];

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative bg-black text-white py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/blogherobg.png"
            alt={post.title}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
       
        
        <div className="relative z-20 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            Blog 01.
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white mx-4 md:mx-8 my-8 rounded-2xl py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">
                  {post.title}
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    At Freshly Baked, our priorities partnership over the traditional client-agency dynamic. We integrate seamlessly with your team, working together to bring your vision to life. By immersing ourselves in your business, we uncover the values, ambitions, and audience that define your brand. Through open dialogue and close collaboration, we cultivate trust, transparency, and a shared sense of purpose—key ingredients for every successful project.
                  </p>
                  <p>
                    <strong>Process.</strong> We recognize that a successful brand isn&lsquo;t just beautifully crafted; it&lsquo;s implemented seamlessly across every touchpoint. That&lsquo;s why we bring together a team of multidisciplinary experts who.
                  </p>
                  <p>
                    At Freshly Baked, our priorities partnership over the traditional client-agency dynamic. We integrate seamlessly with your team, working together to bring your vision to life. By immersing ourselves in your business, we uncover the values, ambitions, and audience that define your brand. Through open dialogue and close collaboration, we cultivate trust, transparency, and a shared sense of purpose—key ingredients for every successful project.
                  </p>
                  <p>
                    <strong>Process.</strong> We recognize that a successful brand isn&lsquo;t just beautifully crafted; it&lsquo;s implemented seamlessly across every touchpoint. That&lsquo;s why we bring together a team of multidisciplinary experts who.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="lg:sticky lg:top-8">
              <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden">
                <Image
                  src="/about.png"
                  alt="Team member"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Posts */}
      <div className="bg-white mx-4 md:mx-8 my-8 rounded-2xl py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <Link 
                key={relatedPost.id} 
                href={`/blog/${relatedPost.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                  <Image
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-500 uppercase tracking-wide mb-2">
                    {relatedPost.category}
                  </div>
                  <h3 className="font-semibold text-black mb-2 leading-tight group-hover:text-[#46c34c] transition-colors duration-200">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {relatedPost.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}