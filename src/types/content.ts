export type Badge = {
  label: string
}

export type ProjectHighlight = {
  title: string
  body: string
}

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  description: string
  badges?: Badge[]
  highlights?: ProjectHighlight[]
  owned?: string
  stack?: string[]
  links?: ProjectLink[]
}

export type HeroContent = {
  eyebrow: string
  headingLine1: string
  headingLine2: string
  intro: string
  subtext: string
  ctaPrimary: {
    label: string
    href: string
  }
  ctaSecondary: {
    label: string
    href: string
    download?: boolean
  }
  footerText: string
  image: {
    src: string
    alt: string
  }
}

export type AboutCard = {
  frontTitle: string
  frontBullets: string[]
  backTitle: string
  backBullets: string[]
}

export type AboutContent = {
  title: string
  paragraphs: string[]
  image: {
    src: string
    alt: string
  }
  cards: AboutCard[]
}

export type LaneKey = string

export type CapabilityLane = {
  key: LaneKey
  label: string
  subtitle: string
  summary: string
  bullets: string[]
  tags: string[]
}

export type TimelineMilestone = {
  date: string
  title: string
  detail: string
}