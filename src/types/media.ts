export type MediaKind = "image" | "document" | "audio" | "video"
export type MediaStatus = "pending" | "ready" | "failed" | "deleted"

export type MediaItem = {
  _id: string
  tenantId: string
  kind: MediaKind
  status: MediaStatus
  fileName: string
  originalFileName: string | null
  displayName: string | null
  mimeType: string
  extension: string | null
  size: number
  storageProvider: "local" | "s3" | "r2" | "do-spaces"
  storageKey: string
  url: string
  width: number | null
  height: number | null
  duration: number | null
  defaultAlt: string | null
  defaultCaption: string | null
  uploadedBy: string
  deletedAt: string | null
  deletedBy: string | null
  createdAt: string
  updatedAt: string
}

export type ListMediaParams = {
  kind?: MediaKind
  status?: MediaStatus
  q?: string
  page?: number
  limit?: number
}

export type UpdateMediaRequest = {
  displayName?: string
  defaultAlt?: string | null
  defaultCaption?: string | null
}

export type DeleteMediaResponse = {
  ok: true
  deleted: true
}

export type PurgeMediaResponse = {
  ok: true
  purged: true
}

export type CreateMediaUploadRequest = {
  fileName: string
  mimeType: string
  size: number
}

export type CreateMediaUploadResponse = {
  uploadUrl: string
  expiresIn: number
  file: {
    kind: "image" | "document" | "audio" | "video"
    fileName: string
    mimeType: string
    size: number
    extension: string | null
    storageProvider: "do-spaces"
    storageKey: string
    url: string
  }
}

export type CreateMediaRequest = {
  kind: "image" | "document" | "audio" | "video"
  fileName: string
  originalFileName?: string
  displayName?: string
  mimeType: string
  extension?: string | null
  size?: number
  storageProvider?: "do-spaces"
  storageKey: string
  url: string
  width?: number
  height?: number
  duration?: number
  defaultAlt?: string
  defaultCaption?: string
}