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

  // ==========================================
  // SITES - NOVOS NICHOS (20 especialidades)
  // ==========================================

  {
    slug: "criacao-de-site-para-contadores",
    titulo: "Criação de Site para Contadores",
    subtitulo: "Sites profissionais que posicionam seu escritório contábil como referência no mercado",
    metaTitle: "Criação de Site para Contadores e Escritórios | Nexa Lume",
    metaDescription: "Sites profissionais para contadores e escritórios de contabilidade. Design moderno, captação de leads e SEO otimizado. Solicite orçamento grátis!",
    keywords: ["site para contador", "site escritório contabilidade", "site contábil", "marketing para contadores"],
    categoria: "sites",
    heroText: "Empresários buscam contadores no Google. Seu escritório precisa aparecer com autoridade e profissionalismo para conquistar esses clientes.",
    sections: [
      {
        titulo: "A transformação digital da contabilidade",
        conteudo: "O mercado contábil está em plena transformação digital. Empresários modernos pesquisam online antes de escolher seu contador, comparando serviços, especializações e avaliações. Um site profissional não é mais diferencial — é requisito básico para competir. Escritórios que investem em presença digital conseguem atrair clientes maiores, cobrar honorários mais justos e se posicionar como autoridades em nichos específicos como contabilidade para médicos, e-commerce ou startups. A primeira impressão digital pode definir se um potencial cliente vai entrar em contato ou seguir para o concorrente.",
      },
      {
        titulo: "Elementos estratégicos para sites contábeis",
        conteudo: "Desenvolvemos sites que comunicam competência e confiança. Incluímos apresentação clara dos serviços (abertura de empresa, contabilidade mensal, consultoria tributária), área de especialização por segmento, calculadoras de impostos para engajamento, blog com conteúdo sobre legislação e tributação, área do cliente para download de documentos, integração com WhatsApp e formulários de captação inteligentes. O design transmite a seriedade que empresários esperam de quem vai cuidar das suas finanças, com elementos modernos que mostram que seu escritório acompanha as tendências.",
      },
      {
        titulo: "SEO para contabilidade: apareça para quem precisa",
        conteudo: "Otimizamos seu site para buscas estratégicas como 'escritório de contabilidade em São Paulo', 'contador para MEI', 'contabilidade para médicos', entre outras. Criamos conteúdo que responde às principais dúvidas dos empresários, posicionando seu escritório como fonte confiável de informação. Isso atrai tráfego qualificado de pessoas que já estão procurando um contador, aumentando significativamente suas chances de conversão.",
      },
      {
        titulo: "Captação de leads e automação",
        conteudo: "Implementamos sistemas de captação que funcionam 24 horas. Formulários estratégicos que coletam informações relevantes sobre o potencial cliente, integração com CRM para follow-up automatizado, e-books e materiais ricos para nutrição de leads. Seu site trabalha captando oportunidades mesmo enquanto você está atendendo outros clientes.",
      },
    ],
    beneficios: [
      "Design que transmite credibilidade e competência",
      "SEO otimizado para buscas locais e segmentadas",
      "Blog com conteúdo tributário para autoridade",
      "Formulários de captação de leads inteligentes",
      "Área do cliente para documentos",
      "Integração com WhatsApp Business",
    ],
    cta: {
      titulo: "Posicione seu escritório contábil no digital",
      texto: "Solicite uma proposta personalizada e transforme seu site em uma máquina de captação de clientes empresariais.",
    },
  },
  {
    slug: "criacao-de-site-para-psicologos",
    titulo: "Criação de Site para Psicólogos",
    subtitulo: "Sites acolhedores que transmitem confiança e facilitam o agendamento de consultas",
    metaTitle: "Criação de Site para Psicólogos | Nexa Lume Digital",
    metaDescription: "Sites profissionais para psicólogos e clínicas de psicologia. Design acolhedor, agendamento online e SEO para atrair pacientes. Orçamento grátis!",
    keywords: ["site para psicólogo", "site psicologia", "site consultório psicologia", "marketing para psicólogos"],
    categoria: "sites",
    heroText: "Pessoas em busca de ajuda emocional pesquisam no Google. Seu site pode ser o primeiro passo na jornada de transformação delas.",
    sections: [
      {
        titulo: "A importância da presença digital para psicólogos",
        conteudo: "Buscar ajuda psicológica ainda carrega estigmas, e muitas pessoas preferem pesquisar online antes de dar o primeiro passo. Seu site é frequentemente o primeiro contato — e precisa transmitir acolhimento, profissionalismo e segurança. Um design adequado pode fazer a diferença entre alguém tomar coragem de agendar ou desistir. Sites para psicólogos precisam equilibrar profissionalismo com calor humano, mostrando que por trás da tela existe um profissional preparado para ajudar. A linguagem deve ser acessível, evitando jargões técnicos que podem afastar quem já está vulnerável.",
      },
      {
        titulo: "Elementos essenciais para seu site de psicologia",
        conteudo: "Criamos sites com apresentação humanizada do profissional (sua formação, abordagem terapêutica e experiência), descrição clara das áreas de atendimento (ansiedade, depressão, terapia de casal, etc.), informações sobre atendimento online e presencial, blog com conteúdo de saúde mental para SEO, sistema de agendamento discreto e sigiloso, e design com cores e elementos que transmitem calma e acolhimento. Seguimos todas as diretrizes do CFP para publicidade ética.",
      },
      {
        titulo: "Atendimento online: expanda seu alcance",
        conteudo: "A terapia online cresceu exponencialmente e veio para ficar. Seu site pode ser a porta de entrada para pacientes de qualquer lugar do Brasil. Destacamos essa modalidade, explicamos como funciona e removemos barreiras para que pessoas hesitantes se sintam confortáveis em experimentar. Integramos com plataformas seguras de videochamada que garantem o sigilo necessário para a relação terapêutica.",
      },
      {
        titulo: "SEO sensível: apareça para quem precisa de ajuda",
        conteudo: "Otimizamos seu site para buscas como 'psicólogo para ansiedade', 'terapia online', 'psicóloga em [sua cidade]', sempre com sensibilidade. O conteúdo é criado para informar e acolher, nunca para explorar vulnerabilidades. Isso posiciona você como referência e atrai pacientes que realmente precisam do seu trabalho.",
      },
    ],
    beneficios: [
      "Design acolhedor que transmite confiança",
      "Sistema de agendamento online sigiloso",
      "Conteúdo de saúde mental para SEO",
      "Destaque para atendimento online",
      "Responsivo e rápido em mobile",
      "Conformidade com diretrizes do CFP",
    ],
    cta: {
      titulo: "Alcance mais pessoas que precisam de ajuda",
      texto: "Solicite uma proposta e veja como podemos criar uma presença digital que conecta você a pacientes que precisam do seu trabalho.",
    },
  },
  {
    slug: "criacao-de-site-para-nutricionistas",
    titulo: "Criação de Site para Nutricionistas",
    subtitulo: "Sites que inspiram transformação e atraem pacientes comprometidos com resultados",
    metaTitle: "Criação de Site para Nutricionistas | Nexa Lume Digital",
    metaDescription: "Sites profissionais para nutricionistas. Design inspirador, blog de nutrição, agendamento online e SEO para atrair mais pacientes. Orçamento!",
    keywords: ["site para nutricionista", "site de nutrição", "marketing para nutricionistas", "site consultório nutrição"],
    categoria: "sites",
    heroText: "Pessoas buscam transformação através da alimentação. Seu site pode ser o início dessa jornada de mudança de vida.",
    sections: [
      {
        titulo: "O digital como aliado da nutrição",
        conteudo: "O interesse por alimentação saudável nunca foi tão alto. Pessoas pesquisam dietas, receitas e profissionais constantemente no Google. Um site profissional posiciona você como autoridade, permite compartilhar conteúdo de valor e atrai pacientes que já chegam motivados e informados. Diferente de depender apenas de indicações, ter presença digital forte permite que você construa uma audiência fiel, seja reconhecido por sua especialidade (emagrecimento, nutrição esportiva, vegetarianismo) e cobre honorários compatíveis com sua expertise.",
      },
      {
        titulo: "O que seu site de nutrição precisa ter",
        conteudo: "Desenvolvemos sites completos com apresentação da sua trajetória e filosofia de trabalho, áreas de especialização claramente definidas, antes e depois de pacientes (com autorização), blog com receitas, dicas e conteúdo educativo, calculadora de IMC ou outras ferramentas interativas, depoimentos de transformação, sistema de agendamento online e integração com WhatsApp. O design inspira saúde, vitalidade e transformação, com imagens que despertam desejo de mudança.",
      },
      {
        titulo: "Conteúdo que atrai e educa",
        conteudo: "Nutrição é um dos temas mais buscados na internet. Criamos estratégia de conteúdo com receitas saudáveis, mitos e verdades sobre alimentação, guias para diferentes objetivos. Esse conteúdo posiciona seu site no Google, atrai visitantes qualificados e demonstra seu conhecimento antes mesmo da primeira consulta. Pacientes chegam já confiando na sua expertise.",
      },
      {
        titulo: "Diferenciação por especialidade",
        conteudo: "O mercado de nutrição é competitivo. Posicionar-se como especialista em um nicho (nutrição infantil, esportiva, para doenças crônicas, plant-based) atrai pacientes específicos dispostos a pagar mais por expertise direcionada. Estruturamos seu site para comunicar claramente sua especialização e dominar as buscas desse nicho.",
      },
    ],
    beneficios: [
      "Design inspirador focado em transformação",
      "Blog com receitas e conteúdo para SEO",
      "Galeria de resultados (antes/depois)",
      "Calculadoras e ferramentas interativas",
      "Agendamento online integrado",
      "Posicionamento por especialidade nutricional",
    ],
    cta: {
      titulo: "Atraia pacientes comprometidos com a mudança",
      texto: "Entre em contato e descubra como um site profissional pode transformar sua prática nutricional.",
    },
  },
  {
    slug: "criacao-de-site-para-personal-trainers",
    titulo: "Criação de Site para Personal Trainers",
    subtitulo: "Sites que vendem seu método e atraem alunos comprometidos com resultados",
    metaTitle: "Criação de Site para Personal Trainers | Nexa Lume Digital",
    metaDescription: "Sites profissionais para personal trainers. Mostre resultados, venda pacotes online e atraia mais alunos. Design que inspira ação. Orçamento!",
    keywords: ["site para personal trainer", "site personal", "marketing para personal trainer", "site treinador pessoal"],
    categoria: "sites",
    heroText: "Seu corpo é seu cartão de visitas. Seu site precisa transmitir a mesma energia e resultados que você entrega aos alunos.",
    sections: [
      {
        titulo: "Por que personal trainers precisam de site próprio",
        conteudo: "Redes sociais são importantes, mas você não as controla. Um site próprio é seu território, onde você define as regras, não depende de algoritmos e constrói autoridade real. Alunos potenciais buscam no Google por personal trainers, pesquisam preços e metodologias antes de se comprometer. Um site profissional transmite que você é sério sobre sua carreira, tem estrutura e entrega resultados comprovados. É a diferença entre parecer mais um personal de academia e se posicionar como especialista em transformação física.",
      },
      {
        titulo: "Elementos que convertem visitantes em alunos",
        conteudo: "Criamos sites que vendem sua metodologia e resultados. Incluímos galeria impactante de transformações, vídeos de treinos e depoimentos, apresentação da sua formação e especializações, descrição clara dos serviços (presencial, online, em grupo), tabela de pacotes e investimento, agendamento de avaliação física, e design que transmite energia, motivação e profissionalismo. Cada elemento é pensado para que o visitante sinta: 'esse é o personal que vai me transformar'.",
      },
      {
        titulo: "Venda de consultoria online e infoprodutos",
        conteudo: "O personal moderno não depende apenas de atendimento presencial. Seu site pode vender consultoria online, planilhas de treino, programas de emagrecimento ou hipertrofia, e-books e mentorias. Estruturamos seu site para essas vendas, com páginas de captura, checkout integrado e entrega automática. Escale sua renda sem escalar suas horas de trabalho.",
      },
      {
        titulo: "SEO local e diferenciação",
        conteudo: "Otimizamos seu site para buscas como 'personal trainer em [bairro]', 'personal para emagrecimento', 'treino para gestantes'. Definimos juntos seu posicionamento e nicho de atuação para atrair exatamente o tipo de aluno que você quer atender e que valoriza seu trabalho.",
      },
    ],
    beneficios: [
      "Galeria de transformações impactante",
      "Vídeos de treino e depoimentos",
      "Venda de consultoria online e infoprodutos",
      "Agendamento de avaliação física",
      "SEO local para sua região",
      "Design que inspira ação e motivação",
    ],
    cta: {
      titulo: "Transforme seu site em máquina de captação de alunos",
      texto: "Solicite uma proposta e eleve sua carreira de personal trainer ao próximo nível.",
    },
  },
  {
    slug: "criacao-de-site-para-arquitetos",
    titulo: "Criação de Site para Arquitetos",
    subtitulo: "Portfólios digitais que impressionam e conquistam projetos de alto valor",
    metaTitle: "Criação de Site para Arquitetos | Nexa Lume Digital",
    metaDescription: "Sites e portfólios profissionais para arquitetos. Design minimalista, galeria de projetos e SEO para atrair clientes qualificados. Orçamento!",
    keywords: ["site para arquiteto", "portfólio arquitetura", "site escritório arquitetura", "marketing para arquitetos"],
    categoria: "sites",
    heroText: "Arquitetura é visual. Seu site precisa ser uma extensão do seu trabalho: impactante, elegante e memorável.",
    sections: [
      {
        titulo: "O portfólio digital como ferramenta de negócios",
        conteudo: "Para arquitetos, o site é muito mais que presença online — é seu portfólio vivo, disponível 24 horas para potenciais clientes. Quando alguém considera construir ou reformar, pesquisa referências e compara profissionais. Um site com projetos bem fotografados e apresentados pode ser o fator decisivo na escolha do arquiteto. Clientes de alto padrão esperam encontrar um site à altura do investimento que farão. Se seu portfólio digital não impressiona, você perde projetos para concorrentes melhor posicionados antes mesmo de ter chance de apresentar seu trabalho pessoalmente.",
      },
      {
        titulo: "Design que reflete sua identidade arquitetônica",
        conteudo: "Criamos sites minimalistas e elegantes que funcionam como extensão do seu estilo. Galeria de projetos com navegação intuitiva, fotografias em alta resolução com zoom, descrição técnica e conceitual de cada trabalho, filtros por tipologia (residencial, comercial, interiores), apresentação da equipe e filosofia do escritório. O layout é limpo, deixando os projetos como protagonistas, exatamente como deve ser.",
      },
      {
        titulo: "Funcionalidades para converter visitantes em clientes",
        conteudo: "Além do portfólio, incluímos elementos que geram negócios: formulário de briefing inicial para novos projetos, área de serviços detalhando escopo e processo de trabalho, depoimentos de clientes satisfeitos, blog com conteúdo sobre arquitetura e tendências, integração com Instagram (onde muitos arquitetos têm presença forte). Tudo pensado para que o visitante admirado com seus projetos tome a ação de entrar em contato.",
      },
      {
        titulo: "SEO para arquitetura: projetos que aparecem",
        conteudo: "Otimizamos seu site para buscas como 'arquiteto residencial [cidade]', 'escritório de arquitetura [bairro]', 'projeto de interiores'. Também trabalhamos SEO de imagens para que seus projetos apareçam no Google Imagens, uma fonte significativa de tráfego para profissionais visuais.",
      },
    ],
    beneficios: [
      "Design minimalista e elegante",
      "Galeria de projetos em alta resolução",
      "Formulário de briefing para novos clientes",
      "Blog de arquitetura e tendências",
      "SEO otimizado incluindo imagens",
      "Integração com Instagram",
    ],
    cta: {
      titulo: "Apresente seus projetos com a qualidade que merecem",
      texto: "Solicite uma proposta e tenha um site tão impressionante quanto sua arquitetura.",
    },
  },
  {
    slug: "criacao-de-site-para-engenheiros",
    titulo: "Criação de Site para Engenheiros",
    subtitulo: "Sites técnicos e profissionais que transmitem competência e conquistam projetos",
    metaTitle: "Criação de Site para Engenheiros | Nexa Lume Digital",
    metaDescription: "Sites profissionais para engenheiros civis, elétricos e mecânicos. Portfólio de obras, laudos técnicos e captação de projetos. Orçamento grátis!",
    keywords: ["site para engenheiro", "site engenharia", "site engenheiro civil", "marketing para engenheiros"],
    categoria: "sites",
    heroText: "Construtoras e clientes buscam engenheiros confiáveis. Seu site comunica a competência técnica que eles precisam ver.",
    sections: [
      {
        titulo: "Presença digital para engenheiros autônomos e escritórios",
        conteudo: "O mercado de engenharia é competitivo, e muitos profissionais dependem exclusivamente de indicações. Um site profissional amplia suas oportunidades, permitindo que construtoras, empresas e clientes particulares encontrem você através de buscas no Google. Seja para projetos estruturais, elétricos, laudos técnicos ou acompanhamento de obras, ter uma presença digital sólida posiciona você como profissional atualizado e estruturado. Engenheiros com sites bem construídos transmitem a mesma competência técnica que aplicam em seus projetos.",
      },
      {
        titulo: "Elementos essenciais para sites de engenharia",
        conteudo: "Desenvolvemos sites com portfólio de obras e projetos executados, áreas de atuação claramente definidas (engenharia civil, elétrica, mecânica, consultoria), registro do CREA e certificações, equipe técnica e qualificações, descrição detalhada dos serviços oferecidos (projetos, laudos, ART, fiscalização), formulário para solicitação de orçamentos e área para download de documentos técnicos quando necessário.",
      },
      {
        titulo: "Captação de projetos e parcerias",
        conteudo: "Seu site pode ser fonte constante de novos projetos. Criamos landing pages específicas para cada serviço (laudo de vizinhança, projeto estrutural, consultoria), otimizadas para as buscas que potenciais clientes fazem. Também estruturamos páginas para parcerias com construtoras e incorporadoras, posicionando seu escritório como fornecedor confiável para projetos maiores.",
      },
      {
        titulo: "Credibilidade técnica e compliance",
        conteudo: "Sites de engenharia precisam transmitir seriedade absoluta. Incluímos número de registro CREA, certificações, seguros profissionais e tudo que comprova sua habilitação legal. O design é sóbrio e profissional, com elementos que reforçam competência técnica sem parecer amador ou exagerado.",
      },
    ],
    beneficios: [
      "Portfólio de obras e projetos",
      "Áreas de atuação bem definidas",
      "Destaque para CREA e certificações",
      "Landing pages por tipo de serviço",
      "Formulário de orçamento inteligente",
      "Design técnico e profissional",
    ],
    cta: {
      titulo: "Conquiste mais projetos com presença digital sólida",
      texto: "Entre em contato para uma proposta personalizada para engenheiros.",
    },
  },
  {
    slug: "criacao-de-site-para-corretores-de-imoveis",
    titulo: "Criação de Site para Corretores de Imóveis",
    subtitulo: "Sites que apresentam seu portfólio de imóveis e geram leads qualificados",
    metaTitle: "Criação de Site para Corretores de Imóveis | Nexa Lume",
    metaDescription: "Sites profissionais para corretores de imóveis. Catálogo de propriedades, captação de leads e SEO imobiliário. Destaque-se da concorrência!",
    keywords: ["site para corretor de imóveis", "site imobiliário", "marketing para corretores", "site corretor CRECI"],
    categoria: "sites",
    heroText: "Clientes pesquisam imóveis online antes de contatar corretores. Ter seu próprio site diferencia você no mercado saturado.",
    sections: [
      {
        titulo: "Por que corretores precisam de site próprio",
        conteudo: "Depender apenas de portais imobiliários significa competir diretamente com centenas de outros corretores pelo mesmo cliente. Um site próprio é sua vitrine exclusiva, onde você controla a experiência, destaca seus diferenciais e captura leads que são só seus. Corretores com sites profissionais são percebidos como mais estabelecidos e confiáveis. Além disso, você pode trabalhar SEO para nichos específicos (imóveis de luxo, lançamentos, determinado bairro) e se tornar referência para buscas que portais genéricos não conseguem dominar.",
      },
      {
        titulo: "Catálogo de imóveis profissional",
        conteudo: "Criamos sistemas de catálogo com filtros por localização, tipo, faixa de preço e características. Cada imóvel tem página própria com galeria de fotos, tour virtual (quando disponível), descrição detalhada, mapa de localização e formulário de interesse. O sistema permite que você atualize imóveis facilmente, mantenha o catálogo sempre atual e destaque as melhores oportunidades.",
      },
      {
        titulo: "Captação de leads e CRM",
        conteudo: "Seu site trabalha 24 horas captando interessados. Formulários em cada imóvel, landing pages para lançamentos, pop-ups de captação para newsletter imobiliária. Integramos com seu CRM para que cada lead seja automaticamente registrado e você possa fazer follow-up eficiente. Também implementamos alertas de novos imóveis para manter leads engajados.",
      },
      {
        titulo: "Sua marca pessoal no mercado imobiliário",
        conteudo: "Mais que imóveis, seu site vende você. Incluímos seção sobre sua trajetória, número do CRECI, especializações (alto padrão, investimento, primeira compra), depoimentos de clientes satisfeitos e conteúdo que demonstra seu conhecimento do mercado local. Isso constrói confiança e faz clientes escolherem você entre tantas opções.",
      },
    ],
    beneficios: [
      "Catálogo de imóveis com filtros avançados",
      "Página individual para cada propriedade",
      "Captação de leads em cada imóvel",
      "Integração com CRM imobiliário",
      "SEO para buscas locais de imóveis",
      "Sua marca pessoal em destaque",
    ],
    cta: {
      titulo: "Destaque-se no mercado imobiliário",
      texto: "Solicite uma proposta e tenha um site que diferencia você da concorrência.",
    },
  },
  {
    slug: "criacao-de-site-para-restaurantes",
    titulo: "Criação de Site para Restaurantes",
    subtitulo: "Sites que abrem o apetite e transformam visitantes em clientes na porta",
    metaTitle: "Criação de Site para Restaurantes | Nexa Lume Digital",
    metaDescription: "Sites profissionais para restaurantes. Cardápio digital, reservas online, integração delivery e SEO local. Atraia mais clientes famintos!",
    keywords: ["site para restaurante", "site restaurante cardápio", "cardápio digital", "marketing para restaurantes"],
    categoria: "sites",
    heroText: "Comida também se come com os olhos. Seu site precisa despertar o desejo antes mesmo do cliente provar seu prato.",
    sections: [
      {
        titulo: "O papel do site na decisão de onde comer",
        conteudo: "Quando alguém pesquisa 'restaurante italiano perto de mim' ou 'onde jantar em [bairro]', o que aparece pode definir a noite. Um site com fotos apetitosas, cardápio claro e reservas fáceis converte curiosos em clientes. Já um site desatualizado ou inexistente faz seu restaurante perder para concorrentes mais preparados. O site também é essencial para quem busca informações antes de uma ocasião especial — aniversário, jantar de negócios, pedido de casamento. Essas são oportunidades de ticket alto que exigem pesquisa prévia.",
      },
      {
        titulo: "Cardápio digital que vende",
        conteudo: "Criamos cardápios digitais lindos e funcionais. Fotos profissionais dos pratos principais, descrições que despertam desejo, preços claros e organização por categoria. O cardápio carrega rápido no celular (essencial para quem está pesquisando na rua), pode ter versões em outros idiomas para turistas e é facilmente atualizável quando você muda o menu. Também podemos integrar QR Code para cardápio na mesa.",
      },
      {
        titulo: "Reservas online e integração com delivery",
        conteudo: "Sistema de reservas que funciona 24 horas, sem depender de telefone. O cliente escolhe data, horário, número de pessoas e ocasião, você recebe confirmação automática. Para delivery, integramos com seu sistema próprio ou direcionamos para iFood, Rappi e similares. Tudo para facilitar a vida de quem quer experimentar seu restaurante.",
      },
      {
        titulo: "SEO gastronômico local",
        conteudo: "Otimizamos seu site para buscas cruciais: 'restaurante japonês [bairro]', 'melhor pizza em [cidade]', 'restaurante para aniversário'. Integramos com Google Meu Negócio e trabalhamos para que você apareça no Google Maps com destaque. Reviews e fotos de clientes também são estratégias que implementamos para aumentar sua visibilidade.",
      },
    ],
    beneficios: [
      "Cardápio digital visual e atualizado",
      "Sistema de reservas online",
      "Integração com apps de delivery",
      "Fotos profissionais dos pratos",
      "SEO local para gastronomia",
      "QR Code para cardápio na mesa",
    ],
    cta: {
      titulo: "Sirva uma experiência digital à altura da sua cozinha",
      texto: "Solicite orçamento e transforme seu site em extensão do seu restaurante.",
    },
  },
  {
    slug: "criacao-de-site-para-academias",
    titulo: "Criação de Site para Academias",
    subtitulo: "Sites que motivam a matrícula e mostram a energia do seu espaço fitness",
    metaTitle: "Criação de Site para Academias de Musculação | Nexa Lume",
    metaDescription: "Sites profissionais para academias. Tour virtual, horário de aulas, matrícula online e SEO local. Atraia mais alunos para sua academia!",
    keywords: ["site para academia", "site academia musculação", "marketing para academias", "site fitness"],
    categoria: "sites",
    heroText: "A decisão de se matricular numa academia é emocional. Seu site precisa transmitir energia, motivação e resultados.",
    sections: [
      {
        titulo: "O site como porta de entrada da academia",
        conteudo: "Antes de visitar pessoalmente, potenciais alunos pesquisam academias online. Comparam estrutura, preços, localização e vibe. Seu site é a primeira impressão — e precisa fazer o visitante sentir que sua academia é o lugar certo para a transformação que ele busca. Academias sem site ou com sites amadores perdem alunos para concorrentes que investem em presença digital, mesmo que a estrutura física seja inferior. A percepção é realidade no momento da decisão.",
      },
      {
        titulo: "Elementos que vendem matrículas",
        conteudo: "Desenvolvemos sites com tour virtual ou vídeo da estrutura, galeria de equipamentos e ambientes, grade de aulas coletivas (spinning, funcional, yoga, etc.), perfil dos professores, depoimentos e transformações de alunos, planos e preços claros, formulário de visita agendada ou matrícula online. O design transmite energia, com cores vibrantes e imagens de pessoas em movimento.",
      },
      {
        titulo: "Matrícula online e integração com gestão",
        conteudo: "Facilite a vida de quem quer começar: matrícula online com pagamento integrado, sem precisar ir até a recepção. Integramos com sistemas de gestão de academias como Tecnofit, Pacto ou seu sistema atual. Novos alunos podem começar a malhar no dia seguinte à matrícula.",
      },
      {
        titulo: "SEO local para fitness",
        conteudo: "Otimizamos para buscas como 'academia em [bairro]', 'academia 24 horas [cidade]', 'crossfit perto de mim'. Trabalhamos Google Meu Negócio com fotos atualizadas, reviews e informações precisas. Seu objetivo é aparecer quando alguém na região decide que é hora de cuidar da saúde.",
      },
    ],
    beneficios: [
      "Tour virtual da estrutura",
      "Grade de aulas atualizada",
      "Matrícula online com pagamento",
      "Integração com sistema de gestão",
      "SEO local para sua região",
      "Design energético e motivador",
    ],
    cta: {
      titulo: "Atraia mais alunos para sua academia",
      texto: "Solicite uma proposta e tenha um site que converte visitantes em matriculados.",
    },
  },
  {
    slug: "criacao-de-site-para-saloes-de-beleza",
    titulo: "Criação de Site para Salões de Beleza",
    subtitulo: "Sites elegantes que atraem clientes e facilitam agendamentos de serviços",
    metaTitle: "Criação de Site para Salões de Beleza | Nexa Lume Digital",
    metaDescription: "Sites profissionais para salões de beleza. Portfólio de trabalhos, agendamento online e SEO local. Atraia mais clientes para seu salão!",
    keywords: ["site para salão de beleza", "site cabeleireiro", "site salão cabelo", "marketing para salões"],
    categoria: "sites",
    heroText: "Beleza inspira confiança. Seu site precisa ser tão impecável quanto os resultados que você entrega às suas clientes.",
    sections: [
      {
        titulo: "A importância do digital para salões de beleza",
        conteudo: "Clientes de salão pesquisam no Instagram e no Google antes de agendar. Querem ver trabalhos anteriores, conhecer os profissionais e ter certeza de que estão fazendo a escolha certa — afinal, é a aparência delas em jogo. Um site profissional complementa suas redes sociais, oferecendo informações organizadas, sistema de agendamento e uma presença mais 'séria' que transmite que seu salão é estabelecido e confiável. Também ajuda a aparecer em buscas locais e captar clientes que não seguem você no Instagram.",
      },
      {
        titulo: "Portfólio visual de trabalhos",
        conteudo: "Criamos galerias organizadas por tipo de serviço: coloração, cortes, tratamentos, penteados para festas, alongamentos. Cada trabalho pode ter foto antes/depois, nome do profissional que executou e descrição técnica. Clientes podem navegar e encontrar exatamente a inspiração que procuram, chegando ao salão já sabendo o que querem.",
      },
      {
        titulo: "Agendamento online que funciona",
        conteudo: "Sistema de agendamento por profissional e serviço, com horários disponíveis em tempo real. A cliente escolhe o que quer fazer, com quem, e em qual horário — tudo sem precisar ligar ou trocar mensagens. Confirmações automáticas por WhatsApp reduzem faltas e otimizam a agenda do salão.",
      },
      {
        titulo: "Apresentação da equipe e serviços",
        conteudo: "Cada profissional do salão merece destaque: foto, especialidades, anos de experiência. Lista completa de serviços com descrição e faixa de preço. Isso ajuda a cliente a entender o que esperar e já chegar decidida, agilizando o atendimento.",
      },
    ],
    beneficios: [
      "Portfólio visual de trabalhos realizados",
      "Agendamento online por profissional",
      "Perfil de cada membro da equipe",
      "Lista de serviços com preços",
      "Integração com Instagram",
      "SEO local para sua região",
    ],
    cta: {
      titulo: "Eleve a presença digital do seu salão",
      texto: "Solicite uma proposta e tenha um site à altura do seu trabalho.",
    },
  },
  {
    slug: "criacao-de-site-para-petshops",
    titulo: "Criação de Site para Petshops",
    subtitulo: "Sites completos para petshops com loja online, agendamento de banho e veterinário",
    metaTitle: "Criação de Site para Petshops | Nexa Lume Digital",
    metaDescription: "Sites profissionais para petshops. Loja online de produtos pet, agendamento de banho/tosa e serviços veterinários. Atraia tutores apaixonados!",
    keywords: ["site para petshop", "site petshop com loja", "marketing para petshop", "site banho e tosa"],
    categoria: "sites",
    heroText: "Tutores de pets buscam o melhor para seus companheiros. Seu site precisa mostrar que você compartilha esse amor.",
    sections: [
      {
        titulo: "O mercado pet em expansão digital",
        conteudo: "O mercado pet brasileiro é um dos maiores do mundo e cresce acima da economia. Tutores tratam seus pets como família e pesquisam online por produtos, serviços de banho e tosa, veterinários e hotéis para pets. Um site profissional posiciona seu petshop como referência no bairro, permite vendas online e facilita agendamentos. Enquanto muitos petshops ainda operam de forma tradicional, os que investem em presença digital capturam clientes dos concorrentes e fidelizam com experiência superior.",
      },
      {
        titulo: "Loja online de produtos pet",
        conteudo: "Desenvolvemos e-commerce completo para seu petshop: rações, acessórios, brinquedos, medicamentos (seguindo regulamentações), higiene. Filtros por espécie, porte e necessidade especial. Carrinho de compras, pagamento online e opção de retirada na loja ou delivery no bairro. Para clientes recorrentes (ração mensal), implementamos sistema de assinatura.",
      },
      {
        titulo: "Agendamento de serviços",
        conteudo: "Banho e tosa, consultas veterinárias, vacinação, hotel pet — tudo agendável online. O sistema mostra horários disponíveis, permite adicionar observações sobre o pet e envia confirmações automáticas. Reduz ligações e mensagens, organiza a agenda e diminui faltas.",
      },
      {
        titulo: "Conteúdo e fidelização",
        conteudo: "Blog com dicas de cuidados pet, calendário de vacinação, guias de alimentação por raça. Esse conteúdo atrai tráfego orgânico e posiciona seu petshop como especialista. Também implementamos programa de fidelidade digital: a cada serviço ou compra, pontos que valem descontos.",
      },
    ],
    beneficios: [
      "Loja online de produtos pet",
      "Agendamento de banho e tosa online",
      "Sistema de assinatura para rações",
      "Blog com conteúdo pet para SEO",
      "Programa de fidelidade digital",
      "SEO local para petshops",
    ],
    cta: {
      titulo: "Transforme seu petshop em referência digital",
      texto: "Solicite uma proposta e conquiste tutores apaixonados da sua região.",
    },
  },
  {
    slug: "criacao-de-site-para-escolas",
    titulo: "Criação de Site para Escolas",
    subtitulo: "Sites institucionais que transmitem confiança e facilitam a comunicação com famílias",
    metaTitle: "Criação de Site para Escolas | Nexa Lume Digital",
    metaDescription: "Sites profissionais para escolas e colégios. Área para pais, calendário escolar, matrículas online e comunicação institucional. Orçamento!",
    keywords: ["site para escola", "site colégio", "site institucional escola", "marketing para escolas"],
    categoria: "sites",
    heroText: "Pais pesquisam escolas online antes de confiar a educação dos filhos. Seu site é a primeira aula sobre sua instituição.",
    sections: [
      {
        titulo: "O site como vitrine institucional",
        conteudo: "A escolha de uma escola é uma das decisões mais importantes para uma família. Antes de visitar, pais pesquisam extensivamente online: proposta pedagógica, estrutura, valores, localização e mensalidades. Um site completo e profissional transmite a seriedade e qualidade que eles buscam. Escolas com sites desatualizados ou amadores passam impressão de descuido — e pais pensam: 'se não cuidam do site, cuidarão dos meus filhos?'. Um investimento em presença digital é investimento em captação de alunos.",
      },
      {
        titulo: "Informações que pais precisam encontrar",
        conteudo: "Desenvolvemos sites com proposta pedagógica clara, níveis de ensino oferecidos, estrutura física com fotos e tour virtual, corpo docente e suas qualificações, atividades extracurriculares, calendário escolar, valores de mensalidade e formas de pagamento, processo de matrícula detalhado. Tudo organizado de forma intuitiva para que pais encontrem rapidamente o que buscam.",
      },
      {
        titulo: "Área restrita para pais e alunos",
        conteudo: "Portal do aluno e da família com boletins, frequência, comunicados, calendário de provas, material didático complementar e canal direto com professores. Isso moderniza a comunicação escola-família, reduz papel e mantém todos informados em tempo real.",
      },
      {
        titulo: "Matrícula e rematrícula online",
        conteudo: "Processo de matrícula digital: formulários, upload de documentos, análise online e pagamento da taxa de reserva. Para alunos existentes, rematrícula automática com poucos cliques. Facilita a vida das famílias e desafoga a secretaria.",
      },
    ],
    beneficios: [
      "Apresentação completa da proposta pedagógica",
      "Tour virtual da estrutura",
      "Portal do aluno e família",
      "Matrícula e rematrícula online",
      "Calendário escolar integrado",
      "SEO para buscas educacionais",
    ],
    cta: {
      titulo: "Modernize a presença digital da sua escola",
      texto: "Solicite uma proposta e atraia mais famílias para sua instituição.",
    },
  },
  {
    slug: "criacao-de-site-para-igrejas",
    titulo: "Criação de Site para Igrejas",
    subtitulo: "Sites que conectam comunidades de fé e facilitam a participação dos membros",
    metaTitle: "Criação de Site para Igrejas | Nexa Lume Digital",
    metaDescription: "Sites profissionais para igrejas e comunidades religiosas. Transmissões online, dízimo digital, eventos e ministérios. Conecte sua comunidade!",
    keywords: ["site para igreja", "site comunidade religiosa", "dízimo online", "site ministério"],
    categoria: "sites",
    heroText: "A mensagem é eterna. A forma de compartilhá-la evolui. Seu site leva a comunidade de fé para o mundo digital.",
    sections: [
      {
        titulo: "A igreja no mundo digital",
        conteudo: "A pandemia acelerou a digitalização das igrejas, mas a presença online vai muito além de transmitir cultos. Um site bem estruturado permite que novos visitantes conheçam sua comunidade antes do primeiro culto, que membros acessem recursos espirituais durante a semana, que pessoas de outras cidades participem da sua mensagem. É extensão da missão evangelizadora para o ambiente onde as pessoas passam cada vez mais tempo: a internet.",
      },
      {
        titulo: "Funcionalidades para comunidades de fé",
        conteudo: "Criamos sites com apresentação da visão e valores da igreja, horários de cultos e células/grupos, transmissão ao vivo e arquivo de pregações, ministérios e como participar, devocional diário ou semanal, calendário de eventos, galeria de fotos da comunidade. Tudo acessível e acolhedor para visitantes de primeira viagem.",
      },
      {
        titulo: "Dízimo e ofertas digitais",
        conteudo: "Sistema de contribuição online seguro: dízimo recorrente, ofertas específicas, campanhas missionárias. Integração com PIX, cartão de crédito e boleto. Relatório transparente para doadores e para a administração da igreja. Facilita a fidelidade financeira de membros que esquecem dinheiro ou estão distantes.",
      },
      {
        titulo: "Comunicação e engajamento",
        conteudo: "Newsletter com devocionais e novidades, grupos de WhatsApp por ministério, área de pedidos de oração online, sistema de cadastro de novos convertidos. Mantemos a comunidade conectada além do momento do culto, fortalecendo vínculos e participação.",
      },
    ],
    beneficios: [
      "Transmissão ao vivo de cultos",
      "Arquivo de pregações em áudio e vídeo",
      "Sistema de dízimo e ofertas online",
      "Calendário de eventos e células",
      "Pedidos de oração digitais",
      "Newsletter devocional automática",
    ],
    cta: {
      titulo: "Expanda o alcance da sua mensagem",
      texto: "Entre em contato e leve sua comunidade de fé para o digital.",
    },
  },
  {
    slug: "criacao-de-site-para-ongs",
    titulo: "Criação de Site para ONGs",
    subtitulo: "Sites que comunicam sua causa e mobilizam doadores e voluntários",
    metaTitle: "Criação de Site para ONGs | Nexa Lume Digital",
    metaDescription: "Sites profissionais para ONGs e organizações sociais. Captação de doações, recrutamento de voluntários e transparência de resultados. Orçamento!",
    keywords: ["site para ong", "site organização social", "site terceiro setor", "captação de doações online"],
    categoria: "sites",
    heroText: "Sua causa merece visibilidade. Um site profissional amplifica seu impacto e conecta você a quem quer ajudar.",
    sections: [
      {
        titulo: "A importância do digital para o terceiro setor",
        conteudo: "Doadores e voluntários modernos pesquisam online antes de se engajar. Querem entender a causa, ver resultados comprovados e ter confiança de que sua contribuição fará diferença. Um site profissional legitima sua organização, conta sua história de forma impactante e facilita a participação. ONGs com presença digital forte captam mais recursos, atraem mais voluntários e conseguem parcerias com empresas que valorizam responsabilidade social.",
      },
      {
        titulo: "Contando sua história de impacto",
        conteudo: "Desenvolvemos sites que emocionam e engajam. Apresentação clara da missão e causa, histórias de beneficiários com fotos e depoimentos, números de impacto (pessoas atendidas, comunidades alcançadas), timeline de conquistas, equipe e fundadores. Usamos storytelling para criar conexão emocional e transformar visitantes em apoiadores.",
      },
      {
        titulo: "Captação de doações simplificada",
        conteudo: "Sistema de doações online com múltiplas opções: doação única, recorrente mensal, valor livre ou sugerido. Integração com PIX, cartão, boleto e PayPal. Possibilidade de criar campanhas específicas (emergências, projetos novos) com termômetro de arrecadação. Emissão automática de recibo para imposto de renda quando aplicável.",
      },
      {
        titulo: "Voluntariado e transparência",
        conteudo: "Formulário de inscrição para voluntários por área de atuação, capacitações disponíveis e próximos mutirões. Seção de prestação de contas com relatórios anuais, demonstrativos financeiros e certificações. A transparência constrói confiança e fideliza doadores de longo prazo.",
      },
    ],
    beneficios: [
      "Sistema de doações online",
      "Histórias de impacto emocionantes",
      "Recrutamento de voluntários",
      "Prestação de contas transparente",
      "Campanhas de arrecadação",
      "Relatórios para doadores",
    ],
    cta: {
      titulo: "Amplifique o impacto da sua organização",
      texto: "Solicite uma proposta e transforme seu site em ferramenta de mudança social.",
    },
  },
  {
    slug: "criacao-de-site-para-startups",
    titulo: "Criação de Site para Startups",
    subtitulo: "Sites modernos que comunicam inovação e atraem investidores e early adopters",
    metaTitle: "Criação de Site para Startups | Nexa Lume Digital",
    metaDescription: "Sites profissionais para startups. Design moderno, landing pages de conversão, pitch para investidores e captação de usuários. Escale rápido!",
    keywords: ["site para startup", "landing page startup", "site empresa tecnologia", "marketing para startups"],
    categoria: "sites",
    heroText: "Startups mudam o mundo. Seu site precisa comunicar a disrupção que você está criando e atrair quem quer fazer parte.",
    sections: [
      {
        titulo: "O site como ferramenta de crescimento",
        conteudo: "Para startups, o site é muito mais que presença institucional — é ferramenta de growth. Landing pages que convertem visitantes em usuários, pitch decks online para investidores, blog que posiciona como thought leader, ferramentas de captura de leads para vendas B2B. Cada elemento é otimizado para métricas de crescimento. Startups competem por atenção em mercados lotados. Um site que não converte é oportunidade desperdiçada em um momento onde cada lead conta.",
      },
      {
        titulo: "Design que comunica inovação",
        conteudo: "Criamos sites com visual contemporâneo que transmite que sua startup está na vanguarda. Animações sutis, micro-interações, tipografia moderna, espaço em branco estratégico. O design reflete a sofisticação do seu produto sem distrair da mensagem principal: o problema que você resolve e por que sua solução é melhor que as alternativas.",
      },
      {
        titulo: "Conversão de usuários e captação de leads",
        conteudo: "Landing pages com headlines focados em benefício, social proof estratégico, CTA claros e urgentes. Para SaaS, fluxo de signup otimizado e trial gratuito bem posicionado. Para B2B, formulários de lead scoring, demos agendáveis e materiais ricos para download. Cada visitante tem jornada clara até a conversão.",
      },
      {
        titulo: "Área para investidores e imprensa",
        conteudo: "Data room simplificado para investidores interessados: pitch deck acessível, métricas de tração, equipe e advisors, FAQ de investimento. Press kit para jornalistas: logo em diferentes formatos, bio dos founders, fotos oficiais, releases anteriores. Facilite a vida de quem quer falar sobre você.",
      },
    ],
    beneficios: [
      "Design moderno e inovador",
      "Landing pages de alta conversão",
      "Integração com ferramentas de growth",
      "Área para investidores",
      "Press kit para imprensa",
      "Blog para thought leadership",
    ],
    cta: {
      titulo: "Acelere o crescimento da sua startup",
      texto: "Entre em contato e tenha um site que escala junto com seu negócio.",
    },
  },
  {
    slug: "criacao-de-loja-virtual-ecommerce",
    titulo: "Criação de Loja Virtual E-commerce",
    subtitulo: "Lojas online completas que vendem 24 horas e escalam seu negócio",
    metaTitle: "Criação de Loja Virtual E-commerce | Nexa Lume Digital",
    metaDescription: "Desenvolvimento de lojas virtuais profissionais. Checkout otimizado, integração pagamentos e logística, SEO para produtos. Venda online!",
    keywords: ["criar loja virtual", "e-commerce profissional", "loja online", "desenvolvimento ecommerce"],
    categoria: "sites",
    heroText: "Sua loja nunca fecha. E-commerce é a expansão que permite vender para o Brasil inteiro sem ampliar seu espaço físico.",
    sections: [
      {
        titulo: "O poder do e-commerce brasileiro",
        conteudo: "O comércio eletrônico brasileiro fatura mais de R$180 bilhões por ano e continua crescendo. Consumidores estão cada vez mais confortáveis comprando online, especialmente após a pandemia. Ter um e-commerce próprio significa independência de marketplaces (e suas taxas), construção de marca própria, dados de clientes em suas mãos e margens melhores. Seja para complementar loja física ou como negócio 100% digital, e-commerce é oportunidade que não para de crescer.",
      },
      {
        titulo: "Loja virtual completa e profissional",
        conteudo: "Desenvolvemos e-commerces com catálogo de produtos organizado, variações (cor, tamanho, etc.), controle de estoque, checkout otimizado para conversão, múltiplas formas de pagamento, cálculo de frete automático, área do cliente com histórico de pedidos, cupons de desconto e programa de fidelidade. Tudo administrável por você através de painel intuitivo.",
      },
      {
        titulo: "Integrações essenciais",
        conteudo: "Conectamos sua loja com gateways de pagamento (Mercado Pago, PagSeguro, Stripe), transportadoras e Correios para frete, ERPs e sistemas de gestão, Google Analytics para métricas, remarketing para Facebook e Google. A loja funciona integrada com todo seu ecossistema de negócios.",
      },
      {
        titulo: "SEO para produtos: apareça no Google Shopping",
        conteudo: "Otimizamos cada página de produto para ranquear no Google: títulos, descrições, imagens com alt text, dados estruturados. Configuramos Google Merchant Center para aparecer no Shopping. Seu e-commerce não depende apenas de anúncios — conquista tráfego orgânico de quem está buscando exatamente o que você vende.",
      },
    ],
    beneficios: [
      "Loja completa e fácil de administrar",
      "Checkout otimizado para conversão",
      "Múltiplos meios de pagamento",
      "Integração com transportadoras",
      "SEO para produtos",
      "Suporte técnico contínuo",
    ],
    cta: {
      titulo: "Comece a vender online hoje",
      texto: "Solicite orçamento para sua loja virtual e venda para o Brasil inteiro.",
    },
  },
  {
    slug: "criacao-de-site-para-construtoras",
    titulo: "Criação de Site para Construtoras",
    subtitulo: "Sites institucionais que transmitem solidez e apresentam empreendimentos",
    metaTitle: "Criação de Site para Construtoras | Nexa Lume Digital",
    metaDescription: "Sites profissionais para construtoras e incorporadoras. Portfólio de obras, lançamentos imobiliários e captação de leads. Orçamento grátis!",
    keywords: ["site para construtora", "site incorporadora", "site empreendimentos", "marketing para construtoras"],
    categoria: "sites",
    heroText: "Construtoras constroem sonhos. Seu site precisa materializar a solidez e qualidade que você entrega em cada obra.",
    sections: [
      {
        titulo: "A presença digital de construtoras",
        conteudo: "Comprar um imóvel é uma das maiores decisões financeiras de uma pessoa. Antes de visitar um plantão de vendas, compradores pesquisam extensivamente a construtora: histórico de obras, padrão de acabamento, pontualidade nas entregas, reclamações. Um site institucional robusto transmite a solidez que gera confiança para uma compra de dezenas ou centenas de milhares de reais. Construtoras com presença digital forte vendem mais porque compram mais confiança desde o primeiro contato.",
      },
      {
        titulo: "Portfólio de obras e empreendimentos",
        conteudo: "Apresentamos seu histórico de forma impactante: obras entregues com fotos profissionais, depoimentos de compradores satisfeitos, dados técnicos de cada empreendimento. Para lançamentos, páginas dedicadas com tour virtual, plantas, tabela de preços, localização e diferenciais. Integramos simuladores de financiamento e formulários de interesse.",
      },
      {
        titulo: "Captação de leads qualificados",
        conteudo: "Formulários estratégicos que capturam interessados em empreendimentos específicos, com informações que permitem qualificação (orçamento, finalidade, prazo). Integração com CRM imobiliário para follow-up eficiente. Landing pages para campanhas de lançamento com alta conversão.",
      },
      {
        titulo: "Institucional e relacionamento",
        conteudo: "Seções sobre história da empresa, equipe diretiva, parceiros e fornecedores, certificações e premiações. Área de trabalhe conosco para atrair talentos. Relacionamento com o cliente pós-venda, acompanhamento de obra para compradores. Seu site é o hub central de toda comunicação da construtora.",
      },
    ],
    beneficios: [
      "Portfólio de obras impressionante",
      "Páginas dedicadas por empreendimento",
      "Tour virtual de lançamentos",
      "Simulador de financiamento",
      "Captação de leads qualificados",
      "Acompanhamento de obra online",
    ],
    cta: {
      titulo: "Construa uma presença digital sólida",
      texto: "Solicite uma proposta e transforme seu site em ferramenta de vendas.",
    },
  },
  {
    slug: "criacao-de-site-para-imobiliarias",
    titulo: "Criação de Site para Imobiliárias",
    subtitulo: "Plataformas completas de busca de imóveis que atraem compradores e locatários",
    metaTitle: "Criação de Site para Imobiliárias | Nexa Lume Digital",
    metaDescription: "Sites profissionais para imobiliárias. Catálogo de imóveis com busca avançada, integração com portais e captação de leads. Orçamento!",
    keywords: ["site para imobiliária", "site imobiliário", "portal de imóveis", "marketing imobiliário"],
    categoria: "sites",
    heroText: "Imobiliárias de sucesso dominam o digital. Seu site é onde compradores e locatários encontram o lar dos sonhos.",
    sections: [
      {
        titulo: "O mercado imobiliário é digital",
        conteudo: "A jornada de compra ou locação de imóvel começa no Google. Potenciais clientes pesquisam opções, comparam preços, exploram bairros — tudo online antes de contatar uma imobiliária. Ter um site robusto com catálogo atualizado é requisito para capturar essa demanda. Imobiliárias que dependem apenas de portais terceiros (ZAP, OLX) perdem a oportunidade de construir marca própria, criar relacionamento direto e reduzir custos com comissões e anúncios.",
      },
      {
        titulo: "Catálogo de imóveis profissional",
        conteudo: "Desenvolvemos portais completos com busca avançada por localização, tipo, faixa de preço, número de quartos e mais. Cada imóvel tem página dedicada com galeria de fotos, tour virtual 360°, vídeo, descrição detalhada, mapa de localização, pontos de interesse próximos e formulário de contato. Sistema de favoritos e alertas de novos imóveis para usuários cadastrados.",
      },
      {
        titulo: "Integração com portais e XML",
        conteudo: "Sincronizamos automaticamente seu catálogo com ZAP, Viva Real, OLX e outros portais via XML. Você cadastra uma vez, replica em todos os lugares. Também integramos com sistemas de gestão imobiliária que você já utiliza, garantindo que o site sempre reflita seu inventário real.",
      },
      {
        titulo: "Captação e CRM imobiliário",
        conteudo: "Formulários em cada imóvel capturam leads qualificados com informações de interesse. Integração com CRM para distribuição automática para corretores, tracking de follow-up e relatórios de conversão. Seu site alimenta o pipeline de vendas constantemente.",
      },
    ],
    beneficios: [
      "Catálogo com busca avançada",
      "Tour virtual 360° dos imóveis",
      "Integração XML com portais",
      "Alertas de novos imóveis",
      "CRM integrado para leads",
      "Painel para corretores",
    ],
    cta: {
      titulo: "Domine o mercado imobiliário digital",
      texto: "Solicite uma proposta e tenha um portal de imóveis competitivo.",
    },
  },
  {
    slug: "criacao-de-site-para-hoteis-pousadas",
    titulo: "Criação de Site para Hotéis e Pousadas",
    subtitulo: "Sites com motor de reservas que reduzem dependência de OTAs e aumentam lucro",
    metaTitle: "Criação de Site para Hotéis e Pousadas | Nexa Lume Digital",
    metaDescription: "Sites profissionais para hotéis e pousadas. Motor de reservas direto, galeria de fotos e SEO para turismo. Reduza comissões de OTAs!",
    keywords: ["site para hotel", "site pousada", "motor de reservas hotel", "marketing hoteleiro"],
    categoria: "sites",
    heroText: "Cada reserva direta é lucro que fica com você. Seu site pode ser mais atrativo que Booking ou Airbnb.",
    sections: [
      {
        titulo: "Reservas diretas: a batalha contra as OTAs",
        conteudo: "OTAs como Booking e Expedia cobram comissões de 15-25% por reserva. Para muitos hotéis e pousadas, isso representa uma fatia significativa do faturamento. Um site próprio com motor de reservas permite capturar hóspedes diretamente, oferecendo melhor preço (você pode repassar parte da economia) e construindo relacionamento direto. A estratégia não é abandonar OTAs, mas equilibrar canais e maximizar reservas diretas onde a margem é maior.",
      },
      {
        titulo: "Seu hotel em fotos que encantam",
        conteudo: "Hóspedes compram experiência. Criamos galerias que mostram cada detalhe: quartos em diferentes ângulos, café da manhã apetitoso, áreas de lazer, vistas, entorno. Fotos profissionais em alta resolução, tour virtual 360° dos ambientes. O visitante do site deve sentir que já está lá, apenas esperando para finalizar a reserva.",
      },
      {
        titulo: "Motor de reservas integrado",
        conteudo: "Sistema de reservas direto no site: calendário de disponibilidade em tempo real, tipos de quartos com descrição e preços, seleção de datas e ocupação, pagamento online seguro, confirmação automática. Integramos com channel managers para sincronizar disponibilidade com OTAs e evitar overbooking.",
      },
      {
        titulo: "SEO para turismo e experiências",
        conteudo: "Otimizamos para buscas como 'pousada em [destino]', 'hotel perto de [atração]', 'onde ficar em [cidade]'. Também criamos conteúdo sobre a região: atrações, restaurantes, roteiros — isso atrai tráfego de viajantes em fase de planejamento que podem se tornar hóspedes.",
      },
    ],
    beneficios: [
      "Motor de reservas direto",
      "Galeria de fotos profissional",
      "Tour virtual 360°",
      "Integração com channel manager",
      "SEO para buscas turísticas",
      "Conteúdo sobre a região",
    ],
    cta: {
      titulo: "Aumente suas reservas diretas",
      texto: "Solicite uma proposta e reduza sua dependência de OTAs.",
    },
  },
  {
    slug: "criacao-de-site-para-clinicas-de-estetica",
    titulo: "Criação de Site para Clínicas de Estética",
    subtitulo: "Sites elegantes que atraem pacientes para tratamentos de beleza e rejuvenescimento",
    metaTitle: "Criação de Site para Clínicas de Estética | Nexa Lume Digital",
    metaDescription: "Sites profissionais para clínicas de estética. Apresentação de tratamentos, antes/depois, agendamento online e SEO. Atraia mais pacientes!",
    keywords: ["site para clínica de estética", "site estética", "marketing para clínicas estética", "site harmonização facial"],
    categoria: "sites",
    heroText: "Beleza e bem-estar começam com confiança. Seu site precisa transmitir a excelência que você entrega em cada procedimento.",
    sections: [
      {
        titulo: "O mercado de estética em expansão",
        conteudo: "O Brasil é um dos maiores mercados de estética do mundo. Pessoas buscam tratamentos não apenas por vaidade, mas por autoestima e bem-estar. Antes de escolher uma clínica, pesquisam online: procedimentos oferecidos, resultados, credenciais dos profissionais, avaliações. Um site profissional posiciona sua clínica como referência de qualidade e segurança, atraindo pacientes dispostos a investir em procedimentos de valor mais alto.",
      },
      {
        titulo: "Apresentação de tratamentos",
        conteudo: "Criamos páginas detalhadas para cada procedimento: harmonização facial, preenchimentos, botox, laser, tratamentos corporais, skincare. Explicamos o que é, como funciona, resultados esperados, número de sessões, cuidados pós-procedimento. Usamos linguagem acessível que informa sem assustar, encorajando o visitante a dar o próximo passo.",
      },
      {
        titulo: "Antes e depois que vendem",
        conteudo: "Resultados falam mais que palavras. Galeria de antes/depois (com autorização dos pacientes) organizada por tipo de tratamento. Fotos padronizadas que mostram claramente a transformação. Esses cases são sua melhor ferramenta de vendas — pacientes prospectivos veem resultados reais e se imaginam alcançando o mesmo.",
      },
      {
        titulo: "Confiança e segurança",
        conteudo: "Destacamos registros profissionais (CRM, CRBM), certificações, cursos de especialização. Fotos da clínica mostrando ambiente moderno e equipamentos de ponta. Depoimentos em vídeo de pacientes satisfeitas. Tudo para transmitir que sua clínica é escolha segura para procedimentos que envolvem saúde e aparência.",
      },
    ],
    beneficios: [
      "Páginas detalhadas por tratamento",
      "Galeria de antes e depois",
      "Agendamento de avaliação online",
      "Destaque para certificações",
      "Design elegante e sofisticado",
      "SEO para procedimentos estéticos",
    ],
    cta: {
      titulo: "Atraia pacientes que valorizam qualidade",
      texto: "Solicite uma proposta e eleve o digital da sua clínica de estética.",
    },
  },

  // ==========================================
  // SISTEMAS - 8 especialidades
  // ==========================================

  {
    slug: "desenvolvimento-sistema-crm",
    titulo: "Desenvolvimento de Sistema CRM",
    subtitulo: "CRM sob medida para gestão de clientes, vendas e relacionamento",
    metaTitle: "Desenvolvimento de Sistema CRM Personalizado | Nexa Lume",
    metaDescription: "Desenvolvemos sistemas CRM sob medida para sua empresa. Gestão de leads, funil de vendas, automações e integrações. Orçamento grátis!",
    keywords: ["sistema crm", "crm personalizado", "desenvolvimento crm", "crm para empresas"],
    categoria: "sistemas",
    heroText: "Clientes são seu maior ativo. Um CRM sob medida organiza, automatiza e potencializa cada relacionamento.",
    sections: [
      {
        titulo: "Por que um CRM personalizado?",
        conteudo: "CRMs genéricos como Salesforce ou HubSpot são poderosos, mas vêm com complexidade e custos que nem sempre fazem sentido. Um CRM desenvolvido especificamente para seu negócio inclui apenas o que você precisa, adapta-se ao seu processo de vendas (não o contrário) e integra-se perfeitamente com seus outros sistemas. É a diferença entre usar uma ferramenta que você precisa contornar versus uma que flui naturalmente com seu trabalho. Para empresas com processos específicos, o ROI de um CRM customizado supera rapidamente o investimento.",
      },
      {
        titulo: "Funcionalidades que desenvolvemos",
        conteudo: "Gestão de leads com origem e score, funil de vendas visual com etapas personalizadas, histórico completo de interações por cliente, tarefas e follow-ups com lembretes, propostas e contratos integrados, pipeline de vendas com previsibilidade, relatórios e dashboards customizados. Cada funcionalidade é desenhada para o fluxo real do seu time comercial.",
      },
      {
        titulo: "Automações que economizam tempo",
        conteudo: "Automatizamos tarefas repetitivas: distribuição de leads por vendedor, envio de emails em pontos específicos do funil, criação de tarefas automáticas, alertas de deals parados, relatórios periódicos. Seu time foca em vender enquanto o sistema cuida do operacional.",
      },
      {
        titulo: "Integrações com seu ecossistema",
        conteudo: "Conectamos o CRM com WhatsApp para registro automático de conversas, email para centralização de comunicações, ERP para sincronização de clientes e pedidos, ferramentas de marketing para nutrição de leads, telefonia para ligações com um clique. Tudo num único lugar.",
      },
    ],
    beneficios: [
      "Adaptado ao seu processo de vendas",
      "Funil de vendas visual e personalizável",
      "Automações que economizam tempo",
      "Integração com WhatsApp e email",
      "Relatórios sob medida",
      "Sem mensalidades por usuário",
    ],
    cta: {
      titulo: "Organize e potencialize suas vendas",
      texto: "Solicite uma demonstração e veja como um CRM sob medida transforma seu comercial.",
    },
  },
  {
    slug: "desenvolvimento-sistema-erp",
    titulo: "Desenvolvimento de Sistema ERP",
    subtitulo: "ERP personalizado que integra todos os setores da sua empresa",
    metaTitle: "Desenvolvimento de Sistema ERP Personalizado | Nexa Lume",
    metaDescription: "Desenvolvemos sistemas ERP sob medida. Financeiro, estoque, compras, vendas e produção integrados. Gestão completa da sua empresa!",
    keywords: ["sistema erp", "erp personalizado", "desenvolvimento erp", "erp sob medida"],
    categoria: "sistemas",
    heroText: "Um ERP que se adapta à sua empresa — não o contrário. Integre setores, elimine retrabalho, tome decisões com dados.",
    sections: [
      {
        titulo: "O poder da integração empresarial",
        conteudo: "Empresas que crescem sem integração sofrem: vendas não falam com estoque, financeiro não enxerga compras, produção trabalha às cegas. Planilhas proliferam, dados divergem, decisões são tomadas no escuro. Um ERP integra todos os setores numa única fonte de verdade. Cada transação reflete em tempo real em todos os módulos relevantes. Gestores têm visão completa do negócio. Erros por falta de comunicação desaparecem.",
      },
      {
        titulo: "Módulos que desenvolvemos",
        conteudo: "Financeiro (contas a pagar/receber, fluxo de caixa, conciliação), Estoque (controle, inventário, rastreabilidade), Compras (pedidos, fornecedores, cotações), Vendas (orçamentos, pedidos, faturamento), Produção (ordens, custos, apontamento), Fiscal (NF-e, relatórios, obrigações). Cada módulo é desenvolvido para sua realidade específica, não um template genérico.",
      },
      {
        titulo: "Por que ERP sob medida?",
        conteudo: "ERPs de prateleira exigem que você adapte seu negócio ao software. Processos são alterados para caber no sistema, funcionalidades desnecessárias atrapalham, e customizações custam fortunas. Um ERP desenvolvido para você reflete seus processos reais, inclui apenas o necessário e evolui junto com seu negócio sem dependência de vendors.",
      },
      {
        titulo: "Implantação e migração de dados",
        conteudo: "Não abandonamos você após a entrega. Fazemos migração cuidadosa de dados existentes, treinamento completo dos usuários, período de acompanhamento intensivo e suporte contínuo. A transição é planejada para minimizar impacto nas operações.",
      },
    ],
    beneficios: [
      "Módulos integrados em tempo real",
      "Adaptado aos seus processos",
      "Relatórios gerenciais customizados",
      "Migração de dados incluída",
      "Treinamento completo",
      "Evolui com seu negócio",
    ],
    cta: {
      titulo: "Integre sua empresa com ERP sob medida",
      texto: "Solicite uma análise das suas necessidades e receba proposta personalizada.",
    },
  },
  {
    slug: "sistema-gestao-de-estoque",
    titulo: "Sistema de Gestão de Estoque",
    subtitulo: "Controle completo de inventário com rastreabilidade e alertas inteligentes",
    metaTitle: "Sistema de Gestão de Estoque | Nexa Lume Digital",
    metaDescription: "Sistema de controle de estoque sob medida. Inventário, lote/validade, curva ABC, alertas de reposição e integração com vendas. Orçamento!",
    keywords: ["sistema gestão estoque", "controle de estoque", "software estoque", "inventário sistema"],
    categoria: "sistemas",
    heroText: "Estoque desorganizado é dinheiro parado ou vendas perdidas. Controle inteligente equilibra disponibilidade e capital.",
    sections: [
      {
        titulo: "Os custos do estoque mal gerido",
        conteudo: "Estoque em excesso imobiliza capital, ocupa espaço e pode vencer. Estoque insuficiente gera rupturas, vendas perdidas e clientes frustrados. Sem controle preciso, você não sabe onde está o equilíbrio. Um sistema de gestão de estoque dá visibilidade total: o que tem, onde está, quanto vale, quando repor. Decisões deixam de ser achismo e viram ciência.",
      },
      {
        titulo: "Funcionalidades completas",
        conteudo: "Cadastro de produtos com SKU, variações e código de barras, múltiplos depósitos/localizações, movimentações com rastreabilidade completa, controle de lote e validade, curva ABC automática, ponto de pedido e estoque mínimo, inventário com ajustes, relatórios de giro e cobertura. Interface intuitiva que qualquer funcionário opera.",
      },
      {
        titulo: "Alertas e automações",
        conteudo: "O sistema trabalha por você: alertas quando estoque atinge mínimo, quando produtos vão vencer, quando há divergências. Pode gerar pedidos de compra automáticos, atualizar estoque em tempo real com vendas, e enviar relatórios periódicos para gestores. Você foca nas decisões, não na operação.",
      },
      {
        titulo: "Integrações essenciais",
        conteudo: "Conectamos com seu PDV/ERP para baixa automática de vendas, com e-commerce para sincronização de disponibilidade, com fornecedores para pedidos eletrônicos, com contabilidade para valorização correta. Estoque deixa de ser ilha e integra-se ao ecossistema do negócio.",
      },
    ],
    beneficios: [
      "Controle completo de inventário",
      "Múltiplos depósitos e localizações",
      "Lote e validade com alertas",
      "Curva ABC automática",
      "Integração com vendas e compras",
      "Relatórios de giro e cobertura",
    ],
    cta: {
      titulo: "Assuma o controle do seu estoque",
      texto: "Solicite uma demonstração e veja como simplificamos gestão de inventário.",
    },
  },
  {
    slug: "sistema-para-delivery",
    titulo: "Sistema para Delivery e Entregas",
    subtitulo: "Plataforma completa para gestão de pedidos, entregadores e rotas",
    metaTitle: "Sistema para Delivery e Entregas | Nexa Lume Digital",
    metaDescription: "Sistema de delivery próprio. Cardápio online, gestão de pedidos, app para entregadores e roteirização. Livre-se das taxas de apps!",
    keywords: ["sistema delivery", "plataforma delivery próprio", "sistema para entregas", "app delivery"],
    categoria: "sistemas",
    heroText: "iFood cobra até 27% de comissão. Com delivery próprio, você fica com 100% e constrói relacionamento direto.",
    sections: [
      {
        titulo: "Libertando-se dos marketplaces",
        conteudo: "Apps de delivery como iFood, Rappi e 99Food democratizaram entregas, mas cobram comissões que corroem margens. Para restaurantes e comerciantes com clientela fiel, ter delivery próprio faz sentido financeiro e estratégico. Você controla a experiência, fica com o lucro, tem os dados dos clientes e não compete pelo mesmo espaço com concorrentes. Não é sobre abandonar marketplaces, mas sobre ter canal próprio que complementa e protege seu negócio.",
      },
      {
        titulo: "Plataforma completa de pedidos",
        conteudo: "Cardápio digital bonito e funcional, carrinho de compras intuitivo, múltiplas formas de pagamento (PIX, cartão, dinheiro na entrega), escolha de endereço com cálculo de frete, acompanhamento de pedido em tempo real, histórico e recompra fácil, programa de fidelidade integrado. Tudo acessível pelo celular do cliente sem precisar instalar app.",
      },
      {
        titulo: "Gestão de pedidos e cozinha",
        conteudo: "Painel de pedidos em tempo real com alertas sonoros, impressão automática para cozinha, status de preparo atualizável, tempo estimado de entrega, comunicação com cliente via WhatsApp. A operação flui sem gargalos.",
      },
      {
        titulo: "App para entregadores e rotas",
        conteudo: "Aplicativo para entregadores próprios ou terceirizados: lista de entregas, navegação GPS, confirmação de entrega com foto, registro de ocorrências. Roteirização inteligente para otimizar percurso quando há múltiplas entregas. Você sabe onde cada pedido está a qualquer momento.",
      },
    ],
    beneficios: [
      "Zero comissão para marketplaces",
      "Cardápio digital responsivo",
      "Gestão de pedidos em tempo real",
      "App para entregadores",
      "Programa de fidelidade",
      "Dados dos clientes são seus",
    ],
    cta: {
      titulo: "Monte seu delivery próprio",
      texto: "Solicite uma demonstração e liberte-se das comissões abusivas.",
    },
  },
  {
    slug: "sistema-gestao-de-projetos",
    titulo: "Sistema de Gestão de Projetos",
    subtitulo: "Plataforma personalizada para gerenciar projetos, tarefas e equipes",
    metaTitle: "Sistema de Gestão de Projetos | Nexa Lume Digital",
    metaDescription: "Sistema de gestão de projetos sob medida. Kanban, Gantt, timesheet, recursos e relatórios personalizados. Organize sua operação!",
    keywords: ["sistema gestão projetos", "software projetos", "gestão de tarefas", "kanban empresarial"],
    categoria: "sistemas",
    heroText: "Projetos no controle, entregas no prazo. Sistema de gestão que se adapta à forma como sua equipe trabalha.",
    sections: [
      {
        titulo: "Além do Trello e Asana",
        conteudo: "Ferramentas genéricas de gestão de projetos são ótimo ponto de partida, mas empresas com processos específicos logo encontram limitações. Fluxos que não se encaixam, relatórios que não existem, integrações impossíveis. Um sistema desenvolvido para sua operação reflete exatamente como você trabalha: suas etapas, seus campos, suas regras. É a diferença entre adaptar seu processo à ferramenta e ter ferramenta que amplifica seu processo.",
      },
      {
        titulo: "Funcionalidades sob medida",
        conteudo: "Estrutura de projetos e tarefas como você precisa, visualizações Kanban, Lista e Gantt, campos customizados por tipo de projeto, workflow com automações, timesheet integrado para registro de horas, alocação de recursos com visão de capacidade, comentários e arquivos por tarefa, notificações configuráveis. Cada funcionalidade é construída para seu contexto.",
      },
      {
        titulo: "Visibilidade para gestores",
        conteudo: "Dashboards que mostram o que realmente importa: projetos atrasados, utilização da equipe, rentabilidade por projeto, previsão de entregas. Relatórios customizados exportáveis. Visão macro para decisões estratégicas e drill-down para detalhes operacionais.",
      },
      {
        titulo: "Integrações com seu ecossistema",
        conteudo: "Conectamos com calendário para prazos, com comunicação (Slack, Teams) para notificações, com financeiro para custos de projeto, com CRM para projetos atrelados a clientes, com repositórios para integração com desenvolvimento. Seu sistema de projetos não é ilha.",
      },
    ],
    beneficios: [
      "Adaptado ao seu processo",
      "Visualizações Kanban, Lista e Gantt",
      "Timesheet e alocação de recursos",
      "Dashboards gerenciais",
      "Automações de workflow",
      "Integração com outras ferramentas",
    ],
    cta: {
      titulo: "Organize projetos do seu jeito",
      texto: "Solicite análise das suas necessidades e receba proposta personalizada.",
    },
  },
  {
    slug: "sistema-helpdesk-suporte",
    titulo: "Sistema de Helpdesk e Suporte",
    subtitulo: "Plataforma de atendimento ao cliente com tickets, SLA e base de conhecimento",
    metaTitle: "Sistema de Helpdesk e Suporte | Nexa Lume Digital",
    metaDescription: "Sistema de helpdesk personalizado. Gestão de tickets, SLA, base de conhecimento e relatórios de atendimento. Melhore seu suporte!",
    keywords: ["sistema helpdesk", "software suporte", "sistema de tickets", "atendimento ao cliente"],
    categoria: "sistemas",
    heroText: "Suporte desorganizado frustra clientes e sobrecarrega equipe. Sistema de helpdesk transforma caos em processo.",
    sections: [
      {
        titulo: "O impacto do suporte eficiente",
        conteudo: "Suporte ao cliente pode ser diferencial competitivo ou motivo de churn. Quando solicitações se perdem, respostas demoram e clientes precisam repetir informações, a insatisfação cresce. Um sistema de helpdesk organiza tudo: cada solicitação vira ticket rastreável, SLAs garantem resposta no tempo certo, histórico completo evita retrabalho, relatórios identificam gargalos. Clientes satisfeitos renovam, indicam e toleram erros eventuais.",
      },
      {
        titulo: "Gestão de tickets completa",
        conteudo: "Abertura de tickets por email, formulário, chat ou telefone, categorização e priorização automática, fila de atendimento por equipe/especialidade, workflow com status customizáveis, templates de resposta, encaminhamento e escalação, SLA com alertas de prazo. Cada interação fica registrada no histórico do cliente.",
      },
      {
        titulo: "Base de conhecimento e autoatendimento",
        conteudo: "Portal onde clientes encontram respostas sem abrir ticket: FAQs, tutoriais, vídeos, documentação. Busca inteligente que sugere artigos relevantes. Menos tickets para sua equipe, respostas instantâneas para clientes. Todos ganham.",
      },
      {
        titulo: "Métricas que melhoram o suporte",
        conteudo: "Relatórios de tempo de resposta, resolução, satisfação (NPS/CSAT), volume por categoria, performance por atendente. Dashboards em tempo real para supervisores. Com dados, você identifica onde investir para melhorar e comprova o valor do time de suporte.",
      },
    ],
    beneficios: [
      "Gestão completa de tickets",
      "SLA com alertas automáticos",
      "Base de conhecimento integrada",
      "Múltiplos canais de abertura",
      "Relatórios de performance",
      "Portal do cliente",
    ],
    cta: {
      titulo: "Transforme seu suporte ao cliente",
      texto: "Solicite uma demonstração e veja como organizamos atendimento.",
    },
  },
  {
    slug: "sistema-pdv-ponto-de-venda",
    titulo: "Sistema PDV - Ponto de Venda",
    subtitulo: "Sistema de vendas completo com frente de caixa, NFC-e e controle de estoque",
    metaTitle: "Sistema PDV Ponto de Venda | Nexa Lume Digital",
    metaDescription: "Sistema PDV completo para varejo. Frente de caixa, NFC-e, controle de estoque, múltiplas formas de pagamento. Para lojas e comércios!",
    keywords: ["sistema pdv", "ponto de venda", "software para loja", "sistema para comércio"],
    categoria: "sistemas",
    heroText: "Venda rápido, feche caixa fácil, controle estoque sem erro. PDV que simplifica a operação do seu comércio.",
    sections: [
      {
        titulo: "O coração do varejo",
        conteudo: "O PDV é onde tudo acontece: vendas, pagamentos, emissão fiscal, baixa de estoque. Um sistema lento ou complicado atrasa filas, frustra clientes e sobrecarrega funcionários. Um bom PDV é rápido, intuitivo e integrado — venda registrada automaticamente atualiza estoque, gera nota fiscal e alimenta relatórios gerenciais. Seu comércio flui melhor.",
      },
      {
        titulo: "Frente de caixa completa",
        conteudo: "Interface touch-friendly para tablets ou computadores, busca rápida de produtos por código, nome ou código de barras, múltiplas formas de pagamento (dinheiro, cartão, PIX, vouchers), parcelamento, desconto por item ou total, vendedor comissionado, cupom de desconto, programa de fidelidade. Operação fluida mesmo nos horários de pico.",
      },
      {
        titulo: "Fiscal e compliance",
        conteudo: "Emissão de NFC-e/CF-e SAT integrada, cadastro de clientes com CPF/CNPJ para nota, configuração de alíquotas por produto, relatórios fiscais para contador, cancelamento e carta de correção. Seu negócio opera 100% regularizado.",
      },
      {
        titulo: "Controle e gestão",
        conteudo: "Estoque atualizado a cada venda, abertura e fechamento de caixa com conferência, sangrias e suprimentos registrados, relatórios de vendas por período, produto, vendedor, forma de pagamento. Gestão completa do varejo num único sistema.",
      },
    ],
    beneficios: [
      "Frente de caixa rápida e intuitiva",
      "NFC-e/SAT integrado",
      "Múltiplas formas de pagamento",
      "Controle de estoque em tempo real",
      "Relatórios de vendas completos",
      "Funciona offline",
    ],
    cta: {
      titulo: "Modernize o caixa do seu comércio",
      texto: "Solicite uma demonstração e veja como simplificamos vendas.",
    },
  },
  {
    slug: "sistema-gestao-financeira",
    titulo: "Sistema de Gestão Financeira",
    subtitulo: "Controle financeiro completo com fluxo de caixa, contas e relatórios",
    metaTitle: "Sistema de Gestão Financeira | Nexa Lume Digital",
    metaDescription: "Sistema financeiro empresarial. Contas a pagar/receber, fluxo de caixa, conciliação bancária e relatórios gerenciais. Controle suas finanças!",
    keywords: ["sistema financeiro", "gestão financeira", "controle financeiro empresarial", "fluxo de caixa"],
    categoria: "sistemas",
    heroText: "Dinheiro entrando e saindo sem controle é receita para problemas. Sistema financeiro dá clareza para decisões.",
    sections: [
      {
        titulo: "Visibilidade financeira total",
        conteudo: "Muitas empresas não sabem exatamente quanto têm, quanto vão receber, quanto devem. Planilhas desatualizadas, informações espalhadas, decisões no escuro. Um sistema de gestão financeira centraliza tudo: cada entrada e saída registrada, fluxo de caixa projetado, indicadores atualizados em tempo real. Você sabe exatamente a saúde financeira do negócio e pode agir antes que problemas virem crises.",
      },
      {
        titulo: "Funcionalidades completas",
        conteudo: "Contas a pagar com agendamento e alertas de vencimento, contas a receber com acompanhamento de inadimplência, fluxo de caixa realizado e projetado, conciliação bancária automatizada, centro de custos e rateios, DRE e balanço gerencial, múltiplas contas bancárias e caixas. Cada funcionalidade pensada para gestão financeira empresarial real.",
      },
      {
        titulo: "Automações que evitam erros",
        conteudo: "Importação de extratos bancários para conciliação automática, recorrências para despesas fixas, lembretes de vencimento por email e WhatsApp, geração automática de relatórios mensais. Sistema trabalha enquanto você foca em decisões estratégicas.",
      },
      {
        titulo: "Integração com o restante do negócio",
        conteudo: "Conectamos com PDV/vendas para recebíveis automáticos, com compras para contas a pagar, com folha para despesas de pessoal, com contabilidade para fechamento mensal facilitado. Finanças não é departamento isolado — é espinha dorsal que conecta tudo.",
      },
    ],
    beneficios: [
      "Contas a pagar e receber",
      "Fluxo de caixa projetado",
      "Conciliação bancária automática",
      "Centro de custos",
      "DRE e relatórios gerenciais",
      "Integração com vendas e compras",
    ],
    cta: {
      titulo: "Assuma o controle financeiro",
      texto: "Solicite uma demonstração e transforme sua gestão financeira.",
    },
  },

  // ==========================================
  // AUTOMAÇÃO - 5 especialidades
  // ==========================================

  {
    slug: "automacao-email-marketing",
    titulo: "Automação de Email Marketing",
    subtitulo: "Campanhas automatizadas que nutrem leads e convertem vendas enquanto você dorme",
    metaTitle: "Automação de Email Marketing | Nexa Lume Digital",
    metaDescription: "Automação de email marketing profissional. Sequências automatizadas, segmentação avançada e integração com CRM. Converta mais leads!",
    keywords: ["automação email marketing", "email marketing automatizado", "sequências de email", "nutrição de leads"],
    categoria: "automacao",
    heroText: "Email marketing não morreu — email mal feito morreu. Automação inteligente entrega a mensagem certa, na hora certa.",
    sections: [
      {
        titulo: "O poder do email bem automatizado",
        conteudo: "Email continua sendo o canal com melhor ROI do marketing digital. Mas disparos manuais, genéricos, na hora errada não funcionam. Automação transforma email em conversa personalizada em escala: sequências que acompanham a jornada do lead, disparos comportamentais baseados em ações, conteúdo dinâmico que fala com cada segmento. É ter um vendedor incansável que nutre centenas de leads simultaneamente, 24 horas por dia.",
      },
      {
        titulo: "Sequências que convertam",
        conteudo: "Desenhamos fluxos estratégicos: welcome series para novos inscritos, sequência de nutrição para leads frios, onboarding para novos clientes, recuperação de carrinho abandonado, reengajamento de inativos, upsell e cross-sell pós-compra. Cada sequência é construída com copy persuasivo, design responsivo e CTAs claros.",
      },
      {
        titulo: "Segmentação e personalização",
        conteudo: "Nem todo mundo é igual. Segmentamos sua base por comportamento (abriu, clicou, comprou), interesse (páginas visitadas, downloads), dados demográficos e estágio no funil. Emails personalizados com nome, empresa, produto de interesse. Quanto mais relevante a mensagem, maior a conversão.",
      },
      {
        titulo: "Integração e métricas",
        conteudo: "Conectamos com seu CRM para atualização automática de leads, com e-commerce para dados de compra, com site para tracking de comportamento. Relatórios detalhados de abertura, clique, conversão e receita gerada. Você sabe exatamente o retorno de cada campanha.",
      },
    ],
    beneficios: [
      "Sequências automatizadas estratégicas",
      "Segmentação avançada de base",
      "Personalização dinâmica",
      "Templates responsivos",
      "Integração com CRM e e-commerce",
      "Relatórios de ROI",
    ],
    cta: {
      titulo: "Automatize suas conversões por email",
      texto: "Solicite uma análise da sua estratégia de email e receba proposta personalizada.",
    },
  },
  {
    slug: "automacao-funil-de-vendas",
    titulo: "Automação de Funil de Vendas",
    subtitulo: "Funis automatizados que qualificam leads e aceleram conversões",
    metaTitle: "Automação de Funil de Vendas | Nexa Lume Digital",
    metaDescription: "Automação completa de funil de vendas. Landing pages, sequências de nutrição, qualificação automática e integração com CRM. Venda mais!",
    keywords: ["automação funil de vendas", "funil automatizado", "automação comercial", "qualificação de leads"],
    categoria: "automacao",
    heroText: "Leads entram gelados e saem prontos para comprar. Automação de funil faz o trabalho pesado do seu comercial.",
    sections: [
      {
        titulo: "O funil que vende sozinho",
        conteudo: "Vendedores gastam tempo demais com leads não qualificados e de menos com quem está pronto para comprar. Automação de funil inverte isso: captura leads com ofertas irresistíveis, nutre automaticamente com conteúdo que educa e aquece, qualifica baseado em engajamento e comportamento, e entrega para vendas apenas quem está no momento certo. Seu time foca em fechar, não em prospectar.",
      },
      {
        titulo: "Captura e entrada no funil",
        conteudo: "Landing pages de alta conversão com ofertas de valor (ebooks, webinars, diagnósticos gratuitos), pop-ups inteligentes baseados em comportamento, formulários estratégicos que coletam informações de qualificação, integração com anúncios para tracking de origem. Cada lead entra no funil com contexto.",
      },
      {
        titulo: "Nutrição automatizada",
        conteudo: "Sequências de email, WhatsApp e remarketing que educam o lead sobre seu problema e sua solução. Conteúdo progressivo que move o lead pelo funil: consciência do problema, consideração de soluções, decisão de compra. Timing automático baseado em abertura, clique e comportamento no site.",
      },
      {
        titulo: "Qualificação e passagem para vendas",
        conteudo: "Lead scoring automático baseado em engajamento (abriu emails, visitou pricing, assistiu demo) e perfil (cargo, tamanho da empresa, segmento). Quando atinge score, alerta vendedor e cria tarefa de follow-up. Integração completa com CRM para histórico do lead acessível na primeira ligação.",
      },
    ],
    beneficios: [
      "Landing pages de alta conversão",
      "Sequências multicanal automatizadas",
      "Lead scoring automático",
      "Integração com CRM",
      "Remarketing coordenado",
      "Relatórios de funil completos",
    ],
    cta: {
      titulo: "Automatize seu funil de vendas",
      texto: "Solicite uma análise e veja onde automação pode acelerar suas vendas.",
    },
  },
  {
    slug: "integracao-apis-sistemas",
    titulo: "Integração de APIs e Sistemas",
    subtitulo: "Conecte sistemas, elimine retrabalho e faça dados fluírem automaticamente",
    metaTitle: "Integração de APIs e Sistemas | Nexa Lume Digital",
    metaDescription: "Integração de sistemas via API. Conecte CRM, ERP, e-commerce, marketing e mais. Elimine digitação dupla e sincronize dados automaticamente!",
    keywords: ["integração de sistemas", "integração api", "conectar sistemas", "sincronização de dados"],
    categoria: "automacao",
    heroText: "Sistemas que não conversam criam retrabalho, erros e decisões ruins. Integração faz dados fluírem sem fricção.",
    sections: [
      {
        titulo: "O custo de sistemas desconectados",
        conteudo: "Vendedor fecha no CRM, alguém digita no ERP. Pedido no e-commerce, funcionário registra no estoque. Dados no marketing, manual para financeiro. Cada digitação dupla é tempo perdido e risco de erro. Além disso, informações fragmentadas significam visão incompleta do negócio. Integrar sistemas elimina retrabalho, garante consistência e dá visão unificada para decisões.",
      },
      {
        titulo: "Como integramos seus sistemas",
        conteudo: "Conectamos via API quando disponível: sistemas modernos expõem APIs que permitem sincronização em tempo real ou por agendamento. Quando API não existe, desenvolvemos conectores customizados, robôs de integração ou trabalhamos com webhooks. Mapeamos fluxos de dados, definimos regras de transformação e implementamos com tratamento de erros robusto.",
      },
      {
        titulo: "Integrações comuns que fazemos",
        conteudo: "CRM com ERP para pedidos e faturamento, e-commerce com estoque para disponibilidade, marketing com vendas para atribuição, financeiro com bancário para conciliação, site com CRM para leads, WhatsApp com sistema para atendimento. Praticamente qualquer combinação de sistemas pode ser integrada.",
      },
      {
        titulo: "Monitoramento e manutenção",
        conteudo: "Integrações precisam de cuidado contínuo: APIs mudam, sistemas atualizam, volumes crescem. Implementamos monitoramento que alerta quando algo falha, logs para diagnóstico, e oferecemos suporte contínuo para manter tudo funcionando. Você usa o benefício da integração sem se preocupar com a infraestrutura.",
      },
    ],
    beneficios: [
      "Elimina digitação dupla",
      "Dados sincronizados em tempo real",
      "Visão unificada do negócio",
      "Reduz erros humanos",
      "Monitoramento de falhas",
      "Suporte contínuo",
    ],
    cta: {
      titulo: "Conecte seus sistemas",
      texto: "Descreva seus sistemas e receba proposta de integração.",
    },
  },
  {
    slug: "automacao-rpa-processos",
    titulo: "Automação RPA de Processos",
    subtitulo: "Robôs que executam tarefas repetitivas, liberando sua equipe para trabalho estratégico",
    metaTitle: "Automação RPA de Processos | Nexa Lume Digital",
    metaDescription: "Automação RPA para empresas. Robôs que executam tarefas repetitivas, download de relatórios, preenchimento de sistemas e mais. Automatize!",
    keywords: ["automação rpa", "robotic process automation", "automação de processos", "robô automação"],
    categoria: "automacao",
    heroText: "Funcionários gastando horas em tarefas repetitivas é desperdício. Robôs fazem em minutos, sem erros, sem reclamar.",
    sections: [
      {
        titulo: "O que é RPA e quando usar",
        conteudo: "RPA (Robotic Process Automation) são robôs de software que executam tarefas que humanos fazem em computadores: clicar, digitar, copiar, colar, baixar, fazer login. São ideais para processos repetitivos, baseados em regras claras, que envolvem múltiplos sistemas e que seriam onerosos para integrar via API. O robô trabalha 24/7, não erra, não se cansa e libera sua equipe para trabalho que exige inteligência humana.",
      },
      {
        titulo: "Exemplos de automação RPA",
        conteudo: "Download diário de relatórios de portais bancários, preenchimento de sistemas governamentais (notas fiscais, declarações), extração de dados de PDFs e emails, reconciliação entre planilhas e sistemas, atualização de cadastros entre plataformas, geração de relatórios consolidados, monitoramento de sites e alertas. Se você faz manualmente de forma repetitiva, provavelmente podemos automatizar.",
      },
      {
        titulo: "Nossa abordagem de implementação",
        conteudo: "Mapeamos o processo atual com a equipe que executa, identificamos variações e exceções, desenvolvemos o robô com tratamento de erros robusto, testamos exaustivamente em ambiente controlado, implementamos com monitoramento e documentação completa. O robô é construído para lidar com a realidade, não só com o caso ideal.",
      },
      {
        titulo: "ROI de automação RPA",
        conteudo: "Calculamos juntos: horas economizadas x custo por hora x frequência de execução. A maioria dos projetos RPA se paga em poucos meses. Além do ROI financeiro direto, há ganhos em consistência (zero erros), velocidade (execução mais rápida), disponibilidade (24/7) e satisfação da equipe (trabalho mais interessante).",
      },
    ],
    beneficios: [
      "Execução 24/7 sem supervisão",
      "Zero erros em tarefas repetitivas",
      "Libera equipe para trabalho estratégico",
      "Integra sistemas sem API",
      "ROI rápido e mensurável",
      "Documentação e monitoramento",
    ],
    cta: {
      titulo: "Automatize processos repetitivos",
      texto: "Descreva seus processos manuais e veja o que podemos automatizar.",
    },
  },
  {
    slug: "atendimento-multicanal-omnichannel",
    titulo: "Atendimento Multicanal Omnichannel",
    subtitulo: "Unifique WhatsApp, Instagram, chat e email em uma única plataforma de atendimento",
    metaTitle: "Atendimento Multicanal Omnichannel | Nexa Lume Digital",
    metaDescription: "Plataforma de atendimento omnichannel. Unifique WhatsApp, Instagram, chat e email. Histórico unificado e múltiplos atendentes!",
    keywords: ["atendimento omnichannel", "atendimento multicanal", "plataforma atendimento", "unificar canais atendimento"],
    categoria: "automacao",
    heroText: "Clientes querem falar onde for conveniente para eles. Você precisa atender em todos os canais sem perder o fio da meada.",
    sections: [
      {
        titulo: "O desafio do atendimento fragmentado",
        conteudo: "WhatsApp no celular do vendedor, Instagram no computador do marketing, email no Outlook, chat do site em outra plataforma. Quando um cliente fala em um canal e depois muda para outro, ninguém sabe o histórico. Atendentes diferentes não sabem o que foi tratado. Experiência fragmentada que frustra clientes e dificulta atendimento de qualidade. Omnichannel resolve unificando tudo.",
      },
      {
        titulo: "Uma plataforma, todos os canais",
        conteudo: "Implementamos solução onde WhatsApp Business, Instagram Direct, Messenger, chat do site, email e outros canais convergem para uma única interface. Cada conversa tem histórico completo independente do canal, atendentes veem tudo em um lugar, supervisores monitoram performance global. Cliente muda de canal e o atendente sabe exatamente onde parou.",
      },
      {
        titulo: "Distribuição e produtividade",
        conteudo: "Distribuição inteligente de conversas: por disponibilidade, por especialidade, por carteira de clientes. Respostas rápidas e templates padronizados, tarefas de follow-up, transferência entre atendentes com contexto, chatbot no primeiro nível antes de escalar para humano. Seu time atende mais com menos esforço.",
      },
      {
        titulo: "Métricas e gestão",
        conteudo: "Dashboard em tempo real com filas, tempos de espera e atendentes online. Relatórios de tempo de resposta, satisfação, volume por canal, performance por atendente. Gravação e transcrição de conversas para qualidade. Dados que permitem gestão real do atendimento.",
      },
    ],
    beneficios: [
      "Todos os canais em uma plataforma",
      "Histórico unificado por cliente",
      "Múltiplos atendentes simultâneos",
      "Chatbot no primeiro nível",
      "Relatórios de performance",
      "Distribuição inteligente",
    ],
    cta: {
      titulo: "Unifique seu atendimento",
      texto: "Solicite uma demonstração e veja como organizamos múltiplos canais.",
    },
  },

  // ==========================================
  // MARKETING - 5 especialidades
  // ==========================================

  {
    slug: "gestao-trafego-pago-meta-ads",
    titulo: "Gestão de Tráfego Pago Meta Ads",
    subtitulo: "Campanhas estratégicas em Facebook e Instagram que geram leads e vendas",
    metaTitle: "Gestão de Meta Ads Facebook e Instagram | Nexa Lume",
    metaDescription: "Gestão profissional de Meta Ads. Campanhas em Facebook e Instagram que convertem. Segmentação avançada e otimização contínua. Orçamento!",
    keywords: ["gestão meta ads", "anúncios facebook", "anúncios instagram", "tráfego pago facebook"],
    categoria: "marketing",
    heroText: "Facebook e Instagram sabem tudo sobre seus usuários. Usamos esse conhecimento para encontrar seus clientes ideais.",
    sections: [
      {
        titulo: "O poder de segmentação da Meta",
        conteudo: "A Meta (Facebook e Instagram) conhece profundamente seus usuários: interesses, comportamentos, dados demográficos, eventos de vida. Com isso, conseguimos segmentar campanhas com precisão cirúrgica: mulheres de 25-35 anos interessadas em fitness que acabaram de ficar noivas, por exemplo. Diferente de outras plataformas, a Meta permite campanhas para topo, meio e fundo de funil, acompanhando a jornada completa do cliente desde conhecimento até conversão.",
      },
      {
        titulo: "Estratégias por objetivo",
        conteudo: "Desenhamos campanhas específicas para cada objetivo: alcance e reconhecimento de marca, engajamento e crescimento de seguidores, geração de leads com formulários nativos, conversões no site (compras, cadastros), tráfego para WhatsApp, remarketing para visitantes e abandonos de carrinho. Cada objetivo tem estrutura, criativos e otimização específicos.",
      },
      {
        titulo: "Criativos que performam",
        conteudo: "Na Meta, criativo é 80% do sucesso. Produzimos variações de imagens, carrosséis e vídeos, testamos diferentes ângulos de copy, aproveitamos formatos nativos de cada posicionamento (Stories, Reels, Feed). Testes A/B constantes identificam o que ressoa com sua audiência. Nunca rodamos uma única versão — sempre há variações competindo.",
      },
      {
        titulo: "Otimização e escala",
        conteudo: "Monitoramos campanhas diariamente: pausamos o que não funciona, escalamos o que performa, ajustamos segmentações, testamos novas audiências. Relatórios claros mostram investimento, resultados e custo por aquisição. Nosso trabalho é extrair máximo retorno de cada real investido.",
      },
    ],
    beneficios: [
      "Segmentação avançada por interesse e comportamento",
      "Campanhas para todos os objetivos de funil",
      "Criativos de alta performance",
      "Remarketing estratégico",
      "Otimização contínua",
      "Relatórios transparentes de ROI",
    ],
    cta: {
      titulo: "Anuncie no Facebook e Instagram com resultados",
      texto: "Solicite análise gratuita de oportunidades em Meta Ads.",
    },
  },
  {
    slug: "gestao-linkedin-ads",
    titulo: "Gestão de LinkedIn Ads",
    subtitulo: "Campanhas B2B que alcançam decisores e geram leads qualificados",
    metaTitle: "Gestão de LinkedIn Ads B2B | Nexa Lume Digital",
    metaDescription: "Gestão de anúncios LinkedIn Ads para empresas B2B. Alcance decisores, gere leads qualificados e feche mais contratos. Especialistas B2B!",
    keywords: ["linkedin ads", "anúncios linkedin", "marketing b2b linkedin", "leads linkedin"],
    categoria: "marketing",
    heroText: "No LinkedIn você alcança decisores pelo cargo, empresa, indústria. É onde B2B acontece de verdade.",
    sections: [
      {
        titulo: "LinkedIn: a plataforma B2B por excelência",
        conteudo: "Se você vende para empresas, LinkedIn é onde seus compradores estão — e com a guarda baixa. Diferente de outras plataformas, no LinkedIn as pessoas estão em modo profissional, pensando em negócios. A segmentação permite alcançar por cargo (CTOs, diretores de marketing, gerentes de compras), empresa (por nome, porte ou indústria), habilidades e grupos. Você fala diretamente com quem decide, não com quem usa.",
      },
      {
        titulo: "Formatos de anúncio B2B",
        conteudo: "Sponsored Content para thought leadership e autoridade, Lead Gen Forms com formulários nativos que pré-preenchem dados do perfil (conversões altíssimas), Message Ads para abordagem direta no inbox, Document Ads para distribuir conteúdo rico, Conversation Ads para engajamento interativo. Cada formato tem momento e objetivo específicos no funil B2B.",
      },
      {
        titulo: "Estratégias de Account-Based Marketing",
        conteudo: "Para vendas enterprise, ABM é a estratégia: segmentamos por lista de empresas-alvo específicas, criamos conteúdo personalizado para cada conta, usamos retargeting para manter presença constante. LinkedIn é a única plataforma onde ABM funciona em escala, alcançando múltiplos decisores de cada empresa-alvo.",
      },
      {
        titulo: "Mensuração do ciclo B2B",
        conteudo: "Vendas B2B têm ciclos longos. Implementamos tracking completo: quais empresas visualizaram, quais converteram em lead, integração com CRM para acompanhar até fechamento. Relatórios que mostram não só CPL, mas pipeline e receita influenciada por LinkedIn. ROI real, não métricas de vaidade.",
      },
    ],
    beneficios: [
      "Segmentação por cargo e empresa",
      "Lead Gen Forms com alta conversão",
      "Estratégias de ABM",
      "Integração com CRM",
      "Tracking de pipeline influenciado",
      "Relatórios de ROI B2B",
    ],
    cta: {
      titulo: "Alcance decisores B2B no LinkedIn",
      texto: "Solicite análise de oportunidades para sua empresa no LinkedIn.",
    },
  },
  {
    slug: "marketing-de-conteudo",
    titulo: "Marketing de Conteúdo",
    subtitulo: "Conteúdo estratégico que atrai, engaja e converte seu público ideal",
    metaTitle: "Marketing de Conteúdo Estratégico | Nexa Lume Digital",
    metaDescription: "Marketing de conteúdo que gera resultados. Blog, ebooks, vídeos e redes sociais com estratégia de SEO e conversão. Atraia clientes ideais!",
    keywords: ["marketing de conteúdo", "estratégia de conteúdo", "conteúdo para blog", "inbound marketing"],
    categoria: "marketing",
    heroText: "Conteúdo não é sobre falar de você. É sobre resolver problemas do seu cliente. Aí a venda acontece naturalmente.",
    sections: [
      {
        titulo: "Conteúdo como ativo de negócio",
        conteudo: "Anúncios param de funcionar quando você para de pagar. Conteúdo continua atraindo visitantes, leads e clientes por anos. Um artigo bem posicionado no Google, um vídeo que viraliza, um ebook que captura milhares de leads — são ativos que se valorizam com o tempo. Marketing de conteúdo é construção de patrimônio digital: quanto mais você investe, mais resultados acumula. É a diferença entre alugar audiência e ser dono dela.",
      },
      {
        titulo: "Estratégia antes de execução",
        conteudo: "Não criamos conteúdo aleatório. Começamos mapeando sua persona, jornada de compra, palavras-chave estratégicas e temas que interessam seu público. Definimos formatos (blog, vídeo, podcast, redes sociais), calendário editorial, tom de voz e métricas de sucesso. Cada peça de conteúdo tem objetivo claro no funil.",
      },
      {
        titulo: "Formatos e canais",
        conteudo: "Artigos de blog otimizados para SEO, ebooks e whitepapers para geração de leads, infográficos compartilháveis, vídeos para YouTube e redes sociais, posts para LinkedIn, Instagram e outras plataformas relevantes, newsletters para nutrição de base. Adaptamos o conteúdo para cada canal sem perder a consistência da mensagem.",
      },
      {
        titulo: "Resultados mensuráveis",
        conteudo: "Acompanhamos tráfego orgânico, posicionamento de keywords, leads gerados por conteúdo, engajamento em redes sociais, tempo no site e páginas por sessão. Relatórios mensais mostram evolução e ROI. Conteúdo que não performa é ajustado ou substituído — é processo de melhoria contínua.",
      },
    ],
    beneficios: [
      "Estratégia baseada em dados e personas",
      "Conteúdo otimizado para SEO",
      "Múltiplos formatos e canais",
      "Calendário editorial organizado",
      "Geração de leads com conteúdo rico",
      "Relatórios de performance",
    ],
    cta: {
      titulo: "Construa autoridade com conteúdo estratégico",
      texto: "Solicite diagnóstico de conteúdo e receba estratégia personalizada.",
    },
  },
  {
    slug: "branding-digital",
    titulo: "Branding Digital",
    subtitulo: "Construção de marca que diferencia, conecta e cria lealdade no ambiente digital",
    metaTitle: "Branding Digital para Empresas | Nexa Lume Digital",
    metaDescription: "Branding digital estratégico. Identidade visual, posicionamento, tom de voz e presença digital consistente. Destaque sua marca!",
    keywords: ["branding digital", "identidade de marca", "posicionamento de marca", "marca digital"],
    categoria: "marketing",
    heroText: "Produtos podem ser copiados. Marcas fortes são inimitáveis. Branding é o que faz clientes escolherem você, não o concorrente mais barato.",
    sections: [
      {
        titulo: "Marca: o ativo mais valioso",
        conteudo: "Por que alguém paga mais por um iPhone se há smartphones Android mais baratos? Por que Starbucks cobra R$15 por café que custa R$3? Marca. Uma marca forte permite preços premium, gera lealdade que sobrevive a erros, atrai talentos e parceiros. No ambiente digital, onde comparação é instantânea, ter marca diferenciada é ainda mais crucial. Branding não é logo bonito — é o significado completo que sua empresa representa na mente dos clientes.",
      },
      {
        titulo: "Os elementos do branding digital",
        conteudo: "Construímos marcas completas: propósito e valores que guiam decisões, posicionamento que diferencia no mercado, identidade visual coerente (logo, cores, tipografia), tom de voz consistente em todas as comunicações, experiência de marca em cada touchpoint digital. Cada elemento reforça os outros, criando percepção sólida e reconhecível.",
      },
      {
        titulo: "Consistência em todos os canais",
        conteudo: "Uma marca forte é reconhecível em qualquer canal: site, redes sociais, email, anúncios, apresentações, assinatura de email. Desenvolvemos guidelines de marca que garantem consistência mesmo quando múltiplas pessoas criam conteúdo. Templates, banco de imagens curado, exemplos de aplicação — tudo para manter a marca intacta.",
      },
      {
        titulo: "Marca que evolui",
        conteudo: "Branding não é projeto único — é processo contínuo. Mercados mudam, público evolui, empresa cresce. Fazemos gestão contínua de marca: monitoramos percepção, ajustamos posicionamento quando necessário, evoluímos identidade visual sem perder essência. Sua marca acompanha seu crescimento.",
      },
    ],
    beneficios: [
      "Posicionamento diferenciado de mercado",
      "Identidade visual profissional completa",
      "Tom de voz consistente",
      "Guidelines de marca documentados",
      "Templates para todas as aplicações",
      "Gestão contínua de marca",
    ],
    cta: {
      titulo: "Construa uma marca memorável",
      texto: "Solicite diagnóstico de marca e receba proposta de branding.",
    },
  },
  {
    slug: "gestao-de-reputacao-online",
    titulo: "Gestão de Reputação Online",
    subtitulo: "Monitore, proteja e construa a reputação da sua marca na internet",
    metaTitle: "Gestão de Reputação Online | Nexa Lume Digital",
    metaDescription: "Gestão de reputação digital. Monitoramento de menções, gestão de avaliações, resposta a crises e construção de autoridade. Proteja sua marca!",
    keywords: ["gestão de reputação", "reputação online", "monitoramento de marca", "avaliações google"],
    categoria: "marketing",
    heroText: "Uma avaliação negativa no Google pode custar milhares em vendas perdidas. Gestão de reputação protege e constrói confiança.",
    sections: [
      {
        titulo: "Reputação na era digital",
        conteudo: "Antes de comprar qualquer coisa, pessoas pesquisam avaliações. Um restaurante com 3.5 estrelas perde clientes para o vizinho com 4.5. Um profissional com reclamações no Reclame Aqui perde contratos. Na internet, reputação é pública, permanente e influente. Empresas que não gerenciam ativamente sua reputação deixam que outros definam sua imagem — e nem sempre de forma justa ou precisa.",
      },
      {
        titulo: "Monitoramento constante",
        conteudo: "Configuramos alertas para menções da sua marca em toda a internet: Google, redes sociais, sites de reclamação, fóruns, notícias. Você sabe imediatamente quando alguém fala de você — elogio ou crítica. Isso permite resposta rápida antes que problemas escalonem e aproveitamento de oportunidades de engajamento positivo.",
      },
      {
        titulo: "Gestão de avaliações",
        conteudo: "Avaliações no Google, Facebook e sites especializados impactam diretamente conversões. Implementamos estratégia para incentivar avaliações positivas de clientes satisfeitos, respondemos profissionalmente a avaliações negativas (transformando críticos em defensores quando possível), e construímos volume de feedback que representa verdadeiramente a qualidade do seu serviço.",
      },
      {
        titulo: "Prevenção e resposta a crises",
        conteudo: "Crises de imagem acontecem: um cliente insatisfeito viraliza, uma notícia negativa aparece, um funcionário erra nas redes sociais. Preparamos protocolo de resposta a crises, monitoramos sinais de escalação e agimos rapidamente quando necessário. Transparência e velocidade são essenciais para limitar danos.",
      },
    ],
    beneficios: [
      "Monitoramento 24/7 de menções",
      "Gestão ativa de avaliações",
      "Resposta profissional a críticas",
      "Protocolo de gestão de crises",
      "Construção de autoridade positiva",
      "Relatórios mensais de reputação",
    ],
    cta: {
      titulo: "Proteja a reputação da sua marca",
      texto: "Solicite diagnóstico de reputação online gratuito.",
    },
  },
  // EXTRAS para completar 50
  {
    slug: "criacao-de-aplicativo-mobile",
    titulo: "Criação de Aplicativo Mobile",
    subtitulo: "Aplicativos iOS e Android sob medida para o seu negócio",
    metaTitle: "Criação de Aplicativo Mobile | Nexa Lume Digital",
    metaDescription: "Desenvolvemos aplicativos móveis para iOS e Android. Apps nativos e híbridos com design intuitivo e performance. Transforme sua ideia em app!",
    keywords: ["criação de aplicativo", "desenvolvimento de app", "aplicativo mobile", "app ios android"],
    categoria: "sistemas",
    heroText: "Seu negócio na palma da mão dos clientes. Desenvolvemos aplicativos que engajam, fidelizam e geram resultados.",
    sections: [
      {
        titulo: "Por que ter um aplicativo?",
        conteudo: "Aplicativos móveis criam um canal direto com seus clientes. Notificações push garantem que você nunca seja esquecido. A experiência é mais rápida e fluida que sites. Clientes com app instalado compram mais frequentemente e têm maior lifetime value. Para negócios que dependem de relacionamento contínuo – academias, restaurantes, lojas, serviços por assinatura – um app é diferencial competitivo real.",
      },
      {
        titulo: "Tecnologias que utilizamos",
        conteudo: "Desenvolvemos em React Native e Flutter para criar aplicativos híbridos que funcionam perfeitamente em iOS e Android com um único código – reduzindo custo e tempo de desenvolvimento. Para casos que exigem máxima performance (jogos, realidade aumentada), desenvolvemos nativo em Swift e Kotlin. A escolha da tecnologia depende do seu caso específico e orçamento.",
      },
      {
        titulo: "Do conceito à loja",
        conteudo: "Cuidamos de todo o processo: entendimento do negócio, design UX/UI, desenvolvimento, testes, publicação nas lojas (App Store e Google Play), e manutenção contínua. Você foca no seu negócio enquanto transformamos sua visão em um aplicativo funcional e bonito que seus clientes vão amar usar.",
      },
    ],
    beneficios: [
      "Apps para iOS e Android",
      "Design intuitivo e moderno",
      "Notificações push",
      "Publicação nas lojas oficiais",
      "Manutenção e atualizações",
      "Integração com seus sistemas",
    ],
    cta: {
      titulo: "Transforme sua ideia em aplicativo",
      texto: "Solicite orçamento para desenvolvimento do seu app.",
    },
  },
  {
    slug: "consultoria-transformacao-digital",
    titulo: "Consultoria em Transformação Digital",
    subtitulo: "Digitalize processos e prepare sua empresa para o futuro",
    metaTitle: "Consultoria em Transformação Digital | Nexa Lume Digital",
    metaDescription: "Consultoria para transformação digital de empresas. Diagnóstico, roadmap, implementação de tecnologias e capacitação de equipes. Modernize seu negócio!",
    keywords: ["transformação digital", "consultoria digital", "digitalização de empresas", "modernização tecnológica"],
    categoria: "sistemas",
    heroText: "Empresas que não se digitalizam ficam para trás. Te ajudamos a identificar oportunidades e implementar tecnologia de forma estratégica.",
    sections: [
      {
        titulo: "O que é transformação digital?",
        conteudo: "Transformação digital vai além de ter um site ou usar email. É repensar processos, modelos de negócio e cultura organizacional aproveitando tecnologia. Significa automatizar tarefas repetitivas, usar dados para tomar decisões, oferecer experiências digitais aos clientes, e capacitar equipes para um mundo cada vez mais conectado. Não é projeto com fim – é mentalidade de evolução contínua.",
      },
      {
        titulo: "Diagnóstico e roadmap",
        conteudo: "Começamos mapeando onde você está: processos manuais, gargalos, oportunidades não aproveitadas. Identificamos quick wins (ganhos rápidos com baixo investimento) e projetos estruturantes de médio prazo. O resultado é um roadmap priorizado com investimentos, prazos e resultados esperados – um plano de ação claro que você pode executar conosco ou com equipe própria.",
      },
      {
        titulo: "Implementação e capacitação",
        conteudo: "Tecnologia sem adoção é desperdício. Além de implementar sistemas e automações, capacitamos suas equipes para usar e evoluir as soluções. Gestão de mudança é parte fundamental do projeto. Acompanhamos métricas de adoção e ajustamos até que a transformação esteja incorporada no dia a dia da empresa.",
      },
    ],
    beneficios: [
      "Diagnóstico completo da maturidade digital",
      "Roadmap priorizado de projetos",
      "Implementação assistida",
      "Capacitação de equipes",
      "Métricas de ROI",
      "Acompanhamento contínuo",
    ],
    cta: {
      titulo: "Comece sua transformação digital",
      texto: "Agende diagnóstico gratuito de maturidade digital.",
    },
  },
  {
    slug: "desenvolvimento-micro-saas",
    titulo: "Desenvolvimento de Micro-SaaS",
    subtitulo: "Crie seu próprio software como serviço e gere receita recorrente",
    metaTitle: "Desenvolvimento de Micro-SaaS | Nexa Lume Digital",
    metaDescription: "Desenvolvemos micro-SaaS sob medida. Transforme sua ideia em produto digital com receita recorrente. MVP em semanas, não meses!",
    keywords: ["micro saas", "desenvolvimento saas", "criar saas", "software como serviço"],
    categoria: "sistemas",
    heroText: "Tem uma ideia de software? Transformamos em produto real com modelo de assinatura. Receita recorrente é o sonho de todo empreendedor.",
    sections: [
      {
        titulo: "O que é Micro-SaaS?",
        conteudo: "Micro-SaaS são softwares focados em resolver um problema específico para um nicho definido. Diferente de plataformas gigantes, são produtos enxutos, gerenciáveis por equipes pequenas (às vezes uma pessoa), com custos baixos e margens altas. Exemplos: ferramenta de agendamento para dentistas, sistema de gestão para personal trainers, dashboard para e-commerces. O modelo de assinatura mensal gera receita previsível e escalável.",
      },
      {
        titulo: "Do problema ao produto",
        conteudo: "Começamos validando a ideia: existe demanda real? Pessoas pagariam? Quanto? Definimos MVP (mínimo produto viável) com apenas funcionalidades essenciais para testar o mercado. Desenvolvemos rápido – semanas, não meses. Lançamos, coletamos feedback de usuários reais, e iteramos. Esse ciclo de validação contínua reduz risco e acelera product-market fit.",
      },
      {
        titulo: "Tecnologia para escalar",
        conteudo: "Construímos com stack moderna que suporta crescimento: arquitetura cloud, banco de dados escalável, código limpo e testado. Incluímos desde o início: sistema de autenticação, gestão de assinaturas (Stripe/outros), painel administrativo, e infraestrutura de deploy automatizado. Você recebe um produto pronto para operar e crescer, não um protótipo frágil.",
      },
    ],
    beneficios: [
      "MVP em 4-8 semanas",
      "Modelo de assinatura configurado",
      "Arquitetura escalável",
      "Código-fonte seu",
      "Documentação completa",
      "Suporte pós-lançamento",
    ],
    cta: {
      titulo: "Lance seu Micro-SaaS",
      texto: "Vamos conversar sobre sua ideia de produto digital.",
    },
  },
  {
    slug: "criacao-landing-page-conversao",
    titulo: "Criação de Landing Page de Alta Conversão",
    subtitulo: "Páginas focadas em um único objetivo: converter visitantes em leads ou clientes",
    metaTitle: "Criação de Landing Page de Alta Conversão | Nexa Lume Digital",
    metaDescription: "Landing pages otimizadas para conversão. Design persuasivo, copywriting estratégico e A/B testing. Aumente suas conversões em até 300%!",
    keywords: ["landing page", "página de conversão", "criação de landing page", "página de vendas"],
    categoria: "sites",
    heroText: "Uma landing page bem feita pode converter 10x mais que uma página comum. Criamos páginas focadas em um único objetivo: fazer você vender mais.",
    sections: [
      {
        titulo: "O poder da página única",
        conteudo: "Diferente de sites institucionais cheios de opções, uma landing page tem um único objetivo: conversão. Seja captar leads, vender um produto, ou gerar agendamentos. Sem menu de navegação para distrair, sem links para outros lugares. Todo elemento da página trabalha para conduzir o visitante a uma ação específica. Essa simplicidade focada é o que gera taxas de conversão muito superiores.",
      },
      {
        titulo: "Copywriting que convence",
        conteudo: "O texto é responsável por 80% do sucesso de uma landing page. Utilizamos técnicas de copywriting testadas: headlines que capturam atenção, identificação com a dor do cliente, apresentação clara dos benefícios (não só características), prova social com depoimentos reais, eliminação de objeções, e chamadas para ação irresistíveis. Cada palavra é escolhida estrategicamente.",
      },
      {
        titulo: "Design que converte",
        conteudo: "Design de landing page não é sobre beleza – é sobre eficiência. Hierarquia visual que guia o olho, cores que criam urgência e confiança, espaçamento que facilita leitura, formulários otimizados para minimizar abandono, elementos de confiança posicionados estrategicamente. Testamos variações (A/B) para descobrir o que funciona melhor com seu público específico.",
      },
    ],
    beneficios: [
      "Taxa de conversão otimizada",
      "Copywriting persuasivo",
      "Design focado em resultados",
      "A/B testing incluído",
      "Integração com CRM/email",
      "Relatórios de performance",
    ],
    cta: {
      titulo: "Aumente suas conversões",
      texto: "Solicite orçamento para sua landing page de alta performance.",
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
