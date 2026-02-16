"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";
import { DIFFERENTIALS_EXPANDED } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

export default function AboutDifferentials() {
  return (
    <section className="py-16 md:py-24 bg-surface-dark/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="mb-10 md:mb-16 text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading uppercase">
            Nossos Diferenciais
          </h2>
          <p className="mt-4 text-metal-gray text-lg max-w-2xl mx-auto">
            O que nos torna a escolha certa para a transformação digital do seu
            negócio.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {DIFFERENTIALS_EXPANDED.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="relative rounded-2xl border border-white/10 bg-surface-dark/50 p-8 hover:border-primary/30 transition-all duration-300"
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-linear-to-b from-primary to-primary-dark">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>

                {/* Expanded Description */}
                <p className="text-metal-gray leading-relaxed mb-6">
                  {item.expandedDescription}
                </p>

                {/* Details */}
                <ul className="space-y-3">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-accent-cyan shrink-0 mt-0.5" />
                      <span className="text-sm text-metal-gray">{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
