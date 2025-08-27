import React from "react";
import { ExternalLink } from "lucide-react";
import salesSkillHubImg from "../assets/images/salesskill.png";
import kitchenCompanion from "../assets/images/kitchencompanion.jpg";


const projects = [
  {
    id: 1,
    title: "Salesskillhub",
    description:
     "SalesSkillHub is a sales-focused platform showcasing ad copy, lead conversion strategies, and client engagement techniques.",
    link: "https://skill-sales-hub.vercel.app/",
    image: salesSkillHubImg,
  },
 {
  id: 2,
  title: "Kitchen Companion",
  description:
    "A recipe browsing and meal-planning app built with React and Tailwind CSS. Includes search, favorites, and shopping list features for a seamless cooking experience.",
  link: "https://recipe-finder-mauve-one.vercel.app/",
  image: kitchenCompanion,
},
  {
    id: 3,
    title: "Shop & Checkout Page",
    description:
      "A functional e-commerce shop and checkout page design built with React/Next.js, ensuring responsive UI and smooth UX.",
    link: "https://yourdemo.netlify.app",
    image: "https://via.placeholder.com/600x400?text=Shop+Checkout+Page",
  },
];

const Projects = () => {
  return (
    <section
      className="bg-slate-900 py-4 px-6 md:px-6 text-gray-50"
      id="projects"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-cyan-400">
        Projects
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-600/40 hover:-translate-y-1 transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col h-full">
              <h3 className="text-xl font-semibold text-indigo-400 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm mb-4">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg transition "
              >
                View Project <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
