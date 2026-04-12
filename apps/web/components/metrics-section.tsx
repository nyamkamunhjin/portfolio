import { Card, CardContent } from "@workspace/ui/components/card"

const metrics = [
  { label: "Experience", value: "7+", description: "Years in Software" },
  {
    label: "Users Reached",
    value: "5K+",
    description: "Active SaaS Users",
  },
  {
    label: "Integrations",
    value: "250+",
    description: "Third-Party Apps",
  },
  {
    label: "Production Issues",
    value: "40+",
    description: "Resolved & Shipped",
  },
]

export function MetricsSection() {
  return (
    <section className="bg-surface-container-low py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-8 md:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="border-border/10">
            <CardContent className="p-8">
              <span className="mb-2 block text-sm tracking-widest text-secondary uppercase">
                {metric.label}
              </span>
              <div className="text-4xl font-extrabold">{metric.value}</div>
              <p className="mt-2 text-sm text-muted-foreground">
                {metric.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
