"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageGenerationCloudPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
        <Navbar/>

      {/* ================= HERO ================= */}
<section className="relative min-h-screen overflow-hidden bg-black text-white">

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />

  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 min-h-screen grid lg:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left"
    >
   

      <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
        AI Image <br />
        Generation Cloud
      </h1>

      <p className="mt-2 text-gray-400 text-lg  max-w-xl mx-auto lg:mx-0 leading-relaxed">
        Create stunning visuals, artwork, product mockups, and marketing
        graphics using AI-powered image generation. Turn simple prompts into
        high-quality creative assets instantly.
      </p>



      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
        {[
          ["4K", "Quality"],
          ["10x", "Faster"],
          ["24/7", "Creative"],
        ].map(([num, label], i) => (
          <div key={i}>
            <h3 className="text-2xl font-bold text-white">{num}</h3>
            <p className="text-sm text-gray-500">{label}</p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* RIGHT SIDE IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative flex justify-center lg:justify-end"
    >
      {/* Glow Behind Image */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />

      <Image
        src="/aicloud/ImageGen.png"
        alt="AI Image Generation"
        width={850}
        height={850}
        priority
        className="relative z-10 w-full max-w-[700px] h-auto object-contain drop-shadow-[0_0_40px_rgba(34,211,238,0.35)]"
      />
    </motion.div>
  </div>
</section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl font-bold mb-6">
            What is AI Image Generation Cloud?
          </h2>

          <p className="text-gray-400 mb-4">
            AI Image Generation Cloud enables users to generate high-quality images using 
            simple text prompts. It eliminates the need for traditional design tools and 
            reduces creative production time.
          </p>

          <p className="text-gray-400">
            Whether you are a designer, marketer, or content creator, the platform helps 
            you produce visuals instantly with precision and creativity.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe"
            className="rounded-2xl w-full h-[350px] object-cover"
          />
        </div>

      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">

        <h2 className="text-3xl font-bold text-center mb-12">
          Key Features
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {[
            "Text-to-image generation",
            "Design templates",
            "Brand asset creation",
            "Social media graphics",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 border border-white/10 bg-white/5 rounded-xl text-center"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          AI Generated Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
            "https://images.unsplash.com/photo-1518779578993-ec3579fee39f",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          ].map((img, i) => (
            <div key={i} className="overflow-hidden rounded-xl">
              <img
                src={img}
                className="w-full h-[250px] object-cover hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">

        <h2 className="text-3xl font-bold text-center mb-12">
          Use Cases
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            "Marketing creatives",
            "Social media posts",
            "Product mockups",
            "Website graphics",
            "Brand visuals",
            "Advertising campaigns",
          ].map((item, i) => (
            <div key={i} className="p-6 border border-white/10 bg-white/5 rounded-xl text-center">
              {item}
            </div>
          ))}
        </div>

      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Benefits
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {[
            "No design skills required",
            "Faster content creation",
            "High-quality visuals",
            "Cost-effective design",
            "Scalable creative production",
            "Instant image generation",
          ].map((item, i) => (
            <div key={i} className="p-4 border border-white/10 bg-white/5 rounded-xl">
              {item}
            </div>
          ))}
        </div>

      </section>

      {/* ================= ADVANCED CONTENT ================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-gray-400 space-y-6 text-lg">

        <h2 className="text-3xl text-white font-bold text-center mb-6">
          Creative AI Engine
        </h2>

        <p>
          AI Image Generation Cloud leverages advanced generative models to produce 
          visually stunning images from text prompts. The system understands context, 
          style, and composition to generate realistic and creative outputs.
        </p>

        <p>
          Users can experiment with different styles such as realistic, artistic, 
          futuristic, and abstract visuals, making it a powerful tool for creative industries.
        </p>

        <p>
          The platform also supports batch generation, enabling teams to produce 
          multiple assets quickly for campaigns and projects.
        </p>

        <p>
          With built-in customization tools, users can refine outputs, adjust colors, 
          styles, and formats to match brand identity.
        </p>

      </section>

     <Footer/>

    </div>
  );
}