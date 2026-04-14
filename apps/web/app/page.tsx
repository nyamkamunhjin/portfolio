import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { MetricsSection } from "@/components/metrics-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { FooterSection } from "@/components/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Munkhjin Nyamdorj | Full-Stack Developer Portfolio",
  description:
    "Portfolio of Munkhjin Nyamdorj — Senior Full-Stack Developer with 7 years of experience in AI integration, React, Node.js, and SaaS development. View projects, experience, and get in touch.",
  alternates: {
    canonical: "/",
  },
}

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <HeroSection />
        <MetricsSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}
