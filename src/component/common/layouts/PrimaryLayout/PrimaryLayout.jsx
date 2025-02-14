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
import aiVideo from "../../../../assets/ai.mp4";
import aiFace from "../../../../assets/aiFace1.mp4";

const PrimaryLayout = () => {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
      <main className="w-full min-h-screen flex flex-col bg-gradient-to-b from-zinc-900 to-black text-white">
        {/* <FloatingMenu/> */}
        {/* Header (Sticky) */}
        <header className="w-full bg-opacity-30 fixed top-0 z-50">
          <div className="max-w-7xl mx-auto p-4">
            <Header />
          </div>
        </header>

        {/* Sections */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-zinc-900"
        >
          <Home />
        </section>

        <section
          id="about"
          className="relative min-h-screen flex items-center lg:justify-between"
        >
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            src={aiVideo}
            className="absolute inset-0 w-full h-full p-2 lg:p-10 object-cover bg-gradient-to-b from-zinc-900 to-black "
          />

          {/* Smooth Transition from Home to About */}
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black opacity-80 rounded-2xl"></div>

          {/* About Component */}
          <div className="relative flex flex-col z-10 lg:left-0 border-2 lg:mx-10">
            <About />
          </div>
            <div className="border-2 z-10 max-w-5xl hidden flex-col text-start md:w-[80%] sm:w-[90%] md:p-10 lg:w-[50vh] lg:h-screen lg:mx-20 lg:block">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              temporibus provident nostrum quisquam qui necessitatibus maxime
              mollitia ullam doloremque vero alias tempore beatae in, dolore,
              laboriosam facilis totam odit ab.
            </div>
        </section>

        <section
          id="skill"
          className="min-h-screen flex items-center justify-center"
        >
          <Skills />
        </section>

        <section
          id="projects"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-900 to-black"
        >
          <Projects />
        </section>

        <section
          id="contact"
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-zinc-900"
        >
          <Contact />
        </section>

        {/* Footer */}
        {/* <footer className="w-full bg-opacity-30 text-center py-4 bg-gradient-to-b from-zinc-900 to-black"> */}
        <Footer />
        {/* </footer> */}
      </main>
    </>
  );
};

export default PrimaryLayout;
