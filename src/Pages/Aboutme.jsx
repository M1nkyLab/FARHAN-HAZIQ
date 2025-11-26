import React from "react";
import ScrollVelocity from "../Components/ScrollVelocity";

function Aboutme() {
    const velocity = 150; //scroll speed

  return (
    <section className="h-screen bg-white flex items-center justify-center">
        <p className="text-center m-2 text-2xl lg:text-4xl text text-black font-bold">
          Hi, I'm <span className="hover:underline hover:text-purple-700 relative inline-block">Farhan Haziq</span>, but you can call me <span className="hover:underline hover:text-purple-700">Haziq</span>.<br />
          I'm a student with a growing passion for frontend development and building
          modern web experiences.
        </p>
    </section>
  )
}

export default Aboutme
