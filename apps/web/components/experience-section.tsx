import { Badge } from "@workspace/ui/components/badge"

const experiences = [
  {
    role: "Lead Software Engineer",
    company: "Mazaal AI",
    location: "Australia",
    period: "11/2023 — 04/2026",
    type: "Full-time",
    active: true,
    highlights: [
      "Worked with a team of 2 engineers through the end-to-end product launch, growing from 0 to 5,000 active users within 7 months",
      "Overhauled the application's front-end architecture and API layer, reducing client-side errors by 90% and enabling direct AI model training workflows — cutting manual annotation time by 2 hours/week",
      "Led successful product launch and negotiated strategic subscription deals with major retail partners",
      "Developed workflow automation tooling integrating 250+ third-party applications, working alongside AI Agents through MCP servers",
      "Built a coding-capable AI agent with multi-platform chatbot integration, powered by custom API, RAG, and advanced prompt engineering",
      "Created an AI chat interface supporting seamless tool calling, reasoning, and third-party API integrations",
    ],
    tags: ["React", "Node.js", "AI", "TypeScript", "AWS"],
  },
  {
    role: "Full-Stack Developer",
    company: "Ipsun Sunvoy",
    location: "",
    period: "10/2022 — 10/2023",
    type: "Full-time",
    active: false,
    highlights: [
      "Built and maintained blog-powered landing pages and integrated 5+ third-party solar inverter APIs and CRM platforms",
      "Developed a Puppeteer-based scraping pipeline that auto-generated screenshot-based monthly reports for 50+ clients, saving ~15 hours of manual work per month",
      "Built a customer and inverter management tool for solar installers, enabling 30+ installers to track and manage 500+ customer accounts and devices",
      "Improved system reliability by resolving 40+ production issues, implementing unit test coverage, and optimizing performance",
    ],
    tags: ["React", "Node.js", "Puppeteer", "API Integration"],
  },
  {
    role: "Mid-Level Full-Stack Developer",
    company: "Fibo Global",
    location: "",
    period: "01/2021 — 10/2022",
    type: "Full-time",
    active: false,
    highlights: [
      "Collaborated on cloud infrastructure service widely used by Mongolian tech companies (cloud.mn)",
      "Developed a paid tech blog platform rewarding authors for quality articles",
      "Built an internal project management tool for tracking projects, tasks, and hours",
      "Renovated and updated legacy landing pages to modern designs",
    ],
    tags: ["React", "Node.js", "MongoDB", "Docker"],
  },
  {
    role: "Full-Stack Developer",
    company: "Trap.mn",
    location: "",
    period: "03/2021 — 05/2021",
    type: "Part-time",
    active: false,
    highlights: [
      "Developed a web service for reporting security threats and attacks to cloud servers",
      "Created a reporting summary exporter tool for log data to CSV",
      "Built a back-office section for managing user subscriptions",
    ],
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    location: "",
    period: "08/2019 — 10/2019",
    type: "Freelancer",
    active: false,
    highlights: [
      "Developed an eCommerce website for furniture sales using React, Express.js, and MySQL",
      "Assisted senior students with deploying React and Node.js projects to cloud servers",
    ],
    tags: ["React", "Express.js", "MySQL"],
  },
  {
    role: "Entry-Level Front-End Engineer",
    company: "Erxes INC",
    location: "",
    period: "05/2019 — 08/2019",
    type: "Full-time",
    active: false,
    highlights: [
      "Fixed layouts in CSS and React, updated developer documentation, and wrote snapshot unit tests in Jest",
    ],
    tags: ["React", "CSS", "Jest"],
  },
]

export function ExperienceSection() {
  return (
    <section className="bg-surface-container-low py-32" id="experience">
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
      </div>
    </section>
  )
}
