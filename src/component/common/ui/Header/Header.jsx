import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#12343b] text-white shadow-md">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto w-full ">


        {/* Logo */}
        <h1 className="text-xl font-bold">My Portfolio</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a href="#hero" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
                className="md:hidden text-2xl"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }} // Scale on click
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 45 : 0 }} // Rotate icon on open/close
                transition={{ duration: 0.3 }}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        exit={{ opacity: 0, y: 20, scale: 0.9 }} 
                        transition={{ duration: 0.3, ease: "easeInOut" }} 
                        className="md:hidden flex flex-col items-center bg-opacity-60 backdrop-blur-lg text-white space-y-8 py-16 absolute w-full h-screen top-16 left-0 shadow-lg text-[12vw] mt-5"
                    >
                        <li>
                            <a
                                href="#hero"
                                className="hover:text-gray-300 "
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="hover:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="hover:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-gray-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </a>
                        </li>
                    </motion.ul>
                )}
            </AnimatePresence>
            </nav>
    </header>
  );
};

export default Header;
