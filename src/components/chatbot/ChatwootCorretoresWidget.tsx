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

export default function ChatwootCorretoresWidget() {
  useEffect(() => {
    // Configurações do widget para corretores
    window.chatwootSettings = {
      position: "right",
      type: "standard",
      launcherTitle: "Fale com a Sofia",
    };

    // Adicionar script do Chatwoot
    const BASE_URL = "https://chat.nexalumedigital.com.br";

    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.onload = () => {
      window.chatwootSDK.run({
        websiteToken: "4uNXB6TXges3WXy3UvWapkF1", // Inbox 3: Corretores
        baseUrl: BASE_URL,
      });
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const widget = document.querySelector(".woot-widget-holder");
      const bubble = document.querySelector(".woot-widget-bubble");
      if (widget) widget.remove();
      if (bubble) bubble.remove();
    };
  }, []);

  return null;
}
