import React from "react";
import { motion } from "framer-motion";
import blockgame from "../../../../assets/blockgame.png";
const About = () => {
  return (
    <section className="w-full max-w-5xl flex flex-col text-start md:w-[80%] sm:w-[90%] md:p-10 lg:left-0 lg:w-full">
      <h2 className="text-4xl font-extrabold text-white mb-6 text-center sm:text-left mt-10 lg:mt-0 lg:text-5xl font-[font1] uppercase">
        About Me
      </h2>

      <h3 className="text-2xl text-purple-400 font-semibold mb-4 text-center sm:text-left lg:text-3xl">
        Passionate MERN Stack Developer & React Enthusiast
      </h3>

      <p className="text-gray-300 text-lg leading-relaxed sm:text-left text-start p-3 lg:p-0 ml-3 lg:ml-0 lg:text-xl ">
        Hi! I'm <span className="text-purple-400 font-semibold">Suraj</span>, a{" "}
        <span className="text-purple-400 font-semibold">
          MERN Stack Developer
        </span>
        with a deep passion for building scalable and efficient web
        applications. With expertise in{" "}
        <span className="text-purple-400 font-semibold">
          MongoDB, Express.js, React, and Node.js
        </span>
        , I love crafting high-performance, user-friendly digital experiences.
      </p>

      <div className="mt-6">
        <h3 className="text-2xl font-[font1] uppercase lg:text-3xl text-white font-semibold text-center sm:text-left ">
          Why React?
        </h3>
        <p className="text-gray-400 mt-2 text-xl ml-3 lg:ml-0 text-start p-3 lg:p-0 lg:text-2xl sm:text-left">
          React’s component-driven approach, performance optimizations, and
          seamless state management excite me. From building intuitive UI/UX to
          optimizing performance, I thrive on solving real-world problems using
          modern technologies.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl text-white font-semibold text-center sm:text-left lg:text-3xl font-[font1] uppercase">
          What I Love to Build
        </h3>
        <ul className="text-gray-300 mt-4 space-y-2 text-start text-lg mx-5 lg:text-xl lg:ml-0 lg:text-start sm:text-left ">
          <li className="whitespace-normal leading-relaxed">
            🔹 Dynamic, Interactive Web Apps with React & Next.js
          </li>
          <li className="whitespace-normal leading-relaxed">
            🔹 Scalable Backend Services with Express.js & MongoDB
          </li>
          <li className="whitespace-normal leading-relaxed">
            🔹 Responsive & Elegant UI Designs with Tailwind CSS & Framer Motion
          </li>
          <li className="whitespace-normal leading-relaxed">
            🔹 Real-time & API-Driven Applications
          </li>
        </ul>
      </div>

      <div className="mt-10 flex justify-center sm:justify-start">
        <a
          href="#contact"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Let's Connect
        </a>
      </div>
    </section>
  );
};

export default About;
