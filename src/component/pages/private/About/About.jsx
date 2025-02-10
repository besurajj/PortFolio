import React from 'react'
import { motion } from "framer-motion";
import blockgame from "../../../../assets/blockgame.png"
const About = () => {
  return (
    <motion.div className=" w-full text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-12 shadow-lg shadow-cyan-500/50"
    drag
    >
    {/* Profile Card */}
    <motion.div
      className="bg-primary p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-2xl text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Profile Image */}
      <motion.img 
  //  whileFocus={{
  //   scale:2
  //  }}
  whileTap={{
    scale:2
  }}

        src={blockgame}
        alt="Profile"
        className="w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full mx-auto mb-4 border-4 border-accent"
        whileHover={{ scale: 1.1 }}
      />

      {/* Name & Role */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary">Suraj</h1>
      <p className="text-sm sm:text-lg text-gray-300">MEAN Stack Developer</p>

      {/* Bio */}
      <p className="mt-4 text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
        I am a passionate MEAN Stack Developer, skilled in building scalable web applications.  
        I love solving problems and crafting beautiful user experiences. 🚀
      </p>
    </motion.div>
  </motion.div>
  )
}

export default About