import CapabilitiesLanes from "@/components/marketing/CapabilitiesLanes"
import type { CapabilityLane } from "@/types/content"

type CapabilitiesSectionProps = {
  lanes: CapabilityLane[]
}

export default function CapabilitiesSection({ lanes }: CapabilitiesSectionProps) {
  return (
    <section id="capabilities" className="max-w-7xl mx-auto px-6 pb-24">
      <CapabilitiesLanes
        lanes={lanes}
        title="Delivery Lenses"
        blurb="Implementation is the throughline. These are the lenses I use to ship systems people adopt."
        defaultActiveKey="implementation"
      />
    </section>
  )
}