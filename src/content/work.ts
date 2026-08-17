import type { ProjectSummary } from "@/types/content"

export const projects: ProjectSummary[] = [
  {
    slug: "skynetrix",
    title: "Skynetrix",
    subtitle: "Multi-Tenant Automotive SaaS Backend",
    category: "systems-architecture",
    description:
      "Backend-first platform architecture for automotive repair and sales shops, combining tenant management, shop workflows, customer data, usage-based billing, and payments.",
    cardDescription:
      "Designed a backend-first SaaS architecture for automotive operations with tenant isolation, RBAC, usage-based billing, and repair workflow modeling.",
    featured: true,
    featuredRank: 1,
    implementationFocus:
      "Modeled complex automotive workflows into modular services with tenant-aware data, role-based access, Stripe payments, and usage billing.",
    badges: [
      { label: "Multi-Tenant SaaS" },
      { label: "RBAC" },
      { label: "Usage Billing" },
      { label: "Stripe" },
      { label: "Microservices" },
    ],
    stack: ["Node", "Express", "MongoDB", "Redis", "BullMQ", "Stripe", "Docker"],
  },
  {
    slug: "stormyops-cms",
    title: "StormyOps CMS",
    subtitle: "Rules-Driven Content Management System",
    category: "systems-architecture",
    description:
      "A configurable CMS designed around publishing readiness, SEO validation, scheduling, media handling, comments, and settings-driven behavior.",
    cardDescription:
      "Built a rules-driven CMS where publishing, validation, SEO, scheduling, and moderation are controlled through configurable system settings.",
    featured: true,
    featuredRank: 2,
    implementationFocus:
      "Designed the CMS around a validation and settings engine so content readiness is system-controlled instead of manually reviewed.",
    badges: [
      { label: "CMS" },
      { label: "Rules Engine" },
      { label: "SEO Validation" },
      { label: "Settings Architecture" },
    ],
    stack: ["Next.js", "Tailwind", "Node", "Express", "MongoDB"],
  },
  {
    slug: "vehicle-inventory-system",
    title: "Vehicle Inventory Management System",
    subtitle: "Custom Online Inventory Pipeline",
    category: "systems-architecture",
    description:
      "A custom inventory workflow for adding, storing, and displaying vehicles for sale on an automotive business website.",
    cardDescription:
      "Built a MERN-based vehicle inventory system with admin intake, image uploads, cloud storage, and dynamic public listings.",
    implementationFocus:
      "Turned manual vehicle page creation into a repeatable listing pipeline with backend storage, image handling, and frontend rendering.",
    badges: [
      { label: "MERN" },
      { label: "Inventory Workflow" },
      { label: "Image Uploads" },
      { label: "DigitalOcean" },
    ],
    stack: ["React", "Vite", "Node", "Express", "MongoDB", "Multer", "DigitalOcean"],
  },
  {
    slug: "vin-vision",
    title: "VIN Vision",
    subtitle: "VIN OCR & Decode Automation",
    category: "systems-architecture",
    description:
      "A backend service that extracts VINs from uploaded vehicle images and decodes them into structured vehicle data.",
    cardDescription:
      "Built an OCR pipeline that processes VIN images, extracts the 17-character VIN, and decodes vehicle data through the NHTSA API.",
    implementationFocus:
      "Automated a high-error manual intake task by connecting image preprocessing, OCR, VIN parsing, and external vehicle data APIs.",
    badges: [
      { label: "OCR" },
      { label: "Google Cloud Vision" },
      { label: "NHTSA API" },
      { label: "Image Processing" },
    ],
    stack: ["Node", "Google Cloud Vision API", "NHTSA API", "Multer"],
  },
  {
    slug: "hem-automotive",
    title: "HEM Automotive",
    subtitle: "Multi-Channel Growth & Business Systems",
    category: "implementation-operations",
    description:
      "Marketing, website, advertising, content, inventory visibility, and growth systems for an automotive repair and sales business.",
    cardDescription:
      "Led marketing, web presence, paid acquisition, content, and early customer retention strategy for an automotive repair and sales shop.",
    featured: true,
    featuredRank: 3,
    implementationFocus:
      "Built a growth system from scratch by connecting website conversion paths, social content, paid ads, manual attribution, and customer retention strategy.",
    badges: [
      { label: "Growth Strategy" },
      { label: "Google Ads" },
      { label: "Revenue Attribution" },
      { label: "Content Systems" },
    ],
    stack: ["Google Ads", "Facebook", "TikTok", "Google Analytics", "Copywriting"],
  },
  {
    slug: "residential-network-implementation",
    title: "Residential Network Implementation",
    subtitle: "Wi-Fi 7 Mesh, DNS & VPN Infrastructure",
    category: "implementation-operations",
    description:
      "A whole-home network implementation combining Wi-Fi 7 mesh coverage, custom Ethernet backhaul, DNS visibility and filtering, guest access, and dedicated VPN routing.",
    cardDescription:
      "Rebuilt an underperforming 1 Gig fiber network with Wi-Fi 7 mesh, custom Ethernet backhaul, NextDNS controls, VPN routing, and structured troubleshooting.",
    implementationFocus:
      "Turned inconsistent whole-home connectivity into a reliable network by evaluating hardware, designing the topology, installing and testing Ethernet, configuring DNS and VPN services, validating performance, and troubleshooting user-facing failures.",
    badges: [
      { label: "Technical Implementation" },
      { label: "Wi-Fi 7 Mesh" },
      { label: "DNS" },
      { label: "VPN Routing" },
      { label: "Troubleshooting" },
    ],
    stack: [
      "ASUS ZenWiFi BT6",
      "AT&T Fiber",
      "NextDNS",
      "Proton VPN",
      "Cat6 Ethernet",
    ],
  },
  {
    slug: "signalscout",
    title: "SignalScout",
    subtitle: "SEO & Engagement Readiness Scanner",
    category: "product-tools",
    description:
      "A URL analysis tool that evaluates SEO, content quality, Open Graph data, and social share readiness.",
    cardDescription:
      "Built a URL scanner that turns manual SEO and social preview checks into a repeatable analysis workflow with scores and recommendations.",
    implementationFocus:
      "Designed a rules-based scan flow that fetches page data, parses metadata, scores readiness, and returns actionable content recommendations.",
    badges: [
      { label: "SEO Analysis" },
      { label: "Open Graph" },
      { label: "Cheerio" },
      { label: "AI Recommendations" },
    ],
    stack: ["Next.js", "TypeScript", "Node", "Express", "PostgreSQL", "Prisma", "Cheerio"],
  },
  {
    slug: "resume-writer",
    title: "Resume Writer",
    subtitle: "AI Resume & Hiring Utility",
    category: "product-tools",
    description:
      "An AI-assisted tool that turns raw experience and job descriptions into targeted resumes, cover letters, and job descriptions.",
    cardDescription:
      "Built an AI-assisted resume and cover letter generator designed for automotive job seekers and shop hiring workflows.",
    implementationFocus:
      "Created a structured prompt flow that turns messy user input into accurate, job-specific application materials without overstating experience.",
    badges: [
      { label: "AI Tooling" },
      { label: "Prompt Engineering" },
      { label: "PDF Export" },
      { label: "Hiring Workflow" },
    ],
    stack: ["Next.js", "Tailwind", "Node", "FastAPI", "OpenAI", "PDF Export"],
  },

  {
    slug: "dreiling-chiropractic",
    title: "Dreiling Chiropractic",
    subtitle: "Custom One-Page Business Website",
    category: "client-websites",
    description:
      "A custom one-page website built to clarify a walk-in-only chiropractic model and establish a new online presence.",
    cardDescription:
      "Delivered a custom one-page site under tight budget, timeline, and discovery constraints, with Google Maps and Facebook feed integration.",
    implementationFocus:
      "Translated unclear business requirements into a simple website structure that reduced customer confusion around walk-ins, location, and provider continuity.",
    badges: [
      { label: "Client Website" },
      { label: "React + Vite" },
      { label: "Google Maps" },
      { label: "Facebook Feed" },
    ],
    stack: ["React", "Vite", "Google Maps API", "Facebook Embed", "DNS"],
  },
  {
    slug: "stormy-meadowlark",
    title: "Stormy Meadowlark",
    subtitle: "Automotive Marketing Website & Early CMS",
    category: "client-websites",
    description:
      "A marketing site and early blog backend for an automotive growth business focused on helping shops attract and retain customers.",
    cardDescription:
      "Built a marketing website with service positioning, contact flows, pricing visibility, and an early markdown-based blog publishing system.",
    implementationFocus:
      "Used the project as a first pass at connecting marketing strategy, backend content publishing, and automotive growth positioning.",
    badges: [
      { label: "Marketing Site" },
      { label: "Early CMS" },
      { label: "MERN" },
      { label: "Markdown Content" },
    ],
    stack: ["React", "Node", "Express", "MongoDB", "Markdown"],
  },

  {
    slug: "wedding-saas",
    title: "Wedding SaaS",
    subtitle: "Product Validation & Guest Management Concept",
    category: "brand-validation",
    description:
      "An early-stage SaaS concept validated through bride conversations, focused on RSVP chaos, guest communication, and wedding logistics.",
    cardDescription:
      "Validated a wedding guest management product concept through customer discovery in Facebook groups and repeated pain-point analysis.",
    implementationFocus:
      "Ran discovery before building, identified repeated RSVP and guest management pain, and narrowed the MVP toward a custom wedding site plus RSVP engine.",
    badges: [
      { label: "Customer Discovery" },
      { label: "Validation" },
      { label: "MVP Scoping" },
      { label: "Product Strategy" },
    ],
  },
  {
    slug: "solar-athletics-rebrand",
    title: "Solar Athletics Rebrand",
    subtitle: "Brand Refresh & SVG Asset Standardization",
    category: "brand-validation",
    description:
      "A focused brand refresh for a gymnastics and cheer gym, aligning typography, color, and scalable assets with its space-themed identity.",
    cardDescription:
      "Refined typography, color consistency, and logo assets to make the Solar Athletics brand feel more unified, bold, and scalable.",
    implementationFocus:
      "Converted inconsistent PNG assets into clean SVGs, corrected brand colors, and aligned typography with the gym’s space-themed identity.",
    badges: [
      { label: "Brand Refresh" },
      { label: "SVG Conversion" },
      { label: "Typography" },
      { label: "Visual Identity" },
    ],
    stack: ["Canva", "Adobe Illustrator"],
  },
]