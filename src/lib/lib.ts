export interface Project {
  slug: string
  title: string
  description: string
  longDescription: string
  image: string
  images: string[]
  techStack: string[]
  status: "Active" | "Completed"
  links: {
    github?: string
    live?: string
    demo?: string
  }
  year: string
}


export interface Experience {
  title: string
  date: string
  company: string
  description: string
  techStack: string[]
}

export const projects: Project[] = [
  {
    slug: "quizzy-ai-quiz-generator",
    title: "Quizzy: AI Quiz Generator",
    description:
      "Genera cuestionarios de forma rápida y sencilla. Elige el nivel de dificultad y el tema del cuestionario.",
    longDescription:
      "Quizzy es una aplicación web que utiliza inteligencia artificial para generar cuestionarios personalizados de manera automática. Los usuarios pueden seleccionar el nivel de dificultad y el tema que desean estudiar, y la IA creará preguntas relevantes y desafiantes. Perfecta para estudiantes, profesores y cualquier persona que busque una forma interactiva de aprender y evaluar conocimientos.",
    image: "https://raw.githubusercontent.com/JoseCortezz25/quiz-generator/refs/heads/feat/internationalization/public/screenshot-quizzy.png",
    images: [
      "https://raw.githubusercontent.com/JoseCortezz25/quiz-generator/refs/heads/feat/internationalization/public/screenshot-quizzy-mobile-1.png",
      "https://raw.githubusercontent.com/JoseCortezz25/quiz-generator/refs/heads/feat/internationalization/public/screenshot-quizzy-mobile-2.png",
      "https://raw.githubusercontent.com/JoseCortezz25/quiz-generator/refs/heads/feat/internationalization/public/screenshot-quizzy-mobile-3.png",
      "https://raw.githubusercontent.com/JoseCortezz25/quiz-generator/refs/heads/feat/internationalization/public/screenshot-quizzy-mobile-4.png",
      "https://raw.githubusercontent.com/JoseCortezz25/quiz-generator/refs/heads/feat/internationalization/public/screenshot-quizzy-mobile-5.png",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Google Gemini Pro", "Tailwind CSS", "Shadcn UI"],
    status: "Active",
    links: {
      github: "https://github.com/JoseCortezz25/quiz-generator",
      live: "https://quiz-generator-seven.vercel.app/en",
    },
    year: "2024",
  },
  {
    slug: "json-ai",
    title: "JSON AI",
    description:
      "Crea mocks con ayuda de la IA. Elige el nivel de creatividad y LLM de tu agrado.",
    longDescription:
      "JSON AI es una herramienta innovadora que permite generar datos mock de forma inteligente utilizando modelos de lenguaje grandes (LLM). Los desarrolladores pueden especificar la estructura de datos que necesitan y ajustar el nivel de creatividad, obteniendo instantáneamente datos de prueba realistas y variados. Ideal para testing, desarrollo frontend y prototipado rápido.",
    image: "https://raw.githubusercontent.com/JoseCortezz25/JSON-AI/main/screenshot.jpg",
    images: [],
    techStack: ["Next.js", "React", "TypeScript", "Langchain", "Google Gemini Pro", "Tailwind CSS"],
    status: "Active",
    links: {
      github: "https://github.com/JoseCortezz25/JSON-AI",
      live: "https://json-ai-app.vercel.app/",
    },
    year: "2024",
  },
  {
    slug: "idea-notion-clone",
    title: "Idea: Notion Clone",
    description:
      "Clon de Notion, una aplicación de notas y gestión de proyectos.",
    longDescription:
      "Idea es un clon funcional de Notion que ofrece una experiencia completa de gestión de notas y proyectos. Incluye editor de texto enriquecido, organización jerárquica de páginas, bases de datos personalizables y colaboración en tiempo real. Desarrollado con las tecnologías más modernas para ofrecer una interfaz fluida y responsive.",
    image: "https://raw.githubusercontent.com/JoseCortezz25/notion-clone/main/screenshot2.png",
    images: [],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    status: "Active",
    links: {
      github: "https://github.com/JoseCortezz25/notion-clone",
      live: "https://idea-note-taking-app.vercel.app/",
    },
    year: "2024",
  },
  {
    slug: "regex-wizard",
    title: "RegEx Wizard",
    description: "Generador de expresiones regulares a partir de solicitudes en lenguaje natural. Usa Google Gemini Pro API.",
    longDescription:
      "RegEx Wizard simplifica la creación de expresiones regulares complejas. Los usuarios pueden describir en lenguaje natural lo que necesitan validar o extraer, y la IA genera automáticamente la expresión regular correspondiente. Incluye un editor Monaco integrado para probar y refinar las expresiones generadas, con explicaciones detalladas de cada componente.",
    image: "https://raw.githubusercontent.com/JoseCortezz25/regex-wizard/main/public/screenshot.png",
    images: [],
    techStack: ["Next.js", "React", "TypeScript", "Google Gemini Pro", "Monaco Editor", "Tailwind CSS"],
    status: "Active",
    links: {
      github: "https://github.com/JoseCortezz25/regex-wizard",
      live: "https://regex-wizard.vercel.app/",
    },
    year: "2024",
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}


export const experience: Experience[] = [
  {
    title: "Frontend Lead",
    date: "Sept 2025 — Presente",
    company: "Flare BBDO Bogotá",
    description: "Liderando iniciativas de desarrollo frontend en un entorno de trabajo híbrido. Impulsando decisiones técnicas y mejoras arquitectónicas para aplicaciones web. Mentoreando el equipo de desarrollo y estableciendo mejores prácticas para el desarrollo frontend moderno.",
    techStack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Git"],
  },
  {
    title: "Frontend Developer",
    date: "Jul 2023 — Oct 2025",
    company: "Flare BBDO Bogotá",
    description: "Desarrollé y mantuve interfaces web interactivas para varios proyectos de clientes. Implementé diseños responsive y componentes interactivos usando frameworks frontend modernos. Colaboré con equipos multifuncionales para entregar experiencias digitales de alta calidad.",
    techStack: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Figma"],
  },
  {
    title: "Frontend Developer",
    date: "Mar 2021 — Mar 2023",
    company: "Trinity FS",
    description: "Lideré la creación y desarrollo de interfaces interactivas y animaciones para múltiples plataformas usando React. Desarrollé componentes de UI a partir de diseños de Figma con principios de diseño responsive usando React.js y SASS. Implementé Context Hook y React Router para manejo de estados y enrutamiento. Realicé peticiones API para integrar con backend CMS Strapi. Participé en el diseño de base de datos y brindé soporte y mantenimiento continuo.",
    techStack: ["React", "SASS", "JavaScript", "Strapi", "Figma", "React Router"],
  },
  {
    title: "Junior Frontend Developer",
    date: "Dic 2020 — Feb 2021",
    company: "The Makers",
    description: "Desarrollé interfaces de plataforma basadas en mockups de Figma usando el framework Angular. Implementé diseños mobile-first y responsive con HTML/CSS. Creé componentes interactivos con Angular basados en datos de API. Conecté aplicaciones web con servicios mediante implementación de API. Implementé pipes para filtros y servicios para procesamiento de datos del backend Java Spring Boot.",
    techStack: ["Angular", "HTML/CSS", "TypeScript", "Java Spring Boot", "Figma"],
  },
]