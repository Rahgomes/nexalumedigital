"use client";
import Script from "next/script";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Search, MapPin, Bed, Bath, Car, Ruler, X, MessageCircle, ChevronDown, Building2, Home, Check } from "lucide-react";

// Cores da Nexa Lume
const colors = {
  blue: "#00A3FF",
  cyan: "#00D4FF",
  dark: "#0A0F1C",
  darkLighter: "#111827",
  darkCard: "#151C2C",
};

// Dados fictícios dos imóveis
const imoveis = [
  {
    id: 1,
    tipo: "Apartamento",
    titulo: "Apartamento Garden em Pinheiros",
    endereco: "Rua dos Pinheiros, 450 - Pinheiros",
    preco: 850000,
    area: 72,
    quartos: 2,
    banheiros: 2,
    vagas: 1,
    imagem: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&h=400&fit=crop",
    destaque: true,
  },
  {
    id: 2,
    tipo: "Casa",
    titulo: "Casa com Piscina no Butantã",
    endereco: "Rua Jorge Americano, 120 - Butantã",
    preco: 1250000,
    area: 180,
    quartos: 4,
    banheiros: 3,
    vagas: 2,
    imagem: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    destaque: false,
  },
  {
    id: 3,
    tipo: "Apartamento",
    titulo: "Studio Moderno na Lapa",
    endereco: "Av. Lapa, 890 - Lapa",
    preco: 420000,
    area: 35,
    quartos: 1,
    banheiros: 1,
    vagas: 1,
    imagem: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
    destaque: false,
  },
  {
    id: 4,
    tipo: "Apartamento",
    titulo: "Cobertura Duplex Perdizes",
    endereco: "Rua Monte Alegre, 1500 - Perdizes",
    preco: 2100000,
    area: 220,
    quartos: 4,
    banheiros: 4,
    vagas: 3,
    imagem: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
    destaque: true,
  },
  {
    id: 5,
    tipo: "Casa",
    titulo: "Casa Térrea Alto da Lapa",
    endereco: "Rua Iquiririm, 80 - Alto da Lapa",
    preco: 1800000,
    area: 250,
    quartos: 3,
    banheiros: 4,
    vagas: 4,
    imagem: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
    destaque: false,
  },
  {
    id: 6,
    tipo: "Apartamento",
    titulo: "Apartamento Vila Madalena",
    endereco: "Rua Harmonia, 320 - Vila Madalena",
    preco: 780000,
    area: 65,
    quartos: 2,
    banheiros: 1,
    vagas: 1,
    imagem: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    destaque: false,
  },
];

