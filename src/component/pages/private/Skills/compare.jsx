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
// import Background3D from "../../../common/Animation/backgroudf-3d";

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
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {/* <Background3D/> */}
      <motion.section
        id="skills"
        className="w-full flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-zinc-900 text-white p-6 border-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl lg:mt-0 font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-transparent leading-tight text-center mt-5 w-full lg:text-center m-6 uppercase border-2">
          My Skills
        </h2>

        <div className="flex flex-col gap-6 w-full max-w-6xl justify-center">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="relative bg-accent p-6 lg:h-[15vh] rounded-xl shadow-lg flex flex-col items-start text-left border-2 border-transparent cursor-pointer overflow-hidden w-full z-10 "
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* 🔥 Inner Glowing Border Animation */}
              <motion.div
                className="absolute inset-0 rounded-xl pointer-events-none"
                animate={{
                  borderColor: "#4F46E5", // Border color remains fixed
                }}
                transition={{ duration: 0.3 }}
                style={{
                  borderWidth: "2px",
                  borderStyle: "solid",
                  borderImage:
                    "linear-gradient(90deg, transparent, skyblue, transparent) 1", // Green lighting effect on the border
                  animation: "moveLightBorder 2s linear infinite", // Animation for moving the lighting effect
                }}
              />

              <h3 className="text-2xl lg:mt-3 font-semibold relative z-10">
                {category.name}
              </h3>

              {/* Hover effect for skills */}
              <motion.div
                className="absolute top-0 left-0 h-full bg-gray-800 p-4 rounded-xl shadow-lg flex flex-row gap-6 items-center w-full z-20"
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
                    <span className="text-sm font-medium mt-2">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Skills;
