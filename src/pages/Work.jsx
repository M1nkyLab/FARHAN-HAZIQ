import React, { memo } from 'react';

// Project data configuration for easier maintenance
const PROJECTS = [
  { id: 1, title: '1st Project' },
  { id: 2, title: '2nd Project' },
  { id: 3, title: '3rd Project' }
];

// Reusable Project component
const Project = memo(({ title }) => (
  <button className="rounded-xl w-72 h-16 mb-8 flex justify-center items-center text-[#E2D7F4] text-xl font-semibold transition-all duration-300 hover:bg-[#6E42B0] hover:scale-[1.02]">
    {title}
  </button>
));

const Work = memo(() => {
  return (
    <section id="work" className="min-h-screen py-24 lg:py-32 px-6 sm:px-8 md:px-12 flex flex-col">
      <div className="max-w-6xl w-full flex flex-col justify-center h-full ">
        <div className="flex justify-between items-center ">
          <div className="grid grid-cols-1 gap-8">
            {PROJECTS.map(project => (
              <Project key={project.id} title={project.title} />
            ))}
          </div>
          
          <div className="flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-white">My Work</h1>
              <a
                href="viewproject.html"
                className="bg-[#5F3A9A] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#6E42B0] uppercase text-sm">
                View Work
              </a>
          </div>

        </div>
      </div>
    </section>
  );
});

export default Work;
