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
      
      {/* Sticky Scroll Container - All sections participate */}
      <div className="relative">
        {/* Hero Section - Sticky z-0 */}
        <Hero />
        
        {/* Brand Growth Section - Sticky z-10 */}
        <BrandGrowthSection />
        
        {/* Product Grid - Sticky z-20 */}
        <ProductGrid />
        
        {/* How Product Feels - Sticky z-30 */}
        <HowProductFeels />
        
        {/* Editorial Fashion - Sticky z-40 */}
        <div className="sticky top-0 z-40">
          <EditorialFashion />
        </div>
        
        {/* Statement Slider - Sticky z-50 */}
        <div className="sticky top-0 z-50">
          <StatementSlider />
        </div>
        
        {/* Features - Sticky z-60 */}
        <div className="sticky top-0 z-60">
          <Features />
        </div>
        
        {/* Clients - Sticky z-70 */}
        <div className="sticky top-0 z-70">
          <Clients />
        </div>
        
        {/* FAQ - Sticky z-80 */}
        <div className="sticky top-0 z-80">
          <FAQ />
        </div>
        
        {/* Contact - Sticky z-90 */}
        <div className="sticky top-0 z-90">
          <Contact />
        </div>
        
        {/* Footer - Final section z-100 */}
        <div className="relative z-100">
          <Footer />
        </div>
      </div>
    </div>
  );
}
