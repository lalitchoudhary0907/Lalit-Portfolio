"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Mail, Terminal, Sparkles, Layers } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

// Inline GitHub SVG adhering to critical icon rule
function GitHubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={`${className} fill-current`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

// Inline LinkedIn SVG adhering to critical icon rule
function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      className={`${className} fill-current`}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.39 9.74v-8.37H5.07v8.37h2.78z" />
    </svg>
  );
}

export default function SkillsAndContact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-6 py-28 border-t border-white/5">
      {/* ========================================================
          01. BENTO TECHNICAL ARSENAL
         ======================================================== */}
      <div id="skills" className="mb-28">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#00F5D4] mb-4">
          <Cpu className="h-4 w-4" />
          <span>TECHNICAL ARSENAL</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
          Full-Stack, 3D Web & <br className="hidden sm:inline" />
          <span className="text-[#00F5D4]">Quant Stack.</span>
        </h2>

        <p className="mt-4 max-w-2xl text-sm sm:text-base text-slate-400">
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
                className={`relative overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 ${
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

                <h3 className="mt-4 text-xl font-bold text-white tracking-tight">
                  {group.category}
                </h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-xl border px-3 py-1.5 font-mono text-xs transition-all duration-200 ${
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

      {/* ========================================================
          02. 05 / CONTACT — 'Let's connect.' MATCHING REFERENCE
         ======================================================== */}
      <div>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#FF5722] mb-6">
          <span>05 / CONTACT</span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="mb-14">
          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
            Let&apos;s <span className="text-[#FF5722]">connect.</span>
          </h2>
          <p className="mt-4 max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed">
            I&apos;m always open to discussing new opportunities, quantitative alpha research, open-source projects, or high-performance frontend engineering.
          </p>
        </div>

        {/* 3 Clean Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: DROP ME A LINE (Email) */}
          <motion.a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative flex flex-col justify-between rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 transition-all duration-300 hover:border-[#FF5722] hover:-translate-y-1 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  DROP ME A LINE
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:bg-[#FF5722] group-hover:text-white transition-all">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 text-[#FF5722]">
                <Mail className="h-6 w-6" />
                <span className="text-xl font-bold tracking-tight text-white">
                  Email
                </span>
              </div>

              <p className="mt-3 font-mono text-xs text-slate-400 break-all">
                {PORTFOLIO_DATA.personal.email}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 font-mono text-xs text-[#FF5722] flex items-center gap-1 group-hover:underline">
              <span>Send message</span>
              <span>↗</span>
            </div>
          </motion.a>

          {/* Card 2: GITHUB */}
          <motion.a
            href={PORTFOLIO_DATA.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative flex flex-col justify-between rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 transition-all duration-300 hover:border-[#00F5D4] hover:-translate-y-1 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  CODE & REPOSITORIES
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:bg-[#00F5D4] group-hover:text-black transition-all">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 text-[#00F5D4]">
                <GitHubIcon className="h-6 w-6" />
                <span className="text-xl font-bold tracking-tight text-white">
                  GitHub
                </span>
              </div>

              <p className="mt-3 font-mono text-xs text-slate-400">
                @lalit0907 • FocusFlow & Open Source
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 font-mono text-xs text-[#00F5D4] flex items-center gap-1 group-hover:underline">
              <span>Follow on GitHub</span>
              <span>↗</span>
            </div>
          </motion.a>

          {/* Card 3: LINKEDIN */}
          <motion.a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative flex flex-col justify-between rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 transition-all duration-300 hover:border-[#F59E0B] hover:-translate-y-1 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  PROFESSIONAL NETWORK
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-300 group-hover:bg-[#F59E0B] group-hover:text-black transition-all">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-8 flex items-center gap-3 text-[#F59E0B]">
                <LinkedInIcon className="h-6 w-6" />
                <span className="text-xl font-bold tracking-tight text-white">
                  LinkedIn
                </span>
              </div>

              <p className="mt-3 font-mono text-xs text-slate-400">
                Lalit Choudhary • BTech CS & AI
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/5 font-mono text-xs text-[#F59E0B] flex items-center gap-1 group-hover:underline">
              <span>Connect on LinkedIn</span>
              <span>↗</span>
            </div>
          </motion.a>
        </div>

        {/* MINIMALIST FOOTER */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <span>© 2026 LALIT CHOUDHARY • BUILT WITH CURIOSITY</span>

          <div className="flex items-center gap-6">
            <a
              href="https://focus-flow0907.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              FOCUSFLOW LIVE
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-[#FF5722] transition-colors flex items-center gap-1"
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
