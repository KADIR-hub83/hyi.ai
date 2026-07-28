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
<section className="relative min-h-screen overflow-hidden bg-black text-white py-5">

  {/* Grid Background */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

  {/* Glow Effects */}
  <div className="absolute top-0 left-1/4 h-[700px] w-[700px] rounded-full bg-violet-600/30 blur-[180px]" />
  <div className="absolute bottom-0 right-1/4 h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[180px]" />

  <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] items-center px-6 lg:px-16">

    <div className="grid w-full grid-cols-1 gap-20 lg:grid-cols-2">

      {/* LEFT */}
      <div className="flex flex-col justify-center">

        <div className="mb-8 inline-flex w-fit items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 backdrop-blur-xl">
          <span className="mr-2 h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
          Future Ready AI Solutions
        </div>

        <h1 className="text-6xl font-bold leading-[0.9] hyi-h2">
          Build
          <br />

          <span className="bg-gradient-to-r bg-clip-text text-transparent">
            Intelligent
          </span>

          <br />

          Digital Products
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-gray-400 lg:text-xl">
          We design and develop AI-powered software, scalable cloud
          infrastructure, enterprise applications, and next-generation digital
          experiences for modern businesses.
        </p>

        {/* <div className="mt-10 flex flex-wrap gap-4">

          <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold shadow-[0_0_50px_rgba(168,85,247,0.5)] transition hover:scale-105">
            Start Project
          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl transition hover:bg-white/10">
            View Portfolio
          </button>

        </div> */}

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

          <div>
            <h3 className="text-4xl font-bold">120+</h3>
            <p className="mt-2 text-gray-400">Projects</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">50+</h3>
            <p className="mt-2 text-gray-400">Clients</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">99%</h3>
            <p className="mt-2 text-gray-400">Success</p>
          </div>

          <div>
            <h3 className="text-4xl font-bold">24/7</h3>
            <p className="mt-2 text-gray-400">Support</p>
          </div>

        </div>

      </div>

      {/* RIGHT */}
      <div className="relative flex items-center justify-center">

        {/* Main Glass Card */}
        <div className="relative h-[450px] w-full max-w-[450px] rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl">

          <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />

          <div className="relative z-10">

            {/* Top Bar */}
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>

            {/* Dashboard */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-3">

              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  AI Analytics Dashboard
                </h3>

                <div className="rounded-xl bg-green-500/20 px-4 py-2 text-green-400">
                  Live
                </div>
              </div>

              <div className="space-y-4">

                <div className="h-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />

                <div className="h-4 w-[85%] rounded-full bg-white/10" />

                <div className="h-4 w-[65%] rounded-full bg-white/10" />

              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                  <h4 className="hyi-p">95%</h4>
                  <p className="text-gray-400">Automation</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
                  <h4 className="hyi-p">12M+</h4>
                  <p className="text-gray-400">Requests</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
                  <h4 className="hyi-p">Cloud</h4>
                  <p className="text-gray-400">Infrastructure</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-2">
                  <h4 className="hyi-p">AI</h4>
                  <p className="text-gray-400">Solutions</p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Floating Card 1 */}
        <div className="absolute left-0 top-20 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
          <h4 className="font-semibold">AI Agents</h4>
          <p className="text-sm text-gray-400">
            Autonomous Workflows
          </p>
        </div>

        {/* Floating Card 2 */}
        <div className="absolute bottom-20 right-0 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
          <h4 className="font-semibold">Cloud Scale</h4>
          <p className="text-sm text-gray-400">
            Unlimited Infrastructure
          </p>
        </div>

      </div>

    </div>

  </div>

  <section className="w-full flex items-center justify-center px-10 py-5">
         
  </section>

</section>
    <section className="w-full flex items-center justify-center overflow-hidden  py-6 md:p-6 lg:py-8">
      <div className="w-full flex flex-col relative isolate">
        <div className="flex pointer-events-none absolute top-[90%] left-[53%] items-center justify-center z-0 transform -translate-x-1/2 -translate-y-1/2 lg:top-[75%] lg:left-[53%]">
          <div className="h-[600px] w-[600px] md:h-[700px] md:w-[700px] rounded-full  blur-3xl" />
        </div>

        {/* <div className="relative z-10 flex flex-col gap-12 md:gap-16">
          <MVPAnimationsComponent />
          <Features />
        </div> */}
      </div>
    </section>

    </>
  );
}
