import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrimaryLayout } from "../component/common/layouts";
import About from "../component/pages/private/About/About";
import Projects from "../component/pages/private/Projects/Projects";
import Skills from "../component/pages/private/Skills/Skills";
import Contact from "../component/pages/private/Contact/Contact";

const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default routes;
