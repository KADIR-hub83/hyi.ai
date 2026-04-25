"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function FinanceAndRiskManagement() {

  return (
    <>
    <Navbar/>
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg-talent.svg"
          alt="bg"
          fill
          className="object-cover opacity-50"
        />
        <div className="absolute top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-yellow-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 py-24">

        {/* Hero */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-2 text-sm text-emerald-400 backdrop-blur-md">
              Finance & Risk Management
            </p>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 leading-tight">
              Smart Finance <br />
              Risk Control
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-400 leading-8">
              Modern finance systems with intelligent analytics, fraud detection,
              risk monitoring, compliance automation, and strategic reporting.
            </p>

    

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-3xl font-semibold">$12M+</h3>
                <p className="text-sm text-gray-400">Managed Assets</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">98%</h3>
                <p className="text-sm text-gray-400">Risk Accuracy</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">24/7</h3>
                <p className="text-sm text-gray-400">Monitoring</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto h-[580px] w-full max-w-[560px] overflow-hidden rounded-[32px] border border-white/10">

              <Image
                src="/Card-bg-02.webp"
                alt="finance"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="relative z-10 space-y-5 p-6">

                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="rounded-2xl border border-white/10 bg-black/30 p-5"
                >
                  <p className="text-sm text-emerald-400">Portfolio Value</p>
                  <h3 className="mt-2 text-2xl font-semibold">$5.8M Growth</h3>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <h4 className="text-xl font-semibold">Fraud Shield</h4>
                    <p className="mt-2 text-sm text-gray-300">AI Detection</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <h4 className="text-xl font-semibold">Compliance</h4>
                    <p className="mt-2 text-sm text-gray-300">Auto Reports</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <h4 className="text-xl font-semibold">Forecast</h4>
                    <p className="mt-2 text-sm text-gray-300">Live Insights</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <h4 className="text-xl font-semibold">Risk Score</h4>
                    <p className="mt-2 text-sm text-gray-300">Low Exposure</p>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-28 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            "Fraud Prevention",
            "Financial Forecasting",
            "Risk Analytics",
            "Regulatory Compliance",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="mb-4 h-12 w-12 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600" />

              <h3 className="text-xl font-semibold">{item}</h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                Advanced finance systems for security, growth, and smart decisions.
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}