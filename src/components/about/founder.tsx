'use client';
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const Founder = () => {
    return (
        <div className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {/* Left - Product Image */}
                    <motion.div 
                        className="rounded-lg aspect-square overflow-hidden"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src="/prduct.png"
                            alt="Product"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Right - Testimonial Content */}
                    <motion.div className="space-y-6" variants={itemVariants}>
                        <h3 className="text-2xl font-bold text-black">The Founder</h3>

                        <blockquote className="text-xl font-bold text-black leading-relaxed">
                            &quot;The closest thing to having an in-house design team without actually hiring one&ldquo;
                        </blockquote>

                        <p className="text-sm text-black font-light leading-relaxed">
                            From strategy to execution, they integrated seamlessly into our workflow and brought clarity to every step of the process.
                        </p>

                        <div className="pt-4">
                            <p className="font-medium text-black">Alex Morgan</p>
                            <p className="text-sm text-black">CEO at IDEO</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <motion.div 
                className="w-full bg-gray-50 py-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        className="grid grid-cols-2 md:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        {[1, 2, 3, 4].map((index) => (
                            <motion.div 
                                key={index}
                                className="rounded-lg aspect-square overflow-hidden"
                                variants={itemVariants}
                                whileHover={{ scale: 1.1, rotate: 2 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={`/howporduct${index}.png`}
                                    alt={`Product ${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Founder;