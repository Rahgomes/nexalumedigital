import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Uso | Nexa Lume Digital",
  description: "Termos e condições de uso dos serviços da Nexa Lume Digital.",
};

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Termos de Uso
        </h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-gray-300 text-lg mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-300 leading-relaxed">
              Ao acessar e utilizar o site da Nexa Lume Digital, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site ou serviços.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">2. Descrição dos Serviços</h2>
            <p className="text-gray-300 leading-relaxed">
              A Nexa Lume Digital oferece serviços de presença digital, desenvolvimento de sistemas, automações com inteligência artificial, gestão de mídias sociais, tráfego pago, identidade visual e produção de conteúdo. Os detalhes específicos de cada serviço são definidos em contratos individuais com nossos clientes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">3. Propriedade Intelectual</h2>
            <p className="text-gray-300 leading-relaxed">
              Todo o conteúdo presente neste site, incluindo textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da Nexa Lume Digital ou de seus fornecedores de conteúdo e está protegido pelas leis brasileiras e internacionais de direitos autorais.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">4. Uso do Site</h2>
            <p className="text-gray-300 leading-relaxed">
              Você concorda em utilizar o site apenas para fins legais e de maneira que não infrinja os direitos de terceiros, nem restrinja ou iniba o uso e aproveitamento do site por qualquer outra pessoa.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">5. Limitação de Responsabilidade</h2>
            <p className="text-gray-300 leading-relaxed">
              A Nexa Lume Digital não será responsável por quaisquer danos diretos, indiretos, incidentais, consequenciais ou punitivos decorrentes do uso ou da incapacidade de usar nossos serviços, mesmo que tenhamos sido avisados da possibilidade de tais danos.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">6. Modificações dos Termos</h2>
            <p className="text-gray-300 leading-relaxed">
              Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site. O uso continuado do site após tais alterações constitui sua aceitação dos novos termos.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">7. Lei Aplicável</h2>
            <p className="text-gray-300 leading-relaxed">
              Estes termos são regidos e interpretados de acordo com as leis da República Federativa do Brasil. Qualquer disputa relacionada a estes termos será submetida à jurisdição exclusiva dos tribunais brasileiros.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contato</h2>
            <p className="text-gray-300 leading-relaxed">
              Para questões relacionadas a estes termos, entre em contato conosco através do email{" "}
              <a href="mailto:contato@nexalumedigital.com.br" className="text-cyan-400 hover:text-cyan-300">
                contato@nexalumedigital.com.br
              </a>
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
