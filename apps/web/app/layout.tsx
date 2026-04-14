import { Geist, JetBrains_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@workspace/ui/lib/utils"
import type { Metadata, Viewport } from "next"

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const viewport: Viewport = {
  themeColor: "#0e0e0e",
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Munkhjin Nyamdorj | Full-Stack Developer",
  description:
    "Senior software engineer with 7 years of experience specializing in AI integration and full-stack development. Expert in React, Node.js, and building SaaS systems from scratch.",
  keywords: [
    "Munkhjin Nyamdorj",
    "Full-Stack Developer",
    "Senior Software Engineer",
    "React",
    "Node.js",
    "TypeScript",
    "Next.js",
    "AI Integration",
    "SaaS",
    "AWS",
  ],
  authors: [{ name: "Munkhjin Nyamdorj" }],
  creator: "Munkhjin Nyamdorj",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Munkhjin Nyamdorj | Full-Stack Developer",
    description:
      "Senior software engineer with 7 years of experience specializing in AI integration and full-stack development.",
    siteName: "Munkhjin Nyamdorj",
  },
  twitter: {
    card: "summary_large_image",
    title: "Munkhjin Nyamdorj | Full-Stack Developer",
    description:
      "Senior software engineer with 7 years of experience specializing in AI integration and full-stack development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        "font-mono",
        jetbrainsMono.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Munkhjin Nyamdorj",
              jobTitle: "Senior Full-Stack Developer",
              email: "nyamkamunhjin@gmail.com",
              knowsAbout: [
                "React",
                "Node.js",
                "TypeScript",
                "Next.js",
                "AWS",
                "AI Integration",
                "Full-Stack Development",
                "SaaS",
              ],
              sameAs: [
                "https://github.com/nyamkamunhjin",
                "https://linkedin.com/in/nyamkamunhjin",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
