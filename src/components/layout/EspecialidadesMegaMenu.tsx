"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Globe, Code, Bot, TrendingUp } from "lucide-react";
import { ESPECIALIDADES, CATEGORIAS_ESPECIALIDADES } from "@/lib/especialidades-data";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const iconMap = {
  Globe,
  Code,
  Bot,
  TrendingUp,
};

export default function EspecialidadesMegaMenu({ isOpen, onClose }: Props) {
  // Agrupar por categoria
  const categorias = Object.entries(CATEGORIAS_ESPECIALIDADES).map(([key, info]) => ({
    key,
    ...info,
    items: ESPECIALIDADES.filter(e => e.categoria === key),
  }));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 right-0 top-full bg-background-dark/98 backdrop-blur-xl border-t border-b border-white/10 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
            <div className="grid grid-cols-4 gap-8">
              {categorias.map(categoria => {
                const Icon = iconMap[categoria.icone as keyof typeof iconMap];
                return (
                  <div key={categoria.key}>
                    {/* Header da categoria */}
                    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                      <div className="size-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
                        {Icon && <Icon className="size-4 text-cyan-400" />}
                      </div>
                      <span className="text-cyan-400 text-sm font-bold tracking-wide">
                        {categoria.nome}
                      </span>
                    </div>
                    
                    {/* Links - com scroll se muitos items */}
                    <ul className="space-y-1 max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent pr-2">
                      {categoria.items.map(item => (
                        <li key={item.slug}>
                          <Link
                            href={`/especialidades/${item.slug}`}
                            onClick={onClose}
                            className="block py-1.5 text-sm text-gray-400 hover:text-white hover:pl-2 transition-all"
                          >
                            {item.titulo}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
            
            {/* Footer do mega menu */}
            <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
              <p className="text-gray-400 text-sm">
                {ESPECIALIDADES.length} especialidades disponíveis
              </p>
              <Link
                href="/especialidades"
                onClick={onClose}
                className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors"
              >
                Ver todas as especialidades →
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
