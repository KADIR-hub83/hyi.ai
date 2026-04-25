"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TrainingCloudPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
   <Navbar/>
      {/* ================= HERO ================= */}
<section className="relative min-h-screen overflow-hidden bg-black text-white">

  {/* Glow Effects */}
  <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px] rounded-full" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />

  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 min-h-screen grid lg:grid-cols-2 max-lg:py-20 gap-14 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left"
    >
      

      <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
        AI Training <br />
        Cloud
      </h1>

      <p className="mt-2 text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
        Train, optimize, and scale machine learning models with powerful cloud
        infrastructure. Build next-generation AI systems using distributed GPU
        clusters, automated pipelines, and real-time experiment tracking.
      </p>

      {/* Buttons */}
     

      {/* Stats */}
      <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
        {[
          ["1000+", "GPUs"],
          ["24/7", "Runtime"],
          ["10x", "Speed"],
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
        src="/aicloud/AiTraning.png"
        alt="AI Training Cloud"
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

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            What is AI Training Cloud?
          </h2>

          <p className="text-gray-400 mb-4">
            The AI Training Cloud provides powerful infrastructure designed for training 
            machine learning models at scale. Training modern AI systems requires massive 
            computational resources, distributed systems, and complex workflows — all of 
            which are simplified through our platform.
          </p>

          <p className="text-gray-400">
            Instead of managing hardware, configuring GPUs, or building training pipelines 
            from scratch, developers and organizations can leverage a ready-to-use cloud 
            environment optimized for AI training workloads.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative h-[350px]"
        >
          <Image
            src="/performance.png"
            alt="AI Training"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">

        <h2 className="text-3xl font-bold text-center mb-12">
          Key Features
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

          {[
            "Distributed multi-GPU training",
            "Dataset management tools",
            "Experiment tracking & versioning",
            "Automated training pipelines",
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

      {/* ================= DEEP CONTENT ================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Powerful AI Training Infrastructure
        </h2>

        <div className="space-y-6 text-gray-400 leading-relaxed text-lg">

          <p>
            Training modern AI models such as deep learning networks, large language models, 
            and computer vision systems requires immense computational power and highly 
            optimized environments. AI Training Cloud eliminates the complexity of setting up 
            such infrastructure by providing pre-configured environments that are ready for 
            immediate use.
          </p>

          <p>
            With distributed GPU clusters, developers can train models faster by parallelizing 
            workloads across multiple machines. This significantly reduces training time and 
            enables experimentation with larger datasets and more complex architectures.
          </p>

          <p>
            The platform also includes advanced dataset management tools that allow teams to 
            organize, version, and preprocess datasets efficiently. This ensures consistency 
            across training runs and improves reproducibility.
          </p>

          <p>
            Experiment tracking is another critical feature that enables teams to monitor 
            performance metrics, compare different training runs, and optimize models based 
            on real-time insights. Every experiment is logged and versioned, making it easy 
            to revisit and refine previous results.
          </p>

          <p>
            Automated training workflows allow developers to define pipelines that handle 
            data ingestion, preprocessing, model training, evaluation, and deployment. This 
            reduces manual intervention and ensures a seamless end-to-end training process.
          </p>

          <p>
            AI Training Cloud is designed for scalability, allowing organizations to start 
            small and expand as their needs grow. Whether you're training a simple model or 
            building large-scale AI systems, the platform adapts to your requirements.
          </p>

        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-20 px-6 text-center bg-gradient-to-b from-black to-[#0a0a0a]">

        <h2 className="text-3xl font-bold mb-6">
          Why Choose AI Training Cloud?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {[
            "Faster model training",
            "Reduced infrastructure complexity",
            "High-performance GPU clusters",
            "Scalable training environment",
            "Improved experiment tracking",
            "Efficient resource utilization",
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