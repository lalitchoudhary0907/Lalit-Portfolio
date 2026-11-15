"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const ROW_1 = [
  "NEXT.JS",
  "STATISTICAL ARBITRAGE",
  "TYPESCRIPT",
  "AUTONOMOUS AI",
  "TAILWIND CSS",
  "POSTGRESQL",
  "SUPABASE",
  "NUMPY & PANDAS",
  "FASTAPI",
  "C++",
];

const ROW_2 = [
  "QUANTITATIVE FINANCE",
  "PYTHON",
  "EDGE COMPUTING",
  "REACT",
  "REST & GRAPHQL",
  "THREE.JS",
  "WEBGL & GLSL",
  "DOCKER",
  "GIT & GITHUB",
  "PYTORCH",
];

export default function SkillMarquee() {
  const containerRef = useRef<HTMLElement>(null);

  // Track scroll position through the section viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Soft, weighted inertial damping for calm scroll-reactive dynamics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 24,
    restDelta: 0.001,
  });

  // Calm horizontal scroll offsets (±32px) layered smoothly onto the 100s continuous loop
  const row1Nudge = useTransform(smoothProgress, [0, 1], [32, -32]);
  const row2Nudge = useTransform(smoothProgress, [0, 1], [-32, 32]);

  // 6x repetition ensures a seamless -50% translation loop across any viewport width
  const row1Repeated = Array(6).fill(ROW_1).flat();
  const row2Repeated = Array(6).fill(ROW_2).flat();

  return (
    <section
      ref={containerRef}
      className="relative z-10 w-full overflow-hidden border-t border-b border-[#FF5722] shadow-[0_0_24px_-10px_rgba(255,87,34,0.45)] bg-[#111010]/80 backdrop-blur-[2px] py-0 select-none"
    >
      {/* Horizontal Gradient Vignette Mask Across Viewport Edges */}
      <div
        className="w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        {/* Row 1: Forward Marquee Strip (100s linear infinite + subtle scroll nudge) */}
        <motion.div
          style={{ x: row1Nudge }}
          className="group flex w-full overflow-hidden py-5 sm:py-6"
        >
          <div className="animate-ticker flex items-center whitespace-nowrap font-sans font-semibold text-[22px] sm:text-[30px] leading-none tracking-[0.12em] uppercase">
            {row1Repeated.map((skill, idx) => (
              <span key={`r1-${idx}`} className="inline-flex items-center">
                <span
                  className={
                    idx % 2 === 0 ? "text-[#FF5722]" : "text-[#F5F3EF]"
                  }
                >
                  {skill}
                </span>
                <span className="mx-5 sm:mx-7 text-[#8E877E] select-none font-sans leading-none">
                  *
                </span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Row 2: Reverse Marquee Strip (100s linear infinite + subtle scroll nudge) */}
        <motion.div
          style={{ x: row2Nudge }}
          className="group flex w-full overflow-hidden border-t border-white/[0.08] py-5 sm:py-6"
        >
          <div className="animate-ticker-reverse flex items-center whitespace-nowrap font-sans font-semibold text-[22px] sm:text-[30px] leading-none tracking-[0.12em] uppercase">
            {row2Repeated.map((skill, idx) => (
              <span key={`r2-${idx}`} className="inline-flex items-center">
                <span
                  className={
                    idx % 2 === 0 ? "text-[#F5F3EF]" : "text-[#FF5722]"
                  }
                >
                  {skill}
                </span>
                <span className="mx-5 sm:mx-7 text-[#8E877E] select-none font-sans leading-none">
                  *
                </span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
