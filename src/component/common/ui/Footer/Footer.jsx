import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import React from "react";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="relative flex justify-around text-center w-full bg-gradient-to-b from-zinc-900 to-black text-white py-16">
      <div className="w-full flex flex-col md:flex-row md:justify-between items-center md:items-start space-y-10 md:space-y-0 p-10">
        {/* Branding & About */}
        <div className="text-center md:text-left max-w-sm">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-transparent">
            Suraj's Portfolio
          </h2>
          <p className="text-gray-400 mt-3 leading-relaxed">
            Passionate MEAN Stack Developer crafting seamless and scalable web
            experiences.
          </p>
          <motion.p
            className="text-sm font-bold absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center w-full 
                 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-transparent"
            initial={{ backgroundPosition: "-200% 0" }}
            animate={{ backgroundPosition: "200% 0" }}
            transition={{
              duration: 3,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{
              backgroundSize: "200% 100%",
            }}
          >
            © {new Date().getFullYear()} All Rights Reserved.
          </motion.p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          <h3 className="text-xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-transparent">
            Quick Links
          </h3>
          <ul className="flex flex-col text-start space-y-2 text-gray-300 text-lg ml-2">
            <li className="hover:text-white transition duration-300 cursor-pointer">
              Home
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer">
              Projects
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer">
              About
            </li>
            <li className="hover:text-white transition duration-300 cursor-pointer">
              Contact
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-transparent">Get in Touch</h3>
          <p className="text-gray-400 flex items-center justify-center md:justify-start space-x-2 mt-2">
            <FaEnvelope className="text-gray-400" />
            <span>surajshukla.work24@gmail.com</span>
          </p>
          <p className="text-gray-400 flex items-center justify-center md:justify-start space-x-2 mt-2">
            <FaPhone className="text-gray-400" />
            <span>+91 97804 00874</span> 
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center md:text-left w-full md:w-auto">
          <h3 className="text-xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-transparent">
            Stay Updated
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Subscribe for latest updates.
          </p>
          <div className="mt-4 flex items-center border border-gray-600 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white px-4 py-2 outline-none w-48 placeholder-gray-400"
            />
            <button className="bg-zinc-900 hover:bg-[#8686AC] transition px-4 py-2 w-full text-white">
              Subscribe
            </button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-5 text-2xl mt-10 md:mt-0">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
