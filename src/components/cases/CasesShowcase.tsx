"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";
import { CASES_EXPANDED } from "@/lib/constants";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

export default function CasesShowcase() {
  return (
    <section className="py-16 md:py-24 bg-surface-dark/30 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          className="mb-10 md:mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading uppercase">
            Nossos Cases
          </h2>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {CASES_EXPANDED.map((caseItem, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.article
                key={caseItem.client}
                variants={staggerItem}
                className="rounded-2xl border border-white/10 bg-surface-dark/50 overflow-hidden"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 ${
                    isReversed ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative aspect-video lg:aspect-auto min-h-[300px] ${
                      isReversed ? "lg:order-2" : ""
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url("${caseItem.imageUrl}")`,
                      }}
                      role="img"
                      aria-label={caseItem.imageAlt}
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-surface-dark/80 to-transparent lg:bg-linear-to-t lg:from-transparent lg:to-transparent" />

                    {/* Metric badge */}
                    <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan text-sm font-black">
                      {caseItem.metric}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`p-8 lg:p-10 flex flex-col justify-center ${
                      isReversed ? "lg:order-1" : ""
                    }`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">
                      {caseItem.client}
                    </h3>

                    {/* Challenge */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="size-5 text-red-400" />
                        <span className="text-sm font-bold text-red-400 uppercase tracking-wider">
                          Desafio
                        </span>
                      </div>
                      <p className="text-metal-gray text-sm leading-relaxed">
                        {caseItem.challenge}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="size-5 text-yellow-400" />
                        <span className="text-sm font-bold text-yellow-400 uppercase tracking-wider">
                          Solução
                        </span>
                      </div>
                      <p className="text-metal-gray text-sm leading-relaxed">
                        {caseItem.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="size-5 text-accent-cyan" />
                        <span className="text-sm font-bold text-accent-cyan uppercase tracking-wider">
                          Resultados
                        </span>
                      </div>
                      <ul className="space-y-1.5">
                        {caseItem.results.map((result) => (
                          <li
                            key={result}
                            className="text-metal-gray text-sm flex items-start gap-2"
                          >
                            <span className="text-accent-cyan mt-1.5 size-1.5 rounded-full bg-accent-cyan shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
