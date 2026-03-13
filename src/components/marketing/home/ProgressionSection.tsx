import Timeline from "@/components/marketing/Timeline"
import type { TimelineMilestone } from "@/types/content"

type ProgressionSectionProps = {
  milestones: TimelineMilestone[]
}

export default function ProgressionSection({
  milestones,
}: ProgressionSectionProps) {
  return (
    <section id="progression" className="max-w-7xl mx-auto px-6">
      <Timeline milestones={milestones} defaultActiveIndex={0} />
    </section>
  )
}