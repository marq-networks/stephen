import Image from 'next/image';

export default function HowProductFeels() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-[90px] font-bold text-gray-900 mb-4">
            How Our Product Feels
          </h2>
          <p className="text-gray-600 text-lg max-w-sm mx-auto">
            Every piece tells a story behind the story. We believe that our signature look is all about togetherness.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {/* Top Row */}
          <div className="flex items-center justify-center">
            <Image
              src="/howporduct1.png"
              alt="Life is Beautiful T-shirt"
              width={200}
              height={240}
              className="w-full "
            />
          </div>
          <div className="   flex items-center justify-center">
            <Image
              src="/howporduct2.png"
              alt="Life is Beautiful T-shirt"
              width={200}
              height={240}
              className="w-full "
            />
          </div>
          
          {/* Bottom Row */}
          <div className=" flex items-center justify-center">
            <Image
              src="/howporduct3.png"
              alt="Life is Beautiful T-shirt"
              width={200}
              height={240}
              className="w-full"
            />
          </div>
          <div className=" flex items-center justify-center">
            <Image
              src="/howporduct4.png"
              alt="Life is Beautiful T-shirt"
              width={200}
              height={240}
              className="w-full "
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}