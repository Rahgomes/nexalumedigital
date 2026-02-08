"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { fadeIn } from "@/lib/animations";
import type { ServiceDetail } from "@/lib/types";
import { WHATSAPP_NUMBER } from "@/lib/constants";

interface ServiceCTAProps {
  service: ServiceDetail;
}

export default function ServiceCTA({ service }: ServiceCTAProps) {
  const whatsappMessage = encodeURIComponent(
    `Ola! Gostaria de saber mais sobre ${service.title}.`
  );
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

  return (
    <section className="py-16 lg:py-24 cta-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading mb-6">
            Pronto para comecar?
          </h2>
          <p className="text-metal-gray text-lg mb-10 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
            a crescer com {service.title.toLowerCase()}.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 btn-gradient px-8 py-4 rounded-xl font-bold neon-glow-primary hover:opacity-90 transition-all"
            >
              Fale com um Especialista
              <ArrowRight className="size-5" />
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 whatsapp-btn px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all"
            >
              <MessageCircle className="size-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
