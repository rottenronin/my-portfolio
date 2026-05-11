import type { Education, Experience, OpenSourceProject, Project } from './portfolio'

export type LanguageCode = 'en' | 'fr' | 'zh'

export interface LocalizedContent {
  nav: {
    projects: string
    expertise: string
    experience: string
    education: string
    openSource: string
    contact: string
    language: string
    switchToLight: string
    switchToDark: string
  }
  seo: {
    homeTitle: string
    homeDescription: string
    portfolioSuffix: string
    projectNotFound: string
  }
  hero: {
    specialization: string
    intro: string
    systemProfile: string
    systemTitle: string
    available: string
    architectureLabel: string
    architectureValue: string
    systemsLabel: string
    systemsValue: string
    deliveryLabel: string
    deliveryValue: string
    focusLabel: string
    focusValue: string
    code: string
  }
  sections: {
    projects: { eyebrow: string; title: string; description: string; view: string; alert: string }
    expertise: { eyebrow: string; title: string; description: string }
    experience: { eyebrow: string; title: string; description: string }
    education: { eyebrow: string; title: string; description: string }
    openSource: { eyebrow: string; title: string; description: string }
    contact: { eyebrow: string; title: string; description: string; cta: string }
  }
  projectPage: {
    back: string
    eyebrow: string
    highlightsEyebrow: string
    highlightsTitle: string
    stackEyebrow: string
    stackTitle: string
    stackDescription: string
    moreWork: string
  }
  footer: string
  projects: Project[]
  expertise: Array<{ category: string; items: string[] }>
  experiences: Experience[]
  education: Education[]
  openSourceProjects: OpenSourceProject[]
}

export const languages: Array<{ code: LanguageCode; label: string; shortLabel: string }> = [
  { code: 'en', label: 'English', shortLabel: 'EN' },
  { code: 'fr', label: 'Français', shortLabel: 'FR' },
  { code: 'zh', label: '中文', shortLabel: '中文' }
]

const sharedLinks = {
  creshUi: [
    { label: 'GitHub', href: 'https://github.com/rottenronin/cresh-ui' },
    { label: 'npm', href: 'https://www.npmjs.com/package/@long2x/cresh-ui' }
  ],
  franceHistories: [{ label: 'Visit project', href: 'https://france-histories.example.com' }],
  leCercleVert: [{ label: 'Case study', href: '/projects/le-cercle-vert' }]
}

