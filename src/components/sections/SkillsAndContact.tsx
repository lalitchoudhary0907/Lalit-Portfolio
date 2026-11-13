"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Mail, Terminal, Sparkles, Layers } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function SkillsAndContact() {
  return (
    <section
      id="skills"
      className="relative z-10 mx-auto max-w-6xl px-6 py-24"
    >
      {/* 01. BENTO TECH STACK MATRIX */}
      <div className="mb-24">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00F5D4]">
          <Cpu className="h-4 w-4" />
          <span>04 // TECHNICAL ARSENAL</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Full-Stack, 3D Web & Quant Stack.
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
          Curated proficiencies bridging hardware-accelerated frontend engineering, autonomous AI tooling, and mathematical quantitative research.
        </p>

        {/* Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
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
                className={`relative overflow-hidden rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 ${
                  isQuant ? "glass-panel-gold" : "glass-panel"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div
                    className={`font-mono text-xs uppercase tracking-wider ${
                      isQuant ? "text-[#F59E0B]" : "text-[#00F5D4]"
                    }`}
                  >
                    {`// 0${idx + 1}`}
                  </div>
                  {isQuant ? (
                    <Sparkles className="h-4 w-4 text-[#F59E0B]" />
                  ) : isFrontend ? (
                    <Layers className="h-4 w-4 text-[#00F5D4]" />
                  ) : (
                    <Terminal className="h-4 w-4 text-indigo-400" />
                  )}
                </div>

                <h3 className="mt-3 text-xl font-bold text-white tracking-tight">
                  {group.category}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-xl border px-3.5 py-2 font-mono text-xs transition-all duration-200 ${
                        isQuant
                          ? "border-[#F59E0B]/20 bg-[#F59E0B]/5 text-amber-200 hover:border-[#F59E0B] hover:bg-[#F59E0B]/15"
                          : "border-white/10 bg-white/[0.04] text-slate-200 hover:border-[#00F5D4]/60 hover:bg-[#00F5D4]/10 hover:text-[#00F5D4]"
                      }`}
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

      {/* 02. FUTURISTIC COMMAND FOOTER / CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel relative overflow-hidden rounded-3xl p-8 sm:p-14 text-center border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,245,212,0.12),transparent_60%)]"
      >
        <div className="mx-auto max-w-2xl space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 px-4 py-1.5 font-mono text-xs text-[#00F5D4]">
            <Terminal className="h-3.5 w-3.5" />
            <span>READY FOR HIGH-IMPACT COLLABORATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Let&apos;s Build the Next Breakthrough.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Whether it&apos;s shipping a high-velocity production application, engineering interactive 3D WebGL interfaces, or formulating quantitative signals—I&apos;m ready to build.
          </p>

          {/* Action Links */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            {/* FocusFlow Live */}
            <a
              href="https://focus-flow0907.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#00F5D4] px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_0_25px_rgba(0,245,212,0.4)] hover:bg-white transition-all"
            >
              <span>Try FocusFlow Live</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white hover:border-[#00F5D4] hover:bg-[#00F5D4]/10 transition-all"
            >
              <Mail className="h-4 w-4 text-[#00F5D4]" />
              <span>Contact Lalit</span>
            </a>

            {/* GitHub - Using Inline SVG */}
            <a
              href={PORTFOLIO_DATA.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-medium text-white hover:border-white/40 hover:bg-white/10 transition-all"
              aria-label="GitHub Profile"
            >
              <svg
                className="h-4 w-4 fill-current text-[#00F5D4]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
              <span>GitHub</span>
            </a>

            {/* LinkedIn - Using Inline SVG */}
            <a
              href={PORTFOLIO_DATA.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 text-sm font-medium text-white hover:border-[#F59E0B]/50 hover:bg-[#F59E0B]/10 transition-all"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="h-4 w-4 fill-current text-[#F59E0B]"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <span>© 2026 LALIT CHOUDHARY. ALL RIGHTS RESERVED.</span>
          <span>BUILT WITH NEXT.JS • REACT THREE FIBER • TAILWIND CSS</span>
        </div>
      </motion.div>
    </section>
  );
}
