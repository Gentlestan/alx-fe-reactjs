// src/components/CTA.jsx
export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Power your site with confidence.</h3>
          <p className="text-blue-100 mt-1">Free assessment & transparent pricing within 48 hours.</p>
        </div>
        <a
          href="/contact"
          className="bg-amber-500 text-stone-900 px-6 py-2 rounded-md font-semibold hover:bg-amber-400 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
