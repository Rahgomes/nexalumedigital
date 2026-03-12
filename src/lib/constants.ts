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
  Share2,
  Target,
  Megaphone,
  Palette,
  Video,
  Lightbulb,
  Eye,
  Award,
  Users,
  BarChart3,
  Rocket,
  Clock,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import type {
  NavLink,
  ServiceCardData,
  DifferentialData,
  DifferentialExpandedData,
  CaseCardData,
  CaseExpandedData,
  FooterLinkGroup,
  SocialLink,
  ValueData,
  TimelineData,
  MetricData,
} from "./types";

export const NAV_LINKS: NavLink[] = [
  { label: "Serviços", href: "#services" },
  { label: "Sobre Nós", href: "/sobre" },
  { label: "Cases", href: "/cases" },
  { label: "Contato", href: "/contato" },
];

export const SERVICES: ServiceCardData[] = [
  {
    icon: Monitor,
    title: "Presença Digital",
    description:
      "Sites, lojas virtuais, aplicativos e Google Meu Negócio para colocar sua marca na frente das pessoas certas.",
    features: [
      "Sites, lojas virtuais e landing pages",
      "Aplicativos mobile e Google Meu Negócio",
      "SEO e performance de primeira linha",
    ],
  },
  {
    icon: Share2,
    title: "Mídias Sociais",
    description:
      "Gestão estratégica de Facebook e Instagram com criação de conteúdo e engajamento profissional.",
    features: [
      "Calendário editorial e criação de posts",
      "Gestão de comunidade e SAC social",
      "Estratégias de crescimento orgânico",
    ],
  },
  {
    icon: Target,
    title: "Tráfego Pago",
    description:
      "Campanhas de Google Ads e Meta Ads planejadas para gerar resultados reais e ROI mensurável.",
    features: [
      "Google Ads e Meta Ads otimizados",
      "Remarketing e públicos personalizados",
      "Relatórios detalhados de performance",
    ],
  },
  {
    icon: Megaphone,
    title: "Divulgação & Alcance",
    description:
      "Divulgação em massa em grupos de WhatsApp e Facebook para ampliar a visibilidade do seu negócio.",
    features: [
      "Divulgação em grupos de WhatsApp e Facebook",
      "Segmentação por região e interesse",
      "Automação e agendamento de publicações",
    ],
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    description:
      "Logo, cartões de visita, flyers, catálogos e toda a identidade visual da sua marca.",
    features: [
      "Logotipo e identidade visual completa",
      "Flyers, panfletos e catálogos personalizados",
      "Cartões de visita e banners digitais",
    ],
  },
  {
    icon: Video,
    title: "Produção de Conteúdo",
    description:
      "Criação e edição profissional de imagens e vídeos com inteligência artificial.",
    features: [
      "Edição de vídeos institucionais e comerciais",
      "Criação de imagens com IA",
      "Vídeos para redes sociais e YouTube",
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
      { label: "Cases", href: "/cases" },
      { label: "Sobre Nós", href: "/sobre" },
    ],
  },
  {
    title: "Serviços",
    links: [
      { label: "Presença Digital", href: "/solucoes/presenca-digital" },
      { label: "Mídias Sociais", href: "/solucoes/gestao-midias-sociais" },
      { label: "Tráfego Pago", href: "/solucoes/trafego-pago" },
      { label: "Identidade Visual", href: "/solucoes/identidade-visual" },
      { label: "Growth AI", href: "/solucoes/growth-ai" },
      { label: "Ver todos", href: "/solucoes" },
    ],
  },
];

// TODO: Atualizar com os perfis oficiais da Nexa Lume Digital
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/nexalumedigital", // Atualizar quando criar perfil
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/nexalumedigital", // Atualizar quando criar perfil
    icon: Instagram,
  },
];

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511934449sjsjsj";
export const WHATSAPP_MESSAGE =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ??
  "Olá! Gostaria de saber mais sobre os serviços da Nexa Lume.";

