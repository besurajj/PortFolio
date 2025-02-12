import React,{ useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-5 right-5 flex flex-col items-end">
      {/* Hand Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 1 }}
        animate={{ scale: isOpen ? 1.5 : 1, rotate: isOpen ? -10 : 0 }}
        transition={{ type: "spring", stiffness: 150 }}
        className="relative z-50 p-3 bg-yellow-400 rounded-full shadow-lg"
      >
        🖐️ {/* Cartoon Hand Emoji (Replace with an Image if Needed) */}
      </motion.button>

      {/* Menu Items */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`flex flex-col items-center space-y-3 mt-4 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        <motion.a
          href="#home"
          className="p-3 bg-[#272757] text-white rounded-full shadow-md"
          whileHover={{ scale: 1.1 }}
        >
          <FaHome />
        </motion.a>
        <motion.a
          href="#about"
          className="p-3 bg-[#272757] text-white rounded-full shadow-md"
          whileHover={{ scale: 1.1 }}
        >
          <FaUser />
        </motion.a>
        <motion.a
          href="#projects"
          className="p-3 bg-[#272757] text-white rounded-full shadow-md"
          whileHover={{ scale: 1.1 }}
        >
          <FaProjectDiagram />
        </motion.a>
        <motion.a
          href="#contact"
          className="p-3 bg-[#272757] text-white rounded-full shadow-md"
          whileHover={{ scale: 1.1 }}
        >
          <FaEnvelope />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default FloatingMenu;
