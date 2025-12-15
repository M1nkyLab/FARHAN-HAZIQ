import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

function Aboutme() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Content moves slightly faster/slower than scroll to create depth
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  // Opacity fade in
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  const animatedUnderlineClass = `
    relative 
    inline-block 
    cursor-pointer
    font-extrabold
    text-gray-900
    transition-colors 
    duration-300 
    hover:text-purple-600
    after:content-[''] 
    after:absolute 
    after:w-0 
    after:h-[4px] 
    after:bg-purple-600 
    after:left-0 
    after:bottom-[2px] 
    after:transition-all 
    after:duration-300 
    hover:after:w-full
  `;

  return (
    <section ref={ref} className="relative h-screen w-full bg-white flex flex-col items-center justify-center px-6 overflow-hidden">
      
      {/* --- FONT IMPORT --- */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* --- CONTENT --- */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-4xl w-full text-center space-y-10 font-poppins"
      >
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
          Hello, I'm{" "}
          <span className={animatedUnderlineClass}>
            Farhan Haziq
          </span>
          <br />
          <span className="text-2xl md:text-4xl lg:text-5xl font-medium text-gray-400 mt-4 block">
            but you can call me{" "}
            <span className={animatedUnderlineClass}>
              Haziq
            </span>
            .
          </span>
        </h1>

        <div className="w-16 h-1 bg-gray-200 mx-auto rounded-full"></div>

        <p className="mx-auto max-w-2xl text-lg md:text-2xl text-gray-600 leading-relaxed font-light">
          I'm a Front-end and software development enthusiast, passionate about crafting modern web and mobile applications. 
          I love exploring new technologies and bringing creative ideas to life.
        </p>

      </motion.div>
    </section>
  );
}

export default Aboutme;