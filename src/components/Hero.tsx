import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className=" relative text-white min-h-screen flex flex-row items-end justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/homeherobg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-1"></div>
      {/* Large Background EXCLAIM text */}
    

      <div className="relative z-10 flex flex-row items-end justify-center text-center">
        {/* Hero Image */}
        <Link href="/shop" className="cursor-pointer">
          <Image
            src="/hero.png"
            alt="Life is Beautiful T-shirt"
            width={800}
            height={100}
            className="w-auto h-auto mx-auto hover:scale-105 transition-transform duration-300"
            priority
          />
        </Link>

        {/* Right Content - Text and Button */}
        <div className="max-w-md text-left mb-10">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
            We partner with brands to create digital design that drives conversion and commands attention.
          </p>
          <Link href="/shop" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md inline-block">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
