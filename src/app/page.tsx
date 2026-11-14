"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  ArrowUpRight,
  Award,
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
    <main className="relative min-h-screen w-full overflow-x-hidden bg-[#121110] text-[#F5F3EF]">
      <SmoothScroll />
      <CustomCursor />
      <Scene3D />
      <Navbar />

      {/* ========================================================
          HERO SECTION — RESTRAINED EDITORIAL AESTHETIC
          Massive 'LALIT' Typography + Dual Continuous Marquee Ribbons
         ======================================================== */}
      <section
        onMouseMove={handleMouseMove}
        className="group relative z-10 flex min-h-[100svh] w-full flex-col justify-between px-4 sm:px-8 pt-36 sm:pt-44 pb-16 sm:pb-20 overflow-hidden"
      >
        {/* Dynamic Mouse-Tracking Subtle Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-x-20 -top-20 -bottom-20 z-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                700px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 87, 34, 0.08),
                rgba(255, 255, 255, 0.02) 40%,
                transparent 75%
              )
            `,
          }}
        />

        {/* Subtle Background Grid Lines */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_65%,transparent_100%)]" />

        {/* TOP STATUS INDICATOR (Clean & Minimalist) */}
        <div className="relative z-10 mx-auto mb-8 sm:mb-12 flex w-full max-w-6xl items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-[#181614] px-4 py-1.5 text-xs font-mono text-[#9E9890]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
            <span className="tracking-wide uppercase text-[#F5F3EF]">
              {PORTFOLIO_DATA.personal.status}
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[#9E9890]">WORLDQUANT GOLD MEDALIST</span>
          </motion.div>
        </div>

        {/* CENTERPIECE: GIANT 'LALIT' DISPLAY TYPOGRAPHY */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
          {/* Subtle Radial Dark Vignette behind center typography for 100% legibility */}
          <div className="pointer-events-none absolute -inset-x-24 -inset-y-16 -z-10 rounded-full bg-[#121110]/80 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="select-none"
          >
            <h1 className="text-7xl sm:text-9xl md:text-[13vw] font-black tracking-tighter leading-none uppercase font-sans">
              <span className="text-[#F5F3EF] drop-shadow-[0_10px_35px_rgba(255,255,255,0.15)]">
                LA
              </span>
              <span className="text-transparent [-webkit-text-stroke:2px_rgba(245,243,239,0.85)] sm:[-webkit-text-stroke:3px_rgba(245,243,239,0.85)] hover:text-[#F5F3EF] transition-colors duration-300">
                LIT
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 sm:mt-8 max-w-2xl text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#9E9890] font-medium"
          >
            FULL-STACK SOFTWARE ENGINEER • QUANTITATIVE RESEARCHER • AI ARCHITECT
          </motion.p>

          {/* DUAL CONTINUOUS MARQUEE RIBBONS CROSSING THE HERO */}
          <div className="relative my-10 sm:my-14 w-screen max-w-none -mx-4 sm:-mx-8 overflow-hidden py-2 select-none">
            {/* Upper Ribbon (#181614 Elevated Surface) */}
            <div className="flex w-full overflow-hidden border-y border-white/[0.08] bg-[#181614] py-2.5 backdrop-blur-md">
              <div className="animate-marquee flex items-center gap-6 whitespace-nowrap text-xs sm:text-sm font-mono tracking-widest text-[#9E9890] uppercase">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="flex items-center gap-6">
                    <span>QUANTITATIVE FINANCE</span>
                    <span className="text-[#FF5722]">•</span>
                    <span>FULL-STACK SYSTEMS</span>
                    <span className="text-white/30">•</span>
                    <span>AUTONOMOUS AI AGENTS</span>
                    <span className="text-[#FF5722]">•</span>
                    <span>THREE.JS & WEBGL</span>
                    <span className="text-white/30">•</span>
                    <span>STATISTICAL ARBITRAGE</span>
                    <span className="text-[#FF5722]">•</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Lower Ribbon (Signature Warm Ember Orange #FF5722) */}
            <div className="flex w-full overflow-hidden bg-[#FF5722] py-2.5 text-[#121110]">
              <div className="animate-marquee-reverse flex items-center gap-6 whitespace-nowrap text-xs sm:text-sm font-mono font-bold tracking-wider uppercase">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="flex items-center gap-6">
                    <span>I BUILD HIGH-VELOCITY SYSTEMS & QUANT ALPHAS</span>
                    <span className="text-black/50">★</span>
                    <span>I LEARN BY BUILDING WHAT I WISH EXISTED</span>
                    <span className="text-black/50">★</span>
                    <span>PUSHING THE EDGES OF WEBGL & AI</span>
                    <span className="text-black/50">★</span>
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
            className="mt-2 sm:mt-4 mb-4 sm:mb-6 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="https://focus-flow0907.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-full bg-[#FF5722] px-7 py-3.5 text-sm font-bold text-[#121110] hover:bg-[#ff6838] transition-all duration-300"
            >
              <span>Launch FocusFlow App</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="#credentials"
              className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-[#181614] px-7 py-3.5 text-sm font-medium text-[#F5F3EF] hover:border-white/20 transition-all duration-300"
            >
              <Sparkles className="h-4 w-4 text-[#FF5722]" />
              <span>Inspect Gold Credentials</span>
            </a>
          </motion.div>
        </div>

        {/* HERO BOTTOM METADATA BAR */}
        <div className="relative z-10 mx-auto mt-12 sm:mt-16 flex w-full max-w-6xl items-end justify-between border-t border-white/[0.08] pt-5 font-mono text-[11px] text-[#9E9890]">
          <div className="max-w-xs text-left">
            <span className="text-[#F5F3EF] font-semibold">QUANT & FULL-STACK</span>
            <p className="text-[#9E9890]">
              Building useful systems at the edge of AI, WebGL & Quant.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-[#9E9890]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
            <span>MOVE CURSOR TO EXPLORE LATTICE NETWORK</span>
          </div>

          <a
            href="#about"
            className="group flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-[#FF5722] hover:text-[#F5F3EF] transition-colors"
          >
            <span>SCROLL TO WORK</span>
            <span className="transition-transform group-hover:translate-y-1">↓</span>
          </a>
        </div>
      </section>

      {/* ========================================================
          01 / ABOUT SECTION — MATCHING REFERENCE SCREENSHOT
          "Hi, I'm Lalit. I'm a student at Newton School of Technology..."
         ======================================================== */}
      <section
        id="about"
        className="relative z-10 mx-auto max-w-6xl px-6 py-28 border-t border-white/[0.08]"
      >
        <div className="font-mono text-xs uppercase tracking-widest text-[#FF5722] mb-8">
          01 / ABOUT
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-[#F5F3EF] leading-[1.18] sm:leading-[1.18]">
            Hi, I&apos;m Lalit. I&apos;m a student at{" "}
            <span className="text-[#FF5722]">Newton School of Technology</span>, exploring{" "}
            <span className="text-[#FF5722]">AI, software, and quantitative systems</span>. I like turning curious ideas into things people can actually use.
          </h2>
        </motion.div>

        {/* TELEMETRY METRICS ROW (Clean & Restrained #181614 Cards) */}
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
              className="rounded-2xl border border-white/[0.08] bg-[#181614] p-6 transition-all duration-300 hover:border-white/20"
            >
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#9E9890]">
                <span>{metric.label}</span>
                {idx === 0 ? (
                  <Award className="h-4 w-4 text-[#FF5722]" />
                ) : (
                  <Cpu className="h-4 w-4 text-[#9E9890]" />
                )}
              </div>
              <div className="mt-3 text-3xl font-bold tracking-tight text-[#F5F3EF]">
                {metric.value}
              </div>
              <div className="mt-1.5 text-xs text-[#9E9890]">{metric.subtext}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ========================================================
          02 / COMMUNITIES SECTION — MATCHING REFERENCE
          'Building together.' + 3-Column Community Row
         ======================================================== */}
      <section
        id="communities"
        className="relative z-10 mx-auto max-w-6xl px-6 py-28 border-t border-white/[0.08]"
      >
        <div className="font-mono text-xs uppercase tracking-widest text-[#FF5722] mb-6">
          02 / COMMUNITIES
        </div>

        <div className="mb-14">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F3EF]">
            Building together.
          </h2>
          <p className="mt-3 max-w-xl text-sm sm:text-base text-[#9E9890]">
            Communities, hackathons, and ecosystems where I learn, compete, and contribute.
          </p>
        </div>

        {/* 3 Community Columns (Subtle Top/Side Hairlines & Restrained Hover) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1: WorldQuant BRAIN */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#181614] p-7 transition-all duration-300 hover:border-white/20"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF5722] font-semibold">
                  QUANT RESEARCH
                </span>
                <a
                  href="#credentials"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.08] text-[#F5F3EF] group-hover:bg-[#FF5722] group-hover:text-[#121110] transition-all"
                  aria-label="Inspect WorldQuant Credential"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-[#F5F3EF]">
                WorldQuant BRAIN — Gold Level
              </h3>
              <p className="mt-1 font-mono text-xs text-[#9E9890]">
                Authorized by Nitish Maini, CSO
              </p>

              <p className="mt-4 text-xs sm:text-sm text-[#9E9890] leading-relaxed">
                Achieved Gold Level Consultant ranking under Nitish Maini (CSO, WorldQuant), authoring predictive market-neutral alphas with institutional Sharpe ratios and low turnover.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#FF5722]">
              <span>VERIFIED HONOR</span>
              <a href="#credentials" className="hover:underline flex items-center gap-1">
                <span>Inspect</span>
                <span>↗</span>
              </a>
            </div>
          </motion.div>

          {/* Column 2: Hacktoberfest 2026 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#181614] p-7 transition-all duration-300 hover:border-white/20"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF5722] font-semibold">
                  OPEN SOURCE • IN-PERSON
                </span>
                <a
                  href="#credentials"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.08] text-[#F5F3EF] group-hover:bg-[#FF5722] group-hover:text-[#121110] transition-all"
                  aria-label="Inspect Hacktoberfest Credential"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-[#F5F3EF]">
                Hacktoberfest Hack Day Sonipat
              </h3>
              <p className="mt-1 font-mono text-xs text-[#9E9890]">
                Sonipat x Rishihood • MLH x DEV & DigitalOcean
              </p>

              <p className="mt-4 text-xs sm:text-sm text-[#9E9890] leading-relaxed">
                Participated in-person at Rishihood University powered by MLH, DEV & DigitalOcean, collaborating on-site with maintainers, building developer tools, and merging production PRs.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#FF5722]">
              <span>OFFICIAL ATTENDEE</span>
              <a href="#credentials" className="hover:underline flex items-center gap-1">
                <span>Inspect</span>
                <span>↗</span>
              </a>
            </div>
          </motion.div>

          {/* Column 3: Newton School of Technology */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#181614] p-7 transition-all duration-300 hover:border-white/20"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#FF5722] font-semibold">
                  ACADEMIC RIGOR
                </span>
                <a
                  href="#journey"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.05] border border-white/[0.08] text-[#F5F3EF] group-hover:bg-[#FF5722] group-hover:text-[#121110] transition-all"
                  aria-label="Explore Academic Journey"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <h3 className="mt-5 text-xl font-bold tracking-tight text-[#F5F3EF]">
                Newton School of Technology
              </h3>
              <p className="mt-1 font-mono text-xs text-[#9E9890]">
                BTech CS & AI • Rishihood University (2024–2028)
              </p>

              <p className="mt-4 text-xs sm:text-sm text-[#9E9890] leading-relaxed">
                Pursuing rigorous computer science and artificial intelligence curriculum, hands-on production systems engineering, distributed computation, and collaborative peer hackathons.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#FF5722]">
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
