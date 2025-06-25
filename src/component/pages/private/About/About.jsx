// import React from "react";
// import { motion } from "framer-motion";
// const About = () => {
//   return (
//     <section className="w-full max-w-5xl flex flex-col text-start md:w-[80%] sm:w-[90%] md:p-10 lg:left-0 lg:w-full">
//       <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl lg:-mx-0 lg:mt-0 font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-transparent leading-tight text-center mt-5 w-full lg:text-start m-6 uppercase">
//         About Me
//       </h2>

//       <h3 className="text-2xl text-purple-400 font-semibold mb-4 text-center sm:text-left lg:text-3xl p-3 lg:p-0">
//         Passionate MERN Stack Developer & React Enthusiast
//       </h3>

//       <p className="text-gray-300 text-lg leading-relaxed sm:text-left text-start p-3 lg:p-0 ml-3 lg:ml-0 lg:text-xl ">
//         Hi! I'm <span className="text-purple-400 font-semibold">Suraj</span>, a{" "}
//         <span className="text-purple-400 font-semibold">
//           MERN Stack Developer
//         </span>
//         with a deep passion for building scalable and efficient web
//         applications. With expertise in{" "}
//         <span className="text-purple-400 font-semibold">
//           MongoDB, Express.js, React, and Node.js
//         </span>
//         , I love crafting high-performance, user-friendly digital experiences.
//       </p>

//       <div className="mt-6">
//         <h3 className="text-2xl font-[font1] uppercase lg:text-3xl text-white font-semibold text-center sm:text-left ">
//           Why React?
//         </h3>
//         <p className="text-gray-400 mt-2 text-xl ml-3 lg:ml-0 text-start p-3 lg:p-0 lg:text-2xl sm:text-left">
//           React’s component-driven approach, performance optimizations, and
//           seamless state management excite me. From building intuitive UI/UX to
//           optimizing performance, I thrive on solving real-world problems using
//           modern technologies.
//         </p>
//       </div>

//       <div className="mt-8">
//         <h3 className="text-2xl text-white font-semibold text-center sm:text-left lg:text-3xl font-[font1] uppercase">
//           What I Love to Build
//         </h3>
//         <ul className="text-gray-300 mt-4 space-y-2 text-start text-lg mx-5 lg:text-xl lg:ml-0 lg:text-start sm:text-left ">
//           <li className="whitespace-normal leading-relaxed">
//             🔹 Dynamic, Interactive Web Apps with React & Next.js
//           </li>
//           <li className="whitespace-normal leading-relaxed">
//             🔹 Scalable Backend Services with Express.js & MongoDB
//           </li>
//           <li className="whitespace-normal leading-relaxed">
//             🔹 Responsive & Elegant UI Designs with Tailwind CSS & Framer Motion
//           </li>
//           <li className="whitespace-normal leading-relaxed">
//             🔹 Real-time & API-Driven Applications
//           </li>
//         </ul>
//       </div>

//       <div className="mt-10 flex justify-center sm:justify-start">
//         <a
//           href="#contact"
//           className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
//         >
//           Let's Connect
//         </a>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="w-full max-w-5xl flex flex-col text-start md:w-[80%] sm:w-[90%] md:p-10 lg:left-0 lg:w-full">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl lg:-mx-0 lg:mt-0 font-bold bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 bg-clip-text text-transparent leading-tight text-center mt-5 w-full lg:text-start m-6 uppercase">
        About Me
      </h2>

      <h3 className="text-2xl text-purple-400 font-semibold mb-4 text-center sm:text-left lg:text-3xl p-3 lg:p-0">
        React.js Developer | Backend Knowledge Time
      </h3>

      <p className="text-gray-300 text-lg leading-relaxed sm:text-left text-start p-3 lg:p-0 ml-3 lg:ml-0 lg:text-xl ">
        I'm <span className="text-purple-400 font-semibold">Suraj</span>, a{" "}
        <span className="text-purple-400 font-semibold">
          React.js developer
        </span>{" "}
        with hands-on experience in building fast, scalable, and user-friendly
        web applications. I've successfully delivered{" "}
        <span className="text-purple-400 font-semibold">
          multiple client projects
        </span>{" "}
        on deadline while maintaining{" "}
        <span className="text-purple-400 font-semibold">
          clean, structured code
        </span>
        .
        <br />
        <br />
        While my primary strength is in{" "}
        <span className="text-purple-400 font-semibold">
          frontend development (React, Next.js, Redux)
        </span>
        , I also have working knowledge of{" "}
        <span className="text-purple-400 font-semibold">
          backend technologies (Node.js, Express, MongoDB)
        </span>
        , allowing me to collaborate effectively in full-stack environments.
      </p>

      <div className="mt-6">
        <h3 className="text-2xl font-[font1] uppercase lg:text-3xl text-white font-semibold text-center sm:text-left ">
          My Approach to Development
        </h3>
        <p className="text-gray-400 mt-2 text-xl ml-3 lg:ml-0 text-start p-3 lg:p-0 lg:text-2xl sm:text-left">
          I focus on writing{" "}
          <span className="text-purple-400">maintainable code</span>, optimizing
          performance, and meeting deadlines without compromising quality.
          Whether working solo or in a team, I ensure my solutions are scalable,
          well-documented, and aligned with client requirements.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl text-white font-semibold text-center sm:text-left lg:text-3xl font-[font1] uppercase">
          What I Bring to the Table
        </h3>
        <ul className="text-gray-300 mt-4 space-y-2 text-start text-lg mx-5 lg:text-xl lg:ml-0 lg:text-start sm:text-left ">
          {/* <li className="whitespace-normal leading-relaxed">
            🔹 <span className="text-purple-400">5+ client projects</span>{" "}
            delivered on time with React.js
          </li> */}
          <li className="whitespace-normal leading-relaxed">
            🔹 Strong in{" "}
            <span className="text-purple-400">state management</span> (Redux,
            Context API)
          </li>
          <li className="whitespace-normal leading-relaxed">
            🔹 Experience with{" "}
            <span className="text-purple-400">backend integration</span> (REST
            APIs, JWT Auth)
          </li>
          <li className="whitespace-normal leading-relaxed">
            🔹 Proficient in{" "}
            <span className="text-purple-400">UI/UX best practices</span>{" "}
            (Responsive Design, Tailwind CSS)
          </li>
          <li className="whitespace-normal leading-relaxed">
            🔹 Commitment to{" "}
            <span className="text-purple-400">clean, reusable code</span> and
            performance optimization
          </li>
        </ul>
      </div>

      <div className="mt-10 flex justify-center sm:justify-start">
        <motion.a
          href="#contact"
          className="relative bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 
              text-white font-bold py-3 px-8 rounded-lg transition-all duration-300
              shadow-lg hover:shadow-xl
              group overflow-hidden"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 group-hover:animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Let's Build Together
          </span>
          <span
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
          ></span>
        </motion.a>
      </div>
    </section>
  );
};

export default About;
