import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HowProductFeels from '../../components/HowProductFeels';
import Features from '../../components/Features';
import FAQ from '../../components/FAQ';
import Blogs from '../../components/Blogs';
import Contact from '../../components/Contact';
import Image from 'next/image';
import SizeChart from '@/components/SizeChart';
import Process from '@/components/Process';
import ProductGrid from '@/components/ProductGrid';
import RelevantProducts from '@/components/RelevantProducts';
import Link from 'next/link';

export default function Shop() {
    return (
        <div className="min-h-screen bg-black">
            <Navbar />

            {/* Hero Section */}
            <section className="relative text-white min-h-screen flex items-center justify-start p-4 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/productherobg.png"
                        alt="Shop Hero Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-black/40 z-1"></div>

                {/* Main Shop heading */}
                <div className="relative z-10 text-center">
                    <h2 className="text-6xl lg:text-8xl font-bold">
                        Shop.
                    </h2>
                </div>
            </section>
            <div className="bg-[#F5F5F5] my-4 rounded-2xl">
                <section className="text-black py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                            {/* Left Text */}
                            <div className="text-left">
                                <p className="text-lg font-bold leading-relaxed text-black">
                                    We create brands and experiences that cut through the noise, promote style and, above all, endure.
                                </p>
                            </div>

                            {/* Center - Product Image */}
                            <div className="flex justify-center relative">
                                <div className="relative -mt-32 z-20">
                                    <Image
                                        src="/shopbg.png"
                                        alt="THE WHETHER IS IN U. T-shirt"
                                        width={1000}
                                        height={1000}
                                        className="rounded-lg w-[1000px] drop-shadow-2xl"
                                    />
                                </div>
                            </div>

                            {/* Right Text */}
                            <div className="text-right">
                                <p className="text-lg font-bold leading-relaxed text-black">
                                    We create brands and experiences that cut through the noise, promote style and, above all, endure.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* Product Selection Section */}
            <div className="bg-[#F5F5F5]  my-4 rounded-2xl">
                <section className="py-20 bg-white w-[60%] mx-auto mt-[20px] ">
                    <div className="w-full px-6 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                            Choose your Style & Size
                        </h2>

                        {/* Product Image */}
                        <div className="mb-8">
                            <div className="relative inline-block">
                                <Image
                                    src="/hero.png"
                                    alt="THE WHETHER IS IN U. T-shirt"
                                    width={300}
                                    height={350}
                                    className="rounded-lg object-contain"
                                />
                                {/* Heart Icon for Favorites */}
                                <Link href="/favorites">
                                    <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors">
                                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Product Name */}
                        <h3 className="text-xl font-medium text-gray-900 mb-6">Graphic White</h3>

                        {/* Color Options */}
                        <div className="flex justify-center gap-3 mb-8">
                            <button className="w-6 h-6 rounded-full bg-black border-2 border-gray-300 hover:border-gray-500 transition-colors"></button>
                            <button className="w-6 h-6 rounded-full bg-gray-400 border-2 border-gray-300 hover:border-gray-500 transition-colors"></button>
                            <button className="w-6 h-6 rounded-full bg-blue-400 border-2 border-gray-300 hover:border-gray-500 transition-colors"></button>
                            <button className="w-6 h-6 rounded-full bg-green-400 border-2 border-gray-300 hover:border-gray-500 transition-colors"></button>
                        </div>

                        {/* Size Options */}
                        <div className="flex justify-center gap-4 mb-8">
                            <button className=" px-4 py-2 border border-gray-300 rounded-md hover:border-orange-500 hover:text-orange-500 transition-colors text-sm font-medium text-black">S</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-md hover:border-orange-500 hover:text-orange-500 transition-colors text-sm font-medium text-black">M</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-md hover:border-orange-500 hover:text-orange-500 transition-colors text-sm font-medium text-black">L</button>
                            <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-md text-sm font-medium">XL</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-md hover:border-orange-500 hover:text-orange-500 transition-colors text-sm font-medium text-black">2XL</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-md hover:border-orange-500 hover:text-orange-500 transition-colors text-sm font-medium text-black">3XL</button>
                            <button className="px-4 py-2 border border-gray-300 rounded-md hover:border-orange-500 hover:text-orange-500 transition-colors text-sm font-medium text-black">4XL</button>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-center gap-4">
                            <Link href="/cart">
                                <button className="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-orange-50 transition-colors">
                                    Add to Cart
                                </button>
                            </Link>
                            <Link href="/payment">
                                <button className="px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-colors">
                                    Shop Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>

            {/* Additional Sections */}
            <div className="bg-white my-8 rounded-2xl">
                <SizeChart />
            </div>

            <div className="bg-white my-8 rounded-2xl py-20">
                <Process />
            </div>



            <div className="bg-white my-8 rounded-2xl py-20">
                <RelevantProducts />
            </div>

            <Footer />
        </div>
    );
}
