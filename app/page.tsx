import { BentoCard, BentoGrid } from "@/components/bento-grid"
import { ContactSection } from "@/components/contact-section"
import { ExperienceSection } from "@/components/experience-section"
import { HeroSection } from "@/components/hero-section"
import { ProjectCard } from "@/components/project-card"
import { SkillsSection } from "@/components/skills-section"
import { StatsSection } from "@/components/stats-section"
import { Code2, Sparkles } from "lucide-react"

const projects = [
  {
    title: "Expense Splitter",
    description:
      "A full-stack web application that simplifies group expense sharing. Implements a Greedy algorithm to minimize transaction complexity, reducing the number of payments needed to settle debts.",
    tags: ["Next.js", "Go (Fiber)", "PostgreSQL", "Tailwind CSS"],
    image:
      "/Expense-Tracking.png",
    href: "https://expense-spliter-phi.vercel.app/login"
  },
  {
    title: "VentSpace",
    description:
      "A real-time anonymous social platform featuring live chat and interactive voting. Powered by Socket.IO for instant updates and a scalable Express.js backend.",
    tags: ["Next.js", "Express.js", "Socket.IO", "MongoDB"],
    image: "/VenSpace.png", 
    href: "https://vent-space-six.vercel.app/", 
  },
  {
    title: "Twitch Moderator",
    description:
      "A real-time desktop application for chat moderation. Built with Python and PyQt5, featuring multi-threaded processing for high-frequency data and NLP-based profanity detection.",
    tags: ["Python", "PyQt5", "Socket Programming", "NLP"],
    image: "/Twitch.png", 
    href: "https://github.com/soratrubSave/Twitch-Chat-Moderation-Desktop-App.git",
  },
  {
    title: "Income & Expense App",
    description:
      "A native Android application for personal finance tracking. Features a user-friendly interface for managing daily transactions, viewing history, and analyzing spending habits.",
    tags: ["Java", "Android SDK", "XML", "SQLite"],
    image: "/Pocket.png", 
    href: "https://github.com/soratrubSave/IncomeAndExpense_AndroidApp.git", 
  },
  {
    title: "POS Management System",
    description:
      "A modern Point of Sale platform featuring real-time inventory tracking, sales dashboard, and seamless order processing. Built with enterprise-grade backend architecture.",
    tags: ["Work in Progress", "Java Spring Boot", "Next.js", "PostgreSQL"],
    image: "/PosProject.png", 
    href: "https://github.com/soratrubSave/Pos-Project.git", 
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Background gradient effect */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-20">
        {/* Header */}
        <header className="mb-12 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-semibold text-foreground">Save.dev</span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="#work"
              className="transition-colors hover:text-foreground"
            >
              Work
            </a>
            <a
              href="#skills"
              className="transition-colors hover:text-foreground"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-foreground"
            >
              Contact
            </a>
          </nav>
        </header>

        {/* Bento Grid */}
        <BentoGrid className="mb-16">
          {/* Hero Profile - Large card */}
          <BentoCard colSpan={2} rowSpan={1}>
            <HeroSection />
          </BentoCard>

          {/* Stats Card */}
          <BentoCard>
            <StatsSection />
          </BentoCard>

          {/* Experience Timeline */}
          <BentoCard rowSpan={1}>
            <ExperienceSection />
          </BentoCard>

          {/* Skills Card */}
          <BentoCard colSpan={2} rowSpan={1} className="min-h-[200px]">
            <SkillsSection />
          </BentoCard>
        </BentoGrid>

        {/* Work Section */}
        <section id="work" className="mb-16">
          <div className="mb-8 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Selected Work
            </h2>
          </div>

          <BentoGrid>
            {projects.map((project) => (
              <BentoCard key={project.title}>
                <ProjectCard {...project} />
              </BentoCard>
            ))}
          </BentoGrid>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <BentoGrid>
            <BentoCard colSpan={2}>
              <div className="flex h-full flex-col justify-center">
                <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
                  {"Let's work together."}
                </h2>
                <p className="text-muted-foreground">
                  {
                    "I’m currently looking for new opportunities. Whether you have a project in mind or just want to say hi, feel free to reach out!"
                  }
                </p>
              </div>
            </BentoCard>
            <BentoCard>
              <ContactSection />
            </BentoCard>
          </BentoGrid>
        </section>

        {/* Footer */}
        <footer className="mt-20 border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          <p>{"© 2026"}</p>
        </footer>
      </div>
    </main>
  )
}
