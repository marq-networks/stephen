'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function AboutContent() {
  return (
    <section className="py-20 font-extrabold text-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Content - Heading, Button and Text Paragraphs */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 items-center justify-baseline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left - Main Heading and Button */}
          <motion.div className="lg:col-span-2" variants={itemVariants}>
            <h2 className="text-3xl lg:text-3xl font-extrabold text-black mb-6">
              We create brands and experiences that cut through the noise, speak with style and, above all, endure.
            </h2>
            <motion.button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read more
            </motion.button>
          </motion.div>

          {/* Middle - First Paragraph */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <p className="text-black text-sm leading-relaxed">
              Exclaim believes in the transformative power of design to tell stories, evoke emotions, and create meaningful connections. Our approach combines strategic thinking with creative excellence to deliver solutions that not only look exceptional but also drive results.
            </p>
          </motion.div>

          {/* Right - Second Paragraph */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <p className="text-black text-sm leading-relaxed">
              Our team consists of passionate designers, strategists, and storytellers who are dedicated to pushing boundaries and challenging conventions. We believe that great design should be accessible, sustainable, and impactful - principles that guide every project we undertake.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom - Team Image */}
        <motion.div 
          className="w-full"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/about.png"
            alt="Team collaboration"
            width={1200}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
          />
        </motion.div>

        {/* Philosophy Section */}
        <motion.div 
          className="space-y-16 mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Our Philosophy */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-4xl font-bold text-black mb-4">Our Philosophy</h3>
              <p className="text-md text-black">Redefining design through integrated solutions.</p>
            </div>
            <div>
              <p className="text-md text-black font-bold leading-relaxed">
                At Freshly Baked, we approach design and branding as a unified process. We recognize that a successful brand isn&lsquo;t just about aesthetics—it&apos;s about creating a cohesive experience that&apos;s thoughtfully crafted. It&#39;s implemented seamlessly across every touchpoint. T...
              </p>
            </div>
          </motion.div>

          {/* Fabric & Feel */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-4xl font-bold text-black mb-4">Fabric & Feel</h3>
              <p className="text-md text-black">Collaboration as the cornerstone of success.</p>
            </div>
            <div>
              <p className="text-md font-bold text-black leading-relaxed">
                At Freshly Baked, we prioritize partnership over the traditional client-agency dynamic. We integrate seamlessly with your team, working together to bring your vision to life. By immersing ourselves in your business, we uncover the values, ambitions, and audience that define your bran...
              </p>
            </div>
          </motion.div>

          {/* Why we do it */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
            variants={itemVariants}
          >
            <div>
              <h3 className="text-4xl font-bold text-black mb-4">Why we do it</h3>
              <p className="text-md text-black">Creating brands that inspire and transform.</p>
            </div>
            <div>
              <p className="text-md font-bold text-black leading-relaxed">
                Our mission is to craft brands and experiences that inspire, resonate, and drive meaningful change. At Freshly Baked, we believe that design is a powerful tool to elevate businesses and enrich society. Each project is an opportunity to leave a lasting impact—sparking innovation, fo...
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}