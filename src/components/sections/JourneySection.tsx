"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  theme: "cyan" | "gold" | "indigo" | "emerald" | "purple" | "orange";
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
    theme: "orange",
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
    bg: "bg-[#F59E0B]/10",
    text: "text-[#F59E0B]",
    glow: "rgba(245, 158, 11, 0.35)",
    badgeBg: "bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/40",
  },
  orange: {
    accent: "#FF5722",
    border: "border-[#FF5722]/40 hover:border-[#FF5722]/80",
    bg: "bg-[#FF5722]/10",
    text: "text-[#FF5722]",
    glow: "rgba(255, 87, 34, 0.4)",
    badgeBg: "bg-[#FF5722]/20 text-[#FF5722] border-[#FF5722]/40",
  },
  cyan: {
    accent: "#00F5D4",
    border: "border-[#00F5D4]/40 hover:border-[#00F5D4]/80",
    bg: "bg-[#00F5D4]/10",
    text: "text-[#00F5D4]",
    glow: "rgba(0, 245, 212, 0.35)",
    badgeBg: "bg-[#00F5D4]/20 text-[#00F5D4] border-[#00F5D4]/40",
  },
  indigo: {
    accent: "#6366F1",
    border: "border-indigo-500/40 hover:border-indigo-400/80",
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    glow: "rgba(99, 102, 241, 0.35)",
    badgeBg: "bg-indigo-500/20 text-indigo-300 border-indigo-500/40",
  },
  emerald: {
    accent: "#10B981",
    border: "border-emerald-500/40 hover:border-emerald-400/80",
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    glow: "rgba(168, 85, 247, 0.35)",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  },
  purple: {
    accent: "#A855F7",
    border: "border-purple-500/40 hover:border-purple-400/80",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    glow: "rgba(168, 85, 247, 0.35)",
    badgeBg: "bg-purple-500/20 text-purple-300 border-purple-500/40",
  },
};

export default function JourneySection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = MILESTONES[activeIndex];
  const theme = THEME_STYLES[active.theme];
  const IconComponent = active.icon;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : MILESTONES.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < MILESTONES.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="journey"
      className="relative z-10 mx-auto max-w-6xl px-6 py-28 border-t border-white/5 overflow-hidden"
    >
      {/* SECTION HEADER & COUNTER CONTROLS */}
      <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF5722] mb-6">
        <span>04 / TIME JOURNEY</span>
        <div className="h-px flex-1 bg-white/10" />
      </div>

      <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            A path that keeps{" "}
            <span className="text-[#FF5722]">growing.</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-400">
            From algorithmic foundations and hardware-accelerated 3D graphics to academic CS & AI rigor, WorldQuant Gold honors, and live hackathon deployments.
          </p>
        </div>

        {/* Counter and Navigation Controls */}
        <div className="flex items-center gap-4">
          <div className="font-mono text-sm tracking-wider text-slate-400">
            <span className="text-xl font-bold text-white">
              0{activeIndex + 1}
            </span>
            <span className="text-slate-600"> / </span>
            <span>0{MILESTONES.length}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Milestone"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 hover:border-white/30 hover:bg-white/10 hover:text-white transition-all"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Milestone"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FF5722]/40 bg-[#FF5722]/10 text-[#FF5722] hover:bg-[#FF5722] hover:text-white transition-all"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* CENTRAL STAGE WITH GIANT WATERMARK YEAR IN BACKGROUND */}
      <div className="relative min-h-[480px] sm:min-h-[420px] flex items-center justify-center">
        {/* Giant Watermark Year */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden z-0">
          <AnimatePresence mode="wait">
            <motion.span
              key={active.year}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.15 }}
              transition={{ duration: 0.5 }}
              className="font-serif text-[28vw] sm:text-[22vw] font-black text-white/[0.035] tracking-tighter leading-none"
            >
              {active.year}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Active Milestone Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.45 }}
            className="relative z-10 w-full max-w-3xl rounded-3xl bg-white/[0.03] backdrop-blur-2xl border border-white/15 p-7 sm:p-10 shadow-[0_12px_48px_0_rgba(0,0,0,0.5)]"
            style={{
              boxShadow: `0 16px 50px -15px ${theme.glow}`,
            }}
          >
            {/* Top Bar: Badge & Period */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1 font-mono text-xs font-bold tracking-wider uppercase ${theme.badgeBg}`}
              >
                <IconComponent className="h-3.5 w-3.5" />
                <span>{active.badge}</span>
              </span>

              <span className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                <Calendar className="h-3.5 w-3.5 text-slate-500" />
                <span>{active.period}</span>
              </span>
            </div>

            {/* Title & Category */}
            <div className="mt-6">
              <div className="font-mono text-xs uppercase tracking-wider text-slate-400">
                {active.category}
              </div>
              <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-white">
                {active.title}
              </h3>
              <p className="mt-1 font-mono text-xs sm:text-sm" style={{ color: theme.accent }}>
                {active.subtitle}
              </p>
            </div>

            {/* Description Narrative */}
            <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed">
              {active.description}
            </p>

            {/* Highlights with Checkmarks */}
            <div className="mt-6 space-y-2.5 pt-4 border-t border-white/5">
              {active.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 mt-0.5"
                    style={{ color: theme.accent }}
                  />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Bottom Tech Tags & Action Button */}
            <div className="mt-7 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {active.action && (
                <a
                  href={active.action.href}
                  target={active.action.isExternal ? "_blank" : undefined}
                  rel={active.action.isExternal ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-1.5 rounded-full px-4 py-2 font-mono text-xs font-semibold transition-all"
                  style={{
                    backgroundColor: `${theme.accent}20`,
                    color: theme.accent,
                    border: `1px solid ${theme.accent}50`,
                  }}
                >
                  <span>{active.action.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* HORIZONTAL INTERACTIVE TIMELINE SCRUBBER */}
      <div className="relative mt-14 pt-8">
        {/* Connecting track line */}
        <div className="absolute top-1/2 left-4 right-4 h-0.5 -translate-y-1/2 bg-white/10" />

        {/* Milestone Node Dots */}
        <div className="relative z-10 flex items-center justify-between">
          {MILESTONES.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <button
                key={item.id}
                onClick={() => setActiveIndex(idx)}
                className="group relative flex flex-col items-center focus:outline-none"
              >
                {/* Ping animation on active dot */}
                {isActive && (
                  <span className="absolute -inset-2 rounded-full bg-[#FF5722] opacity-40 animate-ping" />
                )}

                {/* Scrubber Dot */}
                <div
                  className={`relative flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                    isActive
                      ? "border-[#FF5722] bg-[#FF5722] scale-125 shadow-[0_0_20px_#FF5722]"
                      : "border-white/30 bg-[#050508] group-hover:border-white group-hover:scale-110"
                  }`}
                >
                  {isActive && <div className="h-1.5 w-1.5 rounded-full bg-white" />}
                </div>

                {/* Year Label */}
                <span
                  className={`mt-3 font-mono text-[11px] sm:text-xs transition-colors ${
                    isActive
                      ? "font-bold text-[#FF5722]"
                      : "text-slate-500 group-hover:text-slate-300"
                  }`}
                >
                  {item.year}
                </span>

                {/* Subtitle / badge teaser */}
                <span className="hidden md:block mt-0.5 font-mono text-[9px] text-slate-500 max-w-[90px] truncate text-center">
                  {item.badge}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
