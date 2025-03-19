import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    name: "Languages I Craft With",
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
    name: "Frontend Frameworks I Love",
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
    name: "My Backend Powerhouse",
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
    name: "Databases That Fuel My Projects",
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.section
      id="skills"
      className="w-full flex flex-col items-center justify-around min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-transparent leading-tight text-center mt-5 w-full uppercase">
        My Skills
      </h2>

      <div className="flex flex-col gap-6 w-full max-w-6xl justify-center">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className={`relative bg-accent p-6 lg:h-[15vh] rounded-xl shadow-lg flex flex-col items-start text-left border-transparent z-10 cursor-pointer overflow-hidden w-full transition-all duration-500 ease-in-out justify-center ${
              isMobile && hoveredCategory === index ? "h-auto" : "h-[15vh]"
            }`}
            onMouseEnter={() => !isMobile && setHoveredCategory(index)}
            onMouseLeave={() => !isMobile && setHoveredCategory(null)}
            onClick={() =>
              isMobile &&
              setHoveredCategory(hoveredCategory === index ? null : index)
            }
          >
            {/* 🔥 Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-xl pointer-events-none justify-between"
              animate={{ borderColor: "#4F46E5" }}
              transition={{ duration: 0.3 }}
              style={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderImage:
                  "linear-gradient(90deg, transparent, skyblue, transparent) 1",
                animation: "moveLightBorder 2s linear infinite",
              }}
            />

            {/* 🔥 Category Title */}
            <motion.h3
              className={`text-2xl font-semibold relative transition-all ${
                isMobile ? "z-10 opacity-0" : "z-20"
              }`}
              animate={{
                marginBottom: isMobile && hoveredCategory === index ? 10 : 0,
                opacity: isMobile && hoveredCategory === index ? 0 : 1,
              }}
            >
              {category.name}
            </motion.h3>

            {/* 🔥 Skill List Animation */}
            <AnimatePresence>
              {hoveredCategory === index && (
                <motion.div
                  className={`flex ${
                    isMobile
                      ? "flex-col"
                      : "absolute top-0 left-0 flex-row gap-6"
                  } bg-gradient-to-r from-gray-900 to-black p-4 rounded-xl shadow-lg items-center w-full z-20`}
                  {...(isMobile
                    ? {
                        initial: { height: 0, opacity: 0 },
                        animate: { height: "auto", opacity: 1 },
                        exit: { height: 0, opacity: 0 },
                      }
                    : {
                        initial: { x: "-100%", opacity: 0 },
                        animate: { x: "0%", opacity: 1 },
                        exit: { x: "-100%", opacity: 0 },
                      })}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <div className="flex flex-wrap gap-6 justify-between z-40">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="flex flex-col items-center"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * skillIndex }}
                      >
                        {skill.icon}
                        <span className="text-sm font-medium mt-2">
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