export const messages: Record<LanguageCode, LocalizedContent> = {
  en: {
    nav: {
      projects: 'Projects',
      expertise: 'Expertise',
      experience: 'Expérience',
      education: 'Education',
      openSource: 'Open source',
      contact: 'Contact',
      language: 'Language',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode'
    },
    seo: {
      homeTitle: 'Longlong Xu | Senior Fullstack Developer',
      homeDescription:
        'Senior fullstack developer portfolio covering product platforms, Vue, Angular, TypeScript, NestJS, .NET, cloud infrastructure, automated testing and production application delivery.',
      portfolioSuffix: 'Portfolio',
      projectNotFound: 'Project not found'
    },
    hero: {
      specialization: 'Fullstack product engineering, TypeScript, NestJS, .NET, Cloud',
      intro:
        'Building and modernizing product platforms across frontend, backend, cloud infrastructure and automation. Over a decade of experience shipping business applications, payment systems, inventory tools and enterprise workflows.',
      systemProfile: 'SYSTEM PROFILE',
      systemTitle: 'Fullstack product platforms',
      available: 'Available',
      architectureLabel: 'Architecture',
      architectureValue: 'Frontend, backend and API boundaries',
      systemsLabel: 'Business systems',
      systemsValue: 'Scheduling, payments, inventory and data workflows',
      deliveryLabel: 'Delivery',
      deliveryValue: 'Cloud operations, automated testing and CI/CD',
      focusLabel: 'Focus',
      focusValue: 'Long-term product maintenance and modernization',
      code: "const stack = ['Vue', 'Angular', 'NestJS', '.NET', 'AWS'];\nship({ product: 'business-critical', tests: 'e2e' });"
    },
    sections: {
      projects: {
        eyebrow: 'Featured work',
        title: 'Real projects with product and architecture depth.',
        description: 'Selected work across UI libraries, SSR content platforms and operational scheduling systems.',
        view: 'View',
        alert: 'This portfolio intentionally consumes Cresh UI primitives for actions, tags, cards, status UI and reusable interface patterns.'
      },
      expertise: {
        eyebrow: 'Technical expertise',
        title: 'Fullstack coverage shaped by production products.',
        description: 'The strongest work happens where product UI, reliable APIs, data models, test strategy and deployment constraints are designed together.'
      },
      experience: {
        eyebrow: 'Expérience',
        title: 'Impact-oriented engineering across product surfaces.',
        description: 'A practical focus on architecture, scalability, UI systems and production applications.'
      },
      education: {
        eyebrow: 'Education',
        title: 'Academic foundation in software engineering.',
        description: 'A technical education path combining project-based engineering, international study and early computer science foundations.'
      },
      openSource: {
        eyebrow: 'Open source',
        title: 'Open-source projects with real product utility.',
        description: 'Selected public projects that demonstrate reusable component architecture, production Nuxt patterns, documentation discipline and deployment readiness.'
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Need a senior engineer for a serious product surface?',
        description: 'I can help with product platforms, Vue/Nuxt architecture, Angular applications, NestJS APIs, cloud operations and production-ready fullstack delivery. Always open to a good opportunity when the product and engineering challenges are serious.',
        cta: 'Start a conversation'
      }
    },
    projectPage: {
      back: 'Back to projects',
      eyebrow: 'Project case study',
      highlightsEyebrow: 'Highlights',
      highlightsTitle: 'What this project demonstrates',
      stackEyebrow: 'Stack',
      stackTitle: 'Technologies and decisions',
      stackDescription:
        'The implementation emphasizes clear contracts, maintainable UI composition, responsive behavior, semantic HTML and deployment-aware performance choices.',
      moreWork: 'More work'
    },
    footer: 'Senior fullstack developer.',
    projects: [
      {
        slug: 'cresh-ui',
        previewUrl: 'https://cresh-ui.com/',
        title: 'Cresh UI',
        summary: 'Open-source Vue 3 UI component library focused on reusable and maintainable interfaces.',
        description:
          'A reusable component system for Vue applications, built around typed APIs, predictable composition, Storybook documentation and package distribution workflows.',
        highlights: ['Vue 3', 'TypeScript', 'Design System', 'Storybook', 'npm packaging'],
        technologies: ['Vue 3', 'TypeScript', 'Vite', 'Storybook', 'Design Tokens'],
        links: sharedLinks.creshUi,
        accent: '#0ea5e9',
        metrics: ['Reusable primitives', 'Typed component APIs', 'Package-ready architecture']
      },
      {
        slug: 'france-histories',
        previewUrl: 'https://france-histories.com/',
        title: 'France Histories',
        summary: 'Interactive platform exploring French history through visual storytelling, historical illustrations and chronological navigation.',
        description:
          'A content-led Nuxt experience designed for discoverability, fast SSR pages and structured historical navigation across eras, people and events.',
        highlights: ['Nuxt SSR', 'SEO', 'content architecture', 'responsive UX'],
        technologies: ['Nuxt', 'Vue 3', 'SSR', 'Content Modeling', 'Tailwind'],
        links: sharedLinks.franceHistories,
        accent: '#dc2626',
        metrics: ['Chronological UX', 'Semantic content model', 'Search-friendly pages']
      },
      {
        slug: 'le-cercle-vert',
        previewUrl: 'https://rdv.lecerclevert.org/',
        title: 'Le Cercle Vert',
        summary: 'Appointment scheduling platform developed for an association managing home collection appointments.',
        description:
          'A Nuxt 4 scheduling platform using Nuxt UI, AWS Lambda, DynamoDB and CloudFront to manage responsive appointment flows for association operations.',
        highlights: ['scheduling system', 'responsive UI', 'production-ready platform'],
        technologies: ['Nuxt 4', 'Nuxt UI', 'AWS Lambda', 'AWS DynamoDB', 'CloudFront'],
        links: sharedLinks.leCercleVert,
        accent: '#16a34a',
        metrics: ['Serverless scheduling', 'DynamoDB data model', 'CloudFront delivery']
      }
    ],
    expertise: [
      { category: 'Frontend', items: ['Vue 3', 'Nuxt', 'Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind', 'RxJS', 'jQuery', 'Knockout.js'] },
      { category: 'Backend', items: ['NestJS', 'Node.js', 'Express.js', 'PHP', 'Laravel', 'C#', 'ASP.NET MVC', 'PostgreSQL', 'MSSQL', 'REST APIs'] },
      { category: 'Testing', items: ['Playwright', 'Cypress', 'Selenium Grid', 'Nightwatch.js', 'E2E testing'] },
      { category: 'DevOps', items: ['AWS', 'Azure', 'Docker', 'Cloudflare', 'CI/CD', 'GitHub Actions'] }
    ],
    experiences: [
      {
        company: 'Bonduelle',
        duration: 'Nov 2024 - Present',
        role: 'Fullstack Web Developer',
        contract: 'Permanent contract',
        location: 'Lille, Hauts-de-France, France · Hybrid',
        stack: ['Angular 16', 'NestJS', 'AWS', 'MSSQL Server', 'Playwright', 'ORM'],
        impact: [
          'Developing the core crop and field management platform used by farmers and coopératives.',
          'Designing and maintaining product features across Angular 16 frontends and NestJS backend services.',
          'Modeling complex agricultural business data with MSSQL Server and maintaining robust Playwright E2E coverage.',
          'Contributing to cloud infrastructure operations on AWS for production application delivery.'
        ]
      },
      {
        company: 'Atelier256',
        duration: 'Nov 2024 - Jan 2025',
        role: 'Angular & NestJS Fullstack Consultant',
        contract: 'Fixed-term contract',
        location: 'Lille, Hauts-de-France, France · Hybrid',
        stack: ['Angular 16', 'NestJS', 'Tailwind CSS', 'Agile Scrum', 'Continuous delivery'],
        impact: [
          'Worked as a fullstack consultant in a five-person Agile delivery team.',
          'Built and maintained Angular 16 and NestJS features in a continuous delivery cycle.',
          'Participated in Scrum ceremonies and contributed to delivery coordination before transitioning to a permanent role with the client.'
        ]
      },
      {
        company: 'Davidson Consulting',
        duration: 'Apr 2024 - Jun 2024',
        role: 'Front-end Web Consultant',
        contract: 'Permanent contract',
        location: 'Lille, Hauts-de-France, France · Hybrid',
        stack: ['React.js', 'Next.js', 'Firebase'],
        impact: ['Developed and evolved internal product interfaces with React.js and Next.js.', 'Contributed to front-end implementation quality on short delivery cycles.']
      },
      {
        company: 'Cresh',
        duration: 'Apr 2020 - Jan 2024',
        role: 'Front-end Developer',
        contract: 'Full-time',
        location: 'Paris, Ile-de-France, France',
        stack: ['Vue.js', 'React', 'Gatsby', 'Node.js', 'Express.js', 'PHP', 'Cypress', 'Vitest'],
        impact: [
          'Built and maintained Vue.js web applications and React/Gatsby websites for production products.',
          'Developed Node.js and Express.js backend services for payment gateways and split-payment APIs.',
          'Created custom PHP plugins for PrestaShop and WooCommerce integrations.',
          'Implemented E2E and unit test coverage with Cypress, Mocha, Chai and Vitest in an Agile Scrum environment.'
        ]
      },
      {
        company: 'Dispatcher-pro',
        duration: 'Jun 2019 - Mar 2020',
        role: 'Front-end Developer',
        contract: 'Product role',
        location: 'Paris area, France',
        stack: ['Vue.js 2', 'Sass', 'Docker', 'Selenium Grid', 'Nightwatch.js'],
        impact: ['Refactored the platform front end with Vue.js 2.', 'Created automated test suites with Selenium Grid, Docker and Nightwatch.js.', 'Worked in an Agile Scrum delivery process.']
      },
      {
        company: 'SLYX Technology',
        duration: 'Mar 2017 - Jun 2019',
        role: 'Co-founder & Full-stack Web Developer',
        contract: 'Co-founder',
        location: 'Paris area, France',
        stack: ['Swift', 'iOS', 'Laravel', 'Angular 2+', 'Vue.js', 'TypeScript', 'Agile'],
        impact: [
          'Built inventory management applications for iOS with Swift.',
          'Developed web applications with PHP Laravel, Angular 2+, Vue.js and TypeScript.',
          'Owned technical delivery inside a small Agile team, spanning product architecture, implementation and maintenance.'
        ]
      },
      {
        company: 'Curioos',
        duration: 'Jun 2015 - Sep 2016',
        role: 'Full-stack Web Developer',
        contract: 'Product role',
        location: 'Paris area, France',
        stack: ['JavaScript', 'jQuery', 'Knockout.js', 'C#', 'ASP.NET MVC', 'ImageMagick', 'Microsoft Azure'],
        impact: [
          'Maintained and evolved production applications with JavaScript, jQuery, Knockout.js, C# and ASP.NET MVC.',
          'Automated internal workflows with ImageMagick to reduce repetitive operational work.',
          'Developed cloud-backed solutions on Microsoft Azure.'
        ]
      },
      {
        company: 'ONprint',
        duration: 'Mar 2014 - May 2015',
        role: 'Full-stack Web Developer',
        contract: 'Product role',
        location: 'Paris area, France',
        stack: ['JavaScript', 'jQuery', 'Knockout.js', 'C#', 'ASP.NET MVC', 'Microsoft SQL Server', 'Entity Framework'],
        impact: [
          'Developed and maintained web applications for the Onprint platform.',
          'Built front-end interfaces with JavaScript, jQuery and Knockout.js.',
          'Implemented backend features with C# ASP.NET MVC, Microsoft SQL Server and Entity Framework.'
        ]
      },
      {
        company: 'Upsideo',
        duration: 'Sep 2013 - Feb 2014',
        role: 'Software Developer Intern',
        contract: 'Internship',
        location: 'Paris area, France',
        stack: ['ASP.NET MVC3', 'ASP.NET', 'jQuery', 'Internal tooling'],
        impact: ['Developed internal tools with ASP.NET MVC3 and jQuery.', 'Maintained existing ASP.NET projects and contributed fixes across internal applications.']
      }
    ],
    education: [
      {
        school: "Epitech - L’école de l’excellence informatique",
        degree: 'Master 2, Computer Programming',
        duration: '2012 - 2014',
        location: 'Paris, France',
        details: ['Advanced software engineering curriculum with project-based learning.']
      },
      {
        school: 'Beijing Jiaotong University',
        degree: 'International academic exchange',
        duration: '2012 - 2013',
        location: 'Beijing, China',
        details: ['International study period focused on computer science and engineering culture.']
      },
      {
        school: "Epitech - L’école de l’excellence informatique",
        degree: 'Bachelor EPITECH',
        duration: '2009 - 2012',
        location: 'Paris, France',
        details: ['Bachelor-level software engineering foundation through practical programming projects.']
      },
      {
        school: 'Lycée Maurice Ravel',
        degree: 'Baccalaureate',
        duration: 'Sep 2007 - Jun 2009',
        location: 'Paris, France',
        details: ['Secondary education completed before specializing in software engineering.']
      }
    ],
    openSourceProjects: [
      {
        name: 'Cresh UI',
        category: 'Vue component library',
        description: 'Open-source Vue 3 UI library focused on reusable components, typed APIs, design-system consistency and npm package distribution.',
        stack: ['Vue 3', 'TypeScript', 'Vite', 'Design System', 'npm'],
        href: 'https://github.com/rottenronin/cresh-ui'
      },
      {
        name: 'my-portfolio',
        category: 'Nuxt portfolio application',
        description: 'This portfolio website, built as a production-grade Nuxt application with SSR, SEO metadata, Cloudflare Pages deployment and Cresh UI components.',
        stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages'],
        href: 'https://github.com/rottenronin/my-portfolio'
      }
    ]
  },
  fr: {
    nav: {
      projects: 'Projets',
      expertise: 'Expertise',
      experience: 'Expérience',
      education: 'Formation',
      openSource: 'Open source',
      contact: 'Contact',
      language: 'Langue',
      switchToLight: 'Passer en mode clair',
      switchToDark: 'Passer en mode sombre'
    },
    seo: {
      homeTitle: 'Longlong Xu | Développeur Fullstack Senior',
      homeDescription:
        'Portfolio de développeur fullstack senior couvrant plateformes produit, Vue, Angular, TypeScript, NestJS, .NET, cloud, tests automatisés et livraison en production.',
      portfolioSuffix: 'Portfolio',
      projectNotFound: 'Projet introuvable'
    },
    hero: {
      specialization: 'Engineering produit fullstack, TypeScript, NestJS, .NET, Cloud',
      intro:
        'Je construis et modernise des plateformes produit sur le frontend, le backend, le cloud et l’automatisation. Plus de dix ans d’expérience sur des applications métier, systèmes de paiement, outils d’inventaire et workflows enterprise.',
      systemProfile: 'PROFIL TECHNIQUE',
      systemTitle: 'Plateformes produit fullstack',
      available: 'Disponible',
      architectureLabel: 'Architecture',
      architectureValue: 'Frontend, backend et frontières API',
      systemsLabel: 'Systèmes métier',
      systemsValue: 'Planning, paiements, inventaire et workflows data',
      deliveryLabel: 'Delivery',
      deliveryValue: 'Cloud, tests automatisés et CI/CD',
      focusLabel: 'Focus',
      focusValue: 'Maintenance produit long terme et modernisation',
      code: "const stack = ['Vue', 'Angular', 'NestJS', '.NET', 'AWS'];\nship({ produit: 'critique', tests: 'e2e' });"
    },
    sections: {
      projects: {
        eyebrow: 'Projets',
        title: 'Des projets réels avec profondeur produit et architecture.',
        description: 'Sélection de projets autour des bibliothèques UI, plateformes SSR et systèmes opérationnels.',
        view: 'Voir',
        alert: 'Ce portfolio utilise volontairement des primitives Cresh UI pour les actions, tags, cards, statuts et patterns d’interface réutilisables.'
      },
      expertise: {
        eyebrow: 'Expertise technique',
        title: 'Couverture fullstack ancrée dans des produits en production.',
        description: 'Le meilleur travail se situe entre interface produit, APIs fiables, modèles de données, stratégie de tests et contraintes de déploiement.'
      },
      experience: {
        eyebrow: 'Expérience',
        title: 'Engineering orienté impact sur des surfaces produit.',
        description: 'Un focus concret sur l’architecture, la scalabilité, les systèmes UI et les applications en production.'
      },
      education: {
        eyebrow: 'Formation',
        title: 'Base académique en génie logiciel.',
        description: 'Un parcours technique combinant projets pratiques, expérience internationale et fondamentaux informatiques.'
      },
      openSource: {
        eyebrow: 'Open source',
        title: 'Projets open source avec utilité produit concrète.',
        description: 'Sélection de projets publics montrant architecture de composants, patterns Nuxt, documentation et readiness de déploiement.'
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Besoin d’un développeur senior pour une vraie surface produit ?',
        description: 'Je peux aider sur des plateformes produit, architectures Vue/Nuxt, applications Angular, APIs NestJS, opérations cloud et livraison fullstack en production. Toujours partant pour une bonne opportunité lorsque le produit et les enjeux techniques sont sérieux.',
        cta: 'Démarrer une conversation'
      }
    },
    projectPage: {
      back: 'Retour aux projets',
      eyebrow: 'Étude de cas',
      highlightsEyebrow: 'Points forts',
      highlightsTitle: 'Ce que ce projet démontre',
      stackEyebrow: 'Stack',
      stackTitle: 'Technologies et décisions',
      stackDescription:
        'L’implémentation met l’accent sur des contrats clairs, une composition UI maintenable, le responsive, le HTML sémantique et les choix de performance liés au déploiement.',
      moreWork: 'Autres projets'
    },
    footer: 'Développeur fullstack senior.',
    projects: [
      {
        slug: 'cresh-ui',
        previewUrl: 'https://cresh-ui.com/',
        title: 'Cresh UI',
        summary: 'Bibliothèque open source de composants Vue 3 orientée interfaces réutilisables et maintenables.',
        description:
          'Un système de composants réutilisables pour applications Vue, construit autour d’APIs typées, d’une composition predictable, de documentation Storybook et de workflows de publication npm.',
        highlights: ['Vue 3', 'TypeScript', 'Design System', 'Storybook', 'package npm'],
        technologies: ['Vue 3', 'TypeScript', 'Vite', 'Storybook', 'Design Tokens'],
        links: sharedLinks.creshUi,
        accent: '#0ea5e9',
        metrics: ['Primitives réutilisables', 'APIs de composants typées', 'Architecture prête pour package']
      },
      {
        slug: 'france-histories',
        previewUrl: 'https://france-histories.com/',
        title: 'France Histories',
        summary: 'Plateforme interactive explorant l’histoire de France avec narration visuelle, illustrations et navigation chronologique.',
        description:
          'Une expérience Nuxt orientée contenu, conçue pour le SEO, des pages SSR rapides et une navigation structurée entre époques, personnages et événements.',
        highlights: ['Nuxt SSR', 'SEO', 'architecture contenu', 'UX responsive'],
        technologies: ['Nuxt', 'Vue 3', 'SSR', 'Content Modeling', 'Tailwind'],
        links: sharedLinks.franceHistories,
        accent: '#dc2626',
        metrics: ['UX chronologique', 'Modèle de contenu sémantique', 'Pages SEO-friendly']
      },
      {
        slug: 'le-cercle-vert',
        previewUrl: 'https://rdv.lecerclevert.org/',
        title: 'Le Cercle Vert',
        summary: 'Plateforme de prise de rendez-vous pour une association gérant des collectes à domicile.',
        description:
          'Plateforme de planification Nuxt 4 utilisant Nuxt UI, AWS Lambda, DynamoDB et CloudFront pour gérer les parcours de rendez-vous d’une association.',
        highlights: ['système de planning', 'UI responsive', 'plateforme production'],
        technologies: ['Nuxt 4', 'Nuxt UI', 'AWS Lambda', 'AWS DynamoDB', 'CloudFront'],
        links: sharedLinks.leCercleVert,
        accent: '#16a34a',
        metrics: ['Planning serverless', 'Modèle DynamoDB', 'Diffusion CloudFront']
      }
    ],
    expertise: [
      { category: 'Frontend', items: ['Vue 3', 'Nuxt', 'Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind', 'RxJS', 'jQuery', 'Knockout.js'] },
      { category: 'Backend', items: ['NestJS', 'Node.js', 'Express.js', 'PHP', 'Laravel', 'C#', 'ASP.NET MVC', 'PostgreSQL', 'MSSQL', 'REST APIs'] },
      { category: 'Tests', items: ['Playwright', 'Cypress', 'Selenium Grid', 'Nightwatch.js', 'Tests E2E'] },
      { category: 'DevOps', items: ['AWS', 'Azure', 'Docker', 'Cloudflare', 'CI/CD', 'GitHub Actions'] }
    ],
    experiences: [],
    education: [],
    openSourceProjects: []
  },
  zh: {
    nav: {
      projects: '项目',
      expertise: '技术能力',
      experience: '经历',
      education: '教育',
      openSource: '开源',
      contact: '联系',
      language: '语言',
      switchToLight: '切换到浅色模式',
      switchToDark: '切换到深色模式'
    },
    seo: {
      homeTitle: 'Longlong Xu | 高级全栈开发工程师',
      homeDescription:
        '高级全栈开发工程师作品集，覆盖产品平台、Vue、Angular、TypeScript、NestJS、.NET、云基础设施、自动化测试和生产交付。',
      portfolioSuffix: '作品集',
      projectNotFound: '项目未找到'
    },
    hero: {
      specialization: '全栈产品工程，TypeScript，NestJS，.NET，Cloud',
      intro:
        '我负责构建和现代化产品平台，覆盖前端、后端、云基础设施和自动化。十多年经验，交付过业务应用、支付系统、库存工具和企业级工作流。',
      systemProfile: '技术画像',
      systemTitle: '全栈产品平台',
      available: '可联系',
      architectureLabel: '架构',
      architectureValue: '前端、后端与 API 边界',
      systemsLabel: '业务系统',
      systemsValue: '预约、支付、库存与数据工作流',
      deliveryLabel: '交付',
      deliveryValue: '云运维、自动化测试与 CI/CD',
      focusLabel: '重点',
      focusValue: '长期产品维护与系统现代化',
      code: "const stack = ['Vue', 'Angular', 'NestJS', '.NET', 'AWS'];\nship({ product: 'business-critical', tests: 'e2e' });"
    },
    sections: {
      projects: {
        eyebrow: '精选项目',
        title: '具备产品深度和架构深度的真实项目。',
        description: '涵盖 UI 组件库、SSR 内容平台和运营预约系统的项目实践。',
        view: '查看',
        alert: '这个作品集有意使用 Cresh UI 的按钮、标签、卡片、状态 UI 和可复用界面模式。'
      },
      expertise: {
        eyebrow: '技术能力',
        title: '以生产产品为背景的全栈能力。',
        description: '优秀的产品工程需要同时设计产品 UI、可靠 API、数据模型、测试策略和部署约束。'
      },
      experience: {
        eyebrow: '工作经历',
        title: '围绕产品界面和业务系统的影响力工程实践。',
        description: '关注架构、可扩展性、UI 系统和生产级应用。'
      },
      education: {
        eyebrow: '教育背景',
        title: '软件工程方向的教育基础。',
        description: '结合项目制工程训练、国际学习经历和计算机科学基础。'
      },
      openSource: {
        eyebrow: '开源',
        title: '具备实际产品价值的开源项目。',
        description: '精选公开项目，展示可复用组件架构、Nuxt 生产模式、文档能力和部署准备度。'
      },
      contact: {
        eyebrow: '联系',
        title: '需要一名高级工程师来推进严肃的产品系统？',
        description: '我可以支持产品平台、Vue/Nuxt 架构、Angular 应用、NestJS API、云运维和生产级全栈交付。如果产品和技术挑战足够认真，我一直愿意了解好的机会。',
        cta: '开始沟通'
      }
    },
    projectPage: {
      back: '返回项目',
      eyebrow: '项目案例',
      highlightsEyebrow: '亮点',
      highlightsTitle: '这个项目展示了什么',
      stackEyebrow: '技术栈',
      stackTitle: '技术与决策',
      stackDescription: '实现重点包括清晰契约、可维护 UI 组合、响应式体验、语义化 HTML 和面向部署的性能选择。',
      moreWork: '更多项目'
    },
    footer: '高级全栈开发工程师。',
    projects: [
      {
        slug: 'cresh-ui',
        previewUrl: 'https://cresh-ui.com/',
        title: 'Cresh UI',
        summary: '开源 Vue 3 UI 组件库，聚焦可复用、可维护的界面构建。',
        description: '面向 Vue 应用的可复用组件系统，包含类型化 API、稳定组合方式、Storybook 文档和 npm 发布流程。',
        highlights: ['Vue 3', 'TypeScript', 'Design System', 'Storybook', 'npm packaging'],
        technologies: ['Vue 3', 'TypeScript', 'Vite', 'Storybook', 'Design Tokens'],
        links: sharedLinks.creshUi,
        accent: '#0ea5e9',
        metrics: ['可复用基础组件', '类型化组件 API', '可发布的包架构']
      },
      {
        slug: 'france-histories',
        previewUrl: 'https://france-histories.com/',
        title: 'France Histories',
        summary: '通过视觉叙事、历史插图和时间线导航探索法国历史的互动平台。',
        description: '以内容为核心的 Nuxt 体验，面向可发现性、快速 SSR 页面和结构化历史导航设计。',
        highlights: ['Nuxt SSR', 'SEO', '内容架构', '响应式 UX'],
        technologies: ['Nuxt', 'Vue 3', 'SSR', 'Content Modeling', 'Tailwind'],
        links: sharedLinks.franceHistories,
        accent: '#dc2626',
        metrics: ['时间线 UX', '语义化内容模型', '搜索友好页面']
      },
      {
        slug: 'le-cercle-vert',
        previewUrl: 'https://rdv.lecerclevert.org/',
        title: 'Le Cercle Vert',
        summary: '为协会开发的上门回收预约管理平台。',
        description: '基于 Nuxt 4 的预约平台，使用 Nuxt UI、AWS Lambda、DynamoDB 和 CloudFront 管理协会运营中的响应式预约流程。',
        highlights: ['预约系统', '响应式 UI', '生产平台'],
        technologies: ['Nuxt 4', 'Nuxt UI', 'AWS Lambda', 'AWS DynamoDB', 'CloudFront'],
        links: sharedLinks.leCercleVert,
        accent: '#16a34a',
        metrics: ['Serverless 预约流程', 'DynamoDB 数据模型', 'CloudFront 分发']
      }
    ],
    expertise: [
      { category: '前端', items: ['Vue 3', 'Nuxt', 'Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind', 'RxJS', 'jQuery', 'Knockout.js'] },
      { category: '后端', items: ['NestJS', 'Node.js', 'Express.js', 'PHP', 'Laravel', 'C#', 'ASP.NET MVC', 'PostgreSQL', 'MSSQL', 'REST APIs'] },
      { category: '测试', items: ['Playwright', 'Cypress', 'Selenium Grid', 'Nightwatch.js', 'E2E 测试'] },
      { category: 'DevOps', items: ['AWS', 'Azure', 'Docker', 'Cloudflare', 'CI/CD', 'GitHub Actions'] }
    ],
    experiences: [],
    education: [],
    openSourceProjects: []
  }
}

