"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DocumentProcessingCloudPage() {
  return (
    <div className="bg-black text-white overflow-hidden">
        <Navbar/>

      {/* ================= HERO ================= */}
<section className="relative min-h-screen overflow-hidden bg-black text-white">

  {/* Glow Effects */}
<div className="absolute -top-47 -left-40 w-[900px] h-[900px] bg-[url('/bg-talent.svg')] bg-cover bg-center rounded-full" /> 

  {/* Main Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-14 min-h-screen grid lg:grid-cols-2 max-lg:py-20 gap-14 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center lg:text-left"
    >


      <h1 className="text-5xl md:text-6xl  font-bold leading-tight bg-gradient-to-b from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
        AI Document <br />
        Processing Cloud
      </h1>

      <p className="mt-2 text-gray-400 text-lg  max-w-xl mx-auto lg:mx-0 leading-relaxed">
        Automatically extract, analyze, and process data from documents using AI.
        Eliminate manual data entry, reduce errors, and convert paperwork into
        structured actionable information in seconds.
      </p>



      {/* Stats */}
      <div className="mt-6 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
        {[
          ["95%", "Accuracy"],
          ["24/7", "Processing"],
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
  

      <Image
        src="/aicloud/AiDocument.png"
        alt="AI Document Processing"
        width={950}
        height={950}
        priority
        className="relative z-10 w-full max-w-[700px] h-auto object-contain  scale-[1.25]"
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
            What is AI Document Processing Cloud?
          </h2>

          <p className="text-gray-400 mb-4">
            The AI Document Processing Cloud helps businesses automatically extract 
            and process data from documents such as invoices, contracts, receipts, 
            and forms.
          </p>

          <p className="text-gray-400">
            Instead of manually entering data from paperwork, organizations can upload 
            documents and instantly receive structured, accurate information. This 
            significantly reduces administrative workload and improves efficiency.
          </p>
        </motion.div>

        {/* IMAGE */}
        <motion.div className="relative h-[350px]">
          <Image
            src="/performance.png"
            alt="Document AI"
            fill
            className="object-cover rounded-2xl"
          />
        </motion.div>

      </section>

      {/* ================= DOCUMENT TYPES ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">

        <h2 className="text-3xl font-bold text-center mb-12">
          Supported Document Types
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">

          {[
            "Invoices",
            "Contracts",
            "Receipts",
            "Forms & Applications",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl text-center"
            >
              {item}
            </motion.div>
          ))}
        </div>

      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-12">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              title: "AI Data Extraction",
              desc: "Automatically extract key fields such as names, dates, totals, and structured data.",
            },
            {
              title: "OCR + NLP Technology",
              desc: "Combine Optical Character Recognition with Natural Language Processing for accurate understanding.",
            },
            {
              title: "Real-Time Processing",
              desc: "Process documents instantly and receive results within seconds.",
            },
            {
              title: "Multi-Format Support",
              desc: "Supports PDFs, scanned images, and digital documents.",
            },
            {
              title: "Automated Workflows",
              desc: "Trigger workflows based on extracted data for seamless automation.",
            },
            {
              title: "High Accuracy & Validation",
              desc: "AI models ensure high accuracy with validation and error detection.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-20 px-6 bg-gradient-to-b from-black to-[#0a0a0a] text-center">

        <h2 className="text-3xl font-bold mb-10">
          Real-World Use Cases
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

          {[
            "Finance teams processing invoices",
            "Legal teams analyzing contracts",
            "HR teams managing employee documents",
            "Operations teams handling forms",
            "Banking & KYC document verification",
            "Insurance claim processing",
          ].map((item, i) => (
            <div key={i} className="p-4 border border-white/10 bg-white/5 rounded-xl">
              {item}
            </div>
          ))}
        </div>

      </section>

      {/* ================= DEEP CONTENT ================= */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-gray-400 text-lg leading-relaxed space-y-6">

        <h2 className="text-3xl text-white font-bold text-center mb-6">
          Transform Documents into Data
        </h2>

        <p>
          Businesses handle thousands of documents daily, from invoices and receipts 
          to contracts and application forms. Manual processing of these documents 
          is time-consuming, error-prone, and inefficient.
        </p>

        <p>
          AI Document Processing Cloud solves this problem by automatically extracting 
          relevant data and converting it into structured formats that can be directly 
          used in business systems.
        </p>

        <p>
          By leveraging AI technologies such as OCR and NLP, the platform understands 
          document context and ensures accurate data extraction even from complex layouts.
        </p>

        <p>
          This allows organizations to automate workflows, improve operational efficiency, 
          and focus on higher-value tasks instead of repetitive manual work.
        </p>

      </section>

     <Footer/>
    </div>
  );
}