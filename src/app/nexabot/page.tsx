"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Calendar, 
  BarChart3, 
  Users, 
  Sparkles, 
  Check, 
  X, 
  ChevronDown,
  Building2,
  Zap,
  Crown,
  Rocket,
  Info
} from "lucide-react";
import { AuroraBackground } from "@/components/ui/aceternity/aurora-background";
import { openChatwoot } from "@/lib/chatwoot";

// Dados dos planos
const plans = [
  {
    id: "starter",
    name: "Starter",
    icon: Zap,
    price: 197,
    originalPrice: 297,
    badge: "🏷️ Oferta de Lançamento",
    description: "Ideal para corretores individuais",
    conversations: "500/mês",
    conversationsNote: "~17 atendimentos/dia",
    agents: "Até 1",
    highlight: false,
    comingSoon: false,
    features: [
      { name: "Agente IA WhatsApp 24/7", included: true },
      { name: "CRM Gestão de Leads + App Mobile", included: true },
      { name: "Agendamento de visitas", included: true },
      { name: "Qualificação de Lead (quente/morno/frio)", included: true },
      { name: "Macros", included: true },
      { name: "Integração portais (Loft, Lello, Kenlo, Chaves na Mão)", included: true },
      { name: "Widget site (opcional)", included: true },
      { name: "Relatórios básicos", included: true },
      { name: "Múltiplos números WhatsApp", included: false },
      { name: "Dashboard customizado", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    icon: Crown,
    price: 497,
    originalPrice: null,
    badge: "⭐ Mais Popular",
    description: "Para corretores ativos e pequenas equipes",
    conversations: "2.000/mês",
    conversationsNote: "~65 atendimentos/dia",
    agents: "Até 2",
    highlight: true,
    comingSoon: false,
    features: [
      { name: "Agente IA WhatsApp 24/7", included: true },
      { name: "CRM Gestão de Leads + App Mobile", included: true },
      { name: "Agendamento de visitas", included: true },
      { name: "Qualificação de Lead (quente/morno/frio)", included: true },
      { name: "Macros", included: true },
      { name: "Integração portais (Loft, Lello, Kenlo, Chaves na Mão)", included: true },
      { name: "Widget site (opcional)", included: true },
      { name: "Relatórios completos", included: true },
      { name: "Múltiplos números WhatsApp", included: false },
      { name: "Dashboard customizado", included: false },
    ],
  },
  {
    id: "business",
    name: "Business",
    icon: Building2,
    price: 997,
    originalPrice: null,
    badge: null,
    description: "Para imobiliárias e equipes maiores",
    conversations: "5.000/mês",
    conversationsNote: "~165 atendimentos/dia",
    agents: "Até 5",
    highlight: false,
    comingSoon: true,
    features: [
      { name: "Agente IA WhatsApp 24/7", included: true },
      { name: "CRM Gestão de Leads + App Mobile", included: true },
      { name: "Agendamento de visitas", included: true },
      { name: "Qualificação de Lead (quente/morno/frio)", included: true },
      { name: "Macros", included: true },
      { name: "Integração portais (todos)", included: true },
      { name: "Widget site (opcional)", included: true },
      { name: "Relatórios completos", included: true },
      { name: "Múltiplos números WhatsApp", included: true },
      { name: "Dashboard customizado", included: true },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    icon: Rocket,
    price: null,
    originalPrice: null,
    badge: null,
    description: "Soluções personalizadas",
    conversations: "Sob consulta",
    conversationsNote: "Volume ilimitado",
    agents: "Até 10+",
    highlight: false,
    comingSoon: true,
    features: [
      { name: "Agente IA WhatsApp 24/7", included: true },
      { name: "CRM Gestão de Leads + App Mobile", included: true },
      { name: "Agendamento de visitas", included: true },
      { name: "Qualificação de Lead (quente/morno/frio)", included: true },
      { name: "Macros", included: true },
      { name: "Integração portais (todos + customizados)", included: true },
      { name: "Widget site (opcional)", included: true },
      { name: "Relatórios completos + customizados", included: true },
      { name: "Múltiplos números WhatsApp", included: true },
      { name: "Dashboard customizado", included: true },
      { name: "SDR por áudio (IA)", included: true },
      { name: "SLA prioritário", included: true },
    ],
  },
];

// Features para tabela comparativa
const comparisonFeatures = [
  { name: "Agente IA WhatsApp 24/7", starter: true, pro: true, business: true, enterprise: true },
  { name: "CRM + App Mobile", starter: true, pro: true, business: true, enterprise: true },
  { name: "Agendamento de visitas", starter: true, pro: true, business: true, enterprise: true },
  { name: "Qualificação de Lead", starter: true, pro: true, business: true, enterprise: true },
  { name: "Macros", starter: true, pro: true, business: true, enterprise: true },
  { name: "Widget site", starter: "Opcional", pro: "Opcional", business: "Opcional", enterprise: "Opcional" },
  { name: "Conversas/mês", starter: "500", pro: "2.000", business: "5.000", enterprise: "Sob consulta" },
  { name: "Atendentes IA", starter: "1", pro: "2", business: "5", enterprise: "10+" },
  { name: "Integração portais básicos", starter: true, pro: true, business: true, enterprise: true },
  { name: "Integração ZAP/VivaReal/OLX", starter: false, pro: false, business: true, enterprise: true },
  { name: "Relatórios completos", starter: false, pro: true, business: true, enterprise: true },
  { name: "Múltiplos WhatsApp", starter: false, pro: false, business: true, enterprise: true },
  { name: "Dashboard customizado", starter: false, pro: false, business: true, enterprise: true },
  { name: "SDR por áudio (IA)", starter: false, pro: false, business: false, enterprise: true },
  { name: "SLA prioritário", starter: false, pro: false, business: false, enterprise: true },
];

// Modal Component
function PlanModal({ 
  plan, 
  isOpen, 
  onClose 
}: { 
  plan: typeof plans[0] | null; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  if (!isOpen || !plan) return null;

  const Icon = plan.icon;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-slate-900 border border-slate-700 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg ${plan.highlight ? 'bg-cyan-500/20' : 'bg-slate-700'}`}>
              <Icon className={`w-6 h-6 ${plan.highlight ? 'text-cyan-400' : 'text-slate-300'}`} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <p className="text-slate-400 text-sm">{plan.description}</p>
            </div>
          </div>
          
          <div className="mt-4">
            {plan.price ? (
              <div className="flex items-baseline gap-2">
                {plan.originalPrice && (
                  <span className="text-slate-500 line-through text-lg">
                    R$ {plan.originalPrice}
                  </span>
                )}
                <span className="text-4xl font-black text-white">
                  R$ {plan.price}
                </span>
                <span className="text-slate-400">/mês</span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-white">Sob consulta</span>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="p-6">
          <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
            O que está incluso
          </h4>
          <ul className="space-y-3">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                {feature.included ? (
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                ) : (
                  <X className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                )}
                <span className={feature.included ? 'text-slate-200' : 'text-slate-500'}>
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>

          {/* Métricas */}
          <div className="mt-6 p-4 bg-slate-800/50 rounded-xl">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-slate-400 text-sm">Conversas</p>
                <p className="text-white font-bold">{plan.conversations}</p>
                <p className="text-slate-500 text-xs">{plan.conversationsNote}</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm">Atendentes IA</p>
                <p className="text-white font-bold">{plan.agents}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-700 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 transition"
          >
            Fechar
          </button>
          {!plan.comingSoon && (
            <button
              onClick={() => {
                onClose();
                openChatwoot();
              }}
              className="flex-1 px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition"
            >
              Contratar
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

// Plan Card Component
function PlanCard({ 
  plan, 
  onSaibaMais 
}: { 
  plan: typeof plans[0]; 
  onSaibaMais: () => void;
}) {
  const Icon = plan.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative rounded-2xl p-6 ${
        plan.comingSoon 
          ? 'bg-slate-800/30 border border-slate-700/50' 
          : plan.highlight 
            ? 'bg-gradient-to-b from-cyan-500/10 to-blue-600/10 border-2 border-cyan-500/50' 
            : 'bg-slate-800/50 border border-slate-700'
      } ${plan.comingSoon ? 'opacity-60' : ''}`}
    >
      {/* Badge */}
      {plan.comingSoon ? (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 text-xs font-semibold bg-slate-700 text-slate-300 rounded-full">
            🔜 Em breve
          </span>
        </div>
      ) : plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full whitespace-nowrap ${
            plan.highlight 
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' 
              : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
          }`}>
            {plan.badge}
          </span>
        </div>
      )}

      {/* Icon & Name */}
      <div className="flex items-center gap-3 mt-2 mb-4">
        <div className={`p-2 rounded-lg ${plan.highlight ? 'bg-cyan-500/20' : 'bg-slate-700'}`}>
          <Icon className={`w-6 h-6 ${plan.highlight ? 'text-cyan-400' : 'text-slate-300'}`} />
        </div>
        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
      </div>

      {/* Price */}
      <div className="mb-4">
        {plan.price ? (
          <div className="flex items-baseline gap-2">
            {plan.originalPrice && (
              <span className="text-slate-500 line-through text-sm">
                R$ {plan.originalPrice}
              </span>
            )}
            <span className="text-3xl font-black text-white">
              R$ {plan.price}
            </span>
            <span className="text-slate-400 text-sm">/mês</span>
          </div>
        ) : (
          <span className="text-2xl font-bold text-white">Sob consulta</span>
        )}
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm mb-4">{plan.description}</p>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-slate-900/50 rounded-lg p-3">
          <p className="text-slate-500 text-xs">Conversas</p>
          <p className="text-white font-semibold">{plan.conversations}</p>
        </div>
        <div className="bg-slate-900/50 rounded-lg p-3">
          <p className="text-slate-500 text-xs">Atendentes</p>
          <p className="text-white font-semibold">{plan.agents}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-2">
        {plan.comingSoon ? (
          <button
            disabled
            className="w-full px-4 py-3 rounded-xl bg-slate-700/50 text-slate-500 font-semibold cursor-not-allowed"
          >
            Em breve
          </button>
        ) : (
          <button
            onClick={() => openChatwoot()}
            className={`w-full px-4 py-3 rounded-xl font-semibold transition ${
              plan.highlight
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-lg hover:shadow-cyan-500/25'
                : 'bg-slate-700 text-white hover:bg-slate-600'
            }`}
          >
            Falar com especialista
          </button>
        )}
        <button
          onClick={onSaibaMais}
          className="w-full px-4 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-700/50 transition text-sm flex items-center justify-center gap-1"
        >
          <Info className="w-4 h-4" />
          Saiba mais
        </button>
      </div>
    </motion.div>
  );
}

// Comparison Table Component
function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4 text-slate-400 font-medium">Feature</th>
            <th className="p-4 text-center text-white font-semibold">Starter</th>
            <th className="p-4 text-center text-cyan-400 font-semibold bg-cyan-500/5">Pro</th>
            <th className="p-4 text-center text-slate-500 font-semibold">Business</th>
            <th className="p-4 text-center text-slate-500 font-semibold">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {comparisonFeatures.map((feature, idx) => (
            <tr key={idx} className="border-t border-slate-800">
              <td className="p-4 text-slate-300">{feature.name}</td>
              <td className="p-4 text-center">
                {renderCell(feature.starter)}
              </td>
              <td className="p-4 text-center bg-cyan-500/5">
                {renderCell(feature.pro)}
              </td>
              <td className="p-4 text-center">
                {renderCell(feature.business)}
              </td>
              <td className="p-4 text-center">
                {renderCell(feature.enterprise)}
              </td>
            </tr>
          ))}
          <tr className="border-t border-slate-700">
            <td className="p-4 text-white font-semibold">Preço</td>
            <td className="p-4 text-center">
              <div>
                <span className="text-slate-500 line-through text-sm">R$ 297</span>
                <br />
                <span className="text-white font-bold">R$ 197/mês</span>
              </div>
            </td>
            <td className="p-4 text-center bg-cyan-500/5">
              <span className="text-white font-bold">R$ 497/mês</span>
            </td>
            <td className="p-4 text-center">
              <span className="text-slate-500">R$ 997/mês</span>
              <br />
              <span className="text-xs text-slate-600">Em breve</span>
            </td>
            <td className="p-4 text-center">
              <span className="text-slate-500">Sob consulta</span>
              <br />
              <span className="text-xs text-slate-600">Em breve</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function renderCell(value: boolean | string) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="w-5 h-5 text-green-400 mx-auto" />
    ) : (
      <X className="w-5 h-5 text-slate-600 mx-auto" />
    );
  }
  return <span className="text-slate-300 text-sm">{value}</span>;
}

// Main Page Component
export default function NexaBotPage() {
  const [selectedPlan, setSelectedPlan] = useState<typeof plans[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaibaMais = (plan: typeof plans[0]) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const scrollToComparison = () => {
    document.getElementById("comparativo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <AuroraBackground>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">
                Agentes IA para Corretores
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
              NexaBot
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              Atendimento 24/7 com Inteligência Artificial. 
              Qualifique leads, agende visitas e nunca perca uma oportunidade.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => openChatwoot()}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition flex items-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                Falar com especialista
              </button>
              <button
                onClick={scrollToComparison}
                className="px-8 py-4 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-800 transition flex items-center gap-2"
              >
                Comparar planos
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Plans Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Escolha seu plano
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Todos os planos incluem suporte, atualizações e garantia de 7 dias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onSaibaMais={() => handleSaibaMais(plan)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="comparativo" className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comparativo de Planos
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Veja em detalhes o que cada plano oferece
            </p>
          </div>

          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 overflow-hidden">
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para automatizar seu atendimento?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Fale com um especialista e descubra como o NexaBot pode 
            transformar seu negócio imobiliário.
          </p>
          <button
            onClick={() => openChatwoot()}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition inline-flex items-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            Começar agora
          </button>
        </div>
      </section>

      {/* Modal */}
      <PlanModal
        plan={selectedPlan}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
