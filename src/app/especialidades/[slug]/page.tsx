import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle2, Globe, Code, Bot, TrendingUp } from "lucide-react";
import { 
  getEspecialidadeBySlug, 
  getAllEspecialidadesSlugs, 
  ESPECIALIDADES,
  CATEGORIAS_ESPECIALIDADES 
} from "@/lib/especialidades-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Gerar páginas estáticas para todas as especialidades
export async function generateStaticParams() {
  return getAllEspecialidadesSlugs().map((slug) => ({ slug }));
}

// Metadata dinâmica
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const especialidade = getEspecialidadeBySlug(slug);

  if (!especialidade) {
    return {
      title: "Especialidade não encontrada | Nexa Lume Digital",
    };
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

const iconMap = {
  Globe,
  Code,
  Bot,
  TrendingUp,
};

export default async function EspecialidadePage({ params }: PageProps) {
  const { slug } = await params;
  const especialidade = getEspecialidadeBySlug(slug);

  if (!especialidade) {
    notFound();
  }

  // Pegar categoria info
  const categoriaInfo = CATEGORIAS_ESPECIALIDADES[especialidade.categoria];
  const Icon = iconMap[categoriaInfo.icone as keyof typeof iconMap];

  // Especialidades relacionadas (mesma categoria, exceto a atual)
  const relacionadas = ESPECIALIDADES
    .filter((e) => e.categoria === especialidade.categoria && e.slug !== slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/especialidades" className="hover:text-white transition-colors">Especialidades</Link>
            <span>/</span>
            <span className="text-cyan-400">{especialidade.titulo}</span>
          </div>

          {/* Categoria badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="size-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
              {Icon && <Icon className="size-4 text-white" />}
            </div>
            <span className="text-cyan-400 text-sm font-medium">{categoriaInfo.nome}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {especialidade.titulo}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            {especialidade.heroText}
          </p>
        </div>
      </section>

      {/* Conteúdo principal com sidebar */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Conteúdo */}
            <div className="lg:col-span-2 space-y-12">
              {especialidade.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {section.titulo}
                  </h2>
                  <p className="text-gray-300 leading-relaxed">
                    {section.conteudo}
                  </p>
                </div>
              ))}

              {/* Benefícios */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/20">
                <h2 className="text-2xl font-bold text-white mb-6">
                  Benefícios
                </h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {especialidade.beneficios.map((beneficio, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="size-5 text-cyan-400 mt-0.5 shrink-0" />
                      <span className="text-gray-300">{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* CTA Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {especialidade.cta.titulo}
                  </h3>
                  <p className="text-cyan-100 text-sm mb-6">
                    {especialidade.cta.texto}
                  </p>
                  <Link
                    href="/contato"
                    className="flex items-center justify-center gap-2 w-full bg-white text-gray-900 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Solicitar Proposta
                    <ArrowRight className="size-4" />
                  </Link>
                </div>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/5511981308127?text=Olá! Vi a página de especialidades e gostaria de saber mais sobre seus serviços."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-700 transition-colors"
                >
                  <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Falar no WhatsApp
                </a>

                {/* Especialidades relacionadas */}
                {relacionadas.length > 0 && (
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4">
                      Relacionados
                    </h3>
                    <ul className="space-y-3">
                      {relacionadas.map((rel) => (
                        <li key={rel.slug}>
                          <Link
                            href={`/especialidades/${rel.slug}`}
                            className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                          >
                            {rel.titulo}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voltar */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/especialidades"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="size-4" />
            Voltar para Especialidades
          </Link>
        </div>
      </section>
    </main>
  );
}
