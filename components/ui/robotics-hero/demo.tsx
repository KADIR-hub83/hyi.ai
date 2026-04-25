'use client'

import { SplineScene } from "@/components/ui/robotics-hero/spline-scene";
import { Card } from "@/components/ui/robotics-hero/card"
import { Spotlight } from "@/components/ui/robotics-hero/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-screen bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Robotics Solutions
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
           Automation is transforming the way businesses operate. Our robotic solutions are designed to help organizations work smarter, faster, and more efficiently. By combining advanced robotics, artificial intelligence, and smart navigation systems, we create robots that support daily operations in industries such as logistics, healthcare, hospitality, manufacturing, and commercial facilities.
          </p>
          <p className="mt-4 text-neutral-300 max-w-lg text-xs">
          From warehouse automation to service delivery robots, our technologies help businesses reduce operational costs, improve accuracy, and enhance overall productivity.
          </p>
        </div>

        {/* Right content */}
        <div className="flex-1 relative ">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}