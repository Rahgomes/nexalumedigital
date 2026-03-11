import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/solucoes/ServiceHero";
import ServiceFeatures from "@/components/solucoes/ServiceFeatures";
import ServiceBenefits from "@/components/solucoes/ServiceBenefits";
import ContactSection from "@/components/layout/ContactSection";
import CTASection from "@/components/layout/CTASection";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  getCategoryByServiceSlug,
} from "@/lib/services-data";

// ISR: páginas geradas sob demanda
export const dynamicParams = true;
export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

// ISR: gera sob demanda
export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Serviço não encontrado | Nexalume Digital" };
  }

  return {
    title: `${service.title} | Nexalume Digital`,
    description: service.shortDescription,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const category = getCategoryByServiceSlug(slug);

  if (!service || !category) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <ServiceHero service={service} category={category} />
        <ServiceFeatures service={service} />
        <ServiceBenefits service={service} />
        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
