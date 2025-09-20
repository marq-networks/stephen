import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import HowProductFeels from '../components/HowProductFeels';
import EditorialFashion from '../components/EditorialFashion';
import StatementSlider from '../components/StatementSlider';
import Features from '../components/Features';
import Clients from '../components/Clients';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#171717]">
      <Navbar />
      <Hero />

      <div className="my-8">
        <ProductGrid />
      </div>

      <div className="bg-white my-8 rounded-2xl">
        <HowProductFeels />
      </div>

      <div className="bg-white my-8 rounded-2xl">
        <EditorialFashion />
      </div>

      <div className="my-8 rounded-2xl overflow-hidden">
        <StatementSlider />
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
