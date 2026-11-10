export const languages = {
  en: 'English',
  pt: 'Português',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt';

export const ui = {
  en: {
    'meta.title': 'Felipe Trombini — Full Stack Developer',
    'meta.description':
      'Full Stack Engineer specializing in PHP backend systems — REST APIs, marketplace integrations, ' +
      'and SaaS platforms that scale. Available for new projects.',

    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Available for new roles',
    'hero.role': 'Full Stack Developer',
    'hero.location': 'SP, Brazil',
    'hero.pitch':
      'I turn complex requirements into fast, reliable backends — APIs built for real traffic, ' +
      'integrations that stay in sync, and SaaS systems that hold up under load.',
    'hero.cta.contact': 'Get in touch',
    'hero.cta.resume': 'View CV',

    'focus.heading': 'What I work on',
    'focus.title.saas': 'SaaS Platforms',
    'focus.desc.saas':
      'Five years shipping features on a high-traffic SaaS platform (Onfly) — I know what it takes to keep a complex product moving fast without breaking what already works.',
    'focus.title.ecommerce': 'E-commerce & ERP',
    'focus.desc.ecommerce':
      'Marketplace sync, ERP connections, inventory automation — I build the integrations that keep an e-commerce operation running without manual intervention.',
    'focus.title.apis': 'REST APIs & Microservices',
    'focus.desc.apis':
      'REST APIs with predictable contracts and room to grow. I design for the team that will maintain them next year, not just for the sprint that ships them today.',
    'focus.title.performance': 'Performance & Reliability',
    'focus.desc.performance':
      'Slow endpoints and flaky routes cost real money. I track down the bottlenecks — query plans, cache misses, N+1s — and fix them with measurable results.',
    'focus.title.ai': 'Applied AI & RAG',
    'focus.desc.ai':
      'I add AI capabilities to existing PHP backends without rebuilding your stack — semantic search, document Q&A, and retrieval pipelines that plug into your current infrastructure.',

    'about.heading': 'About',
    'about.summary.p1':
      'Full Stack Engineer with 5+ years building and scaling web platforms in PHP, Laravel, and Hyperf. ' +
      'I specialize in backend systems that handle real traffic — REST APIs, marketplace integrations, and SaaS ' +
      'architecture across e-commerce and corporate travel. Advanced English (TOEIC C1).',
    'about.summary.p2':
      'I work best on problems that are actually hard: messy third-party integrations, performance bottlenecks, ' +
      'or adding new capabilities to systems that can\'t go down. I write clean code, communicate clearly, and ship.',

    'skills.heading': 'Technical Skills',
    'skills.languages': 'Programming Languages',
    'skills.frameworks': 'Frameworks & Libraries',
    'skills.tools': 'Tools & Platforms',
    'skills.specializations': 'Specializations',

    'experience.heading': 'Professional Experience',
    'experience.present': 'Present',
    'experience.title.new-rizon': 'Software Engineer',
    'experience.title.tribox': 'Software Engineer',
    'experience.note.tribox': 'Started as intern in September 2020, transitioned to full-time developer in May 2021.',

    'education.heading': 'Education',
    'education.degree.fatec-jau': 'Associate Degree in Information Technology Management',
    'education.degree.unesp': 'Bachelor of Science in Information Systems',
    'education.note.unesp': 'Completed 4 semesters',
    'education.degree.etec': 'Technical Diploma in Information Technology',

    'certifications.heading': 'Certifications & Languages',
    'certifications.name.toeic': 'TOEIC C1 — Advanced English Proficiency',
    'languages.heading': 'Languages',
    'languages.portuguese': 'Portuguese — Native',
    'languages.english': 'English — Advanced (TOEIC C1)',

    'projects.heading': 'Projects',
    'projects.tab.new-rizon': 'New Rizon',
    'projects.tab.freelance': 'Freelance',
    'projects.tab.tribox': 'Tribox',

    'contact.heading': 'Get in Touch',
    'contact.pitch': "Have a project in mind, or an opening that fits? I'm quick to reply.",
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.gitlab': 'GitLab',
    'contact.whatsapp': 'WhatsApp',

    'footer.built': 'Built by',
    'footer.privacy': 'Privacy Policy',

    'privacy.title': 'Privacy Policy',
    'privacy.last_updated': 'Last updated: November 2026',
    'privacy.intro':
      'This website is a personal portfolio. It does not collect, store, or process any personal data.',
    'privacy.no_cookies_title': 'No cookies',
    'privacy.no_cookies':
      'This site does not set any cookies — first-party or third-party.',
    'privacy.no_tracking_title': 'No tracking or analytics',
    'privacy.no_tracking':
      'No analytics scripts, tracking pixels, or fingerprinting tools are used. Your visit is not logged or measured.',
    'privacy.no_forms_title': 'No data collection',
    'privacy.no_forms':
      'The contact links on this site (email, LinkedIn, WhatsApp) open external services that have their own privacy policies. No data is submitted to or stored by this site.',
    'privacy.external_title': 'External links',
    'privacy.external':
      'This site links to external services (GitHub, LinkedIn, WhatsApp, project URLs). Once you leave this site, their respective privacy policies apply.',
    'privacy.contact_title': 'Contact',
    'privacy.contact':
      'Questions? Reach out via the contact links on the main page.',
    'privacy.back': '← Back',
  },
  pt: {
    'meta.title': 'Felipe Trombini — Desenvolvedor Full Stack',
    'meta.description':
      'Engenheiro Full Stack especializado em sistemas backend PHP — APIs REST, integrações com marketplaces ' +
      'e plataformas SaaS que escalam. Disponível para novos projetos.',

    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    'hero.eyebrow': 'Disponível para novas oportunidades',
    'hero.role': 'Desenvolvedor Full Stack',
    'hero.location': 'SP, Brasil',
    'hero.pitch':
      'Transformo requisitos complexos em backends rápidos e confiáveis — APIs preparadas para tráfego real, ' +
      'integrações que se mantêm sincronizadas e sistemas SaaS que aguentam a carga.',
    'hero.cta.contact': 'Entrar em contato',
    'hero.cta.resume': 'Ver Currículo',

    'focus.heading': 'No que eu trabalho',
    'focus.title.saas': 'Plataformas SaaS',
    'focus.desc.saas':
      'Cinco anos entregando funcionalidades em uma plataforma SaaS de alto tráfego (Onfly) — sei o que é preciso para manter um produto complexo evoluindo rápido sem quebrar o que já funciona.',
    'focus.title.ecommerce': 'E-commerce & ERP',
    'focus.desc.ecommerce':
      'Sincronização com marketplaces, conexão com ERPs, automação de estoque — construo as integrações que mantêm uma operação de e-commerce funcionando sem intervenção manual.',
    'focus.title.apis': 'APIs REST & Microsserviços',
    'focus.desc.apis':
      'APIs REST com contratos previsíveis e espaço para crescer. Projeto pensando na equipe que vai manter o código no ano que vem, não apenas no sprint que vai entregá-lo hoje.',
    'focus.title.performance': 'Performance & Confiabilidade',
    'focus.desc.performance':
      'Endpoints lentos e rotas instáveis custam dinheiro real. Rastreio os gargalos — planos de query, cache miss, N+1 — e os corrijo com resultados mensuráveis.',
    'focus.title.ai': 'IA Aplicada & RAG',
    'focus.desc.ai':
      'Adiciono capacidades de IA a backends PHP existentes sem reescrever a stack — busca semântica, perguntas sobre documentos e pipelines de recuperação que se integram à infraestrutura atual.',

    'about.heading': 'Sobre',
    'about.summary.p1':
      'Engenheiro Full Stack com mais de 5 anos construindo e escalando plataformas web em PHP, Laravel e Hyperf. ' +
      'Especializado em sistemas backend que suportam tráfego real — APIs REST, integrações com marketplaces e ' +
      'arquitetura SaaS em e-commerce e gestão de viagens corporativas. Inglês avançado (TOEIC C1).',
    'about.summary.p2':
      'Trabalho melhor em problemas que são realmente difíceis: integrações complexas com terceiros, gargalos de ' +
      'performance ou adição de novas capacidades a sistemas que não podem parar. Escrevo código limpo, me comunico ' +
      'com clareza e entrego.',

    'skills.heading': 'Habilidades Técnicas',
    'skills.languages': 'Linguagens de Programação',
    'skills.frameworks': 'Frameworks & Bibliotecas',
    'skills.tools': 'Ferramentas & Plataformas',
    'skills.specializations': 'Especializações',

    'experience.heading': 'Experiência Profissional',
    'experience.present': 'Atual',
    'experience.title.new-rizon': 'Engenheiro de Software',
    'experience.title.tribox': 'Engenheiro de Software',
    'experience.note.tribox': 'Iniciou como estagiário em setembro de 2020, efetivado como desenvolvedor em maio de 2021.',

    'education.heading': 'Formação Acadêmica',
    'education.degree.fatec-jau': 'Tecnólogo em Gestão da Tecnologia da Informação',
    'education.degree.unesp': 'Bacharelado em Sistemas de Informação',
    'education.note.unesp': '4 semestres concluídos',
    'education.degree.etec': 'Técnico em Informática',

    'certifications.heading': 'Certificações & Idiomas',
    'certifications.name.toeic': 'TOEIC C1 — Proficiência Avançada em Inglês',
    'languages.heading': 'Idiomas',
    'languages.portuguese': 'Português — Nativo',
    'languages.english': 'Inglês — Avançado (TOEIC C1)',

    'projects.heading': 'Projetos',
    'projects.tab.new-rizon': 'New Rizon',
    'projects.tab.freelance': 'Freelance',
    'projects.tab.tribox': 'Tribox',

    'contact.heading': 'Entre em Contato',
    'contact.pitch': 'Tem um projeto em mente, ou uma vaga que combina? Costumo responder rápido.',
    'contact.email': 'E-mail',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',
    'contact.gitlab': 'GitLab',
    'contact.whatsapp': 'WhatsApp',

    'footer.built': 'Desenvolvido por',
    'footer.privacy': 'Política de Privacidade',

    'privacy.title': 'Política de Privacidade',
    'privacy.last_updated': 'Última atualização: novembro de 2026',
    'privacy.intro':
      'Este site é um portfólio pessoal. Ele não coleta, armazena nem processa nenhum dado pessoal.',
    'privacy.no_cookies_title': 'Sem cookies',
    'privacy.no_cookies':
      'Este site não define nenhum cookie — próprio ou de terceiros.',
    'privacy.no_tracking_title': 'Sem rastreamento ou analytics',
    'privacy.no_tracking':
      'Nenhum script de analytics, pixel de rastreamento ou ferramenta de fingerprinting é utilizado. Sua visita não é registrada nem medida.',
    'privacy.no_forms_title': 'Sem coleta de dados',
    'privacy.no_forms':
      'Os links de contato neste site (e-mail, LinkedIn, WhatsApp) abrem serviços externos com suas próprias políticas de privacidade. Nenhum dado é enviado ou armazenado por este site.',
    'privacy.external_title': 'Links externos',
    'privacy.external':
      'Este site contém links para serviços externos (GitHub, LinkedIn, WhatsApp, URLs de projetos). Ao sair deste site, as políticas de privacidade de cada serviço se aplicam.',
    'privacy.contact_title': 'Contato',
    'privacy.contact':
      'Dúvidas? Entre em contato pelos links na página principal.',
    'privacy.back': '← Voltar',
  },
} as const;

export const experienceBullets: Record<Lang, Record<string, string[]>> = {
  en: {
    'new-rizon': [
      'Building and scaling features on Onfly — one of Latin America\'s largest corporate travel platforms — with PHP (Hyperf) and Vue.js',
      'Cut API route loading times by 90% through targeted backend optimization',
      'Maintained high-traffic routes serving thousands of active users daily',
      'Reduced frontend production bugs by 30%+ through proactive Sentry monitoring and resolution',
      'Accelerated delivery cycles using AI-assisted workflows (Claude Code) for code review, refactoring, and debugging',
      'Used Mixpanel and Sentry data to measure feature impact and align architecture decisions with business goals',
      'Built and open-sourced a RAG pipeline in PHP/Hyperf — a production-ready starting point for adding AI-powered search to existing PHP backends',
    ],
    tribox: [
      'Built and maintained a proprietary B2B/B2C e-commerce platform in PHP/Laravel from early-stage product to production',
      'Integrated Mercado Livre, Bling, and Tiny — covering listings, order sync, and inventory across all channels',
      'Designed REST APIs for order management and third-party logistics system integration',
      'Automated order synchronization and inventory management, eliminating manual reconciliation',
      'Provided technical support and onboarding to corporate clients',
      'Performed corrective and evolutionary maintenance on mission-critical applications',
      'Collaborated with cross-functional teams using Trello for project tracking and delivery',
    ],
  },
  pt: {
    'new-rizon': [
      'Desenvolvimento e escalonamento de funcionalidades na Onfly — uma das maiores plataformas de gestão de viagens corporativas da América Latina — utilizando PHP (Hyperf) e Vue.js',
      'Redução de 90% no tempo de carregamento de rotas de API através de otimização de backend direcionada',
      'Manutenção de rotas de alto tráfego utilizadas por milhares de usuários ativos diariamente',
      'Redução de mais de 30% nos bugs de produção do frontend através de monitoramento proativo e resolução de alertas no Sentry',
      'Aceleração dos ciclos de entrega com fluxos de trabalho assistidos por IA (Claude Code) para revisão de código, refatoração e depuração',
      'Uso de dados do Mixpanel e Sentry para medir o impacto de funcionalidades e alinhar decisões de arquitetura com objetivos de negócio',
      'Construção e publicação como open source de um pipeline RAG em PHP/Hyperf — ponto de partida pronto para produção para adicionar busca por IA a backends PHP existentes',
    ],
    tribox: [
      'Construção e manutenção de plataforma de e-commerce proprietária B2B/B2C em PHP/Laravel, do estágio inicial até a produção',
      'Integração com Mercado Livre, Bling e Tiny — cobrindo listagens, sincronização de pedidos e estoque em todos os canais',
      'Design de APIs REST para gestão de pedidos e integração com sistemas de logística terceirizados',
      'Automação da sincronização de pedidos e gestão de estoque, eliminando reconciliação manual',
      'Suporte técnico e onboarding para clientes corporativos',
      'Manutenção corretiva e evolutiva em aplicações de missão crítica',
      'Colaboração com equipes multidisciplinares utilizando Trello para rastreamento e entrega de projetos',
    ],
  },
};
