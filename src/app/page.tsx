import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BrandGrowthSection from '../components/BrandGrowthSection';
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
      
      {/* Hero Section - Fixed background */}
      <div className="fixed top-0 left-0 w-full z-0">
        <Hero />
      </div>
      
      {/* Scrollable content that overlays the hero */}
      <div className="relative z-10">
        {/* Spacer to push content down initially */}
        <div className="h-screen"></div>
        
        {/* Brand Growth Section - First section to overlay hero */}
        <div className="relative z-10 bg-[#171717]">
          <BrandGrowthSection />
        </div>
        
        {/* <div className="relative z-10 bg-[#171717]">
          <ProductGrid />
        </div> */}
        
        <div className="relative z-10 bg-[#171717]">
          <HowProductFeels />
        </div>
        
        <div className="relative z-10 bg-[#171717]">
          <EditorialFashion />
        </div>
        
        <div className="relative z-10 bg-[#171717]">
          <StatementSlider />
        </div>
        
        <div className="relative z-10 bg-[#171717]">
          <Features />
        </div>
        
        {/* <div className="relative z-10 bg-[#171717]">
          <Clients />
        </div> */}
        
        <div className="relative z-10 bg-[#171717]">
          <FAQ />
        </div>
        
        <div className="relative z-10 bg-[#171717]">
          <Contact />
        </div>
      </div>
      
      {/* Footer - Normal flow */}
      <Footer />
    </div>
  );
}
