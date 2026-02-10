"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";
import { SparklesCore } from "@/components/ui/aceternity/sparkles";
import type { ServiceDetail } from "@/lib/types";

interface ServiceBenefitsProps {
  service: ServiceDetail;
}

const BENEFIT_ICONS = [TrendingUp, Sparkles, Shield, Zap];

export default function ServiceBenefits({ service }: ServiceBenefitsProps) {
  return (
    <section className="py-16 lg:py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-12">
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
              <span className="relative">Por que escolher</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading uppercase">
              Benefícios para seu negócio
            </h2>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {service.benefits.map((benefit, index) => {
              const Icon = BENEFIT_ICONS[index % BENEFIT_ICONS.length];
              return (
                <motion.div
                  key={benefit}
                  variants={staggerItem}
                  className="group relative overflow-hidden rounded-2xl bg-surface-dark border border-white/10 p-8 hover:border-primary/30 transition-all duration-300"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative flex items-start gap-5">
                    <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="size-6 text-primary group-hover:text-accent-cyan transition-colors" />
                    </div>
                    <div>
                      <p className="text-white text-lg font-medium leading-relaxed">
                        {benefit}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
