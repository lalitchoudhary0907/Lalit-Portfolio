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
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/[0.07] bg-[#121110]/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-6 sm:px-10">
        {/* Left Side: Brand Identity */}
        <a
          href="#top"
          className="text-xs sm:text-sm tracking-[0.22em] uppercase text-[#F5F3EF] font-medium hover:text-[#FF5722] transition-colors"
        >
          LALIT CHOUDHARY
        </a>

        {/* Right Side: Editorial Text Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 sm:gap-10 font-mono text-xs tracking-[0.18em] uppercase text-[#9E9890]">
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
          className="flex md:hidden flex-col items-center justify-center gap-1.5 w-8 h-8 text-[#F5F3EF] focus:outline-none"
        >
          <span
            className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
              mobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-5 bg-current transition-transform duration-300 ${
              mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
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
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden border-t border-white/[0.07] bg-[#121110] px-6 py-6"
          >
            <div className="flex flex-col gap-5 font-mono text-xs tracking-[0.18em] uppercase text-[#9E9890]">
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
