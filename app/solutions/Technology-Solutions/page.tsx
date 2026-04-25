"use client";

import Navbar from "@/components/Navbar";
import dynamic from "next/dynamic";
import React from "react";
const MVPAnimationsComponent = dynamic(
  () => import("@/components/section/landingPage/mvpAnimations"),
  { ssr: false }
);
const Features = dynamic(
  () => import("@/components/section/landingPage/features"),
  { ssr: false }
);

export default function FirstSection() {
  return (
    <>
    <Navbar/>
<section className="relative min-h-screen overflow-hidden bg-black text-white px-20">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-20 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />
    <div className="absolute bottom-10 right-10 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />
  </div>

  {/* Main Content */}
  <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col items-center justify-center px-6 py-20 lg:flex-row lg:gap-16">

    {/* Left Content */}
    <div className="w-full lg:w-1/2 text-center lg:text-left">
      <p className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-400 backdrop-blur-md">
        Future Ready Solutions
      </p>

      <h1 className="mt-6 text-5xl font-semibold leading-tight ">
        Build Powerful <br />
        <span className="font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
          Technology Solutions
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-lg text-gray-400">
        We create intelligent digital products, scalable platforms, cloud systems,
        AI integrations, and enterprise-grade software for modern businesses.
      </p>



      {/* Stats */}
      <div className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
        <div>
          <h3 className="text-2xl font-semibold text-white">120+</h3>
          <p className="text-sm text-gray-400">Projects Delivered</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white">50+</h3>
          <p className="text-sm text-gray-400">Global Clients</p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white">99%</h3>
          <p className="text-sm text-gray-400">Success Rate</p>
        </div>
      </div>
    </div>

    {/* Right Content */}
    <div className="mt-16 flex w-full justify-center lg:mt-0 lg:w-1/2">
      <div className="relative h-[520px] w-full max-w-[560px] rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600/20 to-transparent p-6">
          <p className="text-sm text-purple-400">Dashboard Preview</p>

          <div className="mt-6 space-y-4">
            <div className="h-3 w-full rounded-full bg-white/10"></div>
            <div className="h-3 w-4/5 rounded-full bg-white/10"></div>
            <div className="h-3 w-3/5 rounded-full bg-white/10"></div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <h4 className="text-xl font-semibold">AI</h4>
              <p className="mt-2 text-sm text-gray-400">Smart Automation</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <h4 className="text-xl font-semibold">Cloud</h4>
              <p className="mt-2 text-sm text-gray-400">Scalable Infra</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <h4 className="text-xl font-semibold">Apps</h4>
              <p className="mt-2 text-sm text-gray-400">Modern UI/UX</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <h4 className="text-xl font-semibold">Security</h4>
              <p className="mt-2 text-sm text-gray-400">Enterprise Safe</p>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
    <section className="w-full flex items-center justify-center overflow-hidden  py-6 md:p-6 lg:py-8">
      <div className="w-full flex flex-col relative isolate">
        <div className="flex pointer-events-none absolute top-[90%] left-[53%] items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2 lg:top-[75%] lg:left-[53%]">
          <div className="h-[600px] w-[600px] md:h-[700px] md:w-[700px] rounded-full  blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col gap-12 md:gap-16">
          <MVPAnimationsComponent />
          <Features />
        </div>
      </div>
    </section>
    </>
  );
}
