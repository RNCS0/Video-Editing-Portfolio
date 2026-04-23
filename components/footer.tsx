import { Instagram, Youtube, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-8 text-center">
          <h2 className="text-2xl font-bold">Let&apos;s Create Together</h2>
          <p className="max-w-md text-muted-foreground">
            Available for collaborations, brand partnerships, and creative projects.
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a 
              href="mailto:hello@rncs.com" 
              className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          
          <p className="mt-8 text-sm text-muted-foreground">
            © 2026 RNCS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
