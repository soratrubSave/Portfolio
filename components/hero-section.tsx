import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="flex items-start justify-between">
        <div>
          <span className="mb-2 inline-block text-sm font-medium text-primary">
            Available for work
          </span>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Soratrub Naksawat
          </h1>
          <p className="text-lg text-muted-foreground">Full Stack Developer</p>
        </div>
        <Avatar className="h-30 w-30 border-2 border-border ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
          <AvatarImage src="/Screenshot_8.png" alt="Image Profile" className="object-cover" />
          <AvatarFallback className="bg-secondary text-secondary-foreground text-xl">AC</AvatarFallback>
        </Avatar>
      </div>

      <div className="mt-6 space-y-4">
        <p className="text-balance leading-relaxed text-muted-foreground">
            Recent Computer Science Graduate passionate about full-stack development, with practical experience in both enterprise (Java Spring) and modern (Go, Next.js) environments. I enjoy building efficient, scalable applications and solving complex architectural challenges. Ready to leverage my skills in backend logic and frontend design to deliver high-quality solutions as a Full Stack Developer.
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>Ramindra 40, Alley 33-3, Nuanchan Subdistrict, Bueng Kum District, Bangkok 10240</span>
        </div>
      </div>
    </div>
  )
}
