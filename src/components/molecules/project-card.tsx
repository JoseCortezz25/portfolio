import { Badge } from "../atoms/badge"
import { ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  slug: string
  title: string
  description: string
  image: string
  techStack: string[]
  status?: "Active" | "Completed"
}

export function ProjectCard({ slug, title, description, image, techStack, status }: ProjectCardProps) {
  return (
    <a
      href={`/projects/${slug}`}
      className="group block bg-card border border-border  overflow-hidden hover:border-accent/50 transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          width={100}
          height={100}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text-xl font-semibold transition-colors">{title}</h3>
          {status && <Badge variant="accent">{status}</Badge>}
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="flex items-center gap-2 mt-4 text-sm text-accent">
          <span>View project</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </a>
  )
}