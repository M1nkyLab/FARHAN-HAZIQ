import React from "react";

function Aboutme() {
  // We define a reusable class string to keep the JSX clean
  // 1. relative: allows absolute positioning of the underline
  // 2. after:w-0 -> hover:after:w-full: This animates the width from 0% to 100%
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

  return (
    <section className="h-screen bg-white flex items-center justify-center">
      <p className="text-center m-2 text-2xl lg:text-4xl text-black font-bold leading-relaxed">
        Hi, I'm{" "}
        <span className={animatedUnderlineClass}>
          Farhan Haziq
        </span>
        , but you can call me{" "}
        <span className={animatedUnderlineClass}>
          Haziq
        </span>
        .<br />
        I'm a student with a growing passion for frontend development and building
        modern web experiences.
      </p>
    </section>
  );
}

export default Aboutme;