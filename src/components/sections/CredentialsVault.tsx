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
      className={`relative w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#141312] p-6 sm:p-8 flex flex-col items-center justify-between text-center ${
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
        <div
          className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#FF5722]/50 bg-[#FF5722]/10 text-[#FF5722] shadow-[0_0_35px_rgba(255,87,34,0.25)]"
        >
          <Award className="h-10 w-10 animate-pulse" />
          <div
            className="absolute inset-0 rounded-full border border-dashed border-[#FF5722]/60 animate-spin"
            style={{ animationDuration: "16s" }}
          />
        </div>

        <div>
          <span
            className="inline-block rounded-full px-3 py-0.5 text-[10px] font-mono font-bold tracking-wider uppercase bg-[#FF5722]/15 text-[#FF5722] border border-[#FF5722]/30"
          >
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
      <div className="relative z-10 w-full rounded-xl border border-white/[0.08] bg-[#181614] p-3 text-left">
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
        <p className="mt-3 max-w-2xl text-sm sm:text-base text-[#9E9890]">
          Verified institutional recognition in quantitative finance and in-person open-source hackathon engineering. Click any credential to inspect the official certificate.
        </p>
      </div>

      {/* 2-Column Holographic Vault Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {PORTFOLIO_DATA.credentials.map((cred, idx) => {
          return (
            <motion.div
              key={cred.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.15 }}
              onClick={() => setSelectedCert(cred)}
              className="group cursor-pointer relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#181614] p-7 transition-all duration-300 hover:border-white/20 hover:-translate-y-1.5"
            >
              {/* Top Badge & Date */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 font-mono text-xs font-semibold bg-[#FF5722]/15 text-[#FF5722] border border-[#FF5722]/30"
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {cred.badgeText}
                </span>

                <span className="flex items-center gap-1.5 font-mono text-xs text-[#9E9890]">
                  <Calendar className="h-3.5 w-3.5" />
                  {cred.date}
                </span>
              </div>

              {/* Certificate Title & Issuer */}
              <h3 className="mt-5 text-2xl font-bold text-[#F5F3EF] group-hover:text-[#FF5722] transition-colors">
                {cred.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-[#9E9890]">
                {cred.issuer}
              </p>

              {/* Visual Certificate Preview Frame */}
              <div className="mt-5 relative h-56 w-full overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121110] flex items-center justify-center">
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
                  <span className="font-mono text-[11px] text-[#9E9890]">
                    Auth: {cred.authorizedBy}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/10 border border-white/[0.08] px-3 py-1 font-mono text-[11px] text-[#F5F3EF] backdrop-blur-md">
                    <span>Inspect</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </div>

              <p className="mt-4 text-sm text-[#9E9890] leading-relaxed">
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
              className="relative max-w-3xl w-full overflow-hidden rounded-3xl border border-white/[0.08] bg-[#181614] p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                <div>
                  <span className="font-mono text-xs uppercase text-[#FF5722]">
                    OFFICIAL VERIFIED CREDENTIAL
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F3EF]">
                    {selectedCert.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="rounded-full border border-white/[0.08] bg-white/5 p-2 text-[#9E9890] hover:bg-white/10 hover:text-[#F5F3EF]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="my-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#121110] flex items-center justify-center min-h-[340px]">
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

              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#9E9890]">
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
