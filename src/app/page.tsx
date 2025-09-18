import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import HowProductFeels from '../components/HowProductFeels';
import Features from '../components/Features';
import Clients from '../components/Clients';
import FAQ from '../components/FAQ';
import Blogs from '../components/Blogs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Image from "next/image";
import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#171717]">
      <Navbar />
      <Hero />

      <div className="bg-white my-8 rounded-2xl">
        <ProductShowcase />
      </div>

      <div className="bg-white my-8 rounded-2xl">
        <HowProductFeels />
      </div>

      <div className="bg-white my-8 rounded-2xl">
        <Features />
      </div>

      <div className="bg-white my-8 rounded-2xl">
        <Clients />
      </div>

      <div className="bg-white my-8 rounded-2xl">
        <FAQ />
      </div>

      <div className="bg-white  my-8 rounded-2xl">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
