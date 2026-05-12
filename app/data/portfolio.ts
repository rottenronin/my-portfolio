export interface LinkItem {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  technologies: string[];
  links: LinkItem[];
  accent: string;
  metrics: string[];
  previewUrl?: string;
}

export interface Experience {
  company: string;
  duration: string;
  role: string;
  contract: string;
  location: string;
  stack: string[];
  impact: string[];
}

export interface Education {
  school: string;
  degree: string;
  duration: string;
  location?: string;
  details?: string[];
}

export interface OpenSourceProject {
  name: string;
  category: string;
  description: string;
  stack: string[];
  href: string;
}

export const profile = {
  fullName: "Longlong Xu",
  title: "Senior Fullstack Developer",
  specialization:
    "Fullstack product engineering, TypeScript, NestJS, .NET, Cloud",
  intro:
    "Building and modernizing product platforms across frontend, backend, cloud infrastructure and automation. Over a decade of experience shipping business applications, payment systems, inventory tools and enterprise workflows.",
  email: "mailto:longlongxu@proton.me",
  github: "https://github.com/rottenronin",
  linkedin: "https://www.linkedin.com/in/longlong-xu/",
  siteUrl: "https://longlongxu.com",
  location: "Northern France",
};

export const projects: Project[] = [
  {
    slug: "cresh-ui",
    previewUrl: "https://cresh-ui.com/",
    title: "Cresh UI",
    summary:
      "Open-source Vue 3 UI component library focused on reusable and maintainable interfaces.",
    description:
      "A reusable component system for Vue applications, built around typed APIs, predictable composition, Storybook documentation and package distribution workflows.",
    highlights: [
      "Vue 3",
      "TypeScript",
      "Design System",
      "Storybook",
      "npm packaging",
    ],
    technologies: ["Vue 3", "TypeScript", "Vite", "Storybook", "Design Tokens"],
    links: [
      { label: "GitHub", href: "https://github.com/rottenronin/cresh-ui" },
      { label: "npm", href: "https://www.npmjs.com/package/@long2x/cresh-ui" },
    ],
    accent: "#0ea5e9",
    metrics: [
      "Reusable primitives",
      "Typed component APIs",
      "Package-ready architecture",
    ],
  },
  {
    slug: "france-histories",
    previewUrl: "https://france-histories.com/",
    title: "France Histories",
    summary:
      "Interactive platform exploring French history through visual storytelling, historical illustrations and chronological navigation.",
    description:
      "A content-led Nuxt experience designed for discoverability, fast SSR pages and structured historical navigation across eras, people and events.",
    highlights: ["Nuxt SSR", "SEO", "content architecture", "responsive UX"],
    technologies: ["Nuxt", "Vue 3", "SSR", "Content Modeling", "Tailwind"],
    links: [
      { label: "Visit project", href: "https://france-histories.example.com" },
    ],
    accent: "#dc2626",
    metrics: [
      "Chronological UX",
      "Semantic content model",
      "Search-friendly pages",
    ],
  },
  {
    slug: "le-cercle-vert",
    previewUrl: "https://rdv.lecerclevert.org/",
    title: "Le Cercle Vert",
    summary:
      "Appointment scheduling platform developed for an association managing home collection appointments.",
    description:
      "A Nuxt 4 scheduling platform using Nuxt UI, AWS Lambda, DynamoDB and CloudFront to manage responsive appointment flows for association operations.",
    highlights: [
      "scheduling system",
      "responsive UI",
      "production-ready platform",
    ],
    technologies: [
      "Nuxt 4",
      "Nuxt UI",
      "AWS Lambda",
      "AWS DynamoDB",
      "CloudFront",
    ],
    links: [{ label: "Case study", href: "/projects/le-cercle-vert" }],
    accent: "#16a34a",
    metrics: [
      "Serverless scheduling",
      "DynamoDB data model",
      "CloudFront delivery",
    ],
  },
];

