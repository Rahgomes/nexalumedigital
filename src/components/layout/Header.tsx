"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, Code2, ChevronDown } from "lucide-react";
import Link from "next/link";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll hide/show logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsHidden(false);
      } else if (currentScrollY > lastScrollYRef.current && currentScrollY > 80) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollYRef.current) {
        setIsHidden(false);
      }

      lastScrollYRef.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (megaMenuTimeoutRef.current) {
        clearTimeout(megaMenuTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  const closeMegaMenu = () => {
    setMegaMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 glass-nav transition-transform duration-300"
      style={{ transform: isHidden ? "translateY(-100%)" : "translateY(0)" }}
      role="navigation"
      aria-label="Menu principal"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="size-8 bg-primary rounded-lg flex items-center justify-center neon-glow-primary">
            <Code2 className="size-5 text-white" />
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-tighter text-white">
            NEXA
            <span className="text-primary group-hover:text-accent-cyan transition-colors">
              LUME
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {/* Solucoes with Mega Menu */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-metal-gray hover:text-white transition-colors"
              onClick={() => setMegaMenuOpen(!megaMenuOpen)}
              aria-expanded={megaMenuOpen}
              aria-haspopup="menu"
            >
              Solucoes
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${
                  megaMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <Link
            href="#why"
            className="text-sm font-medium text-metal-gray hover:text-white transition-colors"
          >
            Sobre Nos
          </Link>
          <Link
            href="#cases"
            className="text-sm font-medium text-metal-gray hover:text-white transition-colors"
          >
            Cases
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-metal-gray hover:text-white transition-colors"
          >
            Contato
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="btn-gradient px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide neon-glow-primary hover:opacity-90 transition-all"
          >
            Fale com um Especialista
          </Link>
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

      {/* Mega Menu (Desktop) */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MegaMenu isOpen={megaMenuOpen} onClose={closeMegaMenu} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}
