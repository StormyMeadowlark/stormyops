import type { HeroContent } from "@/types/content"

export const heroContent: HeroContent = {
  eyebrow: "Ashlee Herken",
  headingLine1: "Operator. Engineer.",
  headingLine2: "Implementation Specialist.",
  intro:
    "I design and implement operational systems across software, data, and growth infrastructure.",
  subtext:
    "Built SaaS platforms, automation systems, analytics pipelines, and business infrastructure used in real environments.",
  ctaPrimary: {
    label: "View My Work",
    href: "/work",
  },
  ctaSecondary: {
    label: "Download Resume",
    href: "/Herken_Resume_Implementation_Specialist.pdf",
    download: true,
  },
  footerText:
    "Skynetrix • VIN Vision • CRM + Sales Systems • Growth + Brand Ops • Data Analytics",
  image: {
    src: "/ashlee.png",
    alt: "Portrait of Ashlee Herken",
  },
}