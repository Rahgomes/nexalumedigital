"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import EspecialidadesMegaMenu from "./EspecialidadesMegaMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [espMenuOpen, setEspMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const espMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
      if (espMenuTimeoutRef.current) {
        clearTimeout(espMenuTimeoutRef.current);
      }
    };
  }, []);

  // Soluções menu handlers
  const handleMouseEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setEspMenuOpen(false); // Fecha o outro menu
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

  // Especialidades menu handlers
  const handleEspMouseEnter = () => {
    if (espMenuTimeoutRef.current) {
      clearTimeout(espMenuTimeoutRef.current);
    }
    setMegaMenuOpen(false); // Fecha o outro menu
    setEspMenuOpen(true);
  };

  const handleEspMouseLeave = () => {
    espMenuTimeoutRef.current = setTimeout(() => {
      setEspMenuOpen(false);
    }, 150);
  };

  const closeEspMenu = () => {
    setEspMenuOpen(false);
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
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo-nexalume.png"
            alt="Nexalume Digital"
            width={160}
            height={64}
            className="h-10 sm:h-12 w-auto group-hover:opacity-90 transition-opacity"
            priority
          />
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
              Soluções
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${
                  megaMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>

          <Link
            href="/sobre"
            className="text-sm font-medium text-metal-gray hover:text-white transition-colors"
          >
            Sobre Nós
          </Link>
          <Link
            href="/cases"
            className="text-sm font-medium text-metal-gray hover:text-white transition-colors"
          >
            Cases
          </Link>
          {/* Especialidades with Mega Menu */}
          <div
            className="relative"
            onMouseEnter={handleEspMouseEnter}
            onMouseLeave={handleEspMouseLeave}
          >
            <button
              className="flex items-center gap-1 text-sm font-medium text-metal-gray hover:text-white transition-colors"
              onClick={() => setEspMenuOpen(!espMenuOpen)}
              aria-expanded={espMenuOpen}
              aria-haspopup="menu"
            >
              Especialidades
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${
                  espMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
          <Link
            href="/contato"
            className="text-sm font-medium text-metal-gray hover:text-white transition-colors"
          >
            Contato
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contato"
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

      {/* Mega Menu Soluções (Desktop) */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MegaMenu isOpen={megaMenuOpen} onClose={closeMegaMenu} />
      </div>

      {/* Mega Menu Especialidades (Desktop) */}
      <div
        onMouseEnter={handleEspMouseEnter}
        onMouseLeave={handleEspMouseLeave}
      >
        <EspecialidadesMegaMenu isOpen={espMenuOpen} onClose={closeEspMenu} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </nav>
  );
}
