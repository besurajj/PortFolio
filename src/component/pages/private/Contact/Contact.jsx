import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaDownload,
} from "react-icons/fa";
import { motion } from "framer-motion";

const contactLinks = [
  {
    name: "GitHub",
    href: "https://github.com/besurajj",
    bg: "bg-gray-800 hover:bg-gray-700",
    icon: <FaGithub className="text-xl" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/suraj-shukla-6673682a4/",
    bg: "bg-blue-600 hover:bg-blue-500",
    icon: <FaLinkedin className="text-xl" />,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/+919780400874",
    bg: "bg-green-600 hover:bg-green-500",
    icon: <FaWhatsapp className="text-xl" />,
  },
  {
    name: "Email",
    href: "mailto:surajshukla.work24@gmail.com",
    bg: "bg-red-500 hover:bg-red-400",
    icon: <FaEnvelope className="text-xl" />,
  },
  // {
  //   name: "Phone",
  //   href: "tel:+919780400874",
  //   bg: "bg-purple-600 hover:bg-purple-500",
  //   icon: <FaPhone className="text-xl" />,
  // },
  {
    name: "Download Resume",
    href: "/Suraj's (resume).pdf",
    bg: "bg-yellow-500 hover:bg-yellow-400",
    icon: <FaDownload className="text-xl" />,
    download: true,
  },
];

const Contact = (props, ref) => {
  return (
    <section
      ref={ref}
      id="contact"
      className="min-h-screen flex flex-col items-center
      justify-center text-white px-4 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-center"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-400 text-center mb-12 max-w-xl"
      >
        Connect with me on any platform and let’s build something great
        together!
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
        className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8 max-w-4xl"
      >
        {contactLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target={link.download ? "_self" : "_blank"}
            rel="noopener noreferrer"
            download={link.download}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`${link.bg} flex items-center gap-3 px-6 py-3 rounded-lg shadow-lg transition duration-300`}
          >
            {link.icon}
            <span className="font-medium">{link.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Contact;