messages.fr.experiences = [
  {
    ...(messages.en.experiences[0]!),
    duration: 'Nov. 2024 - Aujourd’hui',
    role: 'Développeur Web Fullstack',
    contract: 'CDI',
    location: 'Lille, Hauts-de-France, France · Hybride',
    impact: [
      'Développement du projet de gestion des cultures et des parcelles pour agriculteurs et coopératives.',
      'Conception et maintenance de fonctionnalités avec Angular 16 côté frontend et NestJS côté backend.',
      'Modélisation de données métier agricoles complexes avec MSSQL Server et maintien de tests E2E robustes avec Playwright.',
      'Contribution aux opérations d’infrastructure cloud sur AWS pour des applications en production.'
    ]
  },
  {
    ...(messages.en.experiences[1]!),
    duration: 'Nov. 2024 - Janv. 2025',
    role: 'Consultant Fullstack Angular & NestJS',
    contract: 'CDD',
    location: 'Lille, Hauts-de-France, France · Hybride',
    impact: [
      'Mission de consultant fullstack au sein d’une équipe Agile de cinq personnes.',
      'Développement et maintenance de fonctionnalités Angular 16 et NestJS dans un cycle de livraison continue.',
      'Participation aux cérémonies Scrum et à la coordination de livraison avant un passage en CDI chez le client.'
    ]
  },
  {
    ...(messages.en.experiences[2]!),
    duration: 'Avr. 2024 - Juin 2024',
    role: 'Consultant Web Front-end',
    contract: 'CDI',
    location: 'Lille, Hauts-de-France, France · Hybride',
    impact: [
      'Développement et évolution de produits internes avec React.js et Next.js.',
      'Contribution à la qualité d’implémentation front-end sur des cycles de livraison courts.'
    ]
  },
  {
    ...(messages.en.experiences[3]!),
    duration: 'Avr. 2020 - Janv. 2024',
    role: 'Développeur Front-end',
    contract: 'Temps plein',
    location: 'Paris, Ile-de-France, France',
    impact: [
      'Conception et maintenance d’applications Vue.js et de sites React/Gatsby pour des produits en production.',
      'Développement de services backend Node.js et Express.js pour passerelles de paiement et APIs de paiement en plusieurs fois.',
      'Création de plugins PHP sur mesure pour des intégrations PrestaShop et WooCommerce.',
      'Mise en place de tests E2E et unitaires avec Cypress, Mocha, Chai et Vitest dans un environnement Agile Scrum.'
    ]
  },
  {
    ...(messages.en.experiences[4]!),
    duration: 'Juin 2019 - Mars 2020',
    role: 'Développeur Front-end',
    contract: 'Rôle produit',
    location: 'Paris et périphérie, France',
    impact: [
      'Refonte de la plateforme front-end avec Vue.js 2.',
      'Création de suites de tests automatisés avec Selenium Grid, Docker et Nightwatch.js.',
      'Travail dans une organisation Agile Scrum.'
    ]
  },
  {
    ...(messages.en.experiences[5]!),
    duration: 'Mars 2017 - Juin 2019',
    role: 'Co-founder & Full-stack Web Developer',
    contract: 'Co-fondateur',
    location: 'Paris et périphérie, France',
    impact: [
      'Développement d’applications de gestion d’inventaire en Swift pour iOS.',
      'Création d’applications web avec PHP Laravel, Angular 2+, Vue.js et TypeScript.',
      'Gestion des aspects techniques au sein d’une petite équipe Agile, de l’architecture produit à la maintenance.'
    ]
  },
  {
    ...(messages.en.experiences[6]!),
    duration: 'Juin 2015 - Sept. 2016',
    role: 'Full-stack Web Developer',
    contract: 'Rôle produit',
    location: 'Paris et périphérie, France',
    impact: [
      'Maintenance et évolution d’applications en JavaScript, jQuery, Knockout.js, C# et ASP.NET MVC.',
      'Automatisation de tâches internes avec ImageMagick pour réduire le travail répétitif.',
      'Développement de solutions cloud sur Microsoft Azure.'
    ]
  },
  {
    ...(messages.en.experiences[7]!),
    duration: 'Mars 2014 - Mai 2015',
    role: 'Full-stack Web Developer',
    contract: 'Rôle produit',
    location: 'Paris et périphérie, France',
    impact: [
      'Développement et maintenance d’applications web pour la plateforme Onprint.',
      'Développement d’interfaces front-end avec JavaScript, jQuery et Knockout.js.',
      'Implémentation de fonctionnalités backend avec C# ASP.NET MVC, Microsoft SQL Server et Entity Framework.'
    ]
  },
  {
    ...(messages.en.experiences[8]!),
    duration: 'Sept. 2013 - Févr. 2014',
    role: 'Développeur Stagiaire',
    contract: 'Stage',
    location: 'Paris et périphérie, France',
    impact: [
      'Développement d’outils internes en ASP.NET MVC3 et jQuery.',
      'Maintenance de projets existants en ASP.NET et contribution à des correctifs applicatifs internes.'
    ]
  }
]

