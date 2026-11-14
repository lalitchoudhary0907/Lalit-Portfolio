"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Command,
  Sparkles,
  Search,
  ArrowUpRight,
  Cpu,
  Award,
  Layers,
  Terminal,
  X,
  Code2,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

interface AnswerPayload {
  text: string;
  actions?: { label: string; href: string; isExternal?: boolean }[];
}

const KNOWLEDGE_BASE: Record<string, AnswerPayload> = {
  pitch: {
    text: "Lalit Choudhary is a Full-Stack Product Engineer and Quantitative Developer from India who bridges hardware-accelerated 3D web engineering, autonomous AI workflows, and mathematical alpha formulation. He is the architect of FocusFlow—a production deep-work engine deployed on Vercel—and earned the prestigious Gold Level honor in the WorldQuant Challenge® under Chief Strategy Officer Nitish Maini.",
    actions: [
      { label: "Launch FocusFlow Live", href: "https://focus-flow0907.vercel.app/", isExternal: true },
      { label: "Inspect Gold Credential", href: "#credentials" },
      { label: "Review Technical Stack", href: "#skills" },
    ],
  },
  focusflow: {
    text: "FocusFlow is a high-performance deep-work orchestration engine engineered with Next.js 16 (App Router), TypeScript, Tailwind CSS, and Framer Motion. It delivers sub-100ms state transitions, real-time cognitive session telemetry, distraction-free workspace modes, and responsive edge deployment on Vercel.",
    actions: [
      { label: "Test Live Inside Card", href: "#projects" },
      { label: "Open FocusFlow App", href: "https://focus-flow0907.vercel.app/", isExternal: true },
    ],
  },
  worldquant: {
    text: "Lalit attained the elite GOLD LEVEL in the WorldQuant Challenge® (authorized by Nitish Maini, Chief Strategy Officer). He formulated, simulated, and stress-tested predictive market-neutral quantitative alphas on WorldQuant BRAIN, balancing Sharpe ratios, statistical Fitness, sub-universe stability, and low portfolio turnover.",
    actions: [
      { label: "Inspect Official Certificate", href: "#credentials" },
      { label: "View Quantitative Skills", href: "#skills" },
    ],
  },
  hacktoberfest: {
    text: "On October 31, 2026, Lalit participated in-person at Hacktoberfest Hack Day Sonipat x Rishihood University (presented by DigitalOcean, MLH & DEV). He contributed to open-source software, collaborating with leading maintainers on production codebases.",
    actions: [
      { label: "View Hacktoberfest Certificate", href: "#credentials" },
      { label: "View Open Source Arsenal", href: "#skills" },
    ],
  },
  journey: {
    text: "Lalit is pursuing his B.Tech in Computer Science & Artificial Intelligence at Rishihood University (Newton School of Technology). His journey spans foundational 3D WebGL architecture, autonomous AI agents, in-person hackathon wins, and prestigious WorldQuant BRAIN Gold honors.",
    actions: [
      { label: "Inspect Timeline", href: "#journey" },
      { label: "View Credentials Vault", href: "#credentials" },
      { label: "Try FocusFlow Live", href: "https://focus-flow0907.vercel.app/", isExternal: true },
    ],
  },
};

const SUGGESTED_CHIPS = [
  { id: "pitch", label: "Pitch Lalit in 30 seconds" },
  { id: "journey", label: "Tell me about his Rishihood CS & AI journey" },
  { id: "focusflow", label: "How was FocusFlow engineered?" },
  { id: "worldquant", label: "Tell me about his WorldQuant Gold rank" },
  { id: "hacktoberfest", label: "What did he build at Hacktoberfest 2026?" },
];

const NAVIGATION_TARGETS = [
  { label: "01. About", href: "#about", icon: Cpu },
  { label: "02. Communities", href: "#communities", icon: Sparkles },
  { label: "03. Projects & FocusFlow", href: "#projects", icon: Layers },
  { label: "04. Time Journey", href: "#journey", icon: Terminal },
  { label: "05. Credentials Vault", href: "#credentials", icon: Award },
  { label: "06. Contact & Stack", href: "#contact", icon: Code2 },
];

