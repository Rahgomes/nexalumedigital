import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SolutionsOverview from "@/components/solucoes/SolutionsOverview";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";

export const metadata: Metadata = {
  title: "Solucoes | Nexalume Digital",
  description:
    "Conheca todas as solucoes digitais da Nexalume: sistemas corporativos, IA, automacao, desenvolvimento web e muito mais.",
};

export default function SolucoesPage() {
  return (
    <>
      <Header />
      <main>
        <SolutionsOverview />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
