import React from 'react';

const animatedUnderlineClass = `
    relative 
    inline-block 
    cursor-pointer
    transition-colors 
    duration-300 
    hover:text-purple-700 
    after:content-[''] 
    after:absolute 
    after:w-0 
    after:h-[2px] 
    after:bg-purple-700 
    after:left-0 
    after:bottom-0 
    after:transition-all 
    after:duration-300 
    hover:after:w-full
  `;

function Contact() {
  return (
    <section className="h-screen px-6 bg-gradient-to-b from-white via-black to-black flex flex-col justify-between">

      {/* Top Section - Background starts white, so text is black */}
      <div className="pt-20">
        <h1 className="text-left text-5xl lg:text-7xl font-bold text-black">
          Let's Collaborate
        </h1>
      </div>

      {/* Middle Section - Background is black, text is white */}
      <div className="flex-grow flex items-center justify-center">
        <a
          href="mailto:syedhaziq457@gmail.com"
          className="text-2xl lg:text-5xl text-center text-white hover:text-gray-300 transition-colors"
        >
          syedhaziq457@gmail.com
        </a>
      </div>

      {/* Bottom Section - Background is black, text is white */}
      <div className="flex w-full pb-10 text-white">
        <a 
          href="https://github.com/M1nkyLab" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`w-full text-2xl lg:text-4xl text-center py-4 hover:text-gray-300 transition-colors ${animatedUnderlineClass}`}
        >
          Github
        </a>

        <a 
          href="https://www.linkedin.com/in/syed-farhan-haziq-886a41345/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`w-full text-2xl lg:text-4xl text-center py-4 hover:text-gray-300 transition-colors ${animatedUnderlineClass}`}
        >
          Linkedin
        </a>

        <a 
          href="https://drive.google.com/file/d/158C7md3zv7ljCXM5k_CfkYDp9Yem1rKb/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`w-full text-2xl lg:text-4xl text-center py-4 hover:text-gray-300 transition-colors ${animatedUnderlineClass}`}
        >
          Resume
        </a>
      </div>

    </section>
  );
}

export default Contact;