"use client";

import ChatwootWidget from "./ChatwootWidget";

// Token específico para o canal de Corretores (Inbox 3)
const CORRETORES_TOKEN = "4uNXB6TXges3WXy3UvWapkF1";

export default function ChatwootCorretoresWidget() {
  return (
    <ChatwootWidget 
      token={CORRETORES_TOKEN} 
      launcherTitle="Fale com a Sofia" 
    />
  );
}
