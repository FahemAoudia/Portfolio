export type Locale = "fr" | "en";

export type Translation = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  nav: {
    about: string;
    projects: string;
    skills: string;
    experience: string;
    contact: string;
    cta: string;
    cv: string;
    switchToEn: string;
    switchToFr: string;
  };
  hero: {
    jobTitle: string;
    tagline: string;
    badge: string;
    viewProjects: string;
    contact: string;
    statMri: string;
    statMriValue: string;
    statStack: string;
    statStackValue: string;
    statLang: string;
    statLangValue: string;
    statHighlight: string;
    statHighlightValue: string;
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    bullets: { strong: string; text: string }[];
  };
  projects: {
    label: string;
    title: string;
    intro: string;
    repo: string;
    live: string;
    items: {
      slug: string;
      title: string;
      subtitle: string;
      description: string;
      highlights: string[];
      accent: string;
      repo: string;
      live: string | null;
      stack: readonly string[];
      coverImage?: string;
      coverAlt?: string;
    }[];
  };
  skills: {
    label: string;
    title: string;
    intro: string;
  };
  skillGroups: {
    name: string;
    items: { name: string; level: number }[];
  }[];
  experience: {
    label: string;
    title: string;
    intro: string;
    items: {
      role: string;
      org: string;
      period: string;
      location: string;
      points: string[];
    }[];
  };
  contact: {
    label: string;
    title: string;
    intro: string;
    phone: string;
    email: { label: string; value: string; hint: string };
    github: { label: string; value: string; hint: string };
    linkedin: { label: string; value: string; hint: string };
  };
  footer: {
    crafted: string;
  };
  chatbot: {
    title: string;
    subtitle: string;
    close: string;
    placeholder: string;
    send: string;
    open: string;
    closeAssistant: string;
    quick: readonly string[];
    replies: {
      hello: string;
      projects: string;
      stack: string;
      contact: string;
      hire: string;
      default: string;
    };
  };
};

const projectsBase = [
  {
    slug: "makasouk",
    coverImage: "/makasouk-cover.png",
    accent: "from-cyan-500/20 to-violet-500/10",
    repo: "https://github.com/FahemAoudia/Platform-Makasouk",
    live: "https://web-production-e1b6c.up.railway.app",
    stack: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Socket.io",
      "Prisma",
      "Tailwind CSS",
    ] as const,
  },
  {
    slug: "brainscan",
    coverImage: "/brainscan-cover.png",
    accent: "from-violet-500/20 to-rose-500/10",
    repo: "https://github.com/FahemAoudia/BrainScan-AI-Medical-Diagnostic-Platform",
    live: "https://temur-frontend-production.up.railway.app",
    stack: ["Python", "TensorFlow", "FastAPI", "React", "Docker", "MySQL", "MongoDB"] as const,
  },
  {
    slug: "microservice",
    accent: "from-emerald-500/15 to-cyan-500/15",
    repo: "https://github.com/FahemAoudia/Microservice",
    live: null as string | null,
    stack: ["Python", "FastAPI", "React", "Docker", "REST"] as const,
  },
] as const;

