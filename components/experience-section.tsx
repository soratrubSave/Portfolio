import { Briefcase } from "lucide-react"

const experiences = [
  {
    company: "Cube SoftTech Co., Ltd.",
    role: "Full Stack Developer Intern",
    period: "July 2025 - October 2025",
  },
  {
    company: "Twitch Chat Moderation Desktop App",
    role: "Senior Project",
    period: "June 2025 - November 2025",
  },
  {
    company: "Thammasat University",
    role: "B.Sc. Computer Science",
    period: "2022 - 2025",
  },
]

export function ExperienceSection() {
  return (
    <div className="flex h-full flex-col">
      <div className="mb-4 flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-semibold text-foreground">Experience</h2>
      </div>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={exp.company}
            className={`relative pl-4 ${index !== experiences.length - 1 ? "border-l border-border/50 pb-4" : ""}`}
          >
            <div className="absolute -left-1 top-0 h-2 w-2 rounded-full bg-primary" />
            <h3 className="font-medium text-foreground">{exp.role}</h3>
            <p className="text-sm text-muted-foreground">{exp.company}</p>
            <span className="text-xs text-muted-foreground/70">{exp.period}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
