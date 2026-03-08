import { Metadata } from "next";
import Link from "next/link";
import { Globe, Code, Bot, TrendingUp, ArrowRight } from "lucide-react";
import { ESPECIALIDADES, CATEGORIAS_ESPECIALIDADES } from "@/lib/especialidades-data";

export const metadata: Metadata = {
  title: "Especialidades | Nexa Lume Digital",
  description: "Soluções digitais especializadas para diversos segmentos. Sites para advogados, médicos, dentistas. Sistemas de agendamento, chatbots com IA, automação de WhatsApp e marketing digital.",
  keywords: ["agência digital especializada", "site para advogados", "sistema de agendamento", "chatbot IA", "automação whatsapp"],
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
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
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
      <section className="pb-24 px-4">
        <div className="max-w-6xl mx-auto">
          {especialidadesPorCategoria.map((categoria) => {
            const Icon = iconMap[categoria.icone as keyof typeof iconMap];
            return (
              <div key={categoria.key} className="mb-16">
                {/* Header da categoria */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="size-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                    {Icon && <Icon className="size-6 text-white" />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{categoria.nome}</h2>
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

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Não encontrou o que procura?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Desenvolvemos soluções personalizadas para qualquer segmento. 
            Entre em contato e conte-nos sobre seu projeto.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold px-8 py-4 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
          >
            Fale Conosco
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
