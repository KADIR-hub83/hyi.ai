"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DroneAutopilot() {
  const stats = [
    { value: "99.6%", label: "Flight Precision" },
    { value: "24/7", label: "Mission Ready" },
    { value: "800+", label: "Flights Completed" },
    { value: "45%", label: "Time Saved" },
  ];

  const systems = [
    "GPS Navigation",
    "Obstacle Avoidance",
    "Auto Return",
    "Smart Delivery",
    "Live Mapping",
    "Vision AI",
    "Thermal Scan",
    "Route Planning",
  ];

const features = [
  {
    title: "Independent Navigation",
    desc: "Autonomous flight using GPS, IMU sensors, and AI route control systems.",
    icon: "/Autopilot-Icons/Dron-icons/Navigation.svg",
  },
  {
    title: "Obstacle Detection",
    desc: "Smart sensors scan surroundings and avoid trees, buildings, and wires.",
    icon: "/Autopilot-Icons/Dron-icons/Sensor.svg",
  },
  {
    title: "Delivery Missions",
    desc: "Automated package delivery with precise destination targeting.",
    icon: "/Autopilot-Icons/Dron-icons/Palcel.svg",
  },
  {
    title: "Aerial Mapping",
    desc: "Capture land, construction, and city maps with intelligent route grids.",
    icon: "/Autopilot-Icons/Dron-icons/Mapping.svg",
  },
  {
    title: "Inspection AI",
    desc: "Used for bridges, towers, solar farms, pipelines, and infrastructure.",
    icon: "/Autopilot-Icons/Dron-icons/Inpection.svg",
  },
  {
    title: "Return Home",
    desc: "Auto-return system activates on low battery or lost connection.",
    icon: "/Autopilot-Icons/Dron-icons/Return-Home.svg",
  },
];

  return (
    <>
    <Navbar/>
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#030303] to-black" />
        <div className="absolute top-10 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[170px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[150px]" />
        <div className="absolute right-0 top-1/3 h-[320px] w-[320px] rounded-full bg-purple-500/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-[1550px] px-20 py-24 pb-5">

        {/* HERO */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-400">
              Drone Autopilot
            </p>

            <h1 className="mt-4 hyi-h2 text-5xl">
              Autonomous <br />
              Drone Intelligence
            </h1>

            <p className="mt-4 max-w-xl hyi-p">
              Drone autopilot systems allow unmanned aerial vehicles to navigate
              independently using GPS, sensors, and onboard AI.
            </p>

            <p className="mt-5 max-w-xl hyi-p">
              Ideal for surveillance, delivery services, mapping, inspections,
              agriculture, and industrial missions with minimal human control.
            </p>

            

            <div className="mt-5 grid grid-cols-2 gap-5 ">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-3"
                >
                  <h3 className="hyi-h2">{item.value}</h3>
                  <p className="mt-1 hyi-p">{item.label}</p>
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
            <div className="relative h-[480px] overflow-hidden rounded-[34px] border border-white/10">

              <Image
                src="https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=1600&auto=format&fit=crop"
                alt="drone autopilot"
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
                  <p className="text-violet-400">Mission Control</p>
                  <h3 className="mt-3 hyi-h2">
                    Route Locked
                  </h3>

                  <div className="mt-5 h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[88%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
                  </div>

                  <p className="mt-3 hyi-p">
                    Autonomous Flight Active
                  </p>
                </motion.div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {systems.slice(0, 4).map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-black/35 p-5"
                    >
                      <h4 className="hyi-h2 text-base">{item}</h4>
                      <p className="mt-1 hyi-p">Enabled</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-3xl border border-white/10 bg-black/35 p-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Sensor Metrics</span>
                    <span className="text-violet-400">Live</span>
                  </div>

                  <div className="mt-5 grid grid-cols-4 gap-3">
                    {[70, 95, 60, 82].map((h, i) => (
                      <div key={i} className="flex items-end">
                        <div
                          style={{ height: `${h}px` }}
                          className="w-full rounded-t-xl bg-gradient-to-t from-violet-500 to-cyan-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

        {/* FEATURES */}
<div className="md:py-10 py-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {features.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition-all duration-300"
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

        {/* SECOND SECTION */}
        <div className="grid items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
              Smart Missions
            </p>

            <h2 className="mt-6 hyi-h2 text-4xl">
              Beyond Human <br />
              Flight Control
            </h2>

            <p className="mt-4 hyi-p">
              Program drones to follow paths, avoid obstacles, return safely,
              and complete aerial missions with extreme precision.
            </p>

            <div className="mt-5 space-y-2 grid grid-cols-2 gap-4">
              {[
                "Aerial Surveillance",
                "Delivery Logistics",
                "Smart Agriculture Scan",
                "Construction Mapping",
                "Powerline Inspection",
                "Emergency Response Missions",
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

          <div className="relative h-[480px] overflow-hidden rounded-[34px] border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=1600&auto=format&fit=crop"
              alt="drone city"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 p-6 space-y-5">
              <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
                <p className="hyi-p">Mission Success</p>
                <h3 className="mt-2 hyi-h2">97.8%</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["GPS", "Radar", "Camera", "Battery"].map((x, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-black/35 p-5"
                  >
                    <h4 className="hyi-h2 text-base">{x}</h4>
                    <p className="mt-2 hyi-p">Connected</p>
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