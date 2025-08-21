// src/pages/Home.jsx
import StatBar from "../components/StatBar";
import CTA from "../components/CTA";
import heroImg from "../assets/images/herosolar.jpeg";
import ServiceCard from "./ServiceCard";

export default function Home() {
  return (
    <section>
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Reliable <span className="text-amber-400">Solar</span>, Electrical & CCTV Solutions
            </h1>
            <p className="mt-4 text-blue-100">
              We design, sell, and install high-performance systems for homes and industries—built to last, tailored to your needs.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/services" className="bg-amber-500 text-stone-900 px-5 py-2 rounded-md font-semibold hover:bg-amber-400 transition">
                Explore Services
              </a>
              <a href="/contact" className="border border-white/30 px-5 py-2 rounded-md hover:bg-white/10 transition">
                Get a Quote
              </a>
            </div>
          </div>
          <div className="rounded-xl bg-white/5 backdrop-blur p-6">
             <img src={heroImg} alt="Solar arrays" className="rounded-lg" /> 
            <div className="text-center h-48 md:h-32 rounded-lg bg-white/10 grid place-items-center">
              <h2 className="text-lg font-semibold text-blue-100">Clean Energy <span className="text-amber-400">Smart Investment.</span></h2>
              <span className="text-blue-100 text-center">Save money, protect the environment, and enjoy 24/7 power with our expert solar and electrical installations.</span>
            </div>
          </div>
        </div>
      </div>

      <StatBar />

      {/* Services Preview */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
          What We Do
        </h2>
        <p className="text-stone-600 mt-2 max-w-2xl">
          End-to-end delivery—from energy audit to commissioning and maintenance.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <ServiceCard
            title="Solar Design & Installation"
            desc="Grid-tie, hybrid, and off-grid systems engineered for efficiency and longevity."
            icon="☀️"
          />
          <ServiceCard
            title="Electrical Services"
            desc="Wiring, panels, industrial power distribution, safety upgrades and audits."
            icon="⚡"
          />
          <ServiceCard
            title="CCTV & Security"
            desc="AHD & IP cameras, DVRs & NVRs, remote monitoring, and secure infrastructure."
            icon="🎥"
          />
        </div>
      </div>

      <CTA />
    </section>
  );
}
