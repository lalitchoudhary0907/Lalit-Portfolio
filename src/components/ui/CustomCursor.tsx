"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const auraRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Only run on fine pointer devices (desktop / trackpad / mouse)
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    const dot = { x: -100, y: -100 };

    let isVisible = false;
    let isHovered = false;
    let isLink = false;
    let currentStretch = 1;
    let currentAngle = 0;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!isVisible) {
        isVisible = true;
        ring.x = mouse.x;
        ring.y = mouse.y;
        dot.x = mouse.x;
        dot.y = mouse.y;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.getAttribute("role") === "button"
          ? target
          : target.closest("a, button, [role='button'], input, textarea, .cursor-pointer, .group")
      ) as HTMLElement | null;

      const interactive = Boolean(interactiveEl);
      const isAnchor = Boolean(interactiveEl && (interactiveEl.tagName === "A" || interactiveEl.closest("a")));

      if (interactive !== isHovered || isAnchor !== isLink) {
        isHovered = interactive;
        isLink = isAnchor;

        if (ringRef.current) {
          const size = isHovered ? (isLink ? "52px" : "48px") : "32px";
          ringRef.current.style.width = size;
          ringRef.current.style.height = size;
          ringRef.current.style.borderColor = isHovered
            ? "rgba(255, 87, 34, 0.85)"
            : "rgba(255, 87, 34, 0.55)";
          ringRef.current.style.backgroundColor = isHovered
            ? "rgba(255, 87, 34, 0.09)"
            : "transparent";
          ringRef.current.style.boxShadow = isHovered
            ? "0 0 24px rgba(255, 87, 34, 0.28), inset 0 0 12px rgba(255, 87, 34, 0.15)"
            : "0 0 8px rgba(255, 87, 34, 0.1)";
        }

        if (auraRef.current) {
          const auraSize = isHovered ? "88px" : "44px";
          auraRef.current.style.width = auraSize;
          auraRef.current.style.height = auraSize;
          auraRef.current.style.opacity = isHovered ? "0.35" : "0.15";
        }

        if (iconRef.current) {
          iconRef.current.style.opacity = isHovered && isLink ? "1" : "0";
          iconRef.current.style.transform = isHovered && isLink ? "scale(1)" : "scale(0.5)";
        }
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
      if (auraRef.current) auraRef.current.style.opacity = "0";
    };

    const onMouseEnter = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
      if (auraRef.current) auraRef.current.style.opacity = isHovered ? "0.35" : "0.15";
    };

    const animate = () => {
      // Fluid spring-lerp for trailing dot (sub-pixel precision)
      dot.x += (mouse.x - dot.x) * 0.42;
      dot.y += (mouse.y - dot.y) * 0.42;

      // Spring-lerp for outer follower ring
      const dx = mouse.x - ring.x;
      const dy = mouse.y - ring.y;
      const speed = Math.hypot(dx, dy);

      ring.x += dx * 0.16;
      ring.y += dy * 0.16;

      // Velocity-based subtle elongation along motion vector
      let targetStretch = 1;
      let targetAngle = currentAngle;

      if (!isHovered && speed > 1.5) {
        // Subtle stretch clamped between 1.0 and 1.35
        targetStretch = Math.min(1 + speed * 0.003, 1.32);
        targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
      }

      // Smooth interpolation for rotation and stretch
      currentStretch += (targetStretch - currentStretch) * 0.2;
      currentAngle += (targetAngle - currentAngle) * 0.2;
      const squeeze = 1 / Math.sqrt(currentStretch);

      if (isVisible) {
        // Inner crisp dot
        if (dotRef.current) {
          dotRef.current.style.opacity = "1";
          dotRef.current.style.transform = `translate3d(${dot.x.toFixed(2)}px, ${dot.y.toFixed(2)}px, 0) translate(-50%, -50%)`;
        }

        // Ambient ember radial aura
        if (auraRef.current) {
          auraRef.current.style.transform = `translate3d(${ring.x.toFixed(2)}px, ${ring.y.toFixed(2)}px, 0) translate(-50%, -50%)`;
        }

        // Outer follower ring with velocity elongation
        if (ringRef.current) {
          ringRef.current.style.opacity = "1";
          const transformStr = isHovered
            ? `translate3d(${ring.x.toFixed(2)}px, ${ring.y.toFixed(2)}px, 0) translate(-50%, -50%)`
            : `translate3d(${ring.x.toFixed(2)}px, ${ring.y.toFixed(2)}px, 0) translate(-50%, -50%) rotate(${currentAngle.toFixed(1)}deg) scale(${currentStretch.toFixed(3)}, ${squeeze.toFixed(3)})`;
          ringRef.current.style.transform = transformStr;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave, { passive: true });
    document.addEventListener("mouseenter", onMouseEnter, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden select-none">
      {/* Soft ambient ember radial aura */}
      <div
        ref={auraRef}
        style={{ width: 44, height: 44 }}
        className="pointer-events-none fixed top-0 left-0 rounded-full bg-[#FF5722] opacity-0 blur-md transition-[width,height,opacity] duration-300 ease-out will-change-transform"
      />

      {/* Outer gliding follower ring with velocity stretch and magnetic hover expansion */}
      <div
        ref={ringRef}
        style={{ width: 32, height: 32 }}
        className="pointer-events-none fixed top-0 left-0 flex items-center justify-center rounded-full border border-[#FF5722]/60 opacity-0 transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out will-change-transform"
      >
        {/* Subtle arrow indicator appearing on link hover */}
        <span
          ref={iconRef}
          className="font-mono text-[11px] font-bold text-[#FF5722] opacity-0 transition-[opacity,transform] duration-200"
        >
          ↗
        </span>
      </div>

      {/* Crisp inner trailing dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-[#FF5722] opacity-0 transition-opacity duration-200 will-change-transform shadow-[0_0_8px_#FF5722]"
      />
    </div>
  );
}
