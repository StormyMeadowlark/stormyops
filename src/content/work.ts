import type { Project } from "@/types/content"

export const projects: Project[] = [
  {
    slug: "skynetrix",
    title: "Skynetrix: Multi-Tenant SaaS Backend Architecture",
    description:
      "Designed and implemented a backend-first multi-tenant SaaS architecture for automotive shop operations. Built JWT-based RBAC, usage-based billing, Stripe payment orchestration, and Dockerized services with an early-stage Heroku deployment.",
    badges: [
      { label: "Multi-Tenant SaaS" },
      { label: "JWT RBAC" },
      { label: "Usage-Based Billing" },
      { label: "Dockerized Services" },
      { label: "Stripe Integration" },
    ],
    highlights: [
      {
        title: "Tenant & Role Architecture",
        body: "Implemented JWT-based RBAC across Platform Admin, Tenant Admin, Admin, Shop, and User roles with tenant-isolated data modeling and centralized API gateway enforcement.",
      },
      {
        title: "Operational Workflow Modeling",
        body: "Modeled full service lifecycle (job catalog → estimate → quote → repair order → invoice → payment) with vehicle management and shop/group membership structure.",
      },
      {
        title: "Billing & Async Infrastructure",
        body: "Designed usage-based billing for shops using Redis + BullMQ, integrated Stripe for shop subscriptions, customer charges, and refund processing, and containerized services with Docker for structured deployment.",
      },
    ],
    owned:
      "Owned system architecture, API gateway design, RBAC enforcement, billing logic, Stripe integration, Redis/BullMQ usage tracking, Dockerization, and initial Heroku deployment.",
    stack: ["Node", "Express", "MongoDB", "Redis", "BullMQ", "Stripe", "Docker", "Heroku"],
  },
  {
    slug: "vin-vision",
    title: "VIN Vision: VIN OCR & Decode Automation Service",
    description:
      "Built a VIN extraction and decoding service that converts uploaded vehicle images into structured vehicle data using Google Cloud Vision API and the NHTSA VIN Decoder API.",
    badges: [
      { label: "Google Cloud Vision API" },
      { label: "Image Preprocessing" },
      { label: "OCR Automation" },
      { label: "API Integration" },
      { label: "Backend Service" },
    ],
    highlights: [
      {
        title: "Image Preprocessing",
        body: "Implemented image adjustments (noise reduction, contrast enhancement) prior to OCR to improve VIN recognition accuracy. Required correct image orientation for reliable extraction.",
      },
      {
        title: "Image → VIN Extraction",
        body: "Processed uploaded vehicle images using Google Cloud Vision OCR to extract VIN characters.",
      },
      {
        title: "VIN Decoding Pipeline",
        body: "Sent validated VIN to the NHTSA VIN Decoder API to return structured vehicle data including year, make, and model.",
      },
      {
        title: "Service Architecture",
        body: "Built a modular Node.js service using Multer for file uploads, enabling automated intake integration into backend systems.",
      },
    ],
    owned:
      "Image preprocessing pipeline, OCR integration, VIN validation logic, NHTSA API orchestration, Multer file handling, and backend service design.",
    stack: ["JavaScript", "Node", "Google Cloud Vision API", "NHTSA API", "Multer"],
  },
  {
    slug: "hem",
    title: "HEM Systems: Full-Stack Marketing & Inventory Platform",
    description:
      "Designed and deployed a full-stack marketing website and authenticated admin system for managing live vehicle inventory, customer inquiries, and operational workflows.",
    badges: [
      { label: "Full-Stack MERN" },
      { label: "JWT Authentication" },
      { label: "Admin Dashboard" },
      { label: "Live Deployment" },
      { label: "Cloud Storage" },
    ],
    highlights: [
      {
        title: "Marketing Website + Admin System",
        body: "Built a public-facing vehicle sales website with authenticated JWT-based RBAC backend allowing admins to securely log in and manage inventory listings.",
      },
      {
        title: "Vehicle Inventory Workflow",
        body: "Implemented vehicle lifecycle management with CRUD operations, state transitions, and controlled listing updates.",
      },
      {
        title: "Image Upload & Cloud Storage",
        body: "Integrated Multer for file uploads with enforced limits (max 40 files and size restrictions), storing vehicle images on a DigitalOcean Droplet.",
      },
      {
        title: "Contact & Email Automation",
        body: "Built contact form submission pipeline using Nodemailer and SendGrid for transactional messaging and inquiry routing.",
      },
      {
        title: "Deployment & Monitoring",
        body: "Deployed frontend and backend via Heroku and Firebase, integrated Google Analytics for traffic and engagement tracking.",
      },
    ],
    owned:
      "End-to-end system design including frontend UI, backend API development, JWT authentication, file upload handling, cloud storage integration, email automation, analytics tracking, and production deployment.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Multer",
      "DigitalOcean",
      "Heroku",
      "Firebase",
      "SendGrid",
      "Nodemailer",
      "Google Analytics",
    ],
  },
  {
    slug: "growth-ops",
    title: "Growth Ops: Full-Funnel Marketing & Revenue Attribution",
    description:
      "Led end-to-end marketing strategy and execution for HEM Automotive, serving as the sole marketing function responsible for brand identity, paid acquisition, content, and revenue tracking.",
    badges: [
      { label: "Paid Acquisition" },
      { label: "Revenue Attribution" },
      { label: "Brand Development" },
      { label: "Full-Funnel Strategy" },
    ],
    highlights: [
      {
        title: "Brand & Positioning",
        body: "Designed company logo, developed brand identity and tagline, wrote all website copy, and established consistent messaging across digital and offline channels.",
      },
      {
        title: "Paid Advertising & Lead Generation",
        body: "Managed Facebook, Google, and Yelp ad campaigns; optimized targeting and messaging to drive inbound calls and service bookings.",
      },
      {
        title: "Revenue Attribution",
        body: "Tracked inbound calls and campaign performance to tie specific advertising efforts to increased shop revenue.",
      },
      {
        title: "Content & Social Execution",
        body: "Produced video content and graphics for YouTube, Facebook, and TikTok; managed social media presence and engagement.",
      },
      {
        title: "Market Research & Planning",
        body: "Conducted competitive market research and developed marketing plans supporting business relocation and growth strategy.",
      },
    ],
    owned:
      "Owned brand development, paid media strategy, copywriting, campaign execution, content production, analytics tracking, competitive research, and revenue attribution.",
    stack: [
      "Facebook Ads",
      "Google Ads",
      "Yelp Ads",
      "Google Analytics",
      "Content Production",
      "Copywriting",
      "Market Research",
    ],
  },
]