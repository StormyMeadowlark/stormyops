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

export type ProjectCategory =
  | "systems-architecture"
  | "implementation-operations"
  | "product-tools"
  | "client-websites"
  | "brand-validation"

export type ProjectSummary = {
  slug: string
  title: string
  subtitle?: string
  description: string
  category: ProjectCategory
  cardDescription?: string
  featured?: boolean
  featuredRank?: number
  badges?: Badge[]
  implementationFocus?: string
  highlights?: ProjectHighlight[]
  owned?: string
  stack?: string[]
  links?: ProjectLink[]
}

export type CaseStudy = {
  slug: string

  status?: "Complete" | "In Progress" | "Validation"

  implementation: {
    role: string
    problem: string
    approach: string
    constraints?: string[]
    tradeoffs?: string[]
    outcome?: string
  }

  overview?: {
    whatItIs: string
    whoItIsFor: string
    whatIOwned: string[]
  }

  execution?: {
    title: string
    body?: string
    items?: {
      title: string
      body: string
    }[]
  }[]

  workflows?: {
    title: string
    steps: string[]
  }[]

  results?: {
    title: string
    body: string
  }[]

  reflection?: {
    whatWorked?: string[]
    whatIWouldImprove?: string[]
    keyTakeaway?: string
  }

  visuals?: {
    title: string
    description?: string
    images: {
      src: string
      alt: string
      caption?: string
    }[]
  }[]
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