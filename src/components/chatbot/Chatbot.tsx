"use client";

import { Bubble } from "@typebot.io/react";

export function Chatbot() {
  return (
    <Bubble
      typebot="nexa-lume-atendimento-238o54f"
      apiHost="https://bot.ramongomessilva.com.br"
      theme={{
        button: { backgroundColor: "#1FA2FF" },
        chatWindow: { backgroundColor: "#f5f7f8" },
        placement: "left",
      }}
    />
  );
}
