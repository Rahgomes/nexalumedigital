"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { scrollToContact } from "@/lib/utils";
import { SERVICE_CATEGORIES, SERVICE_ICONS } from "@/lib/services-data";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [solucoesExpanded, setSolucoesExpanded] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden border-t border-white/5"
        >
          <div className="px-4 sm:px-6 py-6 space-y-2 bg-background-dark/95 backdrop-blur-xl max-h-[70vh] overflow-y-auto">
            {/* Solucoes Accordion */}
            <div>
              <button
                onClick={() => setSolucoesExpanded(!solucoesExpanded)}
                className="flex items-center justify-between w-full py-3 text-base font-medium text-white"
              >
                <span>Soluções</span>
                <ChevronDown
                  className={`size-5 text-metal-gray transition-transform duration-200 ${
                    solucoesExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {solucoesExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-4 space-y-4">
                      {SERVICE_CATEGORIES.map((category) => (
                        <div key={category.id} className="pl-2">
                          <span className="text-accent-cyan text-xs font-bold tracking-[0.15em] uppercase block mb-2">
                            {category.title}
                          </span>
                          <ul className="space-y-1">
                            {category.services.map((service) => {
                              const Icon = SERVICE_ICONS[service.iconName];
                              return (
                                <li key={service.slug}>
                                  <Link
                                    href={`/solucoes/${service.slug}`}
                                    onClick={onClose}
                                    className="flex items-center gap-3 py-2 pl-2 text-sm text-metal-gray hover:text-white transition-colors"
                                  >
                                    <Icon className="size-4 text-primary" />
                                    {service.title}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}

                      {/* Ver todas */}
                      <Link
                        href="/solucoes"
                        onClick={onClose}
                        className="block pl-2 py-2 text-sm text-primary font-medium hover:text-accent-cyan transition-colors"
                      >
                        Ver todas as soluções →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Links */}
            <Link
              href="#why"
              onClick={onClose}
              className="block py-3 text-base font-medium text-metal-gray hover:text-white transition-colors"
            >
              Sobre Nós
            </Link>
            <Link
              href="#cases"
              onClick={onClose}
              className="block py-3 text-base font-medium text-metal-gray hover:text-white transition-colors"
            >
              Cases
            </Link>
            <a
              href="#contact"
              onClick={(e) => { scrollToContact(e); onClose(); }}
              className="block py-3 text-base font-medium text-metal-gray hover:text-white transition-colors"
            >
              Contato
            </a>

            {/* CTA Button */}
            <a
              href="#contact"
              onClick={(e) => { scrollToContact(e); onClose(); }}
              className="block w-full btn-gradient px-6 py-3 rounded-lg font-bold text-sm tracking-wide neon-glow-primary hover:opacity-90 transition-all mt-4 text-center"
            >
              Fale com um Especialista
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
