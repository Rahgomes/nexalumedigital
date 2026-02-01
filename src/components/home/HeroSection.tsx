"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroTextReveal, fadeIn, staggerContainer } from "@/lib/animations";
import { HERO_IMAGE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";
import DiagnosticFormDialog from "@/components/ui/DiagnosticFormDialog";

export default function HeroSection() {
  return (
    <section
      className="relative hero-gradient overflow-hidden pt-20 pb-32"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          className="relative z-10 space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={heroTextReveal}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Inovacao em IA &amp; Automacao
          </motion.div>

          {/* Heading */}
          <motion.h1
            id="hero-heading"
            variants={heroTextReveal}
            className="text-5xl lg:text-7xl font-black leading-[1.08] text-white font-heading"
          >
            Transformamos presenca digital em{" "}
            <span className="gradient-highlight-text">resultados reais.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={heroTextReveal}
            className="text-lg lg:text-xl text-metal-gray max-w-xl leading-relaxed"
          >
            Sistemas inteligentes e interfaces de alta performance projetados
            para escalar seu negocio com o poder da inteligencia artificial.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={heroTextReveal} className="flex flex-wrap gap-4 pt-4">
            <DiagnosticFormDialog
              trigger={
                <Button variant="primary" icon={ArrowRight}>
                  Comecar Agora
                </Button>
              }
            />
            <Button variant="secondary">
              <a href="#services">Saiba Mais</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero Image / AI Mockup */}
        <motion.div
          className="relative flex justify-center items-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          {/* Background glow */}
          <div className="absolute w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />

          {/* Image card */}
          <div
            className="relative w-full aspect-square bg-cover bg-center rounded-2xl overflow-hidden neon-border-cyan"
            style={{ backgroundImage: `url("${HERO_IMAGE_URL}")` }}
            role="img"
            aria-label="Representacao holografica abstrata de redes neurais de inteligencia artificial"
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent" />

            {/* Status card overlay */}
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-surface-dark/80 backdrop-blur-md border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-metal-gray uppercase tracking-widest font-bold">
                  AI Analytics Core
                </span>
                <span className="text-accent-cyan text-xs font-bold">Ativo</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