export const expertise = [
  {
    category: "Frontend",
    items: [
      "Vue 3",
      "Nuxt",
      "Angular",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "RxJS",
      "jQuery",
      "Knockout.js",
    ],
  },
  {
    category: "Backend",
    items: [
      "NestJS",
      "Node.js",
      "Express.js",
      "PHP",
      "Laravel",
      "C#",
      "ASP.NET MVC",
      "PostgreSQL",
      "MSSQL",
      "REST APIs",
    ],
  },
  {
    category: "Testing",
    items: [
      "Playwright",
      "Cypress",
      "Selenium Grid",
      "Nightwatch.js",
      "E2E testing",
    ],
  },
  {
    category: "DevOps",
    items: ["AWS", "Azure", "Docker", "Cloudflare", "CI/CD", "GitHub Actions"],
  },
];

export const experiences: Experience[] = [
  {
    company: "Bonduelle",
    duration: "Nov 2024 - Present",
    role: "Fullstack Web Developer",
    contract: "Permanent contract",
    location: "Lille, Hauts-de-France, France · Hybrid",
    stack: ["Angular 16", "NestJS", "AWS", "MSSQL Server", "Playwright", "ORM"],
    impact: [
      "Developing the core crop and field management platform used by farmers and cooperatives.",
      "Designing and maintaining product features across Angular 16 frontends and NestJS backend services.",
      "Modeling complex agricultural business data with MSSQL Server and maintaining robust Playwright E2E coverage.",
      "Contributing to cloud infrastructure operations on AWS for production application delivery.",
    ],
  },
  {
    company: "Atelier256",
    duration: "Nov 2024 - Jan 2025",
    role: "Angular & NestJS Fullstack Consultant",
    contract: "Fixed-term contract",
    location: "Lille, Hauts-de-France, France · Hybrid",
    stack: [
      "Angular 16",
      "NestJS",
      "Tailwind CSS",
      "Agile Scrum",
      "Continuous delivery",
    ],
    impact: [
      "Worked as a fullstack consultant in a five-person Agile delivery team.",
      "Built and maintained Angular 16 and NestJS features in a continuous delivery cycle.",
      "Participated in Scrum ceremonies and contributed to delivery coordination before transitioning to a permanent role with the client.",
    ],
  },
  {
    company: "Davidson Consulting",
    duration: "Apr 2024 - Jun 2024",
    role: "Front-end Web Consultant",
    contract: "Permanent contract",
    location: "Lille, Hauts-de-France, France · Hybrid",
    stack: ["React.js", "Next.js", "Firebase"],
    impact: [
      "Developed and evolved internal product interfaces with React.js and Next.js.",
      "Contributed to front-end implementation quality on short delivery cycles.",
    ],
  },
  {
    company: "Cresh",
    duration: "Apr 2020 - Jan 2024",
    role: "Front-end Developer",
    contract: "Full-time",
    location: "Paris, Ile-de-France, France",
    stack: [
      "Vue.js",
      "React",
      "Gatsby",
      "Node.js",
      "Express.js",
      "PHP",
      "Cypress",
      "Vitest",
    ],
    impact: [
      "Built and maintained Vue.js web applications and React/Gatsby websites for production products.",
      "Developed Node.js and Express.js backend services for payment gateways and split-payment APIs.",
      "Created custom PHP plugins for PrestaShop and WooCommerce integrations.",
      "Implemented E2E and unit test coverage with Cypress, Mocha, Chai and Vitest in an Agile Scrum environment.",
    ],
  },
  {
    company: "Dispatcher-pro",
    duration: "Jun 2019 - Mar 2020",
    role: "Front-end Developer",
    contract: "Product role",
    location: "Paris area, France",
    stack: ["Vue.js 2", "Sass", "Docker", "Selenium Grid", "Nightwatch.js"],
    impact: [
      "Refactored the platform front end with Vue.js 2.",
      "Created automated test suites with Selenium Grid, Docker and Nightwatch.js.",
      "Worked in an Agile Scrum delivery process.",
    ],
  },
  {
    company: "SLYX Technology",
    duration: "Mar 2017 - Jun 2019",
    role: "Co-founder & Full-stack Web Developer",
    contract: "Co-founder",
    location: "Paris area, France",
    stack: [
      "Swift",
      "iOS",
      "Laravel",
      "Angular 2+",
      "Vue.js",
      "TypeScript",
      "Agile",
    ],
    impact: [
      "Built inventory management applications for iOS with Swift.",
      "Developed web applications with PHP Laravel, Angular 2+, Vue.js and TypeScript.",
      "Owned technical delivery inside a small Agile team, spanning product architecture, implementation and maintenance.",
    ],
  },
  {
    company: "Curioos",
    duration: "Jun 2015 - Sep 2016",
    role: "Full-stack Web Developer",
    contract: "Product role",
    location: "Paris area, France",
    stack: [
      "JavaScript",
      "jQuery",
      "Knockout.js",
      "C#",
      "ASP.NET MVC",
      "ImageMagick",
      "Microsoft Azure",
    ],
    impact: [
      "Maintained and evolved production applications with JavaScript, jQuery, Knockout.js, C# and ASP.NET MVC.",
      "Automated internal workflows with ImageMagick to reduce repetitive operational work.",
      "Developed cloud-backed solutions on Microsoft Azure.",
    ],
  },
  {
    company: "ONprint",
    duration: "Mar 2014 - May 2015",
    role: "Full-stack Web Developer",
    contract: "Product role",
    location: "Paris area, France",
    stack: [
      "JavaScript",
      "jQuery",
      "Knockout.js",
      "C#",
      "ASP.NET MVC",
      "Microsoft SQL Server",
      "Entity Framework",
    ],
    impact: [
      "Developed and maintained web applications for the Onprint platform.",
      "Built front-end interfaces with JavaScript, jQuery and Knockout.js.",
      "Implemented backend features with C# ASP.NET MVC, Microsoft SQL Server and Entity Framework.",
    ],
  },
  {
    company: "Upsideo",
    duration: "Sep 2013 - Feb 2014",
    role: "Software Developer Intern",
    contract: "Internship",
    location: "Paris area, France",
    stack: ["ASP.NET MVC3", "ASP.NET", "jQuery", "Internal tooling"],
    impact: [
      "Developed internal tools with ASP.NET MVC3 and jQuery.",
      "Maintained existing ASP.NET projects and contributed fixes across internal applications.",
    ],
  },
];

