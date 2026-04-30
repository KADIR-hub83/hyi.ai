"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import CustomButton from "../shared/customButton";
import { ShimmerButton } from "../shared/customShimmerButton";

type Product = {
  id?: string | number;
  title: string;
  link: string;
  thumbnail: string;
};

type HeroParallaxProps = {
  products: Product[];
};

type ProductCardProps = {
  product: Product;
  translate: any;
};

export const HeroParallax = ({ products }: HeroParallaxProps) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);

  const ref = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = {
    stiffness: 300,
    damping: 30,
    bounce: 100,
  };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );

  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );

  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );

  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );

  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

   return (
    <section
      ref={ref}
      className="relative h-[250vh] overflow-hidden bg-black py-24 [perspective:1200px]"
    >
      {/* Premium Background */}
      <div className="absolute inset-0">
        <img
          src="/bg-hero.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#7c3aed_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#2563eb_0%,transparent_35%)] opacity-50" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <Header />

      <motion.div
        style={{
          rotateX,
          rotateZ,
          y: translateY,
          opacity,
        }}
        className="relative z-10 mt-20 space-y-10"
      >
        {/* Row 1 */}
        <motion.div className="flex flex-row-reverse gap-8">
          {firstRow.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div className="flex gap-8">
          {secondRow.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              translate={translateXReverse}
            />
          ))}
        </motion.div>

        {/* Row 3 */}
        <motion.div className="flex flex-row-reverse gap-8">
          {thirdRow.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export const Header = () => {
  return (
    <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
       <ShimmerButton className="px-16" align="center" >
 AI Cloud
        </ShimmerButton> 
   

      <h1 className="mt-6 hyi-h2">
        Powerful Digital Solutions For Modern Business
      </h1>

      <p className="max-w-3xl hyi-p mx-auto">
        Explore AI, Cloud, Automation, Analytics and enterprise-ready platforms
        crafted to accelerate growth, efficiency and innovation.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: ProductCardProps) => {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -15, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group relative h-[300px] w-[460px] shrink-0 overflow-hidden rounded-3xl border border-white/10"
    >
      {/* Image */}
      <Link href={product.link} className="block h-full w-full">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </Link>

      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black/55 group-hover:bg-black/35 transition duration-500" /> */}

      {/* Purple Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_bottom,#7c3aed_0%,transparent_55%)]" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end p-7">
        <h2 className="hyi-h2 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">
          {product.title}
        </h2>

        <p className="mt-2 hyi-p opacity-0 group-hover:opacity-100 transition duration-500 delay-75">
          Smart enterprise solution built for speed, automation and scale.
        </p>

  <Link
    href={product.link}
    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-violet-300 opacity-0 group-hover:opacity-100 hover:text-white transition duration-500 delay-100"
  >
    Explore Solution

    <ArrowRight
      size={16}
      className="transition group-hover:translate-x-1"
    />
  </Link>

      </div>
    </motion.div>
  );
};