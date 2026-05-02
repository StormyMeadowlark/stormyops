export type ContactPageContent = {
  hero: {
    eyebrow: string
    title: string
    subtitle: string
  }

  form: {
    title: string
    intro: string
    submitLabel: string
    sendingLabel: string
    successTitle: string
    successMessage: string
  }

  sidePanel: {
    eyebrow: string
    title: string
    body: string
    items: string[]
  }
}

export type ContactFormState = {
  name: string
  company: string
  email: string
  subject: string
  message: string
  website: string
}