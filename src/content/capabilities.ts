import type { CapabilityLane } from "@/types/content"

export const capabilityLanes: CapabilityLane[] = [
  {
    key: "implementation",
    label: "Implementation",
    subtitle: "Discovery → launch → adoption",
    summary:
      "I turn ambiguity into a delivery plan: clear requirements, aligned stakeholders, and workflows that hold up after go-live.",
    bullets: [
      "Discovery, workflow mapping, and success criteria",
      "Milestones, risks, dependencies, and stakeholder alignment",
      "Enablement: training, documentation, and stabilization",
    ],
    tags: ["Discovery", "Enablement", "Go-live", "Stakeholders", "QA"],
  },
  {
    key: "engineering",
    label: "Engineering",
    subtitle: "Systems that scale",
    summary:
      "I build operational backends that support real workflows—permissions, billing logic, automation, and reliability.",
    bullets: [
      "API/service design driven by operational needs",
      "JWT RBAC + multi-tenant patterns and governance",
      "Automation, queues, logging, and observability mindset",
    ],
    tags: ["Node", "REST", "RBAC", "Multi-tenant", "Queues", "Logging"],
  },
  {
    key: "data",
    label: "Data",
    subtitle: "Measurement → iteration",
    summary:
      "I define what ‘success’ means, instrument the system, and turn signals into decisions that improve adoption.",
    bullets: [
      "Metric definitions and instrumentation planning",
      "Analysis and reporting for operational decisions",
      "Baseline → test → iterate improvement loops",
    ],
    tags: ["Python", "SQL", "KPIs", "Dashboards", "Experimentation"],
  },
  {
    key: "growth",
    label: "Growth",
    subtitle: "Messaging → performance",
    summary:
      "I connect positioning to execution—consistent messaging, campaign systems, and performance feedback loops.",
    bullets: [
      "Positioning, offer clarity, and messaging structure",
      "Content, ads, and repeatable campaign execution",
      "Attribution, performance tracking, and optimization",
    ],
    tags: ["Messaging", "Content", "Ads", "Video", "Analytics"],
  },
]