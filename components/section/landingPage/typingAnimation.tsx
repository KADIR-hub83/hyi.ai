"use client";

import CustomMultiTypingHeadings from "@/components/shared/customMultiTypingHeading";
import React, { useEffect, useState } from "react";

const textSets = [
  [
    "HYI AI Cloud Solutions",
    "For Startup Growth & Scale",
    "Launch faster with secure AI cloud infrastructure, GPU power, scalable hosting, and enterprise-ready performance."
  ],

  [
    "HYI AI Virtual Assistants",
    "Globally Available 24/7",
    "Automate operations, customer support, scheduling, and daily workflows with intelligent AI assistants."
  ],

  [
    "HYI AI Robotics Automation",
    "Future Ready Innovation",
    "Boost productivity with smart robotics, warehouse automation, industrial systems, and precision control."
  ],

  [
    "HYI AI Data Analytics",
    "Turn Data Into Decisions",
    "Unlock real-time insights, predictive intelligence, dashboards, and growth strategies powered by AI."
  ],

  [
    "HYI AI Autopilot Systems",
    "Autonomous Smart Mobility",
    "Power next-generation transport, logistics, drones, and autonomous operations with intelligent control systems."
  ]
]

export default function TypingAnimation() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div>
      {mounted ? (
        <CustomMultiTypingHeadings textSets={textSets} />
      ) : (
        <div className="flex flex-col gap-2 ">
          <h2 className="flex flex-col text-2xl font-semibold capitalize cursor-default gap-2 lg:text-3xl">
            <span className="bg-gradient-to-t from-brand-600 to-brand-500 bg-clip-text text-transparent">
              Hire Top Virtual Assistance
            </span>
            <span className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              for Your Startup Success.
            </span>
          </h2>
          <p className="text-sm text-dark_mode-300 md:text-base">
            Streamline Your Operations, Save Time, and Focus on What Matters
            Most
          </p>
        </div>
      )}
    </div>
  );
}
