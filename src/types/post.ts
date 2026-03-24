export type PostStatus = "draft" | "scheduled" | "published" | "archived"

export type SeoFields = {
  metaTitle?: string
  metaDescription?: string
  ogTitle?: string
  ogDescription?: string
  ogImageUrl?: string
  canonicalUrl?: string
  noindex?: boolean
}

export type ParagraphBlock = {
  type: "paragraph"
  data: { text: string }
}

export type HeadingBlock = {
  type: "heading"
  data: {
    level: "h2" | "h3" | "h4"
    text: string
  }
}

export type ImageBlock = {
  type: "image"
  data: {
    mediaId: string
    url: string
    mimeType: string
    alt?: string
    caption?: string
    width?: number
    height?: number
  }
}

export type GalleryBlock = {
  type: "gallery"
  data: {
    layout: "grid" | "carousel" | "masonry"
    images: Array<{
      mediaId: string
      url: string
      mimeType: string
      alt?: string
      caption?: string
      width?: number
      height?: number
    }>
  }
}

export type FileBlock = {
  type: "file"
  data: {
    mediaId: string
    url: string
    fileName: string
    mimeType: string
    size?: number
    title?: string
    caption?: string
  }
}

export type AudioBlock = {
  type: "audio"
  data: {
    mediaId: string
    url: string
    mimeType: string
    title?: string
    caption?: string
    duration?: number
  }
}

export type VideoBlock = {
  type: "video"
  data: {
    mediaId: string
    url: string
    mimeType: string
    posterUrl?: string
    title?: string
    caption?: string
    width?: number
    height?: number
    duration?: number
  }
}

export type CodeBlock = {
  type: "code"
  data: {
    language?: string
    code: string
  }
}

export type QuoteBlock = {
  type: "quote"
  data: {
    text: string
    by?: string
  }
}

export type CalloutBlock = {
  type: "callout"
  data: {
    tone: "info" | "success" | "warning" | "danger"
    text: string
  }
}

export type DividerBlock = {
  type: "divider"
  data?: {}
}

export type ListBlock = {
  type: "list"
  data: {
    style: "ordered" | "unordered"
    items: string[]
  }
}

export type EmbedBlock = {
  type: "embed"
  data: {
    provider: "youtube" | "vimeo" | "spotify" | "loom" | "codepen" | "generic"
    url: string
    title?: string
    caption?: string
  }
}

export type PostContentBlock =
  | ParagraphBlock
  | HeadingBlock
  | ImageBlock
  | GalleryBlock
  | FileBlock
  | AudioBlock
  | VideoBlock
  | CodeBlock
  | QuoteBlock
  | CalloutBlock
  | DividerBlock
  | ListBlock
  | EmbedBlock

export type PostSummary = {
  _id: string
  tenantId: string
  title: string
  slug: string
  excerpt?: string
  status: PostStatus
  publishedAt: string | null
  scheduledFor?: string | null
  tags: string[]
  coverImageUrl: string | null
  seo?: SeoFields
  isFeatured: boolean
  featuredRank: number
  featuredExpiresAt: string | null
  createdBy: string
  updatedBy: string
  createdAt: string
  updatedAt: string
}

export type PostDetail = PostSummary & {
  content: PostContentBlock[]
}

export type CreatePostRequest = {
  title: string
  slug: string
  excerpt?: string
  content?: PostContentBlock[]
  tags?: string[]
  coverImageUrl?: string
  isFeatured?: boolean
  featuredRank?: number
  featuredExpiresAt?: string
  seo?: SeoFields
  status?: "draft" | "published"
  scheduledFor?: string
}

export type UpdatePostRequest = Partial<Omit<CreatePostRequest, "status" | "scheduledFor">>