import {
  Monitor,
  Database,
  TrendingUp,
  Shield,
  Brain,
  Handshake,
  Linkedin,
  Instagram,
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
  { label: "Servicos", href: "#services" },
  { label: "Sobre Nos", href: "#why" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contact" },
];

export const SERVICES: ServiceCardData[] = [
  {
    icon: Monitor,
    title: "Digital Presence",
    description:
      "UX/UI Design de vanguarda e Web Development focado em conversao e experiencia do usuario.",
    features: [
      "Sites Institucionais",
      "E-commerce de Performance",
      "Portais & Landing Pages",
    ],
  },
  {
    icon: Database,
    title: "Corporate Systems",
    description:
      "Sistemas robustos e arquitetura escalavel para gerenciar processos complexos com seguranca.",
    features: [
      "ERPs Customizados",
      "Gestao de APIs",
      "Infraestrutura Cloud",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth AI",
    description:
      "Automacao inteligente e modelos de IA personalizados para otimizar vendas e atendimento.",
    features: [
      "Agentes IA de Atendimento",
      "Automacao de Workflows",
      "Data Intelligence",
    ],
  },
];

export const DIFFERENTIALS: DifferentialData[] = [
  {
    icon: Shield,
    title: "Infraestrutura Resiliente",
    description:
      "Seguranca de dados e alta disponibilidade em todos os niveis do seu projeto digital.",
  },
  {
    icon: Brain,
    title: "Cerebro Artificial",
    description:
      "Nao apenas codigo, mas logica aplicada para prever demandas e otimizar conversoes.",
  },
  {
    icon: Handshake,
    title: "Parceria Estrategica",
    description:
      "Atuamos como seu braco tecnologico, focando no ROI e crescimento escalavel.",
  },
];

export const CASES: CaseCardData[] = [
  {
    metric: "+67% FATURAMENTO",
    client: "Fintech Vision - Automacao IA",
    description:
      "Implementacao de rede neural para analise de risco em tempo real.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCk5JgS5PSYZvv63HnoBFxuypYruuSa3eTj3oRmk9T9ZDcWxxVBXM0OKW0iLeE0Eig7-TPX-UY8cjtFt19BlqJRyLcm2bFUnBvRbW9Ocq90mszs-RIx1fkKPCd7DcLP8VngRmBuVfK3RgYo5_bc5nUmzDsT2IgwoWNm7izETW6uji9XtkCF8t4_UN369BCYz5NcAHv4vzsrjX9Iif7am8fxPS81-sXlPYhrGnCIpd-lSc7zjuvDW4tyfpIF3_7jEGBekNCUVqbh_V3x",
    imageAlt: "Data visualization dashboard on a computer screen",
  },
  {
    metric: "-40% CUSTO OP.",
    client: "Logistics Pro - ERP Custom",
    description:
      "Migracao completa de infraestrutura para sistemas em nuvem de alta performance.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtWvHnucoMVpZXyXJ6n6AcPTMXQ8xUT6IBEdCH_QyawRXoOvxOd9ks6kteNF4f3YYOIRX_FimSI8zezhDxZGW0TCmXyfBshXRRlaEC7jJpsnxGc2WsfnyLVkLP31POwSNuaApz7RSckV03XIxJfHhWsW8r6DSaOmcdiq-8Olp6P2efSpR7gnj-BMzLKjkyPYDuxKxIs1ciALbNsmysaxl5ulC90EH_TSdZQEoFyFROH-v-s7caDDkC9jNS2hpzS_0WyId0yr-Tcqw6",
    imageAlt: "Software engineering team collaborating in a modern office",
  },
];

export const FOOTER_LINKS: FooterLinkGroup[] = [
  {
    title: "Links Rapidos",
    links: [
      { label: "Home", href: "#" },
      { label: "Cases", href: "#cases" },
      { label: "Sobre Nos", href: "#why" },
      { label: "Carreiras", href: "#" },
    ],
  },
  {
    title: "Servicos",
    links: [
      { label: "Web Development", href: "#services" },
      { label: "Agentes IA", href: "#services" },
      { label: "UI/UX Design", href: "#services" },
      { label: "Cloud Systems", href: "#services" },
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
  "Ola! Gostaria de saber mais sobre os servicos da Nexalume.";

export const HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCgME9tbwiSX0sFryq9zwhREgib5eCF7FmoENRzv8Z1qTSc--njgaK7FTHVqnJ9eZhuVqQEo5ZiSGoImolxO8mGDkCwfPqoI_zsekiypmwPaIy0_Rrke8l-_FYtRZWS0ebokxfK4pM51COu5mE18ZBTU4uu47I2tzsnSYQnn-KmLSA72IcF5YEyqU8yKUz6TzQCYJNfCEa-rD3yaIZ7N_b0ro3U383kFPnE4Pl2vDG4kSuYYJbpcSolXiMsEvpsYx0kJjWEq6IV2uOa";
