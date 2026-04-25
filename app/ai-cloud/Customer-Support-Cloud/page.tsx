"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CustomerSupportCloudPage() {
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
        AI Customer <br />
        Support Cloud
      </h1>

      <p className="mt-2 text-gray-400 text-lg  max-w-xl mx-auto lg:mx-0 leading-relaxed">
        Deliver faster, smarter, and more personalized customer support using
        AI-powered assistants. Automate responses, reduce workload, and improve
        customer experience at scale.
      </p>



      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
        {[
          ["24/7", "Support"],
          ["90%", "Automation"],
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
      {/* Glow Behind Image */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />

      <Image
        src="/aicloud/Support.png"
        alt="AI Customer Support"
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
            What is AI Customer Support Cloud?
          </h2>

          <p className="text-gray-400 mb-4">
            AI Customer Support Cloud enables businesses to automate customer service operations using
            intelligent AI assistants. These systems can handle queries, guide users, and resolve issues
            without human intervention.
          </p>

          <p className="text-gray-400">
            By combining natural language processing and machine learning, businesses can deliver instant,
            accurate, and scalable support experiences.
          </p>
        </motion.div>

        <motion.div className="relative">
          <img
            src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b"
            className="rounded-2xl w-full h-[350px] object-cover"
          />
        </motion.div>

      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">

        <h2 className="text-3xl font-bold text-center mb-12">
          Key Features
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {[
            "Website AI Chatbots",
            "AI Voice Support",
            "Ticket Automation",
            "Knowledge Base Training",
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

      {/* ================= USE CASES ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Use Cases
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "E-commerce customer support",
            "Banking & financial queries",
            "Healthcare appointment assistance",
            "Telecom support automation",
            "SaaS product support",
            "Travel & booking assistance",
          ].map((item, i) => (
            <div key={i} className="p-6 border border-white/10 bg-white/5 rounded-xl">
              {item}
            </div>
          ))}
        </div>

      </section>

      {/* ================= WORKFLOW ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a] text-center">

        <h2 className="text-3xl font-bold mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {[
            "User asks question",
            "AI understands intent",
            "Fetches best response",
            "Delivers instant reply",
          ].map((step, i) => (
            <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
              {step}
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
            "24/7 customer support",
            "Reduced operational costs",
            "Instant responses",
            "Improved customer satisfaction",
            "Scalable support system",
            "Reduced human workload",
          ].map((item, i) => (
            <div key={i} className="p-4 border border-white/10 bg-white/5 rounded-xl">
              {item}
            </div>
          ))}
        </div>

      </section>

      {/* ================= ADVANCED CONTENT ================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-gray-400 space-y-6 text-lg leading-relaxed">

        <h2 className="text-3xl text-white font-bold text-center mb-6">
          Intelligent Customer Experience
        </h2>

        <p>
          Modern businesses require fast and efficient customer support systems. AI Customer Support Cloud
          enables companies to handle thousands of queries simultaneously without compromising quality.
        </p>

        <p>
          With AI chatbots, customers receive instant responses, reducing waiting time and improving satisfaction.
        </p>

        <p>
          Voice AI systems can handle calls, understand queries, and respond naturally, creating a human-like
          interaction experience.
        </p>

        <p>
          Automated ticketing ensures that complex issues are routed to the right human agents efficiently.
        </p>

        <p>
          By integrating with CRM and support tools, the platform ensures seamless operations across all channels.
        </p>

      </section>

      {/* ================= DASHBOARD IMAGES ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          AI Support Dashboard
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
            "https://images.unsplash.com/photo-1553877522-43269d4ea984",
            "https://images.unsplash.com/photo-1543286386-713bdd548da4"
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

      {/* ================= CTA ================= */}
      <Footer/>

    </div>
  );
}