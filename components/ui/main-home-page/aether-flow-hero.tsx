"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { FinancialHero } from "./content-section";
import { heroData } from "@/app/data/heroData";

// Utility function
const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

const AetherFlowHero = () => {
const canvasRef = useRef<HTMLCanvasElement | null>(null);

useEffect(() => {
const canvas = canvasRef.current!;


const ctx = canvas.getContext("2d");
if (!ctx) return;

let animationFrameId: number;
let particles: Particle[] = [];
const mouse = { x: null as number | null, y: null as number | null, radius: 200 };

// Particle class
class Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;

  constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  draw() {
    ctx?.beginPath();
    ctx?.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    if (ctx) ctx.fillStyle = this.color;
    ctx?.fill();
  }

  update() {
    if (!canvas) return;

    if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
    if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

    if (mouse.x !== null && mouse.y !== null) {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouse.radius + this.size) {
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const force = (mouse.radius - distance) / mouse.radius;

        this.x -= forceDirectionX * force * 5;
        this.y -= forceDirectionY * force * 5;
      }
    }

    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
  }
}

function init() {
  particles = [];
  const numberOfParticles = (canvas.width * canvas.height) / 9000;

  for (let i = 0; i < numberOfParticles; i++) {
    const size = Math.random() * 2 + 1;
    const x = Math.random() * (canvas.width - size * 2);
    const y = Math.random() * (canvas.height - size * 2);
    const directionX = Math.random() * 0.4 - 0.2;
    const directionY = Math.random() * 0.4 - 0.2;
    const color = "rgba(191, 128, 255, 0.8)";

    particles.push(new Particle(x, y, directionX, directionY, size, color));
  }
}

const resizeCanvas = () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
};

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const connect = () => {
  for (let a = 0; a < particles.length; a++) {
    for (let b = a; b < particles.length; b++) {
      const dx = particles[a].x - particles[b].x;
      const dy = particles[a].y - particles[b].y;
      const distance = dx * dx + dy * dy;

      if (distance < (canvas.width / 7) * (canvas.height / 7)) {
        const opacityValue = 1 - distance / 20000;

        if (ctx) {
          ctx.strokeStyle =
            mouse.x && Math.sqrt(dx * dx + dy * dy) < mouse.radius
              ? `rgba(200,150,255,${opacityValue})`
              : `rgba(200,150,255,${opacityValue})`;

          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.stroke();
        }
      }
    }
  }
};

const animate = () => {
  animationFrameId = requestAnimationFrame(animate);

  if (!ctx || !canvas) return;

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => p.update());
  connect();
};

const handleMouseMove = (e: MouseEvent) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

const handleMouseOut = () => {
  mouse.x = null;
  mouse.y = null;
};

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("mouseout", handleMouseOut);

init();
animate();

return () => {
  window.removeEventListener("resize", resizeCanvas);
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseout", handleMouseOut);
  cancelAnimationFrame(animationFrameId);
};


}, []);

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },

  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2 + 0.5,
      duration: 0.8,
      ease: [0.42, 0, 0.58, 1],
    },
  }),
};

const [index, setIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % heroData.length);
  }, 3000); 

  return () => clearInterval(interval);
}, []);

const current = heroData[index];

return ( 
<div className="relative w-full flex flex-col overflow-hidden">
   <canvas ref={canvasRef} className="absolute top-12 left-0 w-full h-full" />


  <div className="relative z-10 p-6">
<motion.div
  key={index}
  custom={3}
  variants={fadeUpVariants}
  initial="hidden"
  animate="visible"
>
  <FinancialHero
    title={current.title}
    description={current.description}
    buttonText="Get Started"
    buttonLink="#"
    imageUrl1={current.image1}
    imageUrl2={current.image2}
  />
</motion.div>
  </div>
</div>


);
};

export default AetherFlowHero;
