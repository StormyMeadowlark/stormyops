import type { AboutContent } from "@/types/content"

export const aboutContent: AboutContent = {
  title: "About",
  paragraphs: [
    "I lead implementation by designing structured systems that move from ambiguity to execution with clarity. My foundation in science shaped how I approach complex problems: define assumptions, model workflows, validate outcomes, and iterate based on evidence. That analytical discipline evolved into applied statistics, operational modeling, and ultimately system architecture — where requirements become scalable, role-aware solutions.",
    "I have operated across business and technical environments, aligning implementation with revenue impact, user adoption, and long-term maintainability. Whether directing paid acquisition tied to measurable outcomes or architecting backend systems with RBAC, billing logic, and service integrations, I own delivery end-to-end. My background is diverse, but not fragmented — it compounds into structured execution and practical leadership across complex systems.",
  ],
  image: {
    src: "/ashlee-seated.png",
    alt: "Ashlee Herken seated",
  },
  cards: [
    {
      frontTitle: "Requirements & Systems Design",
      frontBullets: [
        "Translate ambiguity into structured requirements",
        "Architect multi-role workflows",
        "Establish validation and governance checkpoints",
      ],
      backTitle: "Applied in Skynetrix Architecture",
      backBullets: [
        "Designed tenant-isolated model with JWT-based RBAC",
        "Modeled quote → repair order → invoice → payment lifecycle",
        "Implemented usage-based billing with Redis + BullMQ tracking",
      ],
    },
    {
      frontTitle: "Adoption & Business Execution",
      frontBullets: [
        "Align implementation with revenue drivers",
        "Reduce friction across operational roles",
        "Optimize for time-to-value and sustained usage",
      ],
      backTitle: "Applied in HEM Automotive Growth",
      backBullets: [
        "Directed paid acquisition across Facebook, Google, and Yelp",
        "Tied inbound call tracking to revenue performance",
        "Conducted competitive research to inform relocation strategy",
      ],
    },
    {
      frontTitle: "Implementation Leadership",
      frontBullets: [
        "Own delivery from discovery through deployment",
        "Design scalable, role-aware system architecture",
        "Coordinate integrations across services",
      ],
      backTitle: "Applied Across Delivered Systems",
      backBullets: [
        "Built and deployed MERN marketing + inventory platform (JWT admin)",
        "Implemented Stripe payment and refund logic within backend services",
        "Containerized with Docker and deployed early-stage versions to Heroku/Firebase",
      ],
    },
  ],
}