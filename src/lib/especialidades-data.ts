// Dados das páginas de MPI (Marketing de Posição para Internet)
// Cada especialidade é uma página de cauda longa otimizada para SEO

export interface Especialidade {
  slug: string;
  titulo: string;
  subtitulo: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  categoria: "sites" | "sistemas" | "automacao" | "marketing";
  heroText: string;
  sections: {
    titulo: string;
    conteudo: string;
  }[];
  beneficios: string[];
  cta: {
    titulo: string;
    texto: string;
  };
}

export const CATEGORIAS_ESPECIALIDADES = {
  sites: {
    nome: "Sites & Landing Pages",
    descricao: "Criação de sites profissionais para diversos segmentos",
    icone: "Globe",
  },
  sistemas: {
    nome: "Sistemas & Aplicativos",
    descricao: "Desenvolvimento de software sob medida",
    icone: "Code",
  },
  automacao: {
    nome: "Automação & IA",
    descricao: "Chatbots, automações e inteligência artificial",
    icone: "Bot",
  },
  marketing: {
    nome: "Marketing Digital",
    descricao: "SEO, tráfego pago e presença digital",
    icone: "TrendingUp",
  },
};

// Importar dados do JSON (evita bug do SWC com arquivos grandes)
import especialidadesJson from './especialidades.json';

export const ESPECIALIDADES: Especialidade[] = especialidadesJson as Especialidade[];
