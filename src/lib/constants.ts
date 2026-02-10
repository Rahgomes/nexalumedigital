import {
  Monitor,
  Database,
  TrendingUp,
  Shield,
  Brain,
  Handshake,
  Linkedin,
  Instagram,
  Layers,
  Zap,
  Settings,
} from "lucide-react";
import type {
  NavLink,
  ServiceCardData,
  DifferentialData,
  CaseCardData,
  FooterLinkGroup,
  SocialLink,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Serviços", href: "#services" },
  { label: "Sobre Nós", href: "#why" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contact" },
];

export const SERVICES: ServiceCardData[] = [
  {
    icon: Monitor,
    title: "Presença Digital",
    description:
      "Colocamos sua marca na frente das pessoas certas, com sites, conteúdo e estrutura pensados para gerar negócios.",
    features: [
      "Sites institucionais rápidos e responsivos",
      "Páginas de captura e portais otimizados",
      "SEO básico e preparo para campanhas",
    ],
  },
  {
    icon: Database,
    title: "Sistemas Corporativos",
    description:
      "Desenvolvemos sistemas sob medida para organizar processos, dados e operações do seu negócio.",
    features: [
      "ERPs e CRMs personalizados",
      "Gestão e orquestração de APIs",
      "Infraestrutura em cloud segura e escalável",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth & IA",
    description:
      "Usamos automação e IA para aumentar conversão, melhorar atendimento e apoiar decisões com dados.",
    features: [
      "Assistentes de atendimento com IA",
      "Automação de funis e rotinas de vendas",
      "Análises e dashboards orientados a dados",
    ],
  },
  {
    icon: Layers,
    title: "Micro SaaS sob Demanda",
    description:
      "Criamos produtos digitais recorrentes para nichos específicos, prontos para escalar e gerar receita.",
    features: [
      "Do conceito ao primeiro produto utilizável (MVP)",
      "Arquitetura SaaS pronta para crescer",
      "Modelos de assinatura e cobrança recorrente",
    ],
  },
  {
    icon: Zap,
    title: "Integrações & Automações",
    description:
      "Fazemos seus sistemas conversarem entre si, eliminando tarefas manuais e retrabalho.",
    features: [
      "Fluxos avançados com n8n e APIs",
      "Sincronização de dados entre plataformas",
      "Automação de processos internos e atendimento",
    ],
  },
  {
    icon: Settings,
    title: "Software Sob Medida",
    description:
      "Aplicações web desenhadas para o seu fluxo de trabalho, sem excesso nem falta de funcionalidade.",
    features: [
      "Portais, painéis, CRMs e ERPs personalizados",
      "Experiência do usuário pensada com o time de operação",
      "Stack moderna alinhada à realidade do projeto",
    ],
  },
];

export const DIFFERENTIALS: DifferentialData[] = [
  {
    icon: Shield,
    title: "Base Sólida e Segura",
    description:
      "Construímos a fundação digital do seu negócio com infraestrutura robusta, segurança de dados e alta disponibilidade.",
  },
  {
    icon: Brain,
    title: "Inteligência Aplicada",
    description:
      "Vamos além do código: usamos IA para analisar dados, otimizar processos e criar soluções que geram resultados reais.",
  },
  {
    icon: Handshake,
    title: "Parceria de Valor",
    description:
      "Somos seu time de tecnologia e marketing, focados em crescimento, ROI e na evolução contínua do seu projeto.",
  },
];

export const CASES: CaseCardData[] = [
  {
    metric: "+67% FATURAMENTO",
    client: "Fintech Vision - Automação IA",
    description:
      "Implementação de rede neural para análise de risco em tempo real.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCk5JgS5PSYZvv63HnoBFxuypYruuSa3eTj3oRmk9T9ZDcWxxVBXM0OKW0iLeE0Eig7-TPX-UY8cjtFt19BlqJRyLcm2bFUnBvRbW9Ocq90mszs-RIx1fkKPCd7DcLP8VngRmBuVfK3RgYo5_bc5nUmzDsT2IgwoWNm7izETW6uji9XtkCF8t4_UN369BCYz5NcAHv4vzsrjX9Iif7am8fxPS81-sXlPYhrGnCIpd-lSc7zjuvDW4tyfpIF3_7jEGBekNCUVqbh_V3x",
    imageAlt: "Data visualization dashboard on a computer screen",
  },
  {
    metric: "-40% CUSTO OP.",
    client: "Logistics Pro - ERP Custom",
    description:
      "Migração completa de infraestrutura para sistemas em nuvem de alta performance.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtWvHnucoMVpZXyXJ6n6AcPTMXQ8xUT6IBEdCH_QyawRXoOvxOd9ks6kteNF4f3YYOIRX_FimSI8zezhDxZGW0TCmXyfBshXRRlaEC7jJpsnxGc2WsfnyLVkLP31POwSNuaApz7RSckV03XIxJfHhWsW8r6DSaOmcdiq-8Olp6P2efSpR7gnj-BMzLKjkyPYDuxKxIs1ciALbNsmysaxl5ulC90EH_TSdZQEoFyFROH-v-s7caDDkC9jNS2hpzS_0WyId0yr-Tcqw6",
    imageAlt: "Software engineering team collaborating in a modern office",
  },
];

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: "Links Rápidos",
    links: [
      { label: "Home", href: "/" },
      { label: "Soluções", href: "/solucoes" },
      { label: "Cases", href: "#cases" },
      { label: "Sobre Nós", href: "#why" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Presença Digital", href: "/solucoes/presenca-digital" },
      { label: "Growth AI", href: "/solucoes/growth-ai" },
      {
        label: "Sistemas Corporativos",
        href: "/solucoes/sistemas-corporativos",
      },
      { label: "Micro SaaS", href: "/solucoes/micro-saas" },
    ],
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
];

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511999999999";
export const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  "Olá! Gostaria de saber mais sobre os serviços da Nexalume.";

export const HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCgME9tbwiSX0sFryq9zwhREgib5eCF7FmoENRzv8Z1qTSc--njgaK7FTHVqnJ9eZhuVqQEo5ZiSGoImolxO8mGDkCwfPqoI_zsekiypmwPaIy0_Rrke8l-_FYtRZWS0ebokxfK4pM51COu5mE18ZBTU4uu47I2tzsnSYQnn-KmLSA72IcF5YEyqU8yKUz6TzQCYJNfCEa-rD3yaIZ7N_b0ro3U383kFPnE4Pl2vDG4kSuYYJbpcSolXiMsEvpsYx0kJjWEq6IV2uOa";
