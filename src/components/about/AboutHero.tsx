import Image from 'next/image';

export default function AboutHero() {
  return (
    <section className="relative text-white min-h-screen flex items-center justify-start p-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/aboutherobg.png"
          alt="About Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-1"></div>
    

      {/* Main About Us heading */}
      <div className="relative z-10 text-left">
        <h2 className="text-6xl lg:text-8xl font-bold">
          About Us.
        </h2>
      </div>
    </section>
  );
}

<div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
  {/* Left Content */}
  <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0">
    <h2 className="text-4xl lg:text-6xl font-bold mb-6">
      LIFE IS
      <br />
      BEAUTIFUL
    </h2>
    <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md">
      We believe in creating products that inspire and bring joy to everyday life. Our mission is to spread positivity through thoughtful design.
    </p>
    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg">
      Learn More
    </button>
  </div>

  {/* Right Content - Hero Image */}
  <div className="flex-1 flex justify-center">
    <Image
      src="/hero.png"
      alt="Life is Beautiful T-shirt"
      width={400}
      height={500}
      className="w-auto h-auto max-w-sm"
      priority
    />
  </div>
</div>