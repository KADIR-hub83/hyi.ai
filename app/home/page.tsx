import React from 'react'
import { HeroParallax } from "@/components/ui/hero-parallax";
import { products } from "@/app/data/products";

const Mainhome = () => {
  return (
        <main className="bg-black">
      <HeroParallax products={products} />
    </main>
  )
}

export default Mainhome