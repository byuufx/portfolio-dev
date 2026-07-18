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
      'Software Engineer with 5+ years of experience in PHP, Laravel and Hyperf. ' +
      'REST APIs, system integration and SaaS architecture in e-commerce and corporate travel management.',

    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',

    'hero.eyebrow': 'Available for new roles',
    'hero.role': 'Full Stack Developer',
    'hero.location': 'Jaú, São Paulo, Brazil',
    'hero.pitch':
      'I build backend-heavy web platforms — PHP/Laravel and Hyperf APIs, e-commerce and ERP ' +
      'integrations, SaaS for corporate travel. Five years of shipping things that hold up in production.',
    'hero.cta.contact': 'Get in touch',
    'hero.cta.resume': 'Download CV',

    'focus.heading': 'What I work on',
    'focus.title.saas': 'SaaS Platforms',
    'focus.desc.saas':
      'Built and maintain a corporate travel management SaaS from the ground up — Vue.js interfaces, Hyperf APIs built for scale.',
    'focus.title.ecommerce': 'E-commerce & ERP',
    'focus.desc.ecommerce':
      'Integrated marketplaces like Mercado Livre and ERPs like Bling and Tiny into a proprietary B2B/B2C e-commerce platform.',
    'focus.title.apis': 'REST APIs & Microservices',
    'focus.desc.apis':
      'Designed REST APIs for order management and logistics, favoring small, testable services over monoliths.',
    'focus.title.performance': 'Performance & Reliability',
    'focus.desc.performance':
      'Redis caching, query optimization, and Sentry monitoring — the unglamorous work that keeps production fast and honest.',

    'about.heading': 'About',
    'about.summary.p1':
      'Software Engineer with 5+ years of experience, specialized in PHP, Laravel and Hyperf. ' +
      'Proven expertise in REST APIs, system integration, and SaaS application architecture in ' +
      'e-commerce and corporate travel management sectors. Advanced English proficiency (TOEIC C1).',
    'about.summary.p2':
      'Results-driven developer focused on delivering value through clean, efficient code. ' +
      'Strong team collaborator with a passion for continuous learning and professional growth.',

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
    'projects.tab.freelance': 'Freelance',
    'projects.tab.tribox': 'Tribox',

    'contact.heading': 'Get in Touch',
    'contact.pitch': "Have a project in mind, or an opening that fits? I'm quick to reply.",
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    'footer.built': 'Built by',
  },
  pt: {
    'meta.title': 'Felipe Trombini — Desenvolvedor Full Stack',
    'meta.description':
      'Engenheiro de Software com mais de 5 anos de experiência em PHP, Laravel e Hyperf. ' +
      'APIs REST, integração de sistemas e arquitetura SaaS em e-commerce e gestão de viagens corporativas.',

    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',

    'hero.eyebrow': 'Disponível para novas oportunidades',
    'hero.role': 'Desenvolvedor Full Stack',
    'hero.location': 'Jaú, São Paulo, Brasil',
    'hero.pitch':
      'Construo plataformas web com forte trabalho de backend — APIs em PHP/Laravel e Hyperf, ' +
      'integrações de e-commerce e ERP, SaaS de gestão de viagens corporativas. Cinco anos entregando código que se sustenta em produção.',
    'hero.cta.contact': 'Entrar em contato',
    'hero.cta.resume': 'Baixar Currículo',

    'focus.heading': 'No que eu trabalho',
    'focus.title.saas': 'Plataformas SaaS',
    'focus.desc.saas':
      'Desenvolvi e mantenho uma SaaS de gestão de viagens corporativas desde o início — interfaces em Vue.js, APIs em Hyperf pensadas para escalar.',
    'focus.title.ecommerce': 'E-commerce & ERP',
    'focus.desc.ecommerce':
      'Integrei marketplaces como o Mercado Livre e ERPs como Bling e Tiny a uma plataforma de e-commerce B2B/B2C proprietária.',
    'focus.title.apis': 'APIs REST & Microsserviços',
    'focus.desc.apis':
      'Desenho de APIs REST para gestão de pedidos e logística, priorizando serviços pequenos e testáveis em vez de monólitos.',
    'focus.title.performance': 'Performance & Confiabilidade',
    'focus.desc.performance':
      'Cache com Redis, otimização de queries e monitoramento com Sentry — o trabalho pouco glamouroso que mantém a produção rápida e honesta.',

    'about.heading': 'Sobre',
    'about.summary.p1':
      'Engenheiro de Software com mais de 5 anos de experiência, especializado em PHP, Laravel e Hyperf. ' +
      'Expertise comprovada em APIs REST, integração de sistemas e arquitetura de aplicações SaaS nos ' +
      'setores de e-commerce e gestão de viagens corporativas. Inglês avançado (TOEIC C1).',
    'about.summary.p2':
      'Desenvolvedor orientado a resultados, focado em entregar valor através de código limpo e eficiente. ' +
      'Forte colaborador em equipe, com paixão por aprendizado contínuo e crescimento profissional.',

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
    'projects.tab.freelance': 'Freelance',
    'projects.tab.tribox': 'Tribox',

    'contact.heading': 'Entre em Contato',
    'contact.pitch': 'Tem um projeto em mente ou uma vaga que combina comigo? Costumo responder rápido.',
    'contact.email': 'E-mail',
    'contact.linkedin': 'LinkedIn',
    'contact.github': 'GitHub',

    'footer.built': 'Desenvolvido por',
  },
} as const;

