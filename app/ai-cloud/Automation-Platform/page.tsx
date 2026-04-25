"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AutomationPlatformPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
        <Navbar/>

      {/* ================= HERO ================= */}
<section className="relative min-h-[300px] overflow-hidden bg-black text-white">

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
        AI Automation <br />
        Cloud
      </h1>

      <p className="mt-2 text-gray-400 text-lg  max-w-xl mx-auto lg:mx-0 leading-relaxed">
        Build intelligent automation systems powered by AI. Streamline
        operations, reduce manual effort, and scale your business using smart
        workflows, triggers, and decision engines.
      </p>


      {/* Stats */}
      <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
        {[
          ["80%", "Time Saved"],
          ["24/7", "Automation"],
          ["10x", "Efficiency"],
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


      <Image
        src="/aicloud/Automation.png"
        alt="AI Automation"
        width={850}
        height={850}
        priority
        className="relative z-10 w-full max-w-[700px] h-auto object-contain "
      />
    </motion.div>
  </div>
</section>

      {/* ================= ABOUT ================= */}
      <section className="px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            What is AI Automation Cloud?
          </h2>

          <p className="text-gray-400 mb-4">
            AI Automation Cloud is a powerful platform that enables businesses 
            to automate processes using artificial intelligence and smart logic systems.
          </p>

          <p className="text-gray-400">
            From simple task automation to complex decision-making workflows, 
            the platform helps organizations operate faster, smarter, and more efficiently.
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
            alt="Automation"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>

      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">

        <h2 className="text-3xl font-bold text-center mb-12">
          Key Capabilities
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          {[
            {
              title: "Smart Task Automation",
              desc: "Automate repetitive business tasks with AI-driven logic.",
            },
            {
              title: "Decision Intelligence",
              desc: "Enable systems to make intelligent decisions based on data.",
            },
            {
              title: "Process Optimization",
              desc: "Improve efficiency and reduce operational delays.",
            },
            {
              title: "Real-Time Execution",
              desc: "Trigger workflows instantly with event-based automation.",
            },
            {
              title: "Seamless Integration",
              desc: "Connect with APIs, CRMs, and enterprise systems easily.",
            },
            {
              title: "Scalable Infrastructure",
              desc: "Handle growing workloads with cloud-native architecture.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl font-bold mb-6"
        >
          Real-World Use Cases
        </motion.h2>

        <p className="text-gray-400 text-lg mb-8">
          Businesses across industries use AI automation to streamline operations 
          and enhance productivity.
        </p>

        <div className="grid md:grid-cols-3 gap-4">

          {[
            "Customer support automation",
            "Sales & lead management",
            "Finance & reporting automation",
            "HR process automation",
            "Marketing campaign automation",
            "Data pipeline automation",
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