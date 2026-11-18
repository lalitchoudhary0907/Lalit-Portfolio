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
    <header className="fixed top-0 left-0 right-0 z-50 w-full h-16 px-8 sm:px-12 flex items-center justify-between bg-[#111010]/90 backdrop-blur-md border-b border-white/[0.07]">
      {/* Left Corner: Clean Uppercase Tracked Sans */}
      <a
        href="#top"
        className="text-xs tracking-[0.24em] uppercase text-[#F5F3EF] font-medium hover:text-accent transition-colors shrink-0"
      >
        LALIT CHOUDHARY
      </a>

      {/* Right Corner: Clean Uppercase Tracked Links */}
      <nav className="hidden md:flex items-center gap-8 sm:gap-12 font-mono text-xs tracking-[0.2em] uppercase text-[#9E9890] shrink-0">
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

      {/* Mobile Slide-Down Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute top-16 left-0 right-0 border-b border-white/[0.08] bg-[#111010] px-8 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-5 font-mono text-xs tracking-[0.2em] uppercase text-[#9E9890]">
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