// Formatar preço
const formatPrice = (value: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// Webhook URL do n8n (placeholder - substituir pelo real)
const N8N_WEBHOOK_URL = "https://n8n.ramongomessilva.com.br/webhook/demo-corretor-lead";

export default function DemoCorretorPage() {
  const [showForm, setShowForm] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  

  // Verificar localStorage ao carregar
  useEffect(() => {
    const saved = localStorage.getItem("zoImoveisUser");
    if (saved) {
      const userData = JSON.parse(saved);
      setFormData(userData);
      setIsRegistered(true);
    }
  }, []);

  // Abrir formulário ou chat
  const handleChatClick = () => {
    if (isRegistered) {
      if (typeof window !== 'undefined' && (window as any).$chatwoot) {
        (window as any).$chatwoot.toggle("open");
      }
    } else {
      setShowForm(true);
    }
  };

  // Submeter formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Salvar no localStorage
      localStorage.setItem("zoImoveisUser", JSON.stringify(formData));

      // Enviar para webhook n8n
      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: "demo-corretor",
        }),
      }).catch(() => {
        // Silenciar erro de webhook para não quebrar UX
        console.log("Webhook não disponível (modo demo)");
      });

      setIsRegistered(true);
      setShowForm(false);
      if(window.$chatwoot) window.$chatwoot.toggle("open");
    } catch (error) {
      console.error("Erro ao enviar:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Verificar email (simulação de "já tenho cadastro")
  const handleEmailCheck = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular verificação
    setTimeout(() => {
      // Salvar email no localStorage
      localStorage.setItem("zoImoveisUser", JSON.stringify({ email: formData.email }));
      setIsRegistered(true);
      setShowForm(false);
      if(window.$chatwoot) window.$chatwoot.toggle("open");
      setIsSubmitting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.dark }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10" style={{ backgroundColor: `${colors.dark}ee`, backdropFilter: "blur(12px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8" style={{ color: colors.cyan }} />
              <span className="text-xl font-bold text-white">
                Zona Oeste <span style={{ color: colors.cyan }}>Imóveis</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
              <a href="#" className="hover:text-white transition">Comprar</a>
              <a href="#" className="hover:text-white transition">Alugar</a>
              <a href="#" className="hover:text-white transition">Lançamentos</a>
              <a href="#" className="hover:text-white transition">Sobre</a>
            </nav>
            <button
              onClick={handleChatClick}
              className="px-4 py-2 rounded-lg font-medium transition text-white flex items-center gap-2"
              style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})` }}
            >
              <MessageCircle className="w-4 h-4" />
              Falar com corretor
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: colors.blue }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl"
            style={{ backgroundColor: colors.cyan }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Encontre seu imóvel ideal na{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})` }}>
              Zona Oeste
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Os melhores apartamentos e casas em Pinheiros, Vila Madalena, Perdizes, Lapa e região.
          </p>

          {/* Barra de busca fake */}
          <div
            className="max-w-4xl mx-auto p-2 rounded-2xl border border-white/10"
            style={{ backgroundColor: colors.darkCard }}
          >
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por bairro, rua ou condomínio..."
                  className="w-full bg-transparent text-white placeholder-gray-500 outline-none"
                />
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 cursor-pointer">
                <Home className="w-5 h-5 text-gray-400" />
                <span className="text-gray-400">Tipo</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 cursor-pointer">
                <span className="text-gray-400">Quartos</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <button
                className="px-8 py-3 rounded-xl font-semibold text-white transition hover:opacity-90"
                style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})` }}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Imóveis */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Imóveis em destaque
            </h2>
            <span className="text-gray-400 text-sm">{imoveis.length} imóveis encontrados</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imoveis.map((imovel) => (
              <div
                key={imovel.id}
                className="group rounded-2xl overflow-hidden border border-white/10 transition-all duration-300 hover:border-white/20 hover:-translate-y-1"
                style={{ backgroundColor: colors.darkCard }}
              >
                {/* Imagem */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={imovel.imagem}
                    alt={imovel.titulo}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {imovel.destaque && (
                    <span
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ backgroundColor: colors.blue }}
                    >
                      Destaque
                    </span>
                  )}
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium bg-black/60 text-white">
                    {imovel.tipo}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1">
                    {imovel.titulo}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-400 text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="line-clamp-1">{imovel.endereco}</span>
                  </div>

                  {/* Features */}
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{imovel.quartos}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bath className="w-4 h-4" />
                      <span>{imovel.banheiros}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Car className="w-4 h-4" />
                      <span>{imovel.vagas}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Ruler className="w-4 h-4" />
                      <span>{imovel.area}m²</span>
                    </div>
                  </div>

                  {/* Preço */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <span
                      className="text-xl font-bold"
                      style={{ color: colors.cyan }}
                    >
                      {formatPrice(imovel.preco)}
                    </span>
                    <button
                      onClick={handleChatClick}
                      className="px-4 py-2 rounded-lg text-sm font-medium transition hover:opacity-90 text-white"
                      style={{ backgroundColor: colors.blue }}
                    >
                      Ver detalhes
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quer ajuda para encontrar o imóvel perfeito?
          </h2>
          <p className="text-gray-400 mb-8">
            Nosso corretor virtual está disponível 24h para ajudar você a encontrar o imóvel dos seus sonhos.
          </p>
          <button
            onClick={handleChatClick}
            className="px-8 py-4 rounded-xl font-semibold text-white text-lg transition hover:opacity-90 inline-flex items-center gap-2"
            style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})` }}
          >
            <MessageCircle className="w-5 h-5" />
            Conversar com corretor
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6" style={{ color: colors.cyan }} />
              <span className="text-white font-semibold">Zona Oeste Imóveis</span>
            </div>
            <p className="text-gray-500 text-sm">
              Powered by{" "}
              <a
                href="https://nexalume.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
                style={{ color: colors.cyan }}
              >
                Nexa Lume Digital
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Modal de Cadastro */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div
            className="relative w-full max-w-md rounded-2xl p-6 border border-white/10"
            style={{ backgroundColor: colors.darkCard }}
          >
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <MessageCircle className="w-12 h-12 mx-auto mb-4" style={{ color: colors.cyan }} />
              <h3 className="text-xl font-bold text-white">
                {hasAccount ? "Bem-vindo de volta!" : "Fale com nosso corretor"}
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                {hasAccount
                  ? "Digite seu email para continuar"
                  : "Preencha seus dados para iniciar a conversa"}
              </p>
            </div>

            {hasAccount ? (
              // Form simplificado para quem já tem conta
              <form onSubmit={handleEmailCheck} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-white/30 transition"
                    placeholder="seu@email.com"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
                  style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})` }}
                >
                  {isSubmitting ? "Verificando..." : "Continuar"}
                </button>
                <button
                  type="button"
                  onClick={() => setHasAccount(false)}
                  className="w-full text-sm text-gray-400 hover:text-white transition"
                >
                  ← Criar nova conta
                </button>
              </form>
            ) : (
              // Form completo para novos usuários
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Nome completo</label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-white/30 transition"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-white/30 transition"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-white/30 transition"
                    placeholder="(11) 99999-9999"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
                  style={{ background: `linear-gradient(135deg, ${colors.blue}, ${colors.cyan})` }}
                >
                  {isSubmitting ? "Enviando..." : "Iniciar conversa"}
                </button>
                <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-400 hover:text-white transition">
                  <input
                    type="checkbox"
                    checked={hasAccount}
                    onChange={(e) => setHasAccount(e.target.checked)}
                    className="w-4 h-4 rounded border-white/20 bg-white/5"
                  />
                  Já tenho cadastro
                </label>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Widget Chatwoot - carrega após registro */}
      {isRegistered && (
        <Script
          id="chatwoot-widget"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,t) {
                var BASE_URL="https://chat.nexalumedigital.com.br";
                var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                g.src=BASE_URL+"/packs/js/sdk.js";
                g.defer = true;
                g.async = true;
                s.parentNode.insertBefore(g,s);
                g.onload=function(){
                  window.chatwootSDK.run({
                    websiteToken: 'N1UL15gRqV2t8ciqHVSmFnQM',
                    baseUrl: BASE_URL
                  });
                  window.addEventListener('chatwoot:ready', function() {
                    const userData = JSON.parse(localStorage.getItem('zoImoveisUser') || '{}');
                    if (userData.nome) {
                      window.$chatwoot.setUser(userData.email, {
                        name: userData.nome,
                        phone_number: userData.whatsapp
                      });
                    }
                  });
                }
              })(document,"script");
            `,
          }}
        />
      )}

      
    </div>
  );
}
