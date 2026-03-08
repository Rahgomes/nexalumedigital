import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Nexa Lume Digital",
  description: "Política de privacidade e proteção de dados da Nexa Lume Digital, em conformidade com a LGPD.",
};

export default function PoliticaPrivacidade() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Política de Privacidade
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300 text-lg mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introdução</h2>
            <p className="text-gray-300 leading-relaxed">
              A Nexa Lume Digital está comprometida com a proteção da sua privacidade. Esta política descreve como coletamos, usamos, armazenamos e protegemos suas informações pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Dados que Coletamos</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Podemos coletar os seguintes tipos de informações:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li><strong>Dados de identificação:</strong> nome, email, telefone, empresa</li>
              <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas</li>
              <li><strong>Dados de comunicação:</strong> mensagens enviadas através do formulário de contato</li>
              <li><strong>Dados de uso:</strong> interações com nossos serviços e plataformas</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Como Usamos seus Dados</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Utilizamos suas informações para:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Responder suas solicitações e fornecer suporte</li>
              <li>Enviar informações sobre nossos serviços (com seu consentimento)</li>
              <li>Melhorar nosso site e serviços</li>
              <li>Cumprir obrigações legais</li>
              <li>Proteger nossos direitos e segurança</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Base Legal para Processamento</h2>
            <p className="text-gray-300 leading-relaxed">
              Processamos seus dados com base em: consentimento explícito, execução de contrato, cumprimento de obrigação legal, ou interesse legítimo da empresa, sempre respeitando seus direitos fundamentais.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Compartilhamento de Dados</h2>
            <p className="text-gray-300 leading-relaxed">
              Não vendemos suas informações pessoais. Podemos compartilhar dados com prestadores de serviços que nos auxiliam nas operações (hospedagem, email, analytics), sempre exigindo que mantenham a confidencialidade e segurança dos dados.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Segurança dos Dados</h2>
            <p className="text-gray-300 leading-relaxed">
              Implementamos medidas técnicas e organizacionais para proteger suas informações, incluindo criptografia SSL/TLS, controles de acesso, monitoramento de segurança e backups regulares.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Seus Direitos (LGPD)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Você tem direito a:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Confirmar a existência de tratamento de dados</li>
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar anonimização, bloqueio ou eliminação</li>
              <li>Solicitar portabilidade dos dados</li>
              <li>Revogar consentimento a qualquer momento</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Cookies</h2>
            <p className="text-gray-300 leading-relaxed">
              Utilizamos cookies para melhorar sua experiência no site. Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">9. Retenção de Dados</h2>
            <p className="text-gray-300 leading-relaxed">
              Mantemos seus dados pelo tempo necessário para cumprir as finalidades descritas nesta política, ou conforme exigido por lei. Após esse período, os dados são eliminados de forma segura.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">10. Contato do Encarregado (DPO)</h2>
            <p className="text-gray-300 leading-relaxed">
              Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados, entre em contato:{" "}
              <a href="mailto:contato@nexalumedigital.com.br" className="text-cyan-400 hover:text-cyan-300">
                contato@nexalumedigital.com.br
              </a>
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">11. Alterações nesta Política</h2>
            <p className="text-gray-300 leading-relaxed">
              Esta política pode ser atualizada periodicamente. Recomendamos que você a revise regularmente. Alterações significativas serão comunicadas através do nosso site.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <Link 
            href="/" 
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            ← Voltar para a página inicial
          </Link>
        </div>
      </div>
    </main>
  );
}
