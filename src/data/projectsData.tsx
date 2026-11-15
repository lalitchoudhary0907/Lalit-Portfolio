import React from "react";
import {
  Shield,
  Music,
  Award,
  Code2,
  GitPullRequest,
} from "lucide-react";

// Inline GitHub SVG logo adhering to critical icon rules
export function GitHubIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
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

export interface ProjectCardData {
  id: string;
  title: string;
  shortTitle?: string;
  category: string;
  filterCategory: "FULL-STACK" | "MOBILE" | "AI & QUANT" | "DESIGN" | "OPEN SOURCE";
  index: string;
  rightLabel?: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: string[];
  liveUrl?: string;
  githubUrl?: string;
  repoUrl?: string;
  previewType: "focusflow" | "corealert" | "overtone" | "worldquant" | "gati-predict" | "genloop" | "hacktoberfest";
}

export const ALL_PROJECTS: ProjectCardData[] = [
  {
    id: "focusflow",
    title: "FocusFlow",
    category: "DEEP WORK & EDGE",
    filterCategory: "FULL-STACK",
    index: "01",
    rightLabel: "01 / DEEP WORK",
    subtitle: "Cognitive Flow-State & Productivity Engine",
    description:
      "A high-performance productivity engine engineered for sustained cognitive flow. Features real-time task telemetry, distraction-free execution states, fluid micro-interactions, and global edge synchronization with sub-100ms state updates.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel Edge"],
    metrics: ["Sub-100ms UI transitions", "45-min optimal pacing", "98.4% flow index score"],
    liveUrl: "https://focus-flow0907.vercel.app/",
    githubUrl: "https://github.com/lalitchoudhary0907/focusflow",
    repoUrl: "https://github.com/lalitchoudhary0907/focusflow",
    previewType: "focusflow",
  },
  {
    id: "corealert",
    title: "CoreAlert SOS",
    category: "MOBILE & SAFETY",
    filterCategory: "MOBILE",
    index: "02",
    rightLabel: "02 / MOBILE",
    subtitle: "Emergency Response & Real-Time Telemetry",
    description:
      "Emergency personal safety mobile platform built with Supabase authentication, real-time live location broadcast, guardian invitation network, and background hardware volume-down trigger for discreet SOS activation.",
    tags: ["Flutter", "Supabase", "Geolocation", "Hardware Triggers", "Edge Realtime"],
    metrics: ["5x Volume tap instant trigger", "Sub-second GPS coordinate sync", "Guardian invite codes"],
    liveUrl: "https://github.com/lalitchoudhary0907/corealert-sos",
    githubUrl: "https://github.com/lalitchoudhary0907/corealert-sos",
    repoUrl: "https://github.com/lalitchoudhary0907/corealert-sos",
    previewType: "corealert",
  },
  {
    id: "overtone",
    title: "Overtone",
    category: "COMMERCE & UI",
    filterCategory: "FULL-STACK",
    index: "03",
    rightLabel: "03 / COMMERCE",
    subtitle: "Global Instrument Commerce & Sound Catalog",
    description:
      "A luxury e-commerce experience curated for handcrafted musical instruments. Incorporates bespoke sound profiles, dynamic acoustic previews, fluid responsive catalog browsing, and instant checkout flows.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Web Audio API", "Interactive UI"],
    metrics: ["432Hz harmonic acoustic player", "Sub-60ms interaction latency", "Global responsive catalog"],
    liveUrl: "https://overtone-instruments.lovable.app",
    githubUrl: "https://github.com/lalitchoudhary0907/overtone",
    repoUrl: "https://github.com/lalitchoudhary0907/overtone",
    previewType: "overtone",
  },
  {
    id: "worldquant-alpha",
    title: "WorldQuant Alpha Engine",
    shortTitle: "WorldQuant Alpha",
    category: "QUANTITATIVE AI",
    filterCategory: "AI & QUANT",
    index: "04",
    rightLabel: "04 / QUANT AI",
    subtitle: "Statistical Arbitrage & Alpha Simulation",
    description:
      "Engineered, simulated, and stress-tested predictive market-neutral quantitative alphas on the institutional WorldQuant BRAIN platform. Achieved prestigious Gold Level status by rigorously balancing Sharpe ratio, statistical Fitness, and low turnover.",
    tags: ["Quantitative Finance", "Alpha Formulation", "Python", "Statistical Modeling", "Risk Optimization"],
    metrics: ["WorldQuant BRAIN Gold Level", "Market-neutral predictive alphas", "Turnover < 15% / Sharpe 2.4+"],
    liveUrl: undefined,
    githubUrl: undefined,
    repoUrl: undefined,
    previewType: "worldquant",
  },
  {
    id: "gati-predict",
    title: "Gati-Predict",
    category: "SIH 2026",
    filterCategory: "AI & QUANT",
    index: "05",
    rightLabel: "SIH 2026",
    subtitle: "AI Multimodal Transit & Railway Predictor",
    description:
      "Predictive transit intelligence and real-time railway telemetry platform engineered for Smart India Hackathon (SIH 2026). Features AI congestion forecasting, dynamic dispatch optimization, and sub-second arrival telemetry.",
    tags: ["AI & ML", "Python", "FastAPI", "Next.js", "SIH 2026", "Telemetry"],
    metrics: ["SIH 2026 Selected Entry", "94.2% ETA accuracy", "Sub-second real-time tracking"],
    liveUrl: "https://github.com/lalitchoudhary0907/gati-predict",
    githubUrl: "https://github.com/lalitchoudhary0907/gati-predict",
    repoUrl: "https://github.com/lalitchoudhary0907/gati-predict",
    previewType: "gati-predict",
  },
  {
    id: "hacktoberfest",
    title: "Hacktoberfest 2026",
    shortTitle: "Hacktoberfest",
    category: "OPEN SOURCE & CLI",
    filterCategory: "OPEN SOURCE",
    index: "06",
    rightLabel: "06 / OPEN SOURCE",
    subtitle: "In-Person Sonipat x Rishihood Hack Day (MidnightCommit)",
    description:
      "In-person hackathon collaboration at Rishihood University, partnering with maintainers on production open-source software, sponsored by DigitalOcean and powered by MLH x DEV.",
    tags: ["Open Source", "Git & GitHub", "Linux CLI", "Full-Stack", "Hackathon"],
    metrics: ["PRs merged on-site", "Maintainer collaboration", "DigitalOcean & MLH network"],
    liveUrl: "https://github.com/lalitchoudhary0907/hacktoberfest-2026",
    githubUrl: "https://github.com/lalitchoudhary0907/hacktoberfest-2026",
    repoUrl: "https://github.com/lalitchoudhary0907/hacktoberfest-2026",
    previewType: "hacktoberfest",
  },
];

