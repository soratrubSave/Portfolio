import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

const socials = [
  {
    name: "Email",
    href: "mailto:soratrub.save1@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    href: "https://github.com/soratrubSave?tab=repositories",
    icon: Github,
  },
]

export function ContactSection() {
  return (
    <div className="flex h-full flex-col">
      <h2 className="mb-2 text-lg font-semibold text-foreground">
        {"Call to Action"}
      </h2>
      <p className="mb-6 text-sm text-muted-foreground">
        {"Send me a message"}
      </p>

      <div className="flex flex-wrap gap-3">
        {socials.map((social) => (
          <Button
            key={social.name}
            variant="outline"
            size="icon"
            asChild
            className="border-border/50 bg-transparent text-muted-foreground transition-all hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
          >
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" />
            </a>
          </Button>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          <Mail className="mr-2 h-4 w-4" />
          Get in Touch
        </Button>
      </div>
    </div>
  )
}
