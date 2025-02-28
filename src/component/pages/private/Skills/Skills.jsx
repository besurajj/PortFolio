import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaNodeJs, FaReact, FaDocker, FaBootstrap } from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiShadcnui,
  SiNextdotjs,
  SiMysql,
} from "react-icons/si";

const iconClass = "text-6xl"; // Define a constant for icon size and styling

const categories = [
  {
    name: "Languages",
    skills: [
      {
        name: "JavaScript",
        icon: <FaJs className={`text-yellow-400 ${iconClass}`} />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className={`text-blue-500 ${iconClass}`} />,
      },
    ],
  },
  {
    name: "Frontend",
    skills: [
      {
        name: "React",
        icon: <FaReact className={`text-blue-400 ${iconClass}`} />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className={`text-green-400 ${iconClass}`} />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap className={`text-purple-500 ${iconClass}`} />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className={`text-blue-300 ${iconClass}`} />,
      },
      {
        name: "ShadCN UI",
        icon: <SiShadcnui className={`text-blue-300 ${iconClass}`} />,
      },
    ],
  },
  {
    name: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className={`text-green-500 ${iconClass}`} />,
      },
      {
        name: "Express",
        icon: <SiExpress className={`text-white bg-gray-800 ${iconClass}`} />,
      },
    ],
  },
  {
    name: "Database",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className={`text-green-600 ${iconClass}`} />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className={`text-blue-300 ${iconClass}`} />,
      },
      {
        name: "Docker",
        icon: <FaDocker className={`text-red-500 ${iconClass}`} />,
      },
    ],
  },
];

const Skills = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <motion.section
      id="skills"
      className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-center mb-6">My Skills</h2>

      <div className="flex flex-col gap-6 w-full max-w-6xl max-h- justify-center">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-accent p-6 lg:h-[15vh] rounded-xl shadow-lg flex flex-col items-start text-left border-2 cursor-pointer overflow-hidden relative w-full"
            onMouseEnter={() => setHoveredCategory(index)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <h3 className="text-2xl lg:mt-3 font-semibold">{category.name}</h3>

            <motion.div
              className="absolute top-0 left-0 h-full bg-gray-800 p-4 rounded-xl shadow-lg flex flex-row gap-6 items-center w-full"
              initial={{ x: "-100%", opacity: 0 }}
              animate={{
                x: hoveredCategory === index ? "0%" : "-100%",
                opacity: hoveredCategory === index ? 1 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex flex-col items-center">
                  {skill.icon}
                  <span className="text-sm font-medium mt-2">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
