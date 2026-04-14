"use client"

import {
  EnvelopeSimple,
  MapPin,
  LinkedinLogo,
  GithubLogo,
} from "@phosphor-icons/react"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Card, CardContent } from "@workspace/ui/components/card"
import { FadeIn } from "@/components/fade-in"

export function ContactSection() {
  return (
    <section className="bg-surface-container-low py-32" id="contact">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-8 lg:grid-cols-2">
        <FadeIn>
          <div className="flex flex-col gap-8">
            <div>
              <span className="mb-4 block text-sm tracking-widest text-secondary uppercase">
                Get in Touch
              </span>
              <h2 className="mb-6 text-5xl font-bold">
                Tell me about your project.
              </h2>
            </div>
            <p className="text-lg text-muted-foreground">
              I&apos;m available for contract work building systems end-to-end
              based on your business requirements. Whether you need a SaaS
              product built from scratch, AI integrations, or API development —
              let&apos;s talk.
            </p>
            <div className="mt-4 flex flex-col gap-6">
              <a
                className="group flex items-center gap-4"
                href="mailto:hello@munkhjin.xyz"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-surface-container-highest text-secondary transition-all group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <EnvelopeSimple className="size-5" />
                </div>
                <span className="font-medium">hello@munkhjin.xyz</span>
              </a>
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-xl bg-surface-container-highest text-accent">
                  <MapPin className="size-5" />
                </div>
                <span className="font-medium">Remote</span>
              </div>
              <div className="mt-2 flex gap-4">
                <a
                  className="flex size-12 items-center justify-center rounded-xl bg-surface-container-highest text-secondary transition-all hover:bg-secondary hover:text-secondary-foreground"
                  href="https://github.com/nyamkamunhjin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubLogo className="size-5" />
                </a>
                <a
                  className="flex size-12 items-center justify-center rounded-xl bg-surface-container-highest text-accent transition-all hover:bg-accent hover:text-accent-foreground"
                  href="https://linkedin.com/in/nyamkamunhjin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinLogo className="size-5" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <Card className="border-border/10">
            <CardContent className="p-10">
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest text-muted-foreground uppercase">
                      Name
                    </label>
                    <Input
                      className="rounded-xl border-none bg-surface-container-low focus-visible:ring-secondary"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs tracking-widest text-muted-foreground uppercase">
                      Email
                    </label>
                    <Input
                      className="rounded-xl border-none bg-surface-container-low focus-visible:ring-secondary"
                      placeholder="you@company.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest text-muted-foreground uppercase">
                    Project Type
                  </label>
                  <select className="w-full cursor-pointer appearance-none rounded-xl border-none bg-surface-container-low px-4 py-3 text-foreground focus:ring-2 focus:ring-secondary focus:outline-none">
                    <option value="">Select a project type</option>
                    <option value="saas">SaaS Product Development</option>
                    <option value="ai">AI Integration & Automation</option>
                    <option value="api">API Design & Integration</option>
                    <option value="frontend">Frontend Architecture</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs tracking-widest text-muted-foreground uppercase">
                    Project Details
                  </label>
                  <Textarea
                    className="min-h-[120px] rounded-xl border-none bg-surface-container-low focus-visible:ring-secondary"
                    placeholder="Tell me about your project, timeline, and budget..."
                  />
                </div>
                <Button
                  className="h-auto w-full rounded-xl bg-primary py-4 font-bold text-primary-foreground transition-colors hover:bg-primary/80"
                  size="lg"
                  type="submit"
                >
                  Send Project Details
                </Button>
              </form>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}
