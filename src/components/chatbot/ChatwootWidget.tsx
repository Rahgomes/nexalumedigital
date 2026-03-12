"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    chatwootSDK: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
    chatwootSettings: {
      position?: "left" | "right";
      type?: "standard" | "expanded_bubble";
      launcherTitle?: string;
    };
  }
}

export default function ChatwootWidget() {
  useEffect(() => {
    // Configurações do widget (posição acima do WhatsApp)
    window.chatwootSettings = {
      position: "right",
      type: "standard",
      launcherTitle: "Fale conosco",
    };

    // Adicionar CSS customizado para posicionar acima do WhatsApp
    const style = document.createElement("style");
    style.textContent = `
      .woot-widget-bubble {
        bottom: 80px !important;
      }
      .woot-widget-holder {
        bottom: 140px !important;
      }
      @media (min-width: 640px) {
        .woot-widget-bubble {
          bottom: 90px !important;
        }
        .woot-widget-holder {
          bottom: 150px !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Adicionar script do Chatwoot
    const BASE_URL = "https://chat.nexalumedigital.com.br";
    
    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.onload = () => {
      window.chatwootSDK.run({
        websiteToken: "qqMMerXi3KXjW7Rigi2FW8yw",
        baseUrl: BASE_URL,
      });
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const widget = document.querySelector(".woot-widget-holder");
      if (widget) widget.remove();
      style.remove();
    };
  }, []);

  return null;
}
