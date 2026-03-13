import { notFound } from "next/navigation"
import { projects } from "@/content/work"

type ProjectPageProps = {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) notFound()

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="mt-6 text-slate-300">{project.description}</p>
      </div>
    </main>
  )
}