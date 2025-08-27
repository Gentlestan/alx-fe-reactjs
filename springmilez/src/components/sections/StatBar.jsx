import CountUp from "react-countup";

export default function StatBar() {
  const stats = [
    { k: 500, suffix: "+", v: "Installations" },
    { k: 28, suffix: "%", v: "Avg. Diesel Cut" },
    { k: 99.9, suffix: "%", v: "Uptime Targets" },
    { k: 24, suffix: "/7", v: "Support" },
  ];

  return (
    <div className="bg-white border-y border-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <div className="text-2xl font-extrabold text-blue-800">
              <CountUp end={s.k} duration={2} />{s.suffix}
            </div>
            <div className="text-stone-600">{s.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
