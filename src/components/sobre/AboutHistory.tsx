"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";
import { COMPANY_TIMELINE } from "@/lib/constants";

export default function AboutHistory() {
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
            Nossa Jornada
          </h2>
          <p className="mt-4 text-metal-gray text-lg max-w-2xl mx-auto">
            Da ideia à referência em transformação digital — cada passo conta
            uma história de inovação.
          </p>
        </motion.div>

        <motion.div
          className="relative max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-px" />

          {COMPANY_TIMELINE.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={milestone.year}
                variants={staggerItem}
                className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Year dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 size-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10">
                  <span className="text-xs font-bold text-white">
                    {milestone.year}
                  </span>
                </div>

                {/* Spacer for mobile */}
                <div className="w-12 shrink-0 md:hidden" />

                {/* Content card */}
                <div
                  className={`flex-1 md:w-[calc(50%-2rem)] rounded-2xl border border-white/10 bg-surface-dark/50 p-6 ${
                    isEven
                      ? "md:mr-auto md:pr-8 ml-4 md:ml-0"
                      : "md:ml-auto md:pl-8 ml-4 md:ml-0"
                  }`}
                >
                  <h3 className="text-lg font-bold text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-metal-gray text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
