"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import DiagnosticFormDialog from "@/components/ui/DiagnosticFormDialog";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass-nav" role="navigation" aria-label="Menu principal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center neon-glow-primary">
            <Code2 className="size-5 text-white" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white">
            NEXA<span className="text-primary group-hover:text-accent-cyan transition-colors">LUME</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-metal-gray hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <DiagnosticFormDialog
            trigger={
              <button className="btn-gradient px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide neon-glow-primary hover:opacity-90 transition-all cursor-pointer">
                Diagnostico Gratuito
              </button>
            }
          />
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden size-10 flex items-center justify-center text-white cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/5"
          >
            <div className="px-6 py-6 space-y-4 bg-background-dark/95 backdrop-blur-xl">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-base font-medium text-metal-gray hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <DiagnosticFormDialog
                trigger={
                  <button className="w-full btn-gradient px-6 py-3 rounded-lg font-bold text-sm tracking-wide neon-glow-primary hover:opacity-90 transition-all mt-2 cursor-pointer">
                    Diagnostico Gratuito
                  </button>
                }
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