export const translations: Record<Locale, Translation> = {
  fr: {
    meta: {
      title: "Fahem Aoudia | Développeur Full Stack Montréal · Développeur IA Canada",
      description:
        "Fahem Aoudia — Développeur Full Stack à Montréal et développeur IA au Canada. React, Next.js, Python, CNN/ML, Docker, AWS. Applications web évolutives et systèmes intelligents.",
      ogTitle: "Fahem Aoudia | Développeur Full Stack & IA — Montréal",
      ogDescription:
        "Ingénierie full-stack avec IA : React, Next.js, Node.js, Python, TensorFlow, Docker et cloud. Basé à Montréal, Canada.",
      twitterTitle: "Fahem Aoudia | Développeur Full Stack & IA",
      twitterDescription:
        "Développeur Full Stack Montréal · Développeur IA Canada. React, Next.js, Python, ML, AWS.",
    },
    nav: {
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      experience: "Parcours",
      contact: "Contact",
      cta: "Discutons",
      cv: "CV",
      switchToEn: "English",
      switchToFr: "Français",
    },
    hero: {
      jobTitle: "Développeur Full Stack & IA",
      tagline:
        "Je conçois des applications web de production où React moderne rencontre une IA pragmatique — de diagnostics par CNN à des API évolutives dans le cloud.",
      badge: "Montréal · Ouvert aux opportunités",
      viewProjects: "Voir les projets",
      contact: "Contact",
      statMri: "Focus",
      statMriValue:
        "Systèmes temps réel · IA · Architectures cloud",
      statStack: "Stack",
      statStackValue: "React · Node.js · TypeScript",
      statLang: "Langues",
      statLangValue: "FR · EN · AR",
      statHighlight: "Highlight",
      statHighlightValue: "CNN IRM — 99,97 % de précision",
    },
    about: {
      label: "À propos",
      title: "Du full-stack avec une touche IA",
      p1:
        "Je suis développeur Full Stack & IA, centré sur des produits web fiables : interfaces React soignées, API pragmatiques et modèles ML qui méritent la production — CNN pour l’imagerie, temps réel sécurisé et déploiement cloud natif.",
      p2:
        "Du mentorat à Teccart à une plateforme de fin d’études avec Docker, CI/CD et déploiement sur des outils type AWS, je veille à la vélocité et à la maintenabilité.",
      bullets: [
        {
          strong: "Vision produit :",
          text:
            "livrer des fonctionnalités vérifiables par les recruteurs — métriques, architecture et performance mesurable des modèles.",
        },
        {
          strong: "Intégration IA :",
          text:
            "pipelines CNN, chatbots et API d’inférence intégrés aux flux applicatifs réels — pas seulement des notebooks.",
        },
        {
          strong: "DevOps :",
          text: "Docker, GitHub Actions et déploiement cloud pragmatique.",
        },
      ],
    },
    projects: {
      label: "Sélection",
      title: "Projets sur GitHub",
      intro:
        "Des réalisations orientées impact — commerce patrimoine, stack IA médicale et services d’inférence distribués.",
      repo: "GitHub",
      live: "Demo",
      items: [
        {
          ...projectsBase[0],
          coverAlt:
            "Aperçu Makasouk — plateforme e‑commerce sur-mesure (FR/AR)",
          title: "Makasouk",
          subtitle: "Plateforme de couture sur-mesure",
          description:
            "Plateforme e-commerce sur-mesure en temps réel, intégrant mesures guidées, suivi des commandes et une architecture full-stack conçue pour des parcours multi-rôles.",
          highlights: [
            "Guided measurement system with dynamic multilingual support (FR/AR)",
            "Real-time order lifecycle using WebSockets (Socket.io)",
            "Role-based architecture (client, tailor, admin) with dedicated dashboards",
            "Modern UI with Next.js, Tailwind, dark mode, and premium brand identity",
            "Secure REST API (JWT) with Prisma ORM",
          ],
        },
        {
          ...projectsBase[1],
          coverAlt:
            "Aperçu BrainScan AI — plateforme d’analyse IRM assistée par intelligence artificielle",
          title: "BrainScan AI",
          subtitle: "Plateforme de diagnostic médical",
          description:
            "Plateforme médicale pilotée par l’IA pour l’analyse d’IRM cérébrales via des modèles CNN, avec une architecture full-stack adaptée à des usages cliniques réels.",
          highlights: [
            "Classification IRM par CNN (4 classes) exposée via FastAPI (API REST)",
            "Application full-stack React (SCSS, Framer Motion) avec contrôle d’accès par rôles (admin, médecin, patient)",
            "Architecture hybride : MySQL (utilisateurs, rendez-vous) + MongoDB (scans, rapports, chat)",
            "Services dockerisés avec séparation nette frontend / backend",
            "Génération automatique de rapports médicaux (PDF) et suivi des diagnostics",
          ],
        },
        {
          ...projectsBase[2],
          title: "Microservices santé des plantes",
          subtitle: "IA + API distribuées",
          description:
            "Architecture microservices pour la détection de maladies — services FastAPI, frontend React et inférence ML prêts pour un déploiement évolutif.",
          highlights: [
            "Découpage services pour inférence et frontières API",
            "Parcours full-stack de l’image à la sortie modèle",
            "Structure prête conteneurs et cloud",
          ],
        },
      ],
    },
    skills: {
      label: "Capacités",
      title: "Compétences alignées sur la livraison",
      intro:
        "Cartographie proche des fiches de poste full-stack / IA : du front typé aux APIs, aux données, au déploiement.",
    },
    skillGroups: [
      {
        name: "Front-end",
        items: [
          { name: "React / Next.js", level: 95 },
          { name: "TypeScript", level: 93 },
          { name: "Tailwind CSS", level: 92 },
        ],
      },
      {
        name: "Back-end & APIs",
        items: [
          { name: "Node.js / Express", level: 90 },
          { name: "FastAPI (Python)", level: 90 },
          { name: "REST APIs (secure, scalable)", level: 88 },
        ],
      },
      {
        name: "Data & persistence",
        items: [
          { name: "SQL (MySQL / PostgreSQL)", level: 90 },
          { name: "MongoDB", level: 86 },
          { name: "Prisma (ORM)", level: 88 },
        ],
      },
      {
        name: "AI / Machine Learning",
        items: [
          { name: "TensorFlow (CNNs)", level: 90 },
          { name: "Scikit-learn", level: 84 },
          { name: "OpenCV", level: 78 },
        ],
      },
      {
        name: "DevOps & cloud",
        items: [
          { name: "Docker (containerization)", level: 88 },
          { name: "GitHub Actions (CI/CD pipelines)", level: 86 },
          { name: "AWS / Azure", level: 80 },
        ],
      },
      {
        name: "Systems & security",
        items: [
          { name: "Real-time Systems (WebSockets / Socket.io)", level: 88 },
          { name: "API Security (JWT, RBAC)", level: 87 },
          { name: "System Design", level: 82 },
        ],
      },
    ],
    experience: {
      label: "Parcours",
      title: "Chronologie",
      intro:
        "Leadership, stages et livraison orientée production — concis et lisible.",
      items: [
        {
          role: "Responsable du club informatique",
          org: "Institut Teccart",
          period: "janv. 2026 — aujourd’hui",
          location: "Montréal",
          points: [
            "Encadrement d’étudiants sur des projets web, mobile et IA avec accompagnement pratique",
            "Animation d’ateliers techniques (React, APIs REST, bonnes pratiques) améliorant la qualité des projets étudiants",
          ],
        },
        {
          role: "Développeur Full Stack & IA — stage de fin d’études",
          org: "Institut Teccart",
          period: "janv. 2025 — avr. 2025",
          location: "Montréal",
          points: [
            "Développement d’une application full-stack avec modèle CNN pour l’analyse d’IRM (4 classes) atteignant 99,97 % de précision",
            "Conception d’APIs REST scalables (Node.js, FastAPI) et interface React",
            "Intégration d’un chatbot IA avec messagerie temps réel sécurisée et notifications",
            "Mise en place d’une architecture conteneurisée avec CI/CD (GitHub Actions) et déploiement cloud",
          ],
        },
        {
          role: "Formateur en informatique",
          org: "Établissement privé",
          period: "janv. 2022 — nov. 2022",
          location: "Algérie",
          points: [
            "Cours sur bureautique, bases de données et fondamentaux informatiques pour un public varié",
          ],
        },
        {
          role: "Stagiaire développeur",
          org: "Hôtel Kerdada",
          period: "févr. 2021 — juill. 2021",
          location: "Algérie",
          points: [
            "Système de gestion (achats, fournisseurs, inventaire)",
            "Schémas SQL Server optimisés et requêtes plus performantes",
          ],
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Construisons quelque chose d’ambitieux",
      intro:
        "Ouvert aux rôles full-stack et orientés IA à Montréal et en télétravail avec des équipes au Canada. Communication claire en français et en anglais.",
      phone: "Téléphone",
      email: {
        label: "Courriel",
        value: "aoudiafahem1@gmail.com",
        hint: "Idéal pour les opportunités",
      },
      github: {
        label: "GitHub",
        value: "github.com/FahemAoudia",
        hint: "Code et dépôts",
      },
      linkedin: {
        label: "LinkedIn",
        value: "Profil professionnel",
        hint: "Canada / télétravail",
      },
    },
    footer: {
      crafted: "Réalisé avec Next.js",
    },
    chatbot: {
      title: "Assistant portfolio",
      subtitle: "Démo par règles · réponses instantanées",
      close: "Fermer",
      placeholder: "Posez une question sur la stack, les projets…",
      send: "Envoyer",
      open: "Ouvrir l’assistant",
      closeAssistant: "Fermer l’assistant",
      quick: ["projets", "stack", "contact", "embauche"] as const,
      replies: {
        hello:
          "Bonjour — je suis l’assistant du portfolio de Fahem. Demandez la stack, les projets ou comment le contacter.",
        projects:
          "Projets mis en avant : Makasouk (e‑commerce sur-mesure, temps réel), BrainScan AI (IRM / CNN), microservices FastAPI + React pour la santé des plantes.",
        stack:
          "Stack principale : React, Next.js, Node.js, Python, FastAPI, TensorFlow, Docker, AWS/Azure — avec des API propres et un impact mesurable.",
        contact:
          "Courriel : aoudiafahem1@gmail.com — liens GitHub et LinkedIn plus bas sur la page.",
        hire:
          "Fahem est basé à Montréal et livre des systèmes full-stack avec intégration ML — bon profil pour des équipes produit qui veulent vitesse et rigueur.",
        default:
          "Essayez : « projets », « stack », « contact » ou « embauche ». Je vous oriente vers la bonne section.",
      },
    },
  },
  en: {
    meta: {
      title: "Fahem Aoudia | Full Stack Developer Montreal · AI Developer Canada",
      description:
        "Fahem Aoudia — Full Stack Developer in Montreal and AI Developer in Canada. React, Next.js, Python, CNN/ML, Docker, AWS. Scalable web apps and intelligent systems.",
      ogTitle: "Fahem Aoudia | Full Stack & AI Developer — Montreal",
      ogDescription:
        "Premium full-stack engineering with AI: React, Next.js, Node.js, Python, TensorFlow, Docker, and cloud. Based in Montreal, Canada.",
      twitterTitle: "Fahem Aoudia | Full Stack & AI Developer",
      twitterDescription:
        "Full Stack Developer Montreal · AI Developer Canada. React, Next.js, Python, ML, AWS.",
    },
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      experience: "Experience",
      contact: "Contact",
      cta: "Let’s talk",
      cv: "CV",
      switchToEn: "English",
      switchToFr: "Français",
    },
    hero: {
      jobTitle: "Full Stack & AI Developer",
      tagline:
        "I build production web apps where modern React meets pragmatic AI — from CNN-powered diagnostics to scalable APIs in the cloud.",
      badge: "Montreal · Open to opportunities",
      viewProjects: "View projects",
      contact: "Contact",
      statMri: "Focus",
      statMriValue: "Real-time systems · AI · Cloud-ready architectures",
      statStack: "Stack",
      statStackValue: "React · Node.js · TypeScript",
      statLang: "Languages",
      statLangValue: "FR · EN · AR",
      statHighlight: "Highlight",
      statHighlightValue: "MRI CNN — 99.97% accuracy",
    },
    about: {
      label: "About",
      title: "Full-stack craft with an AI edge",
      p1:
        "I’m a Full Stack & AI developer focused on shipping reliable web products: crisp React frontends, pragmatic APIs, and ML models that earn their place in production — CNNs for imaging, secure real-time features, and cloud-native delivery.",
      p2:
        "From mentoring peers at Teccart to delivering a capstone platform with Docker, CI/CD, and deployment on AWS-class tooling, I care about velocity and maintainability.",
      bullets: [
        {
          strong: "Product mindset:",
          text:
            "ship features recruiters can verify — metrics, architecture, and measurable model performance.",
        },
        {
          strong: "AI integration:",
          text:
            "CNN pipelines, chatbots, and inference APIs wired into real application flows — not notebook-only demos.",
        },
        {
          strong: "DevOps fluency:",
          text: "Docker, GitHub Actions, and pragmatic cloud deployment patterns.",
        },
      ],
    },
    projects: {
      label: "Selected work",
      title: "GitHub-backed projects",
      intro:
        "Impact-forward builds — heritage commerce, medical AI research stacks, and distributed inference services.",
      repo: "GitHub",
      live: "Demo",
      items: [
        {
          ...projectsBase[0],
          coverAlt:
            "Makasouk — custom tailoring e‑commerce platform preview (FR/AR)",
          title: "Makasouk",
          subtitle: "Custom Tailoring Platform",
          description:
            "E-commerce & real-time tailoring system. Full-stack platform for custom-made fashion, combining guided measurements, real-time order tracking, and role-based workflows for clients, tailors, and admins.",
          highlights: [
            "Guided measurement system with dynamic multilingual support (FR/AR)",
            "Real-time order lifecycle using WebSockets (Socket.io)",
            "Role-based architecture (client, tailor, admin) with dedicated dashboards",
            "Modern UI with Next.js, Tailwind, dark mode, and premium brand identity",
            "Secure REST API (JWT) with Prisma ORM",
          ],
        },
        {
          ...projectsBase[1],
          coverAlt:
            "BrainScan AI website preview — AI-assisted MRI analysis for brain tumor detection",
          title: "BrainScan AI",
          subtitle: "Medical diagnostic platform",
          description:
            "AI-powered medical platform for brain MRI analysis using CNN models, combined with a full-stack architecture for real-world clinical workflows.",
          highlights: [
            "CNN-based MRI classification (4 classes) exposed via FastAPI (REST API)",
            "Full-stack app with React (SCSS, Framer Motion) and role-based access (admin, doctor, patient)",
            "Hybrid data architecture: MySQL (users, appointments) + MongoDB (scans, reports, chat)",
            "Dockerized services with clean frontend/backend separation",
            "Automated medical report generation (PDF) and diagnostic tracking",
          ],
        },
        {
          ...projectsBase[2],
          title: "Plant Health Microservices",
          subtitle: "AI + distributed APIs",
          description:
            "Microservice architecture for plant disease detection — FastAPI services, React frontend, and ML inference wired for scalable deployment.",
          highlights: [
            "Service-oriented design for inference and API boundaries",
            "Full-stack flow from image input to model output",
            "DevOps-ready structure for containers and cloud rollout",
          ],
        },
      ],
    },
    skills: {
      label: "Capabilities",
      title: "Skills mapped to shipping software",
      intro:
        "Aligned with full-stack & AI job specs: typed frontends, APIs, data layers, and how systems go to production.",
    },
    skillGroups: [
      {
        name: "Front-end",
        items: [
          { name: "React / Next.js", level: 95 },
          { name: "TypeScript", level: 93 },
          { name: "Tailwind CSS", level: 92 },
        ],
      },
      {
        name: "Back-end & APIs",
        items: [
          { name: "Node.js / Express", level: 90 },
          { name: "FastAPI (Python)", level: 90 },
          { name: "REST APIs (secure, scalable)", level: 88 },
        ],
      },
      {
        name: "Data & persistence",
        items: [
          { name: "SQL (MySQL / PostgreSQL)", level: 90 },
          { name: "MongoDB", level: 86 },
          { name: "Prisma (ORM)", level: 88 },
        ],
      },
      {
        name: "AI / Machine Learning",
        items: [
          { name: "TensorFlow (CNNs)", level: 90 },
          { name: "Scikit-learn", level: 84 },
          { name: "OpenCV", level: 78 },
        ],
      },
      {
        name: "DevOps & cloud",
        items: [
          { name: "Docker (containerization)", level: 88 },
          { name: "GitHub Actions (CI/CD pipelines)", level: 86 },
          { name: "AWS / Azure", level: 80 },
        ],
      },
      {
        name: "Systems & security",
        items: [
          { name: "Real-time Systems (WebSockets / Socket.io)", level: 88 },
          { name: "API Security (JWT, RBAC)", level: 87 },
          { name: "System Design", level: 82 },
        ],
      },
    ],
    experience: {
      label: "Experience",
      title: "Timeline",
      intro: "Leadership, internships, and production-grade delivery — concise and scannable.",
      items: [
        {
          role: "Computer Club Lead",
          org: "Institut Teccart",
          period: "Jan 2026 — Present",
          location: "Montreal",
          points: [
            "Mentoring students on web, mobile, and AI projects with hands-on support",
            "Running technical workshops (React, REST APIs, engineering best practices)",
          ],
        },
        {
          role: "Full Stack & AI Developer — Capstone Internship",
          org: "Institut Teccart",
          period: "Jan 2025 — Apr 2025",
          location: "Montreal",
          points: [
            "Built a web app with a CNN for MRI analysis (4 classes) reaching 99.97% accuracy",
            "Shipped REST APIs with Node.js & FastAPI and a React frontend",
            "Integrated an AI chatbot with secure real-time messaging, scheduling, and notifications",
            "Dockerized services with GitHub Actions CI/CD and cloud deployment",
          ],
        },
        {
          role: "IT Instructor",
          org: "Private School",
          period: "Jan 2022 — Nov 2022",
          location: "Algeria",
          points: ["Taught office tools, databases, and computing fundamentals to diverse learners"],
        },
        {
          role: "Developer Intern",
          org: "Hotel Kerdada",
          period: "Feb 2021 — Jul 2021",
          location: "Algeria",
          points: [
            "Developed a management system (purchasing, suppliers, inventory)",
            "Optimized SQL Server schemas and improved query performance",
          ],
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let’s build something ambitious",
      intro:
        "Open to full-stack and AI-forward roles in Montreal and remote-friendly teams across Canada. Clear communication in French and English.",
      phone: "Phone",
      email: {
        label: "Email",
        value: "aoudiafahem1@gmail.com",
        hint: "Best for opportunities",
      },
      github: {
        label: "GitHub",
        value: "github.com/FahemAoudia",
        hint: "Code & repositories",
      },
      linkedin: {
        label: "LinkedIn",
        value: "Professional profile",
        hint: "Connect in Canada / remote",
      },
    },
    footer: {
      crafted: "Crafted with Next.js",
    },
    chatbot: {
      title: "Portfolio Copilot",
      subtitle: "Rule-based demo · instant answers",
      close: "Close",
      placeholder: "Ask about stack, projects…",
      send: "Send",
      open: "Open assistant",
      closeAssistant: "Close assistant",
      quick: ["projects", "stack", "contact", "hire"] as const,
      replies: {
        hello:
          "Hi — I’m Fahem’s portfolio assistant. Ask about stack, projects, or how to reach him.",
        projects:
          "Featured work includes Makasouk (custom tailoring, real-time orders), BrainScan AI (MRI/CNN stack), and a FastAPI + React microservice platform for plant health.",
        stack:
          "Core stack: React, Next.js, Node.js, Python, FastAPI, TensorFlow, Docker, AWS/Azure — with a focus on clean APIs and measurable impact.",
        contact:
          "Email aoudiafahem1@gmail.com or use the links below for GitHub and LinkedIn.",
        hire:
          "Fahem is based in Montreal and ships full-stack systems with ML integration — great fit for product teams needing velocity + rigor.",
        default:
          'Try: "projects", "stack", "contact", or "hire". I route you to the right section of this site.',
      },
    },
  },
};
