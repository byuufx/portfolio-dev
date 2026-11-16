export const languages = {
  en: 'English',
  pt: 'Português',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'pt';

export const ui = {
  en: {
    'meta.title': 'Felipe Trombini — Senior Full Stack Developer',
    'meta.description':
      'Senior Full Stack Developer specializing in PHP backend systems — REST APIs, marketplace integrations, ' +
      'and SaaS platforms that scale. Available for new projects.',

    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Available for new roles',
    'hero.role': 'Senior Full Stack Developer',
    'hero.location': 'SP, Brazil',
    'hero.pitch':
      'I turn complex requirements into fast, reliable backends — APIs built for real traffic, ' +
      'integrations that stay in sync, and SaaS systems that hold up under load.',
    'hero.cta.contact': 'Get in touch',
    'hero.cta.resume': 'View CV',

    'focus.heading': 'What I work on',
    'focus.title.saas': 'SaaS Platforms',
    'focus.desc.saas':
      'Five years shipping features on SaaS platforms, including Onfly — I know what it takes to keep a complex product moving fast without breaking what already works.',
    'focus.title.ecommerce': 'E-commerce & ERP',
    'focus.desc.ecommerce':
      'Marketplace sync, ERP connections, inventory automation — I build the integrations that keep an e-commerce operation running without manual intervention.',
    'focus.title.apis': 'REST APIs & Microservices',
    'focus.desc.apis':
      'REST APIs with predictable contracts and room to grow. I design for the team that will maintain them next year, not just for the sprint that ships them today.',
    'focus.title.performance': 'Performance & Reliability',
    'focus.desc.performance':
      'Slow endpoints and flaky routes cost real money. I track down the bottlenecks — query plans, cache misses, N+1s — and fix them with measurable results — like taking a critical route from 5 minutes to 10 seconds.',
    'focus.title.ai': 'Applied AI & RAG',
    'focus.desc.ai':
      'I add AI capabilities to existing PHP backends without rebuilding your stack — semantic search, document Q&A, and retrieval pipelines that plug into your current infrastructure.',

    'about.heading': 'About',
    'about.summary.p1':
      'Senior Full Stack Developer with 5+ years of experience building and scaling web platforms in PHP, Laravel, Hyperf, and Vue.js. ' +
      'At Onfly, a corporate travel platform, I work on routes serving 100,000+ users — including one cut from 5 minutes to 10 seconds. ' +
      'Before that, I built an e-commerce platform for around 500 online stores at Tribox, with payment, shipping, and ERP integrations. Advanced English (TOEIC C1).',
    'about.summary.p2':
      'Strongest areas: REST APIs, Microservices, E-commerce & ERP integrations, Performance Tuning, Redis, Docker, Sentry, and Applied AI (RAG) on PHP backends.',

    'skills.heading': 'Technical Skills',
    'skills.languages': 'Programming Languages',
    'skills.frameworks': 'Frameworks & Libraries',
    'skills.tools': 'Tools & Platforms',
    'skills.specializations': 'Specializations',

    'experience.heading': 'Professional Experience',
    'experience.present': 'Present',
    'experience.title.new-rizon': 'Senior Full Stack Developer',
    'experience.title.tribox': 'Senior Full Stack Developer',
    'experience.note.tribox': 'Started as intern in September 2020, transitioned to full-time developer in May 2021.',

    'education.heading': 'Education',
    'education.degree.fatec-jahu': 'Associate Degree in Information Technology Management',
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

    'faq.heading': 'FAQ',
    'faq.q1': 'What kinds of projects do you take on?',
    'faq.a1': 'Web apps, APIs, e-commerce stores, internal tools, and SaaS platforms — anything full-stack. I work with PHP/Laravel and Vue, so the stack can flex to fit your project.',
    'faq.q2': 'How does the process work?',
    'faq.a2': 'We start with a short call or message exchange to scope the project. I send a proposal with timeline and cost, we align, and work begins. I deliver in iterations so you can give feedback early.',
    'faq.q3': 'Do you work remotely?',
    'faq.a3': 'Yes, fully remote. I am based in São Paulo, Brazil (UTC-3) and have worked with clients across Brazil and internationally.',
    'faq.q4': 'How much does it cost?',
    'faq.a4': 'It depends on the scope. Small features or fixes are quoted as fixed-price. Larger projects can be fixed-price or hourly. Reach out with your requirements and I will give you an honest estimate.',
    'faq.q5': 'Can you maintain or improve an existing codebase?',
    'faq.a5': 'Yes. Jumping into existing projects is a regular part of my work. I can audit, refactor, add features, or fix bugs — whatever the project needs.',

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
    'meta.title': 'Felipe Trombini — Desenvolvedor Full Stack Sênior',
    'meta.description':
      'Desenvolvedor Full Stack Sênior especializado em sistemas backend PHP — APIs REST, integrações com marketplaces ' +
      'e plataformas SaaS que escalam. Disponível para novos projetos.',

    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    'hero.eyebrow': 'Disponível para novas oportunidades',
    'hero.role': 'Desenvolvedor Full Stack Sênior',
    'hero.location': 'SP, Brasil',
    'hero.pitch':
      'Transformo requisitos complexos em backends rápidos e confiáveis — APIs preparadas para tráfego real, ' +
      'integrações que se mantêm sincronizadas e sistemas SaaS que aguentam a carga.',
    'hero.cta.contact': 'Entrar em contato',
    'hero.cta.resume': 'Ver Currículo',

    'focus.heading': 'No que eu trabalho',
    'focus.title.saas': 'Plataformas SaaS',
    'focus.desc.saas':
      'Cinco anos entregando funcionalidades em plataformas SaaS, incluindo a Onfly — sei o que é preciso para manter um produto complexo evoluindo rápido sem quebrar o que já funciona.',
    'focus.title.ecommerce': 'E-commerce & ERP',
    'focus.desc.ecommerce':
      'Sincronização com marketplaces, conexão com ERPs, automação de estoque — construo as integrações que mantêm uma operação de e-commerce funcionando sem intervenção manual.',
    'focus.title.apis': 'APIs REST & Microsserviços',
    'focus.desc.apis':
      'APIs REST com contratos previsíveis e espaço para crescer. Projeto pensando na equipe que vai manter o código no ano que vem, não apenas no sprint que vai entregá-lo hoje.',
    'focus.title.performance': 'Performance & Confiabilidade',
    'focus.desc.performance':
      'Endpoints lentos e rotas instáveis custam dinheiro real. Rastreio os gargalos — planos de query, cache miss, N+1 — e os corrijo com resultados mensuráveis — como levar uma rota crítica de 5 minutos para 10 segundos.',
    'focus.title.ai': 'IA Aplicada & RAG',
    'focus.desc.ai':
      'Adiciono capacidades de IA a backends PHP existentes sem reescrever a stack — busca semântica, perguntas sobre documentos e pipelines de recuperação que se integram à infraestrutura atual.',

    'about.heading': 'Sobre',
    'about.summary.p1':
      'Desenvolvedor Full Stack Sênior com mais de 5 anos de experiência construindo e escalando plataformas web em PHP, Laravel, Hyperf e Vue.js. ' +
      'Na Onfly, plataforma de gestão de viagens corporativas, atuo em rotas usadas por mais de 100.000 usuários — incluindo uma que passou de 5 minutos para 10 segundos. ' +
      'Antes disso, construí na Tribox uma plataforma de e-commerce para cerca de 500 lojas online, com integrações de pagamento, frete e ERP. Inglês avançado (TOEIC C1).',
    'about.summary.p2':
      'Principais áreas: APIs REST, Microsserviços, integrações de E-commerce e ERP, Performance Tuning, Redis, Docker, Sentry e IA Aplicada (RAG) em backends PHP.',

    'skills.heading': 'Habilidades Técnicas',
    'skills.languages': 'Linguagens de Programação',
    'skills.frameworks': 'Frameworks & Bibliotecas',
    'skills.tools': 'Ferramentas & Plataformas',
    'skills.specializations': 'Especializações',

    'experience.heading': 'Experiência Profissional',
    'experience.present': 'Atual',
    'experience.title.new-rizon': 'Desenvolvedor Full Stack Sênior',
    'experience.title.tribox': 'Desenvolvedor Full Stack Sênior',
    'experience.note.tribox': 'Iniciou como estagiário em setembro de 2020, efetivado como desenvolvedor em maio de 2021.',

    'education.heading': 'Formação Acadêmica',
    'education.degree.fatec-jahu': 'Tecnólogo em Gestão da Tecnologia da Informação',
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

    'faq.heading': 'Perguntas Frequentes',
    'faq.q1': 'Que tipos de projetos você aceita?',
    'faq.a1': 'Apps web, APIs, lojas e-commerce, ferramentas internas e plataformas SaaS — tudo full-stack. Trabalho com PHP/Laravel e Vue, então o stack se adapta ao seu projeto.',
    'faq.q2': 'Como funciona o processo?',
    'faq.a2': 'Começa com uma conversa rápida para entender o escopo. Envio uma proposta com prazo e custo, alinhamos os detalhes e o trabalho começa. Entrego em iterações para você dar feedback logo cedo.',
    'faq.q3': 'Você trabalha remotamente?',
    'faq.a3': 'Sim, 100% remoto. Fico em São Paulo (UTC-3) e já trabalhei com clientes em todo o Brasil e no exterior.',
    'faq.q4': 'Quanto custa?',
    'faq.a4': 'Depende do escopo. Features pontuais ou correções saem como preço fixo. Projetos maiores podem ser preço fixo ou por hora. Manda seus requisitos que faço uma estimativa honesta.',
    'faq.q5': 'Você consegue manter ou evoluir um código já existente?',
    'faq.a5': 'Sim. Entrar em projetos existentes é parte comum do meu trabalho. Posso auditar, refatorar, adicionar features ou corrigir bugs — o que o projeto precisar.',

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
      'Built and scaled features on Onfly — one of Latin America\'s largest corporate travel platforms — with PHP (Hyperf) and Vue.js, on high-traffic routes serving 100,000+ users',
      'Cut the load time of a critical API route from 5 minutes to 10 seconds through targeted query and backend optimization',
      'Reduced frontend production bugs by 30%+ through Sentry monitoring and resolution, and used Mixpanel and Sentry data to measure feature impact and guide architecture decisions',
      'Built and open-sourced a RAG pipeline in PHP/Hyperf — a production-ready starting point for adding AI-powered search to existing PHP backends',
      'Accelerated delivery cycles with AI-assisted workflows (Claude Code) for code review, refactoring, and debugging',
    ],
    tribox: [
      'Built and maintained a proprietary B2B/B2C e-commerce platform in PHP/Laravel, from early-stage product to production, serving around 500 online stores',
      'Integrated each store with a payment provider, a shipping provider, and an ERP (Bling, Tiny), plus Mercado Livre listings, order sync, and inventory',
      'Designed REST APIs for order management and third-party logistics system integration',
      'Automated order synchronization and inventory management, saving about 1 hour per day of manual reconciliation',
      'Delivered corrective and evolutionary maintenance on mission-critical applications and onboarded corporate clients',
    ],
  },
  pt: {
    'new-rizon': [
      'Desenvolvimento e escalonamento de funcionalidades na Onfly — uma das maiores plataformas de gestão de viagens corporativas da América Latina — com PHP (Hyperf) e Vue.js, em rotas de alto tráfego usadas por mais de 100.000 usuários',
      'Redução do tempo de carregamento de uma rota crítica de API de 5 minutos para 10 segundos através de otimização direcionada de queries e backend',
      'Redução de mais de 30% nos bugs de produção do frontend com monitoramento e resolução de alertas no Sentry, usando dados do Mixpanel e Sentry para medir o impacto de funcionalidades e orientar decisões de arquitetura',
      'Construção e publicação como open source de um pipeline RAG em PHP/Hyperf — ponto de partida pronto para produção para adicionar busca por IA a backends PHP existentes',
      'Aceleração dos ciclos de entrega com fluxos assistidos por IA (Claude Code) para revisão de código, refatoração e depuração',
    ],
    tribox: [
      'Construção e manutenção de plataforma de e-commerce proprietária B2B/B2C em PHP/Laravel, do estágio inicial até a produção, atendendo cerca de 500 lojas online',
      'Integração de cada loja com um provedor de pagamento, um de frete e um ERP (Bling, Tiny), além de listagens, pedidos e estoque no Mercado Livre',
      'Design de APIs REST para gestão de pedidos e integração com sistemas de logística terceirizados',
      'Automação da sincronização de pedidos e da gestão de estoque, economizando cerca de 1 hora por dia de reconciliação manual',
      'Manutenção corretiva e evolutiva em aplicações de missão crítica e onboarding de clientes corporativos',
    ],
  },
};
