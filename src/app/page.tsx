"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Award, Code2, Cpu, Sparkles } from "lucide-react";
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
  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <SmoothScroll />
      <CustomCursor />
      <Scene3D />
      <Navbar />

      {/* 01. HERO & TELEMETRY SECTION */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 pt-28 pb-16">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[#F59E0B]/40 bg-[#F59E0B]/10 px-4 py-1.5 text-xs font-mono text-[#F59E0B]"
          >
            <Award className="h-3.5 w-3.5" />
            <span>WORLDQUANT BRAIN GOLD LEVEL • HACKTOBERFEST 2026</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05] text-white"
          >
            Engineering{" "}
            <span className="bg-gradient-to-r from-[#00F5D4] via-teal-200 to-[#6366F1] bg-clip-text text-transparent text-glow-cyan">
              Flow-State
            </span>{" "}
            Products &{" "}
            <span className="bg-gradient-to-r from-[#F59E0B] to-amber-200 bg-clip-text text-transparent text-glow-gold">
              Quant Alphas.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Hi, I&apos;m <strong className="text-white font-semibold">{PORTFOLIO_DATA.personal.name}</strong>.{" "}
            {PORTFOLIO_DATA.personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="https://focus-flow0907.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-[#00F5D4] px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(0,245,212,0.4)] hover:bg-white transition-all"
            >
              <span>Launch FocusFlow App</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#credentials"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md hover:border-[#F59E0B]/60 hover:bg-[#F59E0B]/10 transition-all"
            >
              <Sparkles className="h-4 w-4 text-[#F59E0B]" />
              <span>Inspect Gold Credentials</span>
            </a>
          </motion.div>
        </div>

        {/* TELEMETRY METRICS BAR */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
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