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
    statStack: string;
    statStackValue: string;
    statLang: string;
    statLangValue: string;
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
    accent: "from-cyan-500/20 to-violet-500/10",
    repo: "https://github.com/FahemAoudia/Platform-Makasouk",
    live: null as string | null,
    stack: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Node.js"] as const,
  },
  {
    slug: "brainscan",
    accent: "from-violet-500/20 to-rose-500/10",
    repo: "https://github.com/FahemAoudia/BrainScan-AI-Medical-Diagnostic-Platform",
    live: null as string | null,
    stack: ["Python", "TensorFlow", "Jupyter", "FastAPI", "React"] as const,
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
      statMri: "IRM CNN (stage)",
      statStack: "Stack",
      statStackValue: "React · IA · Cloud",
      statLang: "Langues",
      statLangValue: "FR · EN · AR",
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
      repo: "Dépôt",
      live: "Démo",
      items: [
        {
          ...projectsBase[0],
          title: "Makasouk",
          subtitle: "Plateforme e‑commerce patrimoine",
          description:
            "Une vitrine e‑commerce inspirée du vintage pour la haute couture algérienne : atelier numérique muséal avec parcours d’achat fluide — Karakou, Kabyle et Constantine présentés avec un soin de présentation premium.",
          highlights: [
            "Storytelling produit + parcours commerce adapté à la mode premium",
            "Code TypeScript avec UI moderne",
            "Clarté, confiance et identité de marque marquée",
          ],
        },
        {
          ...projectsBase[1],
          title: "BrainScan AI",
          subtitle: "Plateforme de diagnostic médical",
          description:
            "Exploration bout en bout de l’analyse IRM assistée par IA — alignée sur un stage avec classification CNN (4 classes) et précision modèle exceptionnelle.",
          highlights: [
            "Pipeline CNN pour les flux d’imagerie IRM",
            "Notebooks de recherche + structure orientée application",
            "Pont entre expérimentation ML et objectifs UX diagnostics",
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
        "Regroupées comme les équipes recrutement y pensent : interface, services, ML et plateforme.",
    },
    skillGroups: [
      {
        name: "Front-end",
        items: [
          { name: "React / Next.js", level: 95 },
          { name: "TypeScript / JavaScript", level: 92 },
          { name: "HTML / CSS / Tailwind", level: 90 },
        ],
      },
      {
        name: "Back-end & API",
        items: [
          { name: "Node.js", level: 88 },
          { name: "FastAPI / Python", level: 90 },
          { name: "REST / GraphQL", level: 85 },
        ],
      },
      {
        name: "IA / ML",
        items: [
          { name: "TensorFlow / CNN", level: 88 },
          { name: "Scikit-learn / pipelines", level: 85 },
          { name: "OpenCV", level: 78 },
        ],
      },
      {
        name: "DevOps & cloud",
        items: [
          { name: "Docker / CI/CD", level: 85 },
          { name: "AWS / Azure", level: 80 },
          { name: "Linux", level: 82 },
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
            "Accompagnement d’étudiants sur le web, le mobile et l’IA avec un soutien pratique",
            "Ateliers techniques (React, API REST, bonnes pratiques d’ingénierie)",
          ],
        },
        {
          role: "Développeur Full Stack & IA — stage de fin d’études",
          org: "Institut Teccart",
          period: "janv. 2025 — avr. 2025",
          location: "Montréal",
          points: [
            "Application web avec CNN pour l’analyse IRM (4 classes), précision 99,97 %",
            "API REST avec Node.js & FastAPI et interface React",
            "Chatbot IA avec messagerie temps réel sécurisée, planification et notifications",
            "Services conteneurisés avec CI/CD GitHub Actions et déploiement cloud",
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
          "Projets mis en avant : Makasouk (commerce patrimoine), BrainScan AI (IRM / CNN), plateforme microservices FastAPI + React pour la santé des plantes.",
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
      statMri: "MRI CNN (internship)",
      statStack: "Stack",
      statStackValue: "React · AI · Cloud",
      statLang: "Languages",
      statLangValue: "FR · EN · AR",
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
      repo: "Repo",
      live: "Live demo",
      items: [
        {
          ...projectsBase[0],
          title: "Makasouk",
          subtitle: "Heritage e‑commerce platform",
          description:
            "A vintage-inspired Algerian couture platform: museum-style digital atelier with seamless commerce — Karakou, Kabyle, and Constantine dresses presented with craft-level polish.",
          highlights: [
            "Product storytelling + commerce flow tuned for premium fashion",
            "TypeScript-first codebase with modern UI patterns",
            "Designed for clarity, trust, and a distinctive brand feel",
          ],
        },
        {
          ...projectsBase[1],
          title: "BrainScan AI",
          subtitle: "Medical diagnostic platform",
          description:
            "End-to-end exploration of AI-assisted MRI analysis — aligned with internship work on CNN classification (4 classes) with exceptional model accuracy.",
          highlights: [
            "CNN pipeline for MRI imaging workflows",
            "Research-grade notebooks + application-oriented structure",
            "Bridges ML experimentation with real-world diagnostic UX goals",
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
      intro: "Grouped the way hiring teams think: interface, services, ML, and platform.",
    },
    skillGroups: [
      {
        name: "Frontend",
        items: [
          { name: "React / Next.js", level: 95 },
          { name: "TypeScript / JavaScript", level: 92 },
          { name: "HTML / CSS / Tailwind", level: 90 },
        ],
      },
      {
        name: "Backend & APIs",
        items: [
          { name: "Node.js", level: 88 },
          { name: "FastAPI / Python", level: 90 },
          { name: "REST / GraphQL", level: 85 },
        ],
      },
      {
        name: "AI / ML",
        items: [
          { name: "TensorFlow / CNNs", level: 88 },
          { name: "Scikit-learn / Pipelines", level: 85 },
          { name: "OpenCV", level: 78 },
        ],
      },
      {
        name: "DevOps & Cloud",
        items: [
          { name: "Docker / CI/CD", level: 85 },
          { name: "AWS / Azure", level: 80 },
          { name: "Linux", level: 82 },
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
          "Featured work includes Makasouk (heritage commerce), BrainScan AI (MRI/CNN research stack), and a FastAPI + React microservice platform for plant health.",
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
