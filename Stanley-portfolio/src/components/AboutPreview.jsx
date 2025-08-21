import React from "react";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <div className="mt-8 shadow-lg bg-gradient-to-r from-green-50 via-white to-green-50 py-8 px-6 rounded-2xl border border-gray-100 flex flex-col gap-6">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">
        About Me
      </h2>

      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        {/* Past Career Card */}
        <Link
          to="/about"
          className="flex-1 block p-6 rounded-xl bg-white border border-gray-200 hover:shadow-2xl hover:border-green-400 transition-transform transform hover:scale-105"
        >
          <h3 className="font-bold text-xl text-green-700">Past Career</h3>
          <p className="text-gray-600 mt-2">Solar and CCTV Entrepreneur</p>
        </Link>

        {/* Tech Career Card */}
        <Link
          to="/about"
          className="flex-1 block p-6 rounded-xl bg-white border border-gray-200 hover:shadow-2xl hover:border-green-400 transition-transform transform hover:scale-105"
        >
          <h3 className="font-bold text-xl text-green-700">Tech Career</h3>
          <p className="text-gray-600 mt-2">ALX and Scrimba Graduate</p>
        </Link>
      </div>
    </div>
  );
};

export default AboutPreview;
