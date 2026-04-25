"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CarAutopilot() {
  const stats = [
    { value: "99.4%", label: "Lane Accuracy" },
    { value: "24/7", label: "Sensor Monitoring" },
    { value: "150+", label: "Smart Routes" },
    { value: "42%", label: "Driver Stress Reduced" },
  ];

  const modules = [
    "Lane Keep Assist",
    "Adaptive Cruise",
    "Collision Detection",
    "Smart Parking",
    "Traffic AI",
    "Blind Spot Radar",
    "Emergency Brake",
    "Driver Assist",
  ];

const features = [
  {
    title: "Lane Intelligence",
    desc: "Detects lane markings and keeps the vehicle centered with smooth steering correction.",
    icon: "/Autopilot-Icons/Car-icons/Lane.svg",
  },
  {
    title: "Adaptive Cruise",
    desc: "Automatically maintains speed and safe distance from vehicles ahead.",
    icon: "/Autopilot-Icons/Car-icons/Cruise.svg",
  },
  {
    title: "Traffic Response",
    desc: "Reads traffic flow, stop-go conditions, and adjusts movement instantly.",
    icon: "/Autopilot-Icons/Car-icons/Traffic.svg",
  },
  {
    title: "Collision Shield",
    desc: "Uses cameras and radar to detect obstacles and avoid impact risks.",
    icon: "/Autopilot-Icons/Car-icons/Collision.svg",
  },
  {
    title: "Auto Parking",
    desc: "Guides steering, braking, and movement into parking spaces automatically.",
    icon: "/Autopilot-Icons/Car-icons/auto-park.svg",
  },
  {
    title: "Night Vision",
    desc: "Enhances obstacle recognition during dark or low-visibility conditions.",
    icon: "/Autopilot-Icons/Car-icons/Night-Vision.svg",
  },
];

  return (
    <>
    <Navbar/>
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#030303] to-black" />

        <div className="absolute top-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-500/10 blur-[160px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute right-0 top-1/3 h-[320px] w-[320px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-[1500px] xl:px-20 py-24 px-5 pb-0">

        {/* HERO */}
        <div className="grid items-center gap-16 lg:grid-cols-2 max-lg:gap-5">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full border border-red-500/30 bg-red-500/10 px-5 py-2 text-sm text-red-400">
              Car Autopilot
            </p>

            <h1 className="mt-4 hyi-h2 text-5xl">
              Self Driving <br />
              Car Intelligence
            </h1>

            <p className="mt-4 max-w-xl hyi-p">
              Car autopilot systems use AI cameras, radar, sensors, and smart
              software to assist steering, braking, lane changes, and route
              optimization for safer and smarter travel.
            </p>

            <p className="mt-4 max-w-xl hyi-p">
              Advanced systems support autonomous parking, adaptive cruise,
              obstacle detection, traffic learning, and future full self-driving
              experiences.
            </p>

            

            <div className="py-10 max-md:py-5 grid grid-cols-2 gap-5 md:grid-cols-4">
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
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[480px] overflow-hidden rounded-[34px] border border-white/10">

              {/* Google style image */}
              <Image
                src="https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=1600&auto=format&fit=crop"
                alt="autonomous car"
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
                  <p className="hyi-p">Autonomous Drive</p>
                  <h3 className="mt-3 hyi-h2">
                    Route Locked
                  </h3>

                  <div className="mt-5 h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[84%] rounded-full bg-gradient-to-r from-red-500 to-orange-500" />
                  </div>

                  <p className="mt-3 hyi-p">
                    AI Navigation Active
                  </p>
                </motion.div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {modules.slice(0, 4).map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-black/35 p-5"
                    >
                      <h4 className="hyi-h2">{item}</h4>
                      <p className="mt-2 hyi-p">
                        Enabled
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-3xl border border-white/10 bg-black/35 p-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Traffic Metrics</span>
                    <span className="text-red-400">Realtime</span>
                  </div>

                  <div className="mt-5 grid grid-cols-4 gap-3">
                    {[68, 88, 54, 79].map((h, i) => (
                      <div key={i} className="flex items-end">
                        <div
                          style={{ height: `${h}px` }}
                          className="w-full rounded-t-xl bg-gradient-to-t from-red-500 to-orange-500"
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
<div className=" py-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
          className="h-14 w-14 object-contain "
        />
      </div>

      <h3 className="hyi-h2">{item.title}</h3>

      <p className="mt-4 hyi-p">
        {item.desc}
      </p>
    </motion.div>
  ))}
</div>

        {/* BIG GRID SECTION */}
        <div className="py-10 max-md:py-5 grid items-center gap-14 lg:grid-cols-2 max-lg:gap-5">

          <div>
            <p className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
              Future Mobility
            </p>

            <h2 className="mt-6 hyi-h2 text-4xl">
              AI Driving <br />
              Without Limits
            </h2>

            <p className="mt-6 hyi-p">
              Smart driving systems analyze roads, signals, pedestrians,
              highways, and surroundings every second to create safe and
              comfortable journeys.
            </p>

            <div className="mt-5 space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Real-time Road Scanning",
                "Automatic Lane Changing",
                "Smart Overtake Logic",
                "Urban Navigation AI",
                "Voice Command Driving",
                "Connected Vehicle Sync",
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
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop"
              alt="car cockpit"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 p-6 space-y-5">
              <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
                <p className="text-blue-400">Road Confidence</p>
                <h3 className="mt-2 text-4xl font-semibold">96.2%</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["Radar", "Camera", "Lidar", "Brake"].map((x, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-black/35 p-5"
                  >
                    <h4 className="text-xl font-semibold">{x}</h4>
                    <p className="mt-2 text-sm text-gray-300">
                      Connected
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
       
      

      </div>
    </section>
    <Footer/>
    </>
  );
}