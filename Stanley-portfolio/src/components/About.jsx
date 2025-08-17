import React from "react";
import profileImg from "../assets/images/profile-img.jpg";

const About = () => {
  return (
    <section className="bg-white px-2 py-10 max-w-5xl mx-auto">
      
      <div className="text-center mb-8 shadow-md p-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 text-left">
          From Solar Grids to Responsive Grids
        </h1>
        <p className=" text-base md:text-lg text-gray-600 mt-2 md:w-4/5 text-left">
          A journey from hands-on technical work in renewable energy to
          creating modern, responsive web applications.
        </p>
      </div>

      {/* Past Career */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-100">
        <h2 className="text-2xl font-semibold text-green-900 mb-3 text-left">
          Past Career
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={profileImg}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
          <p className="text-gray-700 text-base leading-relaxed text-left">
            I began as a solar and CCTV entrepreneur, where I built strong
            technical skills, attention to detail, and a problem-solving
            mindset. While rewarding, I desired a path with more complexity,
            challenge, and global opportunities.
          </p>
        </div>
      </div>

      {/* Tech Career */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8 border border-gray-100">
        <h2 className="text-2xl font-semibold text-green-900 mb-3 text-left">
          Tech Career
        </h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4 text-left">
          In late 2022, I started my frontend journey with Scrimba’s{" "}
          <span className="font-semibold">Frontend Developer Career Path</span>,
          completing the program and furthering my skills through the{" "}
          <span className="font-semibold">ALX Frontend Program</span>. I am now
          advancing my backend development skills through ALX’s backend course.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4 text-left">
          I have built projects for brands, including{" "}
          <a
            href="https://saleskillhub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-800 font-semibold hover:underline"
          >
            SalesSkillHub.com
          </a>
          , as well as multiple personal web applications. I’m now ready to
          bring my skills and passion into a professional environment where I
          can contribute, grow, and create impactful digital solutions.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="mb-8 text-left shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Tech Stack</h2>
        <div className="flex flex-wrap gap-3 ">
          <span className="px-3 py-1 bg-gray-100 rounded-md">React</span>
          <span className="px-3 py-1 bg-gray-100 rounded-md">Tailwind CSS</span>
          <span className="px-3 py-1 bg-gray-100 rounded-md">JavaScript</span>
          <span className="px-3 py-1 bg-gray-100 rounded-md">Python</span>
          <span className="px-3 py-1 bg-gray-100 rounded-md">Django</span>
          <span className="px-3 py-1 bg-gray-100 rounded-md">API Integration</span>
          <span className="px-3 py-1 bg-gray-100 rounded-md">Git & GitHub</span>
        </div>
      </div>

      {/* Highlights */}
      <div className="mb-10 shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 text-left text-green-900">Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left">
          <li>Graduated from ALX and Scrimba frontend programs.</li>
          <li>Currently advancing backend development through ALX.</li>
          <li>Built and deployed multiple responsive web apps.</li>
          <li>Integrated APIs for dynamic and data-driven experiences.</li>
          <li>Managed and delivered solar/CCTV projects end-to-end.</li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <a
          href="#contact"
          className="bg-green-900 text-white px-6 py-3 rounded-md hover:bg-green-800 transition"
        >
          Let’s Work Together
        </a>
      </div>
    </section>
  );
};

export default About;
