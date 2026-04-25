import Navbar from "@/components/Navbar";
import { SplineScene } from "@/components/ui/robotics-hero/spline-scene";

export default function RestaurantWaiterRobot() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative md:px-20 px-5 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div className="flex-1 z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text">
            Restaurant Waiter Robot
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-xl">
            Smart service robots designed to deliver food quickly and enhance
            the dining experience with modern automation and interactive
            features.
          </p>

          {/* CTA */}

        </div>

        {/* RIGHT 3D */}
        <div className="flex-1 relative h-[700px] max-md:hidden">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 blur-3xl -z-10" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-10 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Smart Dining Automation
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Restaurant Waiter Robots assist staff by delivering food from the
              kitchen to tables efficiently. They navigate busy dining areas
              with ease, ensuring smooth service and reducing wait times.
            </p>

            <p className="text-gray-500 mt-4">
              These robots not only improve operational efficiency but also
              create a unique and engaging experience for customers.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <p className="text-gray-300">
              ✔ Faster service delivery  
              <br />✔ Reduced staff workload  
              <br />✔ Enhanced customer experience  
              <br />✔ Modern restaurant appeal  
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
            "Multi-tray Serving System",
            "Intelligent Navigation",
            "Interactive Voice Display",
            "Collision Avoidance Sensors",
            "Custom Branding Options",
            "Smart Table Mapping",
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition backdrop-blur-xl"
            >
              <h3 className="text-lg font-medium mb-2">{feature}</h3>
              <p className="text-gray-400 text-sm">
                Advanced robotics designed for efficient and seamless restaurant
                service.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-10 py-20 border-t border-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Benefits
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">

          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-400 text-sm">
              Serve food quickly and reduce waiting time for customers.
            </p>
          </div>

          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold mb-2">Less Workload</h3>
            <p className="text-gray-400 text-sm">
              Reduce pressure on staff and improve service efficiency.
            </p>
          </div>

          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold mb-2">Unique Experience</h3>
            <p className="text-gray-400 text-sm">
              Attract customers with futuristic dining technology.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="px-10 py-24 text-center border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-6">
          Transform Your Restaurant Experience
        </h2>

        <p className="text-gray-400 mb-8">
          Upgrade your service with intelligent robotic waiters.
        </p>

        <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl font-medium hover:scale-105 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}