"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { SERVICE_CATEGORIES, SERVICE_ICONS } from "@/lib/services-data";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MegaMenu({ isOpen, onClose }: MegaMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-20 z-40"
            onClick={onClose}
          />

          {/* Mega Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 w-full z-50 glass-nav border-t border-primary/20 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8">
              <div className="grid grid-cols-3 gap-8">
                {SERVICE_CATEGORIES.map((category) => (
                  <div key={category.id} className="space-y-4">
                    {/* Category Header */}
                    <div>
                      <h4 className="text-accent-cyan font-bold text-xs tracking-[0.2em] uppercase">
                        {category.title}
                      </h4>
                      <p className="text-metal-gray text-xs mt-1">
                        {category.description}
                      </p>
                    </div>

                    {/* Services List */}
                    <ul className="space-y-1">
                      {category.services.map((service) => {
                        const Icon = SERVICE_ICONS[service.iconName];
                        return (
                          <li key={service.slug}>
                            <Link
                              href={`/solucoes/${service.slug}`}
                              onClick={onClose}
                              className="group flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                            >
                              <div className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-colors">
                                <Icon className="size-4 text-primary group-hover:text-accent-cyan transition-colors" />
                              </div>
                              <div>
                                <span className="text-white text-sm font-medium group-hover:text-primary transition-colors block">
                                  {service.title}
                                </span>
                                <p className="text-metal-gray text-xs mt-0.5 leading-relaxed">
                                  {service.shortDescription}
                                </p>
                              </div>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Footer CTA */}
              <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                <Link
                  href="/solucoes"
                  onClick={onClose}
                  className="text-primary text-sm font-medium hover:text-accent-cyan transition-colors flex items-center gap-2"
                >
                  Ver todas as solucoes
                  <span className="text-lg">→</span>
                </Link>
                <Link
                  href="#contact"
                  onClick={onClose}
                  className="btn-gradient px-5 py-2.5 rounded-lg text-sm font-bold neon-glow-primary hover:opacity-90 transition-all"
                >
                  Fale com um Especialista
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
