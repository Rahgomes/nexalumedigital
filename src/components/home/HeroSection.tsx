"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { heroTextReveal, fadeIn, staggerContainer } from "@/lib/animations";
import { HERO_IMAGE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { AuroraBackground } from "@/components/ui/aceternity/aurora-background";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { SparklesCore } from "@/components/ui/aceternity/sparkles";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Aurora Background - hidden on mobile for performance */}
      <div className="hidden md:block absolute inset-0 z-0">
        <AuroraBackground showRadialGradient={true} className="!min-h-0 h-full">
          <div />
        </AuroraBackground>
      </div>

      {/* Fallback gradient for mobile */}
      <div className="md:hidden absolute inset-0 hero-gradient z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pt-12 pb-20 lg:pt-20 lg:pb-32">
        {/* Text Content */}
        <motion.div
          className="relative z-10 space-y-6 lg:space-y-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Badge with Sparkles */}
          <motion.div
            variants={heroTextReveal}
            className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest"
          >
            {/* Sparkles effect */}
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
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="relative">Inovacao em IA &amp; Automacao</span>
          </motion.div>

          {/* Heading with Text Generate Effect */}
          <motion.h1
            id="hero-heading"
            variants={heroTextReveal}
            className="text-3xl sm:text-5xl lg:text-7xl font-black leading-[1.08] text-white font-heading"
          >
            Transformamos presenca digital em{" "}
            <span className="gradient-highlight-text">
              <TextGenerateEffect
                words="resultados reais."
                duration={0.8}
                filter={true}
                className="gradient-highlight-text"
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={heroTextReveal}
            className="text-base sm:text-lg lg:text-xl text-metal-gray max-w-xl leading-relaxed"
          >
            Sistemas inteligentes e interfaces de alta performance projetados
            para escalar seu negocio com o poder da inteligencia artificial.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={heroTextReveal} className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#contact">
              <Button variant="primary" icon={ArrowRight} className="w-full sm:w-auto">
                Comecar Agora
              </Button>
            </a>
            <a href="#services">
              <Button variant="secondary" className="w-full sm:w-auto">
                Saiba Mais
              </Button>
            </a>
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
          <div className="absolute w-75 h-75 md:w-125 md:h-125 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />

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
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-lg bg-surface-dark/80 backdrop-blur-md border border-white/10">
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
