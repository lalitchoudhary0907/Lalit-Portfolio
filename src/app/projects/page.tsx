"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import {
  ALL_PROJECTS,
  ProjectCardData,
  GitHubIcon,
  FocusFlowArtwork,
  CoreAlertArtwork,
  OvertoneArtwork,
  WorldQuantArtwork,
  GatiPredictArtwork,
  HacktoberfestArtwork,
} from "@/data/projectsData";

const CATEGORIES = [
  { id: "ALL", label: "ALL", count: 6 },
  { id: "FULL-STACK", label: "FULL-STACK", count: 2 },
  { id: "AI & QUANT", label: "AI & QUANT", count: 2 },
  { id: "MOBILE", label: "MOBILE", count: 1 },
  { id: "OPEN SOURCE", label: "OPEN SOURCE", count: 1 },
] as const;

type FilterType = (typeof CATEGORIES)[number]["id"];

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>("ALL");
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Filter projects according to category pill selection
  const filteredProjects = ALL_PROJECTS.filter((p) => {
    if (selectedFilter === "ALL") return true;
    return p.filterCategory === selectedFilter;
  });

  // Clamp activeIndex when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedFilter]);

  // Responsive breakpoint check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock document scroll so /projects is strictly a single-viewport fit with zero window scrollbars
  useEffect(() => {
    const origHtmlOverflow = document.documentElement.style.overflow;
    const origBodyOverflow = document.body.style.overflow;
    const origHtmlOverscroll = document.documentElement.style.overscrollBehavior;
    const origBodyOverscroll = document.body.style.overscrollBehavior;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overscrollBehavior = "none";
    document.body.style.overscrollBehavior = "none";

    return () => {
      document.documentElement.style.overflow = origHtmlOverflow;
      document.body.style.overflow = origBodyOverflow;
      document.documentElement.style.overscrollBehavior = origHtmlOverscroll;
      document.body.style.overscrollBehavior = origBodyOverscroll;
    };
  }, []);

  const total = filteredProjects.length;

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : total - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < total - 1 ? prev + 1 : 0));
  }, [total]);

  // Keyboard navigation (ArrowLeft / ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Wheel horizontal glide handling with cooldown & window scroll locking
  const wheelLockRef = useRef(false);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheelNative = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(delta) < 18 || wheelLockRef.current) return;

      wheelLockRef.current = true;
      if (delta > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 260);
    };

    el.addEventListener("wheel", handleWheelNative, { passive: false });
    return () => el.removeEventListener("wheel", handleWheelNative);
  }, [handleNext, handlePrev]);

  // Drag / swipe handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    setDragStartX(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (dragStartX === null) return;
    const diff = dragStartX - e.clientX;
    if (Math.abs(diff) > 35) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setDragStartX(null);
  };

  const activeProject = filteredProjects[activeIndex] || filteredProjects[0];

  return (
    <div
      ref={containerRef}
      className="relative h-dvh max-h-dvh w-full overflow-hidden bg-[#121110] text-[#F5F3EF] flex flex-col justify-between selection:bg-accent selection:text-on-accent cursor-default select-none"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[450px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(198,255,0,0.05),transparent_70%)] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[350px] w-[500px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(198,255,0,0.035),transparent_70%)] blur-3xl" />
      </div>

      {/* ========================================================
          SLIM FULL-BLEED TOP NAVBAR
         ======================================================== */}
      <header className="shrink-0 z-50 w-full h-14 px-6 sm:px-12 flex items-center justify-between bg-[#111010]/90 backdrop-blur-md border-b border-white/[0.08]">
        {/* Left: Back Link to Home */}
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 text-xs tracking-[0.24em] uppercase text-[#F5F3EF] font-medium hover:text-accent transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1 text-accent" />
          <span>LALIT CHOUDHARY</span>
        </Link>

        {/* Right: Site Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 sm:gap-10 font-mono text-xs tracking-[0.2em] uppercase text-[#9E9890]">
          <Link href="/#about" className="hover:text-[#F5F3EF] transition-colors">
            ABOUT
          </Link>
          <span className="text-accent font-semibold flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            PROJECTS
          </span>
          <Link href="/#journey" className="hover:text-[#F5F3EF] transition-colors">
            TIME JOURNEY
          </Link>
          <Link href="/#contact" className="hover:text-[#F5F3EF] transition-colors">
            CONTACT
          </Link>
        </nav>

        {/* Mobile Back Button */}
        <Link
          href="/"
          className="md:hidden font-mono text-[11px] tracking-widest uppercase text-accent border border-accent/35 rounded px-2.5 py-1"
        >
          HOME
        </Link>
      </header>

      {/* ========================================================
          PAGE HEADER & CATEGORY FILTER BAR
         ======================================================== */}
      <section className="shrink-0 relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 pt-3 sm:pt-4 pb-2 sm:pb-2.5">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-white/[0.08] pb-2.5">
          <div>
            {/* Eyebrow */}
            <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-accent mb-1 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              01 / SELECTED WORK
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#F5F3EF] leading-tight">
              Things I&apos;ve Built
            </h1>

            {/* Subcopy */}
            <p className="mt-0.5 text-xs text-[#9E9890] max-w-md leading-relaxed">
              Scroll, drag, or explore the index. Select a project to view code.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {CATEGORIES.map((cat) => {
              const isActive = selectedFilter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[10px] tracking-[0.16em] uppercase transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-accent text-on-accent font-bold shadow-[0_0_14px_rgba(198,255,0,0.20)]"
                      : "bg-[#181614] border border-white/[0.10] text-[#9E9890] hover:text-[#F5F3EF] hover:border-white/20"
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[9px] rounded-full px-1.5 py-0.2 ${
                      isActive ? "bg-on-accent/20 text-on-accent" : "text-[#7A736A]"
                    }`}
                  >
                    0{cat.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          CENTER 3D COVERFLOW CAROUSEL (SMOOTH RIGHT-TO-LEFT GLIDE)
         ======================================================== */}
      <section
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className="relative z-10 w-full flex-1 min-h-0 flex flex-col justify-center items-center py-1 sm:py-2 overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: "1400px" }}
      >
        <div
          className="relative w-full max-w-[1440px] h-full max-h-[440px] sm:max-h-[470px] flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {filteredProjects.map((project, i) => {
            const offset = i - activeIndex;
            const isActive = offset === 0;

            // Spacing and 3D coverflow geometry matching video_2.mov (5 visible cards)
            const spacing = isMobile ? 180 : 255;
            const x = offset * spacing;
            const rotateY = isActive ? 0 : offset > 0 ? -30 : 30;
            const z = isActive ? 35 : -Math.abs(offset) * 110;
            const scale = isActive ? 1 : Math.max(0.72, 1 - Math.abs(offset) * 0.13);
            const opacity =
              Math.abs(offset) > 2 ? 0 : isActive ? 1 : Math.max(0.35, 0.78 - Math.abs(offset) * 0.22);
            const zIndex = 30 - Math.abs(offset);
            const isClickable = Math.abs(offset) <= 2;

            return (
              <motion.div
                key={project.id}
                onClick={() => {
                  if (isActive) {
                    if (project.githubUrl && project.githubUrl.trim().length > 0) {
                      window.open(project.githubUrl, "_blank", "noopener,noreferrer");
                    } else if (project.liveUrl && project.liveUrl.startsWith("http")) {
                      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                    }
                  } else if (isClickable) {
                    setActiveIndex(i);
                  }
                }}
                animate={{
                  x,
                  z,
                  rotateY,
                  scale,
                  opacity,
                }}
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 30,
                  mass: 0.6,
                }}
                style={{
                  zIndex,
                  transformStyle: "preserve-3d",
                  pointerEvents: isClickable ? "auto" : "none",
                }}
                className={`absolute w-[280px] sm:w-[320px] md:w-[340px] rounded-xl overflow-hidden cursor-pointer transition-colors duration-300 ${
                  isActive
                    ? "border-2 border-accent shadow-[0_20px_50px_rgba(198,255,0,0.18)] bg-[#181614]"
                    : "border border-white/[0.10] shadow-[0_15px_35px_rgba(0,0,0,0.6)] bg-[#141210]/95 hover:border-white/30"
                }`}
              >
                {/* Active Card Glow Tag */}
                {isActive && (
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-on-accent shadow-[0_0_12px_rgba(198,255,0,0.20)]">
                    <Sparkles className="h-2.5 w-2.5" />
                    FEATURED
                  </div>
                )}

                {/* Card Artwork / Preview Canvas */}
                <div className="relative h-40 sm:h-44 w-full overflow-hidden flex flex-col justify-between bg-[#131110]">
                  {project.previewType === "focusflow" && <FocusFlowArtwork />}
                  {project.previewType === "corealert" && <CoreAlertArtwork />}
                  {project.previewType === "overtone" && <OvertoneArtwork />}
                  {project.previewType === "worldquant" && <WorldQuantArtwork />}
                  {(project.previewType === "gati-predict" || (project.previewType as string) === "genloop") && (
                    <GatiPredictArtwork />
                  )}
                  {project.previewType === "hacktoberfest" && <HacktoberfestArtwork />}
                </div>

                {/* Card Editorial Information */}
                <div className="border-t border-white/[0.08] bg-[#161412] p-3.5 sm:p-4">
                  <div className="flex items-center justify-between font-mono text-[9px] sm:text-[10px] tracking-[0.16em] uppercase mb-1 gap-2">
                    <span className="text-accent font-semibold shrink-0">{project.index} //</span>
                    <span className="text-[#E5B85C] font-semibold truncate text-right">
                      {project.rightLabel || project.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-[#F5F3EF]">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-xs text-[#9E9890] line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* Active Card Interactive Buttons (Strict Conditional Rendering) */}
                  {isActive && (
                    <div className="mt-3 pt-3 border-t border-white/[0.08]">
                      {project.githubUrl ? (
                        <div className="flex items-center justify-between gap-2">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3.5 py-1.5 text-[11px] font-mono font-bold uppercase tracking-wider text-on-accent shadow-[0_0_14px_rgba(198,255,0,0.18)] transition-all hover:bg-accent-hover cursor-pointer"
                          >
                            <span>OPEN STORY</span>
                            <ArrowUpRight className="h-3 w-3" />
                          </a>

                          <div className="flex items-center gap-2">
                            {project.liveUrl &&
                              project.liveUrl !== "#credentials" &&
                              project.liveUrl !== project.githubUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="inline-flex items-center gap-1 rounded-md border border-white/[0.14] bg-white/[0.04] px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[#F5F3EF] hover:border-accent hover:text-accent transition-colors cursor-pointer"
                                >
                                  <span>LIVE</span>
                                  <ExternalLink className="h-2.5 w-2.5" />
                                </a>
                              )}
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.14] bg-white/[0.04] px-2.5 py-1.5 text-[10px] font-mono uppercase tracking-wider text-[#F5F3EF] hover:border-accent hover:text-accent transition-colors cursor-pointer"
                            >
                              <GitHubIcon className="h-2.5 w-2.5" />
                              <span>CODE</span>
                            </a>
                          </div>
                        </div>
                      ) : (
                        /* Completely remove GITHUB, LIVE, and CODE buttons for projects without available repo */
                        <div className="flex items-center gap-2 text-[10px] font-mono text-[#E5B85C]/90 tracking-wider uppercase py-0.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#E5B85C]" />
                          <span>PROPRIETARY QUANT RESEARCH • WORLDQUANT BRAIN</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Prev/Next Overlay Chevrons */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between z-40">
          <button
            onClick={handlePrev}
            className="pointer-events-auto flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/[0.12] bg-[#161412]/80 backdrop-blur-md text-[#F5F3EF] transition-all hover:border-accent hover:text-accent hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            onClick={handleNext}
            className="pointer-events-auto flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/[0.12] bg-[#161412]/80 backdrop-blur-md text-[#F5F3EF] transition-all hover:border-accent hover:text-accent hover:scale-105 active:scale-95 cursor-pointer"
            aria-label="Next project"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
        </div>
      </section>

      {/* ========================================================
          BOTTOM CONTROLS BAR (COMPACT & FITTED)
         ======================================================== */}
      <footer className="shrink-0 z-40 w-full border-t border-white/[0.08] bg-[#111010]/95 backdrop-blur-md px-6 sm:px-12 py-3">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs font-mono uppercase tracking-[0.18em]">
          {/* Left: Interactive Prompt & Counter */}
          <div className="flex items-center gap-3 text-[#8E877E] text-[11px] min-w-0">
            <span className="text-accent shrink-0">:</span>
            <span className="truncate">SCROLL OR DRAG TO EXPLORE • SELECT A PROJECT</span>
            <span className="shrink-0 rounded bg-white/5 border border-white/10 px-2 py-0.5 text-accent font-semibold">
              0{activeIndex + 1} / 0{total}
            </span>
          </div>

          {/* Right: Outlined Action Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="rounded border border-white/[0.14] bg-[#161412] px-3 py-1.5 text-[11px] text-[#F5F3EF] transition-all hover:border-accent hover:text-accent cursor-pointer"
            >
              ← PREV
            </button>
            <button
              onClick={handleNext}
              className="rounded border border-white/[0.14] bg-[#161412] px-3 py-1.5 text-[11px] text-[#F5F3EF] transition-all hover:border-accent hover:text-accent cursor-pointer"
            >
              NEXT →
            </button>
            <span className="text-white/20">|</span>
            <Link
              href="/"
              className="rounded border border-accent/35 bg-accent/12 px-3.5 py-1.5 text-[11px] font-semibold text-accent transition-all hover:bg-accent hover:text-on-accent cursor-pointer"
            >
              ← BACK TO HOME
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
