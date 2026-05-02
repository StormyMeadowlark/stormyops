import type { Metadata } from "next"
import Nav from "@/components/marketing/Nav"
import ResumeHero from "@/components/marketing/resume/ResumeHero"
import ResumeViewer from "@/components/marketing/resume/ResumeViewer"
import ResumeHighlights from "@/components/marketing/resume/ResumeHighlights"
import SelectedImplementationProof from "@/components/marketing/resume/SelectedImplementationProof"
import ResumeCTA from "@/components/marketing/resume/ResumeCTA"
import { resumePageContent } from "@/content/resumePage"

export const metadata: Metadata = {
  title: "Resume | Ashlee Herken",
  description:
    "Download and preview Ashlee Herken's implementation specialist resume focused on SaaS onboarding, workflow systems, client delivery, and technical implementation.",
}

export default function ResumePage() {
  return (
    <main className="stormyops-bg min-h-screen text-white">
      <Nav />

      <ResumeHero hero={resumePageContent.hero} />

      <ResumeViewer
        resume={resumePageContent.primaryResume}
        fitSummary={resumePageContent.fitSummary}
      />

      <ResumeHighlights highlights={resumePageContent.highlights} />

      <SelectedImplementationProof
        items={resumePageContent.selectedImplementations}
      />

      <ResumeCTA content={resumePageContent.cta} />
    </main>
  )
}