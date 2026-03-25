"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import ChatwootWidget, { cleanupChatwoot } from "@/components/chatbot/ChatwootWidget";

// Rotas que têm widgets próprios (não mostrar os globais)
const EXCLUDED_ROUTES = ["/corretores", "/demo-corretor"];

export default function GlobalWidgets() {
  const pathname = usePathname();
  const wasExcluded = useRef(false);
  const [isReady, setIsReady] = useState(true);

  // Verifica se a rota atual deve esconder os widgets globais
  const shouldHide = EXCLUDED_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(`${route}/`)
  );

  useEffect(() => {
    // Se estava em rota normal e foi para excluída
    if (shouldHide && !wasExcluded.current) {
      // Faz cleanup ANTES da página específica carregar seu widget
      cleanupChatwoot();
      setIsReady(false);
    }
    
    // Se estava em rota excluída e foi para normal
    if (!shouldHide && wasExcluded.current) {
      // Aguarda o cleanup da página específica terminar
      setIsReady(false);
      cleanupChatwoot();
      
      // Delay para garantir cleanup completo antes de recarregar
      const timer = setTimeout(() => {
        setIsReady(true);
      }, 300);
      
      return () => clearTimeout(timer);
    }
    
    wasExcluded.current = shouldHide;
  }, [shouldHide, pathname]);

  // Não renderiza se deve esconder ou não está pronto
  if (shouldHide || !isReady) {
    return null;
  }

  return (
    <>
      <WhatsAppFloatingButton />
      <ChatwootWidget />
    </>
  );
}
