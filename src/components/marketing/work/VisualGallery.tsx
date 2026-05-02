"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import { createPortal } from "react-dom"

type VisualImage = {
  src: string
  alt: string
  caption?: string
}

type VisualGroup = {
  title: string
  description?: string
  images: VisualImage[]
}

type FlattenedImage = VisualImage & {
  groupTitle: string
}

export default function VisualGallery({ groups }: { groups: VisualGroup[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const images = useMemo<FlattenedImage[]>(() => {
    return groups.flatMap((group) =>
      group.images.map((image) => ({
        ...image,
        groupTitle: group.title,
      })),
    )
  }, [groups])

  const activeImage =
    typeof activeIndex === "number" ? images[activeIndex] ?? null : null

  const activeImageNumber =
    typeof activeIndex === "number" ? activeIndex + 1 : 0

  const closeModal = useCallback(() => {
    setActiveIndex(null)
  }, [])

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current
      return (current - 1 + images.length) % images.length
    })
  }, [images.length])

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current
      return (current + 1) % images.length
    })
  }, [images.length])

  useEffect(() => {
    if (activeIndex === null) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeModal()
      if (event.key === "ArrowLeft") showPrevious()
      if (event.key === "ArrowRight") showNext()
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeIndex, closeModal, showPrevious, showNext])

  if (!groups.length) return null

  return (
    <>
      <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-violet-300">
            Visual Proof
          </p>
          <h2 className="mt-2 text-3xl font-bold text-white">
            Screens and artifacts
          </h2>
        </div>

        <div className="mt-8 space-y-12">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xl font-semibold text-white">
                {group.title}
              </h3>

              {group.description ? (
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">
                  {group.description}
                </p>
              ) : null}

              <div className="mt-5 columns-1 gap-5 md:columns-2 lg:columns-3">
                {group.images.map((image) => {
                  const imageIndex = images.findIndex(
                    (item) =>
                      item.src === image.src &&
                      item.groupTitle === group.title,
                  )

                  return (
                    <button
                      key={`${group.title}-${image.src}`}
                      type="button"
                      onClick={() => {
                        if (imageIndex >= 0) setActiveIndex(imageIndex)
                      }}
                      className="mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-slate-950/50 text-left transition hover:-translate-y-1 hover:border-violet-300/40 hover:bg-white/10"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-auto w-full"
                      />

                      {image.caption ? (
                        <span className="block p-4 text-xs leading-relaxed text-slate-400">
                          {image.caption}
                        </span>
                      ) : null}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {activeImage
        ? createPortal(
            <div
              className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-950/95 px-4 py-6 backdrop-blur-md md:px-8"
              onClick={closeModal}
            >
              <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col">
                <div className="sticky top-0 z-10 mb-4 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/90 p-4 backdrop-blur-md">
                  <div>
                    <p className="text-sm font-semibold text-violet-200">
                      {activeImage.groupTitle}
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      {activeImageNumber} of {images.length}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    {images.length > 1 ? (
                      <>
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation()
                            showPrevious()
                          }}
                          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
                          aria-label="Previous image"
                        >
                          ←
                        </button>

                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation()
                            showNext()
                          }}
                          className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
                          aria-label="Next image"
                        >
                          →
                        </button>
                      </>
                    ) : null}

                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation()
                        closeModal()
                      }}
                      className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white/20"
                    >
                      Close
                    </button>
                  </div>
                </div>

                <div
                  className="rounded-3xl border border-white/10 bg-slate-950/80 p-3"
                  onClick={(event) => event.stopPropagation()}
                >
                  <img
                    src={activeImage.src}
                    alt={activeImage.alt}
                    className="mx-auto h-auto w-auto max-w-full rounded-2xl"
                  />
                </div>

                {activeImage.caption ? (
                  <p
                    className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-relaxed text-slate-300"
                    onClick={(event) => event.stopPropagation()}
                  >
                    {activeImage.caption}
                  </p>
                ) : null}
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}