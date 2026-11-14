"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Eye,
  Layers,
  Play,
  Sparkles,
  Terminal,
  TrendingUp,
  Award,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

// Inline GitHub SVG logo adhering to critical icon rules
function GitHubIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      className={`${className} fill-current`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

// Reusable Bento Card Container with Warm Obsidian Surface & Dynamic Hover Border Lighting
function BentoCard({
  children,
  className = "",
  glowColor = "rgba(255, 87, 34, 0.18)",
  surfaceGlow = "rgba(255, 87, 34, 0.04)",
  disableTilt = false,
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  surfaceGlow?: string;
  disableTilt?: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);

    if (!disableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -2.5;
      const rotateY = ((x - centerX) / centerX) * 2.5;
      cardRef.current.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(
        2
      )}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.006, 1.006, 1.006)`;
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    if (!disableTilt) {
      cardRef.current.style.transform =
        "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative overflow-hidden rounded-3xl bg-[#181614] border border-white/[0.08] p-6 sm:p-8 transition-all duration-300 ease-out will-change-transform shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] hover:border-white/20 ${className}`}
    >
      {/* Dynamic Cursor-Following Border Lighting */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--mouse-x, 150px) var(--mouse-y, 150px), ${glowColor}, transparent 65%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1.5px",
          borderRadius: "1.5rem",
        }}
      />

      {/* Subtle Inner Radial Ambient Surface Glow */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(500px circle at var(--mouse-x, 150px) var(--mouse-y, 150px), ${surfaceGlow}, transparent 75%)`,
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default function ProjectsSection() {
  const [showLiveEmbed, setShowLiveEmbed] = useState(false);
  const focusFlowProject = PORTFOLIO_DATA.projects.find((p) => p.id === "focusflow")!;
  const quantProject = PORTFOLIO_DATA.projects.find((p) => p.id === "worldquant-alphas")!;

  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-28 border-t border-white/[0.08]">
      {/* Split-View Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* ========================================================
            LEFT COLUMN (STICKY ON DESKTOP)
           ======================================================== */}
        <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF5722] mb-4">
            <span>03 / SELECTED WORK</span>
            <div className="h-px flex-1 bg-white/[0.08]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F3EF] leading-tight">
            Things I&apos;ve <br className="hidden sm:inline" />
            <span className="text-[#FF5722]">Built.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#9E9890] leading-relaxed">
            Ideas made tangible across AI, full-stack software, and quantitative alpha research. Shipped to real users with latency-critical performance.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href="https://focus-flow0907.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-full bg-[#FF5722] px-6 py-3.5 text-sm font-bold text-[#121110] shadow-[0_0_25px_rgba(255,87,34,0.35)] hover:bg-[#ff6838] transition-all"
            >
              <span>LAUNCH FOCUSFLOW</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-full border border-white/[0.08] bg-[#181614] px-6 py-3.5 text-sm font-medium text-[#9E9890] hover:border-white/20 hover:text-[#F5F3EF] transition-all"
            >
              <div className="flex items-center gap-2">
                <GitHubIcon className="h-4 w-4" />
                <span>ALL REPOSITORIES</span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-[#9E9890]" />
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] hidden lg:block">
            <div className="font-mono text-xs text-[#9E9890] uppercase tracking-wider mb-2">
              FEATURED CAPABILITIES
            </div>
            <ul className="space-y-2 text-xs text-[#9E9890] font-mono">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
                Interactive In-Card Live Sandbox
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
                Institutional Alpha Simulation
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
                In-Person Hackathon Deployments
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN: MULTI-CARD SHOWCASE GRID
           ======================================================== */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* ========================================================
              CARD 01: FocusFlow Flagship Hackathon App
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <BentoCard
              glowColor="rgba(255, 87, 34, 0.25)"
              surfaceGlow="rgba(255, 87, 34, 0.05)"
              disableTilt={showLiveEmbed}
              className="h-full flex flex-col justify-between"
            >
              {/* Top Bar: Title & Quick Actions */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 font-mono text-xs font-bold text-[#FF5722]">
                      01
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F3EF] flex items-center gap-2">
                        <span>{focusFlowProject.title}</span>
                        <span className="rounded-full bg-[#FF5722]/15 border border-[#FF5722]/30 px-2.5 py-0.5 text-[10px] font-mono font-semibold text-[#FF5722]">
                          HACKATHON WINNER
                        </span>
                      </h3>
                      <p className="text-xs font-mono text-[#9E9890]">
                        {focusFlowProject.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2">
                    {/* Test Live App Toggle */}
                    <button
                      onClick={() => setShowLiveEmbed(!showLiveEmbed)}
                      className={`flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-mono font-medium transition-all ${
                        showLiveEmbed
                          ? "bg-[#FF5722] text-[#121110] font-bold shadow-[0_0_20px_rgba(255,87,34,0.4)]"
                          : "border border-[#FF5722]/40 bg-[#FF5722]/10 text-[#FF5722] hover:bg-[#FF5722]/20"
                      }`}
                    >
                      {showLiveEmbed ? (
                        <>
                          <Layers className="h-3.5 w-3.5" />
                          <span>Exit Sandbox</span>
                        </>
                      ) : (
                        <>
                          <Play className="h-3.5 w-3.5 fill-current" />
                          <span>Test Live App Inside Card</span>
                        </>
                      )}
                    </button>

                    {/* Quick-action Repository Link */}
                    <a
                      href={focusFlowProject.githubUrl || "https://github.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/5 px-3 py-1.5 text-xs font-mono text-[#9E9890] hover:border-white/20 hover:text-[#F5F3EF] transition-all"
                      title="View FocusFlow GitHub Repository"
                    >
                      <GitHubIcon className="h-3.5 w-3.5" />
                      <span>Repo</span>
                    </a>

                    {/* Open Live External Link */}
                    <a
                      href={focusFlowProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/5 px-3 py-1.5 text-xs font-mono text-[#F5F3EF] hover:border-[#FF5722]/50 hover:bg-[#FF5722]/10 hover:text-[#FF5722] transition-all"
                    >
                      <span>Launch</span>
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-[#9E9890] leading-relaxed">
                  {focusFlowProject.description}
                </p>

                {/* Interactive Visual Preview or Live Embed Window */}
                <div className="mt-5 relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121110] shadow-2xl">
                  {/* Browser Top Chrome */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#141312] px-4 py-2">
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                    </div>
                    <div className="rounded-md bg-white/5 px-3 py-0.5 text-[11px] font-mono text-[#FF5722]">
                      https://focus-flow0907.vercel.app
                    </div>
                    <div className="text-[10px] font-mono text-[#9E9890]">
                      {showLiveEmbed ? "INTERACTIVE" : "SANDBOX"}
                    </div>
                  </div>

                  {showLiveEmbed ? (
                    <iframe
                      src="https://focus-flow0907.vercel.app/"
                      title="FocusFlow Live Sandbox"
                      className="h-[340px] w-full border-0 bg-[#121110]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="relative h-[290px] w-full overflow-hidden flex flex-col justify-between p-5 bg-[radial-gradient(circle_at_top_right,rgba(255,87,34,0.12),transparent_55%)]">
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF5722]/15 border border-[#FF5722]/30 px-3 py-0.5 text-xs font-mono text-[#FF5722]">
                          <span className="h-2 w-2 rounded-full bg-[#FF5722] animate-ping" />
                          FLOW STATE ENGINE ACTIVE
                        </span>
                        <span className="font-mono text-xs text-[#9E9890]">
                          v2.4 PRODUCTION
                        </span>
                      </div>

                      {/* Simulated FocusFlow HUD */}
                      <div className="my-auto grid grid-cols-3 gap-3">
                        <div className="col-span-2 rounded-xl border border-white/[0.08] bg-[#181614] p-3.5 backdrop-blur-md">
                          <div className="text-[10px] font-mono text-[#9E9890]">
                            DEEP WORK TIMER
                          </div>
                          <div className="mt-0.5 font-mono text-3xl font-bold text-[#F5F3EF] tracking-wider">
                            45:00{" "}
                            <span className="text-xs font-normal text-[#FF5722]">
                              OPTIMAL
                            </span>
                          </div>
                          <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                            <div className="h-full w-3/4 rounded-full bg-[#FF5722]" />
                          </div>
                        </div>
                        <div className="rounded-xl border border-white/[0.08] bg-[#181614] p-3.5 backdrop-blur-md flex flex-col justify-between">
                          <div className="text-[10px] font-mono text-[#9E9890]">
                            FLOW INDEX
                          </div>
                          <div className="font-mono text-2xl font-bold text-[#FF5722]">
                            98.4%
                          </div>
                          <div className="text-[10px] font-mono text-[#9E9890]">
                            +14% vs avg
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-white/[0.08] pt-2.5">
                        <span className="text-xs text-[#9E9890]">
                          Click <strong className="text-[#F5F3EF]">Test Live App Inside Card</strong> to interact.
                        </span>
                        <button
                          onClick={() => setShowLiveEmbed(true)}
                          className="flex items-center gap-1 text-xs font-mono text-[#FF5722] hover:underline"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          <span>Launch Sandbox</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Highlights & Tech Tags */}
              <div className="mt-5 pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {focusFlowProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-[#9E9890]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-xs font-mono text-[#FF5722] flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Sub-100ms UI transitions</span>
                </div>
              </div>
            </BentoCard>
          </motion.div>

          {/* ========================================================
              CARD 02: WorldQuant BRAIN Alpha Suite
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <BentoCard
              glowColor="rgba(255, 87, 34, 0.25)"
              surfaceGlow="rgba(255, 87, 34, 0.05)"
              className="h-full flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 font-mono text-xs font-bold text-[#FF5722]">
                      02
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F3EF]">
                        Quant Alpha Suite
                      </h3>
                      <p className="text-xs font-mono text-[#FF5722]">
                        WorldQuant BRAIN Models
                      </p>
                    </div>
                  </div>

                  <a
                    href="#credentials"
                    className="flex items-center gap-1.5 rounded-full border border-[#FF5722]/35 bg-[#FF5722]/10 px-3 py-1.5 text-xs font-mono text-[#FF5722] hover:bg-[#FF5722] hover:text-[#121110] transition-all"
                  >
                    <Award className="h-3.5 w-3.5" />
                    <span>Gold Vault</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-[#9E9890] leading-relaxed">
                  {quantProject.description}
                </p>

                {/* Animated SVG Cumulative Alpha Equity Curve */}
                <div className="relative my-5 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#141312] p-4 shadow-xl">
                  <div className="flex items-center justify-between pb-2">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="h-3.5 w-3.5 text-[#FF5722]" />
                      <span className="font-mono text-[10px] text-[#9E9890]">
                        PnL & SHARPE SIMULATION
                      </span>
                    </div>
                    <span className="rounded-md bg-[#FF5722]/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#FF5722] flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722] animate-ping" />
                      GOLD LEVEL
                    </span>
                  </div>

                  <svg viewBox="0 0 500 150" className="h-36 w-full overflow-visible">
                    <defs>
                      <linearGradient id="bentoEmberGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF5722" stopOpacity="0.35" />
                        <stop offset="70%" stopColor="#FF5722" stopOpacity="0.05" />
                        <stop offset="100%" stopColor="#FF5722" stopOpacity="0.0" />
                      </linearGradient>
                      <filter id="bentoEmberGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

                    <motion.path
                      d="M 0 135 Q 60 120, 110 100 T 220 75 T 330 45 T 430 25 L 500 10 L 500 150 L 0 150 Z"
                      fill="url(#bentoEmberGrad)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                    />
                    <motion.path
                      d="M 0 135 Q 60 120, 110 100 T 220 75 T 330 45 T 430 25 L 500 10"
                      fill="none"
                      stroke="#FF5722"
                      strokeWidth="3.5"
                      filter="url(#bentoEmberGlow)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                    />

                    <circle cx="500" cy="10" r="4.5" fill="#FF5722" />
                    <circle
                      cx="500"
                      cy="10"
                      r="9"
                      fill="none"
                      stroke="#FF5722"
                      strokeWidth="1.5"
                      className="animate-ping"
                    />
                  </svg>

                  {/* Telemetry badges */}
                  <div className="grid grid-cols-3 gap-2 border-t border-white/[0.08] pt-3 font-mono text-center">
                    <div>
                      <div className="text-[9px] text-[#9E9890]">RANK</div>
                      <div className="text-xs font-bold text-[#FF5722]">GOLD LEVEL</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-[#9E9890]">TYPE</div>
                      <div className="text-xs font-bold text-[#F5F3EF]">Market-Neutral</div>
                    </div>
                    <div>
                      <div className="text-[9px] text-[#9E9890]">SIGNAL</div>
                      <div className="text-xs font-bold text-[#FF5722]">High Sharpe</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech Tags */}
              <div className="mt-4 pt-3 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                {quantProject.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-[#9E9890]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </BentoCard>
          </motion.div>

          {/* ========================================================
              CARD 03: Hacktoberfest 2026 In-Person Hack Day
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <BentoCard
              glowColor="rgba(255, 87, 34, 0.25)"
              surfaceGlow="rgba(255, 87, 34, 0.05)"
              className="h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 font-mono text-xs font-bold text-[#FF5722]">
                      03
                    </span>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-[#F5F3EF]">
                        Hacktoberfest 2026
                      </h3>
                      <p className="text-xs font-mono text-[#9E9890]">
                        Sonipat x Rishihood University
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href={PORTFOLIO_DATA.personal.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/5 px-2.5 py-1.5 text-xs font-mono text-[#9E9890] hover:border-white/20 hover:text-[#F5F3EF] transition-all"
                      title="View Open Source Repositories"
                    >
                      <GitHubIcon className="h-3.5 w-3.5" />
                      <span>Repo</span>
                    </a>
                    <a
                      href="#credentials"
                      className="flex items-center gap-1 rounded-full border border-[#FF5722]/35 bg-[#FF5722]/10 px-2.5 py-1.5 text-xs font-mono text-[#FF5722] hover:bg-[#FF5722] hover:text-[#121110] transition-all"
                    >
                      <span>Inspect</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                <p className="mt-4 text-sm text-[#9E9890] leading-relaxed">
                  Participated in-person at Hacktoberfest 2026 Hack Day Sonipat, collaborating with maintainers on production open-source software, presented by DigitalOcean and powered by MLH x DEV.
                </p>

                <div className="mt-5 space-y-2.5 rounded-2xl border border-white/[0.08] bg-[#121110] p-4 font-mono text-xs">
                  <div className="flex items-center justify-between text-[#9E9890]">
                    <span>VENUE:</span>
                    <span className="text-[#F5F3EF]">Sonipat x Rishihood Uni</span>
                  </div>
                  <div className="flex items-center justify-between text-[#9E9890]">
                    <span>ORGANIZERS:</span>
                    <span className="text-[#FF5722]">DigitalOcean x MLH & DEV</span>
                  </div>
                  <div className="flex items-center justify-between text-[#9E9890]">
                    <span>COLLABORATION:</span>
                    <span className="text-[#F5F3EF]">PRs Merged On-Site</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.08] flex flex-wrap gap-1.5">
                {["Open Source", "Git & GitHub", "Full-Stack", "Linux CLI", "Hackathon"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-[#9E9890]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </BentoCard>
          </motion.div>

          {/* ========================================================
              CARD 04: Cognitive Flow & Edge Architecture Telemetry
             ======================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <BentoCard
              glowColor="rgba(255, 87, 34, 0.25)"
              surfaceGlow="rgba(255, 87, 34, 0.05)"
              className="h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/30 font-mono text-xs font-bold text-[#FF5722]">
                      04
                    </span>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-[#F5F3EF] flex items-center gap-2">
                        <span>Flow-State Architecture</span>
                        <Sparkles className="h-4 w-4 text-[#FF5722]" />
                      </h3>
                      <p className="text-xs font-mono text-[#9E9890]">
                        Cognitive Engine & Edge Deployment Telemetry
                      </p>
                    </div>
                  </div>

                  <a
                    href="https://focus-flow0907.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 rounded-full bg-[#FF5722] px-3.5 py-1.5 text-xs font-mono font-semibold text-[#121110] shadow-[0_0_20px_rgba(255,87,34,0.35)] hover:bg-[#ff6838] transition-all"
                  >
                    <Terminal className="h-3.5 w-3.5" />
                    <span>Launch Live</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>

                <p className="mt-4 text-sm text-[#9E9890] leading-relaxed">
                  FocusFlow incorporates cognitive psychology pacing with high-performance edge compute. Built with Next.js 16 App Router, it synchronizes real-time session telemetry with sub-100ms latency across global edge points.
                </p>

                {/* 4-Stat Telemetry Matrix */}
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
                  <div className="rounded-xl border border-white/[0.08] bg-[#121110] p-3">
                    <div className="text-[10px] text-[#9E9890]">EDGE P99 LATENCY</div>
                    <div className="mt-1 text-lg font-bold text-[#FF5722]">&lt; 45ms</div>
                    <div className="text-[9px] text-[#9E9890]">Vercel Edge</div>
                  </div>
                  <div className="rounded-xl border border-white/[0.08] bg-[#121110] p-3">
                    <div className="text-[10px] text-[#9E9890]">OPTIMAL PACING</div>
                    <div className="mt-1 text-lg font-bold text-[#F5F3EF]">45:00</div>
                    <div className="text-[9px] text-[#9E9890]">Deep Work Cycle</div>
                  </div>
                  <div className="rounded-xl border border-white/[0.08] bg-[#121110] p-3">
                    <div className="text-[10px] text-[#9E9890]">COGNITIVE SCORE</div>
                    <div className="mt-1 text-lg font-bold text-[#FF5722]">98.4%</div>
                    <div className="text-[9px] text-[#9E9890]">Distraction-Free</div>
                  </div>
                  <div className="rounded-xl border border-white/[0.08] bg-[#121110] p-3">
                    <div className="text-[10px] text-[#9E9890]">TARGET FPS</div>
                    <div className="mt-1 text-lg font-bold text-[#F5F3EF]">60 - 120</div>
                    <div className="text-[9px] text-[#9E9890]">Hardware Accel</div>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#9E9890]">
                <div className="flex items-center gap-2">
                  <Cpu className="h-3.5 w-3.5 text-[#FF5722]" />
                  <span>Zero-clutter cognitive UX architecture</span>
                </div>
                <span className="text-[#FF5722]">VERIFIED PRODUCTION GRADE</span>
              </div>
            </BentoCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
