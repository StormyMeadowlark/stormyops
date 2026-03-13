import Section from "@/components/ui/Section"
import CapabilitiesLanes from "@/components/marketing/CapabilitiesLanes"
import type { CapabilityLane } from "@/types/content"

type CapabilitiesSectionProps = {
  lanes: CapabilityLane[]
}

export default function CapabilitiesSection({ lanes }: CapabilitiesSectionProps) {
  return (
    <Section id="capabilities" spacing="tight">
      <CapabilitiesLanes
        lanes={lanes}
        title="Delivery Lenses"
        blurb="Implementation is the throughline. These are the lenses I use to ship systems people adopt."
        defaultActiveKey="implementation"
      />
    </Section>
  )
}