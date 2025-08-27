// src/pages/Services.jsx
export default function Services() {
  const items = [
    {
      title: "Solar EPC (Design → Install → Maintain)",
      points: [
        "Load analysis & energy audit",
        "Inverter, battery & PV sizing",
        "Professional installation & testing",
        "Monitoring & maintenance plans",
      ],
    },
    {
      title: "Industrial & Residential Electrical",
      points: [
        "Wiring & panel upgrades",
        "Power distribution & protection",
        "Compliance & safety inspections",
        "Emergency troubleshooting",
      ],
    },
    {
      title: "CCTV & Access Control",
      points: [
        "High-res IP cameras & NVRs",
        "Structured cabling & PoE",
        "Remote monitoring setup",
        "Secure storage & user training",
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-stone-900">Our Services</h1>
      <p className="text-stone-600 mt-2 max-w-2xl">
        We deliver turnkey systems with transparent pricing and guaranteed performance.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {items.map((s, i) => (
          <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-blue-50">
            <h3 className="text-xl font-semibold text-blue-800">{s.title}</h3>
            <ul className="mt-4 space-y-2 text-stone-700">
              {s.points.map((p, j) => (
                <li key={j} className="flex gap-2">
                  <span className="text-amber-500">•</span> {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
