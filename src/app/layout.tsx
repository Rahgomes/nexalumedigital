import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { ToastProvider } from "@/components/ui/Toast";
import { Chatbot } from "@/components/chatbot/Chatbot";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexalume Digital | Presenca Digital, Sistemas e IA",
  description:
    "Transformamos presenca digital, sistemas e IA em resultados reais. Da marca ao sistema corporativo, tudo em um so lugar. Nexalume Digital Solutions.",
  keywords: [
    "marketing digital",
    "sistemas corporativos",
    "inteligencia artificial",
    "automacao",
    "desenvolvimento web",
    "Nexalume Digital",
    "UX UI design",
    "ERP customizado",
    "agentes IA",
  ],
  openGraph: {
    title: "Nexalume Digital | Presenca Digital, Sistemas e IA",
    description:
      "Transformamos presenca digital, sistemas e IA em resultados reais. Da marca ao sistema corporativo, tudo em um so lugar.",
    siteName: "Nexalume Digital",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased bg-background-dark text-white`}
      >
        <ToastProvider>{children}</ToastProvider>
        <Chatbot />
      </body>
    </html>
  );
}
