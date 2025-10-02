import type { Metadata } from "next";
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
import LogoWatermark from "@/components/common/LogoWatermark";

export const metadata: Metadata = {
  title: "Stephen - Sustainable Statement Tees | Premium Eco-Friendly Apparel",
  description: "Discover Stephen's collection of sustainable statement tees made from premium bamboo-cotton blend. Express yourself with meaningful fashion that protects our planet.",
  keywords: "sustainable fashion, statement tees, eco-friendly clothing, bamboo cotton, organic apparel, conscious fashion, meaningful clothing, premium tees",
  openGraph: {
    title: "Stephen - Sustainable Statement Tees | Premium Eco-Friendly Apparel",
    description: "Discover Stephen's collection of sustainable statement tees made from premium bamboo-cotton blend.",
    type: "website",
    images: ['/LOGO.png'],
  },
};

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

        {/* Brand Growth Section */}
        <div className="relative z-10 bg-[#fff] overflow-hidden">
          <LogoWatermark position="center" size={600} opacity={0.06} rotation={-10} />
          <div className="relative z-10">
            <BrandGrowthSection />
          </div>
        </div>

        {/* Statement Slider */}
        <div className="relative z-10 bg-[#fff] overflow-hidden">
          <LogoWatermark position="bottomLeft" size={520} opacity={0.07} rotation={-6} />
          <div className="relative z-10">
            <StatementSlider />
          </div>
        </div>

        {/* How Product Feels */}
        <div className="relative z-10 bg-[#fff] overflow-hidden">
          <LogoWatermark position="topRight" size={520} opacity={0.06} rotation={-8} />
          <div className="relative z-10">
            <HowProductFeels />
          </div>
        </div>

        {/* Editorial Fashion */}
        <div className="relative z-10 bg-[#fff] overflow-hidden">
          <LogoWatermark position="center" size={700} opacity={0.05} rotation={-12} />
          <div className="relative z-10">
            <EditorialFashion />
          </div>
        </div>

        {/* Features */}
        <div className="relative z-10 bg-[#fff] overflow-hidden">
          <LogoWatermark position="topRight" size={540} opacity={0.06} rotation={-9} />
          <div className="relative z-10">
            <Features />
          </div>
        </div>

        {/* FAQ */}
        <div className="relative z-10 bg-[#fff] overflow-hidden">
          <LogoWatermark position="bottomLeft" size={540} opacity={0.06} rotation={-7} />
          <div className="relative z-10">
            <FAQ />
          </div>
        </div>

        {/* Contact */}
        <div className="relative z-10 bg-[#fff] overflow-hidden">
          <LogoWatermark position="center" size={620} opacity={0.06} rotation={-8} />
          <div className="relative z-10">
            <Contact />
          </div>
        </div>
      </div>

      {/* Footer - Normal flow */}
      <Footer />
    </div>
  );
}
