"use client";

import Link from "next/link";

export default function CorretoresPage() {
  const whatsappNumber = "5511981308127";
  const whatsappMessage = encodeURIComponent(
    "Olá! Vi a página sobre automação para corretores e tenho interesse em saber mais sobre o agente de IA para atendimento 24h."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-amber-500/10" />
        
        <div className="relative max-w-6xl mx-auto px-4 py-20 sm:py-32">
          <div className="text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-medium mb-6">
              🏠 Exclusivo para Corretores e Imobiliárias
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Quantas vendas você <span className="text-orange-500">perdeu</span> por não responder{" "}
              <span className="text-orange-400">fora do horário comercial?</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Enquanto você descansa no final de semana, seus clientes estão buscando imóveis.
              <strong className="text-white"> Quem responde primeiro, fecha a venda.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/25"
              >
                💬 Quero atender 24 horas
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border border-slate-600 text-slate-300 font-medium hover:bg-slate-800 transition-all"
              >
                Saiba mais ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            😤 Você já passou por isso?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "📱",
                title: "Sábado 14h",
                desc: "Cliente encontra o imóvel perfeito e manda WhatsApp perguntando se está disponível...",
              },
              {
                emoji: "😴",
                title: "Segunda 9h",
                desc: "Você vê a mensagem e responde 'Sim, está disponível! Podemos agendar uma visita?'",
              },
              {
                emoji: "💔",
                title: "A resposta...",
                desc: "'Obrigado, mas já fechei com outro corretor que me atendeu no sábado.'",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-slate-900/50 border border-slate-700"
              >
                <span className="text-4xl mb-4 block">{item.emoji}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 rounded-xl bg-red-500/10 border border-red-500/30 text-center">
            <p className="text-2xl font-bold text-red-400">
              💸 Comissão perdida: R$ 9.000
            </p>
            <p className="text-slate-400 mt-2">
              (3% de um imóvel de R$ 300.000)
            </p>
          </div>
        </div>
      </section>

      {/* Solução Section */}
      <section id="como-funciona" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            ✅ A Solução: Agente de IA 24 horas
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Um assistente inteligente que responde seus clientes instantaneamente,
            com todas as informações dos seus imóveis.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              {[
                {
                  icon: "⚡",
                  title: "Resposta em 10 segundos",
                  desc: "Não importa se é 3h da manhã ou domingo à tarde",
                },
                {
                  icon: "🏠",
                  title: "Conhece todos os imóveis",
                  desc: "Preço, condomínio, financiamento, permuta, localização",
                },
                {
                  icon: "📅",
                  title: "Agenda visitas automaticamente",
                  desc: "Verifica sua disponibilidade e marca direto na agenda",
                },
                {
                  icon: "🔔",
                  title: "Você recebe o lead qualificado",
                  desc: "Só entra em ação quando o cliente está pronto pra fechar",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-green-400 text-sm font-medium">Online agora</span>
              </div>
              <div className="space-y-4 text-sm">
                <div className="flex justify-end">
                  <div className="bg-slate-700 rounded-lg p-3 max-w-[80%]">
                    <p className="text-slate-300">Oi! O apto de 85m² na Rua Augusta ainda tá disponível?</p>
                    <span className="text-xs text-slate-500">14:32</span>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-orange-500/20 rounded-lg p-3 max-w-[80%]">
                    <p className="text-slate-200">
                      Olá! 😊 Sim, está disponível!<br/><br/>
                      📍 <strong>Detalhes rápidos:</strong><br/>
                      • 85m² | 2 quartos (1 suíte)<br/>
                      • Condomínio: R$ 850/mês<br/>
                      • <strong>Valor: R$ 450.000</strong><br/><br/>
                      Aceita financiamento e FGTS! 🏦<br/><br/>
                      Posso agendar uma visita pra você?
                    </p>
                    <span className="text-xs text-orange-300">14:32</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preços Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            💰 Investimento
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Quanto custa perder uma venda por não responder? Compare com nosso investimento.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Básico",
                price: "120",
                desc: "1 portal de imóveis",
                features: [
                  "Agente IA no WhatsApp",
                  "Atendimento 24/7",
                  "Integração com 1 portal (Kenlo, VivaReal, etc)",
                  "Captura de leads qualificados",
                  "Notificação por email e WhatsApp",
                ],
                highlight: false,
              },
              {
                name: "Pro",
                price: "200",
                desc: "Até 2 portais",
                features: [
                  "Tudo do Básico +",
                  "Integração com até 2 portais",
                  "Widget no seu site",
                  "Google Agenda ou Outlook",
                  "Relatórios semanais",
                ],
                highlight: true,
              },
              {
                name: "Premium",
                price: "350",
                desc: "Até 5 portais",
                features: [
                  "Tudo do Pro +",
                  "Integração com até 5 portais",
                  "Resposta por email automática",
                  "Múltiplos corretores na conta",
                  "Suporte prioritário",
                ],
                highlight: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl border ${
                  plan.highlight
                    ? "bg-gradient-to-b from-orange-500/20 to-amber-500/10 border-orange-500/50"
                    : "bg-slate-900/50 border-slate-700"
                }`}
              >
                {plan.highlight && (
                  <span className="inline-block px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold mb-4">
                    MAIS POPULAR
                  </span>
                )}
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">R$ {plan.price}</span>
                  <span className="text-slate-400">/mês</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-300">
                      <span className="text-green-400">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-lg font-medium transition-all ${
                    plan.highlight
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-slate-700 text-slate-300 hover:bg-slate-600"
                  }`}
                >
                  Começar agora
                </a>
              </div>
            ))}
          </div>
          
          <p className="text-center text-slate-500 mt-8">
            Setup inicial: R$ 200 (único) • Sem fidelidade • Cancele quando quiser
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            🚀 Pronto para nunca mais perder uma venda?
          </h2>
          <p className="text-slate-400 mb-8">
            Enquanto você lê isso, algum cliente pode estar buscando um imóvel e não encontrando resposta.
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xl hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg shadow-orange-500/25"
          >
            💬 Falar com especialista agora
          </a>
          <p className="text-slate-500 mt-4 text-sm">
            Resposta em menos de 5 minutos • Consultoria gratuita
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Link href="/" className="text-slate-400 hover:text-white transition-colors">
            Nexa Lume Digital
          </Link>
          <p className="text-slate-600 text-sm mt-2">
            © 2026 • Transformando presença digital em resultados
          </p>
        </div>
      </footer>
    </main>
  );
}
