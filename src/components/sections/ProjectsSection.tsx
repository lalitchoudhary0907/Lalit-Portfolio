"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  ALL_PROJECTS,
  ProjectCardData,
  FocusFlowArtwork,
  CoreAlertArtwork,
  OvertoneArtwork,
  WorldQuantArtwork,
  GatiPredictArtwork,
  HacktoberfestArtwork,
} from "@/data/projectsData";

export default function ProjectsSection() {
  // Column 1 (Upward): FocusFlow & WorldQuant Alpha Engine
  const col1Projects = [ALL_PROJECTS[0], ALL_PROJECTS[3]];
  // Column 2 (Downward): CoreAlert SOS & Gati-Predict (SIH 2026)
  const col2Projects = [ALL_PROJECTS[1], ALL_PROJECTS[4]];
  // Column 3 (Upward): Overtone & Hacktoberfest 2026
  const col3Projects = [ALL_PROJECTS[2], ALL_PROJECTS[5]];

  // 4x repetition (8 cards total) guarantees a continuous -50% loop with matched linear velocity
  const col1Loop = [...col1Projects, ...col1Projects, ...col1Projects, ...col1Projects];
  const col2Loop = [...col2Projects, ...col2Projects, ...col2Projects, ...col2Projects];
  const col3Loop = [...col3Projects, ...col3Projects, ...col3Projects, ...col3Projects];

  return (
    <section
      id="projects"
      className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-28 sm:px-10 lg:px-14 border-t border-white/[0.08]"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* ========================================================
            LEFT COLUMN (VERTICALLY CENTERED ON DESKTOP)
           ======================================================== */}
        <div className="lg:col-span-4 flex flex-col justify-center lg:self-center">
          {/* Eyebrow */}
          <div className="font-mono text-[11px] tracking-[0.24em] uppercase text-[#8E877E] mb-4">
            03 / SELECTED WORK
          </div>

          {/* Heading */}
          <h2 className="text-5xl sm:text-6xl font-semibold tracking-[-0.03em] text-[#F5F3EF] leading-[1.08]">
            Things I&apos;ve <br className="hidden sm:inline" />
            Built
          </h2>

          {/* Subcopy */}
          <p className="mt-5 text-sm sm:text-base text-[#9E9890] leading-relaxed max-w-sm">
            Ideas made tangible across AI, full-stack software, and quantitative research.
          </p>

          {/* Primary CTA navigating in SAME TAB to /projects */}
          <Link
            href="/projects"
            className="mt-8 inline-flex items-center justify-between gap-3 rounded-md bg-[#FF5722] px-6 py-4 text-xs font-semibold tracking-[0.18em] uppercase text-[#121110] shadow-[0_0_24px_rgba(255,87,34,0.35)] transition-all hover:bg-[#ff6838]"
          >
            <span>VIEW ALL PROJECTS</span>
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ========================================================
            RIGHT COLUMN: 3-COLUMN OPPOSITE-DIRECTION AUTO-SCROLLING GALLERY
           ======================================================== */}
        <div
          className="lg:col-span-8 h-[700px] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent 0%, black 7%, black 93%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, black 7%, black 93%, transparent 100%)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full">
            {/* Column 1 (Auto-scrolls Continuously UPWARD, matched speed to SkillMarquee) */}
            <div className="marquee-column overflow-hidden h-full">
              <div className="animate-marquee-up flex flex-col gap-5">
                {col1Loop.map((project, idx) => (
                  <ProjectCard key={`${project.id}-c1-${idx}`} project={project} />
                ))}
              </div>
            </div>

            {/* Column 2 (Auto-scrolls Continuously DOWNWARD, matched speed to SkillMarquee) */}
            <div className="marquee-column overflow-hidden h-full hidden md:block">
              <div className="animate-marquee-down flex flex-col gap-5">
                {col2Loop.map((project, idx) => (
                  <ProjectCard key={`${project.id}-c2-${idx}`} project={project} />
                ))}
              </div>
            </div>

            {/* Column 3 (Auto-scrolls Continuously UPWARD, matched speed to SkillMarquee) */}
            <div className="marquee-column overflow-hidden h-full hidden lg:block">
              <div className="animate-marquee-up flex flex-col gap-5">
                {col3Loop.map((project, idx) => (
                  <ProjectCard key={`${project.id}-c3-${idx}`} project={project} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Individual Auto-Scrolling Project Card Component (Sharp Edges + Full-Bleed Artwork + Seamless Gradient Fade-in)
function ProjectCard({ project }: { project: ProjectCardData }) {
  const displayTitle = project.shortTitle || project.title;
  const rightTag = project.rightLabel || `${project.index} / ${project.category}`;

  return (
    <Link
      href="/projects"
      className="group relative block cursor-pointer overflow-hidden rounded-none border border-white/[0.08] bg-[#100F0E]/90 transition-all duration-300 hover:border-[#FF5722]/60 hover:shadow-[0_12px_36px_rgba(255,87,34,0.14)] shrink-0 h-[330px] sm:h-[352px]"
    >
      {/* Full-Bleed Artwork / Preview Canvas Edge-to-Edge */}
      <div className="absolute inset-0 select-none overflow-hidden">
        {project.previewType === "focusflow" && <FocusFlowArtwork />}
        {project.previewType === "corealert" && <CoreAlertArtwork />}
        {project.previewType === "overtone" && <OvertoneArtwork />}
        {project.previewType === "worldquant" && <WorldQuantArtwork />}
        {(project.previewType === "gati-predict" || (project.previewType as string) === "genloop") && (
          <GatiPredictArtwork />
        )}
        {project.previewType === "hacktoberfest" && <HacktoberfestArtwork />}
      </div>

      {/* Seamless Top-to-Bottom Black Fade-In Overlay (spanning bottom ~48% of card) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-b from-transparent via-[#0D0C0B]/85 to-[#0A0908] z-10"
        aria-hidden="true"
      />

      {/* Perimeter Grid Margin Framing (Dashed Guideline, Corner Crosshairs & Axis Ticks) */}
      <div className="pointer-events-none absolute inset-0 z-20">
        {/* Subtle dashed inner margin guide along perimeter */}
        <div className="absolute inset-1.5 border border-white/[0.07] border-dashed transition-colors duration-300 group-hover:border-white/[0.14]" />

        {/* 4 Corner Crosshairs */}
        <span className="absolute top-0.5 left-0.5 font-mono text-[9px] text-white/30 leading-none select-none transition-colors group-hover:text-[#FF5722]/60">+</span>
        <span className="absolute top-0.5 right-0.5 font-mono text-[9px] text-white/30 leading-none select-none transition-colors group-hover:text-[#FF5722]/60">+</span>
        <span className="absolute bottom-0.5 left-0.5 font-mono text-[9px] text-white/30 leading-none select-none transition-colors group-hover:text-[#FF5722]/60">+</span>
        <span className="absolute bottom-0.5 right-0.5 font-mono text-[9px] text-white/30 leading-none select-none transition-colors group-hover:text-[#FF5722]/60">+</span>

        {/* Perimeter Axis Tick Marks */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-[1px] bg-white/20 transition-colors group-hover:bg-[#FF5722]/50" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-[1px] bg-white/20 transition-colors group-hover:bg-[#FF5722]/50" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-white/20 transition-colors group-hover:bg-[#FF5722]/50" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-[1px] bg-white/20 transition-colors group-hover:bg-[#FF5722]/50" />
      </div>

      {/* Integrated Title & Tag Sitting Directly Over Black Fade (Zero Text Collisions) */}
      <div className="absolute inset-x-0 bottom-0 z-30 px-3.5 sm:px-4 pb-3.5 sm:pb-4 pt-3 flex items-baseline justify-between gap-2.5 w-full">
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="text-xs sm:text-[13px] font-medium text-[#F5F3EF] tracking-tight leading-snug truncate transition-colors group-hover:text-[#FF5722]">
            {displayTitle}
          </span>
          <ArrowUpRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0 text-[#9E9890] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FF5722]" />
        </div>
        <span className="shrink-0 whitespace-nowrap font-mono text-[9px] sm:text-[10px] tracking-[0.12em] uppercase text-[#E5B85C] font-medium text-right">
          {rightTag}
        </span>
      </div>
    </Link>
  );
}
