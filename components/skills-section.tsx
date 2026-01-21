"use client" // ใส่บรรทัดนี้เผื่อไว้ถ้ามีการใช้ Interactive feature

import { Badge } from "@/components/ui/badge"
import { 
  SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiBootstrap, SiHtml5,
  SiGo, SiSpring, SiNodedotjs, SiPython, SiPostgresql, SiMongodb,
  SiGit, SiDocker, SiVercel, SiRender, SiAmazonwebservices
} from "react-icons/si"
import { Database } from "lucide-react"

const skills = {
  frontend: [
    { name: "Next.js", icon: SiNextdotjs },
    { name: "React", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "HTML5/CSS3", icon: SiHtml5 },
  ],
  backend: [
    { name: "Go (Fiber)", icon: SiGo },
    { name: "Java (Spring)", icon: SiSpring },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Python", icon: SiPython },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "SQL", icon: Database },
  ],
  tools: [
    { name: "Git / GitHub", icon: SiGit },
    { name: "Docker", icon: SiDocker },
    { name: "Vercel", icon: SiVercel },
    { name: "Render", icon: SiRender },
  ],
}

export function SkillsSection() {
  return (
    <div className="flex h-full flex-col">
      <h2 className="mb-4 text-lg font-semibold text-foreground">Skills</h2>
      <div className="space-y-4">
        
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-primary">
              {category}
            </span>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <Badge
                  key={skill.name}
                  variant="outline"
                  className="flex items-center gap-2 border-border/50 bg-transparent px-3 py-1 text-muted-foreground transition-all hover:border-primary/50 hover:text-foreground hover:bg-secondary/50"
                >
                  {skill.icon && <skill.icon className="h-3.5 w-3.5" />} 
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}