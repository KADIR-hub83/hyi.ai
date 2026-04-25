import Navbar from "@/components/Navbar";
import { SplineScene } from "@/components/ui/robotics-hero/spline-scene";

export default function CleaningRobots() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative md:px-20 px-5 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div className="flex-1 z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text">
            Cleaning Robots
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-xl">
            Intelligent cleaning robots designed to automate and optimize
            maintenance across large facilities with efficiency, precision,
            and consistency.
          </p>

          {/* CTA */}
      
        </div>

        {/* RIGHT 3D */}
        <div className="flex-1 relative h-[700px] max-md:hidden">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-cyan-500/10 blur-3xl -z-10" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-10 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Smart Facility Cleaning
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Cleaning Robots simplify maintenance by automating repetitive
              cleaning tasks in large indoor environments. They use smart
              navigation systems to map spaces and operate independently.
            </p>

            <p className="text-gray-500 mt-4">
              These robots ensure consistent cleanliness while reducing manual
              effort and operational costs.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <p className="text-gray-300">
              ✔ Consistent cleaning performance  
              <br />✔ Reduced labor costs  
              <br />✔ Efficient large-area coverage  
              <br />✔ Smart automation system  
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
            "Autonomous Navigation",
            "Smart Mapping Technology",
            "Obstacle Avoidance",
            "Scheduled Cleaning Cycles",
            "Large Capacity Tanks",
            "Quiet Operation",
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition backdrop-blur-xl"
            >
              <h3 className="text-lg font-medium mb-2">{feature}</h3>
              <p className="text-gray-400 text-sm">
                Designed for efficient, automated, and intelligent cleaning
                solutions.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXTRA SECTION */}
      <section className="px-10 py-20 border-t border-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Smarter Cleaning for Modern Spaces
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          From malls to offices and hospitals, our robots ensure clean,
          hygienic, and well-maintained environments with minimal human effort.
        </p>
      </section>

      {/* CTA */}
      <section className="px-10 py-24 text-center border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-6">
          Automate Your Cleaning Operations
        </h2>

        <p className="text-gray-400 mb-8">
          Improve efficiency and maintain cleanliness with intelligent robots.
        </p>

        <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl font-medium hover:scale-105 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}