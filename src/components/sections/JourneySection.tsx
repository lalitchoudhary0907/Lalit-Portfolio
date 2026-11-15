"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Award,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Milestone {
  id: string;
  year: string;
  period: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  snippet: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

// EXACT CHRONOLOGICAL 2026 SEQUENCE (01 to 06)
const MILESTONES: Milestone[] = [
  {
    id: "overtone",
    year: "2026",
    period: "2026 • COMMERCE & AUDIO",
    tag: "2026 • COMMERCE & AUDIO",
    title: "Overtone",
    subtitle: "Global Instrument Commerce & Sound Catalog",
    description:
      "Crafted a luxury instrument commerce platform featuring bespoke sound profiles, interactive 432Hz acoustic preview players, and fluid responsive catalog browsing.",
    snippet: "Global Instrument Commerce & Sound Catalog.",
    icon: Layers,
  },
  {
    id: "corealert-sos",
    year: "2026",
    period: "2026 • MOBILE & SAFETY",
    tag: "2026 • MOBILE & SAFETY",
    title: "CoreAlert SOS",
    subtitle: "Emergency Response & Guardian Telemetry App",
    description:
      "Engineered a rapid personal safety platform with background hardware volume-down SOS triggers, sub-second GPS coordinate sync, and live guardian broadcasting.",
    snippet: "Emergency Response & Guardian Telemetry App.",
    icon: ShieldCheck,
  },
  {
    id: "newton-school",
    year: "2026",
    period: "2026 • UNIVERSITY",
    tag: "2026 • UNIVERSITY",
    title: "Newton School of Technology",
    subtitle: "Began B.Tech in CS & AI at Rishihood University",
    description:
      "Began a B.Tech in Computer Science and Artificial Intelligence at Rishihood University, diving deep into computer systems architecture, algorithmic complexity, numerical methods, and distributed pipelines.",
    snippet: "Began B.Tech in CS & AI at Rishihood University.",
    icon: Cpu,
  },
  {
    id: "gati-predict",
    year: "2026",
    period: "2026 • SMART TRANSIT",
    tag: "2026 • SMART TRANSIT",
    title: "Gati-Predict — SIH 2026",
    subtitle: "AI Multimodal Transit & Railway Delay Predictor",
    description:
      "Predictive transit intelligence and real-time railway telemetry platform engineered for Smart India Hackathon (SIH 2026) with congestion forecasting and dynamic dispatch optimization.",
    snippet: "AI Multimodal Transit & Railway Delay Predictor.",
    icon: Sparkles,
  },
  {
    id: "worldquant-gold",
    year: "2026",
    period: "2026 • QUANT HONORS",
    tag: "2026 • QUANT HONORS",
    title: "WorldQuant BRAIN — Gold Level",
    subtitle: "Quantitative Alpha Research & Gold Level Honor",
    description:
      "Achieved elite Gold Level Consultant status in the WorldQuant Challenge, formulating and backtesting predictive market-neutral quantitative alphas with institutional Sharpe ratios and low portfolio turnover.",
    snippet: "Quantitative Alpha Research & Gold Level Honor.",
    icon: Award,
  },
  {
    id: "hacktoberfest-2026",
    year: "2026",
    period: "2026 • OPEN SOURCE",
    tag: "2026 • OPEN SOURCE",
    title: "Hacktoberfest 2026 — Hack Day",
    subtitle: "In-Person Open-Source Hack Day at Sonipat × Rishihood University",
    description:
      "Collaborated live on-site with open-source maintainers at Rishihood University powered by DigitalOcean, MLH, and DEV, authoring and merging production pull requests for global community projects.",
    snippet: "In-Person Open-Source Hack Day at Sonipat × Rishihood University.",
    icon: Code2,
  },
];

