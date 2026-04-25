"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BusAutopilot() {
  const stats = [
    { value: "99.1%", label: "Route Accuracy" },
    { value: "24/7", label: "Fleet Monitoring" },
    { value: "420+", label: "Smart Buses" },
    { value: "35%", label: "Fuel Saved" },
  ];

const features = [
  {
    title: "Autonomous Driving",
    desc: "AI-powered steering, braking, lane keeping, and safe route navigation for smart transport systems.",
    icon: "/Bus-icons/autodrivebus.png",
  },
  {
    title: "Passenger Analytics",
    desc: "Track occupancy, boarding trends, crowd movement, and route demand in real time.",
    icon: "/Bus-icons/analites.png",
  },
  {
    title: "Smart Parking",
    desc: "Automatic parking guidance for depots, terminals, and city bus stations.",
    icon: "/Bus-icons/parkingbus.png",
  },
  {
    title: "Collision Prevention",
    desc: "360° sensors and cameras detect obstacles, pedestrians, and road hazards.",
    icon: "/Bus-icons/sensorbus.png",
  },
  {
    title: "Fleet Tracking",
    desc: "Monitor live location, delays, schedules, and operational performance.",
    icon: "/Bus-icons/trackingbus.png",
  },
  {
    title: "Traffic Intelligence",
    desc: "AI route engine selects fastest roads and avoids congestion instantly.",
    icon: "/Bus-icons/overtakebus.png",
  },
];

  const modules = [
    "Lane Control",
    "Brake Assist",
    "Passenger AI",
    "Smart Parking",
    "Traffic Sync",
    "Fleet Radar",
    "Emergency Stop",
    "Route Planner",
  ];

  return (
    <>
    <Navbar/>
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />
        <div className="absolute top-0 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="absolute right-0 top-1/3 h-[320px] w-[320px] rounded-full bg-orange-500/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-[1550px] lg:px-20 py-24 pb-5  px-5">

        {/* HERO */}
        <div className="grid items-center gap-0 lg:gap-14 lg:grid-cols-2">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 text-sm text-yellow-400">
              Bus Autopilot
            </p>

            <h1 className="mt-2 hyi-h2 text-5xl tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Smart Public <br />
              Transport AI
            </h1>

            <p className="mt-2 max-w-xl hyi-p leading-8 text-gray-400">
              Bus autopilot systems combine AI cameras, route engines, sensors,
              and autonomous driving controls to modernize city transport,
              improve safety, and reduce operating costs.
            </p>

            <p className="mt-2 max-w-xl hyi-pleading-8 text-gray-400">
              Designed for future mobility with self-driving lanes, passenger
              analytics, smart depots, and fleet-wide intelligence.
            </p>



            <div className="py-10 max-md:py-5 grid grid-cols-2 gap-5 md:grid-cols-4">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5"
                >
                  <h3 className="hyi-h2 ">{item.value}</h3>
                  <p className="mt-2 hyi-p text-gray-400">{item.label}</p>
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
            <div className="relative h-[480px] overflow-hidden rounded-[34px] border border-white/10">

              <Image
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop"
                alt="smart bus"
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
                  <p className="hyi-p">Autonomous Route</p>
                  <h3 className="mt-3 hyi-h2 font-semibold">
                    42 Stops Synced
                  </h3>

                  <div className="mt-5 h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[86%] rounded-full bg-gradient-to-r from-yellow-500 to-orange-500" />
                  </div>

                  <p className="mt-3 hyi-p">
                    Route Engine Active
                  </p>
                </motion.div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {modules.slice(0, 4).map((item, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-white/10 bg-black/35 p-5"
                    >
                      <h4 className="hyi-h2">{item}</h4>
                      <p className="mt-2 text-sm text-gray-300">
                        Running
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-3xl border border-white/10 bg-black/35 p-6">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Passenger Flow</span>
                    <span className="text-yellow-400">Live</span>
                  </div>

                  <div className="mt-5 grid grid-cols-4 gap-3">
                    {[64, 91, 52, 77].map((h, i) => (
                      <div key={i} className="flex items-end">
                        <div
                          style={{ height: `${h}px` }}
                          className="w-full rounded-t-xl bg-gradient-to-t from-yellow-500 to-orange-500"
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


<div className="py-10 max-md:py-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {features.map((item, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-white/10 bg-white/5 p-7"
    >
      {/* ICON */}
      <div className="mb-5">
        <Image
          src={item.icon}
          alt={item.title}
          width={56}
          height={56}
          className="h-14 w-14 object-contain text-black"
        />
      </div>

      <h3 className="hyi-h2">{item.title}</h3>

      <p className="mt-4 hyi-p">
        {item.desc}
      </p>
    </motion.div>
  ))}
</div>

        {/* SECTION 2 */}
        <div className="py- max-md:py-5 grid items-center gap-14 lg:grid-cols-2">

          <div>
            <p className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
              Fleet Intelligence
            </p>

            <h2 className="mt-6 hyi-h2 text-4xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400 leading-tight">
              Full City Fleet <br />
              Under One Screen
            </h2>

            <p className="mt-6 hyi-p leading-8 text-gray-400">
              Manage routes, fuel usage, delays, maintenance alerts, and
              passenger demand across the entire transport network in real time.
            </p>

<div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
  {[
    "Live GPS Bus Tracking",
    "Delay Prediction Engine",
    "Maintenance Alerts",
    "Fuel Consumption AI",
    "Peak Hour Optimization",
    "Central Command Panel",
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

          <div className="relative h-[450px] overflow-hidden rounded-[34px] border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1600&auto=format&fit=crop"
              alt="bus city"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="relative z-10 p-6 space-y-5">
              <div className="rounded-3xl border border-white/10 bg-black/35 p-6">
                <p className="hyi-p">Fleet Online</p>
                <h3 className="mt-2 hyi-h2">418 Buses</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {["GPS", "Radar", "Depot", "Traffic"].map((x, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-black/35 p-5"
                  >
                    <h4 className="hyi-h2">{x}</h4>
                    <p className="mt-2 hyi-p">
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