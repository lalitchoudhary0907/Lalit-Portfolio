"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Calendar, CheckCircle2, ArrowUpRight, ShieldCheck, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

function HolographicSealCard({
  cred,
  isModal = false,
}: {
  cred: (typeof PORTFOLIO_DATA.credentials)[0];
  isModal?: boolean;
}) {
  const isGold = cred.theme === "gold";
  const primaryColor = isGold ? "#F59E0B" : "#00F5D4";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border ${
        isGold ? "border-[#F59E0B]/40 bg-[#0c0905]" : "border-[#00F5D4]/40 bg-[#050b0f]"
      } p-6 sm:p-8 flex flex-col items-center justify-between text-center ${
        isModal ? "min-h-[420px]" : "h-full"
      }`}
    >
      {/* Background Holographic Guilloche Pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-15 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`holo-grid-${cred.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 40 M 0 0 L 40 40"
              fill="none"
              stroke={primaryColor}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#holo-grid-${cred.id})`} />
        <circle cx="50%" cy="50%" r="140" fill="none" stroke={primaryColor} strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="50%" cy="50%" r="90" fill="none" stroke={primaryColor} strokeWidth="1" />
      </svg>

      {/* Top Header */}
      <div className="relative z-10 flex w-full items-center justify-between border-b border-white/10 pb-3 text-[11px] font-mono">
        <span className="flex items-center gap-1.5" style={{ color: primaryColor }}>
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>CRYPTOGRAPHIC VERIFICATION SEAL</span>
        </span>
        <span className="text-slate-400">ID: {cred.id.toUpperCase()}-2026</span>
      </div>

      {/* Center Holographic Seal & Info */}
      <div className="relative z-10 my-4 flex flex-col items-center space-y-3">
        <div
          className="relative flex h-20 w-20 items-center justify-center rounded-full border shadow-2xl"
          style={{
            borderColor: `${primaryColor}80`,
            backgroundColor: `${primaryColor}15`,
            color: primaryColor,
            boxShadow: `0 0 35px ${primaryColor}40`,
          }}
        >
          <Award className="h-10 w-10 animate-pulse" />
          <div
            className="absolute inset-0 rounded-full border border-dashed animate-spin"
            style={{ borderColor: primaryColor, animationDuration: "16s" }}
          />
        </div>

        <div>
          <span
            className="inline-block rounded-full px-3 py-0.5 text-[10px] font-mono font-bold tracking-wider uppercase"
            style={{
              backgroundColor: `${primaryColor}20`,
              color: primaryColor,
              border: `1px solid ${primaryColor}50`,
            }}
          >
            {cred.badgeText}
          </span>
          <h4 className="mt-2 text-xl font-bold text-white tracking-tight">
            {cred.title}
          </h4>
          <p className="font-mono text-xs text-slate-300">
            Conferred upon <strong className="text-white">Lalit Choudhary</strong>
          </p>
        </div>

        <div className="max-w-md text-xs text-slate-400">
          {cred.description}
        </div>
      </div>

      {/* Bottom Authority Attestation */}
      <div className="relative z-10 w-full rounded-xl border border-white/5 bg-black/40 p-3 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
          <div>
            <span className="text-slate-500">AUTHORIZED BY: </span>
            <span className="text-white">{cred.authorizedBy}</span>
          </div>
          <div className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>VERIFIED ON-RECORD</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CredentialsVault() {
  const [selectedCert, setSelectedCert] = useState<
    (typeof PORTFOLIO_DATA.credentials)[0] | null
  >(null);
  const [imgError, setImgError] = useState<Record<string, boolean>>({});

  return (
    <section
      id="credentials"
      className="relative z-10 mx-auto max-w-6xl px-6 py-24"
    >
      {/* Section Heading */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F59E0B]">
          <Award className="h-4 w-4" />
          <span>03 // VERIFIED HONORS & OPEN SOURCE VAULT</span>
        </div>
        <h2 className="mt-2 text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Credentials & Achievements.
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
          Verified institutional recognition in quantitative finance and in-person open-source hackathon engineering. Click any credential to inspect the official certificate.
        </p>
      </div>

      {/* 2-Column Holographic Vault Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {PORTFOLIO_DATA.credentials.map((cred, idx) => {
          const isGold = cred.theme === "gold";
          return (
            <motion.div
              key={cred.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.15 }}
              onClick={() => setSelectedCert(cred)}
              className={`group cursor-pointer relative overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                isGold ? "glass-panel-gold" : "glass-panel"
              }`}
            >
              {/* Top Badge & Date */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 font-mono text-xs font-semibold ${
                    isGold
                      ? "bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/40"
                      : "bg-[#00F5D4]/15 text-[#00F5D4] border border-[#00F5D4]/40"
                  }`}
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {cred.badgeText}
                </span>

                <span className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {cred.date}
                </span>
              </div>

              {/* Certificate Title & Issuer */}
              <h3 className="mt-5 text-2xl font-bold text-white group-hover:text-[#00F5D4] transition-colors">
                {cred.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-slate-300">
                {cred.issuer}
              </p>

              {/* Visual Certificate Preview Frame */}
              <div className="mt-5 relative h-56 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 flex items-center justify-center">
                {!imgError[cred.id] ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={cred.certificateImage}
                    alt={cred.title}
                    onError={() =>
                      setImgError((prev) => ({ ...prev, [cred.id]: true }))
                    }
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <HolographicSealCard cred={cred} />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-between p-4 pointer-events-none">
                  <span className="font-mono text-[11px] text-slate-300">
                    Auth: {cred.authorizedBy}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-md">
                    <span>Inspect</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                {cred.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Fullscreen Holographic Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full overflow-hidden rounded-3xl border border-white/20 bg-[#080a14] p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="font-mono text-xs uppercase text-[#F59E0B]">
                    OFFICIAL VERIFIED CREDENTIAL
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedCert.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="rounded-full border border-white/15 bg-white/5 p-2 text-slate-300 hover:bg-white/15 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="my-6 overflow-hidden rounded-2xl border border-white/10 bg-black/60 flex items-center justify-center min-h-[340px]">
                {!imgError[selectedCert.id] ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={selectedCert.certificateImage}
                    alt={selectedCert.title}
                    onError={() =>
                      setImgError((prev) => ({ ...prev, [selectedCert.id]: true }))
                    }
                    className="max-h-[65vh] w-auto object-contain rounded-xl"
                  />
                ) : (
                  <HolographicSealCard cred={selectedCert} isModal />
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
                <span>ISSUER: {selectedCert.issuer}</span>
                <span>AUTHORIZED BY: {selectedCert.authorizedBy}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}