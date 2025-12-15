import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

function Tools() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // Data for Languages
  const languages = [
    { name: 'HTML', src: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg' },
    { name: 'JavaScript', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'PHP', src: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' },
  ];

  // Data for Tools
  const tools = [
    { name: 'React', src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Tailwind CSS', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'Node.js', src: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Firebase', src: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' },
    { name: 'Figma', src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
    { name: 'Git', src: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg' },
  ];

  // Duplicate arrays to ensure seamless looping
  const seamlessLanguages = [...languages, ...languages, ...languages, ...languages, ...languages, ...languages, ...languages, ...languages]; 
  const seamlessTools = [...tools, ...tools, ...tools, ...tools];

  return (
    <section ref={ref} className="min-h-[40vh] bg-white flex flex-col items-center justify-center gap-8 md:gap-12 overflow-hidden py-10 md:py-16">
      
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>

      {/* Languages Section - Left to Right */}
      <motion.div style={{ y }} className="w-full max-w-6xl px-4">
        <div className="relative w-full overflow-hidden mask-gradient">
          <div className="flex w-max gap-6 md:gap-12 animate-scroll-right hover:pause">
            {seamlessLanguages.map((lang, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center">
                <img
                  src={lang.src}
                  alt={lang.name}
                  title={lang.name}
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tools Section - Right to Left */}
      <motion.div style={{ y }} className="w-full max-w-6xl px-4">
        <div className="relative w-full overflow-hidden mask-gradient">
          <div className="flex w-max gap-6 md:gap-12 animate-scroll-left hover:pause">
            {seamlessTools.map((tool, index) => (
              <div key={index} className="flex-shrink-0 flex items-center justify-center">
                <img
                  src={tool.src}
                  alt={tool.name}
                  title={tool.name}
                  className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

    </section>
  );
}

export default Tools;