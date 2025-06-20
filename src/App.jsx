// import React from 'react'
// import { PrimaryLayout } from './component/common/layouts'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import About from './component/pages/private/About/About'
// import Projects from './component/pages/private/Projects/Projects'
// import Contact from './component/pages/private/Contact/Contact'
// import Header from './component/common/ui/Header/Header'
// // import Routes from './routes/Routes'

// function App() {
//   return (<>
//   <PrimaryLayout/>
//   {/* <Header/> */}
//   </>

//   )
// }

// export default App

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrimaryLayout } from "./component/common/layouts";
import About from "./component/pages/private/About/About";
import Projects from "./component/pages/private/Projects/Projects";
import Contact from "./component/pages/private/Contact/Contact";
import Header from "./component/common/ui/Header/Header";
import Home from "./component/pages/private/Home/Home";
import Skills from "./component/pages/private/Skills/Skills";

function App() {
  return (
    <>
      <PrimaryLayout>
        <Header />{" "}
        {/* Header can be inside layout if you want it on all pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
      </PrimaryLayout>
    </>
  );
}

export default App;
