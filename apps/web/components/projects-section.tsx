"use client"

import { ArrowUpRight } from "@phosphor-icons/react"
import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@workspace/ui/components/card"

const projects = [
  {
    title: "Convex AI",
    company: "Convex",
    period: "02/2026 — Present",
    description:
      "A next-generation AI-powered messenger platform delivering intelligent, automated customer service. Unifies Facebook Messenger, Instagram, Viber, and more into a single inbox.",
    tags: ["AI", "React", "Node.js", "Multi-Platform"],
    accent: "secondary" as const,
    link: "https://con-vex.co",
  },
  {
    title: "Puck Finance",
    company: "Automatic Crypto Trading Bot",
    period: "08/2023 — Present",
    description:
      "Built an API connecting TradingView signals to Binance API for automated futures trading. Integrated with a Discord bot for tracking trades, balance, and P&L.",
    tags: ["Go", "Trading", "API", "Discord"],
    accent: "accent" as const,
    link: "https://puck.live",
  },
  {
    title: "Immi Flow",
    company: "Immi Flow",
    period: "01/2026 — 03/2026",
    description:
      "AI-powered immigration process system for Australian migration agencies. Automated support center across Messenger, Instagram, WhatsApp with AI analytics and self-improving agents.",
    tags: ["AI", "React", "Node.js", "WhatsApp"],
    accent: "secondary" as const,
    link: "https://immi-flow.com",
  },
]

const certifications = [
  {
    name: "Certified Blockchain Expert",
    issuer: "Blockchain Council",
    period: "04/2022 — Present",
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "AWS",
    period: "07/2021 — 07/2024",
  },
]

const education = {
  degree: "Bachelor's Degree in Computer Science",
  school: "National University of Mongolia",
  location: "Ulaanbaatar, Mongolia",
  period: "01/2016 — 01/2020",
}

export function ProjectsSection() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-8 py-32" id="projects">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <span className="mb-4 block text-sm tracking-widest text-secondary uppercase">
              Side Projects
            </span>
            <h2 className="mb-4 text-4xl font-bold">Things I&apos;ve Built</h2>
            <p className="text-muted-foreground">
              Personal projects and side ventures I&apos;ve built from the
              ground up.
            </p>
          </div>
          <span className="hidden text-sm tracking-widest text-secondary md:block">
            001 — {String(projects.length).padStart(3, "0")}
          </span>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group border-border/10 transition-colors hover:border-border/30"
            >
              <CardHeader className="p-6 pb-0">
                <div className="mb-2 flex items-center justify-between">
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      project.accent === "secondary"
                        ? "border-secondary/20 bg-secondary/10 text-secondary"
                        : "border-accent/20 bg-accent/10 text-accent"
                    }`}
                  >
                    {project.period}
                  </Badge>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.company}
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-surface-container-highest px-2 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-8 lg:grid-cols-2">
          <div>
            <span className="mb-4 block text-sm tracking-widest text-secondary uppercase">
              Education
            </span>
            <h2 className="mb-8 text-4xl font-bold">Education</h2>
            <Card className="border-border/10">
              <CardContent className="p-8">
                <h3 className="mb-2 text-xl font-bold">{education.degree}</h3>
                <p className="mb-1 text-muted-foreground">{education.school}</p>
                <p className="text-sm text-muted-foreground">
                  {education.location} &bull; {education.period}
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            <span className="mb-4 block text-sm tracking-widest text-secondary uppercase">
              Credentials
            </span>
            <h2 className="mb-8 text-4xl font-bold">Certifications</h2>
            <div className="flex flex-col gap-4">
              {certifications.map((cert) => (
                <Card key={cert.name} className="border-border/10">
                  <CardContent className="p-6">
                    <h3 className="mb-1 text-lg font-bold">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} &bull; {cert.period}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
