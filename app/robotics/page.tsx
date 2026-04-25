import { SplineScene } from "@/components/ui/robotics-hero/spline-scene";
import Navbar from "../../components/Navbar";
import Image from "next/image";

export default function Robotics() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />


      <div className="p-10">
            <div className="flex-1 relative ">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
      </div>
    </div>
  );
}