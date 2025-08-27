// src/components/ServiceCard.jsx
export default function ServiceCard({ title, desc, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-blue-50 hover:shadow-lg transition">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-3 text-lg font-semibold text-stone-900">{title}</h3>
      <p className="text-stone-600 mt-2">{desc}</p>
      <a href="/contact" className="inline-block mt-4 text-blue-700 hover:text-blue-900 font-medium">
        Request a quote →
      </a>
    </div>
  );
}
