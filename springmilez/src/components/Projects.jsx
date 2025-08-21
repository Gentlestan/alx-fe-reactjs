// src/components/Projects.jsx

const projects = [
  {
    title: "2.4MW Industrial Plant – Hybrid PV",
    summary: "Hybrid PV + battery for a manufacturing line. 28% diesel reduction, 99.9% uptime.",
  },
  {
    title: "Estate CCTV Rollout",
    summary: "52 IP cameras, fiber backbone, remote monitoring & secure multi-tenant access.",
  },
  {
    title: "Hospital Backup Power",
    summary: "Life-critical inverter + battery design with redundancy and active monitoring.",
  },
];

export default function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-stone-900">Projects</h1>
      <p className="text-stone-600 mt-2">
        Selected case studies from industrial and residential clients.
  </p>

  <div className="grid md:grid-cols-3 gap-6 mt-10">
    {projects.map((p, i) => (
    <div
      key="{i}"
      className="bg-white rounded-xl border border-blue-50 shadow-sm overflow-hidden"
    >
      <div
        className="h-40 bg-gradient-to-br from-blue-700 to-amber-500 opacity-90"
      ></div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-stone-900">{p.title}</h3>
        <p className="text-stone-600 mt-2">{p.summary}</p>
        <a
          href="/contact"
          className="inline-block mt-4 text-blue-700 hover:text-blue-900 font-medium"
        >
          Request full case study →
        </a>
      </div>
    </div>
    ))}
  </div>
</section>
); }
