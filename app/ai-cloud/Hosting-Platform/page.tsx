"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HostingPlatformPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
        <Navbar/>

      {/* ================= HERO ================= */}
<section className="relative min-h-screen overflow-hidden bg-black text-white">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/hostingbg.png"
      alt="AI Hosting Background"
      fill
      priority
      className="object-cover opacity-35 scale-105"
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />

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


      <h1 className="text-5xl md:text-6xl  font-bold leading-tight bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
        AI Model Hosting <br />
        Platform
      </h1>

      <p className="mt-2 text-gray-400 text-lg  max-w-xl mx-auto lg:mx-0 leading-relaxed">
        Deploy and run machine learning models in the cloud without managing
        servers or infrastructure. Focus on building intelligent applications
        while we handle scaling, speed, and deployment.
      </p>

      {/* Buttons */}


      {/* Stats */}
      <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
        {[
          ["99.99%", "Uptime"],
          ["1 Click", "Deploy"],
          ["24/7", "Scaling"],
        ].map(([num, label], i) => (
          <div key={i}>
            <h3 className="text-2xl font-bold text-white">{num}</h3>
            <p className="text-sm text-gray-500">{label}</p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* RIGHT SIDE PREMIUM CARD UI */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative flex justify-center lg:justify-end"
    >


      {/* Glass Card */}
      <div className="relative z-10 w-full max-w-[520px] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-2xl">

        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold">Model Dashboard</h3>
          <span className="text-xs px-3 py-1 rounded-full bg-red-500/20 text-white">
            Live
          </span>
        </div>

        <div className="space-y-4">

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <p className="text-sm text-gray-400">Model Name</p>
            <h4 className="text-lg font-semibold">GPT Vision Pro</h4>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
              <p className="text-sm text-gray-400">Latency</p>
              <h4 className="text-lg font-semibold">124ms</h4>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
              <p className="text-sm text-gray-400">Requests</p>
              <h4 className="text-lg font-semibold">2.4M</h4>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
            <p className="text-sm text-gray-400 mb-2">Auto Scaling</p>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[82%] h-full bg-cyan-400 rounded-full" />
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* ================= ABOUT ================= */}
      <section className=" px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            What is AI Model Hosting?
          </h2>

          <p className="text-gray-400 mb-4">
            Our AI Model Hosting Platform allows developers to deploy and run machine learning 
            models in the cloud without managing servers or infrastructure.
          </p>

          <p className="text-gray-400">
            Instead of configuring hardware, scaling systems, or building APIs, you can simply 
            upload your model and deploy it instantly. The platform automatically handles GPU 
            resources, scaling, and API access.
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
            alt="AI Hosting"
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
            "One-click model deployment",
            "GPU-powered inference hosting",
            "Automatic API endpoint generation",
            "Intelligent auto-scaling",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition text-center"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= USE CASE ================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-6"
        >
          Build Real-World AI Applications
        </motion.h2>

        <p className="text-gray-400 text-lg">
          Easily integrate AI models into websites, mobile apps, and enterprise systems. 
          Whether you're building chatbots, recommendation engines, or automation tools, 
          our platform ensures high performance and scalability.
        </p>

      </section>

    <Footer/>

    </div>
  );
}