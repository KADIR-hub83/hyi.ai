"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function Cybersecurity() {
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
        <div className="absolute top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-16 py-24">

        {/* Hero */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm text-red-400 backdrop-blur-md">
              Cybersecurity
            </p>

            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 leading-tight">
              Protect Your <br />
              Digital Future
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-400 leading-8">
              Advanced cybersecurity solutions to protect businesses from threats,
              breaches, ransomware, and data leaks with 24/7 monitoring.
            </p>

   

            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-3xl font-semibold">24/7</h3>
                <p className="text-sm text-gray-400">Threat Monitoring</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">99%</h3>
                <p className="text-sm text-gray-400">Attack Prevention</p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold">500+</h3>
                <p className="text-sm text-gray-400">Protected Clients</p>
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
            <div className="relative mx-auto h-[580px] w-full max-w-[560px] overflow-hidden rounded-[32px] border border-white/10">

              <Image
                src="/Card-bg-12.png"
                alt="cyber card"
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
                  <p className="text-sm text-red-400">Firewall Status</p>
                  <h3 className="mt-2 text-2xl font-semibold">Active Shield</h3>
                </motion.div>

                <div className="grid grid-cols-2 gap-4">

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <h4 className="text-xl font-semibold">Encryption</h4>
                    <p className="mt-2 text-sm text-gray-300">AES-256</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <h4 className="text-xl font-semibold">Monitoring</h4>
                    <p className="mt-2 text-sm text-gray-300">Live Alerts</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <h4 className="text-xl font-semibold">VPN</h4>
                    <p className="mt-2 text-sm text-gray-300">Secure Access</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <h4 className="text-xl font-semibold">Recovery</h4>
                    <p className="mt-2 text-sm text-gray-300">Instant Backup</p>
                  </div>

                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Bottom Cards */}
        <div className="mt-28 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            "Threat Detection",
            "Ransomware Protection",
            "Cloud Security",
            "Zero Trust Access",
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="mb-4 h-12 w-12 rounded-xl bg-gradient-to-r from-red-500 to-orange-500" />

              <h3 className="text-xl font-semibold">{item}</h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                Smart protection systems for modern businesses and enterprises.
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
    </>
  );
}