import Image from 'next/image';
import Link from 'next/link';

export default function AboutProducts() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Our Products Feel
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience the comfort and quality that makes our products special. Each item is designed with your lifestyle in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product 1 */}
          <Link href="/shop" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
            <div className="aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden">
              <Image
                src="/howporduct1.png"
                alt="Product 1"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Premium Cotton</h3>
            <p className="text-gray-600 text-sm">Soft, breathable, and durable fabric for all-day comfort.</p>
          </Link>

          {/* Product 2 */}
          <Link href="/shop" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
            <div className="aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden">
              <Image
                src="/howporduct2.png"
                alt="Product 2"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Perfect Fit</h3>
            <p className="text-gray-600 text-sm">Tailored cuts that complement your body shape naturally.</p>
          </Link>

          {/* Product 3 */}
          <Link href="/shop" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
            <div className="aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden">
              <Image
                src="/howporduct3.png"
                alt="Product 3"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Lasting Quality</h3>
            <p className="text-gray-600 text-sm">Built to withstand daily wear while maintaining its appeal.</p>
          </Link>

          {/* Product 4 */}
          <Link href="/shop" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
            <div className="aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden">
              <Image
                src="/howporduct4.png"
                alt="Product 4"
                width={300}
                height={300}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Versatile Style</h3>
            <p className="text-gray-600 text-sm">Designs that work for any occasion, casual or formal.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}