"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";
import { SparklesCore } from "@/components/ui/aceternity/sparkles";
import { CASES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CasesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="cases"
      className="py-16 md:py-24 lg:py-32 bg-background-dark overflow-hidden"
      aria-labelledby="cases-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          className="mb-10 md:mb-16"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <SparklesCore
                particleDensity={30}
                minSize={0.5}
                maxSize={1.5}
                speed={1.5}
                particleColor="#00E5FF"
                className="w-full h-full"
              />
            </div>
            <span className="relative">Sucesso Comprovado</span>
          </div>
          <h2 id="cases-heading" className="text-3xl sm:text-4xl font-black text-white font-heading uppercase">
            Resultados que Falam
          </h2>
        </motion.div>

        {/* Case Cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 md:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {CASES.map((caseItem, index) => (
            <motion.article
              key={caseItem.client}
              variants={staggerItem}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={cn(
                "group relative rounded-2xl overflow-hidden aspect-[16/9] bg-surface-dark border border-white/10 transition-all duration-300 ease-out",
                hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
              )}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40"
                style={{ backgroundImage: `url("${caseItem.imageUrl}")` }}
                role="img"
                aria-label={caseItem.imageAlt}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent" />

              {/* Focus overlay (escurecimento no hover) */}
              <div
                className={cn(
                  "absolute inset-0 bg-black/30 transition-opacity duration-300",
                  hovered === index ? "opacity-100" : "opacity-0"
                )}
              />

              {/* Content */}
              <div className="absolute z-10 bottom-0 left-0 right-0 p-5 sm:p-8">
                <div className="inline-block px-3 py-1 rounded-full bg-accent-cyan/20 border border-accent-cyan/30 text-accent-cyan text-xs font-black mb-3 sm:mb-4">
                  {caseItem.metric}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                  {caseItem.client}
                </h3>
                <p className="text-metal-gray text-sm max-w-sm">
                  {caseItem.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent-cyan transition-colors group"
          >
            Veja todos os resultados
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
