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
}

const CORE_SKILLS: SkillItem[] = [
  {
    name: "Python",
    descriptor: "Alphas & Numerical Modeling",
    icon: Terminal,
  },
  {
    name: "Quantitative Finance",
    descriptor: "WorldQuant Gold • StatArb",
    icon: Award,
  },
  {
    name: "Next.js",
    descriptor: "App Router & SSR Edge",
    icon: Layers,
  },
  {
    name: "React",
    descriptor: "Concurrent UI & R3F WebGL",
    icon: Cpu,
  },
  {
    name: "AI/ML",
    descriptor: "Autonomous Agent Workflows",
    icon: Sparkles,
  },
  {
    name: "TypeScript",
    descriptor: "Strict Static Type Systems",
    icon: Code2,
  },
  {
    name: "Git",
    descriptor: "Distributed VCS & CI/CD",
    icon: Code2,
  },
  {
    name: "Tailwind CSS",
    descriptor: "Design Systems & High-Perf UI",
    icon: Layers,
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
    <div className="flex shrink-0 items-center gap-3.5 rounded-full border border-white/[0.08] bg-[#181614] px-5 py-2.5 backdrop-blur-xl transition-all duration-300 hover:border-white/20">
      {/* Warm Ember Beacon */}
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF5722]" />
      </span>

      {/* Tech Icon */}
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[0.04] border border-white/[0.08] text-[#F5F3EF]">
        <IconComponent className="h-3.5 w-3.5" />
      </div>

      {/* Text Label & Descriptor */}
      <div className="flex flex-col text-left">
        <span className="text-sm font-semibold tracking-tight text-[#F5F3EF]">
          {skill.name}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-[#9E9890]">
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
    <section className="relative z-10 w-full overflow-hidden border-y border-white/[0.08] bg-[#121110] py-8">
      {/* Top Subtle Telemetry Header */}
      <div className="mx-auto mb-6 flex max-w-6xl items-center justify-between px-6 font-mono text-[11px] text-[#9E9890]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
          <span className="uppercase tracking-widest text-[#FF5722]">
            CORE ARSENAL & COMPUTATIONAL RUNTIMES
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-[#9E9890]">
          <span>60 FPS HARDWARE ACCELERATED</span>
          <span>•</span>
          <span>HOVER TO PAUSE</span>
        </div>
      </div>

      {/* Left & Right Smooth Fade Masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 sm:w-44 bg-gradient-to-r from-[#121110] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 sm:w-44 bg-gradient-to-l from-[#121110] to-transparent" />

      {/* Track 1: 60FPS Infinite Editorial Pill Badges */}
      <div className="flex w-full select-none overflow-hidden mb-6">
        <div className="animate-marquee flex items-center gap-4 pr-4">
          {repeatedSkills.map((skill, index) => (
            <SkillBadge key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </div>

      {/* Track 2: Bold Typography Ticker (Alternating Warm White & Warm Ember Orange) */}
      <div className="flex w-full select-none overflow-hidden border-t border-white/[0.06] pt-5">
        <div className="animate-marquee-reverse flex items-center gap-8 whitespace-nowrap pr-8 text-xl sm:text-2xl font-black font-sans tracking-tight">
          {repeatedTicker.map((item, index) => (
            <div key={`${item.text}-${index}`} className="flex items-center gap-8">
              <span
                className={
                  item.highlight
                    ? "text-[#FF5722]"
                    : "text-[#F5F3EF]"
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
