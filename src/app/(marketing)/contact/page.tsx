import type { Metadata } from "next"
import Nav from "@/components/marketing/Nav"
import ContactHero from "@/components/marketing/contact/ContactHero"
import ContactForm from "@/components/marketing/contact/ContactForm"
import { contactPageContent } from "@/content/contactPage"

export const metadata: Metadata = {
  title: "Contact | Ashlee Herken",
  description:
    "Contact Ashlee Herken about implementation, SaaS onboarding, workflow systems, technical delivery, and portfolio project work.",
}

export default function ContactPage() {
  return (
    <main className="stormyops-bg min-h-screen text-white">
      <Nav />

      <ContactHero hero={contactPageContent.hero} />

      <ContactForm
        formContent={contactPageContent.form}
        sidePanel={contactPageContent.sidePanel}
      />
    </main>
  )
}