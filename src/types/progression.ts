export type ProgressionTimelineItem = {
  date: string
  title: string
  subtitle: string
  institution: string
  summary: string
  details?: string[]
  skills: string[]
  connection: string
}

export type ProgressionContent = {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
  }

  intro: {
    eyebrow: string
    title: string
    body: string
  }

  timeline: ProgressionTimelineItem[]

  turningPoint: {
    eyebrow: string
    title: string
    body: string
  }

  compounding: {
    eyebrow: string
    title: string
    intro: string
    items: {
      label: string
      title: string
      body: string
    }[]
  }

  currentLens: {
    eyebrow: string
    title: string
    body: string
  }

  hiringTakeaway: {
    title: string
    body: string
  }

  cta: {
    title: string
    body: string
    primaryLabel: string
    primaryHref: string
    secondaryLabel: string
    secondaryHref: string
  }
}