messages.fr.education = [
  {
    ...(messages.en.education[0]!),
    school: "Epitech - L’école de l’excellence informatique",
    degree: 'Master 2, Programmation informatique',
    duration: '2012 - 2014',
    location: 'Paris, France',
    details: ['Cursus avancé de génie logiciel avec apprentissage par projets.']
  },
  {
    ...(messages.en.education[1]!),
    school: 'Beijing Jiaotong University',
    degree: 'Échange académique international',
    duration: '2012 - 2013',
    location: 'Pékin, Chine',
    details: ['Période d’études internationale orientée informatique et culture engineering.']
  },
  {
    ...(messages.en.education[2]!),
    school: "Epitech - L’école de l’excellence informatique",
    degree: 'Bachelor EPITECH',
    duration: '2009 - 2012',
    location: 'Paris, France',
    details: ['Formation bachelor en génie logiciel fondée sur des projets de programmation pratiques.']
  },
  {
    ...(messages.en.education[3]!),
    school: 'Lycée Maurice Ravel',
    degree: 'Diplôme de niveau Bac',
    duration: 'Sept. 2007 - Juin 2009',
    location: 'Paris, France',
    details: ['Formation secondaire avant la spécialisation en développement logiciel.']
  }
]
messages.fr.openSourceProjects = [
  {
    name: 'Cresh UI',
    category: 'Bibliothèque de composants Vue',
    description:
      'Bibliothèque UI open source Vue 3 orientée composants réutilisables, APIs typées, cohérence design system et distribution npm.',
    stack: ['Vue 3', 'TypeScript', 'Vite', 'Design System', 'npm'],
    href: 'https://github.com/rottenronin/cresh-ui'
  },
  {
    name: 'my-portfolio',
    category: 'Application portfolio Nuxt',
    description:
      'Ce site portfolio, construit comme une application Nuxt production-grade avec SSR, metadata SEO, déploiement Cloudflare Pages et composants Cresh UI.',
    stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages'],
    href: 'https://github.com/rottenronin/my-portfolio'
  }
]

