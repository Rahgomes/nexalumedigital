"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Code, Bot, TrendingUp, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ESPECIALIDADES, CATEGORIAS_ESPECIALIDADES, Especialidade } from "@/lib/especialidades-data";

interface Props {
  currentSlug: string;
}

const iconMap = {
  Globe,
  Code,
  Bot,
  TrendingUp,
};

export default function EspecialidadeSidebar({ currentSlug }: Props) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>(
    // Expandir a categoria da página atual por padrão
    [ESPECIALIDADES.find(e => e.slug === currentSlug)?.categoria || ""]
  );

  const toggleCategory = (cat: string) => {
    setExpandedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  // Agrupar por categoria
  const categorias = Object.entries(CATEGORIAS_ESPECIALIDADES).map(([key, info]) => ({
    key,
    ...info,
    items: ESPECIALIDADES.filter(e => e.categoria === key),
  }));

  return (
    <div className="lg:sticky lg:top-24 space-y-6">
      {/* CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600"
      >
        <h3 className="text-xl font-bold text-white mb-3">
          Pronto para começar?
        </h3>
        <p className="text-cyan-100 text-sm mb-6">
          Fale com nossos especialistas e receba uma proposta personalizada.
        </p>
        <Link
          href="/contato"
          className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
        >
          Solicitar Proposta
          <ArrowRight className="size-4" />
        </Link>
      </motion.div>

      {/* WhatsApp */}
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        href="https://wa.me/5511981308127?text=Olá! Vi a página de especialidades e gostaria de saber mais."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-700 transition-colors"
      >
        <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Falar no WhatsApp
      </motion.a>

      {/* Menu de navegação por categoria */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 rounded-2xl bg-white/5 border border-white/10"
      >
        <h3 className="text-lg font-semibold text-white mb-4">
          Especialidades
        </h3>
        
        <div className="max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          <div className="space-y-3">
            {categorias.map(categoria => {
              const Icon = iconMap[categoria.icone as keyof typeof iconMap];
              const isExpanded = expandedCategories.includes(categoria.key);
              
              return (
                <div key={categoria.key}>
                  {/* Categoria header */}
                  <button
                    onClick={() => toggleCategory(categoria.key)}
                    className="flex items-center justify-between w-full text-left py-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      {Icon && <Icon className="size-4" />}
                      {categoria.nome}
                    </span>
                    <ChevronDown
                      className={`size-4 transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  
                  {/* Items */}
                  {isExpanded && (
                    <ul className="ml-6 space-y-1 mt-1">
                      {categoria.items.map(item => (
                        <li key={item.slug}>
                          <Link
                            href={`/especialidades/${item.slug}`}
                            className={`block py-1.5 text-sm transition-colors ${
                              item.slug === currentSlug
                                ? "text-white font-medium"
                                : "text-gray-400 hover:text-white"
                            }`}
                          >
                            {item.slug === currentSlug && (
                              <span className="mr-2">→</span>
                            )}
                            {item.titulo}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Ver todas */}
        <Link
          href="/especialidades"
          className="block mt-4 pt-4 border-t border-white/10 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors"
        >
          Ver todas as especialidades →
        </Link>
      </motion.div>
    </div>
  );
}
