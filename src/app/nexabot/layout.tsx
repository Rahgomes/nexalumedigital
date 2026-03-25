import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NexaBot | Agente IA para Corretores de Imóveis",
  description:
    "Atendimento 24/7 com Inteligência Artificial para corretores. Qualifique leads automaticamente, agende visitas e nunca perca uma oportunidade de venda.",
  keywords: [
    "agente IA",
    "chatbot imobiliário",
    "corretor de imóveis",
    "atendimento automático",
    "qualificação de leads",
    "WhatsApp imobiliário",
    "NexaBot",
    "Nexa Lume Digital",
  ],
  openGraph: {
    title: "NexaBot | Agente IA para Corretores",
    description:
      "Atendimento 24/7 com IA. Qualifique leads, agende visitas e feche mais negócios.",
    type: "website",
  },
};

export default function NexaBotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
