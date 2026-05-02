import type { ResumePageContent } from "@/types/resume"

export const resumePageContent: ResumePageContent = {
  hero: {
    eyebrow: "Resume",
    title: "Technical implementation, workflow systems, and SaaS delivery.",
    subtitle:
      "A focused resume hub for implementation, onboarding, client delivery, workflow configuration, and technical systems roles.",
  },

  primaryResume: {
    title: "Primary Resume",
    role: "Implementation Specialist | SaaS Onboarding & Client Delivery",
    description:
      "Best fit for implementation specialist, SaaS onboarding, client delivery, workflow configuration, and customer-facing technical implementation roles.",
    file: "/Herken_Resume_Implementation_Specialist.pdf",
    downloadLabel: "Download Resume",
    previewLabel: "Preview Resume",
  },

  fitSummary: {
    title: "Best aligned roles",
    intro:
      "This resume is optimized for roles where implementation requires both customer-facing communication and technical systems thinking.",
    roles: [
      "Implementation Specialist",
      "Implementation Consultant",
      "SaaS Onboarding",
      "Client Implementation",
      "Technical Implementation",
      "Product Implementation",
      "Workflow Systems",
      "API/Data Validation",
    ],
  },

  highlights: [
    {
      title: "End-to-end implementation",
      body:
        "Discovery, requirements gathering, workflow mapping, configuration, onboarding, launch support, and post-go-live stabilization.",
    },
    {
      title: "Workflow and systems thinking",
      body:
        "Strong at identifying where processes break down and translating ambiguous business needs into repeatable systems.",
    },
    {
      title: "Client-facing delivery",
      body:
        "Comfortable managing expectations, communicating risks, training users, and supporting adoption after launch.",
    },
    {
      title: "Technical fluency",
      body:
        "Hands-on experience with JavaScript, React, Node.js, Express, REST APIs, SQL, Linux, Git, Postman, Heroku, and API-driven systems.",
    },
  ],

  selectedImplementations: [
    {
      title: "HEM Automotive",
      role: "Implementation Lead",
      body:
        "Implemented website-based intake workflows, inventory visibility, acquisition tracking, and marketing systems for an automotive repair and sales business.",
      href: "/work/hem-automotive",
    },
    {
      title: "Vehicle Inventory System",
      role: "Full-stack project",
      body:
        "Built a custom inventory pipeline with dynamic listings, lifecycle tracking, vehicle data structure, and API-driven frontend integration.",
      href: "/work/vehicle-inventory-system",
    },
    {
      title: "Skynetrix",
      role: "SaaS platform design",
      body:
        "Designed multi-tenant workflows, role-based access, vehicle ownership logic, onboarding flows, payment progression, and usage-based billing concepts.",
      href: "/work/skynetrix",
    },
    {
      title: "Dreiling Chiropractic",
      role: "Implementation Lead",
      body:
        "Delivered a customer-facing website within a one-month timeline, translating limited client input into clearer service communication.",
      href: "/work/dreiling-chiropractic",
    },
  ],

  cta: {
    title: "Want to connect about a role?",
    body:
      "Use the contact form to reach out. The resume gives the summary, and the case studies show the implementation proof behind it.",
    primaryLabel: "Contact Me",
    primaryHref: "/contact",
    secondaryLabel: "View Case Studies",
    secondaryHref: "/work",
  },
}