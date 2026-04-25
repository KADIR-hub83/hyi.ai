"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Autopilot() {
  const features = [
    "Auto Navigation",
    "Altitude Control",
    "Speed Management",
    "Route Optimization",
    "Weather Response",
    "Emergency Assist",
    "Fuel Efficiency",
    "Landing Support",
  ];

  const stats = [
    { value: "99.7%", label: "Flight Accuracy" },
    { value: "24/7", label: "System Monitoring" },
    { value: "1200+", label: "Routes Managed" },
    { value: "38%", label: "Pilot Workload Reduced" },
  ];

  const systems = [
    {
      title: "Takeoff Assist",
      desc: "Smart runway acceleration, lift timing, and climb angle management for smoother departures.",
      icon: "/Autopilot-Icons/flights-icons/Takeoff-Assist.svg",
    },
    {
      title: "Cruise Control",
      desc: "Maintains altitude, heading, and speed while reducing pilot fatigue on long routes.",
      icon: "/Autopilot-Icons/flights-icons/Cruise-Control.svg",
    },
    {
      title: "Landing Precision",
      desc: "Supports descent path, runway alignment, flare timing, and touchdown stability.",
      icon: "/Autopilot-Icons/flights-icons/Landing.svg",
    },
    {
      title: "Weather Intelligence",
      desc: "Adjusts routes based on turbulence, storms, and atmospheric conditions.",
      icon: "/Autopilot-Icons/flights-icons/Weather.svg",
    },
    {
      title: "Fuel Analytics",
      desc: "Optimizes throttle and route decisions to reduce fuel consumption.",
      icon: "/Autopilot-Icons/flights-icons/fuel.svg",
    },
    {
      title: "Emergency Recovery",
      desc: "Backup stabilization systems for critical events and pilot assistance.",
      icon: "/Autopilot-Icons/flights-icons/Emergency-Recovery.svg",
    },
  ];

  return (
    <>
    <Navbar/>
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#040404] to-black" />

        <div className="absolute top-10 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[150px]" />
        <div className="absolute right-0 top-1/3 h-[320px] w-[320px] rounded-full bg-purple-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-[1500px] px-20 py-24 max-xl:px-5 pb-5">

        {/* HERO */}
        <div className="grid items-center gap-16 lg:grid-cols-2 max-lg:gap-5">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400 backdrop-blur-md">
              Flight Autopilot
            </p>

            <h1 className="mt-2 hyi-h2 text-5xl tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Intelligent <br />
              Autopilot Systems
            </h1>

            <p className="mt-2 max-w-xl hyi-p leading-8 text-gray-400">
              Flight autopilot systems assist pilots by automatically controlling
              aircraft navigation, altitude, speed, and direction. These systems
              reduce pilot workload and improve safety during long routes or
              difficult weather conditions.
            </p>

            <p className="mt-2 max-w-xl hyi-p leading-8 text-gray-400">
              Modern autopilot technology also supports automated takeoff,
              cruise control, route correction, and precision landing for
              smoother and more reliable air travel.
            </p>

    

            <div className="mt-2 grid grid-cols-2 gap-5 md:grid-cols-4">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="text-3xl font-semibold">{item.value}</h3>
                  <p className="mt-2 text-sm text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[480px] w-full overflow-hidden rounded-[34px] border border-white/10">

              {/* Google style imported photo via URL */}
              <Image
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1600&auto=format&fit=crop"
                alt="aircraft autopilot"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/45" />

              <div className="relative z-10 p-6">

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="rounded-3xl border border-white/10 bg-black/35 p-6"
                >
                  <p className="text-cyan-400">Live Navigation</p>
                  <h3 className="mt-3 text-4xl font-semibold">
                    36,000 ft Stable
                  </h3>

                  <div className="mt-5 h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[82%] rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                  </div>

                  <p className="mt-3 text-sm text-gray-300">
                    Route Accuracy Maintained
                  </p>
                </motion.div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {features.slice(0, 4).map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-black/35 p-5"
                    >
                      <h4 className="text-xl font-semibold">{item}</h4>
                      <p className="mt-2 text-sm text-gray-300">
                        Active Module
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-3xl border border-white/10 bg-black/35 p-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Flight Metrics</span>
                    <span className="text-cyan-400">Realtime</span>
                  </div>

                  <div className="mt-5 grid grid-cols-4 gap-3">
                    {[70, 92, 60, 84].map((h, i) => (
                      <div key={i} className="flex items-end">
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

        {/* SYSTEMS */}
    <div className="py-10 max-md:py-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition"
              >
                <div className="mb-5">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className="h-14 w-14 object-contain"
                  />
                </div>

                <h3 className="text-2xl font-semibold">{item.title}</h3>

                <p className="mt-4 leading-8 text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

        {/* ADVANCED SECTION */}
        <div className=" grid items-center gap-14 max-lg:gap-0 lg:grid-cols-2 ">

          <div>
            <p className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
              Aviation Intelligence
            </p>

            <h2 className="mt-4 hyi-h2 text-4xl">
              Precision Flight <br />
              Every Second
            </h2>

            <p className="mt-4 hyi-p">
              Smart sensors, gyroscopes, GPS modules, and onboard processors
              continuously stabilize the aircraft while optimizing safety and
              route efficiency.
            </p>

            <div className="py-5  grid gap-5 md:grid-cols-2">
              {[
                "Auto Stabilization Engine",
                "Smart Route Recalculation",
                "Wind Compensation Control",
                "Emergency Override Support",
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl hyi-p border border-white/10 bg-white/5 px-5 py-4"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[480px] overflow-hidden rounded-[34px] border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?q=80&w=1600&auto=format&fit=crop"
              alt="cockpit"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 p-6 space-y-5">
              <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
                <p className="hyi-p">Control Confidence</p>
                <h3 className="mt-2 hyi-h2">97.9%</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["Heading", "Altitude", "Speed", "Landing"].map((x, i) => (
                  <div
                    key={i}
                    className="rounded-2xl  border border-white/10 bg-black/35 p-5"
                  >
                    <h4 className="hyi-h2">{x}</h4>
                    <p className="mt-2 hyi-p ">
                      Synced Control
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    <Footer/>
    </>
  );
}