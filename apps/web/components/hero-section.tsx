"use client"

import Image from "next/image"
import { motion } from "motion/react"
import { ArrowRight } from "@phosphor-icons/react"

export function HeroSection() {
  return (
    <section className="relative mx-auto flex max-w-7xl flex-col-reverse items-center overflow-hidden px-8 py-20 lg:flex-row lg:items-center lg:gap-16 lg:py-32">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-secondary/10 blur-[100px]" />
      <div className="flex flex-1 flex-col items-start">
        <motion.div
          className="mb-6 flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="size-2.5 animate-pulse rounded-full bg-emerald-500" />
          <span className="text-sm font-medium text-muted-foreground">
            Available for new projects
          </span>
        </motion.div>
        <motion.h1
          className="mb-6 text-4xl leading-[1.1] font-extrabold tracking-tight md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Munkhjin Nyamdorj
        </motion.h1>
        <motion.p
          className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Senior full-stack developer with 7 years of experience in web
          application development, API integration, and system building.
          Experienced in React, Node.js, and building complete SaaS applications
          from initial version to production use with thousands of users.
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-bold text-primary-foreground transition-colors hover:bg-primary/80"
            href="#contact"
          >
            Start a Project
            <ArrowRight data-icon="inline-end" />
          </a>
          <a
            className="rounded-xl border border-border bg-surface-container-highest px-8 py-4 font-bold text-foreground transition-colors hover:bg-surface-bright"
            href="#services"
          >
            What I Do
          </a>
        </motion.div>
      </div>
      <motion.div
        className="relative mb-12 flex-shrink-0 lg:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="absolute inset-0 rounded-full bg-secondary/20 blur-3xl" />
        <div className="relative size-64 md:size-80 lg:size-96">
          <Image
            alt="Munkhjin Nyamdorj - Full-Stack Developer"
            src="/profile.png"
            fill
            className="rounded-full border-4 border-border/20 object-cover shadow-2xl"
            priority
          />
        </div>
      </motion.div>
    </section>
  )
}
