"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "TIME JOURNEY", href: "#journey" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-12 border-b border-white/[0.06] bg-[#121110]/90 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 sm:px-10">
        {/* Left Side: Clean Uppercase Tracked Sans */}
        <a
          href="#top"
          className="text-[11px] sm:text-xs tracking-[0.24em] uppercase text-[#F5F3EF] font-medium hover:text-[#FF5722] transition-colors"
        >
          LALIT CHOUDHARY
        </a>

        {/* Right Side: 4 Clean Uppercase Tracked Links */}
        <nav className="hidden md:flex items-center gap-6 sm:gap-9 font-mono text-[11px] tracking-[0.2em] uppercase text-[#9E9890]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#F5F3EF] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="flex md:hidden flex-col items-center justify-center gap-1 w-7 h-7 text-[#F5F3EF] focus:outline-none"
        >
          <span
            className={`block h-[1.5px] w-4 bg-current transition-transform duration-300 ${
              mobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-4 bg-current transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-4 bg-current transition-transform duration-300 ${
              mobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Slide-Down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden border-b border-white/[0.08] bg-[#121110] px-6 py-4 shadow-xl"
          >
            <div className="flex flex-col gap-4 font-mono text-[11px] tracking-[0.2em] uppercase text-[#9E9890]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-[#F5F3EF] transition-colors py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
