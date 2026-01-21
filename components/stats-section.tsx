const stats = [
  { label: "Years Coding", value: "3+" },
  { label: "Projects Completed", value: "4+" },
  { label: "Tech Stack Mastered", value: "10+" },
]

export function StatsSection() {
  return (
    <div className="flex h-full items-center justify-around">
      {stats.map((stat, index) => (
        <div key={stat.label} className="text-center">
          <div className="text-3xl font-bold text-primary md:text-4xl">
            {stat.value}
          </div>
          <div className="mt-1 text-xs text-muted-foreground md:text-sm">
            {stat.label}
          </div>
          {index < stats.length - 1 && (
            <div className="absolute right-0 top-1/2 hidden h-8 w-px -translate-y-1/2 bg-border/50 md:block" />
          )}
        </div>
      ))}
    </div>
  )
}
