export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 tracking-tight">
        <span className="text-xl font-bold tracking-tighter text-foreground">
          Munkhjin Nyamdorj
        </span>
        <div className="hidden items-center gap-8 md:flex">
          <a
            className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            href="#services"
          >
            Services
          </a>
          <a
            className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            href="#experience"
          >
            Experience
          </a>
          <a
            className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            href="#projects"
          >
            Projects
          </a>
          <a
            className="font-medium text-muted-foreground transition-colors hover:text-foreground"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <a
          className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2 font-bold text-primary-foreground transition-all hover:bg-primary/80"
          href="#contact"
        >
          <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
          Available for Hire
        </a>
      </div>
    </nav>
  )
}
