"use client";

import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Award,
} from "lucide-react";

interface SkillItem {
  name: string;
  descriptor: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
  glowColor: string;
}

const CORE_SKILLS: SkillItem[] = [
  {
    name: "Python",
    descriptor: "Alphas & Numerical Modeling",
    icon: Terminal,
    accentColor: "#38BDF8",
    borderColor: "border-sky-500/40 hover:border-sky-400/80",
    bgColor: "bg-sky-500/10 hover:bg-sky-500/20",
    textColor: "text-sky-300",
    glowColor: "rgba(56, 189, 248, 0.25)",
  },
  {
    name: "Quantitative Finance",
    descriptor: "WorldQuant Gold • StatArb",
    icon: Award,
    accentColor: "#F59E0B",
    borderColor: "border-amber-500/45 hover:border-amber-400/90",
    bgColor: "bg-amber-500/15 hover:bg-amber-500/25",
    textColor: "text-amber-300",
    glowColor: "rgba(245, 158, 11, 0.35)",
  },
  {
    name: "Next.js",
    descriptor: "App Router & SSR Edge",
    icon: Layers,
    accentColor: "#FFFFFF",
    borderColor: "border-white/30 hover:border-white/70",
    bgColor: "bg-white/10 hover:bg-white/20",
    textColor: "text-white",
    glowColor: "rgba(255, 255, 255, 0.22)",
  },
  {
    name: "React",
    descriptor: "Concurrent UI & R3F WebGL",
    icon: Cpu,
    accentColor: "#00F5D4",
    borderColor: "border-teal-400/40 hover:border-teal-300/80",
    bgColor: "bg-teal-500/10 hover:bg-teal-500/20",
    textColor: "text-[#00F5D4]",
    glowColor: "rgba(0, 245, 212, 0.3)",
  },
  {
    name: "AI/ML",
    descriptor: "Autonomous Agent Workflows",
    icon: Sparkles,
    accentColor: "#A855F7",
    borderColor: "border-purple-500/40 hover:border-purple-400/80",
    bgColor: "bg-purple-500/10 hover:bg-purple-500/20",
    textColor: "text-purple-300",
    glowColor: "rgba(168, 85, 247, 0.3)",
  },
  {
    name: "TypeScript",
    descriptor: "Strict Static Type Systems",
    icon: Code2,
    accentColor: "#60A5FA",
    borderColor: "border-blue-500/40 hover:border-blue-400/80",
    bgColor: "bg-blue-500/10 hover:bg-blue-500/20",
    textColor: "text-blue-300",
    glowColor: "rgba(96, 165, 250, 0.28)",
  },
  {
    name: "Git",
    descriptor: "Distributed VCS & CI/CD",
    icon: Code2,
    accentColor: "#FF5722",
    borderColor: "border-orange-500/40 hover:border-orange-400/80",
    bgColor: "bg-orange-500/10 hover:bg-orange-500/20",
    textColor: "text-orange-400",
    glowColor: "rgba(255, 87, 34, 0.28)",
  },
  {
    name: "Tailwind CSS",
    descriptor: "Design Systems & High-Perf UI",
    icon: Layers,
    accentColor: "#38BDF8",
    borderColor: "border-cyan-400/40 hover:border-cyan-300/80",
    bgColor: "bg-cyan-500/10 hover:bg-cyan-500/20",
    textColor: "text-cyan-300",
    glowColor: "rgba(56, 189, 248, 0.25)",
  },
];

const TICKER_KEYWORDS = [
  { text: "TYPESCRIPT", highlight: false },
  { text: "PYTHON", highlight: true },
  { text: "NEXT.JS 16", highlight: false },
  { text: "REACT", highlight: true },
  { text: "TAILWIND CSS", highlight: false },
  { text: "QUANT ALPHAS", highlight: true },
  { text: "AI/ML AGENTS", highlight: false },
  { text: "THREE.JS", highlight: true },
  { text: "GIT & GITHUB", highlight: false },
  { text: "STATISTICAL ARBITRAGE", highlight: true },
  { text: "EDGE COMPUTING", highlight: false },
  { text: "SYSTEMS ARCHITECTURE", highlight: true },
];

function SkillBadge({ skill }: { skill: SkillItem }) {
  const IconComponent = skill.icon;

  return (
    <div
      style={{
        boxShadow: `0 0 20px -5px ${skill.glowColor}`,
      }}
      className={`group/badge flex shrink-0 items-center gap-3.5 rounded-full border px-5 py-2.5 backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] ${skill.borderColor} ${skill.bgColor}`}
    >
      {/* Glowing Pulsing Beacon */}
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span
          style={{ backgroundColor: skill.accentColor }}
          className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
        />
        <span
          style={{ backgroundColor: skill.accentColor }}
          className="relative inline-flex h-2.5 w-2.5 rounded-full"
        />
      </span>

      {/* Tech Icon */}
      <div
        style={{ color: skill.accentColor }}
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/5 border border-white/10"
      >
        <IconComponent className="h-3.5 w-3.5 transition-transform duration-300 group-hover/badge:rotate-6" />
      </div>

      {/* Text Label & Descriptor */}
      <div className="flex flex-col text-left">
        <span className={`text-sm font-bold tracking-tight ${skill.textColor}`}>
          {skill.name}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
          {skill.descriptor}
        </span>
      </div>
    </div>
  );
}

export default function SkillMarquee() {
  const repeatedSkills = [...CORE_SKILLS, ...CORE_SKILLS, ...CORE_SKILLS];
  const repeatedTicker = [...TICKER_KEYWORDS, ...TICKER_KEYWORDS, ...TICKER_KEYWORDS];

  return (
    <section className="relative z-10 w-full overflow-hidden border-y border-white/10 bg-[#060811]/90 py-8 backdrop-blur-2xl">
      {/* Top Subtle Telemetry Header */}
      <div className="mx-auto mb-6 flex max-w-6xl items-center justify-between px-6 font-mono text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722] animate-pulse" />
          <span className="uppercase tracking-widest text-[#FF5722]">
            CORE ARSENAL & COMPUTATIONAL RUNTIMES
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-slate-500">
          <span>60 FPS HARDWARE ACCELERATED</span>
          <span>•</span>
          <span>HOVER TO PAUSE</span>
        </div>
      </div>

      {/* Left & Right Smooth Fade Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 sm:w-44 bg-gradient-to-r from-[#050508] via-[#050508]/85 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 sm:w-44 bg-gradient-to-l from-[#050508] via-[#050508]/85 to-transparent" />

      {/* Track 1: 60FPS Infinite Glowing Pill Badges */}
      <div className="flex w-full select-none overflow-hidden mb-6">
        <div className="animate-marquee flex items-center gap-5 pr-5">
          {repeatedSkills.map((skill, index) => (
            <SkillBadge key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>

      {/* Track 2: Bold Typography Ticker (Alternating White & Energetic Orange) */}
      <div className="flex w-full select-none overflow-hidden border-t border-white/5 pt-4">
        <div className="animate-marquee-reverse flex items-center gap-8 whitespace-nowrap pr-8 text-xl sm:text-2xl font-black font-sans tracking-tight">
          {repeatedTicker.map((item, index) => (
            <div key={`${item.text}-${index}`} className="flex items-center gap-8">
              <span
                className={
                  item.highlight
                    ? "text-[#FF5722] text-glow-orange"
                    : "text-white/80"
                }
              >
                {item.text}
              </span>
              <span className="text-white/20">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
