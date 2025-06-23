import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCode,
  FaGamepad,
  FaMobileAlt,
  FaDatabase,
  FaTimes,
  FaInfoCircle,
  FaCat,
  FaLayerGroup,
  FaRobot,
} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Troller Cat",
    description:
      "A blockchain-integrated gaming platform with secure authentication and reward system.",
    features: [
      "User authentication (OTP verification)",
      "Guest mode with point syncing",
      "Dashboard with game selection",
      "Leaderboard tracking",
      "Two interactive web games",
      "Reward token conversion system",
      "Socket For Real-Time Points Syncing",
      "Maintainance Mode",
      "Reown wallet integration",
      "Admin Panel For all user records and Apply Maintainance On Platform",
      "MoneTag Ads",
    ],
    platform: "Web Gaming Platform",
    technologies: ["React", "Node.js", "Web3.js", "Firebase Auth", "MySql"],
    icon: <FaCat className="text-4xl text-[#8686AC]" />,
  },
  {
    id: 2,
    title: "Game-Chian",
    description:
      "A multi-game platform with 7 authentication providers and real-time features.",
    features: [
      "7 login methods: Wallet, Google, Apple, Telegram, Twitch, Steam, Discord & Email",
      "Guest login option",
      "3 distinct web games",
      "Real-time points via Socket.io",
      "Global leaderboard system",
      "HOC architecture",
      "Admin Panel with user analytics",
    ],
    platform: "Web Gaming Platform",
    technologies: [
      "React",
      "Tailwind CSS",
      "Web3.js (Wallet)",
      "Firebase Auth (Google/Apple/Email)",
      "Passport.js (Telegram/Twitch/Steam/Discord)",
      "Socket.io",
      "Node.js",
      "MySql",
    ],
    icon: <FaGamepad className="text-4xl text-[#8686AC]" />,
  },
  {
    id: 3,
    title: "Web3 Telegram Games",
    description:
      "A collection of blockchain-integrated mini games with reward mechanics.",
    features: [
      "Reown wallet integration",
      "Points-to-token conversion",
      "Daily streak rewards",
      "Maze adventure game",
      "Probability-based spin wheel",
      "Platform referral rewards",
    ],
    platform: "Telegram Web App & Mobile",
    technologies: [
      "React.js",
      "Telegram WebApp API",
      "Web3.js",
      "Node.js",
      "Solidity (Smart Contracts)",
      "MySql",
    ],
    icon: <FaMobileAlt className="text-4xl text-[#8686AC]" />,
  },
  {
    id: 4,
    title: "EduStream Platform",
    description:
      "A comprehensive learning management system with role-based content management.",
    features: [
      "Three-tier role system (Admin/Contributor/User)",
      "Video content management",
      "Category-based organization",
      "User watchlists",
      "Downloadable content",
      "Approval workflow",
      "Performance analytics",
    ],
    platform: "Web Application",
    technologies: [
      "React.js (Frontend)",
      "Node.js (Backend)",
      "MySql (Database)",
      "Docker (Containerization)",
      "AWS S3 (Video Storage)",
    ],
    icon: <FaLayerGroup className="text-4xl text-[#8686AC]" />,
  },
  {
    id: 5,
    title: "Gemini AI Chatbot",
    description:
      "An intelligent conversational AI assistant powered by Google's Gemini API",
    features: [
      "Real-time chat interface",
      "Gemini API integration",
      "Context-aware responses",
      "Markdown & code formatting",
      "Conversation history",
      "Responsive design",
      "Rate limiting",
    ],
    platform: "Web Application",
    technologies: ["React.js", "Node.js", "Gemini API", "Tailwind CSS"],
    icon: <FaRobot className="text-4xl text-[#8686AC]" />,
  },
];

const Projects = () => {
  const constraintsRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-white"
    >
      {/* Section Title */}
      {/* <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12"
      >
        My Projects
      </motion.h2> */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-transparent leading-tight text-center mb-12 w-full uppercase">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        ref={constraintsRef}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Card */}
            <motion.div
              whileHover={{
                scale: 1.03,
                rotate: 0.8,
                boxShadow: "0 0 20px rgba(134, 134, 172, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="p-6 bg-[#191919] bg-opacity-60 backdrop-blur-lg rounded-xl text-center flex flex-col items-center justify-center h-[220px] 
                        shadow-lg shadow-cyan-500/50 cursor-pointer relative overflow-hidden"
              style={{
                background:
                  "radial-gradient(circle at center, #0f0f0f 0%, #1b1b1b 50%, #121212 70%, #000000 100%)",
                border: "1px solid rgba(134, 134, 172, 0.2)",
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Main Card Content */}
              <div className="mb-4">{project.icon}</div>
              <h3 className="text-xl font-semibold text-[#8686AC]">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-300 text-sm sm:text-base line-clamp-2">
                {project.description}
              </p>

              {/* Hover Overlay */}
              <AnimatePresence>
                {hoveredProject === project.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-4"
                  >
                    <FaInfoCircle className="text-2xl text-[#8686AC] mb-2 animate-pulse" />
                    <motion.div
                      initial={{ y: 10 }}
                      animate={{ y: 0 }}
                      className="text-center"
                    >
                      {/* <h4 className="font-medium text-[#8686AC] mb-1">
                        Project Preview
                      </h4>
                      <ul className="mt-1 text-xs text-gray-300 space-y-1">
                        {project.features.slice(0, 2).map((feature, i) => (
                          <li key={i}>• {feature}</li>
                        ))}
                      </ul>
                      <div className="mt-2 flex flex-wrap justify-center gap-1">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-[#272757] text-gray-300 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div> */}
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="mt-2 text-xs text-[#8686AC] font-medium"
                    >
                      Click for full details
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-[#191919] bg-opacity-90 backdrop-blur-lg rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              style={{
                background:
                  "radial-gradient(circle at center, #0f0f0f 0%, #1b1b1b 50%, #121212 70%, #000000 100%)",
                border: "1px solid #8686AC",
              }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className="text-[#8686AC]">{selectedProject.icon}</div>
                  <h3 className="text-2xl font-bold text-[#8686AC]">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Description
                  </h4>
                  <p className="text-gray-300">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Platform
                    </h4>
                    <p className="text-gray-300">{selectedProject.platform}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#272757] text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
