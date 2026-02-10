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
    description: "Presença digital e experiência do usuário",
    services: [
      {
        slug: "presenca-digital",
        iconName: "Monitor",
        title: "Presença Digital",
        shortDescription:
          "UX/UI Design e Web Development focado em conversão",
        fullDescription:
          "Criamos experiências digitais que convertem. Nosso time de designers e desenvolvedores trabalha em conjunto para entregar sites e plataformas que não apenas impressionam visualmente, mas geram resultados reais para o seu negócio.",
        features: [
          "Sites Institucionais modernos e responsivos",
          "E-commerce de alta performance",
          "Landing Pages otimizadas para conversão",
          "Portais corporativos e intranets",
          "PWAs (Progressive Web Apps)",
          "Design System personalizado",
        ],
        benefits: [
          "Aumento de até 3x na taxa de conversão",
          "Experiência do usuário otimizada",
          "Performance e SEO de primeira linha",
          "Design exclusivo e memorável",
        ],
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma", "Framer Motion"],
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
          "Automações com n8n e Make",
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
