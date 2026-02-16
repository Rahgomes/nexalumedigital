import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/layout/ContactSection";
import CTASection from "@/components/layout/CTASection";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import CasesHero from "@/components/cases/CasesHero";
import CasesShowcase from "@/components/cases/CasesShowcase";
import CasesMetrics from "@/components/cases/CasesMetrics";

export const metadata: Metadata = {
  title: "Cases de Sucesso | Nexalume Digital",
  description:
    "Veja os resultados reais que entregamos: cases de sucesso com métricas comprovadas em tecnologia, IA e transformação digital.",
};

export default function CasesPage() {
  return (
    <>
      <Header />
      <main>
        <CasesHero />
        <CasesShowcase />
        <CasesMetrics />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