// Directional slide-and-fade animation variants for center spotlight
const spotlightVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 70 : -70,
    opacity: 0,
    filter: "blur(5px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      x: { type: "spring" as const, stiffness: 320, damping: 30 },
      opacity: { duration: 0.28, ease: "easeOut" },
      filter: { duration: 0.25 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -70 : 70,
    opacity: 0,
    filter: "blur(5px)",
    transition: {
      x: { type: "spring" as const, stiffness: 320, damping: 30 },
      opacity: { duration: 0.2, ease: "easeIn" },
      filter: { duration: 0.18 },
    },
  }),
};

export default function JourneySection() {
  const [[activeIndex, direction], setPage] = useState<[number, number]>([0, 0]);
  const trackContainerRef = useRef<HTMLDivElement>(null);
  const stationRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isInitialMount = useRef(true);

  const active = MILESTONES[activeIndex];
  const total = MILESTONES.length;

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prev]) => {
        let nextIndex = prev + newDirection;
        if (nextIndex < 0) nextIndex = total - 1;
        if (nextIndex >= total) nextIndex = 0;
        return [nextIndex, newDirection];
      });
    },
    [total]
  );

  const goToIndex = useCallback(
    (newIndex: number) => {
      if (newIndex === activeIndex) return;
      setPage([newIndex, newIndex > activeIndex ? 1 : -1]);
    },
    [activeIndex]
  );

  const handlePrev = useCallback(() => paginate(-1), [paginate]);
  const handleNext = useCallback(() => paginate(1), [paginate]);

  // Center active station horizontally on inner rail ONLY on explicit user interaction
  // NEVER scroll on initial mount / hydration, and NEVER call scrollIntoView (which scrolls window)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    const container = trackContainerRef.current;
    const el = stationRefs.current[activeIndex];
    if (el && container) {
      const containerWidth = container.offsetWidth;
      const elLeft = el.offsetLeft;
      const elWidth = el.offsetWidth;
      container.scrollTo({
        left: elLeft - containerWidth / 2 + elWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  // Keyboard left/right arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Progress percentage across stations (0% to 100%)
  const progressPercent = total > 1 ? (activeIndex / (total - 1)) * 100 : 0;

  return (
    <section
      id="journey"
      className="relative z-10 mx-auto w-full max-w-[1380px] px-6 py-28 sm:px-10 lg:px-14 border-t border-white/[0.08] overflow-hidden"
    >
      {/* Subtle Ambient Ember Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,87,34,0.05),transparent_70%)] blur-3xl -z-10" />

      {/* ========================================================
          SECTION HEADER & COUNTER / PREV-NEXT CONTROLS
         ======================================================== */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8 sm:mb-12 border-b border-white/[0.07] pb-6">
        <div>
          <div className="font-mono text-xs uppercase tracking-widest text-[#FF5722] mb-3 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722]" />
            <span>04 / TIME JOURNEY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-semibold tracking-[-0.035em] text-[#F5F3EF] leading-[1.04]">
            A path that keeps <span className="text-[#FF5722]">growing.</span>
          </h2>

          <p className="mt-3 max-w-xl text-sm sm:text-base text-[#9E9890] leading-relaxed">
            Key milestones, honors, and production deployments across 2026.
          </p>
        </div>

        {/* Counter and Navigation Controls */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="font-mono text-sm tracking-widest text-[#8E877E]">
            <span className="text-xl font-bold text-[#F5F3EF]">0{activeIndex + 1}</span>
            <span className="text-white/20"> / </span>
            <span>0{total}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Previous Milestone"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.12] bg-[#161412] text-[#F5F3EF] hover:border-[#FF5722] hover:text-[#FF5722] transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next Milestone"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#FF5722]/50 bg-[#FF5722]/10 text-[#FF5722] hover:bg-[#FF5722] hover:text-[#121110] transition-colors cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          CENTRAL SPOTLIGHT WITH STRONGER 2026 WATERMARK (REFERENCE CONTRAST)
         ======================================================== */}
      <div className="relative min-h-[300px] sm:min-h-[360px] flex items-center justify-center text-center py-8 sm:py-12 select-none">
        {/* Giant Crisp 2026 Background Watermark (High Visibility Contrast text-white/[0.11]) */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center select-none overflow-hidden -z-10">
          <span className="font-serif text-[36vw] sm:text-[28vw] md:text-[22vw] lg:text-[20vw] font-bold text-white/[0.11] tracking-tight leading-none">
            2026
          </span>
        </div>

        {/* Active Milestone Spotlight (Directional Left-to-Right Slide-and-Fade) */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={active.id}
            custom={direction}
            variants={spotlightVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative z-10 max-w-3xl px-4 flex flex-col items-center"
          >
            {/* Tag / Period Eyebrow */}
            <span className="font-mono text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#FF5722] font-semibold mb-3">
              {active.tag}
            </span>

            {/* Display Title */}
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#F5F3EF] leading-[1.08]">
              {active.title}
            </h3>

            {/* Subtitle */}
            <p className="mt-2.5 font-mono text-xs sm:text-sm text-[#FF5722]">
              {active.subtitle}
            </p>

            {/* Narrative Description */}
            <p className="mt-4 text-sm sm:text-base text-[#9E9890] max-w-2xl leading-relaxed">
              {active.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ========================================================
          DYNAMIC LEFT-TO-RIGHT HORIZONTAL TIMELINE TRACK / RAIL
         ======================================================== */}
      <div
        ref={trackContainerRef}
        className="relative mt-8 sm:mt-12 pt-10 overflow-x-auto no-scrollbar scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="relative min-w-[780px] lg:min-w-0 pb-4">
          {/* Base Inactive Hairline Rail Line */}
          <div className="absolute top-10 left-0 right-0 h-[1px] bg-white/[0.12]" />

          {/* Active #FF5722 Gliding Progress Line */}
          <motion.div
            className="absolute top-10 left-0 h-[1.5px] bg-gradient-to-r from-[#FF5722] via-[#FF5722] to-[#FF5722] shadow-[0_0_8px_#FF5722]"
            initial={false}
            animate={{ width: `${progressPercent}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          />

          {/* 6-Station Left-to-Right Milestone Rail Grid */}
          <div className="relative z-10 grid grid-cols-6 gap-4">
            {MILESTONES.map((item, idx) => {
              const isActive = idx === activeIndex;

              return (
                <div
                  key={item.id}
                  ref={(el) => {
                    stationRefs.current[idx] = el;
                  }}
                  onClick={() => goToIndex(idx)}
                  className="group relative flex flex-col items-start pt-6 cursor-pointer select-none transition-all duration-300"
                >
                  {/* Node Indicator Dot Sitting Exactly on the Rail Line */}
                  <div className="absolute -top-[5px] left-0 flex items-center justify-center">
                    {isActive ? (
                      <motion.div
                        layoutId="activeTimelineIndicator"
                        className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#FF5722] shadow-[0_0_16px_#FF5722]"
                        transition={{ type: "spring", stiffness: 350, damping: 28 }}
                      >
                        <span className="absolute -inset-1 rounded-full bg-[#FF5722]/40 animate-ping" />
                      </motion.div>
                    ) : (
                      <div className="h-2.5 w-2.5 rounded-full border border-white/30 bg-[#121110] transition-transform duration-200 group-hover:scale-125 group-hover:border-[#FF5722]" />
                    )}
                  </div>

                  {/* Tag */}
                  <span
                    className={`font-mono text-[10px] tracking-widest uppercase transition-colors ${
                      isActive ? "text-[#FF5722] font-semibold" : "text-[#7A736A] group-hover:text-[#9E9890]"
                    }`}
                  >
                    {item.tag}
                  </span>

                  {/* Milestone Title */}
                  <h4
                    className={`mt-1 text-xs sm:text-[13px] font-medium tracking-tight transition-colors line-clamp-1 ${
                      isActive ? "text-[#F5F3EF] font-bold" : "text-[#D1CCC4] group-hover:text-[#FF5722]"
                    }`}
                  >
                    {item.title}
                  </h4>

                  {/* Snippet */}
                  <p className="mt-1 text-[11px] text-[#7A736A] leading-relaxed line-clamp-2">
                    {item.snippet}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
