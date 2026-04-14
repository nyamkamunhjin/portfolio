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
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in"

const projects = [
  {
    title: "Convex",
    company: "Side Project",
    period: "February 2026",
    description:
      "A multi-channel messaging platform that unifies Facebook Messenger, Instagram, Viber, and other services into one inbox for businesses to manage customer conversations.",
    tags: ["React", "Node.js", "Multi-Platform"],
    accent: "secondary" as const,
    link: "https://con-vex.co",
  },
  {
    title: "Puck Finance",
    company: "Side Project",
    period: "August 2023",
    description:
      "Built an API to connect TradingView signals to the Binance API for automated futures trading. Integrated a Discord bot for trade tracking, balance monitoring, and profit/loss reporting. Currently used for personal automated trading.",
    tags: ["Go", "Trading", "API", "Discord"],
    accent: "accent" as const,
    link: "https://puck.live",
  },
]

const certifications = [
  {
    name: "Certified Blockchain Expert",
    issuer: "Blockchain Council",
    period: "April 2022 – Present",
  },
  {
    name: "AWS Certified Solutions Architect",
    issuer: "AWS",
    period: "July 2021 – July 2024",
  },
]

const education = {
  degree: "Bachelor's Degree in Computer Science",
  school: "National University of Mongolia",
  location: "Ulaanbaatar, Mongolia",
  period: "January 2016 – January 2020",
}

export function ProjectsSection() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-8 py-32" id="projects">
        <FadeIn className="mb-16 flex items-end justify-between">
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
        </FadeIn>
        <StaggerContainer
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
          staggerDelay={0.12}
        >
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <Card className="group h-full border-border/10 transition-colors hover:border-border/30">
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
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="bg-surface-container-low py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-8 lg:grid-cols-2">
          <FadeIn>
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
          </FadeIn>
          <FadeIn delay={0.15}>
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
          </FadeIn>
        </div>
      </section>
    </>
  )
}