export const HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCgME9tbwiSX0sFryq9zwhREgib5eCF7FmoENRzv8Z1qTSc--njgaK7FTHVqnJ9eZhuVqQEo5ZiSGoImolxO8mGDkCwfPqoI_zsekiypmwPaIy0_Rrke8l-_FYtRZWS0ebokxfK4pM51COu5mE18ZBTU4uu47I2tzsnSYQnn-KmLSA72IcF5YEyqU8yKUz6TzQCYJNfCEa-rD3yaIZ7N_b0ro3U383kFPnE4Pl2vDG4kSuYYJbpcSolXiMsEvpsYx0kJjWEq6IV2uOa";

// === Dados expandidos para página /sobre ===

export const DIFFERENTIALS_EXPANDED: DifferentialExpandedData[] = [
  {
    icon: Shield,
    title: "Base Sólida e Segura",
    description:
      "Construímos a fundação digital do seu negócio com infraestrutura robusta, segurança de dados e alta disponibilidade.",
    expandedDescription:
      "Segurança não é um recurso opcional — é a base de tudo que construímos. Cada projeto nasce com infraestrutura pensada para proteger seus dados, garantir disponibilidade e escalar sem surpresas.",
    details: [
      "Infraestrutura cloud com 99.9% de uptime garantido",
      "Criptografia de ponta a ponta em todas as comunicações",
      "Backups automatizados e plano de disaster recovery",
      "Conformidade com LGPD e melhores práticas de segurança",
    ],
  },
  {
    icon: Brain,
    title: "Inteligência Aplicada",
    description:
      "Vamos além do código: usamos IA para analisar dados, otimizar processos e criar soluções que geram resultados reais.",
    expandedDescription:
      "Inteligência artificial não é buzzword na Nexa Lume — é ferramenta de trabalho. Usamos IA para automatizar decisões, prever tendências e transformar dados brutos em estratégias acionáveis para o seu negócio.",
    details: [
      "Modelos de machine learning customizados para seu segmento",
      "Automação inteligente de processos repetitivos",
      "Análise preditiva para tomada de decisão baseada em dados",
      "Assistentes virtuais e chatbots com processamento de linguagem natural",
    ],
  },
  {
    icon: Handshake,
    title: "Parceria de Valor",
    description:
      "Somos seu time de tecnologia e marketing, focados em crescimento, ROI e na evolução contínua do seu projeto.",
    expandedDescription:
      "Não entregamos projetos e desaparecemos. Atuamos como extensão do seu time, com acompanhamento contínuo, relatórios transparentes e foco obsessivo em resultados mensuráveis.",
    details: [
      "Acompanhamento contínuo com relatórios mensais de performance",
      "Reuniões estratégicas periódicas de alinhamento",
      "Suporte técnico dedicado com SLA definido",
      "Evolução constante do projeto com base em métricas reais",
    ],
  },
];

export const COMPANY_VALUES: ValueData[] = [
  {
    icon: Lightbulb,
    title: "Inovação",
    description:
      "Buscamos constantemente novas tecnologias e abordagens para entregar soluções à frente do mercado.",
  },
  {
    icon: Eye,
    title: "Transparência",
    description:
      "Comunicação clara, relatórios acessíveis e honestidade em cada etapa do projeto.",
  },
  {
    icon: Award,
    title: "Excelência",
    description:
      "Cada entrega passa por um padrão rigoroso de qualidade — do código ao design.",
  },
  {
    icon: Users,
    title: "Parceria",
    description:
      "Trabalhamos lado a lado com nossos clientes, como uma extensão real do time.",
  },
  {
    icon: BarChart3,
    title: "Resultados",
    description:
      "Tudo que fazemos é orientado por dados e focado em gerar retorno mensurável.",
  },
  {
    icon: Rocket,
    title: "Agilidade",
    description:
      "Entregas rápidas com ciclos iterativos — sem burocracia, com velocidade real.",
  },
];

export const COMPANY_TIMELINE: TimelineData[] = [
  {
    year: "2023",
    title: "O Início",
    description:
      "A Nexa Lume nasce com a missão de democratizar o acesso à tecnologia de ponta para pequenas e médias empresas.",
  },
  {
    year: "2024",
    title: "Primeiros Resultados",
    description:
      "Entrega dos primeiros projetos de automação com IA e consolidação do portfólio de serviços digitais.",
  },
  {
    year: "2025",
    title: "Expansão & Crescimento",
    description:
      "Ampliação da equipe, novos cases de sucesso e parcerias estratégicas que aceleraram nosso crescimento.",
  },
  {
    year: "2026",
    title: "Referência em Inovação",
    description:
      "Reconhecidos como parceiros de transformação digital, com dezenas de projetos entregues e resultados comprovados.",
  },
];

