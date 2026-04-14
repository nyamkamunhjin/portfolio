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

export function ContactSection() {
  return (
    <section
      className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-8 py-32 lg:grid-cols-2"
      id="contact"
    >
      <div className="flex flex-col gap-8">
        <div>
          <span className="mb-4 block text-sm tracking-widest text-secondary uppercase">
            Get in Touch
          </span>
          <h2 className="text-5xl font-bold">
            Let&apos;s <span className="text-accent">Connect</span>
          </h2>
        </div>
        <p className="text-xl text-muted-foreground">
          Have a project in mind or looking for a senior full-stack developer?
          Let&apos;s talk about how I can help.
        </p>
        <div className="mt-4 flex flex-col gap-6">
          <a
            className="group flex items-center gap-4"
            href="mailto:nyamkamunhjin@gmail.com"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-surface-container-highest text-secondary transition-all group-hover:bg-secondary group-hover:text-secondary-foreground">
              <EnvelopeSimple className="size-5" />
            </div>
            <span className="font-medium">nyamkamunhjin@gmail.com</span>
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
                  placeholder="you@example.com"
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest text-muted-foreground uppercase">
                Subject
              </label>
              <Input
                className="rounded-xl border-none bg-surface-container-low focus-visible:ring-secondary"
                placeholder="What's this about?"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs tracking-widest text-muted-foreground uppercase">
                Message
              </label>
              <Textarea
                className="min-h-[120px] rounded-xl border-none bg-surface-container-low focus-visible:ring-secondary"
                placeholder="Tell me more..."
              />
            </div>
            <Button
              className="hero-gradient h-auto w-full rounded-xl py-4 font-bold text-primary-foreground transition-opacity hover:opacity-90"
              type="submit"
            >
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
