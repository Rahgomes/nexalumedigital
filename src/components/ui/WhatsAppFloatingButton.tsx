"use client";

import { motion } from "framer-motion";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";

export default function WhatsAppFloatingButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar via WhatsApp"
      className="fixed bottom-6 right-6 z-50 size-14 rounded-full whatsapp-btn flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-accent-green/40 animate-pulse-ring" />

      {/* WhatsApp icon */}
      <svg
        className="size-7 fill-white relative z-10"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-1.557-.594-2.662-1.726-1.104-1.132-1.445-2.141-1.577-2.498-.132-.358-.016-.551.102-.681.117-.13.252-.271.378-.407.127-.135.169-.227.253-.379.084-.151.042-.284-.021-.415-.064-.131-.563-1.359-.773-1.865-.203-.49-.411-.424-.563-.432l-.481-.009c-.167 0-.441.062-.672.311-.23.25-.879.858-.879 2.092s.899 2.427 1.025 2.594c.125.167 1.77 2.703 4.288 3.788.599.258 1.066.412 1.431.528.601.191 1.148.164 1.58.1.481-.071 1.482-.605 1.689-1.19.209-.585.209-1.087.147-1.19-.062-.102-.23-.164-.48-.289z" />
      </svg>
    </motion.a>
  );
}
