"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ApiMarketplacePage() {
  return (
    <div className="bg-black text-white overflow-hidden">
        <Navbar/>

      {/* ================= HERO ================= */}
 <section className="relative min-h-screen overflow-hidden bg-black text-white">

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />

  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 min-h-screen grid lg:grid-cols-2 max-lg:pt-20 gap-14 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left"
    >
    

      <h1 className="text-5xl md:text-6xl  font-bold leading-tight bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
        AI API <br />
        Marketplace
      </h1>

      <p className="mt-2 text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
        Discover, publish, and monetize powerful AI APIs. Connect developers,
        businesses, and AI creators through one unified marketplace of
        production-ready intelligent services.
      </p>

    

      {/* Stats */}
      <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
        {[
          ["500+", "APIs"],
          ["24/7", "Access"],
          ["10x", "Growth"],
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
        src="/aicloud/Api.png"
        alt="AI API Marketplace"
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

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            What is AI API Marketplace?
          </h2>

          <p className="text-gray-400 mb-4">
            The AI API Marketplace provides a platform where developers can publish, 
            share, and monetize their AI-powered APIs.
          </p>

          <p className="text-gray-400">
            Instead of building AI models from scratch, businesses can directly integrate 
            ready-to-use APIs for various use cases. The platform handles infrastructure, 
            scaling, usage tracking, and billing.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative h-[350px]"
        >
          <Image
            src="/performance.png"
            alt="API Marketplace"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>

      </section>

      {/* ================= EXAMPLE APIs ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">

        <h2 className="text-3xl font-bold text-center mb-12">
          Example APIs Available
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

          {[
            "Speech Recognition APIs",
            "Language Translation APIs",
            "Computer Vision APIs",
            "Recommendation Engines",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg text-center hover:bg-white/10 transition"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= PLATFORM ROLE ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-6"
        >
          Platform Capabilities
        </motion.h2>

        <p className="text-gray-400 mb-10 max-w-3xl mx-auto">
          Our marketplace handles everything required to run AI APIs at scale — 
          from hosting and performance optimization to billing and monetization.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "API Hosting & Infrastructure",
            "Usage Tracking & Analytics",
            "Secure Payments & Billing",
            "Scalable API Delivery",
            "Developer Dashboard",
            "Enterprise Integration Support",
          ].map((item, i) => (
            <div
              key={i}
              className="p-5 border border-white/10 rounded-xl bg-white/5 hover:bg-white/10 transition"
            >
              {item}
            </div>
          ))}
        </div>

      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a] text-center">

        <h2 className="text-3xl font-bold mb-6">
          Why Use AI API Marketplace?
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto mb-10">
          Whether you're a developer looking to monetize your AI models or a business 
          seeking ready-to-use AI capabilities, our marketplace provides a seamless 
          ecosystem for innovation and growth.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {[
            "Faster AI Integration",
            "No Infrastructure Hassle",
            "Monetization Opportunities",
            "Access to Advanced AI Tools",
            "Global Developer Ecosystem",
            "Scalable & Reliable APIs",
          ].map((item, i) => (
            <div key={i} className="p-4 border border-white/10 rounded-xl bg-white/5">
              {item}
            </div>
          ))}
        </div>

      </section>

      {/* ================= CTA ================= */}
<Footer/>

    </div>
  );
}