import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/components/lib/utils'; // Assuming you have a `cn` utility for classnames
import { SplineScene } from '../robotics-hero/spline-scene';
import { heroData } from '@/app/data/heroData';
 // Assuming shadcn Button component



// Define the props for the component
interface FinancialHeroProps {
  title: React.ReactNode;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl1: string;
  imageUrl2: string;
  className?: string;
}

// Reusable animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 100, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const cardsVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.3,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8 }
  },
};

/**
 * A responsive hero section component with animated text and card images.
 */
export const FinancialHero = ({
  title,
  description,
  buttonLink,
  className,
}: FinancialHeroProps) => {
  // Inline style for the grid background to easily use CSS variables
  const gridBackgroundStyle = {
    backgroundImage:
      'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)',
    backgroundSize: '3rem 3rem',
  };
    const [index, setIndex] = useState(0);
  

  const current = heroData[index];


  return (
    <section
      className={cn(
        'relative w-full overflow-hidden text-foreground z-60',
        className
      )}
    >
      <div
        className="absolute inset-0"
        style={gridBackgroundStyle}
      />
      <div className="absolute inset-0  from-background via-background/80 to-background" />

      <motion.div
        className="relative container mx-auto flex min-h-[80vh] items-center justify-center px-6 py-20 lg:flex-row flex-col gap-12"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left: Text Content */}
        <div className="flex flex-col items-center text-center">
          <motion.h1
            className="hyi-h2 text-5xl tracking-wide mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-2 max-w-xl text-xl hyi-p"
            variants={itemVariants}
          >
            {description}
          </motion.p>
          <motion.div variants={itemVariants} className="mt-8">
            <a href={buttonLink} target="_blank" rel="noopener noreferrer">
              {/* <Button size="lg" className="h-12 px-8 text-base">
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
            </a>
          </motion.div>
        </div>
       

        {/* Right: Card Images */}


        {/* <motion.div
          className="relative lg:w-1/2 h-full w-full flex items-center justify-center"
   
        >
        
          <motion.img
 src={current.image1}             alt="Financial Card Back"
            variants={cardItemVariants}
            whileHover={{ y: -10, rotate: -5, transition: { duration: 0.3 } }}
            className="absolute h-48 md:h-80 rounded-2xl shadow-2xl object-cover transform rotate-[-6deg] translate-x-24"
          />
          
          <motion.img
 src={current.image2}            alt="Financial Card Front"
            variants={cardItemVariants}
            whileHover={{ y: -10, rotate: 5, transition: { duration: 0.3 } }}
            className="absolute h-48 md:h-80 rounded-2xl shadow-2xl object-cover transform rotate-[6deg] -translate-x-16"
          />
         
        </motion.div> */}
      </motion.div>
    </section>
  );
};