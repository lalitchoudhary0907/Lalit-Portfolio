"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isEnabled, setIsEnabled] = useState(false);
  const auraRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Only activate on fine-pointer desktop devices with hover support
    if (
      typeof window === "undefined" ||
      !window.matchMedia("(pointer: fine) and (hover: hover)").matches
    ) {
      return;
    }

    setIsEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const mouse = { x: -100, y: -100 };
    const ring = { x: -100, y: -100 };
    const dot = { x: -100, y: -100 };

    let isVisible = false;
    let isHovered = false;
    let isLink = false;
    let isPressed = false;
    let currentStretch = 1;
    let currentAngle = 0;
    let rafId: number;

    const showCursor = () => {
      isVisible = true;
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
      if (auraRef.current) {
        auraRef.current.style.opacity = isHovered ? "0.25" : "0.10";
      }
      if (iconRef.current) {
        iconRef.current.style.opacity = isHovered && isLink ? "1" : "0";
      }
    };

    const hideCursor = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
      if (auraRef.current) auraRef.current.style.opacity = "0";
      if (iconRef.current) iconRef.current.style.opacity = "0";
    };

    const updateRingStyles = () => {
      if (ringRef.current) {
        const size = isHovered ? (isLink ? "52px" : "48px") : "32px";
        ringRef.current.style.width = size;
        ringRef.current.style.height = size;
        ringRef.current.style.borderColor = isPressed
          ? "rgba(198, 255, 0, 1)"
          : isHovered
            ? "rgba(198, 255, 0, 0.85)"
            : "rgba(198, 255, 0, 0.55)";
        ringRef.current.style.backgroundColor = isHovered
          ? "rgba(198, 255, 0, 0.08)"
          : "transparent";
        ringRef.current.style.boxShadow = isHovered
          ? "0 0 20px rgba(198, 255, 0, 0.22), inset 0 0 10px rgba(198, 255, 0, 0.12)"
          : "0 0 6px rgba(198, 255, 0, 0.10)";
      }

      if (auraRef.current) {
        const auraSize = isHovered ? "88px" : "44px";
        auraRef.current.style.width = auraSize;
        auraRef.current.style.height = auraSize;
        if (isVisible) {
          auraRef.current.style.opacity = isHovered ? "0.25" : "0.10";
        }
      }

      if (iconRef.current) {
        iconRef.current.style.opacity = isHovered && isLink ? "1" : "0";
        iconRef.current.style.transform = isHovered && isLink ? "scale(1)" : "scale(0.5)";
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      // Disregard touch input
      if (e.pointerType === "touch") {
        hideCursor();
        return;
      }

      // Hide cleanly when pointer hits window boundary
      if (
        e.clientX <= 0 ||
        e.clientY <= 0 ||
        e.clientX >= window.innerWidth ||
        e.clientY >= window.innerHeight
      ) {
        hideCursor();
        return;
      }

      const isFirstMove = !isVisible;
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (isFirstMove) {
        // Prevent offscreen flying trajectory on first entry
        ring.x = mouse.x;
        ring.y = mouse.y;
        dot.x = mouse.x;
        dot.y = mouse.y;
      }

      showCursor();
    };

    const onPointerOver = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-pointer, .cursor-grab, .cursor-grabbing, [data-cursor='pointer']"
      ) as HTMLElement | null;

      const interactive = Boolean(interactiveEl);
      const anchor = (
        interactiveEl?.tagName === "A" ? interactiveEl : interactiveEl?.closest("a")
      ) as HTMLAnchorElement | null;
      const isAnchor = Boolean(anchor);
      const isExternalOrNav = Boolean(
        anchor &&
          (anchor.target === "_blank" ||
            anchor.getAttribute("href")?.startsWith("http") ||
            anchor.getAttribute("href")?.startsWith("/"))
      );

      if (interactive !== isHovered || isAnchor !== isLink) {
        isHovered = interactive;
        isLink = isExternalOrNav;
        updateRingStyles();
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      isPressed = true;
      updateRingStyles();
    };

    const onPointerUp = () => {
      isPressed = false;
      updateRingStyles();
    };

    const onPointerEnter = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      if (
        e.clientX > 0 &&
        e.clientY > 0 &&
        e.clientX < window.innerWidth &&
        e.clientY < window.innerHeight
      ) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
      showCursor();
    };

    const onPointerLeave = () => {
      hideCursor();
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        hideCursor();
      }
    };

    const animate = () => {
      // Immediate precision response for inner aiming dot
      dot.x += (mouse.x - dot.x) * 0.85;
      dot.y += (mouse.y - dot.y) * 0.85;

      // Elastic spring-lerp for outer follower ring
      const dx = mouse.x - ring.x;
      const dy = mouse.y - ring.y;
      const speed = Math.hypot(dx, dy);

      ring.x += dx * 0.18;
      ring.y += dy * 0.18;

      // Velocity elongation along motion vector
      let targetStretch = 1;
      let targetAngle = currentAngle;

      if (!isHovered && speed > 1.5) {
        targetStretch = Math.min(1 + speed * 0.003, 1.32);
        targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
      }

      currentStretch += (targetStretch - currentStretch) * 0.2;
      currentAngle += (targetAngle - currentAngle) * 0.2;
      const squeeze = 1 / Math.sqrt(currentStretch);
      const pressScale = isPressed ? 0.84 : 1;

      if (isVisible) {
        // Inner crisp dot
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${dot.x.toFixed(2)}px, ${dot.y.toFixed(2)}px, 0) translate(-50%, -50%)`;
        }

        // Soft ambient lime radial aura
        if (auraRef.current) {
          auraRef.current.style.transform = `translate3d(${ring.x.toFixed(2)}px, ${ring.y.toFixed(2)}px, 0) translate(-50%, -50%)`;
        }

        // Outer follower ring with velocity stretch and tactile click feedback
        if (ringRef.current) {
          const transformStr = isHovered
            ? `translate3d(${ring.x.toFixed(2)}px, ${ring.y.toFixed(2)}px, 0) translate(-50%, -50%) scale(${pressScale})`
            : `translate3d(${ring.x.toFixed(2)}px, ${ring.y.toFixed(2)}px, 0) translate(-50%, -50%) rotate(${currentAngle.toFixed(1)}deg) scale(${(currentStretch * pressScale).toFixed(3)}, ${(squeeze * pressScale).toFixed(3)})`;
          ringRef.current.style.transform = transformStr;
        }
      }

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerover", onPointerOver, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerUp, { passive: true });
    document.documentElement.addEventListener("pointerenter", onPointerEnter, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave, { passive: true });
    window.addEventListener("blur", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);

    rafId = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      document.documentElement.removeEventListener("pointerenter", onPointerEnter);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("mouseleave", onPointerLeave);
      window.removeEventListener("blur", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!isEnabled) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none"
    >
      {/* Soft ambient lime radial aura */}
      <div
        ref={auraRef}
        style={{ width: 44, height: 44 }}
        className="pointer-events-none fixed top-0 left-0 rounded-full bg-accent opacity-0 blur-md transition-[width,height,opacity] duration-300 ease-out will-change-transform"
      />

      {/* Outer gliding follower ring with velocity stretch and magnetic hover expansion */}
      <div
        ref={ringRef}
        style={{ width: 32, height: 32 }}
        className="pointer-events-none fixed top-0 left-0 flex items-center justify-center rounded-full border border-accent/60 opacity-0 transition-[width,height,background-color,border-color,box-shadow] duration-200 ease-out will-change-transform"
      >
        {/* Subtle arrow indicator appearing on link hover */}
        <span
          ref={iconRef}
          className="font-mono text-[11px] font-bold text-accent opacity-0 transition-[opacity,transform] duration-200"
        >
          ↗
        </span>
      </div>

      {/* Crisp inner trailing dot (immediate sub-pixel aiming point) */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-accent opacity-0 transition-opacity duration-150 will-change-transform shadow-[0_0_8px_#C6FF00]"
      />
    </div>
  );
}
