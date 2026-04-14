"use client"

import { useState } from "react"
import { Badge } from "@workspace/ui/components/badge"
import { CaretDown } from "@phosphor-icons/react"

const experiences = [
  {
    role: "Lead Software Engineer",
    company: "Mazaal AI",
    location: "Australia",
    period: "November 2023 – April 2026",
    type: "Full-time",
    active: true,
    highlights: [
      "Worked in a team of 2 engineers to build and launch the main product, growing it from 0 to 5,000 active users in 7 months.",
      "Redesigned the front-end architecture and API layer, reducing client-side errors by 90% and enabling direct workflows for model training.",
      "Led the product launch and contributed to subscription negotiations with major retail partners.",
      "Built automation tools that connect to 250+ third-party applications.",
      "Developed a coding assistant with multi-platform chatbot support, custom API endpoints, and retrieval features.",
      "Created a chat interface with support for tool usage and external API connections.",
    ],
    tags: ["React", "Node.js", "TypeScript", "AWS"],
  },
  {
    role: "Full-Stack Developer",
    company: "Ipsun Sunvoy",
    location: "",
    period: "October 2022 – October 2023",
    type: "Full-time",
    active: false,
    highlights: [
      "Built and maintained landing pages with blog functionality and integrated 5+ third-party solar inverter APIs and CRM systems to improve data flow between customer and internal teams.",
      "Created a scraping system using Puppeteer that extracts data from hidden APIs and generates monthly screenshot-based reports for 50+ clients, reducing manual effort by approximately 15 hours per month.",
      "Developed a management tool for solar installers to track customers and devices, supporting 30+ installers and 500+ customer accounts.",
      "Fixed 40+ production issues, added unit tests, and improved performance in key areas.",
    ],
    tags: ["React", "Node.js", "Puppeteer", "API Integration"],
  },
  {
    role: "Mid-Level Full-Stack Developer",
    company: "Fibo Global",
    location: "",
    period: "January 2021 – October 2022",
    type: "Full-time",
    active: false,
    highlights: [
      "Contributed to the development of cloud.mn, a cloud infrastructure service used by Mongolian tech companies.",
      "Built a paid blogging platform that rewards authors based on article quality.",
      "Developed an internal tool for tracking projects, tasks, and working hours.",
      "Updated and modernized legacy landing pages.",
    ],
    tags: ["React", "Node.js", "MongoDB", "Docker"],
  },
]

const earlierExperiences = [
  {
    role: "Full-Stack Developer",
    company: "Trap.mn",
    period: "March 2021 – May 2021",
    type: "Part-time",
    highlights: [
      "Built a web service for reporting security threats and attacks to cloud servers.",
      "Created a tool to export log data summaries to CSV format.",
      "Developed a back-office section for managing user subscriptions.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "August 2019 – October 2019",
    type: "Freelancer",
    highlights: [
      "Developed an e-commerce website for furniture sales using React, Express.js, and MySQL.",
      "Assisted senior students with deploying React and Node.js applications to cloud servers.",
    ],
  },
  {
    role: "Entry-Level Front-End Engineer",
    company: "Erxes INC",
    period: "May 2019 – August 2019",
    type: "Full-time",
    highlights: [
      "Fixed CSS and React layouts, updated developer documentation, and wrote snapshot unit tests using Jest.",
    ],
  },
]

export function ExperienceSection() {
  const [showEarlier, setShowEarlier] = useState(false)

  return (
    <section className="py-32" id="experience">
      <div className="mx-auto max-w-7xl px-8">
        <span className="mb-4 block text-sm tracking-widest text-secondary uppercase">
          Work Experience
        </span>
        <h2 className="mb-16 text-4xl font-bold">Where I&apos;ve Worked</h2>
        <div className="flex flex-col gap-12">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="relative border-l-4 pl-12"
              style={{
                borderLeftColor: exp.active ? "#9093ff" : "rgba(73,72,71,0.3)",
              }}
            >
              {exp.active && (
                <div className="absolute top-0 -left-[10px] size-4 rounded-full bg-secondary shadow-[0_0_15px_#9093ff]" />
              )}
              <div className="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <h3 className="text-2xl font-bold">{exp.role}</h3>
                <span
                  className={
                    exp.active ? "text-secondary" : "text-muted-foreground"
                  }
                >
                  {exp.period}
                </span>
              </div>
              <div className="mb-4 flex items-center gap-3">
                <h4
                  className={`text-lg font-semibold ${exp.active ? "text-accent" : "text-muted-foreground"}`}
                >
                  {exp.company}
                </h4>
                {exp.location && (
                  <span className="text-sm text-muted-foreground">
                    &bull; {exp.location}
                  </span>
                )}
                <Badge
                  variant="outline"
                  className="border-border/20 text-xs text-muted-foreground"
                >
                  {exp.type}
                </Badge>
              </div>
              <ul className="mb-4 flex max-w-3xl flex-col gap-2">
                {exp.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="relative pl-4 leading-relaxed text-muted-foreground before:absolute before:top-[10px] before:left-0 before:size-1.5 before:rounded-full before:bg-border before:content-['']"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded bg-secondary/10 px-2.5 py-1 text-xs text-secondary uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <button
            className="flex items-center gap-2 font-medium text-muted-foreground transition-colors hover:text-foreground"
            onClick={() => setShowEarlier(!showEarlier)}
          >
            <CaretDown
              className={`size-4 transition-transform ${showEarlier ? "rotate-180" : ""}`}
            />
            {showEarlier ? "Hide" : "Show"} earlier experience (
            {earlierExperiences.length} roles)
          </button>

          {showEarlier && (
            <div
              className="mt-8 flex flex-col gap-8 border-l-4 pl-12"
              style={{ borderLeftColor: "rgba(73,72,71,0.15)" }}
            >
              {earlierExperiences.map((exp) => (
                <div key={`${exp.company}-${exp.period}`}>
                  <div className="mb-2 flex flex-col justify-between gap-2 md:flex-row md:items-center">
                    <h3 className="text-lg font-bold text-muted-foreground">
                      {exp.role}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-muted-foreground">{exp.company}</span>
                    <Badge
                      variant="outline"
                      className="border-border/20 text-xs text-muted-foreground"
                    >
                      {exp.type}
                    </Badge>
                  </div>
                  <ul className="flex max-w-3xl flex-col gap-1.5">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:top-[10px] before:left-0 before:size-1.5 before:rounded-full before:bg-border/50 before:content-['']"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
