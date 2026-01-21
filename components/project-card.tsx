import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image?: string
  href?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  href = "#",
}: ProjectCardProps) {
  return (
    <a
      href={href}
      className="group flex h-full flex-col"
      target="_blank"
      rel="noopener noreferrer"
    >
      {image && (
        <div className="mb-4 aspect-video overflow-hidden rounded-lg bg-secondary">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="font-semibold text-foreground transition-colors group-hover:text-primary">
            {title}
          </h3>
          <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
        </div>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-secondary/80 text-secondary-foreground hover:bg-secondary"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </a>
  )
}
