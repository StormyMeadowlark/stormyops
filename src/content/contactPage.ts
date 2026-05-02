import type { ContactPageContent } from "@/types/contact"

export const contactPageContent: ContactPageContent = {
  hero: {
    eyebrow: "Contact",
    title: "Want to talk through a role, project, or system problem?",
    subtitle:
      "Send me a message through the form below. It works like a simple email: tell me who you are, where you’re coming from, and what you want to discuss.",
  },

  form: {
    title: "Send a message",
    intro:
      "I keep direct contact information off public pages to reduce scraping and keep communication centralized.",
    submitLabel: "Send Message",
    sendingLabel: "Sending...",
    successTitle: "Message sent.",
    successMessage:
      "You’ll receive a confirmation email with a copy of your submission and links to explore more of the portfolio.",
  },

  sidePanel: {
    eyebrow: "Best reasons to reach out",
    title: "This form is for real conversations.",
    body:
      "I’m most interested in opportunities where systems, workflows, customers, data, and implementation overlap.",
    items: [
      "Implementation, onboarding, or technical delivery roles",
      "SaaS workflow, configuration, or systems-focused opportunities",
      "Questions about my case studies or project work",
      "Client-facing roles that need both customer context and technical structure",
    ],
  },
}