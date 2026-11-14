"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

interface Milestone {
  id: string;
  year: string;
  period: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  highlights: string[];
  tags: string[];
  theme: "cyan" | "gold" | "indigo" | "emerald" | "purple";
  badge: string;
  action?: {
    label: string;
    href: string;
    isExternal?: boolean;
  };
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

const MILESTONES: Milestone[] = [
  {
    id: "worldquant-gold",
    year: "2026",
    period: "2026 • CURRENT",
    title: "WorldQuant BRAIN — Gold Level Honor",
    subtitle: "Authorized by Nitish Maini, Chief Strategy Officer",
    category: "Quantitative Finance & Statistical Arbitrage",
    description:
      "Formulated, backtested, and stress-tested predictive market-neutral quantitative alphas on the institutional WorldQuant BRAIN simulation platform. Rigorously balanced Sharpe ratio, statistical Fitness metrics, sub-universe stability, and low portfolio turnover.",
    highlights: [
      "Achieved elite GOLD LEVEL status in WorldQuant Challenge®",
      "Engineered high-Sharpe mathematical stock selection alphas",
      "Validated performance across historical multi-asset market datasets",
    ],
    tags: ["Alpha Simulation", "Statistical Arbitrage", "Python", "Risk Control", "Quant Finance"],
    theme: "gold",
    badge: "GOLD MEDALIST",
    action: {
      label: "Inspect Credential",
      href: "#credentials",
    },
    icon: Award,
  },
  {
    id: "hacktoberfest-2026",
    year: "2026",
    period: "OCTOBER 31, 2026",
    title: "Hacktoberfest 2026 — In-Person Hack Day",
    subtitle: "Sonipat x Rishihood University • DigitalOcean x MLH & DEV",
    category: "Open Source Engineering & Live Collaboration",
    description:
      "Participated in-person at the official Hacktoberfest Hack Day hosted at Rishihood University in Sonipat. Collaborated on-site with open-source maintainers, building production software features and merging pull requests live.",
    highlights: [
      "Collaborated on-site with developers and open-source maintainers",
      "Authored and merged production PRs under Hacktoberfest guidelines",
      "Earned official verified event credential backed by MLH & DEV",
    ],
    tags: ["Open Source", "Git & GitHub", "Full-Stack Web", "Linux CLI", "Teamwork"],
    theme: "indigo",
    badge: "IN-PERSON HACKATHON",
    action: {
      label: "Inspect Credential",
      href: "#credentials",
    },
    icon: Code2,
  },
  {
    id: "focusflow-production",
    year: "2026",
    period: "2026 • PRODUCTION SHIP",
    title: "FocusFlow — Deep Work & Flow-State Engine",
    subtitle: "Next-Gen Productivity Platform Deployed on Vercel",
    category: "High-Performance Product Engineering",
    description:
      "Conceived, architected, and shipped FocusFlow—a cognitive flow-state orchestration engine designed to eradicate digital distraction. Built with Next.js 16 App Router, TypeScript, and Tailwind CSS, featuring sub-100ms state updates and global edge deployment.",
    highlights: [
      "Sub-100ms fluid UI state transitions and real-time telemetry",
      "Interactive 3D preview HUD and zero-clutter cognitive ergonomics",
      "Deployed on Vercel Edge Network with sub-45ms global P99 latency",
    ],
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel Edge"],
    theme: "cyan",
    badge: "PRODUCTION APP",
    action: {
      label: "Launch FocusFlow Live",
      href: "https://focus-flow0907.vercel.app/",
      isExternal: true,
    },
    icon: Layers,
  },
  {
    id: "rishihood-btech",
    year: "2025",
    period: "2024 - 2028 (IN PROGRESS)",
    title: "B.Tech in Computer Science & Artificial Intelligence",
    subtitle: "Rishihood University • Newton School of Technology",
    category: "Academic & Systems Rigor",
    description:
      "Pursuing a specialized engineering degree in CS & AI at Rishihood University (Newton School of Technology). Immersed in computer systems architecture, algorithmic complexity, numerical methods, distributed systems, and neural network foundations.",
    highlights: [
      "Advanced studies in Data Structures, Algorithms & Computational Complexity",
      "AI/ML system architecture, mathematical modeling, and distributed pipelines",
      "Active participant in collegiate hackathons, code jams, and tech symposiums",
    ],
    tags: ["Computer Science", "Artificial Intelligence", "Data Structures", "Algorithms", "Systems"],
    theme: "emerald",
    badge: "B.TECH CS & AI",
    action: {
      label: "View Technical Arsenal",
      href: "#skills",
    },
    icon: Cpu,
  },
  {
    id: "ai-systems-deepening",
    year: "2025",
    period: "2025 • ARCHITECTURE",
    title: "Autonomous AI Agents & Intelligent Pipelines",
    subtitle: "Agentic Tool Use, Multi-Modal Reasoning & Automation",
    category: "Applied AI Research",
    description:
      "Pioneered practical implementations of agentic architectures, multi-turn reasoning, and semantic tooling. Combined Gemini AI SDK and Python runtimes to construct autonomous developer workflows and real-time cognitive assistants.",
    highlights: [
      "Engineered multi-agent reasoning loops and structured LLM pipelines",
      "Integrated real-world tool execution and sandboxed system workflows",
      "Bridged interactive frontend interfaces with streaming AI backends",
    ],
    tags: ["Gemini AI SDK", "Python", "Autonomous Agents", "Prompt Engineering", "REST APIs"],
    theme: "purple",
    badge: "AI/ML SYSTEMS",
    action: {
      label: "Explore Tech Stack",
      href: "#skills",
    },
    icon: Sparkles,
  },
  {
    id: "foundations-3d-web",
    year: "2024",
    period: "2024 • FOUNDATIONS",
    title: "Full-Stack Foundations & Hardware-Accelerated 3D Web",
    subtitle: "Three.js, React Three Fiber & Modern WebGL",
    category: "Creative Technology & Frontend Architecture",
    description:
      "Deepened technical mastery over hardware-accelerated 3D graphics on the web. Engineered fluid 60–120 FPS WebGL scenes using Three.js and React Three Fiber, exploring physical materials, lighting, and GPU-driven micro-interactions.",
    highlights: [
      "Mastered 3D scene graph orchestration, shaders, and procedural geometry",
      "Adopted strict TypeScript typing across all full-stack repositories",
      "Authored fluid UI components with Framer Motion and modern Tailwind CSS",
    ],
    tags: ["Three.js", "React Three Fiber", "TypeScript", "Tailwind CSS", "WebGL"],
    theme: "cyan",
    badge: "CREATIVE WEBGL",
    action: {
      label: "Inspect 3D Core",
      href: "#about",
    },
    icon: Terminal,
  },
];

const THEME_STYLES = {
  gold: {
    accent: "#F59E0B",
    border: "border-[#F59E0B]/40 hover:border-[#F59E0B]/80",
    bg: "bg-[#F59E0B]/10 hover:bg-[#F59E0B]/15",
    text: "text-[#F59E0B]",
    glow: "rgba(245, 158, 11, 0.35)",
    badgeBg: "bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/40",
  },
  cyan: {
    accent: "#00F5D4",
    border: "border-[#00F5D4]/40 hover:border-[#00F5D4]/80",
    bg: "bg-[#00F5D4]/10 hover:bg-[#00F5D4]/15",
    text: "text-[#00F5D4]",
    glow: "rgba(0, 245, 212, 0.35)",
    badgeBg: "bg-[#00F5D4]/20 text-[#00F5D4] border-[#00F5D4]/40",
  },
  indigo: {
    accent: "#6366F1",
    border: "border-indigo-500/40 hover:border-indigo-400/80",
    bg: "bg-indigo-500/10 hover:bg-indigo-500/15",
    text: "text-indigo-400",
    glow: "rgba(99, 102, 241, 0.35)",
    badgeBg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
  },
  emerald: {
    accent: "#10B981",
    border: "border-emerald-500/40 hover:border-emerald-400/80",
    bg: "bg-emerald-500/10 hover:bg-emerald-500/15",
    text: "text-emerald-400",
    glow: "rgba(16, 185, 129, 0.35)",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  },
  purple: {
    accent: "#A855F7",
    border: "border-purple-500/40 hover:border-purple-400/80",
    bg: "bg-purple-500/10 hover:bg-purple-500/15",
    text: "text-purple-400",
    glow: "rgba(168, 85, 247, 0.35)",
    badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40",
  },
};

export default function JourneySection() {
  const [activeMilestone, setActiveMilestone] = useState<string | null>(null);

  // Group milestones by year for background watermark placement
  const years = ["2026", "2025", "2024"];

  return (
    <section id="journey" className="relative z-10 mx-auto max-w-6xl px-6 py-28 overflow-hidden">
      {/* Section Heading */}
      <div className="mb-20 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00F5D4] mb-3">
          <Sparkles className="h-4 w-4" />
          <span>02.5 // CHRONICLES & COMPUTATIONAL ODYSSEY</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
          The Engineering{" "}
          <span className="bg-gradient-to-r from-[#00F5D4] via-teal-200 to-[#F59E0B] bg-clip-text text-transparent">
            Journey.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
          From foundational algorithms and 3D WebGL scenes to academic CS & AI excellence at Rishihood University, WorldQuant Gold honors, and live hackathon deployments.
        </p>
      </div>

      {/* Timeline Container with Giant Watermark Years & Central Spine */}
      <div className="relative">
        {/* Central Glowing Timeline Spine */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[#00F5D4] via-[#F59E0B] via-60% to-[#6366F1] shadow-[0_0_20px_rgba(0,245,212,0.4)] pointer-events-none" />

        {/* Milestone Sequence Grouped by Watermark Years */}
        <div className="space-y-24 sm:space-y-32">
          {years.map((yearGroup) => {
            const yearMilestones = MILESTONES.filter((m) => m.year === yearGroup);

            return (
              <div key={yearGroup} className="relative">
                {/* Massive Semi-Transparent Watermark Year in Background */}
                <div className="pointer-events-none absolute -top-16 sm:-top-24 left-1/2 -translate-x-1/2 select-none z-0">
                  <span className="font-mono text-[8rem] sm:text-[14rem] lg:text-[18rem] font-black text-white/[0.03] tracking-tighter leading-none block">
                    {yearGroup}
                  </span>
                </div>

                {/* Milestones under this Year */}
                <div className="relative z-10 space-y-12 sm:space-y-16">
                  {yearMilestones.map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    const theme = THEME_STYLES[item.theme];
                    const IconComponent = item.icon;
                    const isHovered = activeMilestone === item.id;

                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.55 }}
                        className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                          isEven ? "sm:flex-row-reverse" : ""
                        }`}
                      >
                        {/* Milestone Card (Alternates on Desktop, Padded on Mobile) */}
                        <div
                          className="w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0"
                          onMouseEnter={() => setActiveMilestone(item.id)}
                          onMouseLeave={() => setActiveMilestone(null)}
                        >
                          <div
                            className={`group relative overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-xl border p-6 sm:p-7 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] ${
                              isHovered ? `${theme.border} -translate-y-1` : "border-white/10"
                            }`}
                            style={{
                              boxShadow: isHovered
                                ? `0 12px 40px -10px ${theme.glow}`
                                : undefined,
                            }}
                          >
                            {/* Top Badge & Date Indicator */}
                            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                              <span
                                className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[10px] font-bold tracking-wider uppercase ${theme.badgeBg}`}
                              >
                                {item.badge}
                              </span>

                              <span className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                                <Calendar className="h-3 w-3 text-slate-500" />
                                <span>{item.period}</span>
                              </span>
                            </div>

                            {/* Title & Category */}
                            <div className="mt-4">
                              <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">
                                {item.category}
                              </div>
                              <h3 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
                                {item.title}
                              </h3>
                              <p className="mt-0.5 font-mono text-xs" style={{ color: theme.accent }}>
                                {item.subtitle}
                              </p>
                            </div>

                            {/* Description Narrative */}
                            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                              {item.description}
                            </p>

                            {/* Key Achievements Bullet Highlights */}
                            <div className="mt-4 space-y-2 pt-2 border-t border-white/5">
                              {item.highlights.map((highlight, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="flex items-start gap-2 text-xs text-slate-300"
                                >
                                  <CheckCircle2
                                    className="h-3.5 w-3.5 shrink-0 mt-0.5"
                                    style={{ color: theme.accent }}
                                  />
                                  <span>{highlight}</span>
                                </div>
                              ))}
                            </div>

                            {/* Bottom Tech Pills & Quick Action */}
                            <div className="mt-5 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                              <div className="flex flex-wrap gap-1.5">
                                {item.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-mono text-slate-400"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>

                              {item.action && (
                                <a
                                  href={item.action.href}
                                  target={item.action.isExternal ? "_blank" : undefined}
                                  rel={item.action.isExternal ? "noopener noreferrer" : undefined}
                                  className="inline-flex items-center gap-1 text-xs font-mono font-medium hover:underline transition-all"
                                  style={{ color: theme.accent }}
                                >
                                  <span>{item.action.label}</span>
                                  <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Interactive Milestone Spine Node */}
                        <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 flex items-center justify-center">
                          <button
                            onClick={() =>
                              setActiveMilestone(activeMilestone === item.id ? null : item.id)
                            }
                            aria-label={`Inspect milestone: ${item.title}`}
                            className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#070914] backdrop-blur-md transition-transform duration-300 hover:scale-125 focus:outline-none"
                            style={{
                              boxShadow: `0 0 20px ${theme.glow}`,
                              borderColor: isHovered ? theme.accent : "rgba(255,255,255,0.25)",
                            }}
                          >
                            <span
                              className="absolute inset-0 rounded-full animate-ping opacity-30"
                              style={{ backgroundColor: theme.accent }}
                            />
                            <IconComponent
                              className="h-4 w-4 transition-colors"
                              style={{ color: theme.accent }}
                            />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