export const experienceBullets: Record<Lang, Record<string, string[]>> = {
  en: {
    'new-rizon': [
      'Developed and maintained SaaS platform for corporate travel management',
      'Built responsive user interfaces using Vue.js',
      'Implemented REST APIs using Hyperf with emphasis on performance and scalability',
      'Optimized database queries and implemented Redis caching strategies',
      'Wrote unit tests to ensure code quality and reliability',
      'Monitored production applications using Sentry for error tracking and performance',
      'Containerized applications using Docker for consistent deployment',
      'Participated in SCRUM ceremonies and agile workflows',
      'Created technical training materials and mentored team members',
    ],
    tribox: [
      'Developed and maintained proprietary B2B/B2C e-commerce platform',
      'Implemented integrations with major marketplaces and ERP systems (Mercado Livre, Bling, Tiny)',
      'Designed REST APIs for order management and logistics systems integration',
      'Automated order synchronization and inventory management processes',
      'Provided technical support and training to corporate clients',
      'Performed corrective and evolutionary maintenance on critical applications',
      'Collaborated effectively with cross-functional teams using Trello for project management',
    ],
  },
  pt: {
    'new-rizon': [
      'Desenvolvimento e manutenção de plataforma SaaS para gestão de viagens corporativas',
      'Construção de interfaces responsivas utilizando Vue.js',
      'Implementação de APIs REST utilizando Hyperf com foco em performance e escalabilidade',
      'Otimização de consultas ao banco de dados e implementação de cache com Redis',
      'Escrita de testes unitários para garantir qualidade e confiabilidade do código',
      'Monitoramento de aplicações em produção utilizando Sentry para rastreamento de erros e performance',
      'Containerização de aplicações com Docker para deploys consistentes',
      'Participação em cerimônias SCRUM e fluxos ágeis',
      'Criação de materiais de treinamento técnico e mentoria de membros da equipe',
    ],
    tribox: [
      'Desenvolvimento e manutenção de plataforma de e-commerce proprietária B2B/B2C',
      'Implementação de integrações com grandes marketplaces e sistemas ERP (Mercado Livre, Bling, Tiny)',
      'Design de APIs REST para gestão de pedidos e integração com sistemas de logística',
      'Automação de sincronização de pedidos e processos de gestão de estoque',
      'Suporte técnico e treinamento para clientes corporativos',
      'Manutenção corretiva e evolutiva em aplicações críticas',
      'Colaboração efetiva com equipes multidisciplinares utilizando Trello para gestão de projetos',
    ],
  },
};
