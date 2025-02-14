import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center  text-white p-6">
      <h2 className="text-4xl font-bold mb-6 text-center">Get in Touch</h2>
      <p className="text-gray-400 text-center mb-8">Connect with me on any platform</p>

      {/* Contact Links */}
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        {/* GitHub */}
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition duration-300">
          <FaGithub className="text-xl" /> GitHub
        </a>

        {/* LinkedIn */}
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition duration-300">
          <FaLinkedin className="text-xl" /> LinkedIn
        </a>

        {/* WhatsApp */}
        <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg transition duration-300">
          <FaWhatsapp className="text-xl" /> WhatsApp
        </a>

        {/* Email */}
        <a href="mailto:your-email@gmail.com"
          className="flex items-center gap-3 px-6 py-3 bg-red-500 hover:bg-red-400 rounded-lg transition duration-300">
          <FaEnvelope className="text-xl" /> Email
        </a>

        {/* Phone */}
        <a href="tel:+1234567890"
          className="flex items-center gap-3 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition duration-300">
          <FaPhone className="text-xl" /> Phone
        </a>

        {/* Resume Download */}
        <a href="/path-to-your-resume.pdf" download
          className="flex items-center gap-3 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 rounded-lg transition duration-300">
          <FaDownload className="text-xl" /> Download Resume
        </a>
      </div>

      {/* Footer */}
      <footer className="text-gray-500 text-sm text-center mt-6">
        &copy; 2025 Suraj | All Rights Reserved
      </footer>
    </section>
  );
};

export default Contact;
