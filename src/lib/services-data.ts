import {
  Monitor,
  Database,
  TrendingUp,
  Layers,
  Zap,
  Settings,
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
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "digital-web",
    title: "Digital & Web",
    description: "Presenca digital e experiencia do usuario",
    services: [
      {
        slug: "presenca-digital",
        iconName: "Monitor",
        title: "Presenca Digital",
        shortDescription:
          "UX/UI Design e Web Development focado em conversao",
        fullDescription:
          "Criamos experiencias digitais que convertem. Nosso time de designers e desenvolvedores trabalha em conjunto para entregar sites e plataformas que nao apenas impressionam visualmente, mas geram resultados reais para o seu negocio.",
        features: [
          "Sites Institucionais modernos e responsivos",
          "E-commerce de alta performance",
          "Landing Pages otimizadas para conversao",
          "Portais corporativos e intranets",
          "PWAs (Progressive Web Apps)",
          "Design System personalizado",
        ],
        benefits: [
          "Aumento de ate 3x na taxa de conversao",
          "Experiencia do usuario otimizada",
          "Performance e SEO de primeira linha",
          "Design exclusivo e memoravel",
        ],
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma", "Framer Motion"],
      },
      {
        slug: "software-sob-medida",
        iconName: "Settings",
        title: "Software Sob Medida",
        shortDescription:
          "Sistemas criados para resolver desafios especificos",
        fullDescription:
          "Desenvolvemos solucoes personalizadas que se adaptam perfeitamente aos processos da sua empresa. Cada linha de codigo e pensada para resolver os desafios unicos do seu negocio, com arquitetura escalavel e segura.",
        features: [
          "Plataformas web customizadas",
          "CRMs e ERPs sob medida",
          "Dashboards e paineis administrativos",
          "Sistemas de gestao interna",
          "Portais de autoatendimento",
          "Aplicacoes multi-tenant",
        ],
        benefits: [
          "Solucao 100% adaptada ao seu negocio",
          "Escalabilidade garantida",
          "Integracao com sistemas existentes",
          "Suporte e evolucao continua",
        ],
        technologies: ["Node.js", "Python", "PostgreSQL", "Docker", "AWS", "Kubernetes"],
      },
    ],
  },
  {
    id: "sistemas-infra",
    title: "Sistemas & Infraestrutura",
    description: "Arquitetura robusta e escalavel",
    services: [
      {
        slug: "sistemas-corporativos",
        iconName: "Database",
        title: "Sistemas Corporativos",
        shortDescription:
          "ERPs, APIs e infraestrutura Cloud de alta performance",
        fullDescription:
          "Construimos a espinha dorsal tecnologica da sua empresa. Sistemas corporativos robustos, APIs bem documentadas e infraestrutura cloud que garante disponibilidade 24/7 e seguranca em todos os niveis.",
        features: [
          "ERPs customizados para sua operacao",
          "APIs RESTful e GraphQL",
          "Infraestrutura Cloud (AWS, GCP, Azure)",
          "Microsservicos e arquitetura distribuida",
          "Monitoramento e observabilidade",
          "DevOps e CI/CD automatizado",
        ],
        benefits: [
          "Alta disponibilidade (99.9% uptime)",
          "Seguranca enterprise-grade",
          "Escalabilidade horizontal",
          "Reducao de custos operacionais",
        ],
        technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "PostgreSQL", "Redis"],
      },
      {
        slug: "integracoes-automacoes",
        iconName: "Zap",
        title: "Integracoes e Automacoes",
        shortDescription:
          "Conecte sistemas e automatize processos com n8n e APIs",
        fullDescription:
          "Eliminamos trabalho manual e conectamos suas ferramentas. Somos especialistas em n8n e Notion API, criando fluxos automatizados que economizam horas de trabalho e reduzem erros humanos.",
        features: [
          "Automacoes com n8n e Make",
          "Integracoes via Notion API",
          "Conectores personalizados",
          "Webhooks e event-driven architecture",
          "ETL e sincronizacao de dados",
          "Bots e notificacoes automaticas",
        ],
        benefits: [
          "Economia de ate 20h semanais em tarefas manuais",
          "Zero erros em processos repetitivos",
          "Dados sincronizados em tempo real",
          "ROI mensuravel e imediato",
        ],
        technologies: ["n8n", "Notion API", "Zapier", "Make", "Node.js", "REST APIs"],
      },
    ],
  },
  {
    id: "ia-inovacao",
    title: "IA & Inovacao",
    description: "Inteligencia artificial e produtos digitais",
    services: [
      {
        slug: "growth-ai",
        iconName: "TrendingUp",
        title: "Growth AI",
        shortDescription:
          "Agentes IA, automacao inteligente e Data Intelligence",
        fullDescription:
          "Colocamos a inteligencia artificial a servico do seu crescimento. Desenvolvemos agentes de IA para atendimento, automacoes inteligentes e solucoes de Data Intelligence que transformam dados em decisoes estrategicas.",
        features: [
          "Agentes IA de atendimento (chatbots avancados)",
          "Automacao inteligente de workflows",
          "Analise preditiva e Data Intelligence",
          "Processamento de linguagem natural (NLP)",
          "Machine Learning aplicado a negocios",
          "Integracao com ChatGPT, Claude e outros LLMs",
        ],
        benefits: [
          "Atendimento 24/7 sem aumentar equipe",
          "Decisoes baseadas em dados reais",
          "Aumento de produtividade em 40%",
          "Personalizacao em escala",
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
          "Transformamos sua ideia em um produto SaaS pronto para o mercado. Do MVP a plataforma completa, cuidamos de tudo: desenvolvimento, infraestrutura, modelo de negocio e estrategia de go-to-market.",
        features: [
          "Desenvolvimento de MVP rapido",
          "Arquitetura multi-tenant",
          "Sistema de billing e assinaturas",
          "Dashboard de metricas e analytics",
          "Onboarding e documentacao",
          "Infraestrutura escalavel inclusa",
        ],
        benefits: [
          "Time-to-market acelerado",
          "Modelo de receita recorrente pronto",
          "Escalabilidade desde o dia 1",
          "Suporte tecnico e evolucao continua",
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
