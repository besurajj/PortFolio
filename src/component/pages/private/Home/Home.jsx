import React, { useRef } from "react";
// import TextCircleAnimation from "../../../common/TextCircleAnimation/TextCircleAnimation";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Contact from "../Contact/Contact";
const Home = () => {
  const navigate = useNavigate();
  const text =
    "Hey there! 👋 I'm Suraj, a passionate MERN Stack Developer with a love for building dynamic, scalable, and user-friendly web applications. With expertise in MongoDB, Express.js, React, Node.js, and a deep enthusiasm for React, I enjoy crafting seamless digital experiences that merge functionality with aesthetics.";

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 50 },
  };

  const contactRef = useRef(null);

  const scrollToContact = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col-reverse md:flex-row items-center px-6 justify-center bg-gradient-to-b from-black to-zinc-900 text-white overflow-hidden box-border p-8">
      {/* Left Section: Text Content */}
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left box-border md:p-0 h-auto lg:mx-8 mb-10 lg:mt-15">
        <h1 className=" text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-transparent leading-tight text-center mt-5 w-full lg:text-start ">
          Hi, I'm Suraj
        </h1>
        <span className="text-lg sm:text-xl md:text-2xl mt-3 text-gray-200 w-full">
          MERN Stack Developer | React Enthusiast
        </span>
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="mt-4 mx-4 lg:mx-0 text-gray-300 sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-start font-[font3] font-bold lg:p-0"
        >
          {text.split("").map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.p>
      </div>

      {/* Right Section: Profile Image */}
      <div className="flex items-center justify-center h-full w-full lg:mt-0 mt-15 lg:mr-5">
        <div className="relative">
          {/* Rotating Circular Border */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, ease: "circInOut", repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg
              viewBox="0 0 300 300"
              className="w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] aspect-square"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#d1d5db" />
                  <stop offset="50%" stopColor="#6b7280" />
                  <stop offset="100%" stopColor="#d1d5db" />
                </linearGradient>
              </defs>

              <circle
                cx="150"
                cy="150"
                r="140"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="6"
                strokeDasharray="12,12"
              />
            </svg>
          </motion.div>

          {/* Profile Image with Shadow */}
          <motion.div className="relative flex items-center justify-center p-7">
            <div className="w-[60vw] sm:w-[40vw] md:w-[35vw] lg:w-[30vw] max-w-md h-auto aspect-square rounded-full overflow-hidden shadow-lg shadow-zinc-900">
              <img
                src="/WorkCartoons.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-start items-start md:justify-start mt-2 absolute bottom-0 lg:mb-5 lg:w-full w-[20vh] mb-5 lg:mx-6">
        {/* <a href="#projects"> */}
        <button
          onClick={scrollToContact}
          className="px-4 py-2 bg-[#272757] hover:bg-[#505081] rounded-full 
                w-full sm:w-auto lg:w-[15vh] lg:text-xl lg:mx-11
                transition-colors duration-300"
        >
          Hire me
        </button>
        {/* </a> */}
      </div>
    </section>
  );
};

export default Home;
