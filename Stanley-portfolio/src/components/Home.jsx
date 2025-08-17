import React from "react";
import profileImg from "../assets/images/profile-img.jpg";
import AboutPreview from "./AboutPreview";
const Home = () => {
  return (
    <section className="bg-white px-1 sm:px-2 py-6 w-full">
  {/* Hero Section */}
  <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start gap-4 shadow-md px-4 py-6 rounded-md">
    <div className=" w-full sm:w-4/5 md:w-3/5">
      <div className="w-full md:w-auto">
        <h1 className="text-xl text-left sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          From Renewable Energy <br /> to Frontend Technology
        </h1>
        <p className="text-gray-600 mb-6 text-left">
          Frontend Developer with expertise in React, Tailwind <br /> and API Integration
        </p>
      </div>

      {/* Mobile Image */}
      <div className="block sm:hidden mb-4">
        <img
          src={profileImg}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover shadow-md mx-auto"
        />
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap max-[660px]:justify-center gap-3">
        <a
          href="#projects"
          className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-gray-800"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="bg-green-900 text-white px-5 py-2 rounded-md hover:bg-green-800"
        >
          Contact Me
        </a>
      </div>
    </div>

    {/* Desktop Image */}
    <div className="flex-shrink-0 hidden sm:block">
      <img
        src={profileImg}
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover shadow-md"
      />
    </div>
  </div>
  <AboutPreview/>
</section>

  );
};

export default Home;
