import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/solucoes/ServiceHero";
import ServiceFeatures from "@/components/solucoes/ServiceFeatures";
import ServiceBenefits from "@/components/solucoes/ServiceBenefits";
import ServiceCTA from "@/components/solucoes/ServiceCTA";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  getCategoryByServiceSlug,
} from "@/lib/services-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Servico nao encontrado | Nexalume Digital" };
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
        <ServiceCTA service={service} />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
