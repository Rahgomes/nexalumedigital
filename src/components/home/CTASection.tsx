"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";
import Button from "@/components/ui/Button";
import DiagnosticFormDialog from "@/components/ui/DiagnosticFormDialog";

export default function CTASection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-background-dark to-primary/10"
      aria-labelledby="cta-heading"
    >
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center space-y-10"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
      >
        <h2
          id="cta-heading"
          className="text-4xl md:text-5xl font-black text-white font-heading"
        >
          Pronto para o proximo passo?
        </h2>

        <p className="text-metal-gray text-lg max-w-2xl mx-auto">
          Agende uma consultoria tecnica gratuita e descubra como a Nexalume
          pode acelerar sua transformacao digital.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar via WhatsApp"
          >
            <Button variant="whatsapp" iconPosition="left">
              <svg
                className="size-6 fill-white"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-1.557-.594-2.662-1.726-1.104-1.132-1.445-2.141-1.577-2.498-.132-.358-.016-.551.102-.681.117-.13.252-.271.378-.407.127-.135.169-.227.253-.379.084-.151.042-.284-.021-.415-.064-.131-.563-1.359-.773-1.865-.203-.49-.411-.424-.563-.432l-.481-.009c-.167 0-.441.062-.672.311-.23.25-.879.858-.879 2.092s.899 2.427 1.025 2.594c.125.167 1.77 2.703 4.288 3.788.599.258 1.066.412 1.431.528.601.191 1.148.164 1.58.1.481-.071 1.482-.605 1.689-1.19.209-.585.209-1.087.147-1.19-.062-.102-.23-.164-.48-.289z" />
              </svg>
              Falar via WhatsApp
            </Button>
          </a>

          <DiagnosticFormDialog
            trigger={
              <Button variant="primary">Preencher Diagnostico</Button>
            }
          />
        </div>
      </motion.div>
    </section>
  );
}
