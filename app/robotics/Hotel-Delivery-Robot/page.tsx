import Navbar from "@/components/Navbar";
import { SplineScene } from "@/components/ui/robotics-hero/spline-scene";

export default function HotelDeliveryRobot() {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative md:px-20 px-5 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT */}
        <div className="flex-1 z-10">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-b from-white to-gray-500 text-transparent bg-clip-text">
            Hotel Delivery Robot
          </h1>

          <p className="text-gray-400 mt-6 text-lg max-w-xl">
            Smart hospitality robots designed to deliver room service, amenities,
            and packages directly to guest rooms with speed, safety, and a modern
            touch.
          </p>

          {/* CTA */}
         
        </div>

        {/* RIGHT 3D */}
        <div className="flex-1 relative h-[700px] max-md:hidden">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl -z-10" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-10 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Smart Hospitality Automation
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Hotel Delivery Robots elevate guest experience by providing fast,
              efficient, and contactless delivery services. From room service to
              essential amenities, these robots ensure seamless operations within
              hotel environments.
            </p>

            <p className="text-gray-500 mt-4">
              With intelligent navigation and secure compartments, they deliver
              items safely while enhancing the hotel’s modern appeal.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <p className="text-gray-300">
              ✔ Faster guest service  
              <br />✔ Contactless delivery  
              <br />✔ Reduced staff workload  
              <br />✔ Enhanced guest experience  
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
            "Smart Indoor Navigation",
            "Multi-Floor Elevator Integration",
            "Secure Storage Compartments",
            "Guest Notification System",
            "Contactless Delivery",
            "Smart Route Optimization",
          ].map((feature, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition backdrop-blur-xl"
            >
              <h3 className="text-lg font-medium mb-2">{feature}</h3>
              <p className="text-gray-400 text-sm">
                Designed to enhance hospitality services with automation and
                intelligence.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXTRA SECTION */}
      <section className="px-10 py-20 border-t border-gray-800 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Redefining Guest Experience
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          Our robots bring a futuristic touch to hotels by combining convenience,
          safety, and technology — making every guest interaction smooth and
          memorable.
        </p>
      </section>

      {/* CTA */}
      <section className="px-10 py-24 text-center border-t border-gray-800">
        <h2 className="text-4xl font-bold mb-6">
          Upgrade Your Hospitality Services
        </h2>

        <p className="text-gray-400 mb-8">
          Deliver smarter, faster, and better experiences to your guests.
        </p>

        <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-medium hover:scale-105 transition">
          Get Started
        </button>
      </section>
    </div>
  );
}