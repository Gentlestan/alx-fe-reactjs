import heroSolar from "../../assets/images/herosolar.jpeg";

export const projects = [
  {
    id: "industrial-plant",
    title: "2.4MW Industrial Plant – Hybrid PV",
    summary:
      "Hybrid PV + battery for a manufacturing line. Reduced diesel use by 28%, ensured 99.9% uptime.",
    image: heroSolar,
    tags: ["Hybrid PV", "Battery", "Industrial"],
    metrics: ["28% diesel reduction", "99.9% uptime"],

    // Extended fields
    challenge:
      "The client faced frequent downtime and high diesel consumption, leading to operational inefficiencies.",
    solution:
      "We deployed a hybrid solar PV system with integrated batteries to reduce reliance on diesel generators.",
    deliverables: [
      "2.4MW solar installation",
      "Battery storage system",
      "Monitoring dashboards",
      "Staff training",
    ],
    testimonial:
      "“The system has significantly lowered our costs and improved uptime. We can now run operations without fear of outages.”",
    gallery: [heroSolar, heroSolar, heroSolar],
  },
  {
    id: "estate-cctv",
    title: "Estate CCTV Rollout",
    summary:
      "52 IP cameras deployed with a secure fiber backbone, enabling remote monitoring and tenant access.",
    image: heroSolar,
    tags: ["CCTV", "Networking", "Security"],
    metrics: ["52 IP cameras", "Fiber backbone"],
    challenge:
      "Security gaps existed across the estate due to limited surveillance coverage.",
    solution:
      "Installed 52 IP cameras connected via a secure fiber backbone with cloud monitoring.",
    deliverables: [
      "52 high-resolution IP cameras",
      "Fiber backbone cabling",
      "Central monitoring system",
    ],
    testimonial:
      "“Residents now feel safe with 24/7 monitoring. The remote access feature is a game-changer.”",
    gallery: [heroSolar, heroSolar],
  },
  {
    id: "hospital-backup",
    title: "Hospital Backup Power",
    summary:
      "Designed a redundant inverter + battery system for life-critical hospital equipment.",
    image: heroSolar,
    tags: ["Backup Power", "Healthcare", "Redundancy"],
    metrics: ["24/7 monitoring", "Failover design"],
    challenge:
      "The hospital needed reliable backup power for life-support machines with zero tolerance for failure.",
    solution:
      "We implemented a redundant inverter system with battery storage to ensure uninterrupted power.",
    deliverables: [
      "Redundant inverter system",
      "Battery backup with monitoring",
      "Failover controls",
    ],
    testimonial:
      "“Lives have been saved because of this system. It’s one of the best investments we’ve made.”",
    gallery: [heroSolar],
  },
];