// --- Bespoke Card Artworks Matching Project Domains (Full-Card Edge-to-Edge Spread Visuals) ---

export function FocusFlowArtwork() {
  return (
    <div className="relative h-full w-full flex flex-col justify-between p-4 sm:p-5 pb-16 bg-gradient-to-b from-[#181512] via-[#121110] to-[#0D0C0B] overflow-hidden">
      {/* Ambient radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,87,34,0.22),transparent_65%)]" />

      {/* Top micro status bar */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF5722]/15 border border-[#FF5722]/30 px-2.5 py-0.5 text-[9px] font-mono text-[#FF5722]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#FF5722] animate-ping" />
          FLOW ENGINE ACTIVE
        </span>
        <span className="font-mono text-[9px] text-[#9E9890] tracking-wider">v2.4 PROD</span>
      </div>

      {/* Hero Typography & Value Prop */}
      <div className="relative z-10 mt-2">
        <h4 className="text-base sm:text-lg font-bold tracking-tight text-[#F5F3EF] leading-snug">
          Deep focus, <br />
          <span className="text-[#FF5722]">zero friction.</span>
        </h4>
        <p className="text-[10px] sm:text-[11px] text-[#9E9890] mt-0.5 line-clamp-1">
          Cognitive telemetry with sub-100ms edge sync.
        </p>
      </div>

      {/* Rich Full-Width Interactive Session Container */}
      <div className="relative z-10 my-auto rounded-lg border border-white/[0.08] bg-[#141210]/95 p-3 backdrop-blur-md space-y-2">
        <div className="flex items-center justify-between text-[9px] font-mono text-[#9E9890]">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            SPRINT // ARCHITECTURE
          </span>
          <span className="text-[#FF5722] font-semibold">45:00</span>
        </div>

        {/* Progress bar */}
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#FF5722] to-amber-400" />
        </div>

        {/* Task telemetry list */}
        <div className="space-y-1 pt-1 text-[9px] font-mono">
          <div className="flex items-center justify-between text-[#F5F3EF]">
            <span className="truncate">✓ Sub-45ms Edge Cache</span>
            <span className="text-[#FF5722] shrink-0 font-bold">98.4%</span>
          </div>
          <div className="flex items-center justify-between text-[#9E9890]">
            <span className="truncate">● WebGL Canvas Compute</span>
            <span className="text-emerald-400 shrink-0">120 FPS</span>
          </div>
        </div>
      </div>

      {/* Micro metrics footer row */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[9px] text-[#9E9890] pt-1">
        <span>EDGE LATENCY: &lt;45ms</span>
        <span className="text-[#FF5722]">DISTRACTION-FREE</span>
      </div>
    </div>
  );
}

export function CoreAlertArtwork() {
  return (
    <div className="relative h-full w-full flex flex-col justify-between p-4 sm:p-5 pb-16 bg-gradient-to-b from-[#191111] via-[#130E0E] to-[#0D0B0B] overflow-hidden">
      {/* Ambient crimson glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.20),transparent_65%)]" />

      {/* Top status */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 border border-red-500/30 px-2.5 py-0.5 text-[9px] font-mono text-red-400">
          <Shield className="h-2.5 w-2.5 text-red-400" />
          SOS ARMED
        </span>
        <span className="font-mono text-[9px] text-[#9E9890]">DISCREET</span>
      </div>

      {/* Hero Typography */}
      <div className="relative z-10 mt-2">
        <h4 className="text-base sm:text-lg font-bold tracking-tight text-[#F5F3EF] leading-snug">
          Emergency response <br />
          <span className="text-red-400">in seconds.</span>
        </h4>
        <p className="text-[10px] sm:text-[11px] text-[#9E9890] mt-0.5 line-clamp-1">
          Background volume triggers instant guardian sync.
        </p>
      </div>

      {/* Radar Map & Guardian Sync Block */}
      <div className="relative z-10 my-auto rounded-lg border border-red-500/20 bg-[#160E0E]/95 p-3 space-y-2">
        <div className="flex items-center justify-between text-[9px] font-mono">
          <div className="flex items-center gap-2">
            <div className="relative flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3 w-3 rounded-full bg-red-500/40 animate-ping" />
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            </div>
            <span className="text-[#F5F3EF] font-bold">28.4595° N, 77.0266° E</span>
          </div>
          <span className="text-emerald-400">GPS ACCURATE (±2m)</span>
        </div>

        {/* Guardian Telemetry items */}
        <div className="space-y-1 pt-1 text-[9px] font-mono">
          <div className="flex items-center justify-between text-[#F5F3EF] bg-white/[0.04] px-2 py-1 rounded">
            <span>Guardian 01 (Mom)</span>
            <span className="text-emerald-400 font-bold">LIVE SYNCED</span>
          </div>
          <div className="flex items-center justify-between text-[#9E9890] px-2 py-0.5">
            <span>Guardian 02 (Brother)</span>
            <span className="text-[#E5B85C]">NOTIFIED</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[9px] text-[#9E9890] pt-1">
        <span>TRIGGER: 5x VOL TAP</span>
        <span className="text-red-400">SUPABASE REALTIME</span>
      </div>
    </div>
  );
}

export function OvertoneArtwork() {
  return (
    <div className="relative h-full w-full flex flex-col justify-between p-4 sm:p-5 pb-16 bg-gradient-to-b from-[#181410] via-[#120F0C] to-[#0D0B09] overflow-hidden">
      {/* Ambient amber resonance glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,183,77,0.18),transparent_65%)]" />

      {/* Top status */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 px-2.5 py-0.5 text-[9px] font-mono text-amber-300">
          <Music className="h-2.5 w-2.5 text-amber-300" />
          OVERTONE LABS
        </span>
        <span className="font-mono text-[9px] text-[#9E9890]">432Hz</span>
      </div>

      {/* Hero Typography */}
      <div className="relative z-10 mt-2">
        <h4 className="text-base sm:text-lg font-bold tracking-tight text-[#F5F3EF] leading-snug">
          Handcrafted resonance <br />
          <span className="text-amber-400">for artists.</span>
        </h4>
        <p className="text-[10px] sm:text-[11px] text-[#9E9890] mt-0.5 line-clamp-1">
          Bespoke instruments with lossless acoustic preview.
        </p>
      </div>

      {/* Audio Waveform & Instrument Showcase */}
      <div className="relative z-10 my-auto rounded-lg border border-amber-500/20 bg-[#16120D]/95 p-3 space-y-2">
        {/* Full-width waveform bars */}
        <div className="flex items-end justify-between gap-1 h-10 px-1">
          {[25, 45, 65, 30, 55, 80, 50, 70, 40, 60, 85, 45, 75, 95, 60, 40, 70, 30].map((h, i) => (
            <div
              key={i}
              style={{ height: `${h}%` }}
              className="flex-1 rounded-full bg-gradient-to-t from-amber-600/40 to-[#FF5722]"
            />
          ))}
        </div>

        {/* Selected Instrument */}
        <div className="flex items-center justify-between pt-1 border-t border-white/[0.08] text-[9px] font-mono">
          <div>
            <div className="text-[#F5F3EF] font-bold">Solid Walnut Dreadnought</div>
            <div className="text-[#9E9890] text-[8px]">Master Grade Cedar Top</div>
          </div>
          <span className="text-amber-400 font-semibold">₹1,45,000</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[9px] text-[#9E9890] pt-1">
        <span>LOSSLESS WEB AUDIO</span>
        <span className="text-amber-400">LOVABLE EDGE</span>
      </div>
    </div>
  );
}

export function WorldQuantArtwork() {
  return (
    <div className="relative h-full w-full flex flex-col justify-between p-4 sm:p-5 pb-16 bg-gradient-to-b from-[#181310] via-[#120E0C] to-[#0D0A08] overflow-hidden">
      {/* Ambient financial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,87,34,0.22),transparent_65%)]" />

      {/* Top status */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FF5722]/15 border border-[#FF5722]/30 px-2.5 py-0.5 text-[9px] font-mono text-[#FF5722]">
          <Award className="h-2.5 w-2.5 text-[#FF5722]" />
          GOLD MEDALIST
        </span>
        <span className="font-mono text-[9px] text-[#9E9890]">BRAIN ALPHAS</span>
      </div>

      {/* Hero Typography */}
      <div className="relative z-10 mt-2">
        <h4 className="text-base sm:text-lg font-bold tracking-tight text-[#F5F3EF] leading-snug">
          Market-neutral alphas <br />
          <span className="text-[#FF5722]">at scale.</span>
        </h4>
        <p className="text-[10px] sm:text-[11px] text-[#9E9890] mt-0.5 line-clamp-1">
          High-fitness statistical arbitrage & predictive modeling.
        </p>
      </div>

      {/* Terminal UI & Equity Curve Chart */}
      <div className="relative z-10 my-auto rounded-lg border border-white/[0.08] bg-[#14100E]/95 p-3 space-y-2">
        {/* Full-width equity curve svg */}
        <div className="relative h-12 w-full">
          <svg viewBox="0 0 200 50" className="h-full w-full overflow-visible">
            <defs>
              <linearGradient id="wq-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FF5722" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FF5722" stopOpacity="0.0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 42 Q 30 38, 60 32 T 110 20 T 160 10 L 200 4 L 200 50 L 0 50 Z"
              fill="url(#wq-grad)"
            />
            <path
              d="M 0 42 Q 30 38, 60 32 T 110 20 T 160 10 L 200 4"
              fill="none"
              stroke="#FF5722"
              strokeWidth="2"
            />
            <circle cx="200" cy="4" r="2.5" fill="#FF5722" />
          </svg>
        </div>

        {/* Quant metric matrix */}
        <div className="grid grid-cols-2 gap-1.5 pt-1 border-t border-white/[0.08] text-[9px] font-mono">
          <div className="flex justify-between">
            <span className="text-[#9E9890]">SHARPE:</span>
            <span className="text-[#FF5722] font-bold">2.41</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#9E9890]">FITNESS:</span>
            <span className="text-emerald-400 font-bold">2.18</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#9E9890]">TURNOVER:</span>
            <span className="text-[#F5F3EF]">&lt;15%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#9E9890]">STATUS:</span>
            <span className="text-[#FF5722]">PROD</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[9px] text-[#9E9890] pt-1">
        <span>WORLDQUANT BRAIN</span>
        <span className="text-[#FF5722]">GOLD TIER</span>
      </div>
    </div>
  );
}

export function GatiPredictArtwork() {
  return (
    <div className="relative h-full w-full flex flex-col justify-between p-4 sm:p-5 pb-16 bg-gradient-to-b from-[#181610] via-[#13110C] to-[#0D0B08] overflow-hidden">
      {/* Ambient transit glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(229,184,92,0.20),transparent_65%)]" />

      {/* Top status */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E5B85C]/15 border border-[#E5B85C]/30 px-2.5 py-0.5 text-[9px] font-mono text-[#E5B85C]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E5B85C] animate-ping" />
          SIH 2026
        </span>
        <span className="font-mono text-[9px] text-[#9E9890]">SMART TRANSIT</span>
      </div>

      {/* Hero Typography */}
      <div className="relative z-10 mt-2">
        <h4 className="text-base sm:text-lg font-bold tracking-tight text-[#F5F3EF] leading-snug">
          Predictive transit <br />
          <span className="text-[#E5B85C]">intelligence.</span>
        </h4>
        <p className="text-[10px] sm:text-[11px] text-[#9E9890] mt-0.5 line-clamp-1">
          AI congestion forecasting & dynamic railway dispatch.
        </p>
      </div>

      {/* Transit Dispatch Dashboard */}
      <div className="relative z-10 my-auto rounded-lg border border-[#E5B85C]/20 bg-[#15120C]/95 p-3 space-y-2 font-mono text-[9px]">
        <div className="flex items-center justify-between">
          <span className="text-[#E5B85C] font-bold">CORRIDOR // DL-09</span>
          <span className="text-emerald-400 font-semibold">94.2% ACCURACY</span>
        </div>

        {/* Station hops graphic */}
        <div className="flex items-center justify-between text-[#9E9890] py-1 border-y border-white/[0.08]">
          <span className="text-[#F5F3EF] font-bold">NDLS</span>
          <span className="h-0.5 flex-1 bg-gradient-to-r from-[#E5B85C] to-emerald-400 mx-2" />
          <span className="text-[#E5B85C]">CNB</span>
          <span className="h-0.5 flex-1 bg-white/10 mx-2" />
          <span>DDU</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[#9E9890]">ETA PREDICTION:</span>
          <span className="text-[#F5F3EF] font-bold">14:32 MIN</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[9px] text-[#9E9890] pt-1">
        <span>SUB-SECOND EDGE TELEMETRY</span>
        <span className="text-[#E5B85C]">SIH 2026</span>
      </div>
    </div>
  );
}

// Retain GenloopArtwork as alias for backwards compatibility
export const GenloopArtwork = GatiPredictArtwork;

export function HacktoberfestArtwork() {
  return (
    <div className="relative h-full w-full flex flex-col justify-between p-4 sm:p-5 pb-16 bg-gradient-to-b from-[#10141A] via-[#0C1015] to-[#090C10] overflow-hidden">
      {/* Ambient developer glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.20),transparent_65%)]" />

      {/* Top status */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 px-2.5 py-0.5 text-[9px] font-mono text-blue-400">
          <GitPullRequest className="h-2.5 w-2.5 text-blue-400" />
          HACKTOBERFEST
        </span>
        <span className="font-mono text-[9px] text-[#9E9890]">SONIPAT</span>
      </div>

      {/* Hero Typography */}
      <div className="relative z-10 mt-2">
        <h4 className="text-base sm:text-lg font-bold tracking-tight text-[#F5F3EF] leading-snug">
          Code shipped live <br />
          <span className="text-blue-400">with maintainers.</span>
        </h4>
        <p className="text-[10px] sm:text-[11px] text-[#9E9890] mt-0.5 line-clamp-1">
          Open-source hackathon with DigitalOcean x MLH.
        </p>
      </div>

      {/* Terminal UI snippet */}
      <div className="relative z-10 my-auto rounded-lg border border-blue-500/20 bg-[#0C1017]/95 p-3 space-y-1 font-mono text-[9px]">
        <div className="flex items-center gap-1.5 text-white/30 text-[8px] pb-1 border-b border-white/[0.08]">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
          <span className="ml-1 text-[#9E9890]">bash — 80x24</span>
        </div>
        <div className="text-white/40 pt-1">$ git push origin feat/latency-opt</div>
        <div className="text-emerald-400 font-semibold">✓ PR #42 merged into main</div>
        <div className="text-[#9E9890] text-[8px]">DigitalOcean x MLH x DEV</div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between font-mono text-[9px] text-[#9E9890] pt-1">
        <span>RISHIHOOD UNIVERSITY</span>
        <span className="text-blue-400">OCT 2026</span>
      </div>
    </div>
  );
}
