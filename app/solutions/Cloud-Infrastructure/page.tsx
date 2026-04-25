"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function CloudInfrastructure() {
  return (
    <>
    <Navbar/>
    <section className="relative min-h-screen overflow-hidden bg-black text-white ">
       

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/bg-talent.svg"
          alt="bg"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute top-10 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-16 py-24">

        {/* Top Hero */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400 backdrop-blur-md">
              Cloud Infrastructure
            </p>

            <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-6xl">
              Secure & Scalable <br />
              <span className="font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                Cloud Ecosystem
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-400 leading-8">
              Build enterprise-grade cloud systems with automated deployment,
              high availability, secure storage, and global performance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 font-medium transition hover:scale-105">
                Get Started
              </button>

              <button className="rounded-xl border border-white/15 bg-white/5 px-7 py-3 backdrop-blur-md hover:bg-white/10">
                Explore Services
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-3xl font-semibold">99.9%</h3>
                <p className="text-sm text-gray-400">Uptime</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">50+</h3>
                <p className="text-sm text-gray-400">Regions</p>
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
            className="relative"
          >
  <div className="relative mx-auto h-[580px] w-full max-w-[560px] overflow-hidden rounded-[32px] border border-white/10 p-6">

  {/* Background Image */}
  <Image
    src="/Card-bg-11.png"
    alt="card"
    fill
    priority
    className="object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />

  {/* Content */}
  <div className="relative z-10 space-y-5">

    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 4 }}
      className="rounded-2xl border border-white/10 bg-black/30 p-5"
    >
      <p className="text-sm text-cyan-400">Cloud Storage</p>
      <h3 className="mt-2 text-2xl font-semibold">1.5 PB Data</h3>
    </motion.div>

    <div className="grid grid-cols-2 gap-4">
      <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
        <h4 className="text-xl font-semibold">Compute</h4>
        <p className="mt-2 text-sm text-gray-300">Auto Scaling</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
        <h4 className="text-xl font-semibold">Security</h4>
        <p className="mt-2 text-sm text-gray-300">Firewall</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
        <h4 className="text-xl font-semibold">CDN</h4>
        <p className="mt-2 text-sm text-gray-300">Fast Delivery</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
        <h4 className="text-xl font-semibold">Backup</h4>
        <p className="mt-2 text-sm text-gray-300">Encrypted</p>
      </div>
    </div>

  </div>
</div>
          </motion.div>
        </div>

        {/* Bottom Features */}
        <div className="mt-28 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            "AWS / Azure / GCP",
            "CI/CD Deployment",
            "Real-time Monitoring",
            "Disaster Recovery",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="mb-4 h-12 w-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600" />
              <h3 className="text-xl font-semibold">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Powerful enterprise solutions designed for scale, speed, and reliability.
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}