messages.zh.experiences = [
  {
    ...(messages.en.experiences[0]!),
    duration: '2024年11月 - 至今',
    role: '全栈 Web 开发工程师',
    contract: '长期合同',
    location: '法国上法兰西大区里尔 · 混合办公',
    impact: [
      '开发面向农户和合作社的作物与地块管理核心平台。',
      '使用 Angular 16 前端和 NestJS 后端设计并维护产品功能。',
      '使用 MSSQL Server 建模复杂农业业务数据，并维护稳定的 Playwright E2E 测试覆盖。',
      '参与 AWS 云基础设施运维，支持生产应用交付。'
    ]
  },
  {
    ...(messages.en.experiences[1]!),
    duration: '2024年11月 - 2025年1月',
    role: 'Angular & NestJS 全栈顾问',
    contract: '固定期限合同',
    location: '法国上法兰西大区里尔 · 混合办公',
    impact: [
      '作为全栈顾问加入五人 Agile 交付团队。',
      '在持续交付节奏中开发和维护 Angular 16 与 NestJS 功能。',
      '参与 Scrum 仪式和交付协调，并在任务结束后转为客户方长期职位。'
    ]
  },
  {
    ...(messages.en.experiences[2]!),
    duration: '2024年4月 - 2024年6月',
    role: '前端 Web 顾问',
    contract: '长期合同',
    location: '法国上法兰西大区里尔 · 混合办公',
    impact: [
      '使用 React.js 和 Next.js 开发并演进内部产品界面。',
      '在短交付周期中提升前端实现质量。'
    ]
  },
  {
    ...(messages.en.experiences[3]!),
    duration: '2020年4月 - 2024年1月',
    role: '前端开发工程师',
    contract: '全职',
    location: '法国巴黎，法兰西岛',
    impact: [
      '为生产产品构建和维护 Vue.js Web 应用以及 React/Gatsby 网站。',
      '开发 Node.js 和 Express.js 后端服务，包括支付网关和分期支付 API。',
      '为 PrestaShop 和 WooCommerce 集成创建定制 PHP 插件。',
      '在 Agile Scrum 环境中使用 Cypress、Mocha、Chai 和 Vitest 建立 E2E 与单元测试覆盖。'
    ]
  },
  {
    ...(messages.en.experiences[4]!),
    duration: '2019年6月 - 2020年3月',
    role: '前端开发工程师',
    contract: '产品岗位',
    location: '法国巴黎及周边',
    impact: [
      '使用 Vue.js 2 重构平台前端。',
      '使用 Selenium Grid、Docker 和 Nightwatch.js 创建自动化测试套件。',
      '在 Agile Scrum 流程中参与交付。'
    ]
  },
  {
    ...(messages.en.experiences[5]!),
    duration: '2017年3月 - 2019年6月',
    role: '联合创始人 & 全栈 Web 开发工程师',
    contract: '联合创始人',
    location: '法国巴黎及周边',
    impact: [
      '使用 Swift 开发 iOS 库存管理应用。',
      '使用 PHP Laravel、Angular 2+、Vue.js 和 TypeScript 创建 Web 应用。',
      '在小型 Agile 团队中负责技术交付，覆盖产品架构、实现和维护。'
    ]
  },
  {
    ...(messages.en.experiences[6]!),
    duration: '2015年6月 - 2016年9月',
    role: '全栈 Web 开发工程师',
    contract: '产品岗位',
    location: '法国巴黎及周边',
    impact: [
      '使用 JavaScript、jQuery、Knockout.js、C# 和 ASP.NET MVC 维护并演进生产应用。',
      '使用 ImageMagick 自动化内部流程，减少重复运营工作。',
      '在 Microsoft Azure 上开发云端解决方案。'
    ]
  },
  {
    ...(messages.en.experiences[7]!),
    duration: '2014年3月 - 2015年5月',
    role: '全栈 Web 开发工程师',
    contract: '产品岗位',
    location: '法国巴黎及周边',
    impact: [
      '为 Onprint 平台开发和维护 Web 应用。',
      '使用 JavaScript、jQuery 和 Knockout.js 构建前端界面。',
      '使用 C# ASP.NET MVC、Microsoft SQL Server 和 Entity Framework 实现后端功能。'
    ]
  },
  {
    ...(messages.en.experiences[8]!),
    duration: '2013年9月 - 2014年2月',
    role: '软件开发实习生',
    contract: '实习',
    location: '法国巴黎及周边',
    impact: [
      '使用 ASP.NET MVC3 和 jQuery 开发内部工具。',
      '维护现有 ASP.NET 项目，并为内部应用贡献修复。'
    ]
  }
]

