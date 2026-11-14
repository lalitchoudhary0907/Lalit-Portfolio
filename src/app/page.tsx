"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Cpu,
} from "lucide-react";
import Scene3D from "@/components/canvas/Scene3D";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/ui/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ProjectsSection from "@/components/sections/ProjectsSection";
import JourneySection from "@/components/sections/JourneySection";
import CredentialsVault from "@/components/sections/CredentialsVault";
import SkillsAndContact from "@/components/sections/SkillsAndContact";
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
    <main id="top" className="relative min-h-screen w-full overflow-x-hidden bg-[#121110] text-[#F5F3EF]">
      <SmoothScroll />
      <CustomCursor />
      <Scene3D />
      <Navbar />

      {/* ========================================================
          HERO SECTION — EXACT EDITORIAL COMPOSITION (ANTRIKSH REFERENCE)
          Background Glow + Display Heading + Dual Ribbons + Portrait Cutout + Bottom Metadata
         ======================================================== */}
      <section
        onMouseMove={handleMouseMove}
        className="group relative z-10 flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#121110] px-6 sm:px-10 pt-16 sm:pt-20 pb-6 sm:pb-8"
      >
        {/* Soft Warm Ember Radial Glow Behind Portrait */}
        <div
          className="pointer-events-none absolute inset-0 z-0 select-none"
          style={{
            background:
              "radial-gradient(circle at 50% 48%, rgba(255, 87, 34, 0.22) 0%, rgba(18, 17, 16, 0) 62%)",
          }}
        />

        {/* Dynamic Mouse-Tracking Subtle Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-x-20 -top-20 -bottom-20 z-0 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 87, 34, 0.08),
                rgba(255, 255, 255, 0.02) 40%,
                transparent 72%
              )
            `,
          }}
        />

        {/* Subtle Background Grid Lines */}
        <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_65%,transparent_100%)]" />

        {/* UPPER DISPLAY TITLE: 'LALIT' (Solid) + 'CHOUDHARY' (Outline Stroke) */}
        <div className="pointer-events-none absolute top-14 sm:top-18 md:top-20 left-0 right-0 z-10 flex items-center justify-center select-none overflow-hidden px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-sans font-black italic tracking-tighter text-5xl sm:text-7xl md:text-[10vw] lg:text-[11.5vw] leading-none whitespace-nowrap text-center"
          >
            <span className="text-[#F5F3EF] drop-shadow-[0_10px_35px_rgba(255,255,255,0.12)]">
              LALIT
            </span>
            <span className="text-transparent [-webkit-text-stroke:1.2px_rgba(245,243,239,0.55)] sm:[-webkit-text-stroke:1.8px_rgba(245,243,239,0.55)] ml-2 sm:ml-5">
              CHOUDHARY
            </span>
          </motion.h1>
        </div>

        {/* DUAL CONTINUOUS MARQUEE RIBBONS CROSSING MID-TORSO (BEHIND PORTRAIT) */}
        <div className="pointer-events-none absolute top-[48%] sm:top-[50%] -translate-y-1/2 left-0 right-0 z-15 flex flex-col gap-2.5 sm:gap-3.5 w-full overflow-hidden select-none">
          {/* Upper Ribbon (Muted Slate / Zinc Discipline Ticker) */}
          <div className="flex w-full overflow-hidden py-1">
            <div className="animate-marquee flex items-center gap-6 whitespace-nowrap font-sans font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider uppercase text-white/20">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="flex items-center gap-6">
                  <span>SOFTWARE</span>
                  <span>•</span>
                  <span>AI</span>
                  <span>•</span>
                  <span>QUANTITATIVE RESEARCH</span>
                  <span>•</span>
                  <span>PRODUCT THINKING</span>
                  <span>•</span>
                  <span>FULL-STACK SYSTEMS</span>
                  <span>•</span>
                </span>
              ))}
            </div>
          </div>

          {/* Lower Ribbon (Solid #FF5722 Energetic Orange Full-Bleed Strip) */}
          <div className="flex w-full overflow-hidden bg-[#FF5722] py-2 sm:py-3 text-[#121110] shadow-[0_10px_30px_rgba(255,87,34,0.3)]">
            <div className="animate-marquee-reverse flex items-center gap-6 whitespace-nowrap font-mono font-black text-xs sm:text-sm md:text-base tracking-widest uppercase">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="flex items-center gap-6">
                  <span>I BUILD HIGH-VELOCITY SYSTEMS & QUANT ALPHAS</span>
                  <span className="text-black/50">★</span>
                  <span>PUSHING THE EDGES OF WEBGL & AI</span>
                  <span className="text-black/50">★</span>
                  <span>TURNING CURIOUS IDEAS INTO REALITY</span>
                  <span className="text-black/50">★</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PORTRAIT CUTOUT SLOT (CENTERED LOWER HERO WITH BOTTOM VIGNETTE FADE) */}
        <div className="relative z-20 mx-auto mt-auto flex flex-col items-center justify-end select-none pointer-events-none pt-24 sm:pt-28">
          <motion.img
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            src="/images/hero-cutout.png"
            alt="Lalit Choudhary"
            className="h-[50vh] sm:h-[62vh] md:h-[70vh] max-h-[740px] w-auto object-contain object-bottom"
            style={{
              maskImage: "linear-gradient(to bottom, black 72%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 72%, transparent 100%)",
            }}
          />

          {/* Subtle Center Telemetry / Interaction Hint */}
          <div className="absolute -bottom-2 sm:bottom-0 flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-[#9E9890]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722] animate-pulse" />
            <span>MOVE TO SUIT UP</span>
          </div>
        </div>

        {/* HERO BOTTOM CORNERS METADATA & SCROLL BUTTON */}
        <div className="relative z-30 mt-6 sm:mt-8 flex w-full items-end justify-between border-t border-white/[0.06] pt-4 font-mono text-[10px] sm:text-[11px] text-[#9E9890]">
          {/* Bottom-left: 2-line compact metadata */}
          <div className="max-w-xs text-left leading-relaxed">
            <div className="text-[#F5F3EF] font-semibold tracking-[0.2em] mb-0.5">
              SOFTWARE × QUANT
            </div>
            <p className="text-[#9E9890] text-[10px] sm:text-[11px] normal-case tracking-normal">
              Building useful systems at the edge of AI, code & finance.
            </p>
          </div>

          {/* Bottom-right: crisp rectangular outlined button SCROLL TO WORK ↓ */}
          <a
            href="#about"
            className="border border-white/15 bg-white/[0.02] px-4 py-2.5 text-[11px] tracking-[0.2em] uppercase text-[#F5F3EF] hover:border-[#FF5722] hover:text-[#FF5722] transition-colors"
          >
            SCROLL TO WORK ↓
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
    </main>
  );
}
