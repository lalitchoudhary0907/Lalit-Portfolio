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
  const accentColor = "#FF5722";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-none border border-white/[0.08] bg-[#141312] p-6 sm:p-8 flex flex-col items-center justify-between text-center ${
        isModal ? "min-h-[420px]" : "h-full"
      }`}
    >
      {/* Background Holographic Guilloche Pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`holo-grid-${cred.id}`} width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 40 M 0 0 L 40 40"
              fill="none"
              stroke={accentColor}
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#holo-grid-${cred.id})`} />
        <circle cx="50%" cy="50%" r="140" fill="none" stroke={accentColor} strokeWidth="1" strokeDasharray="4 4" />
        <circle cx="50%" cy="50%" r="90" fill="none" stroke={accentColor} strokeWidth="1" />
      </svg>

      {/* Top Header */}
      <div className="relative z-10 flex w-full items-center justify-between border-b border-white/[0.08] pb-3 text-[11px] font-mono">
        <span className="flex items-center gap-1.5 text-[#FF5722]">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>CRYPTOGRAPHIC VERIFICATION SEAL</span>
        </span>
        <span className="text-[#9E9890]">ID: {cred.id.toUpperCase()}-2026</span>
      </div>

      {/* Center Holographic Seal & Info */}
      <div className="relative z-10 my-4 flex flex-col items-center space-y-3">
        <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#FF5722]/50 bg-[#FF5722]/10 text-[#FF5722] shadow-[0_0_35px_rgba(255,87,34,0.25)]">
          <Award className="h-10 w-10 animate-pulse" />
          <div
            className="absolute inset-0 rounded-full border border-dashed border-[#FF5722]/60 animate-spin"
            style={{ animationDuration: "16s" }}
          />
        </div>

        <div>
          <span className="inline-block rounded-none px-3 py-0.5 text-[10px] font-mono font-bold tracking-wider uppercase bg-[#FF5722]/15 text-[#FF5722] border border-[#FF5722]/30">
            {cred.badgeText}
          </span>
          <h4 className="mt-2 text-xl font-bold text-[#F5F3EF] tracking-tight">
            {cred.title}
          </h4>
          <p className="font-mono text-xs text-[#9E9890]">
            Conferred upon <strong className="text-[#F5F3EF]">Lalit Choudhary</strong>
          </p>
        </div>

        <div className="max-w-md text-xs text-[#9E9890]">
          {cred.description}
        </div>
      </div>

      {/* Bottom Authority Attestation */}
      <div className="relative z-10 w-full rounded-none border border-white/[0.08] bg-[#181614] p-3 text-left">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] font-mono text-[#9E9890]">
          <div>
            <span className="text-[#9E9890]/60">AUTHORIZED BY: </span>
            <span className="text-[#F5F3EF]">{cred.authorizedBy}</span>
          </div>
          <div className="flex items-center gap-1 text-[#FF5722]">
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
      className="relative z-10 mx-auto max-w-6xl px-6 py-28 border-t border-white/[0.08]"
    >
      {/* Section Heading */}
      <div className="mb-14">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#FF5722]">
          <Award className="h-4 w-4" />
          <span>05 / CREDENTIALS VAULT</span>
        </div>
        <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-[#F5F3EF]">
          Credentials & Achievements.
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#9E9890] leading-relaxed">
          Verified institutional recognition in quantitative finance and in-person open-source hackathon engineering. Click any credential to inspect the official certificate.
        </p>
      </div>

      {/* 2-Column Architectural Vault Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {PORTFOLIO_DATA.credentials.map((cred, idx) => {
          return (
            <motion.div
              key={cred.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: idx * 0.15 }}
              onClick={() => setSelectedCert(cred)}
              className="group cursor-pointer relative overflow-hidden rounded-none border border-white/[0.09] bg-[#131210]/90 p-6 sm:p-8 transition-all duration-300 hover:border-[#FF5722]/60 hover:bg-[#151412] shadow-[0_12px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between"
            >
              <div>
                {/* Top Badge, Date & Inspect Trigger */}
                <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] pb-4">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-wider uppercase text-[#FF5722]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    {cred.badgeText}
                  </span>

                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5 font-mono text-[11px] text-[#8E877E]">
                      <Calendar className="h-3 w-3" />
                      {cred.date}
                    </span>
                    <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#9E9890] group-hover:text-[#FF5722] transition-colors">
                      <span>Inspect</span>
                      <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </div>

                {/* Certificate Title & Issuer */}
                <div className="mt-5 mb-5">
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#F5F3EF] group-hover:text-[#FF5722] transition-colors">
                    {cred.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-[#8E877E] uppercase tracking-wider">
                    {cred.issuer}
                  </p>
                </div>

                {/* Dedicated Aspect-[16/10] Certificate Frame — ZERO overlapping text */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/[0.08] bg-[#0E0D0C] flex items-center justify-center rounded-none group/cert shadow-inner">
                  {!imgError[cred.id] ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={cred.certificateImage}
                      alt={cred.title}
                      onError={() =>
                        setImgError((prev) => ({ ...prev, [cred.id]: true }))
                      }
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <HolographicSealCard cred={cred} />
                  )}

                  {/* Subtle interactive hover sheen */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#FF5722]/[0.05] via-transparent to-white/[0.04] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Description */}
                <p className="mt-5 text-xs sm:text-sm text-[#9E9890] leading-relaxed">
                  {cred.description}
                </p>
              </div>

              {/* Structured Metadata Micro-Rows Below (Zero Clipping) */}
              <div className="mt-6 pt-4 border-t border-white/[0.07] flex flex-col gap-2 font-mono text-[11px]">
                <div className="flex items-center justify-between gap-2 text-[#8E877E]">
                  <span className="tracking-wider uppercase text-[10px] shrink-0">AUTHORIZED BY:</span>
                  <span className="text-[#F5F3EF] font-medium truncate text-right">
                    {cred.authorizedBy}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2 text-[#8E877E]">
                  <span className="tracking-wider uppercase text-[10px] shrink-0">STATUS:</span>
                  <span className="flex items-center gap-1.5 text-[#FF5722] font-semibold text-right">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                    <span>VERIFIED ON-RECORD</span>
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Fullscreen Architectural Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full overflow-hidden rounded-none border border-white/[0.12] bg-[#121110] p-6 sm:p-8 shadow-2xl"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#FF5722]">
                    OFFICIAL VERIFIED CREDENTIAL
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3EF]">
                    {selectedCert.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="rounded-none border border-white/[0.10] bg-white/[0.03] p-2 text-[#9E9890] hover:text-[#FF5722] hover:border-[#FF5722]/50 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Modal Certificate View */}
              <div className="my-6 overflow-hidden rounded-none border border-white/[0.08] bg-[#0E0D0C] flex items-center justify-center min-h-[300px] max-h-[65vh]">
                {!imgError[selectedCert.id] ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={selectedCert.certificateImage}
                    alt={selectedCert.title}
                    onError={() =>
                      setImgError((prev) => ({ ...prev, [selectedCert.id]: true }))
                    }
                    className="max-h-[65vh] w-auto max-w-full object-contain rounded-none"
                  />
                ) : (
                  <HolographicSealCard cred={selectedCert} isModal />
                )}
              </div>

              {/* Modal Footer Metadata */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#8E877E] border-t border-white/[0.08] pt-4">
                <span>ISSUER: <strong className="text-[#F5F3EF]">{selectedCert.issuer}</strong></span>
                <span>AUTHORIZED: <strong className="text-[#F5F3EF]">{selectedCert.authorizedBy}</strong></span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
