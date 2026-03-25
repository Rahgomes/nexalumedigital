"use client";

import { useEffect, useRef } from "react";

const BASE_URL = "https://chat.nexalumedigital.com.br";
const DEFAULT_TOKEN = "qqMMerXi3KXjW7Rigi2FW8yw";

declare global {
  interface Window {
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
    chatwootSettings?: {
      position?: "left" | "right";
      type?: "standard" | "expanded_bubble";
      launcherTitle?: string;
    };
    $chatwoot?: {
      toggle: (state: "open" | "close") => void;
      reset: () => void;
      setUser: (id: string, data: object) => void;
      setCustomAttributes: (attrs: object) => void;
    };
  }
}

/**
 * Remove completamente o Chatwoot do DOM e limpa variáveis globais
 */
function cleanupChatwoot() {
  // Tenta resetar via API oficial primeiro
  if (window.$chatwoot?.reset) {
    try {
      window.$chatwoot.reset();
    } catch (e) {
      // Ignora erros do reset
    }
  }

  // Fechar o widget se estiver aberto
  if (window.$chatwoot?.toggle) {
    try {
      window.$chatwoot.toggle("close");
    } catch (e) {
      // Ignora erros
    }
  }

  // Remove elementos do DOM (mais seletores para garantir)
  const selectors = [
    ".woot-widget-holder",
    ".woot-widget-bubble", 
    ".woot--bubble-holder",
    ".woot-widget-container",
    ".woot-widget-wrap",
    ".woot--close",
    "#chatwoot-widget-script",
    'script[src*="chatwoot"]',
    'script[src*="chat.nexalumedigital"]',
    'iframe[src*="chatwoot"]',
    'iframe[src*="chat.nexalumedigital"]',
  ];
  
  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => el.remove());
  });

  // Limpa variáveis globais
  delete window.$chatwoot;
  delete window.chatwootSDK;
  delete window.chatwootSettings;
  
  // Remove event listeners do Chatwoot se existirem
  try {
    window.removeEventListener("chatwoot:ready", () => {});
    window.removeEventListener("chatwoot:error", () => {});
  } catch (e) {
    // Ignora
  }
}

/**
 * Carrega o SDK do Chatwoot
 */
function loadChatwoot(token: string, launcherTitle: string = "Fale conosco") {
  // Garante cleanup antes de carregar
  cleanupChatwoot();
  
  // Pequeno delay para garantir que o cleanup terminou
  setTimeout(() => {
    // Define configurações antes de carregar o script
    window.chatwootSettings = {
      position: "right",
      type: "standard",
      launcherTitle,
    };

    // Cria e adiciona o script (sempre novo após cleanup)
    const script = document.createElement("script");
    script.id = "chatwoot-widget-script";
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: token,
          baseUrl: BASE_URL,
        });
      }
    };
    
    document.body.appendChild(script);
  }, 50);
}

interface ChatwootWidgetProps {
  token?: string;
  launcherTitle?: string;
}

export default function ChatwootWidget({ 
  token = DEFAULT_TOKEN,
  launcherTitle = "Fale conosco" 
}: ChatwootWidgetProps) {
  const isLoaded = useRef(false);
  const currentToken = useRef(token);

  useEffect(() => {
    // Se o token mudou, faz cleanup completo
    if (isLoaded.current && currentToken.current !== token) {
      cleanupChatwoot();
      isLoaded.current = false;
    }

    // Carrega o widget
    if (!isLoaded.current) {
      // Pequeno delay para garantir que cleanup terminou
      const timer = setTimeout(() => {
        loadChatwoot(token, launcherTitle);
        isLoaded.current = true;
        currentToken.current = token;
      }, 100);
      
      return () => clearTimeout(timer);
    }

    // Cleanup ao desmontar
    return () => {
      cleanupChatwoot();
      isLoaded.current = false;
    };
  }, [token, launcherTitle]);

  return null;
}

// Exporta função de cleanup para uso externo
export { cleanupChatwoot };
