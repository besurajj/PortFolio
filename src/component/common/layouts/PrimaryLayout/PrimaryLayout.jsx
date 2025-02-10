import React,{ useEffect } from "react";
import Header from "../../ui/Header/Header";
import About from "../../../pages/private/About/About";
import Projects from "../../../pages/private/Projects/Projects";
import Contact from "../../../pages/private/Contact/Contact";
import Footer from "../../ui/Footer/Footer";
import Skills from "../../../pages/private/Skills/Skills";

const PrimaryLayout = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"; // Enables smooth scrolling
  }, []);

  return (
    <main className="w-full min-h-screen flex flex-col bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
      {/* Header (Sticky) */}
      <header className="w-full bg-black bg-opacity-30 shadow-lg fixed top-0 z-50">
        <div className="max-w-7xl mx-auto p-4">
          <Header />
        </div>
      </header>

      {/* Sections */}
      {/* <section id="hero" className="min-h-screen flex items-center justify-center">
        <Hero />
      </section> */}

      <section id="about" className="min-h-screen flex items-center justify-center">
        <About />
      </section>
      <section id="skill" className="min-h-screen flex items-center justify-center">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center">
        <Projects /> 
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="w-full bg-black bg-opacity-30 text-center py-4">
        <Footer />
      </footer>
    </main>
  );
};

export default PrimaryLayout;
