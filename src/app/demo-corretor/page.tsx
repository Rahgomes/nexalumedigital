"use client";

import Script from "next/script";
import Image from "next/image";
import { Search, MapPin, Bed, Ruler, MessageCircle, ChevronDown, Building2, Home, Sparkles } from "lucide-react";

// Cores claras - estilo grandes imobiliárias
const colors = {
  primary: "#6366F1",    // Indigo
  secondary: "#8B5CF6",  // Violet  
  accent: "#10B981",     // Emerald
  dark: "#1F2937",
  gray: "#6B7280",
  lightGray: "#F3F4F6",
  white: "#FFFFFF",
};

// 6 Imóveis REAIS do banco de dados Loft
const imoveis = [
  {
    id: "p6tubwph",
    tipo: "Apartamento",
    titulo: "Apartamento Espaçoso em Mirandópolis",
    bairro: "Mirandópolis",
    cidade: "São Paulo",
    preco: 1550000,
    area: 226,
    quartos: 4,
    imagem: "https://content.loft.com.br/homes/p6tubwph/banner_thumbnail.jpg",
  },
  {
    id: "djlbg51u",
    tipo: "Apartamento",
    titulo: "Apartamento Amplo em Santa Cecília",
    bairro: "Santa Cecília",
    cidade: "São Paulo",
    preco: 1850000,
    area: 253,
    quartos: 3,
    imagem: "https://content.loft.com.br/homes/djlbg51u/banner_thumbnail.jpg",
  },
  {
    id: "16i36w3",
    tipo: "Apartamento",
    titulo: "Apartamento Charmoso na Vila Madalena",
    bairro: "Vila Madalena",
    cidade: "São Paulo",
    preco: 1670000,
    area: 169,
    quartos: 3,
    imagem: "https://content.loft.com.br/homes/16i36w3/banner_thumbnail.jpg",
  },
  {
    id: "bahca7eh",
    tipo: "Apartamento",
    titulo: "Apartamento Familiar no Jardim Londrina",
    bairro: "Jardim Londrina",
    cidade: "São Paulo",
    preco: 1000500,
    area: 277,
    quartos: 4,
    imagem: "https://content.loft.com.br/homes/bahca7eh/banner_thumbnail.jpg",
  },
  {
    id: "a2dm716j",
    tipo: "Apartamento",
    titulo: "Apartamento com Vista no Jardim Londrina",
    bairro: "Jardim Londrina",
    cidade: "São Paulo",
    preco: 1070000,
    area: 277,
    quartos: 4,
    imagem: "https://content.loft.com.br/homes/a2dm716j/banner_thumbnail.jpg",
  },
  {
    id: "12x1hcrb",
    tipo: "Apartamento",
    titulo: "Apartamento Moderno Vila Dom Pedro I",
    bairro: "Vila Dom Pedro I",
    cidade: "São Paulo",
    preco: 956000,
    area: 115,
    quartos: 2,
    imagem: "https://content.loft.com.br/homes/12x1hcrb/banner_thumbnail.jpg",
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

// Abrir Chatwoot
const openChat = () => {
  if (typeof window !== "undefined" && (window as any).$chatwoot) {
    (window as any).$chatwoot.toggle("open");
  }
};

export default function DemoCorretorPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">
                Nexa Demo <span className="text-indigo-600">Imóveis</span>
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
              <a href="#" className="hover:text-indigo-600 transition font-medium">Comprar</a>
              <a href="#" className="hover:text-indigo-600 transition font-medium">Alugar</a>
              <a href="#" className="hover:text-indigo-600 transition font-medium">Lançamentos</a>
              <a href="#" className="hover:text-indigo-600 transition font-medium">Sobre</a>
            </nav>
            <button
              onClick={openChat}
              className="px-5 py-2.5 rounded-full font-semibold text-white transition-all hover:shadow-lg hover:scale-105 cursor-pointer flex items-center gap-2"
              style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
            >
              <MessageCircle className="w-4 h-4" />
              Falar com corretor
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-violet-50">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Corretor virtual com IA
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Encontre seu imóvel ideal em{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
              São Paulo
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Os melhores apartamentos e casas em São Paulo e Grande SP.
          </p>

          {/* Barra de busca */}
          <div className="max-w-4xl mx-auto bg-white p-2 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Buscar por bairro, rua ou condomínio..."
                  className="w-full bg-transparent text-gray-900 placeholder-gray-400 outline-none"
                />
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                <Home className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">Tipo</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition cursor-pointer">
                <span className="text-gray-600">Quartos</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
              <button
                className="px-8 py-3 rounded-xl font-semibold text-white transition-all hover:shadow-lg cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Imóveis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Imóveis em destaque
            </h2>
            <span className="text-gray-500 text-sm">{imoveis.length} imóveis encontrados</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {imoveis.map((imovel, index) => (
              <div
                key={imovel.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Imagem */}
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <Image
                    src={imovel.imagem}
                    alt={imovel.titulo}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {index < 2 && (
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-violet-600">
                      Destaque
                    </span>
                  )}
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-gray-700 shadow-sm">
                    {imovel.tipo}
                  </span>
                </div>

                {/* Conteúdo */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-1">
                    {imovel.titulo}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                    <MapPin className="w-4 h-4 text-indigo-500" />
                    <span>{imovel.bairro}, {imovel.cidade}</span>
                  </div>

                  {/* Features */}
                  <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg">
                      <Bed className="w-4 h-4 text-indigo-500" />
                      <span className="font-medium">{imovel.quartos} quartos</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg">
                      <Ruler className="w-4 h-4 text-indigo-500" />
                      <span className="font-medium">{imovel.area}m²</span>
                    </div>
                  </div>

                  {/* Preço e CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">Valor</p>
                      <span className="text-xl font-bold text-indigo-600">
                        {formatPrice(imovel.preco)}
                      </span>
                    </div>
                    <button
                      onClick={openChat}
                      className="px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:shadow-md hover:scale-105 cursor-pointer flex items-center gap-1.5"
                      style={{ background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Falar com corretor
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-violet-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Atendimento com Inteligência Artificial
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quer ajuda para encontrar o imóvel perfeito?
          </h2>
          <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
            Nosso corretor virtual está disponível 24h para ajudar você a encontrar o imóvel dos seus sonhos com atendimento personalizado.
          </p>
          <button
            onClick={openChat}
            className="px-8 py-4 rounded-full font-semibold text-indigo-600 text-lg bg-white transition-all hover:shadow-xl hover:scale-105 cursor-pointer inline-flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Conversar com corretor
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6 text-indigo-600" />
              <span className="text-gray-900 font-semibold">Nexa Demo Imóveis</span>
            </div>
            <p className="text-gray-500 text-sm">
              Demo desenvolvida por{" "}
              <a
                href="https://nexalumedigital.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 font-semibold hover:text-indigo-700 transition"
              >
                NexaLume Digital
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Widget Chatwoot - sempre disponível */}
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
              }
            })(document,"script");
          `,
        }}
      />
    </div>
  );
}
