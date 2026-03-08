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

export const ESPECIALIDADES: Especialidade[] = [
  // SITES & LANDING PAGES
  {
    slug: "criacao-de-site-para-advogados",
    titulo: "Criação de Site para Advogados",
    subtitulo: "Sites profissionais que transmitem credibilidade e captam clientes qualificados",
    metaTitle: "Criação de Site para Advogados em São Paulo | Nexa Lume Digital",
    metaDescription: "Desenvolvemos sites profissionais para advogados e escritórios de advocacia. Design elegante, otimizado para Google e preparado para captar clientes. Solicite orçamento!",
    keywords: ["site para advogado", "criação de site advocacia", "site escritório de advocacia", "site advogado são paulo"],
    categoria: "sites",
    heroText: "Sua advocacia merece uma presença digital à altura da sua reputação. Criamos sites que transmitem a seriedade e competência do seu escritório.",
    sections: [
      {
        titulo: "Por que advogados precisam de um site profissional?",
        conteudo: "No cenário jurídico atual, a primeira impressão muitas vezes acontece online. Potenciais clientes pesquisam no Google antes de escolher um advogado. Um site profissional não é apenas um cartão de visitas digital – é uma ferramenta estratégica para captar clientes qualificados, demonstrar sua expertise e se posicionar como autoridade na sua área de atuação. Escritórios sem presença digital perdem oportunidades diariamente para concorrentes que investem em marketing jurídico.",
      },
      {
        titulo: "O que incluímos no seu site jurídico",
        conteudo: "Desenvolvemos sites completos com áreas de atuação detalhadas, perfil dos advogados, artigos jurídicos para SEO, formulário de contato estratégico, integração com WhatsApp para atendimento rápido, e design responsivo que funciona perfeitamente em celulares. Tudo seguindo as diretrizes da OAB para publicidade advocatícia, garantindo ética e profissionalismo.",
      },
      {
        titulo: "SEO para advogados: apareça no Google",
        conteudo: "Não basta ter um site bonito – ele precisa ser encontrado. Aplicamos técnicas avançadas de SEO jurídico para posicionar seu escritório nas primeiras páginas do Google para termos como 'advogado trabalhista São Paulo', 'escritório de advocacia empresarial', entre outros. Isso significa mais visibilidade, mais consultas e mais clientes.",
      },
    ],
    beneficios: [
      "Design elegante e profissional adequado ao ambiente jurídico",
      "Otimização SEO para aparecer no Google",
      "Integração com WhatsApp para contato rápido",
      "Responsivo para celular e tablet",
      "Blog jurídico para posicionamento de autoridade",
      "Formulário de captação de leads qualificados",
    ],
    cta: {
      titulo: "Pronto para elevar a presença digital do seu escritório?",
      texto: "Solicite uma proposta personalizada e descubra como podemos transformar seu site em uma máquina de captação de clientes.",
    },
  },
  {
    slug: "criacao-de-site-para-clinicas-medicas",
    titulo: "Criação de Site para Clínicas Médicas",
    subtitulo: "Sites que transmitem confiança e facilitam o agendamento de consultas",
    metaTitle: "Criação de Site para Clínicas Médicas | Nexa Lume Digital",
    metaDescription: "Sites profissionais para clínicas médicas e consultórios. Design moderno, sistema de agendamento online e otimização para Google. Aumente suas consultas!",
    keywords: ["site para clínica médica", "site consultório médico", "site para médicos", "agendamento online clínica"],
    categoria: "sites",
    heroText: "Pacientes buscam médicos no Google. Sua clínica precisa estar lá, com um site que transmita confiança e facilite o agendamento.",
    sections: [
      {
        titulo: "A importância do digital na área da saúde",
        conteudo: "O comportamento do paciente mudou. Antes de marcar uma consulta, ele pesquisa no Google, lê avaliações e visita o site da clínica. Um site profissional é fundamental para transmitir credibilidade, apresentar sua equipe médica e especialidades, e converter visitantes em pacientes. Clínicas sem presença digital forte perdem pacientes para concorrentes mais visíveis.",
      },
      {
        titulo: "Funcionalidades essenciais para sua clínica",
        conteudo: "Desenvolvemos sites com apresentação completa dos médicos e especialidades, sistema de agendamento online integrado, área do paciente, blog com conteúdo de saúde para SEO, integração com WhatsApp, galeria de fotos das instalações, e design que transmite a modernidade e cuidado da sua clínica. Tudo responsivo e otimizado para velocidade.",
      },
      {
        titulo: "Agendamento online: conveniência para seus pacientes",
        conteudo: "Ofereça a comodidade do agendamento 24 horas. Integramos seu site com sistemas de agenda médica ou criamos soluções personalizadas que se conectam com seu fluxo de trabalho. Menos ligações, menos trabalho administrativo, mais eficiência.",
      },
    ],
    beneficios: [
      "Design moderno que transmite confiança",
      "Sistema de agendamento online",
      "Apresentação completa dos médicos e especialidades",
      "Blog de saúde para SEO",
      "Integração com WhatsApp",
      "Responsivo e rápido",
    ],
    cta: {
      titulo: "Transforme visitantes em pacientes",
      texto: "Entre em contato e descubra como um site profissional pode aumentar o número de consultas na sua clínica.",
    },
  },
  {
    slug: "criacao-de-site-para-dentistas",
    titulo: "Criação de Site para Dentistas",
    subtitulo: "Sites odontológicos que conquistam novos pacientes e transmitem profissionalismo",
    metaTitle: "Criação de Site para Dentistas e Clínicas Odontológicas | Nexa Lume",
    metaDescription: "Sites profissionais para dentistas e clínicas odontológicas. Design moderno, agendamento online e SEO para atrair mais pacientes. Solicite orçamento!",
    keywords: ["site para dentista", "site clínica odontológica", "site consultório dentário", "marketing para dentistas"],
    categoria: "sites",
    heroText: "Sorrisos começam com uma boa primeira impressão. Seu site é o primeiro contato de muitos pacientes com sua clínica.",
    sections: [
      {
        titulo: "Marketing digital para odontologia",
        conteudo: "A odontologia é uma das áreas mais competitivas quando falamos de presença digital. Pacientes pesquisam tratamentos, comparar preços e buscam avaliações antes de escolher um dentista. Um site profissional posiciona sua clínica como referência, apresenta seus tratamentos de forma clara e converte visitantes em pacientes agendados.",
      },
      {
        titulo: "Elementos que não podem faltar",
        conteudo: "Criamos sites com galeria de casos antes/depois (com autorização), apresentação dos tratamentos oferecidos, perfil dos profissionais, depoimentos de pacientes, blog com dicas de saúde bucal, integração com agendamento e WhatsApp. O design reflete a modernidade e higiene que seus pacientes esperam de uma clínica odontológica.",
      },
      {
        titulo: "SEO local: seja encontrado na sua região",
        conteudo: "Otimizamos seu site para buscas locais como 'dentista em [sua cidade]', 'clínica odontológica [bairro]', 'implante dentário [região]'. Isso garante que pacientes próximos encontrem sua clínica quando mais precisam.",
      },
    ],
    beneficios: [
      "Galeria de casos e tratamentos",
      "Agendamento online integrado",
      "SEO local para sua região",
      "Design clean e profissional",
      "Blog de saúde bucal",
      "Responsivo para mobile",
    ],
    cta: {
      titulo: "Atraia mais pacientes para sua clínica",
      texto: "Solicite uma proposta e veja como podemos transformar seu site em uma ferramenta de captação de pacientes.",
    },
  },

  // SISTEMAS & AUTOMAÇÃO
  {
    slug: "sistema-de-agendamento-online",
    titulo: "Sistema de Agendamento Online",
    subtitulo: "Automatize agendamentos e reduza faltas com confirmações automáticas",
    metaTitle: "Sistema de Agendamento Online para Empresas | Nexa Lume Digital",
    metaDescription: "Desenvolva um sistema de agendamento online personalizado para sua empresa. Reduz faltas, automatiza confirmações e integra com WhatsApp. Solicite demonstração!",
    keywords: ["sistema de agendamento online", "software de agendamento", "agenda online para empresas", "sistema de marcação de horários"],
    categoria: "sistemas",
    heroText: "Chega de agenda lotada no telefone. Automatize seus agendamentos e deixe seus clientes marcarem horários 24 horas por dia.",
    sections: [
      {
        titulo: "Por que automatizar agendamentos?",
        conteudo: "Agendamentos manuais consomem tempo, geram erros e limitam seu horário de atendimento ao comercial. Com um sistema de agendamento online, seus clientes podem marcar horários a qualquer momento, você recebe notificações automáticas, e lembretes são enviados automaticamente reduzindo faltas em até 70%.",
      },
      {
        titulo: "Funcionalidades do sistema",
        conteudo: "Desenvolvemos sistemas completos com calendário visual, múltiplos profissionais e serviços, bloqueio de horários, confirmação automática por WhatsApp e email, lembretes configuráveis, painel administrativo, relatórios de ocupação e integração com Google Calendar. Tudo personalizado para o fluxo da sua empresa.",
      },
      {
        titulo: "Integração com WhatsApp",
        conteudo: "O diferencial que seus clientes amam: confirmações e lembretes via WhatsApp. Reduza no-shows enviando lembretes automáticos 24h e 1h antes do horário agendado. Permita que clientes confirmem ou remarquem com um clique.",
      },
    ],
    beneficios: [
      "Agendamento disponível 24/7",
      "Redução de até 70% nas faltas",
      "Lembretes automáticos por WhatsApp",
      "Painel administrativo completo",
      "Relatórios de ocupação",
      "Integração com Google Calendar",
    ],
    cta: {
      titulo: "Automatize sua agenda hoje",
      texto: "Solicite uma demonstração e veja como nosso sistema pode transformar a gestão de horários da sua empresa.",
    },
  },
  {
    slug: "chatbot-inteligencia-artificial-atendimento",
    titulo: "Chatbot com Inteligência Artificial para Atendimento",
    subtitulo: "Atenda clientes 24 horas com IA que entende e resolve questões complexas",
    metaTitle: "Chatbot com IA para Atendimento ao Cliente | Nexa Lume Digital",
    metaDescription: "Chatbots inteligentes com IA para atendimento automatizado. Responde dúvidas, qualifica leads e escala para humanos quando necessário. Veja demonstração!",
    keywords: ["chatbot inteligência artificial", "chatbot para empresas", "atendimento automatizado", "chatbot whatsapp empresa"],
    categoria: "automacao",
    heroText: "Clientes querem respostas rápidas. Nossos chatbots com IA atendem 24 horas, entendem contexto e resolvem problemas reais.",
    sections: [
      {
        titulo: "Além dos chatbots tradicionais",
        conteudo: "Esqueça chatbots que só respondem perguntas pré-definidas. Nossos agentes de IA utilizam modelos de linguagem avançados (como GPT) para entender o contexto das conversas, responder de forma natural e resolver questões que chatbots tradicionais não conseguem. É como ter um atendente treinado disponível 24 horas.",
      },
      {
        titulo: "O que nossos chatbots podem fazer",
        conteudo: "Responder dúvidas frequentes com linguagem natural, qualificar leads coletando informações relevantes, agendar reuniões e compromissos, processar pedidos e solicitações, escalar para humanos quando necessário, integrar com seus sistemas (CRM, ERP, etc.), e aprender continuamente com cada interação.",
      },
      {
        titulo: "Integração com WhatsApp, Instagram e mais",
        conteudo: "Onde seus clientes estão, nosso chatbot também está. Integramos com WhatsApp Business, Instagram Direct, Messenger, chat do site, e qualquer outro canal que você utiliza. Atendimento omnichannel com a mesma qualidade em todos os pontos de contato.",
      },
    ],
    beneficios: [
      "Atendimento 24 horas, 7 dias por semana",
      "IA avançada que entende contexto",
      "Integração omnichannel",
      "Qualificação automática de leads",
      "Escalonamento inteligente para humanos",
      "Relatórios e analytics de conversas",
    ],
    cta: {
      titulo: "Revolucione seu atendimento",
      texto: "Agende uma demonstração e veja nosso chatbot com IA em ação. Você vai se surpreender.",
    },
  },
  {
    slug: "automacao-whatsapp-para-empresas",
    titulo: "Automação de WhatsApp para Empresas",
    subtitulo: "Automatize mensagens, respostas e campanhas no WhatsApp da sua empresa",
    metaTitle: "Automação de WhatsApp para Empresas | Nexa Lume Digital",
    metaDescription: "Automatize seu WhatsApp Business com respostas automáticas, chatbots, campanhas de mensagens e integração com sistemas. Aumente suas vendas!",
    keywords: ["automação whatsapp", "whatsapp business automatizado", "chatbot whatsapp", "mensagens automáticas whatsapp"],
    categoria: "automacao",
    heroText: "O WhatsApp é o canal preferido dos brasileiros. Automatize para atender mais, vender mais e trabalhar menos.",
    sections: [
      {
        titulo: "O poder do WhatsApp nos negócios",
        conteudo: "Com mais de 140 milhões de usuários no Brasil, o WhatsApp é o canal de comunicação mais importante para empresas. Mas responder manualmente cada mensagem limita seu crescimento. A automação permite atender dezenas de conversas simultaneamente, 24 horas por dia, sem perder a qualidade do atendimento.",
      },
      {
        titulo: "Tipos de automação que implementamos",
        conteudo: "Respostas automáticas para perguntas frequentes, chatbots com fluxos de conversa personalizados, disparos de mensagens em massa (respeitando as políticas do WhatsApp), integração com CRM para registro automático de contatos, notificações automáticas de pedidos e entregas, e muito mais.",
      },
      {
        titulo: "Tecnologia oficial e segura",
        conteudo: "Utilizamos a API oficial do WhatsApp Business e soluções homologadas como Evolution API. Isso garante que sua conta não será banida, suas mensagens serão entregues, e você terá todos os recursos avançados disponíveis.",
      },
    ],
    beneficios: [
      "Atendimento automático 24 horas",
      "Múltiplos atendentes simultâneos",
      "Integração com CRM e sistemas",
      "Campanhas de mensagens segmentadas",
      "Relatórios de conversas",
      "API oficial - sem risco de banimento",
    ],
    cta: {
      titulo: "Escale seu atendimento no WhatsApp",
      texto: "Entre em contato e descubra como automatizar seu WhatsApp de forma profissional e segura.",
    },
  },

  // MARKETING DIGITAL
  {
    slug: "gestao-trafego-pago-google-ads",
    titulo: "Gestão de Tráfego Pago Google Ads",
    subtitulo: "Campanhas estratégicas no Google para atrair clientes prontos para comprar",
    metaTitle: "Gestão de Google Ads e Tráfego Pago | Nexa Lume Digital",
    metaDescription: "Gestão profissional de campanhas Google Ads. Atraia clientes qualificados, aumente suas vendas e maximize seu ROI. Solicite análise gratuita!",
    keywords: ["gestão google ads", "tráfego pago google", "campanha google ads", "anúncios google"],
    categoria: "marketing",
    heroText: "Apareça no topo do Google quando seus clientes estão buscando exatamente o que você oferece.",
    sections: [
      {
        titulo: "Por que investir em Google Ads?",
        conteudo: "Diferente de outras formas de publicidade, no Google Ads você alcança pessoas que estão ativamente buscando seu produto ou serviço. É a diferença entre falar com quem precisa de você versus interromper quem não está interessado. Isso significa maiores taxas de conversão e melhor retorno sobre investimento.",
      },
      {
        titulo: "Nossa metodologia de gestão",
        conteudo: "Começamos com pesquisa profunda de palavras-chave e análise da concorrência. Estruturamos campanhas segmentadas por intenção de busca, criamos anúncios persuasivos com testes A/B, configuramos conversões e acompanhamos métricas detalhadas. Otimizamos continuamente para reduzir custo por clique e aumentar conversões.",
      },
      {
        titulo: "Transparência e relatórios",
        conteudo: "Você tem acesso total às suas campanhas e relatórios mensais detalhados. Mostramos exatamente quanto foi investido, quantos cliques, quantas conversões e qual o custo por aquisição. Sem surpresas, sem custos escondidos.",
      },
    ],
    beneficios: [
      "Apareça no topo do Google instantaneamente",
      "Pague apenas por cliques",
      "Segmentação precisa por palavras-chave",
      "Relatórios transparentes mensais",
      "Otimização contínua de campanhas",
      "Acompanhamento de conversões",
    ],
    cta: {
      titulo: "Comece a atrair clientes pelo Google",
      texto: "Solicite uma análise gratuita das suas oportunidades no Google Ads.",
    },
  },
  {
    slug: "seo-otimizacao-de-sites",
    titulo: "SEO - Otimização de Sites para Google",
    subtitulo: "Posicione seu site nas primeiras páginas do Google de forma orgânica",
    metaTitle: "SEO e Otimização de Sites para Google | Nexa Lume Digital",
    metaDescription: "Serviço de SEO profissional para posicionar seu site no Google. Análise técnica, conteúdo otimizado e link building. Aumente seu tráfego orgânico!",
    keywords: ["seo otimização de sites", "posicionamento google", "seo profissional", "otimização para google"],
    categoria: "marketing",
    heroText: "Apareça no Google sem pagar por cliques. SEO é o investimento que continua gerando resultados no longo prazo.",
    sections: [
      {
        titulo: "O que é SEO e por que é importante",
        conteudo: "SEO (Search Engine Optimization) é o conjunto de técnicas para melhorar o posicionamento do seu site nos resultados orgânicos do Google. Diferente dos anúncios pagos, os resultados orgânicos não têm custo por clique e transmitem mais credibilidade para os usuários. Um bom trabalho de SEO pode transformar seu site em uma fonte constante de visitantes e clientes.",
      },
      {
        titulo: "Nosso processo de SEO",
        conteudo: "Realizamos auditoria técnica completa, pesquisa de palavras-chave estratégicas, otimização on-page (títulos, meta descriptions, headings, conteúdo), melhoria de velocidade e experiência do usuário, estratégia de conteúdo e link building ético. Acompanhamos rankings e ajustamos a estratégia continuamente.",
      },
      {
        titulo: "Resultados a longo prazo",
        conteudo: "SEO não é mágica instantânea, mas um investimento que se paga muitas vezes. Enquanto anúncios param de trazer visitantes quando você para de pagar, o SEO continua gerando tráfego mês após mês. É construção de patrimônio digital para sua empresa.",
      },
    ],
    beneficios: [
      "Tráfego orgânico sem custo por clique",
      "Credibilidade e autoridade no Google",
      "Resultados duradouros",
      "Auditoria técnica completa",
      "Relatórios de posicionamento",
      "Estratégia de conteúdo incluída",
    ],
    cta: {
      titulo: "Conquiste as primeiras posições do Google",
      texto: "Solicite uma auditoria SEO gratuita do seu site.",
    },
  },
];

export function getEspecialidadeBySlug(slug: string): Especialidade | undefined {
  return ESPECIALIDADES.find((e) => e.slug === slug);
}

export function getEspecialidadesByCategoria(categoria: string): Especialidade[] {
  return ESPECIALIDADES.filter((e) => e.categoria === categoria);
}

export function getAllEspecialidadesSlugs(): string[] {
  return ESPECIALIDADES.map((e) => e.slug);
}
