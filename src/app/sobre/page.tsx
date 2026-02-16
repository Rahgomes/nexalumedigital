import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/layout/ContactSection";
import CTASection from "@/components/layout/CTASection";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import AboutHero from "@/components/sobre/AboutHero";
import AboutDifferentials from "@/components/sobre/AboutDifferentials";
import AboutHistory from "@/components/sobre/AboutHistory";
import AboutTeamValues from "@/components/sobre/AboutTeamValues";

export const metadata: Metadata = {
  title: "Sobre Nós | Nexalume Digital",
  description:
    "Conheça a Nexalume Digital: nossa história, valores e diferenciais. Tecnologia e inovação a serviço do crescimento do seu negócio.",
};

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutDifferentials />
        <AboutHistory />
        <AboutTeamValues />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
