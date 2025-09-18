import Image from 'next/image';

export default function AboutContent() {
  return (
    <section className="py-20 font-extrabold text-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Content - Heading, Button and Text Paragraphs */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 items-center justify-baseline">
          {/* Left - Main Heading and Button */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-3xl font-extrabold text-black mb-6">
              We create brands and experiences that cut through the noise, speak with style and, above all, endure.
            </h2>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
              Read more
            </button>
          </div>

          {/* Middle - First Paragraph */}
          <div className="lg:col-span-1">
            <p className="text-black text-sm leading-relaxed">
              Exclaim believes in the transformative power of design to tell stories, evoke emotions, and create meaningful connections. Our approach combines strategic thinking with creative excellence to deliver solutions that not only look exceptional but also drive results.
            </p>
          </div>

          {/* Right - Second Paragraph */}
          <div className="lg:col-span-1">
            <p className="text-black text-sm leading-relaxed">
              Our team consists of passionate designers, strategists, and storytellers who are dedicated to pushing boundaries and challenging conventions. We believe that great design should be accessible, sustainable, and impactful - principles that guide every project we undertake.
            </p>
          </div>
        </div>




        {/* Bottom - Team Image */}
        <div className="w-full">
          <Image
            src="/about.png"
            alt="Team collaboration"
            width={1200}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Philosophy Section */}
        <div className="space-y-16 mt-20">
          {/* Our Philosophy */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-4xl font-bold text-black mb-4">Our Philosophy</h3>
              <p className="text-md text-black ">Redefining design through integrated solutions.</p>
            </div>
            <div>
              <p className="text-md text-black font-bold leading-relaxed">
                At Freshly Baked, we approach design and branding as a unified process. We recognize that a successful brand isn&lsquo;t just about aesthetics—it&apos;s about creating a cohesive experience that&apos;s thoughtfully crafted. It&#39;s implemented seamlessly across every touchpoint. That&apos;s why we bring together a team of multidisciplinary experts who collaborate from concept to execution, ensuring alignment between strategy, design, and delivery. Our holistic methodology eliminates the disconnects often found in traditional workflows. By merging creativity with precision, we ensure that every element—whether visual, digital, or experiential—embodies your brand&apos;s vision and purpose.
              </p>
            </div>
          </div>

          {/* Fabric & Feel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-4xl font-bold text-black mb-4">Fabric & Feel</h3>
              <p className="text-md text-black ">Collaboration as the cornerstone of success.</p>
            </div>
            <div>
              <p className="text-md font-bold text-black leading-relaxed">
                At Freshly Baked, we prioritize partnership over the traditional client-agency dynamic. We integrate seamlessly with your team, working together to bring your vision to life. By immersing ourselves in your business, we uncover the values, ambitions, and audience that define your brand. Through open dialogue and close collaboration, we cultivate trust, transparency, and a shared sense of purpose—key ingredients for every successful project.
              </p>
            </div>
          </div>

          {/* Why we do it */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-4xl font-bold text-black mb-4">Why we do it</h3>
              <p className="text-md text-black ">Creating brands that inspire and transform.</p>
            </div>
            <div>
              <p className="text-md font-bold text-black leading-relaxed">
                Our mission is to craft brands and experiences that inspire, resonate, and drive meaningful change. At Freshly Baked, we believe that design is a powerful tool to elevate businesses and enrich society. Each project is an opportunity to leave a lasting impact—sparking innovation, fostering growth, and shaping a brighter, bolder future.
              </p>
            </div>


          </div>
        </div>
      </div>
   
    </section>
  );
}