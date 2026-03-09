import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/layout/CTASection";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";

export const metadata: Metadata = {
  title: "Termos de Uso | Nexa Lume Digital",
  description: "Termos e condições de uso dos serviços da Nexa Lume Digital.",
};

export default function TermosDeUso() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-surface-dark to-background-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Termos de Uso
            </h1>
            <p className="text-metal-gray text-lg">
              Última atualização: Março de 2026
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="space-y-12">
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">1</span>
                  Aceitação dos Termos
                </h2>
                <p className="text-metal-gray leading-relaxed pl-11">
                  Ao acessar e utilizar o site da Nexa Lume Digital, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site ou serviços.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">2</span>
                  Descrição dos Serviços
                </h2>
                <p className="text-metal-gray leading-relaxed pl-11">
                  A Nexa Lume Digital oferece serviços de presença digital, desenvolvimento de sistemas, automações com inteligência artificial, gestão de mídias sociais, tráfego pago, identidade visual e produção de conteúdo. Os detalhes específicos de cada serviço são definidos em contratos individuais com nossos clientes.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">3</span>
                  Propriedade Intelectual
                </h2>
                <p className="text-metal-gray leading-relaxed pl-11">
                  Todo o conteúdo presente neste site, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da Nexa Lume Digital ou de seus fornecedores de conteúdo e está protegido pelas leis brasileiras e internacionais de direitos autorais.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">4</span>
                  Uso do Site
                </h2>
                <p className="text-metal-gray leading-relaxed pl-11">
                  Você concorda em utilizar o site apenas para fins legais e de maneira que não infrinja os direitos de terceiros, nem restrinja ou iniba o uso e aproveitamento do site por qualquer outra pessoa. É proibido usar o site para transmitir material ilegal, difamatório, ofensivo ou de qualquer forma prejudicial.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">5</span>
                  Limitação de Responsabilidade
                </h2>
                <p className="text-metal-gray leading-relaxed pl-11">
                  A Nexa Lume Digital não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de usar nossos serviços, mesmo que tenhamos sido avisados da possibilidade de tais danos. Esta limitação se aplica na extensão máxima permitida pela lei aplicável.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">6</span>
                  Modificações dos Termos
                </h2>
                <p className="text-metal-gray leading-relaxed pl-11">
                  Reservamo-nos o direito de modificar estes termos a qualquer momento, sem aviso prévio. As alterações entrarão em vigor imediatamente após a publicação no site. O uso continuado do site após tais alterações constitui sua aceitação dos novos termos. Recomendamos verificar esta página periodicamente.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">7</span>
                  Lei Aplicável e Foro
                </h2>
                <p className="text-metal-gray leading-relaxed pl-11">
                  Estes termos são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Qualquer disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais da comarca de São Paulo, Estado de São Paulo, Brasil.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">8</span>
                  Contato
                </h2>
                <p className="text-metal-gray leading-relaxed pl-11">
                  Para questões relacionadas a estes termos, entre em contato conosco através do email{" "}
                  <a href="mailto:contato@nexalumedigital.com.br" className="text-primary hover:text-accent-cyan transition-colors">
                    contato@nexalumedigital.com.br
                  </a>
                  {" "}ou pelo WhatsApp disponível neste site.
                </p>
              </div>

            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
