import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaCode, FaGamepad, FaMobileAlt, FaDatabase } from "react-icons/fa";
import { div } from "framer-motion/client";

const projects = [
  {
    id: 1,
    title: "Block Game",
    description: "A fun and interactive block game built with React.",
    icon: <FaGamepad className="text-4xl text-[#8686AC]" />,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern portfolio showcasing my projects and skills.",
    icon: <FaCode className="text-4xl text-[#8686AC]" />,
  },
  {
    id: 3,
    title: "E-commerce App",
    description: "A responsive online store built with MEAN stack.",
    icon: <FaMobileAlt className="text-4xl text-[#8686AC]" />,
  },
  {
    id: 4,
    title: "Database Management",
    description: "A scalable backend system for handling large data.",
    icon: <FaDatabase className="text-4xl text-[#8686AC]" />,
  },
];

const Projects = () => {
  const constraintsRef = useRef(null);
  return (
    // <>
    // </>
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-1 text-white"
    >
      {/* Section Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        ref={constraintsRef}
      >
        {projects.map((project) => (
          <div className="radial-gradient(50% 50% at 50% 50%, #121212 0, #000000 100%) p-1 rounded-xl shadow-lg shadow-cyan-500/50">
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-6 bg-[#191919] bg-opacity-60 backdrop-blur-lg rounded-xl text-center flex flex-col items-center"
              dragConstraints={constraintsRef}
            >
              {/* Icon */}
              <div className="mb-4">{project.icon}</div>

              {/* Project Title */}
              <h3 className="text-xl font-semibold text-[#8686AC]">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-300 text-sm sm:text-base">
                {project.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
