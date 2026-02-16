import {
  Monitor,
  Database,
  TrendingUp,
  Layers,
  Zap,
  Settings,
  Share2,
  Target,
  Megaphone,
  Palette,
  Video,
  type LucideIcon,
} from "lucide-react";
import type { ServiceCategory, ServiceDetail, ServiceIconName } from "./types";

// Icon mapping for use in components
export const SERVICE_ICONS: Record<ServiceIconName, LucideIcon> = {
  Monitor,
  Database,
  TrendingUp,
  Layers,
  Zap,
  Settings,
  Share2,
  Target,
  Megaphone,
  Palette,
  Video,
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "digital-web",
    title: "Digital & Web",
    description: "Presença digital e experiência do usuário",
    services: [
      {
        slug: "presenca-digital",
        iconName: "Monitor",
        title: "Presença Digital",
        shortDescription:
          "Sites, lojas virtuais, aplicativos e Google Meu Negócio",
        fullDescription:
          "Criamos experiências digitais que convertem. Nosso time de designers e desenvolvedores trabalha em conjunto para entregar sites, lojas virtuais, aplicativos e páginas de captura que não apenas impressionam visualmente, mas geram resultados reais para o seu negócio. Também cuidamos do seu cadastro e gestão no Google Meu Negócio para garantir presença local.",
        features: [
          "Sites institucionais modernos e responsivos",
          "Lojas virtuais e e-commerce completo",
          "Landing pages otimizadas para conversão",
          "Aplicativos mobile (PWA e nativos)",
          "Cadastro e gestão de Google Meu Negócio",
          "Design System personalizado",
        ],
        benefits: [
          "Aumento de até 3x na taxa de conversão",
          "Experiência do usuário otimizada",
          "Performance e SEO de primeira linha",
          "Presença garantida no Google Maps e buscas locais",
        ],
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma", "Google Business"],
      },
      {
        slug: "software-sob-medida",
        iconName: "Settings",
        title: "Software Sob Medida",
        shortDescription:
          "Sistemas criados para resolver desafios específicos",
        fullDescription:
          "Desenvolvemos soluções personalizadas que se adaptam perfeitamente aos processos da sua empresa. Cada linha de código é pensada para resolver os desafios únicos do seu negócio, com arquitetura escalável e segura.",
        features: [
          "Plataformas web customizadas",
          "CRMs e ERPs sob medida",
          "Dashboards e painéis administrativos",
          "Sistemas de gestão interna",
          "Portais de autoatendimento",
          "Aplicações multi-tenant",
        ],
        benefits: [
          "Solução 100% adaptada ao seu negócio",
          "Escalabilidade garantida",
          "Integração com sistemas existentes",
          "Suporte e evolução contínua",
        ],
        technologies: ["Node.js", "Python", "PostgreSQL", "Docker", "AWS", "Kubernetes"],
      },
    ],
  },
  {
    id: "marketing-trafego",
    title: "Marketing & Tráfego",
    description: "Mídias sociais, anúncios e divulgação digital",
    services: [
      {
        slug: "gestao-midias-sociais",
        iconName: "Share2",
        title: "Gestão de Mídias Sociais",
        shortDescription:
          "Gestão estratégica de Facebook e Instagram para engajar e converter",
        fullDescription:
          "Cuidamos da presença da sua marca nas redes sociais com planejamento estratégico, criação de conteúdo e gestão de comunidade. Transformamos seguidores em clientes com posts que engajam e campanhas que convertem.",
        features: [
          "Planejamento e calendário editorial",
          "Criação de posts e stories profissionais",
          "Gestão de comunidade e SAC social",
          "Relatórios de performance e engajamento",
          "Estratégias de crescimento orgânico",
          "Monitoramento de concorrência",
        ],
        benefits: [
          "Presença consistente nas redes sociais",
          "Aumento de engajamento e seguidores qualificados",
          "Economia de tempo com gestão profissional",
          "Conteúdo alinhado à identidade da marca",
        ],
        technologies: ["Meta Business Suite", "Canva Pro", "Instagram API", "Facebook API", "Hootsuite", "ChatGPT"],
      },
      {
        slug: "trafego-pago",
        iconName: "Target",
        title: "Tráfego Pago & Performance",
        shortDescription:
          "Campanhas de Google Ads e Meta Ads que geram resultados reais",
        fullDescription:
          "Planejamos, executamos e otimizamos campanhas de anúncios pagos no Google e nas redes sociais da Meta. Cada real investido é monitorado para garantir o máximo retorno sobre investimento e crescimento sustentável.",
        features: [
          "Campanhas no Google Ads (Search, Display, YouTube)",
          "Anúncios no Facebook e Instagram (Meta Ads)",
          "Remarketing e públicos personalizados",
          "Otimização contínua de campanhas",
          "Landing pages otimizadas para conversão",
          "Relatórios detalhados de ROI",
        ],
        benefits: [
          "Resultados mensuráveis desde o primeiro mês",
          "Segmentação precisa do público-alvo",
          "Otimização constante para reduzir custo por lead",
          "Escalabilidade controlada do investimento",
        ],
        technologies: ["Google Ads", "Meta Ads Manager", "Google Analytics", "Google Tag Manager", "Hotjar", "Data Studio"],
      },
      {
        slug: "divulgacao-alcance",
        iconName: "Megaphone",
        title: "Divulgação & Alcance Digital",
        shortDescription:
          "Amplie sua visibilidade com divulgação em massa no WhatsApp e Facebook",
        fullDescription:
          "Levamos sua marca para milhares de pessoas através de estratégias de divulgação em massa em grupos de WhatsApp e Facebook. Ampliamos o alcance e a visibilidade de empresas, produtos e serviços de forma eficiente e escalável.",
        features: [
          "Divulgação em grupos de WhatsApp segmentados",
          "Marketing em grupos de Facebook",
          "Criação de materiais otimizados para compartilhamento",
          "Segmentação por região e interesse",
          "Agendamento e automação de publicações",
          "Relatórios de alcance e engajamento",
        ],
        benefits: [
          "Alcance massivo com investimento acessível",
          "Visibilidade imediata para seu negócio",
          "Segmentação por nicho e localização",
          "Resultados rápidos e mensuráveis",
        ],
        technologies: ["WhatsApp Business API", "Facebook Groups", "Canva", "Automação de mensagens", "Ferramentas de agendamento", "Analytics"],
      },
    ],
  },
  {
    id: "design-conteudo",
    title: "Design & Conteúdo",
    description: "Identidade visual e produção de conteúdo",
    services: [
      {
        slug: "identidade-visual",
        iconName: "Palette",
        title: "Identidade Visual & Design Gráfico",
        shortDescription:
          "Logo, identidade visual completa e materiais gráficos profissionais",
        fullDescription:
          "Criamos a identidade visual completa da sua marca, do logotipo aos materiais impressos e digitais. Cada peça é pensada para transmitir profissionalismo, confiança e fortalecer o reconhecimento da sua marca no mercado.",
        features: [
          "Criação de logotipo profissional",
          "Identidade visual completa (cores, tipografia, padrões)",
          "Cartões de visita e papelaria",
          "Flyers, panfletos e catálogos personalizados",
          "Banners digitais e para redes sociais",
          "Manual de marca e guidelines",
        ],
        benefits: [
          "Marca profissional e memorável",
          "Materiais prontos para impressão e digital",
          "Consistência visual em todos os canais",
          "Diferenciação competitiva no mercado",
        ],
        technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Canva Pro", "Adobe InDesign", "Midjourney"],
      },
      {
        slug: "producao-conteudo",
        iconName: "Video",
        title: "Produção de Conteúdo Visual",
        shortDescription:
          "Criação e edição profissional de imagens e vídeos com IA",
        fullDescription:
          "Produzimos conteúdo visual de alto impacto combinando técnicas tradicionais de edição com o poder da inteligência artificial. De vídeos institucionais a posts para redes sociais, entregamos qualidade profissional com agilidade.",
        features: [
          "Edição profissional de vídeos institucionais e comerciais",
          "Criação de imagens com inteligência artificial",
          "Edição e tratamento avançado de fotos",
          "Motion graphics e animações",
          "Vídeos otimizados para redes sociais (Reels, Stories, TikTok)",
          "Thumbnails e capas para YouTube",
        ],
        benefits: [
          "Conteúdo visual de alto impacto",
          "Produção ágil com auxílio de IA",
          "Vídeos otimizados para cada plataforma",
          "Qualidade profissional com custo acessível",
        ],
        technologies: ["Adobe Premiere", "DaVinci Resolve", "After Effects", "Midjourney", "Runway ML", "CapCut Pro"],
      },
    ],
  },
  {
    id: "sistemas-infra",
    title: "Sistemas & Infraestrutura",
    description: "Arquitetura robusta e escalável",
    services: [
      {
        slug: "sistemas-corporativos",
        iconName: "Database",
        title: "Sistemas Corporativos",
        shortDescription:
          "ERPs, APIs e infraestrutura Cloud de alta performance",
        fullDescription:
          "Construímos a espinha dorsal tecnológica da sua empresa. Sistemas corporativos robustos, APIs bem documentadas e infraestrutura cloud que garante disponibilidade 24/7 e segurança em todos os níveis.",
        features: [
          "ERPs customizados para sua operação",
          "APIs RESTful e GraphQL",
          "Infraestrutura Cloud (AWS, GCP, Azure)",
          "Microsserviços e arquitetura distribuída",
          "Monitoramento e observabilidade",
          "DevOps e CI/CD automatizado",
        ],
        benefits: [
          "Alta disponibilidade (99.9% uptime)",
          "Segurança enterprise-grade",
          "Escalabilidade horizontal",
          "Redução de custos operacionais",
        ],
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "PostgreSQL", "Redis"],
      },
      {
        slug: "integracoes-automacoes",
        iconName: "Zap",
        title: "Integrações e Automações",
        shortDescription:
          "Conecte sistemas e automatize processos com n8n e APIs",
        fullDescription:
          "Eliminamos trabalho manual e conectamos suas ferramentas. Somos especialistas em n8n e Notion API, criando fluxos automatizados que economizam horas de trabalho e reduzem erros humanos.",
        features: [
          "Automações com n8n",
          "Integrações via Notion API",
          "Conectores personalizados",
          "Webhooks e event-driven architecture",
          "ETL e sincronização de dados",
          "Bots e notificações automáticas",
        ],
        benefits: [
          "Economia de até 20h semanais em tarefas manuais",
          "Zero erros em processos repetitivos",
          "Dados sincronizados em tempo real",
          "ROI mensurável e imediato",
        ],
        technologies: ["n8n", "Notion API", "Zapier", "Make", "Node.js", "REST APIs"],
      },
    ],
  },
  {
    id: "ia-inovacao",
    title: "IA & Inovação",
    description: "Inteligência artificial e produtos digitais",
    services: [
      {
        slug: "growth-ai",
        iconName: "TrendingUp",
        title: "Growth AI",
        shortDescription:
          "Agentes IA, automação inteligente e Data Intelligence",
        fullDescription:
          "Colocamos a inteligência artificial a serviço do seu crescimento. Desenvolvemos agentes de IA para atendimento, automações inteligentes e soluções de Data Intelligence que transformam dados em decisões estratégicas.",
        features: [
          "Agentes IA de atendimento (chatbots avançados)",
          "Automação inteligente de workflows",
          "Análise preditiva e Data Intelligence",
          "Processamento de linguagem natural (NLP)",
          "Machine Learning aplicado a negócios",
          "Integração com ChatGPT, Claude e outros LLMs",
        ],
        benefits: [
          "Atendimento 24/7 sem aumentar equipe",
          "Decisões baseadas em dados reais",
          "Aumento de produtividade em 40%",
          "Personalização em escala",
        ],
        technologies: ["OpenAI", "LangChain", "Python", "TensorFlow", "Anthropic Claude", "Vector DBs"],
      },
      {
        slug: "micro-saas",
        iconName: "Layers",
        title: "Micro SaaS sob Demanda",
        shortDescription:
          "Produtos SaaS personalizados do zero ao mercado",
        fullDescription:
          "Transformamos sua ideia em um produto SaaS pronto para o mercado. Do MVP à plataforma completa, cuidamos de tudo: desenvolvimento, infraestrutura, modelo de negócio e estratégia de go-to-market.",
        features: [
          "Desenvolvimento de MVP rápido",
          "Arquitetura multi-tenant",
          "Sistema de billing e assinaturas",
          "Dashboard de métricas e analytics",
          "Onboarding e documentação",
          "Infraestrutura escalável inclusa",
        ],
        benefits: [
          "Time-to-market acelerado",
          "Modelo de receita recorrente pronto",
          "Escalabilidade desde o dia 1",
          "Suporte técnico e evolução contínua",
        ],
        technologies: ["Next.js", "Stripe", "Supabase", "Vercel", "PostgreSQL", "Resend"],
      },
    ],
  },
];

// Helper functions
export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  for (const category of SERVICE_CATEGORIES) {
    const service = category.services.find((s) => s.slug === slug);
    if (service) return service;
  }
  return undefined;
}

export function getAllServiceSlugs(): string[] {
  return SERVICE_CATEGORIES.flatMap((category) =>
    category.services.map((service) => service.slug)
  );
}

export function getCategoryByServiceSlug(slug: string): ServiceCategory | undefined {
  return SERVICE_CATEGORIES.find((category) =>
    category.services.some((service) => service.slug === slug)
  );
}

export function getAllServices(): ServiceDetail[] {
  return SERVICE_CATEGORIES.flatMap((category) => category.services);
}

export function getServiceIcon(iconName: ServiceIconName): LucideIcon {
  return SERVICE_ICONS[iconName];
}
