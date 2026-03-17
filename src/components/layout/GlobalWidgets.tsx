"use client";

import { usePathname } from "next/navigation";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import ChatwootWidget from "@/components/chatbot/ChatwootWidget";

// Rotas que têm widgets próprios (não mostrar os globais)
const EXCLUDED_ROUTES = ["/corretores"];

export default function GlobalWidgets() {
  const pathname = usePathname();

  // Verifica se a rota atual deve esconder os widgets globais
  const shouldHide = EXCLUDED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  if (shouldHide) {
    return null;
  }

  return (
    <>
      <WhatsAppFloatingButton />
      <ChatwootWidget />
    </>
  );
}
