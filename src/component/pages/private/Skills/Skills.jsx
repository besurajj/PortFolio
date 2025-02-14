import React from "react";
import { motion } from "framer-motion";
import { FaJs, FaNodeJs, FaReact, FaAngular, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-3xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-3xl" /> },
  { name: "Express", icon: <SiExpress className="text-white text-3xl bg-gray-800 rounded p-1" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-3xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-3xl" /> },
  { name: "Angular", icon: <FaAngular className="text-red-500 text-3xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300 text-3xl" /> },
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-center mb-6">My Skills</h2>
      
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-accent flex flex-col items-center gap-2 p-4 rounded-xl shadow-lg w-32 hover:scale-110 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            {skill.icon}
            <span className="text-sm font-semibold">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
