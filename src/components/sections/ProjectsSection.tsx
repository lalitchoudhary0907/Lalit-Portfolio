"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Eye,
  Layers,
  Play,
  TrendingUp,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

function TiltProjectCard({
  project,
  index,
}: {
  project: (typeof PORTFOLIO_DATA.projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [showLiveEmbed, setShowLiveEmbed] = useState(false);
  const isFocusFlow = project.id === "focusflow";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || showLiveEmbed) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4.5;
    const rotateY = ((x - centerX) / centerX) * 4.5;

    cardRef.current.style.transform = `perspective(1200px) rotateX(${rotateX.toFixed(
      2
    )}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.01, 1.01, 1.01)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`group relative overflow-hidden rounded-3xl p-6 sm:p-8 transition-transform duration-200 ease-out will-change-transform ${
          isFocusFlow ? "glass-panel" : "glass-panel-gold"
        }`}
      >
        {/* Top Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
          <div className="flex items-center gap-3">
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-xl font-mono text-xs font-bold ${
                isFocusFlow
                  ? "bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/40"
                  : "bg-[#F59E0B]/15 text-[#F59E0B] border border-[#F59E0B]/40"
              }`}
            >
              0{index + 1}
            </span>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-slate-400">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Interactive Action Controls */}
          <div className="flex items-center gap-2.5">
            {isFocusFlow && (
              <button
                onClick={() => setShowLiveEmbed(!showLiveEmbed)}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-mono font-medium transition-all ${
                  showLiveEmbed
                    ? "bg-[#00F5D4] text-slate-950 shadow-[0_0_20px_rgba(0,245,212,0.4)]"
                    : "border border-[#00F5D4]/40 bg-[#00F5D4]/10 text-[#00F5D4] hover:bg-[#00F5D4]/20"
                }`}
              >
                {showLiveEmbed ? (
                  <>
                    <Layers className="h-3.5 w-3.5" />
                    <span>Exit Live Sandbox</span>
                  </>
                ) : (
                  <>
                    <Play className="h-3.5 w-3.5 fill-current" />
                    <span>Test Live App Inside Card</span>
                  </>
                )}
              </button>
            )}

            <a
              href={project.liveUrl}
              target={project.liveUrl.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-mono text-white hover:border-white/40 hover:bg-white/10 transition-all"
            >
              <span>{isFocusFlow ? "Open Fullscreen" : "View Credential"}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-12 items-center">
          {/* Left Column: Description, Telemetry Metrics & Tech Tags */}
          <div className="lg:col-span-5 space-y-5">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {/* Key Engineering Highlights */}
            <div className="space-y-2.5 pt-1">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                System Benchmarks & Impact
              </div>
              {project.metrics.map((m, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200"
                >
                  <CheckCircle2
                    className={`h-4 w-4 shrink-0 ${
                      isFocusFlow ? "text-[#00F5D4]" : "text-[#F59E0B]"
                    }`}
                  />
                  <span>{m}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-mono text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Visual Preview / Live App Iframe / Quant Chart */}
          <div className="lg:col-span-7">
            {isFocusFlow ? (
              <div className="relative overflow-hidden rounded-2xl border border-[#00F5D4]/30 bg-[#070913] shadow-2xl">
                {/* Browser Window Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 bg-black/60 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="rounded-md bg-white/5 px-3 py-0.5 text-[11px] font-mono text-[#00F5D4]">
                    https://focus-flow0907.vercel.app
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    {showLiveEmbed ? "INTERACTIVE" : "PREVIEW"}
                  </div>
                </div>

                {showLiveEmbed ? (
                  <iframe
                    src="https://focus-flow0907.vercel.app/"
                    title="FocusFlow Live Sandbox"
                    className="h-[360px] w-full border-0 bg-slate-950"
                    loading="lazy"
                  />
                ) : (
                  <div className="relative h-[320px] sm:h-[360px] w-full overflow-hidden flex flex-col justify-between p-6 bg-[radial-gradient(circle_at_top_right,rgba(0,245,212,0.16),transparent_55%),radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.15),transparent_55%)]">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/30 px-3 py-1 text-xs font-mono text-[#00F5D4]">
                        <span className="h-2 w-2 rounded-full bg-[#00F5D4] animate-ping" />
                        FLOW STATE ENGINE ACTIVE
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        v2.4 PRODUCTION
                      </span>
                    </div>

                    {/* Simulated FocusFlow HUD Preview Graphic */}
                    <div className="my-auto grid grid-cols-3 gap-3">
                      <div className="col-span-2 rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur-md">
                        <div className="text-xs font-mono text-slate-400">
                          DEEP WORK SESSION TIMER
                        </div>
                        <div className="mt-1 font-mono text-3xl sm:text-4xl font-bold text-white tracking-wider">
                          45:00{" "}
                          <span className="text-xs font-normal text-[#00F5D4]">
                            OPTIMAL
                          </span>
                        </div>
                        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#00F5D4] to-indigo-500" />
                        </div>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-black/45 p-4 backdrop-blur-md flex flex-col justify-between">
                        <div className="text-xs font-mono text-slate-400">
                          COGNITIVE SCORE
                        </div>
                        <div className="font-mono text-2xl sm:text-3xl font-bold text-[#00F5D4]">
                          98.4%
                        </div>
                        <div className="text-[10px] font-mono text-emerald-400">
                          +14% vs avg
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/10 pt-3">
                      <span className="text-xs text-slate-400">
                        Click <strong className="text-white">Test Live App Inside Card</strong> above to interact with the real deployment.
                      </span>
                      <button
                        onClick={() => setShowLiveEmbed(true)}
                        className="flex items-center gap-1 text-xs font-mono text-[#00F5D4] hover:underline"
                      >
                        <Eye className="h-3.5 w-3.5" />
                        <span>Launch Sandbox</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* WorldQuant Alpha Quantitative Telemetry Visualizer */
              <div className="relative overflow-hidden rounded-2xl border border-[#F59E0B]/35 bg-[#09080d] p-6 shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-[#F59E0B]" />
                    <span className="font-mono text-xs uppercase tracking-wider text-[#F59E0B]">
                      WORLDQUANT BRAIN • CUMULATIVE ALPHA SIMULATION
                    </span>
                  </div>
                  <span className="rounded-md bg-[#F59E0B]/15 px-2.5 py-0.5 font-mono text-xs font-semibold text-[#F59E0B]">
                    GOLD TIER
                  </span>
                </div>

                {/* Animated SVG Quantitative Equity Curve */}
                <div className="relative my-6 overflow-hidden rounded-xl bg-black/40 p-4 border border-white/5">
                  <div className="flex items-center justify-between pb-2">
                    <span className="font-mono text-[10px] text-slate-400">
                      CUMULATIVE PnL / ALPHA SHARPE TRAJECTORY
                    </span>
                    <span className="font-mono text-[10px] text-[#F59E0B] flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F59E0B] animate-ping" />
                      ALPHA ACTIVE
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 500 150"
                    className="h-36 w-full overflow-visible"
                  >
                    <defs>
                      <linearGradient
                        id="goldGrad"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.45" />
                        <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.0" />
                      </linearGradient>
                      <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>

                    {/* Subtle Grid Lines */}
                    <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="80" x2="500" y2="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                    <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

                    <motion.path
                      d="M 0 135 Q 60 120, 110 100 T 220 75 T 330 45 T 430 25 L 500 10 L 500 150 L 0 150 Z"
                      fill="url(#goldGrad)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.2, delay: 0.2 }}
                    />
                    <motion.path
                      d="M 0 135 Q 60 120, 110 100 T 220 75 T 330 45 T 430 25 L 500 10"
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth="3.5"
                      filter="url(#goldGlow)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.8, ease: "easeOut" }}
                    />

                    {/* Lead Pulsing Beacon Point */}
                    <circle cx="500" cy="10" r="4.5" fill="#F59E0B" />
                    <circle cx="500" cy="10" r="9" fill="none" stroke="#F59E0B" strokeWidth="1.5" className="animate-ping" />
                  </svg>
                </div>

                <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-4 font-mono">
                  <div>
                    <div className="text-[10px] text-slate-400">CHALLENGE RANK</div>
                    <div className="text-sm sm:text-base font-bold text-[#F59E0B]">
                      GOLD LEVEL
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">STRATEGY TYPE</div>
                    <div className="text-sm sm:text-base font-bold text-white">
                      Market-Neutral
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">SIGNAL FOCUS</div>
                    <div className="text-sm sm:text-base font-bold text-[#00F5D4]">
                      High Sharpe / Low Turnover
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00F5D4]">
            <Code2 className="h-4 w-4" />
            <span>02 // PRODUCTION ENGINEERING & QUANT RESEARCH</span>
          </div>
          <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Flagship Systems.
          </h2>
        </div>
        <p className="max-w-md text-sm text-slate-400">
          Interactive 3D cards—hover to tilt in perspective space, or launch the{" "}
          <span className="text-[#00F5D4]">FocusFlow Live Sandbox</span> directly inside the card.
        </p>
      </div>

      <div className="space-y-10">
        {PORTFOLIO_DATA.projects.map((project, index) => (
          <TiltProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}