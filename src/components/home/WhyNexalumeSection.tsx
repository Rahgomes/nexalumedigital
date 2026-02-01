"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { DIFFERENTIALS } from "@/lib/constants";

export default function WhyNexalumeSection() {
  return (
    <section
      id="why"
      className="py-24 bg-surface-dark/30 border-y border-white/5"
      aria-labelledby="why-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.h2
          id="why-heading"
          className="text-center text-3xl md:text-4xl font-black mb-16 text-white font-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Por que a Nexalume?
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {DIFFERENTIALS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="size-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-2">
                  <Icon className="size-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-metal-gray text-sm leading-relaxed max-w-xs">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
