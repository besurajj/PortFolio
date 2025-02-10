import React from "react";
import Projects from "../../../pages/private/Projects/Projects";
import { Link } from "react-router-dom";
import About from "../../../pages/private/About/About";
import Contact from "../../../pages/private/Contact/Contact";

const Header = () => {
  return (
    <>
    <nav className="flex justify-between items-center p-4 text-white">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <ul className="flex space-x-6">
        <li><a href="#hero" className="hover:text-gray-300">Home</a></li>
        <li><a href="#about" className="hover:text-gray-300">About</a></li>
        <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
        <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
    </>
  );
};

export default Header;
