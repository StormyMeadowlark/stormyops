import type { PostDetail, PostSummary } from "@/types/post"

export const mockPostSummaries: PostSummary[] = [
  {
    _id: "post_1",
    tenantId: "stormyops",
    title: "Building the StormyOps CMS",
    slug: "building-the-stormyops-cms",
    excerpt: "A contract-first approach to building the CMS frontend.",
    status: "draft",
    publishedAt: null,
    scheduledFor: null,
    tags: ["cms", "frontend"],
    coverImageUrl: null,
    seo: {
      metaTitle: "Building the StormyOps CMS",
      metaDescription: "A contract-first CMS frontend build.",
      noindex: false,
    },
    isFeatured: false,
    featuredRank: 0,
    featuredExpiresAt: null,
    createdBy: "user_1",
    updatedBy: "user_1",
    createdAt: "2026-03-14T10:00:00.000Z",
    updatedAt: "2026-03-14T12:00:00.000Z",
  },
  {
    _id: "post_2",
    tenantId: "stormyops",
    title: "Shipping the Admin Media Flow",
    slug: "shipping-the-admin-media-flow",
    excerpt: "Presign, upload, create record.",
    status: "published",
    publishedAt: "2026-03-10T15:00:00.000Z",
    scheduledFor: null,
    tags: ["media", "uploads"],
    coverImageUrl: null,
    seo: {
      metaTitle: "Shipping the Admin Media Flow",
      metaDescription: "Presign upload flow for StormyOps.",
      noindex: false,
    },
    isFeatured: true,
    featuredRank: 1,
    featuredExpiresAt: null,
    createdBy: "user_1",
    updatedBy: "user_1",
    createdAt: "2026-03-09T10:00:00.000Z",
    updatedAt: "2026-03-10T15:00:00.000Z",
  },
  {
    _id: "post_3",
    tenantId: "stormyops",
    title: "Post Scheduled Example",
    slug: "post-scheduled-example",
    excerpt: "Testing scheduled state in the admin UI.",
    status: "scheduled",
    publishedAt: null,
    scheduledFor: "2026-03-18T15:00:00.000Z",
    tags: ["scheduling"],
    coverImageUrl: null,
    seo: {
      noindex: false,
    },
    isFeatured: false,
    featuredRank: 0,
    featuredExpiresAt: null,
    createdBy: "user_1",
    updatedBy: "user_1",
    createdAt: "2026-03-13T10:00:00.000Z",
    updatedAt: "2026-03-14T08:30:00.000Z",
  },
]

export const mockPostDetail: PostDetail = {
  ...mockPostSummaries[0],
  content: [
    {
      type: "heading",
      data: {
        level: "h2",
        text: "Why this matters",
      },
    },
    {
      type: "paragraph",
      data: {
        text: "The UI should stabilize before real fetch logic is introduced.",
      },
    },
  ],
}