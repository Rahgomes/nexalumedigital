"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CorretoresPromoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background-dark via-orange-950/20 to-background-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Badge */}
          <span className="inline-block px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-400 text-sm font-medium mb-6">
            🏠 Novidade para Corretores
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Corretor, atenda seus clientes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
              24 horas por dia
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Enquanto você descansa, sua IA responde dúvidas, qualifica leads e agenda visitas. 
            Nunca mais perca uma venda por falta de tempo.
          </p>

          {/* Features mini */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              "Respostas em 10 segundos",
              "Conhece todos seus imóveis",
              "Agenda visitas automaticamente",
              "A partir de R$120/mês",
            ].map((feature, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-sm"
              >
                ✓ {feature}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/corretores"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
          >
            Quero saber mais
            <span className="ml-2">→</span>
          </Link>

          <p className="text-slate-500 text-sm mt-4">
            Consultoria gratuita • Sem compromisso
          </p>
        </motion.div>
      </div>
    </section>
  );
}
