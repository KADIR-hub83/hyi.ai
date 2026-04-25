"use client";

import Navbar from "@/components/Navbar";
import { Link } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function AgentCloudPlatformPage() {
  return (
    <div className="bg-black text-white">

      <Navbar />

      {/* ================= HERO SECTION ================= */}
  <section className="relative min-h-screen overflow-hidden bg-black text-white">
  

  {/* Gradient Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full" />
  </div>

  {/* Dark Overlay */}


  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 min-h-screen  grid lg:grid-cols-2  items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left"
    >


      <h1 className="text-5xl md:text-5xl mt-20 font-bold leading-tight bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
        AI Cloud <br />
        Platform Solutions
      </h1>

      <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
        We build powerful AI cloud platforms that help businesses and developers
        deploy intelligent systems faster. From model hosting to workflow
        automation, we deliver scalable infrastructure for real-world growth.
      </p>



      {/* Stats */}
      <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
        {[
          ["99.9%", "Uptime"],
          ["10x", "Scale"],
          ["24/7", "Support"],
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
  className="relative flex justify-end w-full overflow-visible"
>
  <Image
    src="/aicloud/AiCloude.png"
    alt="AI Cloud Platform"
    width={300}
    height={300}
    priority
    className="relative z-10 w-[100%] max-w-none h-auto scale-[1.35] -mr-20"
  />
</motion.div>
  </div>
</section>

      {/* ================= FEATURES SECTION ================= */}
<section className="relative py-20 px-6 max-w-6xl mx-auto overflow-hidden">

  {/* Background Image */}
  <Image
    src="/performance.png"
    alt="Performance Background"
    fill
    priority
    className="object-cover absolute inset-0 -z-10"
  />

  {/* Optional Overlay (for readability) */}
  <div className="absolute inset-0 bg-black/70 -z-10"></div>

  {/* Content */}
<h2 className="text-3xl font-bold text-center tracking-tighter mb-12 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
  Our AI Cloud Capabilities
</h2>

  <div className="grid md:grid-cols-3 gap-8">

    {[
      {
        title: "AI Model Hosting",
        desc: "Deploy, manage, and scale machine learning models with high performance infrastructure.",
      },
      {
        title: "Workflow Automation",
        desc: "Automate business processes using intelligent AI-driven pipelines and decision systems.",
      },
      {
        title: "Data Analytics",
        desc: "Transform raw data into actionable insights using advanced AI analytics tools.",
      },
      {
        title: "AI APIs",
        desc: "Access ready-to-use AI APIs for vision, NLP, and automation use cases.",
      },
      {
        title: "Scalable Infrastructure",
        desc: "Cloud-native systems designed to scale with your business growth.",
      },
      {
        title: "Security & Compliance",
        desc: "Enterprise-grade security ensuring safe and compliant AI operations.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition"
      >
        <h3 className="text-xl font-semibold mb-3">
          {item.title}
        </h3>
        <p className="text-gray-300 text-sm">
          {item.desc}
        </p>
      </div>
    ))}
  </div>

</section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6 tracking-tighter  bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            Why Choose Our AI Cloud?
          </h2>

          <p className="text-gray-400 mb-10">
            We combine cutting-edge AI technology with scalable cloud infrastructure 
            to deliver reliable, fast, and intelligent solutions tailored to your business needs.
          </p>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              "Faster AI Deployment",
              "Enterprise Scalability",
              "Cost Efficient Solutions",
              "Real-Time Processing",
              "Advanced Automation",
              "Developer Friendly APIs",
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 border border-white/10 rounded-xl bg-white/5"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

{/* 
      <section className="py-20 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Ready to Build with AI Cloud?
        </h2>

        <p className="text-gray-400 mb-6">
          Start your journey with intelligent cloud solutions today.
        </p>

        <button className="px-8 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
          Contact Us
        </button>

      </section> */}
      <Footer/>

    </div>
  );
}