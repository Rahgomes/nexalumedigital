import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import WhyNexalumeSection from "@/components/home/WhyNexalumeSection";
import CasesSection from "@/components/home/CasesSection";
import ContactSection from "@/components/layout/ContactSection";
import CTASection from "@/components/layout/CTASection";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import ScrollToTopButton from "@/components/ui/ScrollToTopButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyNexalumeSection />
        <CasesSection />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTopButton />
      <WhatsAppFloatingButton />
    </>
  );
}
