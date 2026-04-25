"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function DataAnalytics() {
  const services = [
    "Real-time Dashboards",
    "Big Data Processing",
    "Customer Insights",
    "Forecast Modeling",
    "KPI Automation",
    "Data Warehousing",
    "ETL Pipelines",
    "Risk Analytics",
  ];

  const stats = [
    { value: "12B+", label: "Rows Processed" },
    { value: "99.9%", label: "Accuracy" },
    { value: "350+", label: "Dashboards" },
    { value: "24/7", label: "Monitoring" },
  ];

  const features = [
    {
      title: "Live Reporting",
      desc: "Monitor every metric in real time with enterprise-grade dashboards.",
    },
    {
      title: "Predictive Models",
      desc: "Forecast trends using machine learning and AI intelligence.",
    },
    {
      title: "Customer Insights",
      desc: "Understand behavior, retention, and growth opportunities.",
    },
    {
      title: "Data Security",
      desc: "Encrypted pipelines and governance for critical systems.",
    },
    {
      title: "Automation",
      desc: "Reduce manual reporting with scheduled intelligence systems.",
    },
    {
      title: "Warehouse Design",
      desc: "Build scalable data lakes and structured warehouses.",
    },
  ];

  return (
    <>
    <Navbar/>
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg-talent.svg"
          alt="background"
          fill
          priority
          className="object-cover opacity-50"
        />

        <div className="absolute top-10 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-purple-500/10 blur-[160px]" />
        <div className="absolute right-0 top-1/3 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-[1500px] px-20 py-24">

        {/* HERO */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400 backdrop-blur-md">
              Data Analytics
            </p>

            <h1 className="mt-6 text-5xl  font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 leading-tight">
              Unlock Power Of <br />
              Your Business Data
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              Convert raw data into decisions with world-class dashboards,
              AI-powered forecasting, business intelligence, and scalable
              analytics systems built for growth.
            </p>


            <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
              {stats.map((item, i) => (
                <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h3 className="text-3xl font-semibold">{item.value}</h3>
                  <p className="mt-2 text-sm text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative mx-auto h-[650px] w-full max-w-[620px] overflow-hidden rounded-[34px] border border-white/10">

              <Image
                src="/Card-bg-11.png"
                alt="dashboard"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/35" />

              <div className="relative z-10 p-6">

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="rounded-3xl border border-white/10 bg-black/30 p-6"
                >
                  <p className="text-cyan-400 text-sm">Revenue Intelligence</p>
                  <h3 className="mt-3 text-4xl font-semibold">$8.4M</h3>

                  <div className="mt-6 h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[78%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                  </div>

                  <p className="mt-3 text-sm text-gray-400">+32% this quarter</p>
                </motion.div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {services.slice(0, 4).map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-black/30 p-5"
                    >
                      <h4 className="text-xl font-semibold">{item}</h4>
                      <p className="mt-2 text-sm text-gray-300">
                        Enterprise Ready
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-3xl border border-white/10 bg-black/30 p-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Traffic Sources</span>
                    <span className="text-cyan-400">Live</span>
                  </div>

                  <div className="mt-5 grid grid-cols-4 gap-3">
                    {[65, 90, 50, 78].map((h, i) => (
                      <div key={i} className="flex items-end gap-2">
                        <div
                          style={{ height: `${h}px` }}
                          className="w-full rounded-t-xl bg-gradient-to-t from-cyan-500 to-blue-600"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* FEATURE GRID */}
        <div className="mt-28 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md"
            >
              <div className="mb-5 h-14 w-14 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600" />

              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <p className="mt-4 text-gray-400 leading-8">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* BIG SECTION */}
        <div className="mt-28 grid items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-400">
              Advanced Intelligence
            </p>

            <h2 className="mt-6 text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Predict The Future <br /> With AI Analytics
            </h2>

            <p className="mt-6 text-lg text-gray-400 leading-8">
              Machine learning models help forecast customer churn, demand,
              sales growth, anomalies, and financial movement with precision.
            </p>

            <div className="mt-10 space-y-5">
              {[
                "Sales Forecasting Engine",
                "Customer Retention Prediction",
                "Fraud Pattern Detection",
                "Behavioral Analytics",
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[600px] rounded-[34px] overflow-hidden border border-white/10">
            <Image
              src="/Card-bg-02.webp"
              alt="analytics visual"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/35" />

            <div className="relative z-10 p-6 space-y-5">
              <div className="rounded-3xl bg-black/30 border border-white/10 p-6">
                <p className="text-purple-400">AI Confidence</p>
                <h3 className="text-4xl font-semibold mt-2">96.4%</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["Forecast", "Demand", "ROI", "Insights"].map((x, i) => (
                  <div
                    key={i}
                    className="rounded-2xl bg-black/30 border border-white/10 p-5"
                  >
                    <h4 className="text-xl font-semibold">{x}</h4>
                    <p className="mt-2 text-gray-300 text-sm">Smart Data</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
   

      </div>
    </section>
    </>
  );
}