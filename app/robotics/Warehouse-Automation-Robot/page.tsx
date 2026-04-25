import Navbar from "@/components/Navbar";
import { SplineScene } from "@/components/ui/robotics-hero/spline-scene";



export default function WarehouseRobotPage() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative md:px-20 px-5 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="flex-1 z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text">
            Warehouse Automation Robot (AMR)
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-xl">
            Next-generation autonomous robots designed to transform warehouse
            logistics with intelligent navigation, real-time decision-making,
            and seamless automation.
          </p>

         
        </div>

        {/* RIGHT 3D */}
        <div className="flex-1 relative h-[700px] max-md:hidden">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl -z-10" />
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="px-10 py-20 ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Intelligent Warehouse Automation
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Our Autonomous Mobile Robots (AMRs) revolutionize warehouse
              operations by intelligently transporting goods across facilities.
              Using AI-powered navigation, these robots dynamically adapt to
              changing environments, eliminating the need for fixed paths or
              manual intervention.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <p className="text-gray-300">
              ✔ Reduce operational costs  
              <br />✔ Increase efficiency & speed  
              <br />✔ 24/7 uninterrupted workflow  
              <br />✔ Smart decision-making AI  
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
            "Obstacle Detection",
            "WMS Integration",
            "Smart Transport",
            "Fleet Management",
            "Real-time Analytics",
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition backdrop-blur-xl"
            >
              <h3 className="text-lg font-medium mb-2">{feature}</h3>
              <p className="text-gray-400 text-sm">
                Advanced AI-powered system ensuring high performance and
                intelligent automation.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-10 py-24 text-center border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Automate Your Warehouse?
        </h2>

        <p className="text-gray-400 mb-8">
          Join the future of logistics with intelligent robotics solutions.
        </p>

        <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-medium hover:scale-105 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}