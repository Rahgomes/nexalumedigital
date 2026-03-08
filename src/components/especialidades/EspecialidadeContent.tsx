"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Especialidade } from "@/lib/especialidades-data";

interface Props {
  especialidade: Especialidade;
}

export default function EspecialidadeContent({ especialidade }: Props) {
  return (
    <div className="space-y-16">
      {/* Seções de conteúdo */}
      {especialidade.sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            {section.titulo}
          </h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-gray-300 leading-relaxed text-lg">
              {section.conteudo}
            </p>
          </div>
        </motion.div>
      ))}

      {/* Benefícios */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
          Benefícios
        </h2>
        <ul className="grid md:grid-cols-2 gap-5">
          {especialidade.beneficios.map((beneficio, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-start gap-4"
            >
              <div className="size-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="size-4 text-white" />
              </div>
              <span className="text-gray-300 text-lg">{beneficio}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* CTA inline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-600 text-center"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {especialidade.cta.titulo}
        </h3>
        <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">
          {especialidade.cta.texto}
        </p>
        <a
          href="/contato"
          className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold px-10 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
        >
          Solicitar Proposta Gratuita
        </a>
      </motion.div>
    </div>
  );
}
