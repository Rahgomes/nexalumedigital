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
      "UX/UI Design de vanguarda e Web Development focado em conversão e experiência do usuário.",
    features: [
      "Sites Institucionais",
      "E-commerce de Performance",
      "Portais & Landing Pages",
    ],
  },
  {
    icon: Database,
    title: "Sistemas Corporativos",
    description:
      "Sistemas robustos e arquitetura escalável para gerenciar processos complexos com segurança.",
    features: [
      "ERPs Customizados",
      "Gestão de APIs",
      "Infraestrutura Cloud",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth AI",
    description:
      "Automação inteligente e modelos de IA personalizados para otimizar vendas e atendimento.",
    features: [
      "Agentes IA de Atendimento",
      "Automação de Workflows",
      "Data Intelligence",
    ],
  },
  {
    icon: Layers,
    title: "Micro SaaS sob Demanda",
    description:
      "Soluções SaaS personalizadas para nichos específicos, do zero ao produto com modelo de negócio.",
    features: [
      "Do zero ao produto com modelo de negócio",
      "Infraestrutura completa e escalável",
      "Interface amigável com lógica de recorrência",
    ],
  },
  {
    icon: Zap,
    title: "Integrações e Automações",
    description:
      "Conecte sistemas e automatize processos com eficiência usando n8n e APIs modernas.",
    features: [
      "Especialistas em Notion API e n8n",
      "Automação de processos complexos",
      "Integração entre plataformas e sistemas",
    ],
  },
  {
    icon: Settings,
    title: "Software Sob Medida",
    description:
      "Sistemas criados para resolver desafios específicos da sua operação.",
    features: [
      "Plataformas web, CRMs, ERPs e dashboards",
      "Arquitetura segura, escalável e com foco em UX",
      "Tecnologias modernas adequadas ao seu projeto",
    ],
  },
];

export const DIFFERENTIALS: DifferentialData[] = [
  {
    icon: Shield,
    title: "Infraestrutura Resiliente",
    description:
      "Segurança de dados e alta disponibilidade em todos os níveis do seu projeto digital.",
  },
  {
    icon: Brain,
    title: "Cérebro Artificial",
    description:
      "Não apenas código, mas lógica aplicada para prever demandas e otimizar conversões.",
  },
  {
    icon: Handshake,
    title: "Parceria Estratégica",
    description:
      "Atuamos como seu braço tecnológico, focando no ROI e crescimento escalável.",
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
      { label: "Sistemas Corporativos", href: "/solucoes/sistemas-corporativos" },
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