export const education: Education[] = [
  {
    school: "Epitech - L'ecole de l'excellence informatique",
    degree: "Master 2, Computer Programming",
    duration: "2012 - 2014",
    location: "Paris, France",
    details: [
      "Advanced software engineering curriculum with project-based learning.",
    ],
  },
  {
    school: "Beijing Jiaotong University",
    degree: "International academic exchange",
    duration: "2012 - 2013",
    location: "Beijing, China",
    details: [
      "International study period focused on computer science and engineering culture.",
    ],
  },
  {
    school: "Epitech - L'ecole de l'excellence informatique",
    degree: "Bachelor EPITECH",
    duration: "2009 - 2012",
    location: "Paris, France",
    details: [
      "Bachelor-level software engineering foundation through practical programming projects.",
    ],
  },
  {
    school: "Lycee Maurice Ravel",
    degree: "Baccalaureate",
    duration: "Sep 2007 - Jun 2009",
    location: "Paris, France",
    details: [
      "Secondary education completed before specializing in software engineering.",
    ],
  },
];

export const openSourceProjects: OpenSourceProject[] = [
  {
    name: "Cresh UI",
    category: "Vue component library",
    description:
      "Open-source Vue 3 UI library focused on reusable components, typed APIs, design-system consistency and npm package distribution.",
    stack: ["Vue 3", "TypeScript", "Vite", "Design System", "npm"],
    href: "https://github.com/rottenronin/cresh-ui",
  },
  {
    name: "my-portfolio",
    category: "Nuxt portfolio application",
    description:
      "This portfolio website, built as a production-grade Nuxt application with SSR, SEO metadata, Cloudflare Pages deployment and Cresh UI components.",
    stack: [
      "Nuxt 4",
      "Vue 3",
      "TypeScript",
      "Tailwind CSS",
      "Cloudflare Pages",
    ],
    href: "https://github.com/rottenronin/my-portfolio",
  },
];

export const articleTopics = [
  "Building Vue UI libraries",
  "Scalable front-end architecture",
  "Nuxt SSR optimization",
  "Reusable form validation systems",
  "Design systems",
];

export const findProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
