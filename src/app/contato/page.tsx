import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/layout/ContactSection";
import CTASection from "@/components/layout/CTASection";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import ContatoHero from "@/components/contato/ContatoHero";
import ContatoInfo from "@/components/contato/ContatoInfo";

export const metadata: Metadata = {
  title: "Contato | Nexalume Digital",
  description:
    "Entre em contato com a Nexalume Digital. Fale com um especialista e descubra como podemos acelerar sua transformação digital.",
};

export default function ContatoPage() {
  return (
    <>
      <Header />
      <main>
        <ContatoHero />
        <ContatoInfo />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
