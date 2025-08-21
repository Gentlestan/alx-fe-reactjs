import React from "react";
import profileImg from "../assets/images/profile-img.jpg";

const About = () => {
  return (
    <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4 py-6 w-full text-gray-50">
      
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-emerald-400 mb-4">
          From Solar Grids to Responsive Grids
        </h1>
        <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto">
          A journey from hands-on technical work in renewable energy to creating
          modern, responsive web applications.
        </p>
      </div>

      {/* Past Career */}
      <div className="bg-slate-800 shadow-lg rounded-xl p-6 mb-10 border border-slate-700">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          Past Career
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={profileImg}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover shadow-xl ring-4 ring-emerald-500/30"
          />
          <p className="text-slate-300 text-base leading-relaxed">
            I began as a solar and CCTV entrepreneur, where I built strong
            technical skills, attention to detail, and a problem-solving mindset.
            While rewarding, I desired a path with more complexity, challenge, and
            global opportunities.
          </p>
        </div>
      </div>

      {/* Tech Career */}
      <div className="bg-slate-800 shadow-lg rounded-xl p-6 mb-10 border border-slate-700">
        <h2 className="text-2xl font-semibold text-emerald-400 mb-4">
          Tech Career
        </h2>
        <p className="text-slate-300 text-base leading-relaxed mb-4">
          In late 2022, I started my frontend journey with{" "}
          <span className="font-semibold text-indigo-400">
            Scrimba’s Frontend Developer Career Path
          </span>
          , completing the program and furthering my skills through the{" "}
          <span className="font-semibold text-indigo-400">ALX Frontend Program</span>.
          I am now advancing my backend development skills through ALX’s backend course.
        </p>
        <p className="text-slate-300 text-base leading-relaxed">
          I have built projects for brands, including{" "}
          <a
            href="https://saleskillhub.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 font-semibold hover:underline"
          >
            SalesSkillHub.com
          </a>
          , as well as multiple personal web applications. I’m now ready to
          bring my skills and passion into a professional environment where I
          can contribute, grow, and create impactful digital solutions.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="bg-slate-800 shadow-lg rounded-xl p-6 mb-10 border border-slate-700">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Tech Stack</h2>
        <div className="flex flex-wrap gap-3">
          {[
            "React",
            "Tailwind CSS",
            "JavaScript",
            "Python",
            "Django",
            "API Integration",
            "Git & GitHub",
          ].map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-slate-700 text-slate-200 rounded-md text-sm 
              hover:bg-emerald-600 hover:text-white transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Highlights */}
      <div className="bg-slate-800 shadow-lg rounded-xl p-6 mb-12 border border-slate-700">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Highlights</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
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
          className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-500 transition shadow-md"
        >
          Let’s Work Together
        </a>
      </div>
    </section>
  );
};

export default About;
