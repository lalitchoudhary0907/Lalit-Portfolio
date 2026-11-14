"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Code2,
  Cpu,
  Sparkles,
} from "lucide-react";
import Scene3D from "@/components/canvas/Scene3D";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ProjectsSection from "@/components/sections/ProjectsSection";
import JourneySection from "@/components/sections/JourneySection";
import CredentialsVault from "@/components/sections/CredentialsVault";
import SkillsAndContact from "@/components/sections/SkillsAndContact";
import CommandBar from "@/components/ui/CommandBar";
import SkillMarquee from "@/components/ui/SkillMarquee";
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
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#050508] text-white">
      <SmoothScroll />
      <CustomCursor />
      <Scene3D />
      <Navbar />

      {/* ========================================================
          HERO SECTION — MATCHING ANTRIKSH'S REFERENCE PORTFOLIO
          Massive 'LALIT' Typography + Dual Continuous Marquee Ribbons
         ======================================================== */}
      <section
        onMouseMove={handleMouseMove}
        className="group relative z-10 flex min-h-screen w-full flex-col justify-between px-4 sm:px-8 pt-28 pb-12 overflow-hidden"
      >
        {/* Dynamic Mouse-Tracking Spotlight Effect */}
        <motion.div
          className="pointer-events-none absolute -inset-x-20 -top-20 -bottom-20 z-0 opacity-70 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                750px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 87, 34, 0.12),
                rgba(0, 245, 212, 0.08) 35%,
                transparent 75%
              )
            `,
          }}
        />

        {/* Subtle Background Grid Lines */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_65%,transparent_100%)]" />

        {/* TOP STATUS BADGES */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 pt-4">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/35 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-mono text-emerald-300 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-semibold tracking-wide uppercase">
              {PORTFOLIO_DATA.personal.status}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/35 bg-[#F59E0B]/10 px-3.5 py-1.5 text-xs font-mono text-[#F59E0B] backdrop-blur-md"
          >
            <Award className="h-3.5 w-3.5" />
            <span>WORLDQUANT GOLD • HACKTOBERFEST 2026</span>
          </motion.div>
        </div>

        {/* CENTERPIECE: GIANT 'LALIT' DISPLAY TYPOGRAPHY */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="select-none"
          >
            <h1 className="text-7xl sm:text-9xl md:text-[13vw] font-black tracking-tighter leading-none uppercase font-sans">
              <span className="text-white drop-shadow-[0_10px_35px_rgba(255,255,255,0.25)]">
                LA
              </span>
              <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.85)] sm:[-webkit-text-stroke:3px_rgba(255,255,255,0.85)] hover:text-white transition-colors duration-300">
                LIT
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 max-w-xl text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-slate-400"
          >
            Full-Stack Software Engineer • Quantitative Researcher • AI Architect
          </motion.p>

          {/* DUAL CONTINUOUS MARQUEE RIBBONS CROSSING THE HERO */}
          <div className="relative my-8 w-screen max-w-none -mx-4 sm:-mx-8 overflow-hidden py-2 select-none">
            {/* Upper Ribbon (Dark Slate Monochrome) */}
            <div className="flex w-full overflow-hidden border-y border-white/10 bg-black/60 py-2.5 backdrop-blur-md">
              <div className="animate-marquee flex items-center gap-6 whitespace-nowrap text-xs sm:text-sm font-mono tracking-widest text-slate-300 uppercase">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="flex items-center gap-6">
                    <span>QUANTITATIVE FINANCE</span>
                    <span className="text-[#FF5722]">•</span>
                    <span>FULL-STACK SYSTEMS</span>
                    <span className="text-[#00F5D4]">•</span>
                    <span>AUTONOMOUS AI AGENTS</span>
                    <span className="text-[#F59E0B]">•</span>
                    <span>THREE.JS & WEBGL</span>
                    <span className="text-[#6366F1]">•</span>
                    <span>STATISTICAL ARBITRAGE</span>
                    <span className="text-white">•</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Lower Ribbon (Signature Energetic Orange #FF5722) */}
            <div className="flex w-full overflow-hidden bg-[#FF5722] py-2.5 text-slate-950 shadow-[0_0_40px_rgba(255,87,34,0.35)]">
              <div className="animate-marquee-reverse flex items-center gap-6 whitespace-nowrap text-xs sm:text-sm font-mono font-bold tracking-wider uppercase">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="flex items-center gap-6">
                    <span>I BUILD HIGH-VELOCITY SYSTEMS & QUANT ALPHAS</span>
                    <span className="text-black/60">★</span>
                    <span>I LEARN BY BUILDING WHAT I WISH EXISTED</span>
                    <span className="text-black/60">★</span>
                    <span>PUSHING THE EDGES OF WEBGL & AI</span>
                    <span className="text-black/60">★</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ACTION CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://focus-flow0907.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-[#FF5722] px-7 py-3.5 text-sm font-bold text-white shadow-[0_0_30px_rgba(255,87,34,0.4)] hover:bg-[#ff7043] transition-all duration-300"
            >
              <span>Launch FocusFlow App</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#credentials"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md hover:border-[#F59E0B]/70 hover:bg-[#F59E0B]/10 transition-all duration-300"
            >
              <Sparkles className="h-4 w-4 text-[#F59E0B]" />
              <span>Inspect Gold Credentials</span>
            </a>
          </motion.div>
        </div>

        {/* HERO BOTTOM METADATA BAR */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl items-end justify-between border-t border-white/10 pt-4 font-mono text-[11px] text-slate-400">
          <div className="max-w-xs text-left">
            <span className="text-white font-semibold">QUANT & FULL-STACK</span>
            <p className="text-slate-500">
              Building useful systems at the edge of AI, WebGL & Quant.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-slate-500">
            <span className="h-2 w-2 rounded-full bg-[#00F5D4] animate-ping" />
            <span>MOVE CURSOR TO EXPLORE 3D CORE</span>
          </div>

          <a
            href="#about"
            className="group flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#FF5722] hover:text-white transition-colors"
          >
            <span>SCROLL TO WORK</span>
            <span className="transition-transform group-hover:translate-y-1">↓</span>
          </a>
        </div>
      </section>

      {/* ========================================================
          01 / ABOUT SECTION — MATCHING REFERENCE
          Giant Bold Statement with Orange Highlights & Telemetry
         ======================================================== */}
      <section
        id="about"
        className="relative z-10 mx-auto max-w-6xl px-6 py-28 border-t border-white/5"
      >
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF5722] mb-8">
          <span>01 / ABOUT</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-200 leading-[1.3] sm:leading-[1.35]">
            I am an engineer and researcher pursuing BTech in Computer Science &
            Artificial Intelligence at{" "}
            <span className="text-[#FF5722] font-semibold">
              Newton School of Technology
            </span>{" "}
            (Rishihood University). I build at the intersection of{" "}
            <span className="text-[#FF5722] font-semibold">
              AI, full-stack software, and quantitative finance
            </span>
            , crafting{" "}
            <span className="text-[#FF5722] font-semibold">
              high-performance systems
            </span>{" "}
            and mathematical alphas.
          </h2>

          <p className="mt-8 text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            Passionate about latency-critical architecture, hardware-accelerated 3D graphics with Three.js, and institutional alpha simulation. Achieved elite Gold Level status in the WorldQuant Challenge® and actively build production software shipped directly to global users.
          </p>
        </motion.div>

        {/* TELEMETRY METRICS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
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
                  <Code2 className="h-4 w-4 text-[#FF5722]" />
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

      {/* ========================================================
          02 / COMMUNITIES SECTION — MATCHING REFERENCE
          'Building together.' + 3 Community Cards + Bold Tech Ticker
         ======================================================== */}
      <section
        id="communities"
        className="relative z-10 mx-auto max-w-6xl px-6 py-28 border-t border-white/5"
      >
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF5722] mb-6">
          <span>02 / COMMUNITIES</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Building together.
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-400">
            Communities, hackathons, and ecosystems where I learn, compete, and contribute.
          </p>
        </div>

        {/* 3 Community Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: WorldQuant BRAIN */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col justify-between rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-7 transition-all duration-300 hover:border-[#F59E0B]/50 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#F59E0B] rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 px-3 py-1 font-semibold">
                  QUANT RESEARCH
                </span>
                <a
                  href="#credentials"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:bg-[#F59E0B] group-hover:text-black transition-all"
                  aria-label="Inspect WorldQuant Credential"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
                WorldQuant BRAIN — Gold Level
              </h3>
              <p className="mt-1 font-mono text-xs text-slate-400">
                Authorized by Nitish Maini, CSO
              </p>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Achieved Gold Level Consultant ranking under Nitish Maini (CSO, WorldQuant), authoring predictive market-neutral alphas with institutional Sharpe ratios and low turnover.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#F59E0B]">
              <span>VERIFIED HONOR</span>
              <a href="#credentials" className="hover:underline flex items-center gap-1">
                <span>Inspect</span>
                <span>↗</span>
              </a>
            </div>
          </motion.div>

          {/* Card 2: Hacktoberfest 2026 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col justify-between rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-7 transition-all duration-300 hover:border-[#FF5722]/50 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF5722] rounded-full bg-[#FF5722]/10 border border-[#FF5722]/30 px-3 py-1 font-semibold">
                  OPEN SOURCE • IN-PERSON
                </span>
                <a
                  href="#credentials"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:bg-[#FF5722] group-hover:text-white transition-all"
                  aria-label="Inspect Hacktoberfest Credential"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
                Hacktoberfest Hack Day Sonipat
              </h3>
              <p className="mt-1 font-mono text-xs text-slate-400">
                Sonipat x Rishihood • MLH x DEV & DigitalOcean
              </p>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Participated in-person at Rishihood University powered by MLH, DEV & DigitalOcean, collaborating on-site with maintainers, building developer tools, and merging production PRs.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#FF5722]">
              <span>OFFICIAL ATTENDEE</span>
              <a href="#credentials" className="hover:underline flex items-center gap-1">
                <span>Inspect</span>
                <span>↗</span>
              </a>
            </div>
          </motion.div>

          {/* Card 3: Newton School of Technology */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative flex flex-col justify-between rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-7 transition-all duration-300 hover:border-[#00F5D4]/50 hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#00F5D4] rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/30 px-3 py-1 font-semibold">
                  ACADEMIC RIGOR
                </span>
                <a
                  href="#journey"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:bg-[#00F5D4] group-hover:text-black transition-all"
                  aria-label="Explore Academic Journey"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-white">
                Newton School of Technology
              </h3>
              <p className="mt-1 font-mono text-xs text-slate-400">
                BTech CS & AI • Rishihood University (2024–2028)
              </p>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Pursuing rigorous computer science and artificial intelligence curriculum, hands-on production systems engineering, distributed computation, and collaborative peer hackathons.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#00F5D4]">
              <span>ACTIVE STUDENT</span>
              <a href="#journey" className="hover:underline flex items-center gap-1">
                <span>Journey</span>
                <span>↗</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FULL-WIDTH BOLD TECH TICKER MARQUEE */}
      <SkillMarquee />

      {/* ========================================================
          03 / SELECTED WORK — SPLIT SCREEN BENTO GRID
         ======================================================== */}
      <ProjectsSection />

      {/* ========================================================
          04 / TIME JOURNEY — HORIZONTAL INTERACTIVE SCRUBBER
         ======================================================== */}
      <JourneySection />

      {/* ========================================================
          CREDENTIALS VAULT — WORLDQUANT GOLD & HACKTOBERFEST
         ======================================================== */}
      <CredentialsVault />

      {/* ========================================================
          05 / CONTACT & SKILLS FOOTER
         ======================================================== */}
      <SkillsAndContact />

      {/* ========================================================
          FLOATING CMD + K AI JUDGE COMMAND BAR
         ======================================================== */}
      <CommandBar />
    </main>
  );
}
