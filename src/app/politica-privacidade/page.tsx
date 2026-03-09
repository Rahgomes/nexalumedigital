import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CTASection from "@/components/layout/CTASection";
import WhatsAppFloatingButton from "@/components/ui/WhatsAppFloatingButton";

export const metadata: Metadata = {
  title: "Política de Privacidade | Nexa Lume Digital",
  description: "Política de privacidade e proteção de dados da Nexa Lume Digital, em conformidade com a LGPD.",
};

export default function PoliticaPrivacidade() {
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
              Política de Privacidade
            </h1>
            <p className="text-metal-gray text-lg">
              Última atualização: Março de 2026 • Em conformidade com a LGPD
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background-dark">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="space-y-12">

              {/* Destaque: Transparência */}
              <div className="bg-surface-dark/50 border border-primary/20 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-primary mb-2">🔒 Nosso Compromisso com sua Privacidade</h3>
                <p className="text-metal-gray">
                  A Nexa Lume Digital <strong className="text-white">não utiliza cookies de rastreamento</strong>, não vende seus dados e não compartilha informações com terceiros para fins publicitários. Coletamos apenas o necessário para prestar nossos serviços com excelência.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">1</span>
                  Introdução
                </h2>
                <p className="text-metal-gray leading-relaxed pl-11">
                  A Nexa Lume Digital está comprometida com a proteção da sua privacidade. Esta política descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">2</span>
                  Dados que Coletamos
                </h2>
                <div className="pl-11 space-y-3">
                  <p className="text-metal-gray leading-relaxed">
                    Coletamos apenas informações necessárias para atendê-lo:
                  </p>
                  <ul className="space-y-2 text-metal-gray">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-white">Dados de contato:</strong> nome, email, telefone e empresa (quando você nos envia uma mensagem)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-white">Dados de comunicação:</strong> mensagens enviadas via formulário, WhatsApp ou chatbot</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span><strong className="text-white">Dados técnicos básicos:</strong> endereço IP e tipo de navegador (para segurança do site)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">3</span>
                  Como Usamos seus Dados
                </h2>
                <div className="pl-11 space-y-3">
                  <p className="text-metal-gray leading-relaxed">
                    Utilizamos suas informações exclusivamente para:
                  </p>
                  <ul className="space-y-2 text-metal-gray">
                    <li className="flex items-start gap-2">
                      <span className="text-accent-cyan mt-1">✓</span>
                      <span>Responder suas solicitações e fornecer suporte</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-cyan mt-1">✓</span>
                      <span>Enviar propostas comerciais solicitadas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-cyan mt-1">✓</span>
                      <span>Executar contratos de prestação de serviços</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent-cyan mt-1">✓</span>
                      <span>Cumprir obrigações legais e fiscais</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">4</span>
                  O que NÃO Fazemos
                </h2>
                <div className="pl-11 space-y-3">
                  <ul className="space-y-2 text-metal-gray">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✕</span>
                      <span>Não vendemos seus dados pessoais</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✕</span>
                      <span>Não usamos cookies de rastreamento publicitário</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✕</span>
                      <span>Não compartilhamos dados com redes de anúncios</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">✕</span>
                      <span>Não enviamos spam ou comunicações não solicitadas</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">5</span>
                  Compartilhamento de Dados
                </h2>
                <p className="text-metal-gray leading-relaxed pl-11">
                  Podemos compartilhar dados apenas com prestadores de serviços essenciais (hospedagem, email, ferramentas de atendimento), sempre exigindo que mantenham a confidencialidade e segurança dos dados conforme a LGPD. Nunca compartilhamos dados para fins de marketing de terceiros.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">6</span>
                  Segurança dos Dados
                </h2>
                <p className="text-metal-gray leading-relaxed pl-11">
                  Implementamos medidas técnicas e organizacionais para proteger suas informações, incluindo: criptografia SSL/TLS em todo o site, controles de acesso restritos, servidores seguros com monitoramento 24/7 e backups regulares criptografados.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">7</span>
                  Seus Direitos (LGPD)
                </h2>
                <div className="pl-11 space-y-3">
                  <p className="text-metal-gray leading-relaxed">
                    A LGPD garante a você os seguintes direitos:
                  </p>
                  <ul className="space-y-2 text-metal-gray">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span><strong className="text-white">Acesso:</strong> saber quais dados temos sobre você</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span><strong className="text-white">Correção:</strong> atualizar dados incompletos ou incorretos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span><strong className="text-white">Exclusão:</strong> solicitar a eliminação dos seus dados</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span><strong className="text-white">Portabilidade:</strong> receber seus dados em formato estruturado</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">→</span>
                      <span><strong className="text-white">Revogação:</strong> retirar consentimento a qualquer momento</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">8</span>
                  Retenção de Dados
                </h2>
                <p className="text-metal-gray leading-relaxed pl-11">
                  Mantemos seus dados apenas pelo tempo necessário para cumprir as finalidades descritas ou conforme exigido por lei (obrigações fiscais, por exemplo). Dados de leads não convertidos são eliminados após 24 meses de inatividade.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">9</span>
                  Contato e Exercício de Direitos
                </h2>
                <p className="text-metal-gray leading-relaxed pl-11">
                  Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados, entre em contato:{" "}
                  <a href="mailto:contato@nexalumedigital.com.br" className="text-primary hover:text-accent-cyan transition-colors">
                    contato@nexalumedigital.com.br
                  </a>
                  <br /><br />
                  Responderemos sua solicitação em até 15 dias úteis, conforme determina a LGPD.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">10</span>
                  Alterações nesta Política
                </h2>
                <p className="text-metal-gray leading-relaxed pl-11">
                  Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou na legislação. Alterações significativas serão comunicadas através do nosso site. Recomendamos verificar esta página periodicamente.
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
