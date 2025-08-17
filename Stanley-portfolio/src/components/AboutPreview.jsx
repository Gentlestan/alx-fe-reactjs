import React from "react";
import { Link } from "react-router-dom";

const AboutPreview = () => {
  return (
    <div className=" mt-8 shadow-md bg-white py-6 rounded-md border  flex flex-col gap-3">
      <h2 className="text-2xl font-bold mb-4 w-3/5 border border-red-700">About Me</h2>

      <div className="space-y-4 w-3/5 flex flex-row align-center gap-3">
      <div>
        {/* Past Career Card */}
        <Link
          to="/about"
          className="block p-4 rounded-md border border-gray-200 hover:shadow-lg hover:border-green-500 transition"
        >
          <h3 className="font-semibold text-lg">Past Career</h3>
          <p className="text-gray-600">Solar and CCTV Entrepreneur</p>
        </Link>
        </div>

        {/* Tech Career Card */}
        <div>
        <Link
          to="/about"
          className="block p-4 rounded-md border border-gray-200 hover:shadow-lg hover:border-green-500 transition"
        >
          <h3 className="font-semibold text-lg">Tech Career</h3>
          <p className="text-gray-600">ALX and Scrimba Graduate</p>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPreview;
