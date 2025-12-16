import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });

  // Items move up as you scroll down
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  const linkStyle = `
    relative 
    inline-block 
    font-poppins
    !text-white 
    no-underline
    cursor-pointer
    transition-colors 
    duration-300 
    
    after:content-[''] 
    after:absolute 
    after:w-0 
    after:h-[1px] 
    after:bg-white 
    after:left-0 
    after:bottom-0 
    after:transition-all 
    after:duration-300 
    hover:after:w-full
  `;

  return (
    <section ref={ref} className="h-screen px-6 bg-gradient-to-b from-white via-black to-black flex flex-col justify-between overflow-hidden">
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;800&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>

      <motion.div style={{ y, opacity }} className="h-full flex flex-col justify-between">
        
        {/* Middle Section - Email */}
        <div className="flex-grow flex items-center justify-center">
          <a
            href="mailto:syedhaziq457@gmail.com"
            className={`text-2xl lg:text-8xl font-poppins !font-[600] ${linkStyle}`}
          >
            syedhaziq457@gmail.com
          </a>
        </div>

        {/* Bottom Section - Social Links */}
        <div className="flex w-full pb-10 gap-4">
          <a 
            href="https://github.com/M1nkyLab" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`w-full text-center text-2xl lg:text-4xl py-4 ${linkStyle}`}
          >
            Github
          </a>

          <a 
            href="https://www.linkedin.com/in/syed-farhan-haziq-886a41345/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`w-full text-center text-2xl lg:text-4xl py-4 ${linkStyle}`}
          >
            Linkedin
          </a>

          <a 
            href="https://drive.google.com/file/d/1tztWLKc-R-AuMOKRnGhoYYoTVawb-g2C/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`w-full text-center text-2xl lg:text-4xl py-4 ${linkStyle}`}
          >
            Resume
          </a>
        </div>
      </motion.div>

    </section>
  );
}

export default Contact;