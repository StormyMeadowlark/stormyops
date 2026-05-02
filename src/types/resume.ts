export type ResumePageContent = {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
  }

  primaryResume: {
    title: string
    role: string
    description: string
    file: string
    downloadLabel: string
    previewLabel: string
  }

  fitSummary: {
    title: string
    intro: string
    roles: string[]
  }

  highlights: {
    title: string
    body: string
  }[]

  selectedImplementations: {
    title: string
    role: string
    body: string
    href: string
  }[]

  cta: {
    title: string
    body: string
    primaryLabel: string
    primaryHref: string
    secondaryLabel: string
    secondaryHref: string
  }
}