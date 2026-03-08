import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/layout/ContactSection";
import CTASection from "@/components/layout/CTASection";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";
import { Globe, Code, Bot, TrendingUp, ArrowRight } from "lucide-react";
import { ESPECIALIDADES, CATEGORIAS_ESPECIALIDADES } from "@/lib/especialidades-data";

export const metadata: Metadata = {
  title: "Especialidades | Soluções Digitais por Segmento | Nexa Lume Digital",
  description: "Soluções digitais especializadas para diversos segmentos. Sites para advogados, médicos, dentistas. Sistemas de agendamento, chatbots com IA, automação de WhatsApp e marketing digital.",
  keywords: ["agência digital especializada", "site para advogados", "sistema de agendamento", "chatbot IA", "automação whatsapp", "marketing digital"],
};

const iconMap = {
  Globe,
  Code,
  Bot,
  TrendingUp,
};

export default function EspecialidadesPage() {
  // Agrupar especialidades por categoria
  const especialidadesPorCategoria = Object.entries(CATEGORIAS_ESPECIALIDADES).map(([key, cat]) => ({
    key,
    ...cat,
    items: ESPECIALIDADES.filter((e) => e.categoria === key),
  }));

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] flex items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-32 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Especialidades
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Soluções digitais especializadas para cada segmento. 
              Não oferecemos pacotes genéricos – desenvolvemos estratégias sob medida 
              para as necessidades específicas do seu negócio.
            </p>
          </div>
        </section>

        {/* Categorias */}
        <section className="py-20 bg-background-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
            {especialidadesPorCategoria.map((categoria, catIndex) => {
              const Icon = iconMap[categoria.icone as keyof typeof iconMap];
              return (
                <div key={categoria.key} className={catIndex > 0 ? "mt-20" : ""}>
                  {/* Header da categoria */}
                  <div className="flex items-center gap-4 mb-10">
                    <div className="size-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                      {Icon && <Icon className="size-7 text-white" />}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white">
                        {categoria.nome}
                      </h2>
                      <p className="text-gray-400">{categoria.descricao}</p>
                    </div>
                  </div>

                  {/* Grid de especialidades */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoria.items.map((esp) => (
                      <Link
                        key={esp.slug}
                        href={`/especialidades/${esp.slug}`}
                        className="group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all duration-300"
                      >
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {esp.titulo}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                          {esp.subtitulo}
                        </p>
                        <div className="flex items-center text-cyan-400 text-sm font-medium">
                          Saiba mais
                          <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
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
