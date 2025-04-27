import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-zinc-900 to-black text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center space-y-6">
        {/* Branding */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Suraj's Portfolio
        </motion.h2>

        {/* Social Links */}
        <motion.div
          className="flex space-x-6 text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
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
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-sm text-gray-500 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          © {new Date().getFullYear()} Suraj | All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
}
