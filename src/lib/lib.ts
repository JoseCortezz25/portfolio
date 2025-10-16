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
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    longDescription:
      "Built a comprehensive e-commerce solution featuring real-time inventory tracking, secure payment processing with Stripe, and an intuitive admin dashboard for managing products, orders, and customers. The platform handles thousands of transactions daily with 99.9% uptime.",
    image: "/modern-ecommerce-dashboard.png",
    images: ["/ecommerce-product-page.png", "/ecommerce-checkout-flow.png", "/ecommerce-admin-dashboard.png"],
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    status: "Active",
    links: {
      github: "https://github.com/yourusername/ecommerce",
      live: "https://ecommerce-demo.vercel.app",
    },
    year: "2024",
  },
  {
    slug: "task-management-app",
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates, team workspaces, and advanced filtering.",
    longDescription:
      "Developed a collaborative task management tool that enables teams to organize projects, assign tasks, and track progress in real-time. Features include drag-and-drop kanban boards, advanced filtering, deadline reminders, and team analytics.",
    image: "/task-management-kanban.png",
    images: ["/task-board-interface.jpg", "/task-details-modal.jpg", "/team-analytics-dashboard.jpg"],
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Redux"],
    status: "Completed",
    links: {
      github: "https://github.com/yourusername/task-app",
      demo: "https://task-app-demo.vercel.app",
    },
    year: "2024",
  },
  {
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "AI-powered content generation tool for creating blog posts, social media content, and marketing copy.",
    longDescription:
      "Created an AI-powered content generation platform that helps marketers and content creators produce high-quality written content. Integrates with OpenAI GPT-4 to generate blog posts, social media captions, and marketing copy with customizable tone and style.",
    image: "/ai-writing-assistant-interface.png",
    images: ["/ai-content-editor.jpg", "/content-templates-library.png", "/ai-settings-panel.jpg"],
    techStack: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Vercel AI SDK"],
    status: "Active",
    links: {
      live: "https://ai-content-gen.vercel.app",
    },
    year: "2025",
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    description: "Real-time weather dashboard with forecasts, interactive maps, and location-based alerts.",
    longDescription:
      "Built a comprehensive weather dashboard that provides real-time weather data, 7-day forecasts, interactive weather maps, and location-based severe weather alerts. Features include multiple location tracking, historical data visualization, and customizable widgets.",
    image: "/weather-dashboard-interface.png",
    images: ["/weather-map-view.jpg", "/forecast-charts.jpg", "/weather-alerts.jpg"],
    techStack: ["React", "TypeScript", "OpenWeather API", "Chart.js", "Leaflet"],
    status: "Completed",
    links: {
      github: "https://github.com/yourusername/weather-dashboard",
      demo: "https://weather-dash.vercel.app",
    },
    year: "2023",
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