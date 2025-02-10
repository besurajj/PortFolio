import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Block Game",
    description: "A fun interactive block stacking game built with React.",
    image: "/assets/blockgame.jpg",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A sleek and modern personal portfolio website.",
    image: "/assets/portfolio.jpg",
  },
  {
    id: 3,
    title: "E-commerce Dashboard",
    description: "An analytics dashboard for e-commerce businesses.",
    image: "/assets/dashboard.jpg",
  },
  {
    id: 4,
    title: "Weather App",
    description: "A weather forecasting app using OpenWeather API.",
    image: "/assets/weather.jpg",
  },

];

const ProjectCards = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative w-80 h-96 bg-cover bg-center rounded-2xl shadow-lg overflow-hidden group"
            style={{ backgroundImage: `url(${project.image})` }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
            
            {/* Project Info */}
            <div className="absolute bottom-0 w-full p-4 bg-white bg-opacity-80 text-center rounded-b-2xl">
              <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
              <p className="text-sm text-gray-700">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectCards;
