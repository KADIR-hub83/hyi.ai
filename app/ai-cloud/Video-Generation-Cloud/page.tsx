"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function VideoGenerationCloudPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
        <Navbar/>

      {/* ================= HERO ================= */}
<section className="relative min-h-screen overflow-hidden bg-black text-white items-center relative">

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full" />


  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 min-h-screen grid lg:grid-cols-2 gap-14 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left"
    >


      <h1 className="text-5xl md:text-6xl  font-bold leading-tight bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
        AI Video <br />
        Generation Cloud
      </h1>

      <p className="mt-2 text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
        Create professional-quality videos instantly using artificial
        intelligence. Transform text into engaging videos with visuals, voice
        narration, subtitles, and cinematic effects generated in seconds.
      </p>

      {/* Buttons */}
    

      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
        {[
          ["4K", "Quality"],
          ["60s", "Generate"],
          ["10x", "Faster"],
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


      <Image
        src="/aicloud/AiVideo.png"
        alt="AI Video Generation"
        width={850}
        height={850}
        priority
        className="relative z-10 w-full max-w-[700px] h-auto object-contain"
      />
    </motion.div>
  </div>
</section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            What is AI Video Generation Cloud?
          </h2>

          <p className="text-gray-400 mb-4">
            The AI Video Generation Cloud allows users to create professional-quality videos 
            using artificial intelligence without the need for cameras, editing software, or production teams.
          </p>

          <p className="text-gray-400">
            Simply provide a script or prompt, and the platform automatically generates 
            a complete video with visuals, voice narration, transitions, and subtitles — 
            ready to publish across platforms.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative h-[350px]"
        >
          <Image
            src="/performance.png"
            alt="Video Generation"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>

      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">

        <h2 className="text-3xl font-bold text-center mb-12">
          Key Features
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

          {[
            "Text-to-video generation",
            "AI avatars & presenters",
            "Automatic subtitle creation",
            "Social media optimized templates",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 text-center"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Who Can Use This?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-400">

          {[
            {
              title: "Marketing Teams",
              desc: "Create ad videos, product promos, and social media campaigns instantly.",
            },
            {
              title: "Content Creators",
              desc: "Generate YouTube videos, reels, and shorts without editing skills.",
            },
            {
              title: "Educators",
              desc: "Build engaging learning videos and tutorials with AI narration.",
            },
            {
              title: "Businesses",
              desc: "Create explainer videos and presentations for products and services.",
            },
            {
              title: "Startups",
              desc: "Quickly generate pitch videos and demo content.",
            },
            {
              title: "Agencies",
              desc: "Scale video production for multiple clients efficiently.",
            },
          ].map((item, i) => (
            <div key={i} className="p-6 border border-white/10 rounded-xl bg-white/5">
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ================= ADVANCED CONTENT ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a] text-center">

        <h2 className="text-3xl font-bold mb-6">
          Powerful AI Video Engine
        </h2>

        <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed">
          Our AI video engine combines natural language processing, computer vision, 
          and generative AI to produce high-quality video content. From script analysis 
          to scene generation, voice synthesis, and animation — every step is automated 
          and optimized for speed and quality. This allows creators to focus on ideas 
          while AI handles production.
        </p>

      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Why Choose AI Video Generation?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {[
            "No video editing skills required",
            "Faster content production",
            "Cost-effective video creation",
            "High-quality AI visuals",
            "Scalable content generation",
            "Multi-platform publishing ready",
          ].map((item, i) => (
            <div key={i} className="p-4 border border-white/10 rounded-xl bg-white/5">
              {item}
            </div>
          ))}
        </div>

      </section>

     <Footer/>

    </div>
  );
}