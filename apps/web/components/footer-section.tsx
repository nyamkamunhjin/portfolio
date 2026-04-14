"use client"

import { FadeIn } from "@/components/fade-in"

export function FooterSection() {
  return (
    <footer className="w-full bg-surface-container-low py-12">
      <FadeIn>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-8 text-sm tracking-widest uppercase md:flex-row">
          <span className="text-muted-foreground">
            © 2026 Munkhjin Nyamdorj. Built with ❤️
          </span>
          <div className="flex gap-8">
            <a
              className="text-muted-foreground opacity-80 transition-colors hover:text-secondary hover:opacity-100"
              href="https://github.com/nyamkamunhjin"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="text-muted-foreground opacity-80 transition-colors hover:text-secondary hover:opacity-100"
              href="https://linkedin.com/in/nyamkamunhjin"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
            <a
              className="text-muted-foreground opacity-80 transition-colors hover:text-secondary hover:opacity-100"
              href="mailto:nyamkamunhjin@gmail.com"
            >
              Email
            </a>
          </div>
        </div>
      </FadeIn>
    </footer>
  )
}
