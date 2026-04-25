"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DataAnalyticsCloudPage() {
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
  

      <h1 className="text-5xl md:text-6xl  font-bold leading-tight bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
        AI Data <br />
        Analytics Cloud
      </h1>

      <p className="mt-2 text-gray-400 text-lg  max-w-xl mx-auto lg:mx-0 leading-relaxed">
        Transform raw data into powerful business insights with AI-driven
        analytics. Detect trends, predict outcomes, and make smarter decisions
        using intelligent data processing and real-time visualization tools.
      </p>

  
      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
        {[
          ["99%", "Accuracy"],
          ["24/7", "Insights"],
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
        src="/aicloud/DataAnalatics.png"
        alt="AI Data Analytics"
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
            What is AI Data Analytics Cloud?
          </h2>

          <p className="text-gray-400 mb-4">
            The AI Data Analytics Cloud helps businesses transform raw data into 
            meaningful insights. By leveraging advanced machine learning algorithms, 
            organizations can analyze large datasets and uncover hidden patterns.
          </p>

          <p className="text-gray-400">
            This enables faster, data-driven decision-making and helps businesses 
            stay competitive in rapidly changing markets.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div className="relative h-[350px]">
          <Image
            src="/performance.png"
            alt="Analytics Dashboard"
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

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {[
            "Predictive analytics models",
            "AI-powered dashboards",
            "Anomaly detection",
            "Sales & revenue forecasting",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl text-center"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= DASHBOARD IMAGES ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Visual Dashboards
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

{
  [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984",
    "https://images.unsplash.com/photo-1543286386-713bdd548da4"
  ].map((img, i) => (
    <div key={i} className="relative h-[300px] ">
     <img
  src={img}
  alt="dashboard"
  className="w-full h-[300px] object-cover rounded-xl hover:scale-105 transition duration-500"
/>
    </div>
  ))
}
        </div>
      </section>

      {/* ================= DEEP CONTENT ================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-gray-400 text-lg leading-relaxed space-y-6">

        <h2 className="text-3xl text-white font-bold text-center mb-6">
          Turn Data into Intelligence
        </h2>

        <p>
          Businesses today generate massive amounts of data every second. However, 
          without proper tools, this data remains underutilized. AI Data Analytics Cloud 
          bridges this gap by converting raw datasets into meaningful insights.
        </p>

        <p>
          With predictive analytics, organizations can forecast future trends and make 
          proactive decisions. AI-powered dashboards provide real-time visualizations 
          that simplify complex data into easy-to-understand formats.
        </p>

        <p>
          The platform also includes anomaly detection systems that identify unusual 
          patterns in data, helping businesses prevent fraud, detect risks, and 
          optimize operations.
        </p>

        <p>
          From sales forecasting to customer behavior analysis, AI analytics empowers 
          organizations to unlock the full potential of their data.
        </p>

      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-20 px-6 text-center">

        <h2 className="text-3xl font-bold mb-10">
          Why Choose AI Data Analytics Cloud?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {[
            "Real-time insights",
            "Better decision making",
            "Increased efficiency",
            "Accurate forecasting",
            "Data-driven strategy",
            "Scalable analytics",
          ].map((item, i) => (
            <div key={i} className="p-4 border border-white/10 bg-white/5 rounded-xl">
              {item}
            </div>
          ))}
        </div>

      </section>

     <Footer/>
    </div>
  );
}