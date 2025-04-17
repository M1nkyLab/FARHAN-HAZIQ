import React, { memo } from 'react';

const AboutMe = memo(() => {
  return (
    <section
      id="aboutme"
      className="min-h-screen py-24 lg:py-32 flex justify-center items-center flex-col px-6 sm:px-8 md:px-12 lg:px-24 relative"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#E2D7F4] mb-12">
        About Haziq
      </h1>
      <div className="max-w-4xl mx-auto text-[#A291BB] text-lg">
        <p className="mb-6">
          Add your personal description here. Talk about your background, skills, and what drives you.
        </p>
        <p className="mb-6">
          You can include your experience, education, and any other relevant information to help visitors get to know you better.
        </p>
      </div>
    </section>
  );
});

export default AboutMe;
