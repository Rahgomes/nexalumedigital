import type { Metadata } from "next";
import { Roboto_Condensed, Inter } from "next/font/google";
import { ToastProvider } from "@/components/ui/Toast";
import GlobalWidgets from "@/components/layout/GlobalWidgets";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";
import "./globals.css";

const robotoCondensed = Roboto_Condensed({
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
  title: "Nexa Lume Digital | Presença Digital, Sistemas e IA",
  description:
    "Transformamos presença digital, sistemas e IA em resultados reais. Da marca ao sistema corporativo, tudo em um só lugar. Nexa Lume Digital Solutions.",
  keywords: [
    "marketing digital",
    "sistemas corporativos",
    "inteligência artificial",
    "automação",
    "desenvolvimento web",
    "Nexa Lume Digital",
    "UX UI design",
    "ERP customizado",
    "agentes IA",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
  openGraph: {
    title: "Nexa Lume Digital | Presença Digital, Sistemas e IA",
    description:
      "Transformamos presença digital, sistemas e IA em resultados reais. Da marca ao sistema corporativo, tudo em um só lugar.",
    siteName: "Nexa Lume Digital",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 500,
        height: 500,
        alt: "Nexa Lume Digital",
      },
    ],
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
        className={`${robotoCondensed.variable} ${inter.variable} antialiased bg-background-dark text-white`}
      >
        <ToastProvider>{children}</ToastProvider>
        <ScrollToTopButton />
        <GlobalWidgets />
      </body>
    </html>
  );
}
