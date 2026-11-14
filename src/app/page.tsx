"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight, Award, Code2, Cpu, Sparkles, Terminal } from "lucide-react";
import Scene3D from "@/components/canvas/Scene3D";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CredentialsVault from "@/components/sections/CredentialsVault";
import SkillsAndContact from "@/components/sections/SkillsAndContact";
import CommandBar from "@/components/ui/CommandBar";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function HomePage() {
  const mouseX = useMotionValue(400);
  const mouseY = useMotionValue(250);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <SmoothScroll />
      <CustomCursor />
      <Scene3D />
      <Navbar />

      {/* 01. HERO & TELEMETRY SECTION WITH DYNAMIC MOUSE-TRACKING SPOTLIGHT */}
      <section
        onMouseMove={handleMouseMove}
        className="group relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28 pb-16"
      >
        {/* Dynamic Mouse-Tracking Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-x-20 -top-20 -bottom-20 z-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                700px circle at ${mouseX}px ${mouseY}px,
                rgba(0, 245, 212, 0.15),
                rgba(99, 102, 241, 0.06) 40%,
                transparent 75%
              )
            `,
          }}
        />

        {/* Precision Subtle Grid Lines Behind Header */}
        <div className="pointer-events-none absolute -inset-x-20 -top-20 -bottom-20 z-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_65%,transparent_100%)]" />

        <div className="relative z-10 max-w-3xl">
          {/* Live Availability Pill Badge + WorldQuant Gold Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 flex flex-wrap items-center gap-3"
          >
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-mono text-emerald-300 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.18)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-semibold tracking-wide uppercase">
                {PORTFOLIO_DATA.personal.status}
              </span>
            </div>

            {/* Official Credentials Teaser Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-3.5 py-1.5 text-xs font-mono text-[#F59E0B] backdrop-blur-md">
              <Award className="h-3.5 w-3.5" />
              <span>WORLDQUANT GOLD • HACKTOBERFEST 2026</span>
            </div>
          </motion.div>

          {/* Massive Bold Typography with Multi-Stop Gradient Text Clip */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.98] sm:leading-[1.0] text-white"
          >
            <span className="block text-white/95">
              Engineering
            </span>
            <span className="bg-gradient-to-r from-[#00F5D4] via-teal-200 to-[#6366F1] bg-clip-text text-transparent text-glow-cyan">
              Flow-State
            </span>{" "}
            <span className="text-white/90">
              Systems &
            </span>{" "}
            <span className="bg-gradient-to-r from-[#F59E0B] via-amber-200 to-yellow-100 bg-clip-text text-transparent text-glow-gold">
              Quant Alphas.
            </span>
          </motion.h1>

          {/* High-Impact Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-7 max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed font-normal"
          >
            Hi, I&apos;m <strong className="text-white font-semibold">{PORTFOLIO_DATA.personal.name}</strong>. Full-stack product engineer & quantitative researcher architecting latency-critical web platforms, autonomous AI agent pipelines, and institutional-grade statistical arbitrage models.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://focus-flow0907.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-[#00F5D4] px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(0,245,212,0.4)] hover:bg-white transition-all duration-300"
            >
              <span>Launch FocusFlow App</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#credentials"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md hover:border-[#F59E0B]/60 hover:bg-[#F59E0B]/10 transition-all duration-300"
            >
              <Sparkles className="h-4 w-4 text-[#F59E0B]" />
              <span>Inspect Gold Credentials</span>
            </a>

            <a
              href="#projects"
              className="hidden sm:flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-3.5 text-sm font-mono text-slate-400 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              <Terminal className="h-3.5 w-3.5 text-[#00F5D4]" />
              <span>Explore Sandbox</span>
            </a>
          </motion.div>
        </div>

        {/* TELEMETRY METRICS BAR */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="relative z-10 mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PORTFOLIO_DATA.metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 ${
                metric.accent === "gold" ? "glass-panel-gold" : "glass-panel"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-slate-400">
                <span>{metric.label}</span>
                {metric.accent === "gold" ? (
                  <Award className="h-4 w-4 text-[#F59E0B]" />
                ) : metric.accent === "cyan" ? (
                  <Cpu className="h-4 w-4 text-[#00F5D4]" />
                ) : (
                  <Code2 className="h-4 w-4 text-indigo-400" />
                )}
              </div>
              <div
                className={`mt-2 text-3xl font-bold tracking-tight ${
                  metric.accent === "gold"
                    ? "text-[#F59E0B] text-glow-gold"
                    : metric.accent === "cyan"
                    ? "text-[#00F5D4] text-glow-cyan"
                    : "text-white"
                }`}
              >
                {metric.value}
              </div>
              <div className="mt-1 text-xs text-slate-400">{metric.subtext}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* 02. FLAGSHIP PROJECTS & LIVE FOCUSFLOW SANDBOX */}
      <ProjectsSection />

      {/* 03. WORLDQUANT GOLD & HACKTOBERFEST HOLOGRAPHIC VAULT */}
      <CredentialsVault />

      {/* 04. TECH STACK & CONTACT FOOTER */}
      <SkillsAndContact />

      {/* 05. FLOATING CMD + K AI JUDGE COMMAND BAR */}
      <CommandBar />
    </main>
  );
}