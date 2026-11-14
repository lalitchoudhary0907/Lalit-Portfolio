export const PORTFOLIO_DATA = {
  personal: {
    name: "Lalit Choudhary",
    role: "Full-Stack Product Engineer & Quantitative Developer",
    tagline:
      "Architecting high-velocity web applications, autonomous AI workflows, and institutional-grade quantitative alphas.",
    location: "India",
    status: "Available for Hackathons & Engineering Roles",
    email: "lalitchoudhary0907@gmail.com",
    github: "https://github.com/lalitchoudhary0907",
    linkedin: "https://www.linkedin.com/in/lalitchoudhary0907",
  },

  metrics: [
    {
      label: "WorldQuant Challenge",
      value: "GOLD",
      subtext: "Top Quantitative Alpha Tier",
      accent: "orange",
    },
    {
      label: "Flagship Production App",
      value: "FocusFlow",
      subtext: "Live on Vercel Edge Network",
      accent: "orange",
    },
    {
      label: "Open Source & Hackathons",
      value: "2026",
      subtext: "Hacktoberfest x MLH & DEV",
      accent: "orange",
    },
    {
      label: "Target Frame Rate",
      value: "60 FPS",
      subtext: "Hardware-Accelerated WebGL",
      accent: "orange",
    },
  ],

  projects: [
    {
      id: "focusflow",
      title: "FocusFlow",
      subtitle: "Next-Gen Deep Work & Cognitive Productivity Engine",
      description:
        "A high-performance productivity platform engineered for flow-state execution. Features real-time task telemetry, distraction-free session orchestration, fluid micro-interactions, and instant cloud synchronization.",
      liveUrl: "https://focus-flow0907.vercel.app/",
      githubUrl: "https://github.com/lalitchoudhary0907",
      image: "/assets/focusflow-preview.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
      metrics: [
        "Sub-100ms UI state transitions",
        "Zero-clutter cognitive UX architecture",
        "100% responsive across desktop & mobile viewports",
      ],
      featured: true,
    },
    {
      id: "worldquant-alphas",
      title: "Quantitative Alpha Research Suite",
      subtitle: "WorldQuant BRAIN Statistical Arbitrage Models",
      description:
        "Developed, simulated, and optimized predictive market-neutral quantitative alphas on the WorldQuant BRAIN platform, rigorously balancing Sharpe ratio, Fitness metrics, sub-universe stability, and low turnover.",
      liveUrl: "#credentials",
      githubUrl: "#credentials",
      image: "/assets/worldquant-gold.png",
      tags: ["Quantitative Finance", "Alpha Simulation", "Python", "Statistical Modeling", "Risk Control"],
      metrics: [
        "Achieved prestigious GOLD LEVEL status",
        "Optimized for high Sharpe & low portfolio turnover",
        "Validated across historical multi-asset datasets",
      ],
      featured: true,
    },
  ],

  credentials: [
    {
      id: "worldquant-gold",
      title: "WorldQuant BRAIN — Gold Level",
      issuer: "WorldQuant Challenge®",
      authorizedBy: "Nitish Maini, Chief Strategy Officer of WorldQuant",
      date: "2026",
      badgeText: "GOLD MEDALIST",
      theme: "orange",
      description:
        "Awarded in recognition for reaching GOLD LEVEL in the WorldQuant Challenge through rigorous quantitative alpha formulation and backtesting.",
      certificateImage: "/assets/worldquant-gold.png",
    },
    {
      id: "hacktoberfest-2026",
      title: "Hacktoberfest 2026 — Hack Day",
      issuer: "Hacktoberfest x MLH x DEV (Presented by DigitalOcean)",
      authorizedBy: "Sonipat x Rishihood University (In-Person)",
      date: "October 31, 2026",
      badgeText: "OPEN SOURCE CONTRIBUTOR",
      theme: "orange",
      description:
        "Official Certificate of Attendance for participating in person at Hacktoberfest Hack Day Sonipat x Rishihood University, collaborating on open-source software.",
      certificateImage: "/assets/hacktoberfest-2026.png",
    },
  ],

  skills: [
    { category: "Frontend & 3D Web", items: ["Next.js", "React", "TypeScript", "Three.js / R3F", "Tailwind CSS", "Framer Motion", "GSAP"] },
    { category: "Backend, AI & Systems", items: ["Python", "Node.js", "Gemini AI SDK", "REST APIs", "Git & GitHub", "Linux / CLI"] },
    { category: "Quant & Problem Solving", items: ["WorldQuant BRAIN Alphas", "Data Structures", "Algorithmic Optimization", "Statistical Analysis"] },
  ],
};
