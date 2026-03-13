import Section from "@/components/ui/Section"
import Timeline from "@/components/marketing/Timeline"
import type { TimelineMilestone } from "@/types/content"

type ProgressionSectionProps = {
  milestones: TimelineMilestone[]
}

export default function ProgressionSection({
  milestones,
}: ProgressionSectionProps) {
  return (
    <Section id="progression" spacing="tight">
      <Timeline milestones={milestones} defaultActiveIndex={0} />
    </Section>
  )
}