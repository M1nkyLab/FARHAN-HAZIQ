import React from 'react';

function Contact() {

  // LINK STYLING:
  // 1. font-poppins: Matches the "Let's Collaborate" font family.
  // 2. font-light: Makes the text thin/elegant (not thick).
  // 3. !text-white: Forces white color.
  const linkStyle = `
    relative 
    inline-block 
    font-poppins
    font-light        /* <--- This makes it "not too thick" */
    !text-white 
    no-underline
    cursor-pointer
    transition-colors 
    duration-300 
    hover:!text-purple-400 
    
    /* Animated Underline */
    after:content-[''] 
    after:absolute 
    after:w-0 
    after:h-[1px]     /* Made underline slightly thinner to match the light text */
    after:bg-purple-400 
    after:left-0 
    after:bottom-0 
    after:transition-all 
    after:duration-300 
    hover:after:w-full
  `;

  return (
    <section className="h-screen px-6 bg-gradient-to-b from-white via-black to-black flex flex-col justify-between overflow-hidden">
      
      {/* Import Poppins with Light (300), Regular (400), and ExtraBold (800) weights */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;800&display=swap');
        .font-poppins { font-family: 'Poppins', sans-serif; }
      `}</style>

      {/* Top Section - Title (Kept Thick/Bold) */}
      <div className="pt-20 font-poppins">
        <h1 className="text-left text-5xl lg:text-7xl font-extrabold text-black tracking-tight">
          Let's Collaborate
        </h1>
      </div>

      {/* Middle Section - Email (Light/Thin) */}
      <div className="flex-grow flex items-center justify-center">
        <a
          href="mailto:syedhaziq457@gmail.com"
          className={`text-2xl lg:text-5xl ${linkStyle}`}
        >
          syedhaziq457@gmail.com
        </a>
      </div>

      {/* Bottom Section - Social Links (Light/Thin) */}
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

    </section>
  );
}

export default Contact;