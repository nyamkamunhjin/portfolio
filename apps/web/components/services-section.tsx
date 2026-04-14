import { Rocket, Robot, PlugsConnected, Layout } from "@phosphor-icons/react"
import { Card, CardContent } from "@workspace/ui/components/card"

const services = [
  {
    icon: Rocket,
    title: "SaaS Product Development",
    description:
      "End-to-end product builds from initial concept through MVP to production with thousands of active users. Full architecture, development, and deployment.",
    tags: ["React", "Next.js", "Node.js", "AWS", "PostgreSQL"],
  },
  {
    icon: Robot,
    title: "AI Integration & Automation",
    description:
      "Custom AI agents, chatbots with tool calling, retrieval-augmented generation systems, and workflow automation connecting to hundreds of third-party services.",
    tags: ["OpenAI", "Anthropic", "RAG", "MCP", "LiteLLM"],
  },
  {
    icon: PlugsConnected,
    title: "API Design & Integration",
    description:
      "REST and GraphQL API development, third-party service integrations, payment systems, data pipelines, and automation tools for business workflows.",
    tags: ["GraphQL", "REST", "Binance API", "Puppeteer"],
  },
  {
    icon: Layout,
    title: "Frontend Architecture",
    description:
      "React and Next.js application development, performance optimization, UI/UX implementation, and front-end architecture redesigns with measurable results.",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
]

export function ServicesSection() {
  return (
    <section className="bg-surface-container-low py-32" id="services">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16">
          <span className="mb-4 block text-sm tracking-widest text-secondary uppercase">
            Services
          </span>
          <h2 className="mb-4 text-4xl font-bold">What I Can Do for You</h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Contract-based development work. I build complete systems based on
            your business requirements — from architecture to production.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card
              key={service.title}
              className="border-border/10 transition-colors hover:border-border/30"
            >
              <CardContent className="flex flex-col gap-4 p-8">
                <div className="flex size-12 items-center justify-center rounded-xl bg-secondary/10">
                  <service.icon className="size-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-surface-container-highest px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            className="inline-flex items-center gap-2 text-lg font-bold text-secondary transition-all hover:gap-3"
            href="#contact"
          >
            Have a project in mind? Let&apos;s talk.
          </a>
        </div>
      </div>
    </section>
  )
}