// === Dados expandidos para página /cases ===

export const CASES_EXPANDED: CaseExpandedData[] = [
  {
    metric: "+67% FATURAMENTO",
    client: "Fintech Vision - Automação IA",
    description:
      "Implementação de rede neural para análise de risco em tempo real.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCk5JgS5PSYZvv63HnoBFxuypYruuSa3eTj3oRmk9T9ZDcWxxVBXM0OKW0iLeE0Eig7-TPX-UY8cjtFt19BlqJRyLcm2bFUnBvRbW9Ocq90mszs-RIx1fkKPCd7DcLP8VngRmBuVfK3RgYo5_bc5nUmzDsT2IgwoWNm7izETW6uji9XtkCF8t4_UN369BCYz5NcAHv4vzsrjX9Iif7am8fxPS81-sXlPYhrGnCIpd-lSc7zjuvDW4tyfpIF3_7jEGBekNCUVqbh_V3x",
    imageAlt: "Data visualization dashboard on a computer screen",
    challenge:
      "A Fintech Vision enfrentava gargalos críticos no processo de análise de risco, com decisões que levavam até 48 horas e uma taxa de erro que comprometia a rentabilidade.",
    solution:
      "Implementamos uma rede neural customizada integrada ao pipeline existente, automatizando a análise de risco em tempo real com modelos de machine learning treinados especificamente para o setor financeiro.",
    results: [
      "+67% de aumento no faturamento em 6 meses",
      "Tempo de análise reduzido de 48h para 3 minutos",
      "99.2% de acurácia nas predições de risco",
      "ROI positivo já no segundo mês de operação",
    ],
  },
  {
    metric: "-40% CUSTO OP.",
    client: "Logistics Pro - ERP Custom",
    description:
      "Migração completa de infraestrutura para sistemas em nuvem de alta performance.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCtWvHnucoMVpZXyXJ6n6AcPTMXQ8xUT6IBEdCH_QyawRXoOvxOd9ks6kteNF4f3YYOIRX_FimSI8zezhDxZGW0TCmXyfBshXRRlaEC7jJpsnxGc2WsfnyLVkLP31POwSNuaApz7RSckV03XIxJfHhWsW8r6DSaOmcdiq-8Olp6P2efSpR7gnj-BMzLKjkyPYDuxKxIs1ciALbNsmysaxl5ulC90EH_TSdZQEoFyFROH-v-s7caDDkC9jNS2hpzS_0WyId0yr-Tcqw6",
    imageAlt: "Software engineering team collaborating in a modern office",
    challenge:
      "A Logistics Pro operava com sistemas legados fragmentados, gerando retrabalho constante, dados inconsistentes e custos operacionais crescentes.",
    solution:
      "Desenvolvemos um ERP customizado na nuvem, integrando 12 sistemas em uma única plataforma com dashboards em tempo real e automação de processos logísticos.",
    results: [
      "-40% de redução no custo operacional",
      "Integração de 12 sistemas em uma única plataforma",
      "ROI positivo em 4 meses após o go-live",
      "Eliminação de 90% do retrabalho manual",
    ],
  },
];

export const AGGREGATE_METRICS: MetricData[] = [
  { value: "67%", label: "Aumento médio em faturamento" },
  { value: "40%", label: "Redução média de custos" },
  { value: "28+", label: "Projetos entregues" },
  { value: "99.9%", label: "Uptime garantido" },
];

// === Dados para página /contato ===

export const CONTACT_CHANNELS = [
  {
    icon: Mail,
    title: "E-mail",
    detail: "contato@nexalumedigital.com.br",
    href: "mailto:contato@nexalumedigital.com.br",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    detail: "Fale com um especialista",
    href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5511934449sjsjsj"}`,
  },
  {
    icon: MapPin,
    title: "Localização",
    detail: "São Paulo, Brasil",
    href: null,
  },
  {
    icon: Clock,
    title: "Horário",
    detail: "Seg–Sex, 9h às 18h",
    href: null,
  },
];
