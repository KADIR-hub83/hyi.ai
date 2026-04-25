"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WorkFlowAutomationCloudPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Navbar />

      {/* ================= HERO ================= */}
  <section className="relative min-h-screen overflow-hidden bg-black text-white">
  {/* Glow Background */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full" />
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-14 min-h-screen grid lg:grid-cols-2 gap-16 items-center max-lg:pt-40">
    
    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left"
    >
  

      <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
        AI Workflow <br />
        Automation Cloud
      </h1>

      <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed">
        Automate repetitive tasks, streamline operations, and scale business
        processes using intelligent AI-powered workflows built for speed.
      </p>

      {/* Stats */}
      <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
        {[
          ["95%", "Efficiency"],
          ["24/7", "Automation"],
          ["10x", "Growth"],
        ].map(([num, label], i) => (
          <div key={i}>
            <h3 className="text-2xl font-bold text-white">{num}</h3>
            <p className="text-sm text-gray-500">{label}</p>
          </div>
        ))}
      </div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="relative flex justify-center"
    >
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />

      <Image
        src="/aicloud/Union.svg"
        alt="AI Workflow Background"
        width={400}
        height={400}
        priority
        className="relative z-10 object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.35)]"
      />
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
            What is Workflow Automation Cloud?
          </h2>

          <p className="text-gray-400 mb-4">
            The AI Workflow Automation Cloud helps businesses automate
            repetitive tasks and streamline internal processes.
          </p>

          <p className="text-gray-400">
            By combining artificial intelligence with workflow automation,
            organizations can reduce manual effort, eliminate errors, and
            improve operational efficiency.
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
            src="/aicloud/automatinbottom.png"
            alt="Workflow Automation"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>
      </section>

      {/* ================= WORKFLOWS ================= */}
      <section className=" px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
        <h2 className="text-3xl font-bold text-center mb-12">
          Example Workflows
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            "Lead generation & qualification",
            "Automated report creation",
            "Email marketing campaigns",
            "Data processing pipelines",
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

      {/* ================= BENEFITS ================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-6"
        >
          Why Use AI Workflow Automation?
        </motion.h2>

        <p className="text-gray-400 text-lg">
          Automating workflows reduces operational costs, eliminates repetitive
          manual work, and enables teams to focus on high-value tasks. With AI
          integration, workflows become smarter, adaptive, and more efficient.
        </p>
      </section>

     <Footer/>
    </div>
  );
}
