"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: mouse.x, y: mouse.y };
    let isHovered = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      // Instant zero-latency update for inner dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
        dotRef.current.style.opacity = "1";
      }
      if (ringRef.current) {
        ringRef.current.style.opacity = "1";
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        Boolean(target.closest("a")) ||
        Boolean(target.closest("button"));

      if (interactive !== isHovered) {
        isHovered = interactive;
        if (ringRef.current) {
          ringRef.current.style.width = isHovered ? "54px" : "34px";
          ringRef.current.style.height = isHovered ? "54px" : "34px";
          ringRef.current.style.backgroundColor = isHovered
            ? "rgba(0, 245, 212, 0.12)"
            : "transparent";
          ringRef.current.style.borderColor = isHovered
            ? "rgba(0, 245, 212, 0.9)"
            : "rgba(0, 245, 212, 0.38)";
        }
      }
    };

    const animate = () => {
      // Silky 120Hz interpolation for the outer ring
      ring.x += (mouse.x - ring.x) * 0.18;
      ring.y += (mouse.y - ring.y) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x.toFixed(2)}px, ${ring.y.toFixed(2)}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[999] h-2 w-2 rounded-full bg-[#00F5D4] opacity-0 will-change-transform"
      />
      <div
        ref={ringRef}
        style={{ width: 34, height: 34 }}
        className="pointer-events-none fixed top-0 left-0 z-[998] rounded-full border border-[#00F5D4]/40 opacity-0 transition-[width,height,background-color,border-color] duration-150 ease-out will-change-transform"
      />
    </>
  );
}