"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Terminal, Sparkles, Layers } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function SkillsAndContact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-28 border-t border-white/[0.08]">
      {/* ========================================================
          01. BENTO TECHNICAL ARSENAL
         ======================================================== */}
      <div id="skills" className="mb-28">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF5722] mb-4">
          <Cpu className="h-4 w-4" />
          <span>06 / TECHNICAL ARSENAL</span>
          <div className="h-px flex-1 bg-white/[0.08]" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-[#F5F3EF] leading-tight">
          Full-Stack, 3D Web & <br className="hidden sm:inline" />
          <span className="text-[#FF5722]">Quant Stack.</span>
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base text-[#9E9890]">
          Curated proficiencies bridging hardware-accelerated frontend engineering, autonomous AI agent tooling, and mathematical quantitative alpha research.
        </p>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PORTFOLIO_DATA.skills.map((group, idx) => {
            const isQuant = group.category.toLowerCase().includes("quant");
            const isFrontend = group.category.toLowerCase().includes("frontend");

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#181614] p-7 transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="font-mono text-xs uppercase tracking-wider text-[#FF5722]">
                    {`// 0${idx + 1}`}
                  </div>
                  {isQuant ? (
                    <Sparkles className="h-4 w-4 text-[#FF5722]" />
                  ) : isFrontend ? (
                    <Layers className="h-4 w-4 text-[#9E9890]" />
                  ) : (
                    <Terminal className="h-4 w-4 text-[#9E9890]" />
                  )}
                </div>

                <h3 className="mt-4 text-xl font-bold text-[#F5F3EF] tracking-tight">
                  {group.category}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-[#F5F3EF] transition-all duration-200 hover:border-[#FF5722]/60 hover:bg-[#FF5722]/10 hover:text-[#FF5722]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          02. 07 / CONTACT — FRAMED ARCHITECTURAL CONTAINER
         ======================================================== */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden border border-white/[0.09] bg-[#121110]/90 backdrop-blur-xs rounded-none px-8 py-10 sm:px-14 sm:py-14 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        >
          {/* Subtle top-right warm ember ambient glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,87,34,0.06),transparent_70%)] blur-2xl" />

          {/* Eyebrow */}
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#FF5722] font-medium mb-3 sm:mb-4">
            07 / CONTACT
          </div>

          {/* Headline */}
          <h2 className="text-5xl sm:text-7xl font-semibold tracking-[-0.035em] text-[#F5F3EF] leading-[1.02]">
            Let&apos;s <span className="text-[#FF5722]">connect.</span>
          </h2>

          {/* Full-width Hairline Divider */}
          <div className="w-full border-t border-white/[0.08] my-8 sm:my-10" />

          {/* Lower Split Row: Direct Email + Sharp Action Blocks */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">
            {/* Left side: DROP ME A LINE */}
            <div className="flex flex-col min-w-0">
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#8E877E] mb-2 sm:mb-2.5">
                DROP ME A LINE
              </span>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="group inline-flex items-center gap-2 sm:gap-3 text-xl sm:text-3xl font-medium tracking-tight text-[#F5F3EF] hover:text-[#FF5722] transition-colors truncate"
              >
                <span className="truncate">{PORTFOLIO_DATA.personal.email}</span>
                <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-[#FF5722] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>

            {/* Right side: Sharp Rectangular Action Cells */}
            <div className="flex flex-col sm:flex-row items-stretch gap-4 sm:gap-5 w-full lg:w-auto shrink-0">
              {/* Cell 1: GitHub */}
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between border border-white/[0.09] bg-[#151412]/80 hover:bg-[#181614] hover:border-[#FF5722]/60 px-6 py-5 transition-all duration-300 rounded-none min-w-[210px] sm:min-w-[230px]"
              >
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-base sm:text-lg font-medium text-[#F5F3EF] tracking-tight group-hover:text-[#FF5722] transition-colors">
                    GitHub
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[#FF5722] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#8E877E] group-hover:text-[#9E9890] transition-colors">
                  SEE WHAT I&apos;M BUILDING
                </span>
              </a>

              {/* Cell 2: LinkedIn */}
              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between border border-white/[0.09] bg-[#151412]/80 hover:bg-[#181614] hover:border-[#FF5722]/60 px-6 py-5 transition-all duration-300 rounded-none min-w-[210px] sm:min-w-[230px]"
              >
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="text-base sm:text-lg font-medium text-[#F5F3EF] tracking-tight group-hover:text-[#FF5722] transition-colors">
                    LinkedIn
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[#FF5722] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-[#8E877E] group-hover:text-[#9E9890] transition-colors">
                  LET&apos;S CONNECT PROFESSIONALLY
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* POLISHED FOOTER BAR BELOW FRAME */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#8E877E] tracking-wider uppercase">
          <span>© 2026 LALIT CHOUDHARY • BUILT WITH CURIOSITY</span>

          <div className="flex items-center gap-6">
            <a
              href="https://focus-flow0907.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F5F3EF] transition-colors"
            >
              FOCUSFLOW LIVE ↗
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-[#FF5722] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
