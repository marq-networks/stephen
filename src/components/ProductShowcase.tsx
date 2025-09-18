import Image from 'next/image';
import Link from 'next/link';

export default function ProductShowcase() {
  return (
    <section className="bg-gray-100  py-20 rounded-2xl">
      <div className="max-w-6xl mx-auto px-6 ">
        {/* Main Description */}
        <div className="text-center mb-16 py-20">
          <p className="text-black  text-lg md:text-2xl leading-7 font-bold  max-w-4xl mx-auto">
            <strong>Premium cotton shirts that redefine comfort and style crafted from 100% pure cotton, designed for breathability, durability, and an effortlessly elegant look. Soft on skin, light as air, and perfect for every occasion. Just pure comfort, no compromise.</strong>
          </p>
        </div>

        {/* Product Grid */}
        <div className="gap-12 w-full items-start">
          {/* Right Column - Product Images */}
          <div className="space-y-4 w-full">
            {/* First Row: 3 Divs */}
            <div className="grid grid-cols-3 gap-4 w-full">
              <div className="bg-white rounded-2xl p-6 shadow-sm w-full">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Thoughtful design that moves the needle.</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  This brand required a new approach to communicate their unique value proposition and stand out in a crowded market.
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">JS</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Jane Doe</p>
                    <p className="text-xs text-gray-500">Creative Director</p>
                  </div>
                </div>
              </div>

              <Link href="/shop" className="bg-white rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300 w-full">
                <Image src="/howporduct1.png" alt="T-shirt" width={150} height={180} className="w-full h-auto" />
              </Link>
              <Link href="/shop" className="bg-white rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300 w-full">
                <Image src="/howporduct2.png" alt="T-shirt" width={150} height={180} className="w-full h-auto" />
              </Link>
            </div>

            {/* Second Row: 2 Divs */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-white rounded-2xl shadow-sm w-full">
                <Image
                  src="/chart.png"
                  alt="THE WHETHER OR U. T-shirt"
                  width={150}
                  height={180}
                  className="w-full h-auto"
                />
              </div>
              <Link href="/shop" className="bg-white rounded-2xl shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-300 w-full">
                <Image src="/howporduct4.png" alt="T-shirt" width={150} height={180} className="w-full h-auto" />
              </Link>
            </div>
          </div>
        </div>



        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link href="/shop" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md inline-block">
            View Work
          </Link>
        </div>
      </div>
    </section>
  );
}