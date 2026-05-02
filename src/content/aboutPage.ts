export const aboutPageContent = {
  hero: {
    eyebrow: "About",
    title: "I look past the request and build the system underneath it.",
    subtitle:
      "Businesses ask for websites, dashboards, marketing, tools, automations, or workflows. I look for the broken handoff, scattered data, unclear process, or missing structure underneath — then translate it into something usable.",
    primaryCta: {
      label: "View the Work",
      href: "/work",
    },
    secondaryCta: {
      label: "How I Think",
      href: "#implementation-loop",
    },
  },

  image: {
    src: "/ashlee-seated.png",
    alt: "Ashlee Herken seated for the StormyOps about page",
  },

  requestVsReality: {
    eyebrow: "Systems thinking",
    title: "The request is rarely the real problem.",
    intro:
      "The visible request is usually only the starting point. The real value comes from finding the system problem underneath it.",
    items: [
      {
        project: "HEM Automotive",
        askedFor: "More marketing",
        found: "No structured follow-up, retention, or shop communication system",
        outcome:
          "Connected acquisition, call tracking, customer behavior, internal communication gaps, and operational follow-through into one larger systems problem.",
      },
      {
        project: "Vehicle Inventory System",
        askedFor: "A way to list vehicles online",
        found: "A need for structured inventory data, admin workflows, and ownership logic",
        outcome:
          "Built an inventory workflow around VINs, vehicle details, tenant ownership, dynamic fields, timestamps, and soft-delete logic.",
      },
      {
        project: "Dreiling Chiropractic",
        askedFor: "A simple website",
        found: "Patient confusion around the walk-in model and business transition",
        outcome:
          "Created a focused site that clarified walk-in-only care, location expectations, and brand continuity after a name change.",
      },
      {
        project: "Skynetrix",
        askedFor: "Automotive SaaS workflows",
        found: "Multi-role operational complexity across customers, shops, vehicles, payments, and usage",
        outcome:
          "Designed around tenant isolation, role-based access, vehicle ownership, quote-to-payment logic, and usage-based billing.",
      },
    ],
  },

  pattern: {
    eyebrow: "The pattern",
    title: "I kept seeing the same failure points.",
    body:
      "The problem was almost never just the surface request. It was the system underneath it: communication that depended on memory, data that did not create clarity, workflows that broke at handoffs, and tools that made sense in theory but failed in real use.",
    items: [
      {
        title: "Workflows depended on memory",
        body:
          "If a process only works because one person remembers what happens next, it is fragile. I look for the places where steps, statuses, ownership, and follow-up need to become visible and repeatable.",
      },
      {
        title: "Data existed but did not guide action",
        body:
          "Information only matters when it helps someone decide, validate, follow up, or move work forward. I care about how data is structured, who can use it, and what decision it supports.",
      },
      {
        title: "Users were working around the system",
        body:
          "When people avoid the tool, duplicate work, chase answers manually, or rely on side conversations, the implementation has not actually landed.",
      },
    ],
  },

  background: {
    eyebrow: "Background",
    title: "My background is nontraditional. That is the point.",
    body:
      "Science taught me to observe before assuming. Statistics taught me to make data tell the correct story. Marketing taught me to understand behavior, friction, trust, and decision-making. Software gave me the tools to turn those observations into systems people can actually use.",
    items: [
      {
        label: "Science",
        value: "Observe carefully. Test assumptions. Find weak points.",
      },
      {
        label: "Statistics",
        value: "Use data to tell the correct story, not just any story.",
      },
      {
        label: "Marketing",
        value: "Understand behavior, trust, decision-making, and friction.",
      },
      {
        label: "Software",
        value: "Turn messy workflows into structured tools and systems.",
      },
    ],
  },

  implementationLoop: {
    eyebrow: "Implementation loop",
    title: "How I move from ambiguity to something usable",
    steps: [
      {
        step: "01",
        title: "Watch the real workflow",
        body:
          "What people say matters. What they do when the system breaks matters more. I look at how work actually happens before deciding what should be built or configured.",
      },
      {
        step: "02",
        title: "Find the failure point",
        body:
          "I look for broken handoffs, unclear ownership, missing validation, scattered data, role confusion, and places where users lose trust.",
      },
      {
        step: "03",
        title: "Translate it into structure",
        body:
          "I turn messy processes into requirements, workflows, statuses, permissions, data relationships, API logic, validation rules, and user flows.",
      },
      {
        step: "04",
        title: "Test it against reality",
        body:
          "A system is not done when it works once. It is done when it holds up through real users, real data, edge cases, and pressure.",
      },
    ],
  },

  technicalPositioning: {
    eyebrow: "Technical lane",
    title: "I sit between business requirements and technical execution.",
    body:
      "I am strongest in the space where customer workflows, product logic, data, APIs, and implementation decisions meet. I map workflows, structure data, reason through integrations, define validation logic, test edge cases, troubleshoot system behavior, and communicate what needs to happen across product, engineering, and customer-facing teams.",
  },

  endUserFocus: {
    eyebrow: "End-user lens",
    title: "I care about the people stuck using the system after launch.",
    body:
      "The business may buy the software, but the end user decides whether it actually works. I naturally advocate for the people expected to use, trust, or be affected by the system — customers, staff, patients, technicians, advisors, admins, and anyone else dealing with the workflow after implementation. If the system makes their life harder, it is not done.",
  },

  proof: {
    eyebrow: "Proof",
    title: "The case studies are the receipts.",
    intro:
      "This portfolio is not just a gallery of finished projects. It is a record of how I think through requirements, workflows, architecture, implementation, and delivery.",
    items: [
      {
        title: "HEM Automotive",
        label: "Marketing request → operational systems insight",
        body:
          "HEM showed me how often a visible marketing problem is connected to deeper operational gaps. I worked across website strategy, inventory workflows, paid acquisition, call tracking, customer behavior, and revenue analysis while identifying issues around communication, retention, and customer follow-up.",
        href: "/work/hem-automotive",
      },
      {
        title: "Vehicle Inventory System",
        label: "Manual listings → structured inventory workflow",
        body:
          "I built a vehicle inventory system that turned informal listing management into a structured workflow with VIN, make, model, year, trim, mileage, drivetrain, engine, fuel type, colors, features, tenant ownership, organizational relationships, dynamic fields, timestamps, and soft-delete logic.",
        href: "/work/vehicle-inventory-system",
      },
      {
        title: "Skynetrix",
        label: "Automotive operations → role-aware SaaS architecture",
        body:
          "Skynetrix reflects my broader systems thinking: tenant isolation, customer records, vehicle ownership, quote-to-payment workflows, usage-based billing, Redis/BullMQ tracking, role-based permissions, and multi-role automotive operations.",
        href: "/work/skynetrix",
      },
      {
        title: "StormyOps CMS",
        label: "Static portfolio → content operations system",
        body:
          "StormyOps CMS is the admin system behind this portfolio, designed to manage posts, media, previews, comments, settings, profile data, SEO fields, and publishing workflows so the site can operate as a living proof system.",
        href: "/work/stormyops-cms",
      },
      {
        title: "Dreiling Chiropractic",
        label: "Limited direction → patient-facing clarity",
        body:
          "Dreiling Chiropractic required turning limited direction into a clear public-facing site that explained the walk-in-only model, reduced patient confusion, and preserved trust during a business name transition.",
        href: "/work/dreiling-chiropractic",
      },
    ],
  },

  currentFocus: {
    eyebrow: "Current focus",
    title: "The work I am built for",
    body:
      "I am focused on technical implementation, solutions, onboarding, and product delivery roles where I can own the path from discovery to go-live. I want to be close enough to customers to understand the real workflow, technical enough to structure the solution, and cross-functional enough to help product, engineering, and customer teams move in the same direction.",
    secondary:
      "The right fit is not pure support, pure data cleanup, or pure development in isolation. The right fit is implementation work with complexity: APIs, workflows, configuration, validation, customer context, and enough ownership to turn ambiguity into something usable.",
    roles: [
      "Technical Implementation",
      "Solutions Consulting",
      "SaaS Onboarding",
      "Product Delivery",
      "Workflow Systems",
      "API/Data Validation",
    ],
  },

  cta: {
    title: "Want to see how I think through systems?",
    body:
      "The About page explains the lens. The case studies show the work — how I identify the real problem, structure the system, and connect implementation decisions to real outcomes.",
    primaryLabel: "View Case Studies",
    primaryHref: "/work",
    secondaryLabel: "Contact Me",
    secondaryHref: "/contact",
  },
}