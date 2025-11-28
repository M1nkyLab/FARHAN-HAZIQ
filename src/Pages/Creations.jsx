import React from "react";
import { motion } from "framer-motion";
import ScrollVelocity from "../Components/ScrollVelocity";

function Creations() {
  // ⭐ Projects Data
    const projects = [
    {
      title: "Pokestellar",
      subtitle: "Pokémon E-Commerce Web Application",
      tech: "HTML5, JavaScript, Tailwind CSS, PHP, MySQL, XAMPP, Git, NPM",
      desc: "Pokémon-themed e-commerce website where users can browse Pokémon cards, view details, and make purchases.",
      link: "https://github.com/M1nkyLab/Pokestellar-website.git",
      image: "/Pokestellar Project.png",
    },
    {
      title: "ParkMate",
      subtitle: "Axiata Arena Smart Parking App",
      tech: "Kotlin, Android Studio, Firebase, XML UI, JavaScript",
      desc: "A smart parking app for Axiata Arena that helps users find available parking spots and view real-time parking updates.",
      link: "https://github.com/M1nkyLab/ParkMate.git",
      image: "/ParkMate Project.jpg",
      fit: "object-contain bg-white",
    },
    {
      title: "MedNot",
      subtitle: "Medication Reminder App (Group Project)",
      tech: "Kotlin, Android Studio, Firebase, XML UI",
      desc: "Manage medication schedules with notifications and dose tracking.",
      link: "https://github.com/M1nkyLab/MedNot.git",
      image: "/Mednot Project.png", 
      fit: "object-contain bg-[#0A0F1B]",
    },
  ];

  // Animation settings
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
    }),
  };

  return (
    <section className="min-h-screen bg-white overflow-y-auto px-6 py-16">
      {/* ⭐ Scrolling Title */}
      <ScrollVelocity
        texts={["MY CREATIONS ★"]}
        velocity={150}
        className="custom-scroll-text text-black"
      />

      {/* ⭐ Project Cards */}
      <div className="mt-16 flex flex-col md:flex-row gap-8 w-full">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-md mx-auto rounded-3xl overflow-hidden bg-[#0A0F1B] border border-black shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Top Preview Image */}
            <div className="h-52 w-full bg-[#0A0F1B]"> {/* Changed bg to match card color */}
              <img
                src={project.image}
                alt={project.title}
                // 👇 UPDATE THIS CLASSNAME
                className={`w-full h-full ${project.fit || "object-cover"}`} 
              />
            </div>

            {/* Bottom Content */}
            <div className="p-6 text-white">
              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.split(",").map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-700/50 rounded-full border border-gray-600"
                  >
                    {t.trim()}
                  </span>
                ))}
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
              {project.subtitle && (
                <h3 className="text-sm text-gray-400 mb-2">{project.subtitle}</h3>
              )}

              {/* Description */}
              <p className="text-gray-300 mb-4">{project.desc}</p>

              {/* View Project */}
              <span className="hover:text-white cursor-pointer text-gray-300">
                View Project →
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Creations;
