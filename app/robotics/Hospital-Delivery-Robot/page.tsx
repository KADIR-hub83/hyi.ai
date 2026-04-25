import Navbar from "@/components/Navbar";
import { SplineScene } from "@/components/ui/robotics-hero/spline-scene";

export default function HospitalDeliveryRobot() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative md:px-20 px-5 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div className="flex-1 z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
            Hospital Delivery Robot
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-xl">
            Intelligent healthcare robots designed to transport medicines,
            medical supplies, and samples safely across hospital environments
            with speed and precision.
          </p>

          {/* CTA */}
         
        </div>

        {/* RIGHT 3D */}
        <div className="flex-1 relative h-[700px] max-md:hidden">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl -z-10" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-10 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Smart Healthcare Automation
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Hospital Delivery Robots assist healthcare professionals by
              automating internal logistics. They transport medicines, lab
              samples, and essential supplies efficiently across departments.
            </p>

            <p className="text-gray-500 mt-4">
              These robots reduce staff workload, improve operational efficiency,
              and ensure timely delivery in critical healthcare environments.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <p className="text-gray-300">
              ✔ Reduced workload for staff  
              <br />✔ Faster and reliable delivery  
              <br />✔ Improved hospital efficiency  
              <br />✔ Safe and hygienic operations  
            </p>
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="px-10 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Key Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            "Secure Storage Compartments",
            "Autonomous Navigation",
            "Elevator Integration",
            "Touchless Delivery System",
            "Real-Time Tracking",
            "Smart Route Optimization",
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition backdrop-blur-xl"
            >
              <h3 className="text-lg font-medium mb-2">{feature}</h3>
              <p className="text-gray-400 text-sm">
                Designed for safe, efficient, and intelligent hospital
                operations.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXTRA SECTION */}
      <section className="px-10 py-20 border-t border-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Enhancing Patient Care Through Automation
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          By automating routine delivery tasks, healthcare professionals can
          focus more on patient care while robots handle logistics efficiently
          and safely.
        </p>
      </section>

      {/* CTA */}
      <section className="px-10 py-24 text-center border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-6">
          Transform Your Healthcare Operations
        </h2>

        <p className="text-gray-400 mb-8">
          Deploy intelligent delivery robots for faster, safer, and smarter
          hospital workflows.
        </p>

        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl font-medium hover:scale-105 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}