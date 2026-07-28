
"use client";

import React from "react";
import Link from "next/link";
import {
  Warehouse,
  ShieldCheck,
  Cpu,
  Sparkles,
  Hospital,
  Hotel,
  UtensilsCrossed,
  ArrowRight,
} from "lucide-react";
import CustomButton from "@/components/shared/customButton";
import { ShimmerButton } from "@/components/shared/customShimmerButton";

export default function Robotics() {
 const roboticsCards = [
  {
    title: "Warehouse Automation Robot (AMR)",
    desc: "Autonomous robots that move goods safely with smart mapping, obstacle detection, and scalable fleet control.",
    link: "/robotics/Warehouse-Automation-Robot",
    icon: <Warehouse size={34} />,
    bg: "/Card-bg-01.webp",
  },
  {
    title: "Security Patrol Robot",
    desc: "AI-powered patrol robots with smart cameras, alerts, night vision, and autonomous monitoring routes.",
    link: "/robotics/Security-Patrol-Robot",
    icon: <ShieldCheck size={34} />,
    bg: "/Card-bg-02.webp",
  },
  {
    title: "Industrial Robot Arms",
    desc: "Precision robotic arms for assembly, welding, packaging, palletizing, and manufacturing automation.",
    link: "/robotics/Industrial-Robot-Arms",
    icon: <Cpu size={34} />,
    bg: "/Card-bg-03.webp",
  },
  {
    title: "Cleaning Robots",
    desc: "Smart cleaning robots for malls, airports, hospitals, offices, and commercial facilities.",
    link: "/robotics/Cleaning-Robots",
    icon: <Sparkles size={34} />,
    bg: "/Card-bg-04.webp",
  },
  {
    title: "Hospital Delivery Robot",
    desc: "Automates medicines, samples, meals, and supply delivery inside hospitals with touchless movement.",
    link: "/robotics/Hospital-Delivery-Robot",
    icon: <Hospital size={34} />,
    bg: "/Card-bg-05.webp",
  },
  {
    title: "Hotel Delivery Robot",
    desc: "Modern hospitality robots for room service, guest deliveries, amenities, and packages.",
    link: "/robotics/Hotel-Delivery-Robot",
    icon: <Hotel size={34} />,
    bg: "/Card-bg-07.webp",
  },
  {
    title: "Restaurant Waiter Robot",
    desc: "Serve food quickly with smart waiter robots featuring tray systems and collision-free navigation.",
    link: "/robotics/Restaurant-Waiter-Robot",
    icon: <UtensilsCrossed size={34} />,
    bg: "/Card-bg-08.webp",
  },
];

  return (
    <section className="relative overflow-hidden bg-black text-white py-10 px-6 xl:px-16">
      {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#bd1cc6_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#bd1cc6_0%,transparent_35%)] opacity-60" />

<div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(189,28,198,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(189,28,198,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-[1500px] mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
           <ShimmerButton className=" text-[18px]" align="center">
              Robotics Solution
           </ShimmerButton>
        </div>

        {/* Heading */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="hyi-h2">
            Smart Robotics For Faster, Safer & Scalable Operations
          </h2>

          <p className=" hyi-p">
            Transform logistics, healthcare, hospitality, manufacturing and
            facility management with next-generation robotic automation.
          </p>
        </div>

        {/* Cards */}
<div className="grid lg:grid-cols-3 gap-6">
  {roboticsCards.map((item, i) => (
    <div
      key={i}
      className={`relative overflow-hidden rounded-3xl border border-white/10 min-h-[320px] p-7 group cursor-pointer transition duration-500 hover:-translate-y-3 hover:shadow-[0_25px_80px_rgba(189,28,198,0.35)]

      ${i === 0 ? "md:col-span-2 max-lg:col-span-1" : ""}
      ${i === roboticsCards.length - 1 ? "md:col-span-2 max-lg:col-span-1" : ""}

      `}
    >
      {/* Background Image */}
      <img
        src={item.bg}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition duration-200"
      />

      {/* Default Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 group-hover:bg-black/35 transition duration-300" />

      {/* Hover Purple Glow Background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_bottom,#bd1cc6_0%,transparent_55%)]" />

      {/* Animated Top Layer */}
      <div className="absolute inset-0 translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-white/5 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center mb-6 transition duration-500 group-hover:scale-110 group-hover:rotate-6">
          {item.icon}
        </div>

        <h3 className="hyi-h2  transition duration-300 group-hover:text-violet-200">
          {item.title}
        </h3>

        <p className="hyi-p  mt-3 transition duration-300 group-hover:text-white">
          {item.desc}
        </p>

        <Link
          href={item.link}
          className="mt-auto pt-6 inline-flex items-center gap-2 text-sm font-medium text-violet-300 group-hover:text-white transition"
        >
          Learn More
          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  ))}
</div>

   
      </div>
    </section>
  );
}