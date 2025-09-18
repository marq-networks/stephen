import Navbar from '../../components/Navbar';
import AboutHero from '../../components/about/AboutHero';
import AboutContent from '../../components/about/AboutContent';
import Footer from '../../components/Footer';
import Founder from '@/components/about/founder';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <AboutHero />

      <div className="bg-white  my-4 rounded-2xl">
        <AboutContent />
      </div>
      {/* <AboutProducts /> */}
      <div className="bg-white  my-4 rounded-2xl">

        <Founder />      {/* Unified Being Section */}
      </div>
      <div className="bg-white  my-4 rounded-2xl">
        <section className="w-full py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-8">
                WE ARE <span className="text-gray-500">NUMEROUS</span>,<br />
                YET, WE OPERATE<br />
                AS A <span className="text-black">UNIFIED<br />
                  BEING.</span>
              </h2>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}