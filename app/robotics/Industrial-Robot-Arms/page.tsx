import Navbar from "@/components/Navbar";
import { SplineScene } from "@/components/ui/robotics-hero/spline-scene";

export default function IndustrialRobotArms() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative md:px-20 px-5 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div className="flex-1 z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text">
            Industrial Robot Arms
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-xl">
            High-performance robotic arms designed for precision, speed, and
            reliability in modern manufacturing environments.
          </p>

          {/* CTA */}

        </div>

        {/* RIGHT 3D */}
        <div className="flex-1 relative h-[700px] max-md:hidden">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-blue-500/10 blur-3xl -z-10" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-10 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Precision Manufacturing Automation
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Industrial Robot Arms are engineered to automate complex and
              repetitive tasks with unmatched accuracy. These systems enhance
              productivity while ensuring consistent quality across production
              lines.
            </p>

            <p className="text-gray-500 mt-4">
              With programmable control and flexible configurations, they adapt
              easily to changing manufacturing needs.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <p className="text-gray-300">
              ✔ High precision & repeatability  
              <br />✔ Faster production cycles  
              <br />✔ Reduced human error  
              <br />✔ Scalable automation systems  
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
            "High Precision Performance",
            "Multi-Axis Movement",
            "Production Line Integration",
            "Custom End-Effectors",
            "Safety & Efficiency",
            "Programmable Automation",
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition backdrop-blur-xl"
            >
              <h3 className="text-lg font-medium mb-2">{feature}</h3>
              <p className="text-gray-400 text-sm">
                Engineered for industrial-grade performance and reliability.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="px-10 py-20 border-t border-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Applications
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

          {[
            "Assembly & Manufacturing Lines",
            "Welding & Fabrication",
            "Packaging & Palletizing",
            "Quality Inspection Systems",
          ].map((app, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition"
            >
              <h3 className="text-lg font-semibold">{app}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-10 py-24 text-center border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-6">
          Power Your Production with Automation
        </h2>

        <p className="text-gray-400 mb-8">
          Upgrade your manufacturing with intelligent robotic systems.
        </p>

        <button className="px-8 py-4 bg-gradient-to-r from-gray-400 to-blue-500 rounded-xl font-medium hover:scale-105 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}