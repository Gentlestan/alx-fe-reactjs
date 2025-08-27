import { useParams, Link } from "react-router-dom";
import {projects} from "../../data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-2xl font-bold text-red-600">Project not found</h1>
        <Link to="/projects" className="text-blue-600 hover:underline mt-4 block">
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-5xl mx-auto px-6 py-16">
      {/* Hero */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-72 object-cover rounded-xl"
      />
      <h1 className="text-3xl md:text-4xl font-bold mt-6 text-stone-900">
        {project.title}
      </h1>
      <p className="text-stone-600 mt-2">{project.summary}</p>

      {/* Tags + Metrics */}
      <div className="flex flex-wrap gap-3 mt-4">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <ul className="mt-3 text-sm text-stone-500 list-disc list-inside">
        {project.metrics.map((m, idx) => (
          <li key={idx}>{m}</li>
        ))}
      </ul>

      {/* Case Study Sections */}
      <section className="mt-10 space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-stone-900">Challenge</h2>
          <p className="text-stone-700 mt-2">{project.challenge}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-stone-900">Solution</h2>
          <p className="text-stone-700 mt-2">{project.solution}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-stone-900">Deliverables</h2>
          <ul className="list-disc list-inside text-stone-700 mt-2">
            {project.deliverables.map((d, idx) => (
              <li key={idx}>{d}</li>
            ))}
          </ul>
        </div>

        {project.testimonial && (
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-lg">
            <p className="italic text-amber-800">“{project.testimonial}”</p>
          </div>
        )}

        {project.gallery && project.gallery.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-stone-900 mb-3">
              Gallery
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${project.title} - ${idx}`}
                  className="rounded-lg object-cover"
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Back Link */}
      <Link
        to="/projects"
        className="inline-block mt-10 text-blue-600 hover:underline"
      >
        ← Back to projects
      </Link>
    </article>
  );
}
