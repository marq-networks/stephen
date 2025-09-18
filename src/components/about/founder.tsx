/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Founder = () => {
    return (
        <div className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Product Image */}
                    <div className="rounded-lg aspect-square overflow-hidden">
                        <img
                            src="/prduct.png"
                            alt="Product"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right - Testimonial Content */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-black">The Founder</h3>

                        <blockquote className="text-xl font-bold text-black leading-relaxed">
                            &quot;The closest thing to having an in-house design team without actually hiring one&ldquo;
                        </blockquote>

                        <p className="text-sm text-black font-light leading-relaxed">
                            From strategy to execution, they integrated seamlessly into our workflow and brought clarity to every step of the process.
                        </p>

                        <div className="pt-4">
                            <p className="font-medium text-black">Alex Morgan</p>
                            <p className="text-sm text-black ">CEO at IDEO</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="rounded-lg aspect-square overflow-hidden">
                            <img
                                src="/howporduct1.png"
                                alt="Product 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-lg aspect-square overflow-hidden">
                            <img
                                src="/howporduct2.png"
                                alt="Product 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-lg aspect-square overflow-hidden">
                            <img
                                src="/howporduct3.png"
                                alt="Product 3"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="rounded-lg aspect-square overflow-hidden">
                            <img
                                src="/howporduct4.png"
                                alt="Product 4"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Founder