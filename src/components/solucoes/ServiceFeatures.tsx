"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { SparklesCore } from "@/components/ui/aceternity/sparkles";
import type { ServiceDetail } from "@/lib/types";

interface ServiceFeaturesProps {
  service: ServiceDetail;
}

export default function ServiceFeatures({ service }: ServiceFeaturesProps) {
  return (
    <section className="py-16 lg:py-24 bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="mb-12">
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
              <span className="relative">O que oferecemos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading uppercase">
              Recursos e Funcionalidades
            </h2>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature}
                variants={staggerItem}
                className="flex items-start gap-4 p-6 rounded-xl bg-background-dark border border-white/5 hover:border-primary/20 transition-colors"
              >
                <div className="size-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center shrink-0">
                  <Check className="size-4 text-accent-cyan" />
                </div>
                <p className="text-white font-medium leading-relaxed">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
