import { ArrowDown } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
      <div className="absolute right-6 top-6">
        <ThemeToggle />
      </div>
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight sm:text-8xl md:text-9xl">
          RNCS
        </h1>
        <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
          Video Creator & Visual Storyteller
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="rounded-full border border-border px-4 py-2">Short Form</span>
          <span className="rounded-full border border-border px-4 py-2">Long Form</span>
          <span className="rounded-full border border-border px-4 py-2">Commercial</span>
        </div>
      </div>
      
      <a 
        href="#work" 
        className="absolute bottom-12 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="text-sm">View Work</span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}
