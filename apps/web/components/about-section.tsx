"use client"

import { Badge } from "@workspace/ui/components/badge"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Target, Lightning, Cube, Robot } from "@phosphor-icons/react"

const skills = [
  "TypeScript",
  "Go",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "GraphQL",
  "AWS",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Prisma",
  "LLMs",
  "Prompt Engineering",
]

const features = [
  {
    icon: Cube,
    title: "Full-Stack SaaS Builder",
    description:
      "End-to-end product launches from MVP to thousands of active users. Built complete SaaS systems from scratch.",
  },
  {
    icon: Robot,
    title: "AI Integration Expert",
    description:
      "Built coding-capable AI agents, RAG systems, chat interfaces with tool calling, and AI-powered automation platforms.",
  },
  {
    icon: Lightning,
    title: "Workflow Automation",
    description:
      "Developed automation tooling integrating 250+ third-party applications working alongside AI Agents through MCP servers.",
  },
  {
    icon: Target,
    title: "Cross-Functional Leader",
    description:
      "Bridges engineering and product to drive outcomes. Led product launches, negotiated deals, and rebuilt interfaces for measurable gains.",
  },
]

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32" id="about">
      <div className="flex flex-col gap-12">
        <div>
          <span className="mb-4 block text-sm tracking-widest text-secondary uppercase">
            About Me
          </span>
          <h2 className="mb-6 text-4xl font-bold">
            Senior Full-Stack Developer
          </h2>
          <p className="max-w-4xl text-lg leading-relaxed text-muted-foreground">
            Senior software engineer with 7 years of experience specializing in
            AI integration and full-stack development. Expert in React, Node.js,
            and API design, with a proven track record of building full SaaS
            systems from scratch — through MVP to thousands of active users.
            Skilled in system design, API integrations, and front-end UI/UX. Led
            product launches, rebuilt application interfaces and landing pages
            for measurable SEO gains, and developed workflow automation tools
            that directly enabled strategic business deals.
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="border-border/20 bg-surface-container-highest px-4 py-2 text-secondary"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/10">
              <CardContent className="flex flex-col gap-3 p-6">
                <feature.icon className="size-6 text-secondary" />
                <h4 className="text-base font-bold">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
