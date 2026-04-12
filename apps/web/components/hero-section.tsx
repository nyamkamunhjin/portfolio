"use client"

import { ArrowRight } from "@phosphor-icons/react"

export function HeroSection() {
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col items-start overflow-hidden px-8 py-20 lg:py-32">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary/10 blur-[100px]" />
      <div className="mb-4">
        <span className="text-sm font-medium tracking-widest text-secondary uppercase">
          Full-Stack Developer
        </span>
      </div>
      <h1 className="mb-8 text-5xl leading-[1.1] font-extrabold tracking-tight md:text-7xl lg:text-8xl">
        Building{" "}
        <span className="hero-gradient bg-clip-text text-transparent">
          full-stack
        </span>{" "}
        <br />
        products from MVP to scale.
      </h1>
      <p className="mb-12 max-w-2xl text-xl text-muted-foreground md:text-2xl">
        Senior software engineer with 7 years of experience specializing in AI
        integration and full-stack development. React, Node.js, and building
        SaaS systems from scratch.
      </p>
      <div className="flex flex-wrap gap-4">
        <a
          className="hero-gradient glow-accent flex items-center gap-2 rounded-xl px-8 py-4 font-bold transition-transform hover:scale-105"
          href="#contact"
        >
          Get in Touch
          <ArrowRight data-icon="inline-end" />
        </a>
        <a
          className="rounded-xl border border-border bg-surface-container-highest px-8 py-4 font-bold text-foreground transition-colors hover:bg-surface-bright"
          href="#projects"
        >
          View Projects
        </a>
      </div>
    </section>
  )
}
