import React, { memo } from 'react';

const AboutMe = memo(() => {
  return (
    <section
      id="aboutme"
      className="min-h-screen py-24 lg:py-32 relative flex flex-col px-6 sm:px-8 md:px-12 lg:px-24"
    >
      <div className="flex items-center justify-between h-full">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#E2D7F4] mb-12">
            About Haziq
          </h1>
          <p className="text-[#A291BB] text-lg mb-6 font-bold">
            Hey, I'm Haziq! I'm a student who's into front-end dev and design. I started learning it back in school and just got hooked. Right now I'm exploring UI/UX and building websites as I go—still learning, but really enjoying the ride.
          </p>
        </div>

        <div className="flex justify-center items-center border-2 border-[#A291BB] rounded-full w-64 h-64">
          <img src="https://i.ibb.co/0r00000/haziq.png" alt="Haziq" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
