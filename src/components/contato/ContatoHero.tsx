"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { heroTextReveal } from "@/lib/animations";
import { SparklesCore } from "@/components/ui/aceternity/sparkles";

export default function ContatoHero() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-background-dark">
        <div className="absolute top-20 left-10 size-64 bg-primary/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 size-96 bg-accent-cyan/10 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={heroTextReveal}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-metal-gray mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Contato</span>
          </nav>

          {/* Badge */}
          <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
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
            <span className="relative">Fale Conosco</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 font-heading">
            Vamos{" "}
            <span className="gradient-highlight-text">Construir Juntos</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-metal-gray leading-relaxed">
            Tem um projeto em mente ou quer entender como podemos ajudar seu
            negócio a crescer? Entre em contato e fale com um dos nossos
            especialistas — sem compromisso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
