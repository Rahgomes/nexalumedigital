"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { fadeIn } from "@/lib/animations";
import { SparklesCore } from "@/components/ui/aceternity/sparkles";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";

// O formulário enviava para um webhook do n8n que foi desligado; o contato
// agora vai direto para o WhatsApp.
export default function ContactSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32 bg-background-dark"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left column - Info */}
          <motion.div
            className="space-y-8"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="space-y-4">
              <div className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
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
              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl font-black text-white font-heading uppercase"
              >
                Fale com um Especialista
              </h2>
              <p className="text-metal-gray text-base sm:text-lg leading-relaxed max-w-lg">
                Chame a gente no WhatsApp e nossa equipe preparará uma análise
                personalizada para o seu negócio.
              </p>
            </div>
          </motion.div>

          {/* Right column - WhatsApp */}
          <motion.div
            className="rounded-2xl bg-surface-dark border border-white/10 p-6 sm:p-8 space-y-5"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <p className="text-metal-gray text-sm sm:text-base leading-relaxed">
              Conte rapidamente o que você precisa. Respondemos em horário comercial.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-gradient px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-sm sm:text-base text-white neon-glow-primary hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
