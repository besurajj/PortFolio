import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Branding */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold">Suraj's Portfolio</h2>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-gray-300 text-lg font-medium">
          <li className="hover:text-white cursor-pointer transition duration-300">Projects</li>
          <li className="hover:text-white cursor-pointer transition duration-300">About</li>
          <li className="hover:text-white cursor-pointer transition duration-300">Contact</li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl hover:text-white transition duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl hover:text-white transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl hover:text-white transition duration-300">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-2xl hover:text-white transition duration-300">
            <FaInstagram />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
