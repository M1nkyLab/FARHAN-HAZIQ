import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import '../App.css';
import LiquidEther from '../Components/LiquidEther.jsx';

function App() {
  const ref = useRef(null);
  
  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effects: 
  // Text moves down slower than scroll (0 -> 150px)
  // Opacity fades out as you scroll down (1 -> 0)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div ref={ref}>
      {/* SECTION 1: HERO */}
      <section className='relative h-screen w-full overflow-hidden bg-black'>
          
          {/* LAYER 1: Fluid Animation Background */}
          <div className="absolute inset-0 z-0">
            <LiquidEther
              colors={[ '#FFFFFF', '#F8F8F8', '#EFEFEF' ]}
              mouseForce={20}
              cursorSize={100}
              isViscous={false}
              viscous={30}
              iterationsViscous={32}
              iterationsPoisson={32}
              resolution={0.5}
              isBounce={false}
              autoDemo={true}
              autoSpeed={0.5}
              autoIntensity={2.2}
              takeoverDuration={0.25}
              autoResumeDelay={3000}
              autoRampDuration={0.6}
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 z-0 bg-black/30 pointer-events-none"></div>

          {/* LAYER 2: Main Content with Parallax */}
          <motion.div 
            style={{ y, opacity }}
            className="relative z-10 h-full flex flex-col justify-center items-center pointer-events-none"
          >
            
            {/* Main Text */}
            <h1 className="text-white font-bold text-4xl md:text-7xl lg:text-9xl whitespace-nowrap drop-shadow-lg">
              FARHAN HAZIQ
            </h1>

            {/* Scroll Down Arrow */}
            <div className="absolute bottom-10 pointer-events-auto cursor-pointer hover:scale-110 transition-transform">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={2} 
                stroke="currentColor" 
                className="w-10 h-10 md:w-12 md:h-12 text-white opacity-80"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </div>

          </motion.div>

      </section>

    </div>
  )
}

export default App