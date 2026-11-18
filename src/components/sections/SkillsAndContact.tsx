"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Terminal, Sparkles, Layers } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function SkillsAndContact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative z-10 mx-auto w-full max-w-[1380px] px-6 py-28 sm:px-10 lg:px-14 border-t border-white/[0.08]">
      {/* ========================================================
          01. 06 / TECHNICAL ARSENAL (12-COLUMN SPLIT EDITORIAL LAYOUT)
         ======================================================== */}
      <div id="skills" className="mb-28 sm:mb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ========================================================
              LEFT COLUMN (STICKY EDITORIAL ANCHOR)
             ======================================================== */}
          <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col justify-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent mb-3">
              <Cpu className="h-4 w-4" />
              <span>06 / TECHNICAL ARSENAL</span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-[#F5F3EF] leading-[1.12]">
              Full-Stack, 3D Web &amp; <br className="hidden lg:inline" />
              <span className="text-accent">Quant Stack.</span>
            </h2>

            {/* Subcopy */}
            <p className="mt-4 text-sm sm:text-base text-[#9E9890] leading-relaxed">
              Curated proficiencies bridging hardware-accelerated frontend engineering, autonomous AI agent tooling, and mathematical quantitative alpha research.
            </p>

            {/* Summary Metrics Strip */}
            <div className="mt-8 border-t border-white/[0.08] pt-6 flex flex-col gap-3.5 font-mono text-xs">
              <div className="flex items-center justify-between text-[#8E877E]">
                <span className="uppercase tracking-widest text-[10px]">TOTAL DISCIPLINES</span>
                <span className="text-[#F5F3EF] font-semibold">03 DOMAINS</span>
              </div>
              <div className="flex items-center justify-between text-[#8E877E]">
                <span className="uppercase tracking-widest text-[10px]">CORE ENGINES</span>
                <span className="text-accent font-semibold">17 PRODUCTION TOOLS</span>
              </div>
              <div className="flex items-center justify-between text-[#8E877E]">
                <span className="uppercase tracking-widest text-[10px]">ARCHITECTURE</span>
                <span className="text-[#F5F3EF] font-semibold">FULL PRODUCTION-GRADE</span>
              </div>
            </div>
          </div>

          {/* ========================================================
              RIGHT COLUMN (ARCHITECTURAL 3-COLUMN STACK GRID)
             ======================================================== */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="rounded-none border border-white/[0.09] bg-[#121110]/90 shadow-[0_20px_60px_rgba(0,0,0,0.5)] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]"
            >
              {PORTFOLIO_DATA.skills.map((group, colIdx) => {
                const isQuant = group.category.toLowerCase().includes("quant");
                const isFrontend = group.category.toLowerCase().includes("frontend");

                return (
                  <div
                    key={group.category}
                    className="p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-colors duration-300 hover:bg-white/[0.01]"
                  >
                    <div>
                      {/* Clean Header Bar */}
                      <div className="flex items-center justify-between border-b border-white/[0.07] pb-4 mb-5">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-accent font-semibold">
                          {`// 0${colIdx + 1}`}
                        </span>
                        {isQuant ? (
                          <Sparkles className="h-4 w-4 text-accent" />
                        ) : isFrontend ? (
                          <Layers className="h-4 w-4 text-accent" />
                        ) : (
                          <Terminal className="h-4 w-4 text-accent" />
                        )}
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#F5F3EF]">
                        {group.category}
                      </h3>

                      {/* Refined Minimal Skill Tags with Interactive Hover & Staggered Motion */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {group.items.map((skill, itemIdx) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.35,
                              delay: colIdx * 0.12 + itemIdx * 0.04,
                            }}
                            className="rounded-none border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-[#9E9890] transition-all duration-200 hover:border-accent/40 hover:bg-accent/[0.06] hover:text-[#F5F3EF] cursor-default select-none"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Pillar Micro-Footer */}
                    <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between font-mono text-[10px] text-[#8E877E] uppercase tracking-widest">
                      <span>{group.items.length} TECHNOLOGIES</span>
                      <span className="text-accent font-semibold">VERIFIED STACK</span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ========================================================
          02. 07 / CONTACT — FRAMED ARCHITECTURAL CONTAINER (2-COLUMN SPLIT)
         ======================================================== */}
      <div id="contact" className="pt-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden border border-white/[0.09] bg-[#121110]/90 backdrop-blur-xs rounded-none p-8 sm:p-12 lg:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          {/* Subtle top-right warm ember ambient glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(198,255,0,0.05),transparent_70%)] blur-2xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left side: Eyebrow, Title, Subcopy, Divider, and FULL untruncated email */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-accent font-medium mb-3">
                  07 / CONTACT
                </div>

                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.035em] text-[#F5F3EF] leading-[1.02]">
                  Let&apos;s <span className="text-accent">connect.</span>
                </h2>

                <p className="mt-3 text-sm sm:text-base text-[#9E9890] leading-relaxed max-w-lg">
                  I&apos;m always open to discussing quantitative research, autonomous AI systems engineering, or collaborative open-source builds.
                </p>
              </div>

              <div className="w-full border-t border-white/[0.08] my-6 sm:my-8" />

              {/* DROP ME A LINE with FULL untruncated email */}
              <div className="flex flex-col">
                <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#8E877E] mb-2">
                  DROP ME A LINE
                </span>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="group inline-flex items-center gap-2.5 text-lg sm:text-2xl md:text-3xl font-medium tracking-tight text-[#F5F3EF] hover:text-accent transition-colors whitespace-nowrap"
                >
                  <span>{PORTFOLIO_DATA.personal.email}</span>
                  <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </div>

            {/* Right side: Wide, sharp-edged stacked action cells (GitHub & LinkedIn only) */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-4 sm:gap-5 w-full h-full">
              {/* Cell 1: GitHub */}
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between border border-white/[0.09] bg-[#151412]/80 hover:bg-[#181614] hover:border-accent/40 px-6 sm:px-7 py-5 sm:py-6 transition-all duration-300 rounded-none w-full"
              >
                <div>
                  <span className="text-lg sm:text-xl font-medium text-[#F5F3EF] tracking-tight group-hover:text-accent transition-colors block">
                    GitHub
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-[#8E877E] group-hover:text-[#9E9890] transition-colors mt-1 block">
                    SEE WHAT I&apos;M BUILDING • @lalitchoudhary0907
                  </span>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Cell 2: LinkedIn */}
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between border border-white/[0.09] bg-[#151412]/80 hover:bg-[#181614] hover:border-accent/40 px-6 sm:px-7 py-5 sm:py-6 transition-all duration-300 rounded-none w-full"
              >
                <div>
                  <span className="text-lg sm:text-xl font-medium text-[#F5F3EF] tracking-tight group-hover:text-accent transition-colors block">
                    LinkedIn
                  </span>
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.16em] uppercase text-[#8E877E] group-hover:text-[#9E9890] transition-colors mt-1 block">
                    LET&apos;S CONNECT PROFESSIONALLY
                  </span>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* POLISHED FOOTER BAR BELOW FRAME */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#8E877E] tracking-wider uppercase">
          <span>© 2026 LALIT CHOUDHARY • BUILT WITH CURIOSITY</span>

          <button
            onClick={scrollToTop}
            className="hover:text-accent transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <span>↑</span>
          </button>
        </div>
      </div>
    </section>
  );
}
