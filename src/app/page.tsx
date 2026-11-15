"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Cpu,
} from "lucide-react";
import Scene3D from "@/components/canvas/Scene3D";
import Navbar from "@/components/ui/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import ProjectsSection from "@/components/sections/ProjectsSection";
import JourneySection from "@/components/sections/JourneySection";
import CredentialsVault from "@/components/sections/CredentialsVault";
import SkillsAndContact from "@/components/sections/SkillsAndContact";
import SkillMarquee from "@/components/ui/SkillMarquee";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function HomePage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // If user reloaded or navigated to root '/' with a leftover journey hash, clear it
      if (window.location.hash === "#journey" || window.location.hash === "#time-journey") {
        window.history.replaceState(null, "", window.location.pathname);
      }

      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }
  }, []);

  return (
    <main id="top" className="relative min-h-screen w-full overflow-x-hidden bg-[#111010] text-[#F5F3EF]">
      <SmoothScroll />
      <Scene3D />
      <Navbar />

      {/* ========================================================
          HERO SECTION — EXACT EDITORIAL COMPOSITION (ANTRIKSH REFERENCE)
          Clean Matte Canvas + Concentrated Glow + Title + Transparent Ribbons + Portrait Cutout + Bottom Metadata
         ======================================================== */}
      <section className="relative z-10 flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#111010] pt-16">
        {/* UPPER DISPLAY TITLE: 'LALIT' (Solid) + 'CHOUDHARY' (Outline Stroke) with Horizontal Safe Padding */}
        <div className="pointer-events-none absolute top-20 sm:top-24 md:top-28 left-0 right-0 z-10 flex items-center justify-center select-none overflow-hidden px-8 sm:px-14 max-w-[1440px] mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-sans font-black italic text-[clamp(3.2rem,9.2vw,8.5rem)] leading-none tracking-[0.04em] whitespace-nowrap text-center"
          >
            <span className="text-[#F5F3EF] drop-shadow-[0_10px_35px_rgba(255,255,255,0.12)]">
              LALIT
            </span>
            <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(245,243,239,0.65)] ml-3 sm:ml-6">
              CHOUDHARY
            </span>
          </motion.h1>
        </div>

        {/* DUAL CONTINUOUS MARQUEE RIBBONS (TRANSPARENT BACKGROUNDS, IDENTICAL 70S SPEED, BEHIND PORTRAIT) */}
        <div className="pointer-events-none absolute top-[48%] sm:top-[50%] -translate-y-1/2 left-0 right-0 z-15 flex flex-col gap-1 w-full overflow-hidden select-none">
          {/* Upper Ribbon (Large Uppercase Semi-Transparent White Display Text) */}
          <div className="flex w-full overflow-hidden bg-transparent py-0.5">
            <div className="animate-marquee flex items-center gap-8 whitespace-nowrap font-sans font-semibold text-4xl sm:text-6xl tracking-tight uppercase text-white/[0.22]">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="flex items-center gap-8">
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

          {/* Lower Ribbon (Large Uppercase Solid #FF5722 Orange Text on Transparent Background) */}
          <div className="flex w-full overflow-hidden bg-transparent py-0.5">
            <div className="animate-marquee-reverse flex items-center gap-8 whitespace-nowrap font-sans font-bold text-4xl sm:text-6xl tracking-tight uppercase text-[#FF5722]">
              {[...Array(6)].map((_, i) => (
                <span key={i} className="flex items-center gap-8">
                  <span>I LEARN BY BUILDING WHAT I WISH EXISTED</span>
                  <span>•</span>
                  <span>I BUILD HIGH-VELOCITY SYSTEMS &amp; QUANT ALPHAS</span>
                  <span>•</span>
                  <span>PUSHING THE EDGES OF WEBGL &amp; AI</span>
                  <span>•</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* PORTRAIT CUTOUT SLOT (CENTERED LOWER HERO WITH ANCHORED WARM EMBER GLOW) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-end select-none pointer-events-none">
          <div className="relative flex flex-col items-center justify-end">
            {/* Broad Vertical-Oval Warm Ember Aura Behind Torso & Arms */}
            <div
              className="pointer-events-none absolute left-1/2 top-[26%] -translate-x-1/2 -translate-y-1/2 w-[560px] sm:w-[680px] h-[520px] sm:h-[620px] rounded-full blur-3xl z-0"
              style={{
                background:
                  "radial-gradient(ellipse 52% 58% at 50% 52%, rgba(255, 87, 34, 0.34) 0%, rgba(255, 87, 34, 0.16) 38%, rgba(18, 17, 16, 0) 74%)",
              }}
            />

            <motion.img
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              src="/images/hero-cutout.png"
              alt="Lalit Choudhary"
              className="relative z-10 h-[58vh] sm:h-[70vh] md:h-[76vh] lg:h-[80vh] max-h-[820px] w-auto object-contain object-bottom"
              style={{
                maskImage: "linear-gradient(to bottom, black 72%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 72%, transparent 100%)",
              }}
            />
          </div>
        </div>

        {/* HERO BOTTOM CORNERS METADATA & BUTTON (ANCHORED TO CORNERS) */}
        {/* Bottom-left: 2-line compact metadata */}
        <div className="absolute left-8 sm:left-12 bottom-8 z-30 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-[#9E9890] max-w-xs text-left leading-relaxed">
          <div className="text-[#F5F3EF] font-semibold tracking-[0.2em] mb-1">
            SOFTWARE × QUANT
          </div>
          <p className="text-[#9E9890] text-[10px] sm:text-[11px] uppercase tracking-wider leading-relaxed">
            BUILDING USEFUL SYSTEMS AT THE EDGE OF AI, CODE &amp; FINANCE.
          </p>
        </div>

        {/* Bottom-right: crisp rectangular outlined button SCROLL TO WORK ↓ */}
        <a
          href="#about"
          className="absolute right-8 sm:right-12 bottom-8 z-30 border border-white/15 bg-transparent px-5 py-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[#F5F3EF] hover:border-[#FF5722] hover:text-[#FF5722] transition-colors"
        >
          SCROLL TO WORK ↓
        </a>
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
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3"
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
