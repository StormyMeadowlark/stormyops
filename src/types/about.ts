export type AboutPageContent = {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: {
      label: string
      href: string
    }
    secondaryCta: {
      label: string
      href: string
    }
  }

  image: {
    src: string
    alt: string
  }

  requestVsReality: {
    eyebrow: string
    title: string
    intro: string
    items: {
      project: string
      askedFor: string
      found: string
      outcome: string
    }[]
  }

  pattern: {
    eyebrow: string
    title: string
    body: string
    items: {
      title: string
      body: string
    }[]
  }

  background: {
    eyebrow: string
    title: string
    body: string
    items: {
      label: string
      value: string
    }[]
  }

  implementationLoop: {
    eyebrow: string
    title: string
    steps: {
      step: string
      title: string
      body: string
    }[]
  }

  technicalPositioning: {
    eyebrow: string
    title: string
    body: string
  }

  endUserFocus: {
    eyebrow: string
    title: string
    body: string
  }

  proof: {
    eyebrow: string
    title: string
    intro: string
    items: {
      title: string
      label: string
      body: string
      href: string
    }[]
  }

  currentFocus: {
    eyebrow: string
    title: string
    body: string
    secondary: string
    roles: string[]
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