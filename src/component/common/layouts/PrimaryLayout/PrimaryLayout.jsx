import React, { useEffect } from "react";
import Header from "../../ui/Header/Header";
import About from "../../../pages/private/About/About";
import Projects from "../../../pages/private/Projects/Projects";
import Contact from "../../../pages/private/Contact/Contact";
import Footer from "../../ui/Footer/Footer";
import Skills from "../../../pages/private/Skills/Skills";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Home from "../../../pages/private/Home/Home";
import FloatingMenu from "../../HandButton/FloatingMenu";
const PrimaryLayout = () => {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "cyan",
          rounded:5
        }}
      />
      <main className="w-full min-h-screen flex flex-col bg-gradient-to-b from-[#2d545e] to-[#c89666] text-white">
        {/* <FloatingMenu/> */}
        {/* Header (Sticky) */}
        <header className="w-full bg-opacity-30 fixed top-0 z-50">
          <div className="max-w-7xl mx-auto p-4">
            <Header />
          </div>
        </header>

        {/* Sections */}
        <section id="home" className="min-h-screen flex items-center justify-center">
        <Home />
      </section>

        <section
          id="about"
          className="min-h-screen flex items-center justify-center"
        >
          <About />
        </section>
        <section
          id="skill"
          className="min-h-screen flex items-center justify-center"
        >
          <Skills />
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center"
        >
          <Projects />
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center"
        >
          <Contact />
        </section>

        {/* Footer */}
        <footer className="w-full bg-black bg-opacity-30 text-center py-4">
          <Footer />
        </footer>
      </main>
    </>
  );
};

export default PrimaryLayout;