export default function CommandBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeAnswer, setActiveAnswer] = useState<AnswerPayload | null>(
    KNOWLEDGE_BASE.pitch
  );
  const [streamedText, setStreamedText] = useState(KNOWLEDGE_BASE.pitch.text);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const typingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Simulate smooth high-tech streaming response
  const streamResponse = (payload: AnswerPayload) => {
    setActiveAnswer(payload);
    setStreamedText("");
    setIsTyping(true);

    if (typingTimerRef.current) clearInterval(typingTimerRef.current);

    const fullText = payload.text;
    const words = fullText.split(" ");
    let currentIdx = 0;

    typingTimerRef.current = setInterval(() => {
      if (currentIdx < words.length) {
        currentIdx++;
        setStreamedText(words.slice(0, currentIdx).join(" "));
      } else {
        setIsTyping(false);
        if (typingTimerRef.current) clearInterval(typingTimerRef.current);
      }
    }, 28);
  };

  const handleSelectPrompt = (id: string) => {
    const payload = KNOWLEDGE_BASE[id];
    if (payload) {
      setQuery("");
      streamResponse(payload);
    }
  };

  // Global Keyboard Shortcut: Cmd+K / Ctrl+K & Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      if (typingTimerRef.current) clearInterval(typingTimerRef.current);
    }
  }, [isOpen]);

  const handleCustomQuery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const q = query.toLowerCase();
    let matched: AnswerPayload;

    if (q.includes("focus") || q.includes("flow") || q.includes("app") || q.includes("project")) {
      matched = KNOWLEDGE_BASE.focusflow;
    } else if (q.includes("worldquant") || q.includes("gold") || q.includes("quant") || q.includes("alpha")) {
      matched = KNOWLEDGE_BASE.worldquant;
    } else if (q.includes("hack") || q.includes("october") || q.includes("event") || q.includes("mlh")) {
      matched = KNOWLEDGE_BASE.hacktoberfest;
    } else if (
      q.includes("rishihood") ||
      q.includes("btech") ||
      q.includes("journey") ||
      q.includes("timeline") ||
      q.includes("college") ||
      q.includes("university") ||
      q.includes("education")
    ) {
      matched = KNOWLEDGE_BASE.journey;
    } else if (q.includes("skill") || q.includes("stack") || q.includes("tech") || q.includes("react")) {
      matched = {
        text: `Lalit specializes in full-stack web and quant architecture: Next.js, React, TypeScript, Three.js / React Three Fiber, Tailwind CSS, Framer Motion, Python, and WorldQuant BRAIN alpha modeling.`,
        actions: [
          { label: "Inspect Tech Arsenal", href: "#skills" },
          { label: "Contact Lalit", href: `mailto:${PORTFOLIO_DATA.personal.email}` },
        ],
      };
    } else {
      matched = {
        text: `Regarding "${query}": Lalit Choudhary is actively open for high-impact software engineering roles, hackathons, and quantitative research. Feel free to explore his production systems or connect directly!`,
        actions: [
          { label: "View FocusFlow Sandbox", href: "#projects" },
          { label: "Email Lalit", href: `mailto:${PORTFOLIO_DATA.personal.email}` },
          { label: "View Credentials", href: "#credentials" },
        ],
      };
    }

    streamResponse(matched);
  };

  const handleNavigate = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 01. Sleek Floating Bottom Glass Pill */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 rounded-full border border-white/[0.08] bg-[#181614]/90 px-5 py-2.5 text-xs font-mono text-[#9E9890] shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:border-[#FF5722]/60 hover:bg-[#181614] hover:shadow-[0_0_30px_rgba(255,87,34,0.2)]"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#FF5722] animate-pulse" />
          <span className="text-[#F5F3EF] group-hover:text-[#FF5722] transition-colors">
            Ask Lalit&apos;s AI Twin or Jump to Section
          </span>
          <span className="flex items-center gap-1 rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-[#9E9890] group-hover:border-[#FF5722]/50 group-hover:text-[#FF5722]">
            <Command className="h-3 w-3" />
            <span>K</span>
          </span>
        </button>
      </motion.div>

      {/* 02. Futuristic Glass Command Palette Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[250] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-3xl border border-white/[0.08] bg-[#181614] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]"
            >
              {/* Header Search Bar */}
              <form
                onSubmit={handleCustomQuery}
                className="flex items-center border-b border-white/[0.08] px-5 py-4"
              >
                <Search className="h-5 w-5 shrink-0 text-[#FF5722]" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask Lalit's AI Concierge anything or type 'quant', 'projects', 'stack'..."
                  className="w-full bg-transparent px-3 text-sm text-[#F5F3EF] placeholder-[#9E9890] focus:outline-none"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="text-[#9E9890] hover:text-[#F5F3EF]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="ml-2 rounded-lg border border-white/[0.08] p-1.5 text-[#9E9890] hover:bg-white/10 hover:text-[#F5F3EF]"
                >
                  <X className="h-4 w-4" />
                </button>
              </form>

              {/* Quick Navigation Jump Bar */}
              <div className="border-b border-white/[0.08] bg-white/[0.02] px-5 py-3">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#9E9890] mb-2">
                  Instant Section Telemetry
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {NAVIGATION_TARGETS.map((target) => {
                    const IconComp = target.icon;
                    return (
                      <button
                        key={target.href}
                        onClick={() => handleNavigate(target.href)}
                        className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/5 px-2.5 py-1.5 text-left text-xs font-mono text-[#9E9890] hover:border-[#FF5722]/50 hover:bg-[#FF5722]/10 hover:text-[#FF5722] transition-all"
                      >
                        <IconComp className="h-3.5 w-3.5 shrink-0 text-[#FF5722]" />
                        <span className="truncate">{target.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* AI Concierge Response Area */}
              <div className="p-5 space-y-4 max-h-[380px] overflow-y-auto">
                <div className="flex items-center justify-between text-xs font-mono text-[#9E9890]">
                  <span className="inline-flex items-center gap-1.5 text-[#FF5722]">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>LALIT&apos;S AI CONCIERGE (AUTONOMOUS AGENT)</span>
                  </span>
                  {isTyping && (
                    <span className="text-[10px] text-[#9E9890] animate-pulse">
                      STREAMING TELEMETRY...
                    </span>
                  )}
                </div>

                {/* AI Dialogue Box */}
                <div className="rounded-2xl border border-white/[0.08] bg-[#121110] p-4 sm:p-5 backdrop-blur-md">
                  <p className="text-sm sm:text-base leading-relaxed text-[#F5F3EF]">
                    {streamedText}
                    {isTyping && (
                      <span className="inline-block h-4 w-1.5 translate-y-0.5 bg-[#FF5722] animate-pulse ml-1" />
                    )}
                  </p>

                  {/* Contextual Action Buttons */}
                  {activeAnswer?.actions && activeAnswer.actions.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2.5 pt-3 border-t border-white/[0.08]">
                      {activeAnswer.actions.map((act, i) => (
                        <a
                          key={i}
                          href={act.href}
                          target={act.isExternal ? "_blank" : undefined}
                          rel={act.isExternal ? "noopener noreferrer" : undefined}
                          onClick={() => {
                            if (!act.isExternal) handleNavigate(act.href);
                          }}
                          className="flex items-center gap-1.5 rounded-full border border-[#FF5722]/30 bg-[#FF5722]/10 px-3 py-1.5 text-xs font-mono font-medium text-[#FF5722] hover:bg-[#FF5722] hover:text-[#121110] transition-all"
                        >
                          <span>{act.label}</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                {/* Quick Prompt Chips */}
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#9E9890] mb-2">
                    Quick Judge Prompts
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTED_CHIPS.map((chip) => (
                      <button
                        key={chip.id}
                        onClick={() => handleSelectPrompt(chip.id)}
                        className="flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/5 px-3 py-1.5 text-xs font-mono text-[#9E9890] hover:border-[#FF5722]/50 hover:bg-[#FF5722]/10 hover:text-[#FF5722] transition-all"
                      >
                        <Terminal className="h-3 w-3 text-[#FF5722]" />
                        <span>{chip.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Key Hints */}
              <div className="flex items-center justify-between border-t border-white/[0.08] bg-[#121110] px-5 py-2.5 font-mono text-[11px] text-[#9E9890]">
                <span>PRESS ESC TO CLOSE</span>
                <span>AUTONOMOUS AGENT ACTIVE</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
