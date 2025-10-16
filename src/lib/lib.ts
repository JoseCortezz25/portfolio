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
    image: "/modern-ecommerce-dashboard.png",
    images: ["/ecommerce-product-page.png", "/ecommerce-checkout-flow.png"],
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
    image: "/task-management-kanban.png",
    images: ["/task-board-interface.jpg", "/task-details-modal.jpg"],
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
    image: "/ai-writing-assistant-interface.png",
    images: ["/ai-content-editor.jpg", "/content-templates-library.png"],
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
    image: "/weather-dashboard-interface.png",
    images: ["/weather-map-view.jpg", "/forecast-charts.jpg"],
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
    title: "Senior Frontend Engineer",
    date: "2023 — Present",
    company: "TechCorp Inc.",
    description: "Leading the development of accessible UI components and design systems. Collaborating with cross-functional teams to implement best practices in web accessibility and performance optimization.",
    techStack: ["React", "TypeScript", "Next.js", "Storybook"],
  },
  {
    title: "Junior Developer",
    date: "2020 — 2021",
    company: "Digital Agency Co.",
    description: "Developed responsive websites and web applications for various clients. Collaborated with designers to translate mockups into functional interfaces.",
    techStack: ["JavaScript", "HTML/CSS", "WordPress", "jQuery"],
  },
  {
    title: "Full-Stack Developer",
    date: "2021 — 2023",
    company: "StartupXYZ",
    description: "Built and maintained multiple client-facing web applications. Implemented RESTful APIs and database architectures. Reduced page load times by 40% through optimization techniques.",
    techStack: ["Node.js", "PostgreSQL", "React", "AWS"],
  },
]