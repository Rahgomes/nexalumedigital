"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";
import { AGGREGATE_METRICS } from "@/lib/constants";

export default function CasesMetrics() {
  return (
    <section className="py-16 md:py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="mb-10 md:mb-16 text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading uppercase">
            Impacto em Números
          </h2>
          <p className="mt-4 text-metal-gray text-lg max-w-2xl mx-auto">
            Métricas reais que demonstram o valor das nossas entregas.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {AGGREGATE_METRICS.map((metric) => (
            <motion.div
              key={metric.label}
              variants={staggerItem}
              className="text-center rounded-2xl border border-white/10 bg-surface-dark/50 p-8 hover:border-primary/30 transition-all duration-300"
            >
              <span className="block text-4xl sm:text-5xl font-black text-accent-cyan mb-3">
                {metric.value}
              </span>
              <span className="text-metal-gray text-sm">{metric.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
