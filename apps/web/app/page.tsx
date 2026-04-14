import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { FooterSection } from "@/components/footer-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Munkhjin Nyamdorj | Full-Stack Developer",
  description:
    "Senior full-stack developer available for contract work. 7 years of experience building SaaS products, AI integrations, and complete systems from MVP to production with thousands of users.",
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
        <ServicesSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  )
}
