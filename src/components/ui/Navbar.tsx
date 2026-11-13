"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Terminal, ArrowUpRight, Volume2, VolumeX } from "lucide-react";

export default function Navbar() {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Initialize or resume native AudioContext safely on user interaction
  const getAudioContext = () => {
    if (typeof window === "undefined") return null;
    if (!audioCtxRef.current) {
      const AudioCtxClass =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      if (AudioCtxClass) {
        audioCtxRef.current = new AudioCtxClass();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
    return audioCtxRef.current;
  };

  // Ultra-subtle pleasant high-tech tick: 880Hz sine for 18ms at low gain 0.025
  const playHoverTick = () => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(880, ctx.currentTime);

      gain.gain.setValueAtTime(0.025, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.018);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.02);
    } catch {
      // Graceful fallback if audio is blocked
    }
  };

  // Soft harmonic chime for clicks: dual tones 587.3Hz (D5) & 880Hz (A5)
  const playClickChime = () => {
    try {
      const ctx = getAudioContext();
      if (!ctx) return;
      const tones = [587.33, 880];

      tones.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = "triangle";
        const startTime = ctx.currentTime + idx * 0.035;
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.035, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.16);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.17);
      });
    } catch {
      // Graceful fallback
    }
  };

  // Global event delegation for interactive elements when sound is enabled
  useEffect(() => {
    if (!soundEnabled) return;

    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [role='button'], input, select"
      );
      if (target) {
        playHoverTick();
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "a, button, [role='button']"
      );
      if (target) {
        playClickChime();
      }
    };

    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("click", handleClick, { passive: true });

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundEnabled]);

  const toggleSound = () => {
    const nextState = !soundEnabled;
    setSoundEnabled(nextState);
    if (nextState) {
      getAudioContext();
      // Play brief startup confirmation chime
      setTimeout(() => playClickChime(), 50);
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-5 left-0 right-0 z-50 mx-auto max-w-5xl px-4"
    >
      <nav className="glass-panel flex items-center justify-between rounded-full px-5 py-3">
        {/* Brand Identity */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00F5D4]/15 border border-[#00F5D4]/40 text-[#00F5D4] font-mono text-sm font-bold group-hover:bg-[#00F5D4] group-hover:text-black transition-all">
            LC
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white">
              Lalit Choudhary
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#00F5D4]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00F5D4] animate-pulse" />
              QUANT & FULL-STACK
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-wider text-slate-300">
          <a href="#about" className="hover:text-[#00F5D4] transition-colors">
            01. Telemetry
          </a>
          <a href="#projects" className="hover:text-[#00F5D4] transition-colors">
            02. FocusFlow & Work
          </a>
          <a
            href="#credentials"
            className="hover:text-[#F59E0B] transition-colors flex items-center gap-1"
          >
            <Sparkles className="h-3 w-3 text-[#F59E0B]" />
            03. WorldQuant & Vault
          </a>
          <a href="#skills" className="hover:text-[#00F5D4] transition-colors">
            04. Stack
          </a>
        </div>

        {/* Action Controls: Sound Toggle & Live App Link */}
        <div className="flex items-center gap-2.5">
          {/* Subtle Sci-Fi Web Audio Toggle */}
          <button
            onClick={toggleSound}
            aria-label={soundEnabled ? "Mute UI Audio" : "Enable UI Audio"}
            className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-mono transition-all ${
              soundEnabled
                ? "border-[#00F5D4]/50 bg-[#00F5D4]/15 text-[#00F5D4] shadow-[0_0_15px_rgba(0,245,212,0.3)]"
                : "border-white/10 bg-white/5 text-slate-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {soundEnabled ? (
              <>
                <Volume2 className="h-3.5 w-3.5" />
                <span className="hidden sm:inline text-[11px]">SFX ON</span>
              </>
            ) : (
              <>
                <VolumeX className="h-3.5 w-3.5" />
                <span className="hidden sm:inline text-[11px]">SFX OFF</span>
              </>
            )}
          </button>

          {/* FocusFlow Live Sandbox External Link */}
          <a
            href="https://focus-flow0907.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-[#00F5D4]/10 border border-[#00F5D4]/40 px-3.5 py-1.5 text-xs font-mono font-medium text-[#00F5D4] hover:bg-[#00F5D4] hover:text-slate-950 transition-all"
          >
            <Terminal className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">FocusFlow Live</span>
            <span className="sm:hidden">Live</span>
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </nav>
    </motion.header>
  );
}