messages.zh.education = [
  {
    ...(messages.en.education[0]!),
    school: "Epitech - L’école de l’excellence informatique",
    degree: 'Master 2，计算机编程',
    duration: '2012 - 2014',
    location: '法国巴黎',
    details: ['以项目实践为核心的高级软件工程课程。']
  },
  {
    ...(messages.en.education[1]!),
    school: '北京交通大学',
    degree: '国际交流学习',
    duration: '2012 - 2013',
    location: '中国北京',
    details: ['围绕计算机科学与工程文化的国际学习经历。']
  },
  {
    ...(messages.en.education[2]!),
    school: "Epitech - L’école de l’excellence informatique",
    degree: 'Bachelor EPITECH',
    duration: '2009 - 2012',
    location: '法国巴黎',
    details: ['通过实践编程项目建立软件工程基础。']
  },
  {
    ...(messages.en.education[3]!),
    school: 'Lycée Maurice Ravel',
    degree: '高中毕业文凭',
    duration: '2007年9月 - 2009年6月',
    location: '法国巴黎',
    details: ['进入软件工程专业方向前的中学教育。']
  }
]
messages.zh.openSourceProjects = [
  {
    name: 'Cresh UI',
    category: 'Vue 组件库',
    description: '开源 Vue 3 UI 库，聚焦可复用组件、类型化 API、设计系统一致性和 npm 包发布。',
    stack: ['Vue 3', 'TypeScript', 'Vite', 'Design System', 'npm'],
    href: 'https://github.com/rottenronin/cresh-ui'
  },
  {
    name: 'my-portfolio',
    category: 'Nuxt 作品集应用',
    description: '本作品集网站，作为生产级 Nuxt 应用构建，包含 SSR、SEO metadata、Cloudflare Pages 部署和 Cresh UI 组件。',
    stack: ['Nuxt 4', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages'],
    href: 'https://github.com/rottenronin/my-portfolio'
  }
]
