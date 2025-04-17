import React, { memo } from 'react';

// Project data configuration for easier maintenance
const PROJECTS = [
  { id: 1, title: '1st Project' },
  { id: 2, title: '2nd Project' },
  { id: 3, title: '3rd Project' }
];

// Reusable Project component
const Project = memo(({ title }) => (
  <button className="rounded-3xl bg-[#2D0E45] w-full max-w-3xl h-20 mt-6 flex justify-center items-center text-[#E2D7F4] font-semibold transition-all duration-300 hover:bg-[#470D6B] hover:scale-[1.02] border border-[#6F31A8]/20">
    {title}
  </button>
));

const Work = memo(() => {
  return (
    <section id="work" className="min-h-screen py-24 lg:py-32 px-6 sm:px-8 md:px-12 flex flex-col items-center">
      <div className="max-w-5xl w-full mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-[#E2D7F4]">My Work</h1>

        <div className="space-y-8 w-full">
          {PROJECTS.map(project => (
            <Project key={project.id} title={project.title} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="viewproject.html"
            className="bg-[#2D0E45] text-[#E2D7F4] font-bold py-4 px-8 rounded-xl hover:bg-[#470D6B] transition-all duration-300 hover:scale-105 border border-[#6F31A8]/20"
          >
            All my work
          </a>
        </div>
      </div>
    </section>
  );
});

export default Work;
