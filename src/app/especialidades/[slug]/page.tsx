import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/layout/ContactSection";
import CTASection from "@/components/layout/CTASection";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import EspecialidadeHero from "@/components/especialidades/EspecialidadeHero";
import EspecialidadeContent from "@/components/especialidades/EspecialidadeContent";
import EspecialidadeSidebar from "@/components/especialidades/EspecialidadeSidebar";
import {
  getEspecialidadeBySlug,
  getAllEspecialidadesSlugs,
} from "@/lib/especialidades-data";

// ISR: páginas geradas sob demanda e cacheadas por 1 hora
export const dynamicParams = true;
export const revalidate = 3600;

interface Props {
  params: Promise<{ slug: string }>;
}

// Retorna vazio - todas as páginas serão geradas sob demanda (ISR)
// Isso evita OOM no build com 100+ páginas
export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const especialidade = getEspecialidadeBySlug(slug);

  if (!especialidade) {
    return { title: "Especialidade não encontrada | Nexa Lume Digital" };
  }

  return {
    title: especialidade.metaTitle,
    description: especialidade.metaDescription,
    keywords: especialidade.keywords,
    openGraph: {
      title: especialidade.metaTitle,
      description: especialidade.metaDescription,
      type: "website",
    },
  };
}

export default async function EspecialidadePage({ params }: Props) {
  const { slug } = await params;
  const especialidade = getEspecialidadeBySlug(slug);

  if (!especialidade) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <EspecialidadeHero especialidade={especialidade} />
        
        {/* Conteúdo com Sidebar */}
        <section className="py-20 bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Conteúdo principal */}
              <div className="lg:col-span-2">
                <EspecialidadeContent especialidade={especialidade} />
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <EspecialidadeSidebar currentSlug={slug} />
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
