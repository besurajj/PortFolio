import React from "react";

const Home = () => {
  return (
   <section className="min-h-screen flex flex-col-reverse md:flex-row items-center px-6 justify-center bg-gradient-to-b from-[#2d545e] to-[#c89666] text-white overflow-hidden">
  {/* Left Section: Text Content */}
  <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left p-6 md:p-10">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mt-10">
      Hi, I'm Suraj
    </h1>
    <span className="text-lg sm:text-xl md:text-2xl mt-3 text-gray-200">
      MEAN Stack Developer | React Enthusiast
    </span>
    <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed text-start font-semibold">
      Hey there! 👋 I'm Suraj, a passionate MEAN Stack Developer with a love
      for building dynamic, scalable, and user-friendly web applications.
      With expertise in MongoDB, Express.js, Angular, Node.js, and a deep
      enthusiasm for React, I enjoy crafting seamless digital experiences
      that merge functionality with aesthetics.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center md:justify-start mt-6">
      <a href="#projects">
        <button className="px-4 py-2 text-base bg-[#272757] hover:bg-[#505081] rounded-full shadow-md transition w-full sm:w-auto">
          Hire me
        </button>
      </a>
    </div>
  </div>

  {/* Right Section: Profile Image */}
  <div className="flex items-center justify-center h-auto w-full">
    <div className="w-[50vw] max-w-xs sm:max-w-md md:max-w-lg h-auto aspect-square rounded-full overflow-hidden shadow-lg shadow-zinc-900 box-border mt-10">
      <img
        src="/src/assets/WorkCartoons.jpeg"
        alt="Profile"
        className="w-full h-full object-cover "
      />
    </div>
  </div>
</section>

  );
};

export default Home;
