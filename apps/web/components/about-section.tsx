"use client"

import { Badge } from "@workspace/ui/components/badge"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Target, Lightning, Cube, CodeBlock } from "@phosphor-icons/react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/fade-in"

const skills = {
  Languages: ["Go", "JavaScript", "Python", "SQL", "TypeScript", "Pine Script"],
  "Frameworks & Libraries": [
    "GraphQL",
    "Next.js",
    "Node.js",
    "Prisma",
    "React",
    "Tailwind CSS",
  ],
  "Tools & Platforms": [
    "AWS",
    "Anthropic API",
    "Binance API",
    "Docker",
    "Git",
    "LiteLLM",
    "MongoDB Atlas",
    "OpenAI API",
    "Vercel",
    "OpenStack",
  ],
  Databases: ["MongoDB", "MySQL", "PostgreSQL"],
  Other: ["Agile development", "API design and integration", "Blockchain"],
}

const features = [
  {
    icon: Cube,
    title: "Full-Stack SaaS Builder",
    description:
      "End-to-end product launches from initial version to production use with thousands of active users.",
  },
  {
    icon: CodeBlock,
    title: "System Design",
    description:
      "Strong background in system design, third-party integrations, and front-end development.",
  },
  {
    icon: Lightning,
    title: "API Integration",
    description:
      "Built automation tools connecting 250+ third-party applications and multiple external APIs.",
  },
  {
    icon: Target,
    title: "Cross-Functional",
    description:
      "Collaboration between engineering and product teams to drive outcomes from concept to production.",
  },
]

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-32" id="about">
      <div className="flex flex-col gap-12">
        <FadeIn>
          <span className="mb-4 block text-sm tracking-widest text-secondary uppercase">
            About Me
          </span>
          <h2 className="mb-6 text-4xl font-bold">
            Senior Full-Stack Developer
          </h2>
          <p className="max-w-4xl text-lg leading-relaxed text-muted-foreground">
            Senior full-stack developer with 7 years of experience in web
            application development, API integration, and system building.
            Experienced in React, Node.js, and building complete SaaS
            applications from initial version to production use with thousands
            of users. Strong background in system design, third-party
            integrations, front-end development, and cross-functional
            collaboration between engineering and product teams.
          </p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h3 className="mb-6 text-lg font-semibold">Skills & Technologies</h3>
          <StaggerContainer className="flex flex-col gap-6" staggerDelay={0.06}>
            {Object.entries(skills).map(([category, items]) => (
              <StaggerItem key={category}>
                <h4 className="mb-3 text-sm tracking-widest text-muted-foreground uppercase">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-border/20 bg-surface-container-highest px-4 py-2 text-secondary"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>
        <StaggerContainer
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          staggerDelay={0.1}
        >
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card className="h-full border-border/10">
                <CardContent className="flex flex-col gap-3 p-6">
                  <feature.icon className="size-6 text-secondary" />
                  <h4 className="text-base font-bold">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
