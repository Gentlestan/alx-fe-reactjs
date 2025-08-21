import React from "react";
import profileImg from "../assets/images/profile-img.jpg";
import AboutPreview from "./AboutPreview";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-slate-900 px-1 sm:px-2 py-10 w-full text-gray-50">
  {/* Hero Section */}
  <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start gap-6 shadow-lg px-6 py-8 rounded-2xl bg-slate-800">
    <div className="w-full sm:w-4/5 md:w-3/5">
      <h1 className="text-xl text-left sm:text-3xl md:text-5xl font-bold mb-4">
        From Renewable Energy <br /> to Frontend Technology
      </h1>
      <p className="text-slate-400 mb-6 text-left">
        Frontend Developer with expertise in React, Tailwind <br /> and API Integration
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap max-[660px]:justify-center gap-3">
        <Link
          to="/projects"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="bg-cyan-500 text-slate-900 px-6 py-2 rounded-md hover:bg-cyan-400 transition"
        >
          Contact Me
        </Link>
      </div>
    </div>

    {/* Desktop Image */}
    <div className="flex-shrink-0 hidden sm:block">
      <img
        src={profileImg}
        alt="Profile"
        className="w-44 h-44 rounded-full object-cover shadow-lg ring-4 ring-indigo-500/30"
      />
    </div>
  </div>
  <AboutPreview />
</section>
  );
};

export default Home;
