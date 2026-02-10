import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SolutionsOverview from "@/components/solucoes/SolutionsOverview";
import ContactSection from "@/components/layout/ContactSection";
import CTASection from "@/components/layout/CTASection";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";

export const metadata: Metadata = {
  title: "Soluções | Nexalume Digital",
  description:
    "Conheça todas as soluções digitais da Nexalume: sistemas corporativos, IA, automação, desenvolvimento web e muito mais.",
};

export default function SolucoesPage() {
  return (
    <>
      <Header />
      <main>
        <SolutionsOverview />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
