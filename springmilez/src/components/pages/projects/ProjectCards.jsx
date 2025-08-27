import { Link } from "react-router-dom";
import { projects } from "../../data/projects"; // 👈 import the array cleanly

export default function ProjectCard() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-stone-900">Projects</h1>
      <p className="text-stone-600 mt-2">
        Selected case studies showcasing our solar, electrical, and security
        solutions in action.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {projects.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl border border-blue-50 shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition"
          >
            <img
              src={p.image}
              alt={p.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-stone-900">{p.title}</h3>
              <p className="text-stone-600 mt-2">{p.summary}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <ul className="mt-3 text-sm text-stone-500 list-disc list-inside">
                {p.metrics.map((m, idx) => (
                  <li key={idx}>{m}</li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mt-5">
                <Link
                  to="/contact"
                  className="text-blue-700 hover:text-blue-900 font-medium"
                >
                  Request full case study →
                </Link>
                <Link
                  to={`/projects/${p.id}`}
                  className="text-amber-600 hover:text-amber-700 font-medium"
                >
                  View Project →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
