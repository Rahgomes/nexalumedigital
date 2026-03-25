"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import ChatwootWidget, { cleanupChatwoot } from "@/components/chatbot/ChatwootWidget";

// Rotas que têm widgets próprios (não mostrar os globais)
const EXCLUDED_ROUTES = ["/corretores", "/demo-corretor"];

export default function GlobalWidgets() {
  const pathname = usePathname();
  const wasExcluded = useRef(false);

  // Verifica se a rota atual deve esconder os widgets globais
  const shouldHide = EXCLUDED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  useEffect(() => {
    // Se estava em rota normal e foi para excluída, faz cleanup
    if (shouldHide && !wasExcluded.current) {
      cleanupChatwoot();
    }
    
    wasExcluded.current = shouldHide;
  }, [shouldHide, pathname]);

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
